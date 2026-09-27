# Platform defaults — nghiên cứu để khóa preset

Cập nhật: 2026-09-27.

Mục tiêu của file này không phải tuyên bố một kích thước "tốt nhất tuyệt đối", mà chọn **preset vận hành mặc định** để user không phải cân nhắc mỗi lần.

## TikTok

Nguồn chính thức:
- TikTok Help Center xác nhận photo post và cho phép tối đa 35 ảnh trong một bài.
- TikTok for Developers cho biết ảnh JPEG/WebP, tối đa 1080p và 20 MB/ảnh.
- TikTok for Business dùng 9:16 làm hướng creative native/full-screen.

Preset:
- **1080×1920 (9:16)**.
- Tối đa 3 slide cho workflow này dù nền tảng cho phép nhiều hơn.
- Lý do: ưu tiên trải nghiệm dọc, giảm công sản xuất.

Nguồn:
- https://support.tiktok.com/sv/using-tiktok/creating-videos/making-a-post
- https://developers.tiktok.com/docs/en/content-posting-api-media-transfer-guide
- https://www.tiktok.com/business/library/Top_Tips_One_Pager_SMB.pdf

## Facebook

Meta không công bố một kích thước duy nhất cho organic feed photo theo cách đủ rõ để gọi là chuẩn bắt buộc. Các hướng dẫn thực hành 2026 nhất quán dùng portrait 4:5 vì chiếm nhiều diện tích mobile mà không cần thiết kế full-screen.

Preset vận hành:
- **1080×1350 (4:5)** cho hero image.
- Đây là convention vận hành, không phải "quy định bắt buộc" của Meta.

Tham khảo:
- https://postproxy.dev/blog/facebook-image-sizes/
- https://socialmagnum.com/blog/facebook-post-size

## YouTube Posts

Nguồn chính thức YouTube:
- Upload tối đa 10 ảnh.
- JPG/PNG/GIF/WEBP, tối đa 16 MB.
- YouTube **đề xuất 1:1** vì đó là cách ảnh hiển thị trong feed.
- Từ 2026, image posts/carousels có thể xuất hiện trong Shorts feed ở các rollout đủ điều kiện.

Preset:
- **1080×1080 (1:1)**.
- Dùng hero image; không bắt user tạo thêm carousel trừ khi sau này có lý do rõ.

Nguồn:
- https://support.google.com/youtube/answer/7124474
- https://support.google.com/youtube/thread/446107479

## Zalo OA

Nguồn chính thức:
- Bài viết có tiêu đề tối đa 150 ký tự, trích dẫn tối đa 300 ký tự.
- Ảnh chèn trong nội dung: PNG/JPG 500×320, tối đa 1 MB.
- Ảnh đại diện bài viết: nên **16:9**, vùng hiển thị an toàn **14:9**.

Preset:
- Hero/ảnh đại diện **1280×720 (16:9)**.
- Giữ headline/logo trong vùng trung tâm tương đương 14:9 để tránh mất chữ khi crop.
- Nếu cần chèn ảnh body theo đúng trình soạn thảo OA, resize riêng về 500×320.

Nguồn:
- https://oa.zalo.me/home/documents/vie/guides/tao-bai-viet_5

## Kết luận sản phẩm

User **không chọn tỷ lệ**.

Một visual concept được hệ thống tự render thành:
- TikTok 9:16
- Facebook 4:5
- YouTube 1:1
- Zalo 16:9

Nếu AI chọn carousel3:
- Chỉ TikTok tạo 3 slide.
- Facebook / YouTube / Zalo vẫn xuất hero duy nhất.

Cách này giữ workload thấp nhưng vẫn tôn trọng cách hiển thị của từng nền tảng.
