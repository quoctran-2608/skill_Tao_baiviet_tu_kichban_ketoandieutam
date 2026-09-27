# Kế Toán Diệu Tâm — Video → Bài viết đa nền tảng

Một bộ **Prompt Engine** chạy hoàn toàn trong trình duyệt. HTML chỉ ghép prompt; ChatGPT/Gemini chịu trách nhiệm viết nội dung và tạo/gợi ý hình ảnh.

## Mục tiêu

Dán kịch bản video đã đăng → tạo một prompt hoàn chỉnh để đưa vào ChatGPT / Gemini / Claude → AI sinh:

- TikTok photo post / carousel
- Facebook post
- Zalo OA article/post
- YouTube Post
- Visual brief + image prompt để AI tạo/chỉnh ảnh trực tiếp

Nguyên tắc quan trọng nhất:

> Bài viết hôm sau không kể lại video. Nó phải trả lời câu hỏi tiếp theo mà video vừa tạo ra trong đầu người xem, đồng thời không lấy mất luận điểm dành cho các video sau.

## Cách dùng

1. Mở `index.html` trực tiếp trên trình duyệt.
2. Dán kịch bản video.
3. Bấm **Tạo prompt**.
4. Copy prompt sang ChatGPT / Gemini / Claude.
5. Ngay trong ChatGPT/Gemini, có thể upload:
   - một frame từ video;
   - logo thương hiệu;
   - cả hai;
   - hoặc không upload gì.
6. Prompt yêu cầu AI tự xử lý:
   - có frame → ưu tiên frame thật làm reference/base;
   - có logo → dùng logo như tài sản thương hiệu, không tự thiết kế lại;
   - không có gì → tự tạo cảnh ảnh chân thật phù hợp bài viết.
7. Nếu môi trường AI hỗ trợ tạo/chỉnh ảnh, AI tạo luôn. Nếu không, AI trả một **IMAGE PROMPT READY** để copy sang công cụ tạo ảnh.

## Triết lý thiết kế

- Không API.
- Không backend.
- Không database.
- Không bắt user chọn tone, số chữ, tỷ lệ ảnh, số slide, CTA level...
- Dùng frame thật từ video làm nguồn hình mặc định.
- AI chỉ quyết định **góc mở rộng + nội dung + headline visual**.
- HTML chỉ làm **một việc**: ghép prompt tốt, portable giữa nhiều model.

## Cấu trúc repo

- `index.html` — giao diện Prompt Builder.
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

1. User không phải chọn format.
2. Ưu tiên frame thật từ video nếu user upload.
3. Logo là tùy chọn; nếu có thì AI dùng làm tài sản thương hiệu, không tự vẽ lại.
4. Nếu không có asset, AI tự tạo cảnh ảnh chân thật phù hợp nội dung.
5. Nếu một luận điểm nói đủ bằng một hình → ảnh đơn.
6. Nếu cần giải thích quan hệ / nguyên nhân / danh sách → TikTok carousel đúng 3 slide.
7. Mặc định chỉ cần **2 master visual**:
   - dọc 9:16, giữ nội dung trong vùng trung tâm an toàn để crop sang Facebook 4:5 và YouTube 1:1;
   - ngang 16:9 cho Zalo OA.
8. Nếu model hỗ trợ tạo/chỉnh ảnh, tạo luôn; nếu không, trả IMAGE PROMPT READY.
