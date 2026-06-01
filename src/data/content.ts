// ============================================================
//  CENTRALIZED CONTENT DATA
//  All Vietnamese text content for the website
// ============================================================

export const siteMetadata = {
  title: 'Những Bàn Tay Bị Lãng Quên',
  subtitle: 'AI ĐANG VIẾT NÊN LỊCH SỬ?',
  mainQuote: '"The history of all hitherto existing society is the history of class struggles."',
  quoteAuthor: '— Karl Marx & Friedrich Engels, Tuyên ngôn của Đảng Cộng sản (1848)',
  quoteVietnamese: '"Lịch sử của tất cả các xã hội tồn tại từ trước đến nay chỉ là lịch sử của đấu tranh giai cấp."',
  heroSubtext: `Khi lật mở những trang sử ký, chúng ta thường bị choáng ngợp bởi hào quang của các triều đại, 
danh tiếng của các vị vua hay sức mạnh của các cuộc viễn chinh. Nhưng đằng sau những biến động vĩ đại đó, 
có một động lực ngầm liên tục dịch chuyển bánh xe lịch sử. Karl Marx gọi đó là Đấu tranh giai cấp. 
Đây không phải là một lý thuyết quá khứ — nó là lăng kính giải mã toàn bộ thế giới chúng ta đang sống ngày hôm nay.`,
  course: 'Triết học Marx - Lenin | Chương III: Chủ nghĩa duy vật lịch sử',
}

export const theoryCards = [
  {
    id: 'class-def',
    icon: '🔍',
    title: 'Giai Cấp Là Gì?',
    subtitle: 'Định nghĩa của V.I. Lenin',
    frontSummary: 'Theo V.I. Lenin trong tác phẩm Sáng kiến vĩ đại, giai cấp được xác định qua 4 tiêu chí cốt lõi trong hệ thống sản xuất xã hội.',
    criteria: [
      {
        number: '01',
        title: 'Vị trí trong hệ thống sản xuất',
        desc: 'Tập đoàn thống trị (quản lý, định đoạt) đối lập với tập đoàn bị trị (lao động trực tiếp).',
      },
      {
        number: '02',
        title: 'Quan hệ đối với tư liệu sản xuất',
        desc: 'Tiêu chí quan trọng nhất. Ai sở hữu đất đai, nhà xưởng, máy móc, công nghệ — người đó nắm quyền lực giai cấp.',
      },
      {
        number: '03',
        title: 'Vai trò trong tổ chức lao động',
        desc: 'Ai ra mệnh lệnh, tổ chức quy trình sản xuất và ai phải tuân thủ, chấp hành.',
      },
      {
        number: '04',
        title: 'Phương thức phân phối sản phẩm',
        desc: 'Tập đoàn nắm tư liệu sản xuất chiếm đoạt của cải dư thừa; người lao động chỉ nhận tiền công tối thiểu.',
      },
    ],
    keyTakeaway: 'Giai cấp không mang tính tự nhiên hay vĩnh cửu. Bản chất của sự phân chia giai cấp là chế độ tư hữu về tư liệu sản xuất.',
    color: 'gold',
  },
  {
    id: 'origin',
    icon: '🌱',
    title: 'Nguồn Gốc Giai Cấp',
    subtitle: 'Bản đồ nguồn gốc xã hội',
    frontSummary: 'Giai cấp không xuất hiện cùng với loài người. Nó là sản phẩm của một thời điểm lịch sử cụ thể khi lực lượng sản xuất phát triển đủ để tạo ra của cải dư thừa.',
    stages: [
      {
        icon: '🏕️',
        era: 'Công xã nguyên thủy',
        state: 'Không có giai cấp',
        desc: 'Lực lượng sản xuất cực kỳ thấp kém, công cụ lao động thô sơ. Sản phẩm làm ra chỉ đủ ăn, không có của cải dư thừa → Không có tư hữu → Không có giai cấp.',
        arrow: false,
      },
      {
        icon: '⚒️',
        era: 'Công cụ kim loại xuất hiện',
        state: 'Năng suất tăng vọt',
        desc: 'Công cụ lao động bằng kim loại xuất hiện → Năng suất lao động tăng vọt → Xuất hiện sản phẩm dư thừa.',
        arrow: true,
      },
      {
        icon: '👑',
        era: 'Bước ngoặt phân hóa',
        state: 'Tư hữu hình thành',
        desc: 'Những người đứng đầu bộ lạc, thị tộc tận dụng chức quyền để chiếm đoạt sản phẩm dư thừa → Chế độ tư hữu hình thành → Xã hội nứt gãy thành kẻ có của và người không có của.',
        arrow: true,
      },
    ],
    color: 'crimson',
  },
  {
    id: 'struggle',
    icon: '⚡',
    title: 'Đấu Tranh Giai Cấp',
    subtitle: 'Động lực phát triển lịch sử',
    frontSummary: 'Mâu thuẫn giữa Lực lượng sản xuất (ngày càng phát triển, mang tính xã hội hóa cao) và Quan hệ sản xuất (lỗi thời, mang tính tư hữu) là nguồn gốc của đấu tranh giai cấp.',
    forms: [
      { icon: '💰', title: 'Đấu tranh kinh tế', desc: 'Đòi tăng lương, giảm giờ làm, cải thiện điều kiện lao động. Đình công, bãi công.' },
      { icon: '⚖️', title: 'Đấu tranh chính trị', desc: 'Đòi quyền bầu cử, quyền lập hội, chống chế độ áp bức. Hướng tới giành chính quyền.' },
      { icon: '🧠', title: 'Đấu tranh tư tưởng', desc: 'Xây dựng hệ tư tưởng cách mạng, phê phán ý thức hệ của giai cấp thống trị.' },
    ],
    keyTakeaway: 'Đấu tranh giai cấp là động lực trực tiếp phát triển của xã hội có giai cấp, dẫn đến các cuộc cách mạng xã hội và sự ra đời của phương thức sản xuất mới.',
    color: 'purple',
  },
]

export const timelineEpochs = [
  {
    id: 'slavery',
    era: 'Chiếm hữu nô lệ',
    period: '~3500 TCN – 500 SCN',
    icon: '⛓️',
    oppressor: { name: 'Chủ nô', icon: '👑', desc: 'Sở hữu tư liệu sản xuất & thể xác nô lệ' },
    oppressed: { name: 'Nô lệ', icon: '⛏️', desc: 'Bị bóc lột sức lao động đến kiệt sức, không có quyền tự do' },
    conflict: 'Khởi nghĩa Spartacus (73-71 TCN): 70,000 nô lệ nổi dậy chống lại Đế chế La Mã',
    result: 'Chế độ nô lệ tan rã → Chuyển dịch sang Phong kiến',
    color: 'from-yellow-900 to-orange-900',
    accent: '#f59e0b',
  },
  {
    id: 'feudal',
    era: 'Phong kiến',
    period: '~500 – 1800 SCN',
    icon: '🏰',
    oppressor: { name: 'Địa chủ / Chúa phong kiến', icon: '🏯', desc: 'Độc quyền sở hữu ruộng đất' },
    oppressed: { name: 'Nông dân / Nông nô', icon: '🌾', desc: 'Cày thuê, nộp tô thuế nặng nề, bị ràng buộc vào đất đai' },
    conflict: 'Đại cách mạng Pháp (1789): "Tự do – Bình đẳng – Bác ái" — giai cấp tư sản và quần chúng lao khổ lật đổ chế độ quân chủ',
    result: 'Phong kiến sụp đổ → Cách mạng tư sản xác lập phương thức sản xuất tư bản',
    color: 'from-green-900 to-emerald-900',
    accent: '#10b981',
  },
  {
    id: 'capitalism',
    era: 'Tư bản chủ nghĩa',
    period: '1800 – Hiện tại',
    icon: '🏭',
    oppressor: { name: 'Giai cấp tư sản', icon: '💼', desc: 'Sở hữu nhà xưởng, máy móc, tư bản vốn' },
    oppressed: { name: 'Giai cấp vô sản', icon: '🔧', desc: 'Công nhân phải bán sức lao động để kiếm sống, không có tư liệu sản xuất' },
    conflict: 'Phong trào công nhân toàn cầu, Cách mạng tháng Mười Nga (1917), Phong trào Chartist tại Anh',
    result: 'Mâu thuẫn giai cấp tiếp diễn dưới dạng mới trong kỷ nguyên công nghệ số',
    color: 'from-blue-900 to-indigo-900',
    accent: '#6366f1',
  },
]

export const realityData = {
  caseStudies: [
    {
      id: 'gig',
      icon: '📱',
      title: 'Nền Kinh Tế Nền Tảng & Gig Workers',
      tag: 'Case Study 01',
      tagColor: '#00d4ff',
      intro: 'Thế kỷ 21, công nhân không còn lấm lem bùn đất, họ mặc đồng phục của các hãng công nghệ, ngồi phòng máy lạnh hoặc di chuyển trên đường phố với chiếc điện thoại thông minh. Liệu bản chất bóc lột giai cấp có biến mất?',
      analysis: [
        {
          label: 'Tư liệu sản xuất thời đại số',
          value: 'Không còn thuần túy là nhà máy hay đất đai, mà là Thuật toán, Máy chủ, Big Data và Nền tảng ứng dụng.',
          icon: '💻',
        },
        {
          label: 'Giai cấp tư sản hiện đại (Tech Barons)',
          value: 'Các tập đoàn công nghệ đa quốc gia sở hữu toàn bộ tư liệu sản xuất số.',
          icon: '🏢',
        },
        {
          label: 'Giai cấp vô sản hiện đại (Gig Workers)',
          value: 'Tài xế công nghệ, người giao hàng, lập trình viên outsource. Hoàn toàn phụ thuộc vào thuật toán để có thu nhập.',
          icon: '🛵',
        },
        {
          label: 'Hình thức đấu tranh mới',
          value: 'Các làn sóng tắt app, đình công tập thể của tài xế công nghệ phản đối chiết khấu phần trăm chính là đấu tranh kinh tế của giai cấp vô sản thời đại số.',
          icon: '✊',
        },
      ],
    },
    {
      id: 'ai',
      icon: '🤖',
      title: 'Trí Tuệ Nhân Tạo & Độc Quyền Tư Liệu Sản Xuất',
      tag: 'Case Study 02',
      tagColor: '#c9a84c',
      intro: 'AI có tiềm năng giải phóng sức lao động, nhưng dưới chế độ tư bản chủ nghĩa, AI đang trở thành công cụ tối ưu hóa lợi nhuận cho giai cấp tư sản.',
      analysis: [
        {
          label: 'Tập trung quyền lực công nghệ',
          value: 'Phần lớn hạ tầng xử lý AI mạnh nhất (Chip, siêu máy tính) nằm trong tay một vài tập đoàn lớn nhất Silicon Valley.',
          icon: '🖥️',
        },
        {
          label: 'Bất bình đẳng tài sản (Oxfam)',
          value: '1% dân số giàu nhất sở hữu khối tài sản bằng 99% phần còn lại của nhân loại.',
          icon: '📊',
        },
        {
          label: 'Làn sóng "vô sản hóa" mới',
          value: 'AI thay thế hàng loạt nhân sự, làm sâu sắc thêm khoảng cách giàu nghèo và kích ngòi cho mâu thuẫn giai cấp mới.',
          icon: '⚠️',
        },
        {
          label: 'Kết luận triết học',
          value: 'AI là tư liệu sản xuất mới nhất — và câu hỏi "ai sở hữu AI?" chính là câu hỏi về quyền lực giai cấp trong thế kỷ 21.',
          icon: '🔮',
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
    { value: 52, suffix: '%', label: 'Tài sản thế giới trong tay 1% giàu nhất', color: '#e74c3c' },
    { value: 3.7, suffix: 'B', label: 'Người lao động trong nền kinh tế gig toàn cầu', color: '#00d4ff' },
    { value: 85, suffix: 'M', label: 'Việc làm có thể bị AI thay thế (WEF 2025)', color: '#c9a84c' },
  ],
}

export const quizQuestions = [
  {
    id: 1,
    question: 'Bạn tích cóp tiền mua được một chiếc laptop xịn trị giá 100 triệu đồng để làm đồ họa. Chiếc máy này được phân loại là gì trong triết học Marx?',
    emoji: '💻',
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
    emoji: '💰',
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
]

// ============================================================
//  SECTION CONTENT DATA (3.2.1, 3.2.2, 3.2.3)
// ============================================================

export const sectionContent = {
  '3.2.1': {
    id: '3.2.1',
    title: 'Giai Cấp và Đấu Tranh Giai Cấp',
    subtitle: '3.2.1',
    description: 'Khái niệm cơ bản về giai cấp, nguồn gốc, và hình thức đấu tranh giai cấp',
    navLabels: [
      { id: 'ethnicity', label: 'Lịch Sử Giai Cấp' },
      { id: 'reality', label: 'Thực Tiễn Giai Cấp' },
      { id: 'quiz', label: 'Kiểm Định Giai Cấp' },
    ],
    cards: [
      {
        id: 'class-def',
        icon: '🔍',
        title: 'Giai Cấp Là Gì?',
        subtitle: 'Định nghĩa của V.I. Lenin',
        frontSummary: 'Theo V.I. Lenin trong tác phẩm Sáng kiến vĩ đại, giai cấp được xác định qua 4 tiêu chí cốt lõi trong hệ thống sản xuất xã hội.',
        criteria: [
          {
            number: '01',
            title: 'Vị trí trong hệ thống sản xuất',
            desc: 'Tập đoàn thống trị (quản lý, định đoạt) đối lập với tập đoàn bị trị (lao động trực tiếp).',
          },
          {
            number: '02',
            title: 'Quan hệ đối với tư liệu sản xuất',
            desc: 'Tiêu chí quan trọng nhất. Ai sở hữu đất đai, nhà xưởng, máy móc, công nghệ — người đó nắm quyền lực giai cấp.',
          },
          {
            number: '03',
            title: 'Vai trò trong tổ chức lao động',
            desc: 'Ai ra mệnh lệnh, tổ chức quy trình sản xuất và ai phải tuân thủ, chấp hành.',
          },
          {
            number: '04',
            title: 'Phương thức phân phối sản phẩm',
            desc: 'Tập đoàn nắm tư liệu sản xuất chiếm đoạt của cải dư thừa; người lao động chỉ nhận tiền công tối thiểu.',
          },
        ],
        keyTakeaway: 'Giai cấp không mang tính tự nhiên hay vĩnh cửu. Bản chất của sự phân chia giai cấp là chế độ tư hữu về tư liệu sản xuất.',
        color: 'gold',
      },
      {
        id: 'origin',
        icon: '🌱',
        title: 'Nguồn Gốc Giai Cấp',
        subtitle: 'Bản đồ nguồn gốc xã hội',
        frontSummary: 'Giai cấp không xuất hiện cùng với loài người. Nó là sản phẩm của một thời điểm lịch sử cụ thể khi lực lượng sản xuất phát triển đủ để tạo ra của cải dư thừa.',
        stages: [
          {
            icon: '🏕️',
            era: 'Công xã nguyên thủy',
            state: 'Không có giai cấp',
            desc: 'Lực lượng sản xuất cực kỳ thấp kém, công cụ lao động thô sơ. Sản phẩm làm ra chỉ đủ ăn, không có của cải dư thừa → Không có tư hữu → Không có giai cấp.',
            arrow: false,
          },
          {
            icon: '⚒️',
            era: 'Công cụ kim loại xuất hiện',
            state: 'Năng suất tăng vọt',
            desc: 'Công cụ lao động bằng kim loại xuất hiện → Năng suất lao động tăng vọt → Xuất hiện sản phẩm dư thừa.',
            arrow: true,
          },
          {
            icon: '👑',
            era: 'Bước ngoặt phân hóa',
            state: 'Tư hữu hình thành',
            desc: 'Những người đứng đầu bộ lạc, thị tộc tận dụng chức quyền để chiếm đoạt sản phẩm dư thừa → Chế độ tư hữu hình thành → Xã hội nứt gãy thành kẻ có của và người không có của.',
            arrow: true,
          },
        ],
        color: 'crimson',
      },
      {
        id: 'struggle',
        icon: '⚡',
        title: 'Đấu Tranh Giai Cấp',
        subtitle: 'Động lực phát triển lịch sử',
        frontSummary: 'Mâu thuẫn giữa Lực lượng sản xuất (ngày càng phát triển, mang tính xã hội hóa cao) và Quan hệ sản xuất (lỗi thời, mang tính tư hữu) là nguồn gốc của đấu tranh giai cấp.',
        forms: [
          { icon: '💰', title: 'Đấu tranh kinh tế', desc: 'Đòi tăng lương, giảm giờ làm, cải thiện điều kiện lao động. Đình công, bãi công.' },
          { icon: '⚖️', title: 'Đấu tranh chính trị', desc: 'Đòi quyền bầu cử, quyền lập hội, chống chế độ áp bức. Hướng tới giành chính quyền.' },
          { icon: '🧠', title: 'Đấu tranh tư tưởng', desc: 'Xây dựng hệ tư tưởng cách mạng, phê phán ý thức hệ của giai cấp thống trị.' },
        ],
        keyTakeaway: 'Đấu tranh giai cấp là động lực trực tiếp phát triển của xã hội có giai cấp, dẫn đến các cuộc cách mạng xã hội và sự ra đời của phương thức sản xuất mới.',
        color: 'purple',
      },
    ]
  },
  '3.2.2': {
    id: '3.2.2',
    title: 'Dân Tộc',
    subtitle: '3.2.2',
    description: 'Khái niệm dân tộc, sự hình thành, và vai trò của dân tộc trong lịch sử',
    navLabels: [
      { id: 'ethnicity', label: 'Lịch Sử Dân Tộc' },
      { id: 'reality', label: 'Thực Tiễn Dân Tộc' },
      { id: 'quiz', label: 'Kiểm Định Dân Tộc' },
    ],
    cards: [
      {
        id: 'nationality-def',
        icon: '🏛️',
        title: 'Dân Tộc Là Gì?',
        subtitle: 'Định nghĩa từ Triết học Mác-Lênin',
        frontSummary: 'Dân tộc là một cộng đồng xã hội ổn định được hình thành bởi sự giống nhau về ngôn ngữ, lãnh thổ, nền kinh tế, và đặc tính tâm lý văn hóa.',
        characteristics: [
          {
            number: '01',
            title: 'Ngôn ngữ chung',
            desc: 'Ngôn ngữ là phương tiện giao tiếp cơ bản giữa các thành viên dân tộc, phản ánh văn hóa độc đáo của dân tộc đó.',
          },
          {
            number: '02',
            title: 'Lãnh thổ công cộng',
            desc: 'Dân tộc gắn liền với một lãnh thổ địa lý cụ thể, nơi hình thành nên tập quán, phong tục của dân tộc.',
          },
          {
            number: '03',
            title: 'Nền kinh tế thống nhất',
            desc: 'Liên kết thị trường, chuỗi sản xuất, thương mại chung tạo nên sự liên kết kinh tế và lợi ích chung.',
          },
          {
            number: '04',
            title: 'Tâm lý văn hóa giống nhau',
            desc: 'Cùng tính cách, tập quán, truyền thống, tín ngưỡng — tạo nên sự gắn kết tinh thần độc đáo.',
          },
        ],
        keyTakeaway: 'Dân tộc là sản phẩm lịch sử, không phải danh mục sinh học. Dân tộc ra đời cùng với chủ nghĩa tư bản và phát triển qua các giai đoạn lịch sử khác nhau.',
        color: 'blue',
      },
      {
        id: 'nationality-history',
        icon: '📚',
        title: 'Sự Hình Thành Dân Tộc',
        subtitle: 'Quá trình phát triển lịch sử',
        frontSummary: 'Dân tộc không phải từ lâu đời như chủng tộc, mà là hiện tượng lịch sử khác biệt xuất hiện từ giai đoạn Phong kiến muộn và phát triển hoàn toàn trong giai đoạn tư bản chủ nghĩa.',
        stages: [
          {
            icon: '🏰',
            era: 'Phong kiến muộn',
            state: 'Thành lập Quốc gia Dân tộc đầu tiên',
            desc: 'Những Quốc gia dân tộc đầu tiên ra đời ở Tây Âu (Pháp, Tây Ban Nha, Anh) thông qua sự thống nhất các lãnh chúa phong kiến và hình thành các vương quốc trung ương mạnh.',
            arrow: false,
          },
          {
            icon: '🏭',
            era: 'Phát triển tư bản chủ nghĩa',
            state: 'Dân tộc trở thành Quốc gia Tư sản',
            desc: 'Với sự phát triển của chủ nghĩa tư bản và nhu cầu thị trường thống nhất, dân tộc phát triển đầy đủ các yếu tố, giai cấp tư sản nắm chính quyền thành lập các Quốc gia dân tộc buổi đầu.',
            arrow: true,
          },
          {
            icon: '✊',
            era: 'Đấu tranh Giải phóng Dân tộc',
            state: 'Dân tộc bị áp bức đòi độc lập',
            desc: 'Ở các nước bị thực dân chiếm đóng, các dân tộc bị áp bức đấu tranh để giành độc lập dân tộc, thành lập quốc gia dân tộc của riêng mình.',
            arrow: true,
          },
        ],
        color: 'emerald',
      },
      {
        id: 'nationality-roles',
        icon: '🌍',
        title: 'Vai Trò và Vai Vế của Dân Tộc',
        subtitle: 'Tính tiến bộ và hạn chế',
        frontSummary: 'Dân tộc có vai trò lịch sử tiến bộ trong việc hình thành Quốc gia và đấu tranh giải phóng, nhưng nó cũng có những hạn chế vốn có của nó dưới tư bản chủ nghĩa.',
        forms: [
          { icon: '✨', title: 'Vai trò tiến bộ', desc: 'Thống nhất dân tộc, tạo ra sức mạnh chính trị để đấu tranh chống thực dân, xây dựng nền kinh tế độc lập.' },
          { icon: '🚧', title: 'Hạn chế: Hẹp hòi dân tộc', desc: 'Chủ nghĩa dân tộc có thể dẫn đến tư duy hẹp hòi, xua đuổi người nước ngoài, hoặc hành động quân phát xít.' },
          { icon: '⚖️', title: 'Giới hạn dưới tư bản', desc: 'Dân tộc không thể giải quyết mâu thuẫn giai cấp, tự nó không đi tới xã hội cộng sản được.' },
        ],
        keyTakeaway: 'Dân tộc là phạm trù lịch sử. Khi cách mạng xã hội chủ nghĩa thành công, dân tộc sẽ từng bước tan biến vào sự thống nhất của loài người dưới chủ nghĩa cộng sản.',
        color: 'indigo',
      },
    ]
  },
  '3.2.3': {
    id: '3.2.3',
    title: 'Mối Quan Hệ: Giai Cấp - Dân Tộc - Nhân Loại',
    subtitle: '3.2.3',
    description: 'Mối quan hệ biện chứng giữa giai cấp, dân tộc và sự tiến hóa của loài người',
    navLabels: [
      { id: 'ethnicity', label: 'Quá Trình Lịch Sử' },
      { id: 'reality', label: 'Thực Tiễn Toàn Cầu' },
      { id: 'quiz', label: 'Kiểm Định Tương Lai' },
    ],
    cards: [
      {
        id: 'relationship',
        icon: '🔗',
        title: 'Mối Quan Hệ Giai Cấp - Dân Tộc',
        subtitle: 'Tính chặt chẽ và Mâu thuẫn',
        frontSummary: 'Giai cấp và dân tộc không phải hai thứ độc lập mà có mối quan hệ biện chứng: trong cùng một dân tộc có các giai cấp khác nhau, nhưng giai cấp vô sản có lợi ích chung vượt quá ranh giới dân tộc.',
        relationship: [
          {
            number: '01',
            title: 'Giai cấp chia cắt dân tộc',
            desc: 'Mỗi dân tộc chứa đựng trong nó các giai cấp xung đột: tư sản và vô sản. Lợi ích giai cấp có thể mạnh hơn lòng yêu nước dân tộc.',
          },
          {
            number: '02',
            title: 'Dân tộc liên kết lớp người cùng lợi ích kinh tế',
            desc: 'Tuy nhiên, dân tộc lại tạo nên sự liên kết xã hội mạnh, đặc biệt giữa giai cấp vô sản với toàn dân tộc khi chống lại áp bức ngoài (thực dân).',
          },
          {
            number: '03',
            title: 'Vô sản quốc tế vượt quá ranh giới dân tộc',
            desc: 'Karl Marx khẳng định: "Vô sản không có tổ quốc." Lợi ích của giai cấp vô sản toàn thế giới là chung, nằm trên nền tảng xã hội chủ nghĩa.',
          },
        ],
        keyTakeaway: 'Giai cấp là tính từ cơ sở vật chất (tư liệu sản xuất), dân tộc là tính từ lịch sử văn hóa. Cả hai đều là phạm trù lịch sử, cuối cùng sẽ biến mất khi loài người bước vào xã hội cộng sản.',
        color: 'violet',
      },
      {
        id: 'historical-process',
        icon: '⏳',
        title: 'Quá Trình Lịch Sử và Tiến Hóa Loài Người',
        subtitle: 'Từ bộ lạc đến xã hội cộng sản',
        frontSummary: 'Lịch sử nhân loại là quá trình liên tiếp: từ cộng đồng bộ lạc → các quốc gia dân tộc → thế giới thống nhất. Trong quá trình đó, giai cấp và dân tộc đều là hiện tượng gestation và hủy diệt bước bước.',
        timeline: [
          {
            icon: '🏕️',
            era: 'Công xã nguyên thủy',
            desc: 'Bộ lạc/bộ tộc nhỏ, không có giai cấp, lợi ích chung toàn bộ cộng đồng. Đây là vàng thời đảo ngược: con người bình đẳng nhưng lực lượng sản xuất cực thấp.',
            transition: 'Năng suất phát triển → Tư hữu hình thành → Giai cấp nảy sinh',
          },
          {
            icon: '👑',
            era: 'Các chế độ giai cấp',
            desc: 'Nô lệ, phong kiến, tư bản: mỗi giai đoạn đều có giai cấp thống trị và bị thống trị, cũng như các dân tộc thành lập/mở rộng quyền lực quốc gia.',
            transition: 'Đấu tranh giai cấp dẫn đến cách mạng xã hội',
          },
          {
            icon: '✊',
            era: 'Cách mạng vô sản & Xã hội chủ nghĩa',
            desc: 'Giai cấp vô sản lên chính quyền, xóa bỏ tư hữu tư liệu sản xuất, hình thành loạt quốc gia xã hội chủ nghĩa. Đấu tranh dân tộc hòa lẫn với đấu tranh giai cấp.',
            transition: 'Sự hội nhập quốc tế từ từ',
          },
          {
            icon: '🌍',
            era: 'Xã hội cộng sản (tương lai)',
            desc: 'Không còn giai cấp (vô sản hòa lẫn với xã hội), không còn quốc gia (thế giới thống nhất). Loài người sống trong xã hội không giai cấp, không quốc gia: từ "tự do mỗi người là điều kiện tự do cho mọi người".',
            transition: false,
          },
        ],
        color: 'rose',
      },
      {
        id: 'practical-implications',
        icon: '💭',
        title: 'Ý Nghĩa Thực Tiễn Đối với Việt Nam',
        subtitle: 'Lý thuyết áp dụng vào thực tế',
        frontSummary: 'Việt Nam là quốc gia thực hiện cách mạng xã hội chủ nghĩa, nhưng mâu thuẫn giai cấp vẫn tồn tại. Hiểu rõ mối quan hệ giữa giai cấp và dân tộc giúp định hướng chính sách.',
        implications: [
          { icon: '🤝', title: 'Liên kết giai cấp & dân tộc', desc: 'Công nhân-nông dân-trí thức phải thống nhất dưới lãnh đạo Đảng Cộng sản để xây dựng xã hội chủ nghĩa, không để bị chia rẽ bởi tư duy hẹp hòi dân tộc.' },
          { icon: '🌐', title: 'Chủ nghĩa quốc tế vô sản', desc: 'Vô sản Việt Nam cần liên đoàn với vô sản thế giới chống chủ nghĩa đế quốc, chứ không bao giờ là "đồng chí" của tư sản nước mình.' },
          { icon: '⚔️', title: 'Đấu tranh hai front', desc: 'Đấu tranh chống áp bức dân tộc (chống đế quốc) + đấu tranh chống áp bức giai cấp (chống tư sản) = đường lối chính trị toàn diện.' },
          { icon: '🛠️', title: 'Xây dựng xã hội mới', desc: 'Khi xã hội chủ nghĩa thành công, tư hữu xóa bỏ, kỳ thị giai cấp biến mất, dân tộc dần hòa tan vào cộng đồng loài người thống nhất.' },
        ],
        color: 'orange',
      },
    ]
  }
}

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
