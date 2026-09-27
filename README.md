# Kế Toán Diệu Tâm — Video → Bài viết đa nền tảng

Một bộ **Prompt Engine + Visual Preset** chạy hoàn toàn trong trình duyệt.

## Mục tiêu

Dán kịch bản video đã đăng → tạo một prompt hoàn chỉnh để đưa vào ChatGPT / Gemini / Claude → AI sinh:

- TikTok photo post / carousel
- Facebook post
- Zalo OA article/post
- YouTube Post
- Visual brief có cấu trúc để HTML tự tạo ảnh theo preset

Nguyên tắc quan trọng nhất:

> Bài viết hôm sau không kể lại video. Nó phải trả lời câu hỏi tiếp theo mà video vừa tạo ra trong đầu người xem, đồng thời không lấy mất luận điểm dành cho các video sau.

## Cách dùng

1. Mở `index.html` trực tiếp trên trình duyệt.
2. Dán kịch bản video.
3. Bấm **Tạo prompt**.
4. Copy prompt sang ChatGPT / Gemini / Claude.
5. Copy toàn bộ câu trả lời của AI về ô **Tạo ảnh**.
6. Upload một frame đẹp lấy từ chính video (không bắt buộc).
7. HTML tự đọc `VISUAL_JSON` và xuất:
   - TikTok: 1080×1920 (9:16), 1 hoặc 3 slide tùy nội dung.
   - Facebook: 1080×1350 (4:5).
   - YouTube Post: 1080×1080 (1:1).
   - Zalo OA: 1280×720 (16:9), giữ nội dung chính trong vùng an toàn.

## Triết lý thiết kế

- Không API.
- Không backend.
- Không database.
- Không bắt user chọn tone, số chữ, tỷ lệ ảnh, số slide, CTA level...
- Dùng frame thật từ video làm nguồn hình mặc định.
- AI chỉ quyết định **góc mở rộng + nội dung + headline visual**.
- HTML chỉ làm hai việc: **ghép prompt** và **render ảnh theo preset**.

## Cấu trúc repo

- `index.html` — giao diện Prompt Builder + Visual Renderer.
- `content-map.js` — bản đồ nội dung của series; sẽ bổ sung đủ 32 video khi có nguồn đầy đủ.
- `SKILL.md` — luật biên tập / prompt contract.
- `research/platform-defaults.md` — cơ sở chọn preset nền tảng.

## Trạng thái Content Map

`content-map.js` hiện có **32 slot biên tập hoàn chỉnh**. Đây là một lộ trình nội dung được thiết kế từ chủ đề và DNA của file nguồn hiện có; file nguồn thực tế chỉ chứa một kịch bản được triển khai lại về mặt hình ảnh, không chứa 32 transcript riêng biệt.

Vì vậy hệ thống dùng cơ chế an toàn:
- kịch bản thực tế user dán luôn là nguồn ưu tiên;
- AI tự khớp kịch bản với slot gần nhất trong 32-slot map;
- map dùng để giữ mạch series và tránh "ăn trước" chủ đề tương lai;
- nếu không khớp rõ, AI được yêu cầu đánh dấu `custom` thay vì ép nội dung vào một slot sai.

User không cần chọn số video; dropdown chỉ là override nâng cao khi muốn ép một slot cụ thể.

## Nguyên tắc visual mặc định

1. Ưu tiên frame thật từ video.
2. Nếu một luận điểm nói đủ bằng một câu → ảnh đơn.
3. Nếu cần giải thích quan hệ / nguyên nhân / danh sách → TikTok carousel 3 slide.
4. Facebook, YouTube và Zalo luôn có một hero image để thao tác đăng nhanh.
5. Không dùng ảnh AI mặc định; chỉ tạo prompt ảnh AI khi thật sự không có frame phù hợp.
