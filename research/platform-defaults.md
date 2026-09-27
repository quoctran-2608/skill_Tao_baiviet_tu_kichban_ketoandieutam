# Platform defaults — cơ sở chọn preset

Cập nhật: 2026-09-27.

Mục tiêu: chọn **preset vận hành mặc định**, không tuyên bố một kích thước là “tốt nhất tuyệt đối”.

## TikTok Photo Post

TikTok hiện hỗ trợ photo posts; Content Posting API cho phép tối đa 35 ảnh trong một photo post. Tài liệu media transfer nêu JPEG/WebP, tối đa 1080p và 20 MB mỗi ảnh.

TikTok không công bố trong các tài liệu này rằng organic photo post **bắt buộc** phải 9:16. Vì vậy 9:16 ở project này là **preset thiết kế**, dựa trên trải nghiệm dọc/full-screen quen thuộc của TikTok và hướng creative 9:16 của TikTok for Business.

Preset project:
- primary visual: **9:16**;
- nếu cần carousel: tối đa **3 slide** để giảm workload.

Nguồn:
- https://developers.tiktok.com/docs/en/content-posting-api-reference-photo-post
- https://developers.tiktok.com/docs/en/content-posting-api-media-transfer-guide
- https://www.tiktok.com/business/library/Top_Tips_One_Pager_SMB.pdf

## Facebook

Không dùng 4:5 như một “quy định bắt buộc” của Meta. Project chọn **4:5** làm target crop vận hành vì portrait chiếm diện tích feed mobile tốt và có thể lấy từ master dọc.

Preset project:
- target crop: **4:5**;
- không cần tạo một visual concept khác; crop từ master 9:16 nếu bố cục an toàn.

## YouTube Posts

YouTube chính thức:
- cho upload tối đa 10 ảnh;
- hỗ trợ JPG/PNG/GIF/WEBP, tối đa 16 MB;
- **đề xuất 1:1** vì ảnh hiển thị theo tỷ lệ đó trong feed;
- image posts/carousels có thể xuất hiện trong Shorts feed với rollout đủ điều kiện.

Preset project:
- target crop: **1:1** từ master dọc, với subject/headline nằm trong center-safe area.

Nguồn:
- https://support.google.com/youtube/answer/7124474
- https://support.google.com/youtube/thread/446107479

## Zalo OA

Zalo OA chính thức:
- tiêu đề bài viết tối đa 150 ký tự;
- trích dẫn tối đa 300 ký tự;
- ảnh trong nội dung: PNG/JPG 500×320, tối đa 1 MB;
- ảnh đại diện nên **16:9**, vùng hiển thị an toàn **14:9**.

Preset project:
- adaptation/hero: **16:9**;
- giữ nội dung quan trọng trong vùng an toàn trung tâm;
- nếu cần ảnh body đúng trình soạn OA, resize riêng về 500×320.

Nguồn:
- https://oa.zalo.me/home/documents/vie/guides/tao-bai-viet_5

## Kết luận sản phẩm

User không chọn tỷ lệ.

AI nhận một visual concept rồi:
1. tạo/đề xuất **primary 9:16**;
2. giữ bố cục center-safe cho crop **4:5 Facebook** và **1:1 YouTube**;
3. tạo/đề xuất một **adaptation 16:9 Zalo**;
4. nếu nội dung cần giải thích nhiều bước, TikTok dùng carousel đúng 3 slide.

HTML **không render ảnh**. Nó chỉ tạo prompt; việc tạo/chỉnh ảnh thuộc model mà user dán prompt vào.
