# Hướng dẫn Thiết kế Đặt tính Số thập phân (Math Vertical Calculations Guide)

Tài liệu này cung cấp các tiêu chuẩn thiết kế và mã mẫu (template) chuẩn hóa cho các phép tính đặt dọc (Cộng, Trừ, Nhân, Chia số thập phân) trên hệ thống EduRobot.

---

## I. Nguyên tắc chung (General Design Rules)

1. **Khóa cứng lưới CSS Grid (Pixel-Perfect Alignment):**
   * Bắt buộc dùng `style="grid-template-columns: ..."` với đơn vị `px` cố định cho từng cột.
   * Kích thước chuẩn:
     * Chữ số, ô nhập liệu: `40px` (để gõ số rõ ràng trên màn hình nhỏ).
     * Dấu phẩy `,` hoặc dấu chấm `.`: `16px` (hoặc `12px` tùy mật độ).
     * Dấu phép tính (`+`, `-`, `x`): `24px` hoặc `28px`.
     * Đường kẻ ngăn cách dọc (phép chia): sử dụng border của cột lưới.

2. **Style Ô nhập liệu (`<input>`):**
   * Luôn áp dụng thuộc tính inline: `style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;"` để ghi đè CSS mặc định.
   * Class khuyến nghị: `w-10 h-10 border border-slate-800 rounded-lg text-center font-black p-0 bg-[#fef9e7] text-blue-700 focus:bg-white focus:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`.

3. **Căn chỉnh thẳng hàng dọc:**
   * Sử dụng thẻ `<span></span>` trống để giữ chỗ cho những cột không có chữ số.
   * Hàng kẻ ngang ngăn cách giữa phép tính và kết quả được thiết kế bằng class `border-b-4 border-slate-800 w-full` trên toàn bộ các phần tử của hàng đó (hoặc tạo một dòng div kẻ riêng).

---

## II. Các Mẫu Thiết kế Chi tiết (Detailed Templates)

### 1. Phép Cộng Số thập phân (Ví dụ: 35,82 + 9,6)
* **Quy tắc:** Dấu phẩy thẳng cột với dấu phẩy. Ô nhập đặt ở kết quả hoặc các vị trí tương tác tùy đề bài.
* **Cấu trúc Lưới:** 6 cột: `[Dấu] [Chục] [Đơn vị] [Phẩy] [Phần mười] [Phần trăm]`
* **Template Lưới CSS:** `style="grid-template-columns: 24px 40px 40px 16px 40px 40px;"`

```html
<div class="grid gap-x-1 gap-y-2 items-center justify-items-center font-mono py-4" style="grid-template-columns: 24px 40px 40px 16px 40px 40px;">
    <!-- Hàng 1: Số bị cộng (35,82) -->
    <span></span>
    <span>3</span>
    <span>5</span>
    <span>,</span>
    <span>8</span>
    <span>2</span>

    <!-- Hàng 2: Số cộng (9,6) kèm dấu cộng -->
    <span class="text-xl font-black text-slate-700">+</span>
    <span></span> <!-- Giữ chỗ hàng chục -->
    <span>9</span>
    <span>,</span>
    <span>6</span>
    <span></span> <!-- Giữ chỗ hàng phần trăm -->

    <!-- Đường kẻ ngang (áp dụng border-b cho tất cả ô hàng 2 hoặc dòng trống) -->
    <span class="border-b-4 border-slate-800 w-full col-span-6 my-1"></span>

    <!-- Hàng kết quả (Học sinh điền) -->
    <span></span>
    <input type="text" id="ans-add-r3c1" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
    <input type="text" id="ans-add-r3c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
    <input type="text" id="ans-add-r3c3" class="w-4 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder=",">
    <input type="text" id="ans-add-r3c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
    <input type="text" id="ans-add-r3c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
</div>
```

---

### 2. Phép Trừ Số thập phân (Ví dụ: 48,2 - 9,56)
* **Quy tắc:** Thêm số 0 ảo hoặc ô nhập trống ở các phần thập phân khuyết để học sinh dễ mượn/trừ.
* **Cấu trúc Lưới:** 6 cột: `[Dấu] [Chục] [Đơn vị] [Phẩy] [Phần mười] [Phần trăm]`
* **Template Lưới CSS:** `style="grid-template-columns: 24px 40px 40px 16px 40px 40px;"`

```html
<div class="grid gap-x-1 gap-y-2 items-center justify-items-center font-mono py-4" style="grid-template-columns: 24px 40px 40px 16px 40px 40px;">
    <!-- Hàng 1: Số bị trừ (48,20) -->
    <span></span>
    <span>4</span>
    <span>8</span>
    <span>,</span>
    <span>2</span>
    <span class="text-slate-300">0</span> <!-- Số 0 nhạt hỗ trợ tính toán -->

    <!-- Hàng 2: Số trừ (9,56) -->
    <span class="text-xl font-black text-slate-700">-</span>
    <span></span>
    <span>9</span>
    <span>,</span>
    <span>5</span>
    <span>6</span>

    <!-- Đường kẻ ngăn cách -->
    <span class="border-b-4 border-slate-800 w-full col-span-6 my-1"></span>

    <!-- Hàng kết quả -->
    <span></span>
    <input type="text" id="ans-sub-r3c1" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
    <input type="text" id="ans-sub-r3c2" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
    <input type="text" id="ans-sub-r3c3" class="w-4 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder=",">
    <input type="text" id="ans-sub-r3c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
    <input type="text" id="ans-sub-r3c5" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
</div>
```

---

### 3. Phép Nhân Số thập phân (Ví dụ: 3,25 x 1,4)
* **Quy tắc:**
  * Thừa số xếp thẳng lề phải giống phép nhân số tự nhiên.
  * Tích riêng thứ nhất và Tích riêng thứ hai lùi hàng tương ứng.
  * Dấu phẩy ở tích chung được xác định bằng cách đếm tổng số chữ số phần thập phân của hai thừa số.
* **Cấu trúc Lưới:** 6 cột: `[Dấu] [ ] [ ] [ ] [ ] [ ]`
* **Template Lưới CSS:** `style="grid-template-columns: 24px 40px 40px 40px 40px 40px;"`

```html
<div class="grid gap-x-1 gap-y-2 items-center justify-items-center font-mono py-4" style="grid-template-columns: 24px 40px 40px 40px 40px 40px;">
    <!-- Thừa số 1: 3,25 -->
    <span></span>
    <span></span>
    <span>3</span>
    <span class="text-sm">,</span>
    <span>2</span>
    <span>5</span>

    <!-- Thừa số 2: 1,4 -->
    <span class="text-xl font-black text-slate-700">×</span>
    <span></span>
    <span></span>
    <span></span>
    <span>1</span>
    <span>4</span>

    <!-- Đường gạch ngang thừa số -->
    <span class="border-b-4 border-slate-800 w-full col-span-6 my-1"></span>

    <!-- Tích riêng thứ nhất (3,25 x 4 = 1300) -->
    <span></span>
    <span></span>
    <span>1</span>
    <span>3</span>
    <span>0</span>
    <span>0</span>

    <!-- Tích riêng thứ hai (3,25 x 1 = 325 - lùi 1 cột sang trái) -->
    <span></span>
    <span>3</span>
    <span>2</span>
    <span>5</span>
    <span></span>
    <span></span>

    <!-- Đường gạch ngang tích riêng -->
    <span class="border-b-2 border-slate-800 w-full col-span-6 my-1"></span>

    <!-- Tích chung: 4,550 -->
    <span></span>
    <span></span>
    <span>4</span>
    <span class="text-sm">,</span>
    <span>5</span>
    <span>5</span>
    <span>0</span>
</div>
```

---

### 4. Phép Chia Số thập phân (Ví dụ: 5,28 : 4 = 1,32)
* **Quy tắc:**
  * Có vách chia dọc (`border-r-4`) tách biệt giữa Số bị chia + Số dư trung gian (bên trái) và Số chia + Thương (bên phải).
  * Hàng ngang phân tách Số chia và Thương dùng `border-b-4`.
  * Gióng cột tuyệt đối theo chiều dọc cho từng số dư.
* **Cấu trúc Lưới (Ví dụ c của Tiết 47):** 9 cột
  * Trái (Số bị chia & Số dư): Cột 1 (Đơn vị), Cột 2 (Phẩy), Cột 3 (Phần mười), Cột 4 (Phần trăm).
  * Giữa: Cột 5 (Đường dọc ngăn cách).
  * Phải (Số chia & Thương): Cột 6 (Chữ số 1), Cột 7 (Phẩy), Cột 8 (Chữ số 2), Cột 9 (Chữ số 3).
* **Template Lưới CSS:** `style="grid-template-columns: 40px 16px 40px 40px 24px 40px 16px 40px 40px;"`

```html
<div class="grid gap-x-1 gap-y-2 items-center justify-items-center font-mono py-8 bg-white border border-slate-100 rounded-2xl w-full" style="grid-template-columns: 40px 16px 40px 40px 24px 40px 16px 40px 40px;">
    <!-- Row 1: Số bị chia | Số chia -->
    <span class="text-2xl md:text-3xl font-black">5</span>
    <span class="text-2xl md:text-3xl font-black">,</span>
    <span class="text-2xl md:text-3xl font-black">2</span>
    <span class="text-2xl md:text-3xl font-black">8</span>
    <span class="border-r-4 border-slate-800 h-full w-0"></span> <!-- Đường chia dọc -->
    <span class="text-2xl md:text-3xl font-black border-b-4 border-slate-800">4</span> <!-- Số chia -->
    <span></span>
    <span></span>
    <span></span>

    <!-- Row 2: Số dư 1 & Thương (1,32) -->
    <input type="text" id="ans-div-r2c1" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
    <span></span>
    <input type="text" id="ans-div-r2c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
    <span></span>
    <span class="border-r-4 border-slate-800 h-full w-0"></span>
    <input type="text" id="ans-div-q1" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="1">
    <input type="text" id="ans-div-qp" class="w-4 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder=",">
    <input type="text" id="ans-div-q2" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
    <input type="text" id="ans-div-q3" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">

    <!-- Row 3: Số dư trung gian tiếp theo (Hạ 8) -->
    <span></span>
    <span></span>
    <input type="text" id="ans-div-r3c3" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
    <input type="text" id="ans-div-r3c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="?">
    <span class="border-r-4 border-slate-800 h-full w-0"></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>

    <!-- Row 4: Số dư cuối cùng (0) -->
    <span></span>
    <span></span>
    <span></span>
    <input type="text" id="ans-div-r4c4" class="w-10 h-10 border border-slate-800 rounded-lg text-center bg-[#fef9e7] text-blue-700" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;" placeholder="0">
    <span class="border-r-4 border-slate-800 h-full w-0"></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
```

---

*Tài liệu này được hệ thống tự động ghi nhớ và áp dụng cho các Tiết đặt tính tiếp theo.*
