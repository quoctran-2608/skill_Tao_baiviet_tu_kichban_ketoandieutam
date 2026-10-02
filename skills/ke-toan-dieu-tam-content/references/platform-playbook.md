# Platform Playbook

Cập nhật: 2026-10-02.

Tài liệu này tách rõ:
- OFFICIAL FACT: thông tin nền tảng đã kiểm tra từ tài liệu chính thức;
- PROJECT PRESET: quyết định production riêng của Kế Toán Diệu Tâm để tạo output nhất quán.

Khi claim “chuẩn hiện tại”, phải research lại vì spec nền tảng có thể thay đổi.

## TikTok Photo Post

OFFICIAL FACT:
- TikTok Content Posting API hỗ trợ photo posts;
- title photo post tối đa 90 UTF-16 runes;
- description tối đa 4000 UTF-16 runes;
- media guide hiện hỗ trợ ảnh WebP/JPEG, tối đa 20 MB mỗi ảnh và picture size tối đa 1080p.

PROJECT PRESET:
- 4–5 ảnh riêng;
- 9:16;
- target production 1080×1920 khi tooling cho phép;
- ảnh gánh phần lớn kiến thức;
- caption vừa phải;
- có title riêng khi UI có title field;
- không biến caption thành mini-blog dài;
- 9:16 là preset thiết kế của project, không tuyên bố là yêu cầu bắt buộc cho mọi organic photo post.

Nguồn chính thức:
https://developers.tiktok.com/docs/en/content-posting-api-reference-photo-post
https://developers.tiktok.com/docs/en/content-posting-api-media-transfer-guide

## Facebook

PROJECT PRESET:
- đúng 4 ảnh riêng;
- 4:5;
- target production 1080×1350 khi tooling cho phép;
- hook → case → concept → application;
- 4:5 là lựa chọn production của project, không mô tả như quy định bắt buộc của Meta.

Khi user yêu cầu “spec Facebook hiện tại”, research tài liệu Meta chính thức trước khi khẳng định.

## Zalo OA

OFFICIAL FACT:
- tiêu đề bài viết tối đa 150 ký tự;
- trích dẫn tối đa 300 ký tự;
- ảnh chèn trong nội dung: PNG/JPG, 500×320 px, tối đa 1 MB;
- ảnh đại diện bài viết nên 16:9 với vùng hiển thị an toàn 14:9.

PROJECT PRESET:
- 1 cover 16:9;
- 2 body images đúng target 500×320;
- cover = hook/hero;
- body 1 = breakdown/case;
- body 2 = concept/checklist.

Nguồn chính thức:
https://oa.zalo.me/home/documents/vie/guides/tao-bai-viet_5

## YouTube Community

OFFICIAL FACT:
- image post có thể upload tối đa 10 ảnh;
- hỗ trợ JPG/PNG/GIF/WEBP;
- tối đa 16 MB;
- YouTube đề xuất 1:1 vì ảnh hiển thị theo tỷ lệ đó trong feed.

PROJECT PRESET:
- đúng 4 ảnh riêng;
- 1:1;
- target production 1080×1080 khi tooling cho phép;
- không collage;
- không logo mặc định.

Nguồn chính thức:
https://support.google.com/youtube/answer/7124474

## Quy tắc chung

Không cố crop một master duy nhất cho tất cả nền tảng nếu việc đó làm text hoặc composition kém.

Ưu tiên tạo đúng canvas cho từng nền tảng:
- TikTok: 9:16;
- Facebook: 4:5;
- Zalo: cover 16:9 + body 500×320;
- YouTube: 1:1.

Chi tiết art direction, continuity, text density, asset handling và Auto-QA nằm tại:
references/image-execution.md
