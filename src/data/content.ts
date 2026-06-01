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
  heroImage: 'https://images.unsplash.com/photo-1585155967349-90c1b143d7f8?q=80&w=2000',
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
    image: 'https://thf.bing.com/th/id/OIP.kqvxpYhj_OXRTx-Zl-sC-QHaEK?w=324&h=182&c=7&r=0&o=7&cb=thfc1falcon&dpr=1.3&pid=1.7&rm=3',
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
    image: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=2000',
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
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000',
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
      title: 'Nền Kinh Tế Nền Tảng & Gig Workers',
      image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=2000',
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
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000',
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
    { value: 52, suffix: '%', label: 'Tài sản thế giới trong tay 1% giàu nhất', color: '#e74c3c' },
    { value: 3.7, suffix: 'B', label: 'Người lao động trong nền kinh tế gig toàn cầu', color: '#00d4ff' },
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
]

// ============================================================
//  SECTION CONTENT DATA (3.2.1, 3.2.2, 3.2.3)
// ============================================================

export const sectionContent = {
  '3.2.1': {
    id: '3.2.1',
    title: 'Giai Cấp và Đấu Tranh Giai Cấp',
    subtitle: '3.2.1',
    description: 'Khái niệm, nguồn gốc, phân loại và các hình thức đấu tranh giai cấp trong lịch sử và thời kỳ quá độ.',
    navLabels: [
      { id: 'theory', label: 'Lý thuyết' },
      { id: 'timeline', label: 'Lịch sử' },
      { id: 'reality', label: 'Thực tiễn' },
      { id: 'quiz', label: 'Kiểm tra' },
    ],
    cards: [
      {
        id: 'class-def',
        icon: '🔍',
        title: 'Khái Niệm Giai Cấp',
        subtitle: 'Định nghĩa & Bản chất',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000',
        frontSummary: 'Giai cấp là những tập đoàn người lớn có địa vị kinh tế - xã hội khác nhau trong một hệ thống sản xuất xã hội nhất định.',
        criteria: [
          { number: '01', title: 'Địa vị kinh tế - xã hội', desc: 'Khác nhau về vị trí trong hệ thống sản xuất xã hội.' },
          { number: '02', title: 'Quan hệ tư liệu sản xuất', desc: 'Dấu hiệu chủ yếu quy định địa vị giai cấp là quan hệ sở hữu đối với tư liệu sản xuất.' },
          { number: '03', title: 'Vai trò tổ chức lao động', desc: 'Khác nhau về vai trò trong tổ chức quản lý lao động xã hội.' },
          { number: '04', title: 'Phân phối sản phẩm', desc: 'Khác nhau về phương thức và quy mô hưởng thụ sản phẩm xã hội.' },
        ],
        keyTakeaway: 'Thực chất của quan hệ giai cấp là quan hệ bóc lột và bị bóc lột: tập đoàn người này chiếm đoạt lao động của tập đoàn người khác.',
        color: 'gold',
      },
      {
        id: 'origin',
        icon: '🌱',
        title: 'Nguồn Gốc Giai Cấp',
        subtitle: 'Lịch sử hình thành',
        image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/ancient-egyptian-agriculture-science-source.jpg',
        frontSummary: 'Giai cấp không tồn tại vĩnh cửu mà xuất hiện ở cuối thời kỳ cộng sản nguyên thủy do sự phát triển của lực lượng sản xuất.',
        stages: [
          {
            era: 'Lực lượng sản xuất phát triển',
            desc: 'Sự xuất hiện của công cụ bằng kim loại (đặc biệt là đồng) làm tăng năng suất lao động.',
          },
          {
            era: 'Của cải dư thừa',
            desc: 'Lao động tạo ra nhiều sản phẩm hơn mức cần thiết, dẫn đến sự xuất hiện của cải dư thừa.',
          },
          {
            era: 'Tư hữu ra đời',
            desc: 'Chế độ tư hữu về tư liệu sản xuất hình thành, dẫn đến phân hóa giàu nghèo và giai cấp ra đời.',
          },
        ],
        color: 'crimson',
      },
      {
        id: 'classification',
        icon: '📊',
        title: 'Phân Loại & Thực Tiễn',
        subtitle: 'Cấu trúc giai cấp',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000',
        frontSummary: 'Xã hội có giai cấp bao gồm các giai cấp cơ bản, không cơ bản và các tầng lớp trung gian với những ví dụ thực tiễn trong đời sống.',
        points: [
          { title: 'Giai cấp cơ bản', desc: 'Gắn liền with phương thức sản xuất thống trị (như Chủ nô - Nô lệ, Địa chủ - Nông nô, Tư sản - Vô sản).' },
          { title: 'Giai cấp không cơ bản', desc: 'Đại diện cho phương thức sản xuất tàn dư hoặc mầm mống trong xã hội.' },
          { title: 'Tầng lớp trung gian', desc: 'Các nhóm người không đại diện cho phương thức sản xuất nào (trí thức, tiểu thương, nhân viên văn phòng...).' },
        ],
        lifeLinks: [
          { title: 'Công nhân vs Chủ doanh nghiệp', desc: 'Công nhân bán sức lao động, chủ hưởng lợi nhuận lớn từ giá trị thặng dư.' },
          { title: 'Nông dân vs Thương lái', desc: 'Nông dân sản xuất nhưng thương lái/doanh nghiệp lớn nắm giữ kênh phân phối và hưởng chênh lệch giá cao.' },
        ],
        keyTakeaway: 'Tầng lớp trung gian như freelancer, nhân viên văn phòng... dễ bị ảnh hưởng bởi các biến động kinh tế do không nắm giữ tư liệu sản xuất chủ yếu.',
        color: 'emerald',
      },
      {
        id: 'struggle',
        icon: '⚡',
        title: 'Đấu Tranh Giai Cấp',
        subtitle: 'Động lực phát triển',
        image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2000',
        frontSummary: 'Đấu tranh giai cấp là tất yếu do mâu thuẫn lợi ích không thể điều hòa, đóng vai trò là động lực trực tiếp của lịch sử.',
        forms: [
          { title: 'Đấu tranh kinh tế', desc: 'Đòi quyền lợi vật chất, cải thiện điều kiện làm việc (tăng lương, giảm giờ làm).' },
          { title: 'Đấu tranh tư tưởng', desc: 'Xây dựng hệ tư tưởng cách mạng, phê phán tư tưởng của giai cấp áp bức.' },
          { title: 'Đấu tranh chính trị', desc: 'Hình thức cao nhất và quan trọng nhất, nhằm giành lấy chính quyền nhà nước.' },
        ],
        keyTakeaway: 'Đấu tranh giai cấp là chìa khóa giải quyết mâu thuẫn giữa lực lượng sản xuất mới và quan hệ sản xuất lỗi thời.',
        color: 'purple',
      },
      {
        id: 'transition',
        icon: '🇻🇳',
        title: 'Thời Kỳ Quá Độ (Việt Nam)',
        subtitle: 'Đặc điểm mới',
        image: 'https://images.unsplash.com/photo-1555944670-6d3361f7dd11?q=80&w=2000',
        frontSummary: 'Trong thời kỳ quá độ lên CNXH, đấu tranh giai cấp diễn ra trong điều kiện mới with những nội dung và hình thức phức tạp.',
        points: [
          { title: 'Nội dung mới', desc: 'Xây dựng toàn diện trên các lĩnh vực kinh tế, chính trị, tư tưởng, văn hóa.' },
          { title: 'Hình thức mới', desc: 'Kết hợp đa dạng giữa hòa bình và bạo lực, giáo dục và hành chính.' },
          { title: 'Đặc điểm Việt Nam', desc: 'Quá độ gián tiếp, vai trò lãnh đạo của Đảng và kết hợp phát triển kinh tế với an ninh quốc phòng.' },
        ],
        keyTakeaway: 'Đấu tranh giai cấp ở Việt Nam hiện nay gắn liền with sự nghiệp bảo vệ độc lập dân tộc và xây dựng CNXH dân giàu, nước mạnh, dân chủ, công bằng, văn minh.',
        color: 'orange',
      },
    ]
  },
  '3.2.2': {
    id: '3.2.2',
    title: 'Dân Tộc',
    subtitle: '3.2.2',
    description: 'Quá trình hình thành, bản chất và đặc điểm lịch sử của cộng đồng dân tộc.',
    navLabels: [
      { id: 'theory', label: 'Lý thuyết' },
      { id: 'timeline', label: 'Lịch sử' },
      { id: 'reality', label: 'Thực tiễn' },
      { id: 'quiz', label: 'Kiểm tra' },
    ],
    cards: [
      {
        id: 'nationality-history',
        icon: '📚',
        title: 'Sự Hình Thành Dân Tộc',
        subtitle: 'Quá trình phát triển',
        image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000',
        frontSummary: 'Dân tộc là giai đoạn phát triển cao nhất của cộng đồng người, trải qua các hình thức tổ chức từ thấp đến cao.',
        stages: [
          { era: 'Thị tộc', desc: 'Cộng đồng người dựa trên quan hệ huyết thống, quy mô nhỏ.' },
          { era: 'Bộ lạc', desc: 'Tập hợp các thị tộc có cùng nguồn gốc hoặc quan hệ láng giềng.' },
          { era: 'Bộ tộc', desc: 'Cộng đồng người hình thành khi chế độ tư hữu ra đời, thay thế quan hệ huyết thống bằng quan hệ lãnh thổ.' },
          { era: 'Dân tộc', desc: 'Cộng đồng ổn định hình thành trên cơ sở thống nhất về lãnh thổ, kinh tế, ngôn ngữ và văn hóa.' },
        ],
        color: 'emerald',
      },
      {
        id: 'nationality-def',
        icon: '🏛️',
        title: 'Bản Chất Dân Tộc',
        subtitle: 'Đặc trưng cơ bản',
        image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=2000',
        frontSummary: 'Dân tộc là một cộng đồng người ổn định, bền vững với những đặc trưng gắn liền with nhà nước và pháp luật.',
        characteristics: [
          { number: '01', title: 'Lãnh thổ thống nhất', desc: 'Cộng đồng ổn định cư trú trên một vùng lãnh thổ xác định.' },
          { number: '02', title: 'Ngôn ngữ thống nhất', desc: 'Sử dụng chung một ngôn ngữ làm phương tiện giao tiếp chủ yếu.' },
          { number: '03', title: 'Kinh tế thống nhất', desc: 'Có sự liên kết về thị trường và các mối quan hệ kinh tế trong cả nước.' },
          { number: '04', title: 'Văn hóa & Tâm lý', desc: 'Bền vững về bản sắc văn hóa và tính cách dân tộc.' },
        ],
        keyTakeaway: 'Dân tộc là cộng đồng người có nhà nước và pháp luật thống nhất, phân biệt with các hình thức cộng đồng trước đó.',
        color: 'blue',
      },
      {
        id: 'nationality-historical-char',
        icon: '🌍',
        title: 'Đặc Điểm & Thực Tiễn',
        subtitle: 'Lịch sử & Đời sống',
        image: 'https://images.unsplash.com/photo-1555944670-6d3361f7dd11?q=80&w=2000',
        frontSummary: 'Sự hình thành dân tộc có những đặc điểm khác biệt giữa phương Tây và phương Đông, biểu hiện mạnh mẽ trong đời sống hiện đại.',
        points: [
          { title: 'Châu Âu', desc: 'Dân tộc hình thành gắn liền with sự ra đời của chủ nghĩa tư bản.' },
          { title: 'Phương Đông (Việt Nam)', desc: 'Hình thành rất sớm, gắn liền with quá trình đấu tranh chống ngoại xâm và cải tạo thiên nhiên.' },
        ],
        lifeLinks: [
          { title: 'Ý thức dân tộc', desc: 'Tinh thần cổ vũ đội tuyển quốc gia (SEA Games, AFF Cup) là biểu hiện của sự thống nhất tinh thần.' },
          { title: 'Tình đồng bào', desc: 'Sự tương trợ trong thiên tai (bão lũ miền Trung) thể hiện sự gắn kết dân tộc vượt qua giai cấp.' },
          { title: 'Chủ quyền quốc gia', desc: 'Sức mạnh đoàn kết của mọi tầng lớp nhân dân trong việc bảo vệ chủ quyền biển đảo.' },
        ],
        keyTakeaway: 'Lợi ích dân tộc là chất kết dính vĩ đại, gắn kết mọi thành viên bất kể sự khác biệt về địa vị kinh tế.',
        color: 'indigo',
      },
    ]
  },
  '3.2.3': {
    id: '3.2.3',
    title: 'Mối Quan Hệ: Giai Cấp - Dân Tộc - Nhân Loại',
    subtitle: '3.2.3',
    description: 'Mối quan hệ biện chứng giữa các cộng đồng người trong sự phát triển của lịch sử nhân loại.',
    navLabels: [
      { id: 'theory', label: 'Lý thuyết' },
      { id: 'timeline', label: 'Lịch sử' },
      { id: 'reality', label: 'Thực tiễn' },
      { id: 'quiz', label: 'Kiểm tra' },
    ],
    cards: [
      {
        id: 'class-nation',
        icon: '🔗',
        title: 'Giai Cấp & Dân Tộc',
        subtitle: 'Quan hệ biện chứng',
        image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2000',
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
        icon: '🌏',
        title: 'Vấn Đề Nhân Loại',
        subtitle: 'Cộng đồng toàn cầu',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000',
        frontSummary: 'Nhân loại là toàn thể cộng đồng người sống trên Trái Đất, with bản chất xã hội là cơ sở cho tính thống nhất.',
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
        icon: '🧩',
        title: 'Mối Quan Hệ Biện Chứng',
        subtitle: 'Tổng thể thống nhất',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000',
        frontSummary: 'Sự phát triển của nhân loại tạo điều kiện cho đấu tranh giai cấp và dân tộc, và ngược lại.',
        points: [
          { title: 'Tính chi phối', desc: 'Lợi ích giai cấp và dân tộc chi phối cách thức giải quyết các vấn đề nhân loại.' },
          { title: 'Sự phát triển chung', desc: 'Tiến bộ của nhân loại tạo môi trường thuận lợi cho sự nghiệp giải phóng dân tộc và giai cấp.' },
          { title: 'Xu hướng tương lai', desc: 'Sự xích lại gần nhau của các dân tộc và sự hình thành các giá trị chung của toàn nhân loại.' },
        ],
        keyTakeaway: 'Giải quyết đúng đắn mối quan hệ này là chìa khóa để xây dựng một thế giới hòa bình, ổn định và phát triển bền vững.',
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
