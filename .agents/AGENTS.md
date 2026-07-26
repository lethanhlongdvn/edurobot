# EduRobot Workspace Customization Rules

## 1. Thiết kế đặt tính cột dọc (Math Vertical Calculations Layout)
Khi thiết kế các bài toán đặt tính rồi tính (phép cộng, trừ, nhân, chia số thập phân hoặc số tự nhiên đặt dọc):
- **Tài liệu Hướng dẫn Mẫu:** Xem chi tiết cấu trúc HTML mẫu cho từng phép toán tại [MATH_VERTICAL_LAYOUT_GUIDE.md](file:///c:/Users/Admin/Desktop/edurobot/.agents/MATH_VERTICAL_LAYOUT_GUIDE.md).
- **Cố định cột lưới tuyệt đối (Pixel-Perfect Alignment):** Không để trình duyệt tự động co giãn cột. Bắt buộc dùng `style="grid-template-columns: ..."` cho phần tử grid để khóa cứng kích thước từng cột (Ví dụ: `24px` cho dấu phép tính, `40px` cho ô nhập và các chữ số, `16px` cho cột dấu phẩy `,`).
- **Khóa kích thước và lề của ô nhập (`<input>`):** Luôn áp dụng inline style `style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;"` để triệt tiêu hoàn toàn đệm `padding: 0.75rem 1rem !important;` thừa của lớp `.ltTrang` / `.math-exercise` định nghĩa trong `index.css`, giúp hiển thị rõ ràng, không bị ẩn hay cắt chữ số khi học sinh gõ.
- **Tiêu đề phép tính (a, b, c, d...):** Sử dụng kích thước chữ rõ ràng `text-lg md:text-2xl font-black text-blue-700` để phục vụ trình chiếu tốt trên màn hình máy chiếu/TV.

## 2. Giao thức đặt tính tự điền (Self-Placement Math Grid)
Khi thiết kế bài toán đặt tính mà học sinh phải tự điền cả số hạng, số cộng và kết quả (như Bài 1):
- **Hộp ô nhập toàn bộ (All-Input Cells):** Tất cả các vị trí số và dấu phẩy ở cả 3 hàng đều được thay bằng ô nhập `<input>` có class `w-10 h-10` (40px) và kiểu dáng giống nhau.
- **Cố định độ rộng cột lưới 40px:** Các cột lưới của các ô nhập phải cùng độ rộng `40px` trong template cột (Ví dụ: `style="grid-template-columns: 24px 40px 40px 40px 40px;"` cho câu a).
- **Căn hàng dọc gióng cột:** Giữ các ô thẳng hàng dọc với nhau (cột chục, cột đơn vị, cột dấu phẩy, cột phần mười, cột phần trăm) bằng cách sử dụng các thẻ `<span></span>` trống giữ chỗ ở đầu hàng thứ nhất và hàng thứ hai.

## 3. Tiêu chuẩn thiết kế giao diện từ OLM (OLM UI/UX Design Standards)
Khi thiết kế giao diện bài học, nút bấm, ô nhập liệu và bảng chọn:
- **Tối ưu hóa ô nhập liệu (Input Optimization):** Ô nhập liệu cần có kích thước lớn, font chữ to rõ ràng, bo góc tròn trịa (`rounded-lg` hoặc `rounded-xl`). Sử dụng trạng thái Focus có viền màu xanh dương nổi bật để học sinh dễ nhận biết vùng đang nhập liệu. Bổ sung cơ chế tự động co giãn chiều rộng (auto-expanding width) dựa trên độ dài của dữ liệu nhập (ví dụ: tự động điều chỉnh `size` của ô nhập theo số lượng ký tự đã nhập hoặc sử dụng container CSS linh hoạt) để tránh việc chữ bị tràn hoặc bị che khuất khi học sinh gõ nhiều ký tự.
- **Hệ màu chủ đạo tối giản (Color Hierarchy):** Sử dụng nền sáng/trắng sạch sẽ làm chủ đạo. Điểm nhấn thương hiệu sử dụng tông xanh dương làm màu tương tác chính (nút bấm, link hành động) và màu xanh lá cây nhạt làm màu bổ trợ. Tuyệt đối không phối nhiều màu sặc sỡ hoặc các màu chói trong cùng một vùng hiển thị.
- **Tạo khoảng thở (Responsive Spacing):** Khoảng cách (margin, padding) giữa các nút bấm, ô nhập và các câu hỏi phải đủ rộng rãi (tối thiểu `padding: 12px` hoặc tương đương) để học sinh dễ dàng nhấp chọn bằng ngón tay trên máy tính bảng hoặc điện thoại mà không bị bấm nhầm.

## 4. Quy tắc chia tab phụ (Exercise Sub-tabs Auto-division Rule)
Khi nhận được yêu cầu "chia tab phụ" cho một bài tập:
- **Tự động phân tích nội dung:** Kiểm tra xem bài tập đó chứa bao nhiêu câu hỏi/nội dung/yêu cầu nhỏ (Ví dụ: câu a, b, c; hoặc phần 1, 2). Số lượng tab phụ được tạo ra bắt buộc phải khớp chính xác với số lượng nội dung nhỏ đó (Ví dụ: bài tập có 3 câu a, b, c thì tự động chia làm 3 tab phụ tương ứng).
- **Giao diện chuyển tab mượt mà:** 
  - Đặt thanh điều hướng tab ở góc trên bên phải hoặc chính giữa tiêu đề bài tập.
  - Sử dụng các lớp CSS tiêu chuẩn (active: màu xanh dương nổi bật `bg-blue-600 text-white shadow`; inactive: chữ xanh nền trong suốt `text-blue-600 hover:bg-blue-100/50`) để hiển thị trạng thái của tab đang chọn.
  - Mỗi tab phụ được bọc trong một thẻ `div` có ID riêng, mặc định ẩn bằng lớp `.hidden` (ngoại trừ tab đầu tiên) và sử dụng hiệu ứng chuyển động nhẹ khi mở (`animate-in fade-in duration-300`).
- **Độc lập và an toàn:** Việc chia tab chỉ thay đổi cách hiển thị trực quan (layout DOM), tuyệt đối giữ nguyên ID của các ô nhập và logic kiểm tra kết quả để không ảnh hưởng đến hệ thống chấm điểm tự động.

## 5. Quy tắc không làm lộ đáp án trong phần gợi ý (No Answer Leaking in Guidance Rule)
Khi soạn thảo hoặc cập nhật nội dung gợi ý (`guidance`) cho các bài tập:
- **Không chứa kết quả cụ thể:** Tuyệt đối không đưa các số liệu tính toán chi tiết, biểu thức toán học đã giải sẵn kết quả (ví dụ: `2 032 - 2 028 = 4`, `3/5 = 6/10`), các đáp án trắc nghiệm chính xác (ví dụ: `Chọn B`, `Hình B`), hoặc chỉ thẳng đáp án đúng.
- **Định hướng phương pháp tư duy:** Nội dung gợi ý phải tập trung vào việc động viên học sinh, nhắc nhở các con kiểm tra kỹ dữ kiện (ví dụ: đếm kỹ lại hình vẽ), hướng dẫn thứ tự thực hiện các bước tính, hoặc nhắc lại mối quan hệ giữa các đơn vị đo ở dạng tổng quát nhằm khuyến khích học sinh tự học và tự tính toán.

## 6. Quy tắc xuống hàng rõ ràng trong cửa sổ phản hồi (Feedback Line Break Rule)
Khi soạn thảo nội dung chuỗi `solution` (bài giải chi tiết hiển thị khi học sinh làm **đúng**) và chuỗi `guidance` (gợi ý hiển thị khi học sinh làm **sai**):
- **Bắt buộc dùng `<br>` để xuống hàng:** Trình duyệt không nhận `\n` làm dấu xuống hàng trong HTML. Tuyệt đối không dùng ký tự `\n` hay `\\n` trong chuỗi JSON để phân tách các ý — thay vào đó phải dùng thẻ `<br>` để tạo khoảng cách dòng gọn gàng, vừa phải.
- **Xuống hàng giữa từng ý/từng câu:** Mỗi phần a), b), c)... và mỗi bước giải phải nằm trên một dòng riêng biệt. Ví dụ chuẩn:
  ```
  "solution": "a) 3/4 = 9/12 > 7/12.<br>b) 8/5 > 8/7.<br>c) 6/5 = 12/10.<br>Chúc mừng em đã giải đúng!"
  ```
- **Lời khen/kết luận tách riêng:** Câu kết thúc (lời khen, lời động viên) phải được tách ra khỏi nội dung giải bằng `<br>` để nổi bật và dễ đọc.
- **Áp dụng cho cả `guidance`:** Nếu nội dung gợi ý có nhiều bước hướng dẫn, cũng phải dùng `<br>` để tách từng bước.

## 7. Quy tắc phạm vi kiểm tra của nút E (Slide-Specific E Button Rule)
Khi thiết kế các trang bài tập (sử dụng class `ltTrang` / slide chuyển trang trong cùng một tiết học):
- **Kiểm tra độc lập theo slide/trang:** Nút E đặt ở trang màn hình nào thì **chỉ được phép kiểm tra và chấm điểm** kết quả của các câu hỏi/ô nhập liệu nằm trên trang màn hình đó.
- **Không kiểm tra gộp cả bài:** Tuyệt đối không thiết kế một nút E duy nhất để chấm điểm chung cho nhiều slide/trang khác nhau. Điều này giúp học sinh hoàn thành trang nào thì kiểm tra ngay kết quả trang đó một cách độc lập và trực quan.

## 8. Tiêu chuẩn thiết kế cửa sổ nổi phản hồi (Math Feedback Modal Layout)
Để tối ưu không gian hiển thị bài giải chi tiết và gợi ý trên mọi độ phân giải màn hình (nhất là khi học sinh dùng máy tính bảng, điện thoại):
- **Không sử dụng nút đóng lớn ở chân modal:** Loại bỏ hoàn toàn nút bấm đóng dạng khối lớn ở phía dưới (như nút "Đã hiểu ạ!"). Thay vào đó, sử dụng một nút tắt dạng dấu "✕" nhỏ, đặt tuyệt đối ở góc trên bên phải để tiết kiệm tối đa diện tích dọc.
- **Ẩn tiêu đề đầu trang:** Ẩn hoàn toàn khối tiêu đề `#modal-header` (như "LỜI KHEN TỪ THẦY E / HỆ THỐNG EDUROBOT 5.0" và icon) để ưu tiên hiển thị nội dung học tập/nhận xét ngay từ đầu.
- **Giới hạn kích thước và bật cuộn dọc:** 
  - Khung chứa chính (`#math-modal-content`) bắt buộc giới hạn chiều cao tối đa không quá `90vh` và có thuộc tính `display: flex; flex-direction: column`.
  - Vùng chứa nội dung (`#modal-body`) được thiết lập thuộc tính cuộn dọc `overflow-y: auto` và co giãn linh hoạt `flex: 1` để hiển thị thanh cuộn mượt mà khi nội dung quá dài.
- **Thu hẹp khoảng cách và đệm (Padding):** Đệm (padding) của hộp thoại thu hẹp lại tối đa (khoảng `1.25rem`) để tối ưu hóa không gian hiển thị.

## 9. Quy ước tên nhân vật trong Sách giáo khoa (Standard Textbook Character Names)
Khi viết đề bài hoặc soạn bài giải liên quan đến các nhân vật minh họa trong Sách giáo khoa, bắt buộc sử dụng chính xác tên gọi của họ theo quy ước sau:
- **Nam**: Bạn nam tóc xanh dương, mặc áo xanh dương, quần xanh dương.
- **Mai**: Bạn nữ đeo bờm tóc màu vàng, mặc áo vàng, váy hồng.
- **Rô-bốt**: Bạn người máy (robot).
- **Việt**: Bạn nam tóc đen, mặc áo xanh lá cây, quần nâu.
- **Mi**: Bạn nữ nhỏ tuổi nhất, tóc buộc hai bên, mặc áo hồng, váy xanh dương.
Tuyệt đối không nhầm lẫn (ví dụ: không viết nhầm Mi thành My) để đảm bảo tính đồng bộ 100% với Sách giáo khoa.

## 10. Quy tắc đảm bảo độ chính xác của nội dung truy vấn AI (AI Query Precision Rule)
Khi sửa chữa, bổ sung hoặc tạo mới bài học:
- **Độ chính xác của dữ liệu và truy vấn:** Mọi nội dung dữ liệu câu hỏi, bài tập, prompt cấu hình gửi lên AI, hay phần `quizPool` đều phải đảm bảo độ chính xác tuyệt đối, khớp với dữ liệu gốc của Sách giáo khoa hoặc yêu cầu thực tế của bài học.
- **Tránh thông tin sai lệch:** Tuyệt đối không đưa các thông tin sai, công thức bị lỗi, hoặc dữ liệu mơ hồ làm AI trả về kết quả sai sót hoặc làm ảnh hưởng đến quá trình truy vấn và chấm điểm tự động.

