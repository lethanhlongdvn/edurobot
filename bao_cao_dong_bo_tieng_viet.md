# BÁO CÁO PHÂN TÍCH SỰ ĐỒNG BỘ THIẾT KẾ MÔN TIẾNG VIỆT
**Hệ thống Học tập EduRobot Lớp 5**
*Ngày thực hiện: 23/06/2026*

---

## I. Phân tích các Tab chức năng ("Tìm hiểu bài", "Luyện tập", "Củng cố")

### 1. Những điểm ĐÃ ĐỒNG BỘ
* **Cơ chế kích hoạt tự động (Tab Engine):** Hệ thống định vị tab chính trong `LessonCore.js` (dòng 104-118) tự động quét dữ liệu bài học để hiển thị 3 tab cốt lõi:
  * **Tìm hiểu bài (📖):** Kích hoạt khi có `lesson.content` hoặc tab `study`.
  * **Luyện tập (✍️):** Kích hoạt khi có `lesson.practice` hoặc tab `practice`.
  * **Củng cố (🏆):** Kích hoạt khi bài học có `quizPool`, `quizFile`, hoặc tab `quiz`.
* **Giao diện thống nhất:** Thanh điều hướng tab sử dụng chung class CSS cho cả môn Toán và Tiếng Việt, hỗ trợ Bo tròn góc lớn (Bento style), hiệu ứng Hover mượt mà, và tự động thu gọn thanh cuộn ngang khi hiển thị trên điện thoại.

### 2. Những điểm CHƯA ĐỒNG BỘ
* **Thiếu hụt dữ liệu Tab ở bài cũ:** Một số bài Tiếng Việt cũ hoặc bài chuyển đổi từ phiên bản trước chưa khai báo đầy đủ các trường `practice` hoặc `quizPool`. Kết quả là trên giao diện chỉ hiện 1 hoặc 2 tab (ví dụ: chỉ có "Tìm hiểu bài" và "Củng cố", thiếu hẳn phần thực hành "Luyện tập").
* **Sai lệch cấu trúc dữ liệu Quiz:** 
  * Môn Toán và Quiz Engine chuẩn của hệ thống sử dụng định dạng `quizPool` với cấu trúc khóa: `{ question, options, answer }`.
  * Một số bài Tiếng Việt cũ vẫn lưu dưới định dạng `tabs.quiz.questions` với cấu trúc khóa: `{ q, a, c }` (q: câu hỏi, a: các lựa chọn, c: đáp án đúng).
  * *Hệ quả:* Router phải viết code chuyển đổi thủ công tại runtime (dòng 761-770 trong `router.js`), gây tốn tài nguyên và tăng độ phức tạp của mã nguồn.
* **Tên Tab chưa chuẩn hóa:** Một số bài cũ vẫn dùng định dạng tab là `lesson` thay vì `study`/`content`, khiến Router phải duy trì các điều kiện lọc fallback cũ.

---

## II. Phân tích cỡ chữ (Font Sizes) và Khả năng hiển thị Responsive (TV vs Phone)

### 1. Những điểm ĐÃ ĐỒNG BỘ
* **Tiêu đề bài học:** Sử dụng thuật toán tự động điều chỉnh cỡ chữ tùy theo độ dài của tiêu đề trong `LessonCore.js`:
  * Tiêu đề dài > 60 ký tự: `text-xl md:text-2xl`
  * Tiêu đề dài > 35 ký tự: `text-2xl md:text-3xl`
  * Tiêu đề ngắn: `text-3xl md:text-5xl`
  * Đảm bảo tiêu đề cực lớn trên TV/máy chiếu để học sinh ngồi xa nhìn rõ, nhưng tự động thu nhỏ trên điện thoại để tránh tràn viền.
* **Khung mục tiêu & Sơ đồ Bento:** Các phần nội dung bài viết mới (như Bài 91) đều dùng đơn vị font responsive (`text-2xl md:text-5xl` cho đề mục, `text-lg md:text-xl` cho danh sách/nội dung), hiển thị hoàn hảo trên cả hai môi trường trình chiếu lớp học và thiết bị cá nhân.
* **Công thức & Bài tập tương tác:** Các ô kéo thả (Drag & Drop) và điền từ đã chuyển đổi sang font size `text-lg md:text-xl font-bold` giúp học sinh dễ thao tác và nhìn rõ.

### 2. Những điểm CHƯA ĐỒNG BỘ
* **Hardcoded cỡ chữ cố định ở bài cũ:** Một số bài tập thực hành Tiếng Việt cũ (`js/legacy-vietnamese/interactive-exercises.js`) sử dụng mã HTML tĩnh với style cỡ chữ cứng (như `style="font-size:1.4rem;"` hoặc các class Tailwind cố định không có tiền tố `md:`). Khi chiếu trên màn hình TV 4K, các chữ này quá nhỏ; ngược lại khi xem trên điện thoại nhỏ, chúng dễ bị đẩy lệch dòng hoặc tràn khung chứa.
* **Ô nhập liệu văn bản (Textarea/Input):** Một số bài tập tự luận viết văn sử dụng kích thước font nhập liệu mặc định của trình duyệt, rất nhỏ và khó nhìn khi học sinh gõ trên điện thoại, đồng thời không hỗ trợ zoom tự động khi tương tác.

---

## III. Phân tích theo các quy tắc hệ thống (System Rules)

### 1. Quy tắc cấm màu Tím (Purple Ban)
* **Đã đồng bộ:** Phần lớn giao diện bài học Tiếng Việt đã chuyển sang tông màu xanh chủ đạo (`blue`, `sky`, `indigo`), tuân thủ tốt quy tắc không dùng màu tím.
* **Chưa đồng bộ:** Trên trang Dashboard giáo viên môn Tiếng Việt ([teacher-tiengviet.html](file:///c:/Users/Admin/Desktop/edurobot/pages/teacher-tiengviet.html)), bento chỉ số **"Điểm TB Lớp" (Stats Bento dòng 105)** vẫn sử dụng tông màu tím vi phạm quy tắc:
  ```html
  <div class="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-purple-100/50 border border-purple-50 ...">
      <div class="absolute -right-4 -top-4 w-24 h-24 bg-purple-50 ..."></div>
      <div class="text-purple-500 ...">
  ```
  *Cần sửa thành tông màu xanh dương (`blue/indigo/sky`) hoặc màu ngọc bích (`teal/emerald`).*

### 2. Quy tắc củng cố (Quiz Pool 15 câu, ngẫu nhiên 10 câu)
* **Đã đồng bộ:** Các bài mới soạn (như Bài 91) đã có đủ bộ câu hỏi Quiz Pool phong phú từ 15 câu trở lên, đáp ứng đúng thuật toán lấy ngẫu nhiên 10 câu cho học sinh.
* **Chưa đồng bộ:** Các bài Tiếng Việt cũ chỉ có từ 3 - 5 câu hỏi củng cố hoặc không có Quiz Pool, hệ thống phải tự động chèn dữ liệu giữ chỗ (placeholders), không đảm bảo tính khách quan và đa dạng câu hỏi cho học sinh làm lại nhiều lần.

### 3. Giao thức Nút E (showMathFeedback)
* **Đã đồng bộ:** Hệ thống đã tích hợp hộp phản hồi Modal chung cực kỳ đẹp mắt thông qua hàm `showMathFeedback` trong `router.js`.
* **Chưa đồng bộ:** Một số tương tác Tiếng Việt tự luận cũ vẫn đang gọi hàm AI chấm điểm riêng biệt (`askAI` trong `interactive-exercises.js`) với giao diện thông báo kiểu cũ, chưa tích hợp đồng bộ vào Modal phản hồi chung 5 tham số của hệ thống (gồm lời khen/gợi ý/bài giải chi tiết bằng Tiếng Việt).

---

## IV. Đề xuất Hướng khắc phục & Tối ưu hóa

1. **Chuẩn hóa dữ liệu bài học Tiếng Việt:** Chuyển đổi toàn bộ định dạng trắc nghiệm của các bài cũ từ `{ q, a, c }` sang cấu trúc chuẩn `{ question, options, answer }` để loại bỏ đoạn code convert tạm thời trong `router.js`.
2. **Loại bỏ màu Tím trên Dashboard:** Chuyển đổi màu sắc của Bento chỉ số "Điểm TB Lớp" trong file `teacher-tiengviet.html` sang màu xanh dương (thay `purple` bằng `indigo` hoặc `blue`).
3. **Bổ sung Quiz Pool:** Rà soát và cập nhật thêm các câu hỏi trắc nghiệm củng cố cho các bài cũ để đảm bảo mỗi bài có tối thiểu 15 câu hỏi.
4. **Áp dụng Font Responsive toàn diện:** Thay thế các thuộc tính `style="font-size:..."` cứng trong dữ liệu HTML bài học cũ bằng các class responsive Tailwind như `text-lg md:text-xl`.
