HƯỚNG DẪN NHANH - Triển khai StudyTogether AI (dành cho người mới)
File trong gói này:
- index.html          -> Giao diện chatbot (nhúng qua iframe)
- api/chat.js         -> Serverless function để gọi OpenAI (giữ API key an toàn)
- README.txt          -> Hướng dẫn này

Bước 1: Tạo tài khoản OpenAI
1. Vào https://platform.openai.com/signup và đăng ký.
2. Sang Dashboard -> View API keys -> Create new secret key.
3. Copy API key (ví dụ: sk-...).

Bước 2: Tạo tài khoản Vercel
1. Vào https://vercel.com/signup và đăng ký (bằng GitHub hoặc Google).
2. Tạo repository trên GitHub (nếu chưa có) và tải mã trong folder này lên repo (cũng có thể import ZIP trực tiếp từ Vercel).

Bước 3: Deploy trên Vercel (cách dễ nhất)
1. Trên Vercel -> New Project -> Import Git repository (chọn repo bạn đã push).
2. Khi Vercel tìm thấy project, giữ tùy chọn mặc định.
3. Trước khi Deploy, vào Settings -> Environment Variables:
   - Key: OPENAI_API_KEY
   - Value: (dán API key từ OpenAI)
4. Deploy. Sau khi deploy xong, bạn sẽ có URL như:
   https://your-project-name.vercel.app

Bước 4: Kiểm tra
1. Mở URL trên, giao diện chat sẽ hiển thị.
2. Gõ câu hỏi thử, bot sẽ trả lời.

Bước 5: Nhúng vào WordPress.com
1. Vào dashboard WordPress.com -> Pages (hoặc Edit page bài viết).
2. Thêm block "Custom HTML".
3. Dán vào:
   <iframe src="https://your-project-name.vercel.app" width="100%" height="600" style="border:none; border-radius:12px;"></iframe>
4. Lưu trang.

Ghi chú an toàn:
- Không đăng API key lên GitHub công khai. Sử dụng Environment Variable trên Vercel.
- Nếu muốn model tốt hơn (GPT-4), thay tên model trên api/chat.js (cần quota/chi phí).
- Nếu không rành Git, mình có thể hướng dẫn chi tiết từng bước push repo hoặc deploy trực tiếp.

Nếu bạn muốn, trả lời: "Hướng dẫn chi tiết Git/Github" hoặc "Tạo ZIP và hướng dẫn deploy", mình sẽ hướng dẫn tiếp từng bước có ảnh chụp màn hình và lệnh cụ thể.
