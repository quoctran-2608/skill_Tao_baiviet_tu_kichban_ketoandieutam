# Kế Toán Diệu Tâm — Video → Bài viết đa nền tảng

Một **Prompt Engine** chạy trong trình duyệt. HTML ghép kịch bản + Brand DNA + Content Map 32 ngày + quy tắc nền tảng thành prompt để dùng với ChatGPT.

## Workflow

1. Mở `index.html`.
2. Dán kịch bản/lời thoại video đã đăng.
3. Bấm **Tạo prompt**.
4. Copy prompt sang ChatGPT.
5. ChatGPT trả lượt 1:
   - TikTok trong writing block riêng;
   - Facebook trong writing block riêng;
   - Zalo OA trong writing block riêng.
6. Gõ **TIẾP**.
7. ChatGPT trả lượt 2:
   - YouTube Post trong writing block riêng;
   - Prompt tạo ảnh trong writing block riêng.
8. Copy **Prompt tạo ảnh**, có thể đính kèm:
   - frame từ video;
   - logo thương hiệu;
   - cả hai;
   - hoặc không đính kèm gì.
9. Dán prompt ảnh lại **ngay trong cùng chat**. Chỉ lúc này AI mới tạo ảnh.

## Vì sao chia 2 lượt?

Mục tiêu là mỗi nền tảng có một writing block riêng để copy nhanh. ChatGPT nên dùng tối đa 3 writing blocks trong một lượt, nên 4 nền tảng + 1 prompt ảnh được chia thành 2 lượt thay vì trộn artifact.

## Nguyên tắc lõi

> Bài viết xen kẽ không kể lại video. Nó phải bổ sung một giá trị mới, nhưng không được lấy mất luận điểm chính của video ngày kế tiếp.

## Content Map

`content-map.js` bám theo nguồn production thực tế:
- Ngày 1–10 và 12–32: file production;
- Ngày 11: `Ngay11.srt` do user cung cấp.

AI tự khớp kịch bản user dán với map. User không phải chọn số video.

## Output writing blocks

Lượt 1:
- TikTok → `social_post`
- Facebook → `social_post`
- Zalo OA → `document`

Lượt 2 sau “TIẾP”:
- YouTube → `social_post`
- Prompt tạo ảnh → `standard`

Nếu model không hỗ trợ writing block, fallback mỗi artifact thành một code block riêng.

## Hình ảnh

Ở lượt viết bài, **AI không được tạo ảnh**.

AI chỉ tạo một **Prompt tạo ảnh** hoàn chỉnh. User copy block này, đính kèm frame/logo nếu muốn, rồi dán lại trong cùng chat để tạo ảnh.

Prompt ảnh tự xử lý:
- có frame → ưu tiên frame thật;
- có logo → coi logo là asset khóa;
- có cả hai → frame chính, logo nhỏ;
- không có asset → tự tạo scene chân thật;
- single hoặc TikTok carousel3 do AI tự quyết;
- primary 9:16;
- safe crop Facebook 4:5 + YouTube 1:1;
- adaptation Zalo 16:9.

## Triết lý kỹ thuật

- Không API.
- Không backend.
- Không database.
- Không bắt user chọn tone, CTA, số slide, tỷ lệ ảnh.
- Kịch bản thực tế luôn ưu tiên hơn Content Map.
- Tối ưu thao tác copy/paste trong ChatGPT.

## Cấu trúc repo

- `index.html` — Prompt Builder.
- `content-map.js` — Content Map 32 ngày.
- `SKILL.md` — luật biên tập và output contract.
- `research/platform-defaults.md` — cơ sở preset nền tảng.
- `examples/` — fixture dùng để test.
