window.CONTENT_MAP = [
  {
    id: "seed-current",
    label: "Kịch bản seed — Hiểu hệ thống / Kế toán là ngôn ngữ doanh nghiệp",
    core: "Muốn kinh doanh bền phải hiểu hệ thống mình đang hoạt động trong; kế toán không chỉ là kê khai thuế mà là ngôn ngữ giúp đọc doanh nghiệp.",
    covered: [
      "Kinh doanh nằm trong một hệ thống gồm pháp luật, thuế, ngân hàng và dòng tiền.",
      "Chỉ tập trung bán hàng, kiếm tiền, tăng doanh thu là chưa đủ.",
      "Không hiểu hệ thống dễ mất tiền và đi sai hướng.",
      "Kế toán được chuyển nghĩa từ việc kê khai sang công cụ hiểu doanh nghiệp."
    ],
    expand: [
      "Một tình huống đời thực phát sinh từ thông điệp video.",
      "Phân biệt doanh thu với tiền thực có.",
      "Tiền có thể nằm ở tồn kho, công nợ, chi phí hoặc nghĩa vụ phải trả.",
      "Những câu hỏi chủ doanh nghiệp nên tự hỏi để đọc tình hình kinh doanh."
    ],
    reserved: [
      "Không lặp lại toàn bộ lập luận 'kế toán là ngôn ngữ của doanh nghiệp'.",
      "Không biến bài thành bài giảng khô về nghiệp vụ kế toán.",
      "Không tự mở rộng sang chủ đề của video tương lai nếu Content Map chưa xác nhận."
    ],
    visual: "Đời thật, cinematic tự nhiên, close-up tay/điện thoại/laptop/hóa đơn, ít diễn, ít chữ, tránh cyber/stock-photo quá bóng bẩy."
  }
];

window.findContentMap = function(videoId) {
  if (!videoId) return null;
  return window.CONTENT_MAP.find(function(item) {
    return item.id.toLowerCase() === String(videoId).trim().toLowerCase();
  }) || null;
};
