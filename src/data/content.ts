// ============================================================
//  CENTRALIZED CONTENT DATA
//  All Vietnamese text content for the website
// ============================================================

export const siteMetadata = {
  title: 'Giai Cấp Và Dân Tộc',
  subtitle: 'AI ĐANG VIẾT NÊN LỊCH SỬ?',
  mainQuote: '"Lịch sử của tất cả các xã hội tồn tại từ trước đến nay chỉ là lịch sử của đấu tranh giai cấp."',
  quoteAuthor: '— Karl Marx & Friedrich Engels, Tuyên ngôn của Đảng Cộng sản (1848)',
  quoteVietnamese: '"Lịch sử của tất cả các xã hội tồn tại từ trước đến nay chỉ là lịch sử của đấu tranh giai cấp."',
  heroSubtext: `Khi lật mở những trang sử ký, chúng ta thường bị choáng ngợp bởi hào quang của các triều đại, 
danh tiếng của các vị vua hay sức mạnh của các cuộc viễn chinh. Nhưng đằng sau những biến động vĩ đại đó, 
có một động lực ngầm liên tục dịch chuyển bánh xe lịch sử. Karl Marx gọi đó là Đấu tranh giai cấp. 
Đây không phải là một lý thuyết quá khứ — nó là lăng kính giải mã toàn bộ thế giới chúng ta đang sống ngày hôm nay.`,
  course: 'Triết học Marx - Lenin | Chương III: Chủ nghĩa duy vật lịch sử',
  heroImage: 'https://images.unsplash.com/photo-1585155967349-90c1b143d7f8?q=80&w=2000',
}

export const theoryCards = [
  {
    id: 'class-def',
    title: 'Giai Cấp Là Gì?',
    subtitle: 'Định nghĩa của V.I. Lenin',
    image: 'https://images.unsplash.com/photo-1740215306586-363212cac416?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Hình ảnh phân tầng xã hội
    frontSummary: 'Theo V.I. Lenin, giai cấp là những tập đoàn người to lớn khác nhau về vị trí trong một hệ thống sản xuất xã hội nhất định.',
    criteria: [
      {
        number: '01',
        title: 'Vị trí trong sản xuất',
        desc: 'Tập đoàn thống trị (quản lý) đối lập với tập đoàn bị trị (lao động).',
      },
      {
        number: '02',
        title: 'Quan hệ tư liệu sản xuất',
        desc: 'Ai nắm giữ đất đai, nhà xưởng, công nghệ — người đó nắm quyền lực.',
      },
      {
        number: '03',
        title: 'Tổ chức lao động',
        desc: 'Sự phân công ai ra lệnh và ai phải tuân thủ trong quy trình làm việc.',
      },
      {
        number: '04',
        title: 'Phân phối sản phẩm',
        desc: 'Cách thức chia sẻ của cải: người sở hữu hưởng lợi, người lao động nhận tiền công.',
      },
    ],
    keyTakeaway: 'Bản chất của giai cấp là chế độ tư hữu về tư liệu sản xuất.',
    color: 'gold',
  },
  {
    id: 'origin',
    title: 'Nguồn Gốc Giai Cấp',
    subtitle: 'Bản đồ nguồn gốc xã hội',
    image: 'https://images.unsplash.com/photo-1528918832583-cd56bc35dbc7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Hình ảnh công cụ kim loại/lịch sử
    frontSummary: 'Giai cấp xuất hiện khi lực lượng sản xuất phát triển tạo ra của cải dư thừa, dẫn đến sự ra đời của chế độ tư hữu.',
    stages: [
      {
        era: 'Công xã nguyên thủy',
        state: 'Không có giai cấp',
        desc: 'Lao động chung, hưởng thụ chung. Không có của dư thừa nên không có chiếm hữu riêng.',
        arrow: false,
      },
      {
        era: 'Công cụ kim loại',
        state: 'Năng suất tăng',
        desc: 'Con người làm ra nhiều hơn nhu cầu tối thiểu → Xuất hiện sản phẩm dư thừa.',
        arrow: true,
      },
      {
        era: 'Bước ngoặt tư hữu',
        state: 'Giai cấp ra đời',
        desc: 'Người có quyền chiếm đoạt của dư thừa làm của riêng → Xã hội phân hóa giàu - nghèo.',
        arrow: true,
      },
    ],
    color: 'crimson',
  },
  {
    id: 'struggle',
    title: 'Đấu Tranh Giai Cấp',
    subtitle: 'Động lực phát triển',
    image: 'https://images.unsplash.com/photo-1591155426209-23831d47700d?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Hình ảnh đấu tranh/biểu tình
    frontSummary: 'Mâu thuẫn giữa lực lượng sản xuất mới và quan hệ sản xuất lỗi thời là cội nguồn của mọi cuộc đấu tranh giai cấp.',
    forms: [
      { title: 'Kinh tế', desc: 'Đòi quyền lợi sát sườn: tăng lương, giảm giờ làm, bảo hiểm.' },
      { title: 'Chính trị', desc: 'Hình thức cao nhất: giành chính quyền về tay giai cấp cách mạng.' },
      { title: 'Tư tưởng', desc: 'Xây dựng hệ tư tưởng mới để giải phóng tư duy con người.' },
    ],
    keyTakeaway: 'Đấu tranh giai cấp dẫn đến cách mạng xã hội, thay thế chế độ cũ bằng chế độ tiến bộ hơn.',
    color: 'purple',
  },
]

export const timelineEpochs = [
  {
    id: 'slavery',
    era: 'Chiếm hữu nô lệ',
    period: '~3500 TCN – 500 SCN',
    image: 'https://images.unsplash.com/photo-1578305850166-f575daffa13d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    oppressor: { name: 'Chủ nô', desc: 'Nắm giữ tư liệu sản xuất và quyền sinh sát nô lệ' },
    oppressed: { name: 'Nô lệ', desc: 'Được xem là "công cụ biết nói", không có quyền làm người' },
    conflict: 'Mâu thuẫn cực độ khi nô lệ bị bóc lột đến kiệt quệ sức lực.',
    result: 'Các cuộc khởi nghĩa làm suy yếu đế chế → Chuyển sang chế độ Phong kiến.',
    color: 'from-yellow-900 to-orange-900',
    accent: '#f59e0b',
  },
  {
    id: 'feudal',
    era: 'Phong kiến',
    period: '~500 – 1800 SCN',
    image: 'https://images.unsplash.com/photo-1689787923139-6dd0dceb229a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    oppressor: { name: 'Địa chủ', desc: 'Độc quyền sở hữu toàn bộ ruộng đất' },
    oppressed: { name: 'Nông dân', desc: 'Được tự do thân thể nhưng bị ràng buộc vào đất đai' },
    conflict: 'Địa chủ chiếm đoạt phần lớn hoa lợi qua chế độ tô thuế nặng nề.',
    result: 'Cách mạng tư sản lật đổ phong kiến → Xác lập chế độ Tư bản.',
    color: 'from-green-900 to-emerald-900',
    accent: '#10b981',
  },
  {
    id: 'capitalism',
    era: 'Tư bản chủ nghĩa',
    period: '1800 – Hiện tại',
    image: 'https://images.unsplash.com/photo-1723221402837-6d95b426e06e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    oppressor: { name: 'Tư sản', desc: 'Sở hữu nhà máy, máy móc và vốn tư bản' },
    oppressed: { name: 'Vô sản', desc: 'Không có tài sản, phải bán sức lao động để tồn tại' },
    conflict: 'Mâu thuẫn giữa tính chất xã hội của sản xuất và sự chiếm hữu tư nhân.',
    result: 'Hướng tới xã hội công bằng hơn, nơi tư liệu sản xuất thuộc về nhân dân.',
    color: 'from-blue-900 to-indigo-900',
    accent: '#6366f1',
  },
]

export const realityData = {
  caseStudies: [
    {
      id: 'gig',
      title: 'Nền Kinh Tế Nền Tảng & Gig Workers',
      tag: 'Case Study 01',
      tagColor: '#00d4ff',
      intro: 'Thế kỷ 21, công nhân không còn lấm lem bùn đất, họ mặc đồng phục của các hãng công nghệ, ngồi phòng máy lạnh hoặc di chuyển trên đường phố với chiếc điện thoại thông minh. Liệu bản chất bóc lột giai cấp có biến mất?',
      analysis: [
        {
          label: 'Tư liệu sản xuất thời đại số',
          value: 'Không còn thuần túy là nhà máy hay đất đai, mà là Thuật toán, Máy chủ, Big Data và Nền tảng ứng dụng.',
        },
        {
          label: 'Giai cấp tư sản hiện đại (Tech Barons)',
          value: 'Các tập đoàn công nghệ đa quốc gia sở hữu toàn bộ tư liệu sản xuất số.',
        },
        {
          label: 'Giai cấp vô sản hiện đại (Gig Workers)',
          value: 'Tài xế công nghệ, người giao hàng, lập trình viên outsource. Hoàn toàn phụ thuộc vào thuật toán để có thu nhập.',
        },
        {
          label: 'Hình thức đấu tranh mới',
          value: 'Các làn sóng tắt app, đình công tập thể của tài xế công nghệ phản đối chiết khấu phần trăm chính là đấu tranh kinh tế của giai cấp vô sản thời đại số.',
        },
      ],
    },
    {
      id: 'ai',
      title: 'Trí Tuệ Nhân Tạo & Độc Quyền Tư Liệu Sản Xuất',
      tag: 'Case Study 02',
      tagColor: '#c9a84c',
      intro: 'AI có tiềm năng giải phóng sức lao động, nhưng dưới chế độ tư bản chủ nghĩa, AI đang trở thành công cụ tối ưu hóa lợi nhuận cho giai cấp tư sản.',
      analysis: [
        {
          label: 'Tập trung quyền lực công nghệ',
          value: 'Phần lớn hạ tầng xử lý AI mạnh nhất (Chip, siêu máy tính) nằm trong tay một vài tập đoàn lớn nhất Silicon Valley.',
        },
        {
          label: 'Bất bình đẳng tài sản (Oxfam)',
          value: '1% dân số giàu nhất sở hữu khối tài sản bằng 99% phần còn lại của nhân loại.',
        },
        {
          label: 'Làn sóng "vô sản hóa" mới',
          value: 'AI thay thế hàng loạt nhân sự, làm sâu sắc thêm khoảng cách giàu nghèo và kích ngòi cho mâu thuẫn giai cấp mới.',
        },
        {
          label: 'Kết luận triết học',
          value: 'AI là tư liệu sản xuất mới nhất — và câu hỏi "ai sở hữu AI?" chính là câu hỏi về quyền lực giai cấp trong thế kỷ 21.',
        },
      ],
    },
  ],
  chartData: [
    { name: '1980', top1: 22, bottom50: 20 },
    { name: '1990', top1: 28, bottom50: 16 },
    { name: '2000', top1: 33, bottom50: 13 },
    { name: '2010', top1: 42, bottom50: 9 },
    { name: '2020', top1: 48, bottom50: 7 },
    { name: '2024', top1: 52, bottom50: 5 },
  ],
  stats: [
    { value: 45, suffix: '%', label: 'Tài sản thế giới trong tay 1% giàu nhất', color: '#e74c3c' },
    { value: 400, suffix: 'M', label: 'Người lao động trong nền kinh tế gig toàn cầu', color: '#00d4ff' },
    { value: 85, suffix: 'M', label: 'Việc làm có thể bị AI thay thế (WEF 2025)', color: '#c9a84c' },
  ],
}

export const quizQuestions = [
  {
    id: 1,
    question: 'Bạn tích cóp tiền mua được một chiếc laptop xịn trị giá 100 triệu đồng để làm đồ họa. Chiếc máy này được phân loại là gì trong triết học Marx?',
    options: [
      { id: 'A', text: 'Chắc chắn là Tư liệu sản xuất — vì nó tạo ra sản phẩm có giá trị', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Chắc chắn là Tài sản cá nhân — vì nó thuộc quyền sở hữu của riêng bạn', color: 'from-red-600 to-red-700' },
      { id: 'C', text: 'Tùy thuộc vào mục đích và quan hệ sản xuất bao quanh việc sử dụng nó', color: 'from-green-600 to-green-700' },
      { id: 'D', text: 'Không phải tư liệu sản xuất vì bạn không có nhà máy', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'C',
    explanation: {
      short: 'Đáp án đúng: C — Bản chất không nằm ở vật, mà ở quan hệ xã hội!',
      long: 'Nếu bạn chỉ dùng laptop để xem phim, giải trí → đó là tài sản tiêu dùng cá nhân. Nhưng nếu bạn dùng nó để nhận dự án kiếm tiền, thuê người phụ việc → nó đã biến thành Tư liệu sản xuất. Bản chất của tư liệu sản xuất không nằm ở giá trị vật chất của đồ vật, mà nằm ở quan hệ xã hội bao quanh việc sử dụng đồ vật đó. Đây chính là tư duy biện chứng của Marx!',
    },
  },
  {
    id: 2,
    question: 'Nguyên nhân gốc rễ dẫn đến việc một xã hội phân hóa thành kẻ giàu kẻ nghèo mang tính giai cấp bền vững là do đâu?',
    options: [
      { id: 'A', text: 'Do người giàu thông minh, chăm chỉ hơn; người nghèo lười biếng, kém may mắn hơn', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Do sự phân phối ngẫu nhiên của các nguồn lực trong nền kinh tế thị trường', color: 'from-red-600 to-red-700' },
      { id: 'C', text: 'Do sự chiếm đoạt mang tính độc quyền đối với Tư liệu sản xuất chủ yếu của xã hội', color: 'from-green-600 to-green-700' },
      { id: 'D', text: 'Do sự khác biệt về gen di truyền và bẩm sinh tự nhiên', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'C',
    explanation: {
      short: 'Đáp án đúng: C — Tư hữu về tư liệu sản xuất mới là căn nguyên!',
      long: 'Triết học Marx chỉ ra rằng sự chăm chỉ cá nhân có thể thay đổi vị thế ngắn hạn, nhưng cấu trúc áp bức giai cấp được bảo vệ bằng quyền sở hữu tư liệu sản xuất mới là thứ duy trì sự bất bình đẳng từ thế hệ này sang thế hệ khác. Đây là lý do tại sao con nhà tỷ phú dù không làm gì vẫn giàu — họ kế thừa tư liệu sản xuất, không phải kế thừa sự chăm chỉ.',
    },
  },
  {
    id: 3,
    question: 'Tại sao ở phương Đông (như Việt Nam), dân tộc lại hình thành sớm hơn so với phương Tây (châu Âu)?',
    options: [
      { id: 'A', text: 'Do phương Đông phát triển chủ nghĩa tư bản sớm hơn phương Tây', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Do nhu cầu đấu tranh chống ngoại xâm và cải tạo thiên nhiên (đắp đê, làm thủy lợi)', color: 'from-green-600 to-green-700' },
      { id: 'C', text: 'Do sự chỉ đạo trực tiếp của các triều đại phong kiến tập quyền', color: 'from-red-600 to-red-700' },
      { id: 'D', text: 'Do đặc điểm địa lý thuận lợi hơn cho việc giao lưu ngôn ngữ', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'B',
    explanation: {
      short: 'Đáp án đúng: B — Chống ngoại xâm và trị thủy là động lực hình thành dân tộc sớm!',
      long: 'Khác với châu Âu nơi dân tộc gắn liền với sự ra đời của chủ nghĩa tư bản, ở phương Đông, nhu cầu đoàn kết để chống lại thiên tai (đắp đê) và giặc ngoại xâm đã thúc đẩy sự hình thành cộng đồng dân tộc ổn định từ rất sớm, ngay trong lòng chế độ phong kiến.',
    },
  },
  {
    id: 4,
    question: 'Trong mối quan hệ giữa Giai cấp và Dân tộc, luận điểm nào sau đây là chính xác theo quan điểm Mác-Lênin?',
    options: [
      { id: 'A', text: 'Dân tộc quyết định sự tồn tại và bản chất của giai cấp', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Giai cấp và dân tộc hoàn toàn độc lập, không ảnh hưởng đến nhau', color: 'from-red-600 to-red-700' },
      { id: 'C', text: 'Giai cấp quyết định khuynh hướng phát triển và tính chất của dân tộc', color: 'from-green-600 to-green-700' },
      { id: 'D', text: 'Khi giai cấp mất đi thì dân tộc cũng biến mất ngay lập tức', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'C',
    explanation: {
      short: 'Đáp án đúng: C — Giai cấp thống trị quy định bộ mặt dân tộc!',
      long: 'Giai cấp nào lãnh đạo dân tộc thì sẽ quy định khuynh hướng phát triển của dân tộc đó. Tuy nhiên, dân tộc là cộng đồng bền vững hơn; khi giai cấp mất đi, dân tộc vẫn tồn tại lâu dài.',
    },
  },
  {
    id: 5,
    question: 'Sự tồn tại của "Nhân loại" đóng vai trò gì đối với sự tồn tại của Giai cấp và Dân tộc?',
    options: [
      { id: 'A', text: 'Là kết quả cuối cùng sau khi giai cấp và dân tộc biến mất', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Là tiền đề cho sự tồn tại của giai cấp và dân tộc', color: 'from-green-600 to-green-700' },
      { id: 'C', text: 'Là một khái niệm trừu tượng không có thực trong đời sống', color: 'from-red-600 to-red-700' },
      { id: 'D', text: 'Là đối tượng đấu tranh của các dân tộc độc lập', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'B',
    explanation: {
      short: 'Đáp án đúng: B — Nhân loại là tiền đề sinh tồn!',
      long: 'Sự tồn tại của cộng đồng nhân loại là điều kiện tiên quyết. Trong xã hội có giai cấp, lợi ích nhân loại bị chi phối bởi lợi ích giai cấp, nhưng không bao giờ tách rời khỏi nhau.',
    },
  },
  {
    id: 6,
    question: 'Theo quan điểm của Triết học Mác - Lênin, dấu hiệu chủ yếu nào quy định địa vị của một giai cấp trong hệ thống sản xuất xã hội?',
    options: [
      { id: 'A', text: 'Sự khác nhau về trình độ học vấn và văn hóa.', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Mối quan hệ kinh tế - vật chất (quan hệ đối với tư liệu sản xuất).', color: 'from-green-600 to-green-700' },
      { id: 'C', text: 'Vai trò quản lý trong bộ máy hành chính nhà nước.', color: 'from-red-600 to-red-700' },
      { id: 'D', text: 'Mức thu nhập và quan hệ phân phối sản phẩm.', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'B',
    explanation: {
      short: 'Đáp án đúng: B — Mối quan hệ kinh tế - vật chất!',
      long: 'Giai cấp là những tập đoàn người có địa vị kinh tế - xã hội khác nhau. Dấu hiệu chủ yếu nhất để quy định địa vị này chính là các mối quan hệ kinh tế - vật chất, đặc biệt là quan hệ sở hữu đối với tư liệu sản xuất.',
    },
  },
  {
    id: 7,
    question: 'Đâu là nguyên nhân sâu xa dẫn đến sự ra đời của giai cấp trong lịch sử nhân loại?',
    options: [
      { id: 'A', text: 'Do sự xuất hiện của nhà nước và pháp luật.', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Do sự phân công lao động quốc tế.', color: 'from-red-600 to-red-700' },
      { id: 'C', text: 'Do lực lượng sản xuất phát triển tạo ra của cải dư thừa và chế độ tư hữu.', color: 'from-green-600 to-green-700' },
      { id: 'D', text: 'Do các cuộc chiến tranh giành lãnh thổ giữa các bộ lạc.', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'C',
    explanation: {
      short: 'Đáp án đúng: C — Lực lượng sản xuất phát triển tạo ra của cải dư thừa và chế độ tư hữu!',
      long: 'Giai cấp không tồn tại từ đầu. Khi lực lượng sản xuất phát triển (đặc biệt là công cụ bằng đồng), dẫn đến lao động dư thừa và của cải dư thừa. Sự xuất hiện của chế độ tư hữu đã dẫn đến phân hóa giàu nghèo, từ đó sinh ra giai cấp.',
    },
  },
  {
    id: 8,
    question: 'Trong xã hội hiện đại, những nhóm người như nhân viên văn phòng, freelancer, tiểu thương được xếp vào nhóm nào trong phân loại giai cấp?',
    options: [
      { id: 'A', text: 'Giai cấp cơ bản.', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Giai cấp thống trị.', color: 'from-red-600 to-red-700' },
      { id: 'C', text: 'Tầng lớp trung gian.', color: 'from-green-600 to-green-700' },
      { id: 'D', text: 'Giai cấp không cơ bản.', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'C',
    explanation: {
      short: 'Đáp án đúng: C — Tầng lớp trung gian!',
      long: 'Tầng lớp trung gian là những người không đại diện cho phương thức sản xuất nào. Họ không phải là giai cấp bóc lột cũng không bị bóc lột nặng nề, nhưng lại rất dễ bị tổn thương và ảnh hưởng bởi các biến động kinh tế.',
    },
  },
  {
    id: 9,
    question: 'Thực chất của mối quan hệ giai cấp trong xã hội có giai cấp đối kháng là gì?',
    options: [
      { id: 'A', text: 'Quan hệ bóc lột và bị bóc lột.', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Quan hệ hợp tác và phân công lao động.', color: 'from-green-600 to-green-700' },
      { id: 'C', text: 'Quan hệ cạnh tranh kinh tế lành mạnh.', color: 'from-red-600 to-red-700' },
      { id: 'D', text: 'Quan hệ bình đẳng về quyền lợi chính trị.', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'A',
    explanation: {
      short: 'Đáp án đúng: A — Quan hệ bóc lột và bị bóc lột!',
      long: 'Thực chất của quan hệ giai cấp là tập đoàn người này chiếm đoạt lao động của tập đoàn người khác, hình thành nên quan hệ bóc lột và bị bóc lột.',
    },
  },
  {
    id: 10,
    question: 'Theo lý luận về đấu tranh giai cấp, đâu là hình thức đấu tranh quan trọng nhất?',
    options: [
      { id: 'A', text: 'Đấu tranh kinh tế.', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Đấu tranh chính trị.', color: 'from-green-600 to-green-700' },
      { id: 'C', text: 'Đấu tranh tư tưởng.', color: 'from-red-600 to-red-700' },
      { id: 'D', text: 'Đấu tranh vũ trang.', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'B',
    explanation: {
      short: 'Đáp án đúng: B — Đấu tranh chính trị!',
      long: 'Đấu tranh giai cấp bao gồm đấu tranh kinh tế, chính trị và tư tưởng, trong đó đấu tranh chính trị là hình thức cao nhất và quan trọng nhất nhằm mục tiêu giành, giữ hoặc lật đổ chính quyền.',
    },
  },
  {
    id: 11,
    question: 'Vai trò của đấu tranh giai cấp trong lịch sử xã hội có giai cấp là gì?',
    options: [
      { id: 'A', text: 'Là nguyên nhân dẫn đến sự diệt vong của nhân loại.', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Là động lực trực tiếp, quan trọng thúc đẩy sự phát triển của lịch sử.', color: 'from-green-600 to-green-700' },
      { id: 'C', text: 'Là hiện tượng tạm thời sẽ tự biến mất khi kinh tế phát triển.', color: 'from-red-600 to-red-700' },
      { id: 'D', text: 'Là rào cản ngăn chặn sự tiến bộ của khoa học kỹ thuật.', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'B',
    explanation: {
      short: 'Đáp án đúng: B — Động lực trực tiếp, quan trọng thúc đẩy lịch sử!',
      long: 'Đấu tranh giai cấp là động lực trực tiếp, quan trọng của lịch sử xã hội có giai cấp. Nó là chìa khóa để giải quyết mâu thuẫn giữa lực lượng sản xuất đang phát triển và quan hệ sản xuất đã lỗi thời.',
    },
  },
  {
    id: 12,
    question: 'Đặc điểm nổi bật của cuộc đấu tranh giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là gì?',
    options: [
      { id: 'A', text: 'Là cuộc đấu tranh thuần túy về mặt quân sự.', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Diễn ra trong bối cảnh quá độ gián tiếp, bỏ qua chế độ tư bản chủ nghĩa.', color: 'from-green-600 to-green-700' },
      { id: 'C', text: 'Chỉ tập trung vào lĩnh vực văn hóa - tư tưởng.', color: 'from-red-600 to-red-700' },
      { id: 'D', text: 'Xóa bỏ hoàn toàn mâu thuẫn giai cấp ngay lập tức.', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'B',
    explanation: {
      short: 'Đáp án đúng: B — Quá độ gián tiếp, bỏ qua chế độ tư bản chủ nghĩa!',
      long: 'Ở Việt Nam, đặc điểm lớn nhất là quá độ gián tiếp (bỏ qua chế độ tư bản chủ nghĩa). Dù vậy, vẫn tồn tại mâu thuẫn giai cấp và cơ sở kinh tế cho giai cấp bóc lột, đòi hỏi sự lãnh đạo chặt chẽ của Đảng Cộng sản.',
    },
  },
  {
    id: 13,
    question: 'Trình tự nào sau đây phản ánh đúng quá trình hình thành dân tộc trong lịch sử?',
    options: [
      { id: 'A', text: 'Thị tộc → Bộ tộc → Bộ lạc → Dân tộc.', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Bộ lạc → Thị tộc → Bộ tộc → Dân tộc.', color: 'from-red-600 to-red-700' },
      { id: 'C', text: 'Thị tộc → Bộ lạc → Bộ tộc → Dân tộc.', color: 'from-green-600 to-green-700' },
      { id: 'D', text: 'Bộ tộc → Bộ lạc → Thị tộc → Dân tộc.', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'C',
    explanation: {
      short: 'Đáp án đúng: C — Thị tộc → Bộ lạc → Bộ tộc → Dân tộc!',
      long: 'Dân tộc là kết quả của một quá trình phát triển lâu dài của cộng đồng người, đi từ hình thức thấp đến cao: Thị tộc → Bộ lạc → Bộ tộc → Dân tộc.'
    },
  },
  {
    id: 14,
    question: 'Đặc điểm lịch sử hình thành dân tộc ở phương Đông (tiêu biểu như Việt Nam) có điểm gì khác biệt cốt lõi so với phương Tây?',
    options: [
      { id: 'A', text: 'Hình thành gắn liền với sự ra đời của chủ nghĩa tư bản.', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Hình thành muộn hơn so với các nước châu Âu.', color: 'from-red-600 to-red-700' },
      { id: 'C', text: 'Gắn liền với quá trình đấu tranh chống ngoại xâm và cải tạo thiên nhiên.', color: 'from-green-600 to-green-700' },
      { id: 'D', text: 'Chỉ hình thành khi có sự can thiệp của các đế quốc.', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'C',
    explanation: {
      short: 'Đáp án đúng: C — Đấu tranh chống ngoại xâm và cải tạo thiên nhiên!',
      long: 'Nếu như ở châu Âu, dân tộc hình thành gắn liền với sự ra đời của chủ nghĩa tư bản, thì ở phương Đông (như Việt Nam), dân tộc hình thành rất sớm, gắn liền với nhu cầu trị thủy (cải tạo thiên nhiên) và đoàn kết chống ngoại xâm.'
    },
  },
  {
    id: 15,
    question: 'Hiện tượng người dân cả nước cùng quyên góp, gửi hàng cứu trợ khi miền Trung gặp bão lũ phản ánh đặc trưng nào của dân tộc?',
    options: [
      { id: 'A', text: 'Cộng đồng thống nhất về kinh tế.', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Cộng đồng người có nhà nước và pháp luật thống nhất.', color: 'from-red-600 to-red-700' },
      { id: 'C', text: 'Sự bền vững về văn hóa và tâm lý, tính cách (tình đồng bào).', color: 'from-green-600 to-green-700' },
      { id: 'D', text: 'Cộng đồng thống nhất về ngôn ngữ.', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'C',
    explanation: {
      short: 'Đáp án đúng: C — Sự bền vững về văn hóa và tâm lý, tính cách!',
      long: 'Dù khác biệt về giai cấp hay mức sống, sự đoàn kết tương trợ lẫn nhau trong hoạn nạn thể hiện sâu sắc tính bền vững về văn hóa, tâm lý và tính cách của cộng đồng dân tộc Việt Nam.'
    },
  },
  {
    id: 16,
    question: 'Xét về mối quan hệ giữa giai cấp và dân tộc, nhận định nào sau đây là ĐÚNG?',
    options: [
      { id: 'A', text: 'Dân tộc ra đời trước giai cấp.', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Giai cấp quyết định khuynh hướng phát triển và tính chất của dân tộc.', color: 'from-green-600 to-green-700' },
      { id: 'C', text: 'Sự diệt vong của một giai cấp đồng nghĩa với sự diệt vong của dân tộc.', color: 'from-red-600 to-red-700' },
      { id: 'D', text: 'Trong một dân tộc chỉ có thể tồn tại duy nhất một giai cấp.', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'B',
    explanation: {
      short: 'Đáp án đúng: B — Giai cấp quyết định khuynh hướng và tính chất dân tộc!',
      long: 'Giai cấp có trước dân tộc hàng nghìn năm. Giai cấp thống trị sẽ quyết định tính chất và khuynh hướng phát triển của dân tộc đó. Khi giai cấp mất đi, dân tộc vẫn tiếp tục tồn tại lâu dài.'
    },
  },
  {
    id: 17,
    question: 'Trong công cuộc đổi mới hiện nay, giai cấp nào đóng vai trò nòng cốt định hướng dân tộc tiến lên "công nghiệp hóa, hiện đại hóa theo định hướng XHCN"?',
    options: [
      { id: 'A', text: 'Giai cấp nông dân.', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Tầng lớp tiểu thương.', color: 'from-red-600 to-red-700' },
      { id: 'C', text: 'Giai cấp công nhân và tầng lớp trí thức.', color: 'from-green-600 to-green-700' },
      { id: 'D', text: 'Giai cấp tư sản.', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'C',
    explanation: {
      short: 'Đáp án đúng: C — Giai cấp công nhân và tầng lớp trí thức!',
      long: 'Trong thời đại ngày nay, giai cấp công nhân và tầng lớp trí thức đóng vai trò quan trọng hàng đầu trong việc phát triển kinh tế, định hướng dân tộc phát triển theo con đường XHCN.'
    },
  },
  {
    id: 18,
    question: 'Trong xã hội có giai cấp đối kháng, lợi ích của toàn nhân loại có đặc điểm gì?',
    options: [
      { id: 'A', text: 'Hoàn toàn độc lập, không liên quan đến lợi ích giai cấp.', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Luôn luôn mâu thuẫn gay gắt với lợi ích dân tộc.', color: 'from-red-600 to-red-700' },
      { id: 'C', text: 'Bị chi phối bởi lợi ích giai cấp và dân tộc.', color: 'from-green-600 to-green-700' },
      { id: 'D', text: 'Chỉ đứng về phía giai cấp bị trị.', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'C',
    explanation: {
      short: 'Đáp án đúng: C — Bị chi phối bởi lợi ích giai cấp và dân tộc!',
      long: 'Mặc dù sự tồn tại của nhân loại là tiền đề cho giai cấp và dân tộc, nhưng trong xã hội có giai cấp, lợi ích nhân loại không tách rời và luôn bị chi phối bởi lợi ích của giai cấp và dân tộc thống trị.'
    },
  },
  {
    id: 19,
    question: 'Việc nông dân trồng nông sản bán giá rất rẻ cho thương lái, sau đó thương lái xuất khẩu với giá cao gấp nhiều lần là biểu hiện của điều gì trong thực tiễn?',
    options: [
      { id: 'A', text: 'Sự thống nhất về lợi ích kinh tế trong dân tộc.', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Mối quan hệ bóc lột sức lao động trong đời sống kinh tế.', color: 'from-green-600 to-green-700' },
      { id: 'C', text: 'Đấu tranh chính trị giữa các tầng lớp.', color: 'from-red-600 to-red-700' },
      { id: 'D', text: 'Sự phát triển tất yếu của lực lượng sản xuất.', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'B',
    explanation: {
      short: 'Đáp án đúng: B — Mối quan hệ bóc lột sức lao động!',
      long: 'Đây là ví dụ điển hình về thực chất của quan hệ giai cấp trong đời sống, khi tập đoàn người này (thương lái/doanh nghiệp lớn) chiếm đoạt giá trị thặng dư từ sức lao động của tập đoàn người khác (nông dân).'
    },
  },
  {
    id: 20,
    question: 'Hình thức đấu tranh giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội có điểm gì nổi bật so với các thời kỳ trước?',
    options: [
      { id: 'A', text: 'Chỉ sử dụng bạo lực vũ trang.', color: 'from-blue-600 to-blue-700' },
      { id: 'B', text: 'Hoàn toàn thông qua con đường hòa bình, giáo dục.', color: 'from-red-600 to-red-700' },
      { id: 'C', text: 'Chuyển sang đấu tranh kinh tế là duy nhất.', color: 'from-green-600 to-green-700' },
      { id: 'D', text: 'Kết hợp đa dạng nhiều hình thức (đổ máu & không đổ máu, bạo lực & hòa bình, kinh tế & hành chính).', color: 'from-yellow-600 to-yellow-700' },
    ],
    correct: 'D',
    explanation: {
      short: 'Đáp án đúng: D — Kết hợp đa dạng nhiều hình thức!',
      long: 'Thời kỳ quá độ có nội dung và điều kiện mới, do đó hình thức đấu tranh cũng vô cùng đa dạng, linh hoạt kết hợp giữa bạo lực và hòa bình, quân sự, kinh tế, giáo dục và hành chính nhằm xây dựng CNXH trên mọi lĩnh vực.'
    },
  },
]

export const aiAppendix = {
  statement: 'Nhóm sinh viên thực hiện cam kết: Trí tuệ nhân tạo (AI) chỉ được sử dụng đúng vai trò làm trợ lý kỹ thuật hỗ trợ tối ưu hóa giao diện (UI Boilerplate), phát hiện lỗi cú pháp lập trình và gợi ý phân tách cấu trúc hiển thị dữ liệu. Toàn bộ nền tảng tư tưởng luận điểm, logic phân tích học thuật, lựa chọn case study thực tiễn và biên soạn nội dung giáo trình đều do các thành viên trong nhóm trực tiếp nghiên cứu, đối chiếu và chịu trách nhiệm nội dung trước Hội đồng Giảng viên.',
  usageLog: [
    {
      tool: 'LLM (Gemini / ChatGPT)',
      purpose: 'Brainstorming ý tưởng cấu trúc nội dung và liên hệ thực tiễn',
      output: 'Cấu trúc dàn ý lý thuyết và gợi ý case study về tài xế công nghệ',
      edited: 'Biên dịch thuật ngữ chuẩn giáo trình Triết học Marx-Lenin của Bộ GD&ĐT; lồng ghép ví dụ thực tế tại Việt Nam',
    },
    {
      tool: 'Antigravity IDE (Claude Sonnet)',
      purpose: 'Gợi ý Component React và cấu trúc TypeScript',
      output: 'Khung mã nguồn component cho Timeline lịch sử và Quiz tương tác',
      edited: 'Tích hợp State của React, tối ưu animation với Framer Motion, đồng bộ hóa dữ liệu với content.ts',
    },
    {
      tool: 'v0.dev',
      purpose: 'Thử nghiệm bố cục giao diện Tailwind CSS',
      output: 'Bản mockup tĩnh các card layout',
      edited: 'Chuyển đổi sang TypeScript, bổ sung interactive state và responsive breakpoints',
    },
  ],
  references: [
    'Giáo trình Triết học Mác - Lênin, Ban Chỉ đạo biên soạn giáo trình lý luận chính trị toàn quốc, Bộ GD&ĐT, NXB Chính trị quốc gia Sự thật. (Trọng tâm: Chương III - Chủ nghĩa duy vật lịch sử).',
    'V.I. Lenin, Toàn tập, Tập 39, NXB Chính trị quốc gia, Hà Nội — Tác phẩm "Sáng kiến vĩ đại" (Định nghĩa giai cấp).',
    'Karl Marx & Friedrich Engels, Tuyên ngôn của Đảng Cộng sản (1848), NXB Chính trị quốc gia Sự thật.',
    'Oxfam International, Báo cáo Bất bình đẳng Toàn cầu (Global Inequality Report) — số liệu kinh tế.',
    'World Economic Forum, Future of Jobs Report 2025 — dự báo tác động AI đến thị trường lao động.',
  ],
}

// ============================================================
//  SECTION CONTENT DATA (3.2.1, 3.2.2, 3.2.3)
//  Dynamic theory sections with dropdown switching
// ============================================================
export type SectionType = '3.2.1' | '3.2.2' | '3.2.3'

export const sectionContent: Record<SectionType, {
  id: string
  title: string
  subtitle: string
  description: string
  cards: any[]
}> = {
  '3.2.1': {
    id: '3.2.1',
    title: 'Giai Cấp Và Đấu Tranh Giai Cấp',
    subtitle: '3.2.1',
    description: 'Hệ thống hóa ba trụ cột định nghĩa bản chất xã hội và quy luật vận động của nhân loại dưới nhãn quan duy vật biện chứng.',
    cards: [
      {
        id: 'class-def',
        title: 'Giai Cấp Là Gì?',
        subtitle: 'Định nghĩa của V.I. Lenin',
        image: 'https://images.unsplash.com/photo-1740215306586-363212cac416?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        frontSummary: 'Theo V.I. Lenin trong tác phẩm Sáng kiến vĩ đại, giai cấp được xác định qua 4 tiêu chí cốt lõi trong hệ thống sản xuất xã hội.',
        criteria: [
          { number: '01', title: 'Vị trí trong hệ thống sản xuất', desc: 'Tập đoàn thống trị (quản lý, định đoạt) đối lập với tập đoàn bị trị (lao động trực tiếp).' },
          { number: '02', title: 'Quan hệ đối với tư liệu sản xuất', desc: 'Tiêu chí quan trọng nhất. Ai sở hữu đất đai, nhà xưởng, máy móc, công nghệ — người đó nắm quyền lực giai cấp.' },
          { number: '03', title: 'Vai trò trong tổ chức lao động', desc: 'Ai ra mệnh lệnh, tổ chức quy trình sản xuất và ai phải tuân thủ, chấp hành.' },
          { number: '04', title: 'Phương thức phân phối sản phẩm', desc: 'Tập đoàn nắm tư liệu sản xuất chiếm đoạt của cải dư thừa; người lao động chỉ nhận tiền công tối thiểu.' },
        ],
        keyTakeaway: 'Giai cấp không mang tính tự nhiên hay vĩnh cửu. Bản chất của sự phân chia giai cấp là chế độ tư hữu về tư liệu sản xuất.',
        color: 'gold',
      },
      {
        id: 'origin',
        title: 'Nguồn Gốc Giai Cấp',
        subtitle: 'Bản đồ nguồn gốc xã hội',
        image: 'https://images.unsplash.com/photo-1528918832583-cd56bc35dbc7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        frontSummary: 'Giai cấp không xuất hiện cùng với loài người. Nó là sản phẩm của một thời điểm lịch sử cụ thể khi lực lượng sản xuất phát triển đủ để tạo ra của cải dư thừa.',
        stages: [
          { era: 'Công xã nguyên thủy', state: 'Không có giai cấp', desc: 'Lực lượng sản xuất cực kỳ thấp kém, công cụ lao động thô sơ. Sản phẩm làm ra chỉ đủ ăn, không có của cải dư thừa → Không có tư hữu → Không có giai cấp.', arrow: false },
          { era: 'Công cụ kim loại xuất hiện', state: 'Năng suất tăng vọt', desc: 'Công cụ lao động bằng kim loại xuất hiện → Năng suất lao động tăng vọt → Xuất hiện sản phẩm dư thừa.', arrow: true },
          { era: 'Bước ngoặt phân hóa', state: 'Tư hữu hình thành', desc: 'Những người đứng đầu bộ lạc, thị tộc tận dụng chức quyền để chiếm đoạt sản phẩm dư thừa → Chế độ tư hữu hình thành → Xã hội nứt gãy thành kẻ có của và người không có của.', arrow: true },
        ],
        color: 'crimson',
      },
      {
        id: 'struggle',
        title: 'Đấu Tranh Giai Cấp',
        subtitle: 'Động lực phát triển lịch sử',
        image: 'https://images.unsplash.com/photo-1591155426209-23831d47700d?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        frontSummary: 'Mâu thuẫn giữa Lực lượng sản xuất (ngày càng phát triển, mang tính xã hội hóa cao) và Quan hệ sản xuất (lỗi thời, mang tính tư hữu) là nguồn gốc của đấu tranh giai cấp.',
        forms: [
          { title: 'Đấu tranh kinh tế', desc: 'Đòi tăng lương, giảm giờ làm, cải thiện điều kiện lao động. Đình công, bãi công.' },
          { title: 'Đấu tranh chính trị', desc: 'Đòi quyền bầu cử, quyền lập hội, chống chế độ áp bức. Hướng tới giành chính quyền.' },
          { title: 'Đấu tranh tư tưởng', desc: 'Xây dựng hệ tư tưởng cách mạng, phê phán ý thức hệ của giai cấp thống trị.' },
        ],
        keyTakeaway: 'Đấu tranh giai cấp là động lực trực tiếp phát triển của xã hội có giai cấp, dẫn đến các cuộc cách mạng xã hội và sự ra đời của phương thức sản xuất mới.',
        color: 'purple',
      },
    ],
  },
  '3.2.2': {
    id: '3.2.2',
    title: 'Dân Tộc',
    subtitle: '3.2.2',
    description: 'Dân tộc là cộng đồng người ổn định hình thành trong lịch sử, có chung lãnh thổ, ngôn ngữ, nền kinh tế và văn hóa — một thực thể cao hơn bộ lạc, thị tộc.',
    cards: [
      {
        id: 'nationality-concept',
        title: 'Khái Niệm Dân Tộc',
        subtitle: 'Định nghĩa học thuật',
        image: 'https://images.unsplash.com/photo-1625851823323-ca66790f56ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        frontSummary: 'Dân tộc (nation) là một cộng đồng người ổn định được hình thành trong lịch sử dựa trên 4 đặc trưng cộng đồng bền vững.',
        points: [
          { title: 'Cộng đồng lãnh thổ', desc: 'Lãnh thổ ổn định là điều kiện tiên quyết cho sự hình thành dân tộc — "đất nước" theo nghĩa cụ thể.' },
          { title: 'Cộng đồng ngôn ngữ', desc: 'Ngôn ngữ thống nhất là linh hồn kết nối thành viên, là phương tiện giao tiếp và truyền tải văn hóa.' },
          { title: 'Cộng đồng kinh tế', desc: 'Nền kinh tế chung (thị trường nội địa) liên kết các thành viên trong các hoạt động sản xuất và trao đổi.' },
          { title: 'Cộng đồng văn hóa & tâm lý', desc: 'Bản sắc văn hóa, phong tục tập quán và ý thức về "chúng ta" tạo nên sợi dây vô hình gắn kết dân tộc.' },
        ],
        keyTakeaway: 'Dân tộc không phải là "chủng tộc" — đây là một cộng đồng lịch sử - xã hội, không phải sinh học. Nhiều dân tộc có thể có chung nguồn gốc chủng tộc.',
        color: 'blue',
      },
      {
        id: 'nationality-roles',
        title: 'Quan Hệ Giai Cấp - Dân Tộc',
        subtitle: 'Biện chứng và thực tiễn',
        image: 'https://images.unsplash.com/photo-1598980090474-7cdbe604d815?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        frontSummary: 'Vấn đề giai cấp và dân tộc có mối quan hệ biện chứng sâu sắc. Sự giải phóng giai cấp là tiền đề cho sự giải phóng dân tộc và ngược lại.',
        forms: [
          { title: 'Giai cấp quy định dân tộc', desc: 'Giai cấp thống trị trong xã hội quy định tính chất và khuynh hướng phát triển của dân tộc. Giai cấp tư sản tạo ra dân tộc tư sản chủ nghĩa.' },
          { title: 'Lợi ích dân tộc và giai cấp', desc: 'Trong xã hội có giai cấp, lợi ích dân tộc bị quy định bởi lợi ích của giai cấp thống trị. Tuy nhiên, có những lúc lợi ích dân tộc vượt lên trên ranh giới giai cấp (ví dụ: chống ngoại xâm).' },
          { title: 'Giải phóng dân tộc và giai cấp', desc: 'Chủ nghĩa Marx-Lenin chủ trương kết hợp giải phóng dân tộc với giải phóng giai cấp — không tách rời nhau.' },
        ],
        keyTakeaway: 'Giai cấp vô sản không có tổ quốc theo nghĩa hẹp, nhưng phải giành lấy chính quyền để xây dựng tổ quốc mới — một xã hội không còn bóc lột.',
        color: 'green',
      },
      {
        id: 'nationality-historical-char',
        title: 'Đặc Điểm & Thực Tiễn',
        subtitle: 'Lịch sử & Đời sống',
        image: 'https://images.unsplash.com/photo-1677138156122-6f868f7cf4cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        frontSummary: 'Sự hình thành dân tộc có những đặc điểm khác biệt giữa phương Tây và phương Đông, biểu hiện mạnh mẽ trong đời sống hiện đại.',
        points: [
          { title: 'Châu Âu', desc: 'Dân tộc hình thành gắn liền với sự ra đời của chủ nghĩa tư bản — thị trường thống nhất, ngôn ngữ quốc gia.' },
          { title: 'Phương Đông (Việt Nam)', desc: 'Hình thành rất sớm, gắn liền với quá trình đấu tranh chống ngoại xâm và cải tạo thiên nhiên — bản sắc từ hàng ngàn năm.' },
        ],
        lifeLinks: [
          { title: 'Ý thức dân tộc', desc: 'Tinh thần cổ vũ đội tuyển quốc gia (SEA Games, AFF Cup) là biểu hiện của sự thống nhất tinh thần.' },
          { title: 'Tình đồng bào', desc: 'Sự tương trợ trong thiên tai (bão lũ miền Trung) thể hiện sự gắn kết dân tộc vượt qua giai cấp.' },
          { title: 'Chủ quyền quốc gia', desc: 'Sức mạnh đoàn kết của mọi tầng lớp nhân dân trong việc bảo vệ chủ quyền biển đảo.' },
        ],
        keyTakeaway: 'Lợi ích dân tộc là chất kết dính vĩ đại, gắn kết mọi thành viên bất kể sự khác biệt về địa vị kinh tế.',
        color: 'indigo',
      },
    ],
  },
  '3.2.3': {
    id: '3.2.3',
    title: 'Mối Quan Hệ: Giai Cấp - Dân Tộc - Nhân Loại',
    subtitle: '3.2.3',
    description: 'Mối quan hệ biện chứng giữa các cộng đồng người trong sự phát triển của lịch sử nhân loại.',
    cards: [
      {
        id: 'class-nation',
        title: 'Giai Cấp & Dân Tộc',
        subtitle: 'Quan hệ biện chứng',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800',
        frontSummary: 'Giai cấp quyết định khuynh hướng phát triển của dân tộc, đồng thời dân tộc là môi trường cho đấu tranh giai cấp.',
        points: [
          { title: 'Giai cấp quyết định dân tộc', desc: 'Giai cấp thống trị quy định tính chất và khuynh hướng phát triển của dân tộc.' },
          { title: 'Sự tồn tại lâu dài', desc: 'Giai cấp có trước dân tộc; khi giai cấp mất đi, dân tộc vẫn tồn tại lâu dài.' },
          { title: 'Ảnh hưởng ngược lại', desc: 'Vấn đề dân tộc (như độc lập dân tộc) là tiền đề, điều kiện cho giải phóng giai cấp.' },
        ],
        keyTakeaway: 'Đấu tranh giải phóng dân tộc là điều kiện tiên quyết để thực hiện giải phóng giai cấp và con người.',
        color: 'violet',
      },
      {
        id: 'humanity',
        title: 'Vấn Đề Nhân Loại',
        subtitle: 'Cộng đồng toàn cầu',
        image: 'https://images.unsplash.com/photo-1591372161553-fee79c8b3e07?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        frontSummary: 'Nhân loại là toàn thể cộng đồng người sống trên Trái Đất, với bản chất xã hội là cơ sở cho tính thống nhất.',
        points: [
          { title: 'Khái niệm', desc: 'Toàn thể cộng đồng người sống trên Trái Đất, vượt qua mọi ranh giới giai cấp và quốc gia.' },
          { title: 'Cơ sở thống nhất', desc: 'Bản chất xã hội của con người và nhu cầu giải quyết các vấn đề toàn cầu.' },
          { title: 'Sự tồn tại tiền đề', desc: 'Sự tồn tại của nhân loại là tiền đề cho sự tồn tại của mọi giai cấp và dân tộc.' },
        ],
        keyTakeaway: 'Trong xã hội có giai cấp, lợi ích nhân loại không tách rời nhưng bị chi phối bởi lợi ích giai cấp và dân tộc.',
        color: 'rose',
      },
      {
        id: 'dialectical-relation',
        title: 'Mối Quan Hệ Biện Chứng',
        subtitle: 'Tổng thể thống nhất',
        image: 'https://plus.unsplash.com/premium_photo-1757018693682-85221eac01cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        frontSummary: 'Sự phát triển của nhân loại tạo điều kiện cho đấu tranh giai cấp và dân tộc, và ngược lại.',
        points: [
          { title: 'Tính chi phối', desc: 'Lợi ích giai cấp và dân tộc chi phối cách thức giải quyết các vấn đề nhân loại.' },
          { title: 'Sự phát triển chung', desc: 'Tiến bộ của nhân loại tạo môi trường thuận lợi cho sự nghiệp giải phóng dân tộc và giai cấp.' },
          { title: 'Xu hướng tương lai', desc: 'Sự xích lại gần nhau của các dân tộc và sự hình thành các giá trị chung của toàn nhân loại.' },
        ],
        keyTakeaway: 'Giải quyết đúng đắn mối quan hệ này là chìa khóa để xây dựng một thế giới hòa bình, ổn định và phát triển bền vững.',
        color: 'orange',
      },
    ],
  },
}
