# 📘 Hướng dẫn sử dụng Bộ công cụ Soạn bài Toán (Math Builder)

Chào mừng thầy/cô đến với bộ công cụ soạn bài tập Toán tự động. Công cụ này giúp thầy/cô tạo ra các bài giảng tương tác chuyên nghiệp mà không cần biết lập trình.

---

## 🚀 Khởi động
1. Mở trình duyệt và truy cập: `http://localhost:5173/math-builder.html`
2. **Nạp bài cũ (nếu có):** Bấm nút 📖 **Mở bài cũ** ở góc trên bên phải và chọn file `.js` của tiết học trước để sửa lại nhanh chóng.

---

## 📑 Quy trình 4 bước soạn bài

### Bước 1: Thông tin bài học (Thông tin)
Điền các thông tin cơ bản để hệ thống tự đặt tên file và đường dẫn:
- **Tiết số:** Quan trọng nhất (VD: 145). Hệ thống sẽ dùng số này để tự sinh đường dẫn ảnh/âm thanh.
- **Tuần & Chủ đề:** Hiển thị trên menu bài học.
- **Tiêu đề:** Tên bài giảng (VD: LUYỆN TẬP CHUNG).

### Bước 2: Thiết kế bài tập (Bài tập)
Đây là phần quan trọng nhất. Thầy/cô có thể thêm 7 loại bài tập khác nhau:

| Loại bài tập | Mô tả |
| :--- | :--- |
| **Điền 1 số** | Bài toán có 1 ô nhập đáp án duy nhất. |
| **Đúng / Sai** | Học sinh chọn nút ĐÚNG hoặc SAI. |
| **Trắc nghiệm** | Chọn A, B, C hoặc D. |
| **Điền nhiều ô** | Phù hợp cho bài toán có nhiều bước (VD: Đáp số a, b, c). |
| **Grid phép tính** | Tạo bảng các phép tính hàng dọc/ngang (Số ?). |
| **Chọn 1** | Chọn 1 đáp án đúng từ danh sách nút bấm. |
| **Nhiều phần** | Bài tập phức tạp gồm nhiều câu hỏi nhỏ a, b, c. |

#### 💡 Mẹo chuyên gia:
*   **👯 Nhân bản:** Sử dụng nút "Nhân bản" trên thẻ bài tập để tạo nhanh các câu hỏi tương tự mà không cần nhập lại định dạng.
*   **📐 Công thức Toán:** Sử dụng ký hiệu `$` để viết công thức đẹp. 
    *   VD: Gõ `$x = \sqrt{y^2 + 1}$` sẽ hiển thị thành $x = \sqrt{y^2 + 1}$.
*   **💬 Thầy E tự động:** Thầy E hiện nay đã rất thông minh! Thầy sẽ tự động đưa ra lời khen ngợi khi học sinh làm đúng và hướng dẫn gợi ý khi học sinh làm chưa đúng. **Thầy/cô không cần phải mất thời gian soạn phần này nữa.**
*   **🖼️ Media:** Bấm "Chọn ảnh/âm thanh/video", hệ thống sẽ **tự động cấu hình đường dẫn chuẩn** vào thư mục dự án.

> [!IMPORTANT]
> **Cửa sổ Thầy E:** Khi học sinh bấm nút E, một cửa sổ nổi (Modal) màu trắng chữ xanh sang trọng sẽ hiện ra. Đây là nơi Thầy E làm việc trực tiếp với học sinh.

### 4. Thiết kế & Cá nhân hóa
Mỗi bài tập có phần **🎨 Thiết kế** để thầy/cô chỉnh sửa:
*   **Màu chủ đạo:** Thay đổi màu sắc của các nút bấm và khung.
*   **Cỡ chữ & Độ đậm:** Tùy chỉnh font chữ phù hợp với độ tuổi học sinh.
*   **Bo góc & Shadow:** Làm cho bài tập trông hiện đại và cao cấp hơn.hanh.

### Bước 4: Xuất bản (Xuất file)
Hệ thống sẽ cung cấp 3 nội dung:
1.  **Mã nguồn file JS:** Bấm **TẢI FILE JS** và lưu vào thư mục `js/data/math/{tiết}/index.js`.
2.  **Đăng ký vào Manifest:** Copy dòng mã và dán vào file `js/data/math/manifest.js`.
3.  **Ngân hàng câu hỏi:** Copy dán vào `question_bank.txt` nếu muốn lưu trữ tập trung.

---

## 🛠️ Giải quyết vấn đề

> [!TIP]
> **Ảnh không hiển thị?**
> Hãy kiểm tra xem thầy/cô đã copy file ảnh vào thư mục `public/hinh_anh/toan/toan_tap_2/{tiết}/` chưa. Tên file phải khớp chính xác với tên trong ô nhập liệu.

> [!WARNING]
> **Lưu nháp:** Hệ thống tự động lưu nháp vào trình duyệt. Tuy nhiên, để an toàn, hãy bấm **Lưu nháp** thường xuyên hoặc tải file JS về máy.

---
*Chúc thầy/cô soạn được nhiều bài giảng hay!*
