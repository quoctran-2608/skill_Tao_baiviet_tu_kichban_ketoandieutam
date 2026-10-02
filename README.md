# Kế Toán Diệu Tâm — Canonical Skill + Prompt Builder

Repo này đã được dựng lại từ đầu. Phiên bản hiện tại không dùng Content Map, prompt engine hoặc editorial rules của repo cũ.

## Kiến trúc

Nguồn chân lý duy nhất là:

`skills/ke-toan-dieu-tam-content/`

Gồm:
- `SKILL.md` — workflow và quality gates chính;
- `references/editorial-depth.md` — editorial execution: chọn angle, hook, cơ chế, ví dụ, practicality và cách viết riêng từng nền tảng;
- `references/platform-playbook.md` — official facts + preset từng nền tảng;
- `references/image-execution.md` — cách tạo ảnh, continuity, text density và Auto-QA;
- `examples/gold-standard.md` — mẫu calibrate chất lượng.

`index.html` chỉ làm UI + prompt assembler. Nó không giữ một bản editorial skill thứ hai.

## Cách HTML hoạt động

Khi bấm `Tạo prompt`, HTML tải trực tiếp các file Skill canonical từ nhánh `main` của chính repo này bằng `raw.githubusercontent.com`, sau đó ghép:

1. Skill canonical;
2. kịch bản bạn dán;
3. ghi chú tùy chọn;
4. nhiệm vụ hiện tại.

Kịch bản được đặt trong vùng DATA và được chỉ dẫn rõ là không phải instruction.

## Cách dùng

1. Mở `index.html` trong trình duyệt khi có Internet.
2. Dán toàn bộ kịch bản video.
3. Chọn nhiệm vụ. Mặc định là `Bắt đầu workflow — TikTok`.
4. Điền ghi chú nếu cần.
5. Bấm `Tạo prompt`.
6. Copy prompt sang một chat AI mới.
7. Tiếp tục trong cùng chat đó bằng các yêu cầu tự nhiên: `tạo ảnh TikTok`, `qua Facebook`, `tạo ảnh Facebook`, `qua Zalo`, `qua YouTube`...

Vì prompt đầu tiên đã chứa toàn bộ Skill, AI có context để tiếp tục workflow.

## Nguyên tắc bảo trì

- Muốn thay đổi chất lượng biên tập: sửa Skill, không sửa rules trong HTML.
- Muốn thay đổi giao diện/nút/task selector: sửa `index.html`.
- Không đưa Content Map 32 video vào core skill.
- Không tạo hai bộ rule song song.
- Spec nền tảng có thể thay đổi; Skill yêu cầu research lại khi cần claim “chuẩn hiện tại”.

## Cấu trúc repo

```text
.
├── plugin.json
├── README.md
├── index.html
└── skills/
    └── ke-toan-dieu-tam-content/
        ├── SKILL.md
        ├── references/
        │   ├── editorial-depth.md
        │   ├── platform-playbook.md
        │   └── image-execution.md
        └── examples/
            └── gold-standard.md
```

## Lưu ý

HTML cần Internet để tải Skill canonical từ GitHub. Đây là lựa chọn có chủ đích để tránh `SKILL.md` và một bundle nhúng trong HTML bị lệch phiên bản.
