# scripts/import_students.py
"""
EduRobot 5.0 - Tool nhập danh sách học sinh tự động
Hỗ trợ đọc từ các file Excel (.xlsx), CSV (.csv) hoặc danh sách text.
Tự động sinh email không dấu, mật khẩu mặc định (123456), chuẩn hóa ngày sinh.
"""

import os
import sys
import re
import json
import unicodedata
from datetime import datetime

# Đảm bảo in tiếng Việt trên console Windows không lỗi
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

try:
    import openpyxl
except ImportError:
    openpyxl = None


def remove_accents(input_str: str) -> str:
    """Chuyển đổi chuỗi tiếng Việt có dấu thành không dấu và chuẩn hóa chữ cái."""
    if not input_str:
        return ""
    # Chuyển chữ Đ / đ đặc thù trong tiếng Việt
    s = input_str.replace("Đ", "D").replace("đ", "d")
    # Tách dấu Unicode
    nfkd_form = unicodedata.normalize('NFKD', s)
    s = "".join([c for c in nfkd_form if not unicodedata.combining(c)])
    # Xóa ký tự đặc biệt, giữ lại chữ cái và số
    s = re.sub(r'[^a-zA-Z0-9]', '', s)
    return s.lower()


def generate_student_email(name: str, student_class: str, domain: str = "edurobot.app") -> str:
    """Tạo email chuẩn cho học sinh: [tenkhongdau][lopkhongdau]@[domain]"""
    clean_name = remove_accents(name)
    clean_class = remove_accents(student_class)
    return f"{clean_name}{clean_class}@{domain}"


def format_dob(val) -> str:
    """Chuẩn hóa ngày sinh sang dạng dd/mm/yyyy"""
    if val is None:
        return ""
    if isinstance(val, (datetime, )):
        return val.strftime("%d/%m/%Y")
    val_str = str(val).strip()
    if not val_str or val_str.lower() in ["none", "nan", "n/a", ""]:
        return ""
    # Xử lý chuỗi có dạng yyyy-mm-dd
    m = re.match(r'^(\d{4})[-/](\d{1,2})[-/](\d{1,2})', val_str)
    if m:
        return f"{int(m.group(3)):02d}/{int(m.group(2)):02d}/{m.group(1)}"
    # Xử lý chuỗi dạng dd/mm/yyyy
    m = re.match(r'^(\d{1,2})[-/](\d{1,2})[-/](\d{4})', val_str)
    if m:
        return f"{int(m.group(1)):02d}/{int(m.group(2)):02d}/{m.group(3)}"
    return val_str


def parse_excel_file(file_path: str, default_school: str = "Tiểu học Đỗ Văn Nại", default_class: str = None) -> list:
    """Đọc và trích xuất danh sách học sinh từ file Excel (.xlsx)"""
    if not openpyxl:
        raise ImportError("Cần cài đặt openpyxl để đọc file Excel: pip install openpyxl")

    wb = openpyxl.load_workbook(file_path, data_only=True)
    students = []

    # Thử suy ra tên lớp từ tên file nếu có (vd: Danh_sach_hoc_sinh (5-1).xlsx -> 5/1)
    file_class = default_class
    if not file_class:
        match = re.search(r'\(?([1-5])[-_/](\d+)\)?', os.path.basename(file_path))
        if match:
            file_class = f"{match.group(1)}/{match.group(2)}"

    for sheet in wb.worksheets:
        rows = list(sheet.iter_rows(values_only=True))
        if not rows:
            continue

        # Tìm dòng tiêu đề cột
        header_row_idx = -1
        col_indices = {
            "stt": -1,
            "name": -1,
            "first_name": -1,
            "last_name": -1,
            "dob": -1,
            "gender": -1,
            "class": -1,
            "school": -1
        }

        for idx, row in enumerate(rows):
            row_str = " ".join([str(c).lower() for c in row if c is not None])
            if any(k in row_str for k in ["họ và tên", "họ tên", "tên học sinh", "họ đệm"]):
                header_row_idx = idx
                for c_idx, cell in enumerate(row):
                    if cell is None:
                        continue
                    c_text = str(cell).strip().lower()
                    if c_text in ["stt", "số tt", "số thứ tự"]:
                        col_indices["stt"] = c_idx
                    elif any(c_text == k for k in ["họ và tên", "họ tên", "họ tên học sinh", "tên học sinh"]):
                        col_indices["name"] = c_idx
                    elif any(c_text == k for k in ["họ và chữ lót", "họ lót", "họ đệm", "họ"]):
                        col_indices["last_name"] = c_idx
                    elif any(c_text == k for k in ["tên", "tên gọi"]):
                        col_indices["first_name"] = c_idx
                    elif any(c_text == k for k in ["ngày sinh", "ngaysinh", "ngày tháng năm sinh", "ns"]):
                        col_indices["dob"] = c_idx
                    elif any(c_text == k for k in ["nữ", "giới tính", "phái", "nam/nữ"]):
                        col_indices["gender"] = c_idx
                    elif any(c_text == k for k in ["lớp", "class", "tên lớp"]):
                        col_indices["class"] = c_idx
                    elif any(c_text == k for k in ["trường", "school", "trường học"]):
                        col_indices["school"] = c_idx
                break

        if header_row_idx == -1:
            header_row_idx = 0

        # Đọc từng dòng học sinh
        for r_idx in range(header_row_idx + 1, len(rows)):
            row = rows[r_idx]
            if not row or all(c is None for c in row):
                continue

            full_name = ""
            if col_indices["name"] != -1 and row[col_indices["name"]]:
                full_name = str(row[col_indices["name"]]).strip()
            elif col_indices["last_name"] != -1 and col_indices["first_name"] != -1:
                last = str(row[col_indices["last_name"]]).strip() if row[col_indices["last_name"]] else ""
                first = str(row[col_indices["first_name"]]).strip() if row[col_indices["first_name"]] else ""
                full_name = f"{last} {first}".strip()

            # Bỏ qua nếu là học sinh đã chuyển đi
            row_text = " ".join([str(c).lower() for c in row if c is not None])
            if "chuyển đi" in row_text:
                continue

            # Bỏ qua dòng nếu không có tên hoặc tên là số/tiêu đề
            if not full_name or full_name.isdigit() or len(full_name) < 2:
                continue

            dob_val = row[col_indices["dob"]] if col_indices["dob"] != -1 and col_indices["dob"] < len(row) else ""
            dob = format_dob(dob_val)

            gender = "N/A"
            if col_indices["gender"] != -1 and col_indices["gender"] < len(row) and row[col_indices["gender"]]:
                g_val = str(row[col_indices["gender"]]).strip().lower()
                if g_val in ["x", "nữ", "nu", "1", "female"]:
                    gender = "Nữ"
                elif g_val in ["nam", "male", "0"]:
                    gender = "Nam"

            student_class = file_class or "5/1"
            if col_indices["class"] != -1 and col_indices["class"] < len(row) and row[col_indices["class"]]:
                student_class = str(row[col_indices["class"]]).strip()

            school = default_school
            if col_indices["school"] != -1 and col_indices["school"] < len(row) and row[col_indices["school"]]:
                school = str(row[col_indices["school"]]).strip()

            email = generate_student_email(full_name, student_class)

            # Đảm bảo email duy nhất
            base_email = email
            counter = 1
            existing_emails = [st["email"] for st in students]
            while email in existing_emails:
                counter += 1
                name_part, domain_part = base_email.split("@")
                email = f"{name_part}{counter}@{domain_part}"

            students.append({
                "stt": len(students) + 1,
                "name": full_name,
                "dob": dob,
                "studentClass": student_class,
                "school": school,
                "email": email,
                "tempPassword": "123456",
                "approved": True,
                "role": "student",
                "gender": gender
            })

    return students


def parse_raw_text(text: str, default_class: str = "5/1", default_school: str = "Tiểu học Đỗ Văn Nại") -> list:
    """Đọc danh sách học sinh từ chuỗi text dạng từng dòng: [STT] [Họ và tên] [Ngày sinh] [Giới tính]"""
    lines = text.strip().split("\n")
    students = []
    
    for line in lines:
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        
        # Bỏ qua dòng tiêu đề nếu có
        if any(h in line.lower() for h in ["họ và tên", "họ tên", "danh sách"]):
            continue
            
        parts = [p.strip() for p in re.split(r'[\t,|]', line) if p.strip()]
        if not parts:
            continue
            
        # Thử đoán format: [STT, Name, DOB, Gender] hoặc [Name, DOB] hoặc [Name]
        name = ""
        dob = ""
        gender = "N/A"
        st_class = default_class
        
        if len(parts) == 1:
            name = parts[0]
        elif len(parts) >= 2:
            if parts[0].isdigit():
                name = parts[1]
                if len(parts) >= 3:
                    dob = format_dob(parts[2])
                if len(parts) >= 4:
                    gender = parts[3]
                if len(parts) >= 5:
                    st_class = parts[4]
            else:
                name = parts[0]
                dob = format_dob(parts[1])
                if len(parts) >= 3:
                    gender = parts[2]
                if len(parts) >= 4:
                    st_class = parts[3]
                    
        # Loại bỏ số đầu tên nếu còn sót
        name = re.sub(r'^\d+[\.\-\s]+', '', name).strip()
        if not name or len(name) < 2:
            continue
            
        email = generate_student_email(name, st_class)
        students.append({
            "stt": len(students) + 1,
            "name": name,
            "dob": dob,
            "studentClass": st_class,
            "school": default_school,
            "email": email,
            "tempPassword": "123456",
            "approved": True,
            "role": "student",
            "gender": gender
        })
        
    return students


def save_student_data(students_list: list, root_dir: str = "."):
    """Lưu danh sách học sinh vào students_data.json và data/students_data.json"""
    for idx, s in enumerate(students_list):
        s["stt"] = idx + 1

    target_paths = [
        os.path.join(root_dir, "students_data.json"),
        os.path.join(root_dir, "data", "students_data.json"),
        os.path.join(root_dir, "dist", "students_data.json"),
        os.path.join(root_dir, "dist", "data", "students_data.json")
    ]

    for p in target_paths:
        d = os.path.dirname(p)
        if d:
            os.makedirs(d, exist_ok=True)
        with open(p, "w", encoding="utf-8") as f:
            json.dump(students_list, f, ensure_ascii=False, indent=2)
        print(f"✅ Đã ghi thành công {len(students_list)} học sinh vào: {p}")


if __name__ == "__main__":
    import glob
    print("=" * 60)
    print("🎓 EDUROBOT 5.0 - CÔNG CỤ NHẬP DANH SÁCH HỌC SINH")
    print("=" * 60)
    
    if len(sys.argv) > 1:
        args = sys.argv[1:]
        all_students = []
        
        if args[0] == "--all":
            # Tự động quét toàn bộ file Excel trong thư mục gốc
            found_files = glob.glob("Danh_sach_hoc_sinh*.xlsx") + glob.glob("*.xlsx")
            xlsx_files = sorted(list(set(found_files)))
            # Loại bỏ các file tạm của Excel
            xlsx_files = [f for f in xlsx_files if not os.path.basename(f).startswith("~$")]
            print(f"🔍 Tìm thấy {len(xlsx_files)} file Excel: {xlsx_files}")
            for f in xlsx_files:
                print(f"  -> Đang đọc file: {f}...")
                all_students.extend(parse_excel_file(f))
        else:
            for f in args:
                if os.path.exists(f):
                    print(f"  -> Đang đọc file: {f}...")
                    all_students.extend(parse_excel_file(f))
                else:
                    print(f"  ⚠️ Cảnh báo: Không tìm thấy file {f}")
                    
        if all_students:
            save_student_data(all_students)
            print(f"\n🎉 Hoàn thành! Đã nhập tổng cộng {len(all_students)} học sinh.")
        else:
            print("❌ Không có học sinh nào được trích xuất.")
    else:
        print("Hướng dẫn sử dụng:")
        print("  1. Nhập từ 1 file Excel:    python scripts/import_students.py <duong_dan_file.xlsx>")
        print("  2. Nhập nhiều file Excel:  python scripts/import_students.py file1.xlsx file2.xlsx file3.xlsx")
        print("  3. Tự động đọc tất cả file: python scripts/import_students.py --all")
        print("  4. Hoặc gửi trực tiếp danh sách dạng văn bản/Excel để AI import tự động.")

