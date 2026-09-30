# Platform defaults — cơ sở chọn preset

Cập nhật: 2026-09-30.

Mục tiêu: ghi preset vận hành hiện tại của project Kế Toán Diệu Tâm. Đây là preset production, không phải tuyên bố rằng chỉ có một kích thước “đúng” cho mọi trường hợp.

## TikTok Photo Post

TikTok hỗ trợ photo post nhiều ảnh. Project dùng ảnh dọc vì đây là trải nghiệm feed phù hợp với nội dung photo carousel.

Preset project:
- 4–5 ảnh;
- primary: 9:16;
- kiến thức nằm nhiều trên ảnh;
- caption vừa phải;
- nếu UI có ô tiêu đề riêng, viết thêm tiêu đề ngắn; convention project: dưới 90 ký tự.

Nguồn tham khảo:
- https://developers.tiktok.com/docs/en/content-posting-api-reference-photo-post
- https://developers.tiktok.com/docs/en/content-posting-api-media-transfer-guide
- https://www.tiktok.com/business/library/Top_Tips_One_Pager_SMB.pdf

## Facebook

4:5 không phải yêu cầu bắt buộc của Meta; đây là preset production để chiếm diện tích feed mobile tốt.

Preset project:
- đúng 4 ảnh;
- 4:5;
- mỗi ảnh một ý;
- ưu tiên hook → example → concept → takeaway.

## Zalo OA

Theo tài liệu Zalo OA:
- tiêu đề bài viết tối đa 150 ký tự;
- trích dẫn tối đa 300 ký tự;
- ảnh đại diện nên 16:9, nội dung quan trọng nằm trong vùng an toàn 14:9;
- ảnh trong phần thân: PNG/JPG, target 500×320 px, tối đa 1 MB.

Preset project:
- 1 cover 16:9;
- 2 body images 500×320;
- chỉ dùng logo thật khi có asset chính thức và user muốn dùng.

Nguồn:
- https://oa.zalo.me/home/documents/vie/guides/tao-bai-viet_5

## YouTube Community Posts

YouTube chính thức cho image post nhiều ảnh và khuyến nghị 1:1 vì ảnh hiển thị theo tỷ lệ đó trong feed.

Preset project:
- đúng 4 ảnh vuông riêng;
- 1:1;
- không collage 2×2;
- không logo mặc định.

Nguồn:
- https://support.google.com/youtube/answer/7124474

## Nguyên tắc chung

Không cố tạo một master rồi crop tất cả nếu điều đó làm text/cấu trúc kém.

Ưu tiên tạo đúng tỷ lệ của từng nền tảng:
- TikTok 9:16;
- Facebook 4:5;
- Zalo cover 16:9 + body 500×320;
- YouTube 1:1.

Các spec nền tảng có thể thay đổi. Nếu task yêu cầu “đúng chuẩn hiện tại”, kiểm tra lại nguồn chính thức trước khi khẳng định.
