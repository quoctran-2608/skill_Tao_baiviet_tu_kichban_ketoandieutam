# Kế Toán Diệu Tâm — Kịch bản → Bài viết kiến thức đa nền tảng

Repo này chứa skill/prompt engine giúp AI biến một kịch bản video đã đăng thành bài viết và bộ ảnh cho:
- TikTok Photo Post;
- Facebook;
- Zalo OA;
- YouTube Community.

## Triết lý v2

Kịch bản là hạt giống, không phải khuôn bài viết.

Video có nhiệm vụ gợi mở.
Bài viết phải mở rộng thêm kiến thức, cơ chế, ví dụ hoặc ứng dụng.

Câu hỏi bắt buộc trước khi viết:

> Người đã xem video sẽ học thêm điều gì khi đọc bài này?

## Workflow production khuyến nghị

1. Nạp kịch bản mới.
2. AI phân tích câu chuyện + knowledge wedge.
3. Làm TikTok:
   - tiêu đề nếu cần;
   - caption;
   - 4–5 ảnh 9:16.
4. Làm Facebook:
   - bài sâu hơn;
   - đúng 4 ảnh 4:5.
5. Làm Zalo OA:
   - tiêu đề;
   - trích dẫn;
   - bài sâu nhất;
   - 1 cover 16:9 + 2 body images 500×320.
6. Làm YouTube Community:
   - bài cô đọng;
   - đúng 4 ảnh 1:1 riêng biệt.

User có thể đi từng bước như production thực tế hoặc yêu cầu nhiều nền tảng một lần.

## Output

Mọi bài đăng phải nằm trong writing block riêng để copy nhanh.

Bên trong writing block:
- plain text sạch;
- không `##`;
- không `**`;
- không `---`;
- giữ xuống dòng, bullet, emoji và khoảng thở.

## Nội dung

AI không được chỉ kể lại video.

Bài tốt thường có:
- hook đời thực;
- nghịch lý/câu hỏi;
- ví dụ;
- cơ chế;
- takeaway áp dụng.

Brand ratio mục tiêu:
- 30–40% tư tưởng;
- 60–70% kiến thức thực tế.

## Hình ảnh

Trong một bộ:
- cùng nhân vật;
- cùng visual world.

Sang kịch bản/ngày mới:
- mặc định đổi nhân vật hoặc business context nếu không có yêu cầu continuity.

Không tự vẽ lại logo.
Nếu có logo thật, dùng đúng asset.

## Files

- `SKILL.md` — luật chính để AI làm việc.
- `research/editorial-playbook.md` — kinh nghiệm production và tư duy biên tập.
- `research/platform-defaults.md` — preset nền tảng.
- `content-map.js` — Content Map series.
- `index.html` — Prompt Builder.
- `examples/` — output mẫu dùng để calibrate/test.
