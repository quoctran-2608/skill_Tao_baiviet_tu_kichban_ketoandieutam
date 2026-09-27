# Kế Toán Diệu Tâm — Video → Bài viết đa nền tảng

Một **Prompt Engine** chạy trong trình duyệt. HTML chỉ làm một việc: ghép kịch bản + Brand DNA + Content Map 32 ngày + quy tắc nền tảng thành một prompt hoàn chỉnh để dùng với ChatGPT / Gemini / Claude.

## Workflow

1. Mở `index.html`.
2. Dán kịch bản/lời thoại video đã đăng.
3. Bấm **Tạo prompt**.
4. Copy prompt sang ChatGPT / Gemini / Claude.
5. Có thể đính kèm thêm:
   - một frame từ video;
   - logo thương hiệu;
   - cả hai;
   - hoặc không đính kèm gì.
6. AI sinh:
   - TikTok Photo Post / carousel;
   - Facebook post;
   - Zalo OA article/post;
   - YouTube Post;
   - visual direction + IMAGE PROMPT READY.
7. Nếu model đang dùng hỗ trợ tạo/chỉnh ảnh, prompt cho phép tạo primary visual ngay; nếu không, IMAGE PROMPT READY có thể dùng trực tiếp ở công cụ tạo ảnh.

## Nguyên tắc lõi

> Bài viết xen kẽ không kể lại video. Nó phải bổ sung một giá trị mới, nhưng không được lấy mất luận điểm chính của video ngày kế tiếp.

## Content Map

`content-map.js` hiện có **đủ 32 ngày lấy từ lộ trình thật của Kế Toán Diệu Tâm**:
- Ngày 1–30: lộ trình/kịch bản 30 ngày đầu.
- Ngày 31–32: hai chủ đề đầu tiên của giai đoạn tiếp theo được ghi ngay sau ngày 30.

Map lưu:
- tiêu đề ngày;
- thông điệp cốt lõi;
- focus;
- giai đoạn nội dung;
- tiêu đề ngày kế tiếp.

Không lưu URL/ID Google Drive vì repo là public.

AI tự khớp kịch bản user dán với map. User **không phải chọn số video**.

## Hình ảnh — mặc định đơn giản

User không chọn format.

AI tự xử lý:
- có frame → ưu tiên frame thật;
- có logo → dùng logo như asset khóa, không vẽ lại;
- có cả hai → frame là visual chính, logo nhỏ;
- không có gì → tự tạo cảnh chân thật theo nội dung.

Output hình mặc định:
- **primary 9:16**, giữ chủ thể/headline ở vùng trung tâm để crop an toàn sang Facebook 4:5 và YouTube 1:1;
- **adaptation 16:9** cho Zalo OA;
- nếu nội dung cần nhiều bước → TikTok carousel đúng 3 slide.

Nếu AI không giữ được logo/chữ tiếng Việt chính xác, prompt yêu cầu chừa vùng sạch và trả headline riêng thay vì cố tạo sai.

## Triết lý kỹ thuật

- Không API.
- Không backend.
- Không database.
- Không bắt user chọn tone, độ dài, CTA level, số slide hay tỷ lệ ảnh.
- Kịch bản thực tế user dán luôn ưu tiên hơn Content Map.
- Portable giữa nhiều model.

## Cấu trúc repo

- `index.html` — Prompt Builder.
- `content-map.js` — Content Map 32 ngày thật.
- `SKILL.md` — luật biên tập / prompt contract.
- `research/platform-defaults.md` — nguồn và lý do chọn preset nền tảng.
- `examples/` — fixture dùng để test.
