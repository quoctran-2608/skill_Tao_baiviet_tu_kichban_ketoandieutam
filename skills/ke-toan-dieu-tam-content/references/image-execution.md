# Image Execution Playbook — Kế Toán Diệu Tâm

Cập nhật: 2026-10-02.

Mục tiêu: khi user bấm/nhắn “OK” sau một bài viết, AI có thể tự tạo đúng bộ ảnh của nền tảng ngay lần đầu, giảm tối đa việc user phải nhắc sửa size, số ảnh, layout, chữ hoặc continuity.

## 1. Trigger và source of truth

Một xác nhận như “OK”, “được”, “làm ảnh”, “tạo ảnh đi”, “tiến hành ảnh” sau bài viết được hiểu là:
- user duyệt nội dung bài;
- user yêu cầu tạo bộ ảnh tương ứng cho nền tảng vừa viết.

Source of truth theo thứ tự:
1. bài viết vừa được duyệt;
2. nền tảng hiện tại;
3. ghi chú trực tiếp của user;
4. ảnh/frame/logo/reference đã có trong cuộc trò chuyện;
5. visual identity đã tạo trước đó cho cùng kịch bản/ngày;
6. preset mặc định trong Skill.

Không hỏi lại những thông tin đã suy ra được từ các nguồn trên.

## 2. Hành vi bắt buộc khi có tool tạo ảnh

Nếu môi trường có image generation:
- tạo ảnh ngay;
- không chỉ viết prompt;
- không trả một “kế hoạch ảnh” rồi chờ xác nhận lần hai;
- không hỏi “bạn muốn mấy ảnh / size gì / phong cách nào?” nếu Skill đã quy định.

Nếu tool hỗ trợ nhiều ảnh riêng trong một lượt, có thể tạo thành một coordinated batch.
Nếu consistency tốt hơn khi làm tuần tự và tool hỗ trợ reference chaining, tạo ảnh đầu làm visual anchor rồi giữ nhân vật/trang phục/bối cảnh cho các ảnh sau.

Kết quả phải là ảnh riêng từng tấm, không phải contact sheet/collage.

## 3. Production plan nội bộ trước khi generate

AI phải tự chốt, không cần hiện ra cho user:
- platform;
- số ảnh;
- aspect ratio / export target;
- vai trò từng ảnh;
- exact copy từng ảnh;
- nhân vật chính;
- bối cảnh kinh doanh;
- trang phục;
- ánh sáng;
- palette;
- typography;
- logo có/không;
- continuity với bộ trước của cùng ngày.

Mỗi ảnh chỉ nên giải quyết MỘT câu hỏi:
- người xem cần dừng lại vì gì?
- họ cần hiểu con số/case nào?
- khái niệm nào cần phân biệt?
- cuối cùng họ làm gì/kiểm tra gì?

## 4. Visual identity mặc định

Phong cách Kế Toán Diệu Tâm:
- realistic photography;
- cinematic nhẹ;
- bối cảnh Việt Nam đời thường;
- doanh nghiệp nhỏ, cửa hàng, bàn làm việc, kho hàng, quầy bán, đơn hàng… phù hợp chủ đề;
- ánh sáng tự nhiên hoặc warm/golden-hour khi hợp;
- tránh cyber finance, neon xanh tím, stock corporate quá bóng;
- tránh nhân vật tạo dáng quảng cáo giả;
- tránh màn hình/dashboard có chữ/số rác.

Typography:
- sans-serif rõ dấu tiếng Việt;
- headline bold;
- chữ trắng là default tốt;
- accent vàng dùng có chọn lọc cho số, keyword hoặc underline;
- nền phức tạp phải có overlay/gradient đủ tương phản;
- không trang trí font làm sai dấu.

## 5. Continuity

Trong CÙNG một kịch bản/ngày:
- cùng nhân vật;
- cùng độ tuổi/giới tính;
- cùng tóc/khuôn mặt;
- cùng trang phục chủ đạo;
- cùng loại hình kinh doanh;
- cùng không gian hoặc một visual world hợp lý;
- cùng tone màu và typography.

Nếu TikTok của ngày đó đã tạo một nam chủ shop áo tối + tạp dề nâu trong shop quà tặng, Facebook/Zalo/YouTube của cùng ngày nên tiếp tục người đó và visual world đó, trừ khi user yêu cầu đổi.

Sang kịch bản/ngày mới:
- mặc định đổi nhân vật hoặc loại hình kinh doanh để series không bị cảm giác AI lặp lại.

## 6. Text-on-image rules

Ảnh social không phải bài viết thu nhỏ.

Ưu tiên:
- 1 headline;
- 0–1 subheadline;
- hoặc 2–4 bullet ngắn khi slide mang tính checklist/breakdown.

Không:
- chép nguyên đoạn caption;
- dùng font quá nhỏ để nhét thêm chữ;
- đặt text sát viền;
- để chữ đè lên mặt nhân vật;
- dùng nhiều kiểu font;
- tạo bảng phức tạp nếu một breakdown đơn giản đã đủ.

Với số liệu:
- dùng đúng số từ bài;
- phép tính phải đúng;
- format thống nhất, ví dụ 500.000đ;
- không tự thêm phần trăm lợi nhuận nếu bài không tính;
- không biến “còn lại trước chi phí vận hành” thành “lợi nhuận ròng”.

## 7. TikTok Photo Post

Đây là PRESET PRODUCTION của project; 9:16 không được mô tả như một yêu cầu bắt buộc cho mọi organic photo post.

Số ảnh:
- mặc định 4–5 ảnh riêng.

Canvas/export target:
- 9:16;
- target production 1080×1920 khi tooling cho phép.

Vai trò:
1. Hook — một câu hỏi/nghịch lý đủ mạnh để dừng swipe.
2. Case/breakdown — con số hoặc tình huống cụ thể.
3. Concept — phân biệt khái niệm/cơ chế.
4. Application — checklist/câu hỏi.
5. Closing — chỉ dùng khi thật sự tăng giá trị; không bắt buộc làm slogan rỗng.

Thiết kế:
- chữ lớn nhất trong 4 nền tảng;
- ít chữ;
- tương phản mạnh;
- chừa biên an toàn rộng, đặc biệt tránh các mép nơi UI có thể che;
- nhân vật/cảnh thật vẫn quan trọng, nhưng text phải đọc được trong 1–2 giây đầu.

Ảnh 1 không nên là infographic dày đặc.
Ảnh 2–4 có thể tăng density một chút nhưng vẫn scan nhanh.

Logo:
- không bắt buộc.

## 8. Facebook

Đây là PRESET PRODUCTION của project, không tuyên bố 4:5 là yêu cầu bắt buộc của Meta.

Số ảnh:
- đúng 4 ảnh riêng.

Canvas/export target:
- 4:5;
- target production 1080×1350 khi tooling cho phép.

Vai trò:
1. Hook.
2. Case/breakdown.
3. Concept/mechanism.
4. Checklist/takeaway.

Thiết kế:
- thoáng hơn TikTok;
- ảnh và caption bổ trợ nhau;
- không bê toàn bộ caption lên ảnh;
- ưu tiên cảm giác đáng tin, thực tế, trưởng thành;
- ảnh 4 nên hữu ích: checklist/3 câu hỏi/mini-framework thay vì chỉ logo+slogan.

Logo:
- mặc định không bắt buộc.

## 9. Zalo OA

Phần này bám theo tài liệu Zalo OA hiện hành:
- ảnh đại diện bài viết dùng tỷ lệ 16:9 và vùng hiển thị an toàn 14:9;
- ảnh chèn nội dung: PNG/JPG, 500×320 px, tối đa 1 MB.

Bộ mặc định:
- 1 cover;
- 2 body images.

Cover:
- 16:9;
- headline ngắn;
- visual mạnh;
- mọi text/chi tiết quan trọng nằm trong safe zone trung tâm 14:9;
- không nhồi checklist dài lên cover.

Body image 1:
- final target 500×320;
- ưu tiên breakdown, sơ đồ nhẹ hoặc ví dụ số.

Body image 2:
- final target 500×320;
- ưu tiên concept comparison hoặc checklist/takeaway.

Nếu image model không xuất đúng 500×320:
- generate ở aspect gần đúng;
- crop/resize bằng công cụ đáng tin cậy nếu có;
- không stretch.

File:
- nếu workflow có bước xuất file, body image phải đáp ứng giới hạn 1 MB.

Logo:
- Zalo là nơi có thể dùng logo chính thức nhỏ hơn các nền tảng khác nếu đã có asset thật;
- không tự dựng lại logo.

## 10. YouTube Community

Theo tài liệu YouTube, 1:1 là tỷ lệ được đề xuất vì đó là cách ảnh hiển thị trong feed. Project dùng đúng 4 ảnh dù YouTube cho phép nhiều hơn.

Số ảnh:
- đúng 4 ảnh riêng;
- tuyệt đối không collage 2×2.

Canvas/export target:
- 1:1;
- target production 1080×1080 khi tooling cho phép.

Vai trò:
1. Hook.
2. Case/breakdown.
3. Concept.
4. Checklist/takeaway.

Thiết kế:
- cực dễ scan;
- ít chữ hơn Facebook;
- bố cục trung tâm, safe margin rõ;
- không logo mặc định.

## 11. Asset policy

Nếu user có frame video:
- dùng frame làm reference/base visual khi phù hợp;
- giữ cảm giác thật của series.

Nếu user có logo:
- coi logo là asset khóa;
- không thay chữ, màu, biểu tượng hoặc tỷ lệ;
- nếu công cụ không giữ logo chính xác, bỏ logo thay vì vẽ lại sai.

Nếu không có asset:
- tự tạo cảnh phù hợp;
- không hỏi user cung cấp asset chỉ để trì hoãn;
- không tự giả lập “logo gần giống”.

## 12. Auto-QA trước khi giao

AI phải kiểm tra output đã tạo, không chỉ prompt.

Count:
- đủ số ảnh?
- ảnh có riêng từng tấm?
- có vô tình tạo collage không?

Format:
- đúng tỷ lệ?
- Zalo body đúng target 500×320 nếu có tool resize?
- không crop mất headline/chủ thể?

Content:
- từng ảnh đúng vai trò?
- có lặp cùng một ý trên nhiều ảnh không?
- số liệu đúng?
- phép tính đúng?
- không thêm claim mới?

Typography:
- đúng dấu tiếng Việt?
- không lỗi ký tự?
- đủ lớn?
- không tràn/cắt chữ?
- không quá nhiều chữ?

Continuity:
- cùng nhân vật?
- cùng trang phục?
- cùng bối cảnh/visual world?
- không đổi giới tính/độ tuổi/khuôn mặt vô cớ?

Brand:
- logo đúng asset?
- không logo giả?
- visual có đúng tinh thần Kế Toán Diệu Tâm, không cyber/stock giả?

Nếu nhìn thấy lỗi rõ ràng:
- tự regenerate CHỈ ảnh lỗi;
- giữ các ảnh đúng;
- lặp QA;
- chỉ giao khi bộ ảnh đạt.

Mục tiêu là user không phải nhắc các lỗi cơ bản như sai size, sai số ảnh, collage, lỗi chữ, đổi nhân vật, sai số liệu hoặc sai logo.
