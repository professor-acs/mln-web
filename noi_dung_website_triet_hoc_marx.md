# TÀI LIỆU CẤU TRÚC NỘI DUNG WEBSITE TƯƠNG TÁC TRIẾT HỌC MARX - LENIN
## CHỦ ĐỀ: LỊCH SỬ CỦA MỌI XÃ HỘI TỪ TRƯỚC ĐẾN NAY LÀ LỊCH SỬ ĐẤU TRANH GIAI CẤP

---

## 🛠️ THÔNG TIN TỔNG QUAN DỰ ÁN (METADATA FOR AI PROCESSING)
- **Học phần:** Triết học Marx - Lenin (Chương III: Chủ nghĩa duy vật lịch sử)
- **Luận điểm trung tâm:** "The history of all hitherto existing society is the history of class struggles." - Karl Marx & Friedrich Engels (*Tuyên ngôn của Đảng Cộng sản*, 1848).
- **Mục tiêu thiết kế:** Website Interactive Storytelling (Kể chuyện tương tác), sử dụng kiến trúc Single Page Application (SPA), chuyển động dựa trên cuộn (Scroll-driven Animations).
- **Công nghệ Front-End hướng tới:** ReactJS, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons, Recharts (hoặc Chart.js).
- **Yêu cầu dữ liệu:** Cấu trúc hóa thành các Block dữ liệu logic, phân định rõ ràng giữa Lý thuyết Kinh điển, Minh chứng Thực tiễn Thế kỷ 21, và Kịch bản Tương tác Realtime.

---

## 📦 BLOCK 1: THE HOOK (MỞ ĐẦU ẤN TƯỢNG & ĐẶT VẤN ĐỀ)
*Mục tiêu UI/UX: Hiển thị full-screen (Hero Section), nền tối huyền bí, chữ xuất hiện theo hiệu ứng gõ (Typewriter) hoặc fade-in chậm rãi để tạo không khí điện ảnh.*

### 1.1. Nội dung hiển thị (Text Elements)
- **Tiêu đề chính (H1):** NHỮNG BÀN TAY BỊ LÃNG QUÊN: AI ĐANG VIẾT NÊN LỊCH SỬ?
- **Trích dẫn kinh điển (Quote Component):** > "The history of all hitherto existing society is the history of class struggles."
  > — *Karl Marx & Friedrich Engels, Tuyên ngôn của Đảng Cộng sản (1848)*
- **Bản dịch tiếng Việt chính thống:** "Lịch sử của tất cả các xã hội tồn tại từ trước đến nay chỉ là lịch sử của đấu tranh giai cấp."
- **Đoạn dẫn dắt (Sub-text):** Khi lật mở những trang sử ký, chúng ta thường bị choáng ngợp bởi hào quang của các triều đại, danh tiếng của các vị vua hay sức mạnh của các cuộc viễn chinh. Nhưng đằng sau những biến động vĩ đại đó, có một động lực ngầm liên tục dịch chuyển bánh xe lịch sử. Karl Marx gọi đó là **Đấu tranh giai cấp**. Đây không phải là một lý thuyết quá khứ, nó là lăng kính giải mã toàn bộ thế giới chúng ta đang sống ngày hôm nay.

### 1.2. Logic điều hướng (User Flow)
- Người dùng cuộn chuột xuống (Scroll down) -> Biểu tượng chuột nhấp nháy chỉ dẫn hành động.

---

## 📚 BLOCK 2: CORE THEORY (LÝ THUYẾT CỐT LÕI - CHƯƠNG III)
*Mục tiêu UI/UX: Chia thành cấu trúc thẻ (Card Layout) hoặc bố cục lưới (Grid Layout) 3 cột để người dùng tương tác nhấp chọn (Click-to-expand) nhằm tối ưu hóa điểm "Chiều sâu học thuật" không bị rườm rà.*

### 2.1. Định nghĩa Giai cấp của V.I. Lenin (Học thuật chuẩn xác)
- **Tựa đề thành phần:** Giai cấp là gì?
- **Khái niệm cốt lõi:** Theo V.I. Lenin (Tác phẩm *Sáng kiến vĩ đại*), giai cấp là những tập đoàn người to lớn, phân biệt với nhau bởi **4 tiêu chí cốt lõi** trong một hệ thống sản xuất xã hội nhất định:
  1. **Vị trí trong hệ thống sản xuất xã hội:** Tập đoàn thống trị (quản lý, định đoạt) đối lập với tập đoàn bị trị (lao động trực tiếp).
  2. **Quan hệ đối với tư liệu sản xuất:** Đây là tiêu chí quan trọng nhất. Tập đoàn này nắm giữ và sở hữu các tư liệu sản xuất chủ yếu (đất đai, nhà xưởng, máy móc, công nghệ), trong khi tập đoàn kia không có hoặc có rất ít, phải phụ thuộc.
  3. **Vai trò trong tổ chức quản lý lao động:** Quy định ai là người có quyền ra mệnh lệnh, tổ chức quy trình sản xuất và ai phải tuân thủ hành động.
  4. **Phương thức và quy mô phân phối sản phẩm xã hội:** Tập đoàn nắm giữ tư liệu sản xuất sẽ chiếm đoạt phần lớn của cải dư thừa (thông qua bóc lột), phần còn lại được phân phối tối thiểu cho người lao động dưới dạng tiền công/lương.
- **Tóm luận (Key takeaway):** Giai cấp không mang tính tự nhiên hay vĩnh cửu. Bản chất của sự phân chia giai cấp là **chế độ tư hữu về tư liệu sản xuất**.

### 2.2. Nguồn gốc của Giai cấp (Sự xuất hiện mang tính lịch sử)
- **Tựa đề thành phần:** Bản đồ nguồn gốc xã hội.
- **Luận điểm phát triển:**
  - **Thời kỳ Công xã nguyên thủy:** Lực lượng sản xuất cực kỳ thấp kém, công cụ lao động thô sơ. Sản phẩm làm ra chỉ đủ ăn, không có của cải dư thừa -> Không có tư hữu -> Không có giai cấp.
  - **Sự chuyển biến kinh tế:** Công cụ lao động bằng kim loại xuất hiện -> Năng suất lao động tăng vọt -> Xuất hiện **sản phẩm dư thừa**.
  - **Bước ngoặt phân hóa:** Những người đứng đầu bộ lạc, thị tộc tận dụng chức quyền để chiếm đoạt sản phẩm dư thừa này làm của riêng -> **Chế độ tư hữu hình thành** -> Xã hội nứt gãy thành kẻ có của (Kẻ bóc lột) và người không có của (Người bị bóc lột).

### 2.3. Đấu tranh giai cấp là Động lực phát triển Lịch sử
- **Tựa đề thành phần:** Quy luật vận động của văn minh.
- **Cơ chế logic:**
  Mâu thuẫn giữa **Lực lượng sản xuất (ngày càng phát triển, mang tính xã hội hóa cao)** và **Quan hệ sản xuất (lỗi thời, mang tính tư hữu, bị kìm hãm bởi giai cấp thống trị cũ)**.
- **Chu kỳ vận động (Timeline Interactive Component):**
  - *Xã hội Chiếm hữu nô lệ:* Chủ nô (Nắm giữ tư liệu sản xuất & thể xác nô lệ) >< Nô lệ (Lao động kiệt quệ). Kết quả: Khởi nghĩa Spartacus và các phong trào làm sụp đổ chế độ cũ, chuyển dịch sang Phong kiến.
  - *Xã hội Phong kiến:* Địa chủ/Chúa phong kiến (Nắm giữ ruộng đất) >< Nông dân/Nông nô (Cày thuê, nộp tô thuế nặng nề). Kết quả: Các cuộc cách mạng tư sản bùng nổ, xác lập phương thức sản xuất tư bản.
  - *Xã hội Tư bản chủ nghĩa:* Giai cấp Tư sản (Nắm giữ nhà xưởng, máy móc, tư bản vốn) >< Giai cấp Vô sản (Công nhân bán sức lao động để kiếm sống).

---

## 🌐 BLOCK 3: 21ST CENTURY REALITY (GẮN KẾT THỰC TIỄN & CẬP NHẬT)
*Mục tiêu UI/UX: Chuyển sang giao diện hiện đại, công nghệ cao (High-tech Dashboard style). Sử dụng biểu đồ trực quan (Interactive Line/Bar Chart) để minh họa số liệu thực tế về bất bình đẳng kinh tế hiện nay.*

### 3.1. Case Study 1: Nền kinh tế nền tảng (Platform Economy) và Gig Workers
- **Đặt vấn đề:** Thế kỷ 21, công nhân không còn lấm lem bùn đất, họ mặc đồng phục của các hãng công nghệ, ngồi phòng máy lạnh hoặc di chuyển trên đường phố với chiếc điện thoại thông minh. Liệu bản chất bóc lột giai cấp có biến mất?
- **Phân tích Triết học học thuật:**
  - **Tư liệu sản xuất thời đại số:** Không còn thuần túy là nhà máy hay đất đai, mà là **Thuật toán (Algorithms), Máy chủ (Servers), Hệ thống cơ sở dữ liệu (Big Data)** và **Nền tảng ứng dụng (App Platform)**.
  - **Giai cấp Tư sản hiện đại (Tech Barons):** Các tập đoàn công nghệ đa quốc gia. Họ sở hữu toàn bộ các tư liệu sản xuất số nêu trên.
  - **Giai cấp Vô sản hiện đại (Gig Workers / Freelancers):** Tài xế công nghệ, người giao hàng, lập trình viên outsource, người sáng tạo nội dung tự do. Họ tự trang bị xe máy, máy tính cá nhân (vốn chỉ là công cụ sinh hoạt), nhưng hoàn toàn phụ thuộc vào thuật toán điều phối của nền tảng để có thu nhập.
  - **Bản chất đấu tranh:** Các làn sóng tắt app, đình công tập thể của tài xế công nghệ để phản đối việc nâng mức chiết khấu phần trăm chính là hình thức **đấu tranh kinh tế** của giai cấp vô sản thời đại số nhằm chống lại sự áp bức tỷ suất giá trị thặng dư của tư bản công nghệ.

### 3.2. Case Study 2: Trí tuệ nhân tạo (AI) và Sự độc quyền Tư liệu sản xuất
- **Dẫn chứng số liệu thực tế (Data Points cho Biểu đồ):**
  - Theo báo cáo Oxfam gần nhất, khoảng 1% dân số giàu nhất thế giới sở hữu khối tài sản bằng 99% phần còn lại của nhân loại.
  - Xu hướng độc quyền công nghệ: Phần lớn hạ tầng phần cứng xử lý AI mạnh nhất thế giới (Chip xử lý, siêu máy tính) nằm trong tay một vài tập đoàn công nghệ lớn nhất thung lũng Silicon.
- **Liên hệ lý thuyết:** AI có tiềm năng giải phóng sức lao động cho con người, nhưng dưới chế độ tư bản chủ nghĩa, AI đang trở thành công cụ tối ưu hóa lợi nhuận cho giai cấp tư sản. Việc thay thế hàng loạt nhân sự bằng AI tạo ra một làn sóng "vô sản hóa" mới, làm sâu sắc thêm khoảng cách giàu nghèo và kích ngòi cho những hình thức mâu thuẫn giai cấp mới trong thế kỷ 21.

---

## 🎮 BLOCK 4: INTERACTIVE LIVE QUIZ (CƠ CHẾ TƯƠNG TÁC KHÁN GIẢ)
*Mục tiêu UI/UX: Một Component độc lập giả lập phòng chờ Game (như Kahoot/Mentimeter). Khi thuyết trình, sinh viên đóng vai trò Host kích hoạt các câu hỏi để cả lớp cùng tương tác thông qua State Management trong React.*

### Câu hỏi 1: Nhận diện Tư liệu sản xuất
- **Nội dung câu hỏi:** Bạn tích cóp tiền mua được một chiếc laptop xịn trị giá 100 triệu đồng để làm đồ họa. Chiếc máy này được phân loại là gì trong triết học?
  - A. Chắc chắn là Tư liệu sản xuất (Vì nó tạo ra sản phẩm).
  - B. Chắc chắn là Tư sản cá nhân (Vì nó thuộc quyền sở hữu của riêng bạn).
  - C. Tùy thuộc vào mục đích và phương thức bạn sử dụng nó trong quan hệ sản xuất.
- **Đáp án chuẩn học thuật:** **C**
- **Giải thích hiển thị sau khi trả lời:** Nếu bạn chỉ dùng nó để xem phim, giải trí, nó là *Tài sản tiêu dùng cá nhân*. Nhưng nếu bạn dùng nó để nhận dự án kiếm tiền, nó đã biến thành *Tư liệu sản xuất*. Bản chất của tư liệu sản xuất không nằm ở giá trị vật chất của đồ vật, mà nằm ở **quan hệ xã hội** bao quanh việc sử dụng đồ vật đó.

### Câu hỏi 2: Bản chất của sự giàu nghèo
- **Nội dung câu hỏi:** Nguyên nhân gốc rễ dẫn đến việc một xã hội phân hóa thành kẻ giàu kẻ nghèo mang tính giai cấp bền vững là do đâu?
  - A. Do người giàu thông minh, chăm chỉ hơn; người nghèo lười biếng, kém may mắn hơn.
  - B. Do sự phân phối ngẫu nhiên của các nguồn lực trong nền kinh tế thị trường.
  - C. Do sự chiếm đoạt mang tính độc quyền đối với Tư liệu sản xuất chủ yếu của xã hội.
- **Đáp án chuẩn học thuật:** **C**
- **Giải thích hiển thị sau khi trả lời:** Triết học Marx chỉ ra rằng sự chăm chỉ cá nhân có thể thay đổi vị thế ngắn hạn, nhưng cấu trúc áp bức giai cấp được bảo vệ bằng quyền sở hữu tư liệu sản xuất mới là thứ duy trì sự bất bình đẳng từ thế hệ này sang thế hệ khác.

---

## 📑 BLOCK 5: ACADEMIC INTEGRITY & AI USAGE APPENDIX (PHỤ LỤC MINH BẠCH AI)
*Mục tiêu UI/UX: Đặt cố định ở phần Footer dưới dạng một liên kết mở ra Modal popup, đáp ứng trọn vẹn 2 điểm tối đa của Barem 4.*

### 5.1. Tuyên bố Cam kết Liêm chính học thuật (Academic Integrity Statement)
> "Nhóm sinh viên thực hiện cam kết: Trí tuệ nhân tạo (AI) chỉ được sử dụng đúng vai trò làm trợ lý kỹ thuật hỗ trợ tối ưu hóa giao diện (UI Boilerplate), phát hiện lỗi cú pháp lập trình và gợi ý phân tách cấu trúc hiển thị dữ liệu. Toàn bộ nền tảng tư tưởng luận điểm, logic phân tích học thuật, lựa chọn case study thực tiễn và biên soạn nội dung giáo trình đều do các thành viên trong nhóm trực tiếp nghiên cứu, đối chiếu và chịu trách nhiệm nội dung trước Hội đồng Giảng viên."

### 5.2. Nhật ký sử dụng AI (AI Usage Log)
| Công cụ sử dụng | Mục đích cụ thể | Kết quả đầu ra | Phần sinh viên chỉnh sửa, biên soạn lại |
| :--- | :--- | :--- | :--- |
| **LLM (Gemini/ChatGPT)** | Brainstorming ý tưởng cấu trúc nội dung và liên hệ thực tiễn | Cấu trúc dàn ý lý thuyết và gợi ý case study về tài xế công nghệ. | Biên dịch thuật ngữ chuẩn giáo trình Triết học Marx - Lenin của Bộ Giáo dục & Đào tạo Việt Nam; lồng ghép ví dụ thực tế tại Việt Nam. |
| **v0.dev / Claude** | Gợi ý Component React và cấu trúc CSS Tailwind | Khung mã nguồn HTML/CSS tĩnh cho phần Timeline lịch sử. | Chuyển đổi mã nguồn sang TypeScript, tích hợp State của React để xử lý hiệu ứng lật thẻ và đồng bộ hóa hiệu ứng chuyển trang mượt mà. |

### 5.3. Nguồn tài liệu đối chiếu chính thống (References)
1. **Giáo trình Triết học Mác - Lênin**, Ban Chỉ đạo biên soạn giáo trình lý luận chính trị toàn quốc, Bộ Giáo dục và Đào tạo, NXB Chính trị quốc gia Sự thật. (Trọng tâm: Chương III - Chủ nghĩa duy vật lịch sử).
2. V.I. Lenin, Toàn tập, Tập 39, NXB Chính trị quốc gia, Hà Nội, tác phẩm *"Sáng kiến vĩ đại"* (Định nghĩa giai cấp).
3. Karl Marx & Friedrich Engels, *Tuyên ngôn của Đảng Cộng sản* (1848), NXB Chính trị quốc gia Sự thật.
4. Báo cáo Bất bình đẳng Toàn cầu (Global Inequality Report) từ các tổ chức uy tín quốc tế như Oxfam để kiểm chứng số liệu kinh tế.
