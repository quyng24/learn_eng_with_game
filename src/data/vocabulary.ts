import { VocabularyDaily, Word } from "@/types";

export interface Topic {
  id: string;
  name: string;
  description: string;
  words: Word[];
}

export const TOPICS: Topic[] = [
  {
    id: "space",
    name: "Vũ Trụ",
    description: "Khám phá không gian vô tận",
    words: [
      { id: "sp_1", text: "spaceship", meaning: "tàu vũ trụ" },
      { id: "sp_2", text: "universe", meaning: "vũ trụ" },
      { id: "sp_3", text: "galaxy", meaning: "thiên hà" },
      { id: "sp_4", text: "asteroid", meaning: "tiểu hành tinh" },
      { id: "sp_5", text: "gravity", meaning: "trọng lực" },
      { id: "sp_6", text: "orbit", meaning: "quỹ đạo" },
      { id: "sp_7", text: "planet", meaning: "hành tinh" },
      { id: "sp_8", text: "star", meaning: "ngôi sao" },
      { id: "sp_9", text: "comet", meaning: "sao chổi" },
      { id: "sp_10", text: "black hole", meaning: "hố đen" },
      { id: "sp_11", text: "cosmos", meaning: "vũ trụ" },
      { id: "sp_12", text: "nebula", meaning: "tinh vân" },
      { id: "sp_13", text: "light year", meaning: "năm ánh sáng" },
      { id: "sp_14", text: "telescope", meaning: "kính viễn vọng" },
      { id: "sp_15", text: "astronaut", meaning: "phi hành gia" },
      { id: "sp_16", text: "rocket", meaning: "tên lửa" },
      { id: "sp_17", text: "satellite", meaning: "vệ tinh" },
      { id: "sp_18", text: "meteor", meaning: "thiên thạch" },
      { id: "sp_19", text: "solar system", meaning: "hệ mặt trời" },
      { id: "sp_20", text: "Milky Way", meaning: "dải Ngân Hà" },
      { id: "sp_21", text: "space station", meaning: "trạm vũ trụ" },
      { id: "sp_22", text: "launch", meaning: "phóng" },
      { id: "sp_23", text: "mission", meaning: "nhiệm vụ" },
      { id: "sp_24", text: "exploration", meaning: "khám phá" },
      { id: "sp_25", text: "alien", meaning: "người ngoài hành tinh" },
      { id: "sp_26", text: "extraterrestrial", meaning: "ngoài Trái Đất" },
      { id: "sp_27", text: "spacesuit", meaning: "bộ đồ phi hành" },
      { id: "sp_28", text: "oxygen", meaning: "ô-xy" },
      { id: "sp_29", text: "vacuum", meaning: "chân không" },
      { id: "sp_30", text: "radiation", meaning: "bức xạ" },
      { id: "sp_31", text: "supernova", meaning: "siêu tân tinh" },
      { id: "sp_32", text: "constellation", meaning: "chòm sao" },
      { id: "sp_33", text: "eclipse", meaning: "nhật thực/ nguyệt thực" },
      { id: "sp_34", text: "spacecraft", meaning: "phi thuyền" },
      { id: "sp_35", text: "probe", meaning: "tàu thăm dò" },
      { id: "sp_36", text: "launch pad", meaning: "bệ phóng" },
      { id: "sp_37", text: "trajectory", meaning: "quỹ đạo bay" },
      { id: "sp_38", text: "cosmonaut", meaning: "phi hành gia Nga" },
      { id: "sp_39", text: "interstellar", meaning: "giữa các vì sao" },
      { id: "sp_40", text: "big bang", meaning: "vụ nổ lớn" },
      { id: "sp_41", text: "dark matter", meaning: "vật chất tối" },
      { id: "sp_42", text: "dark energy", meaning: "năng lượng tối" },
      { id: "sp_43", text: "space shuttle", meaning: "tàu con thoi" },
      { id: "sp_44", text: "launch vehicle", meaning: "phương tiện phóng" },
      { id: "sp_45", text: "gravity well", meaning: "hố trọng lực" },
      { id: "sp_46", text: "escape velocity", meaning: "vận tốc thoát" },
      { id: "sp_47", text: "space debris", meaning: "rác vũ trụ" },
      { id: "sp_48", text: "lunar", meaning: "Mặt Trăng" },
      { id: "sp_49", text: "martian", meaning: "Sao Hỏa" },
      { id: "sp_50", text: "observatory", meaning: "đài thiên văn" },
    ]
  },
  {
    id: "tech",
    name: "Công Nghệ",
    description: "Thế giới máy tính và lập trình",
    words: [
      { id: "tc_1", text: "computer", meaning: "máy tính" },
      { id: "tc_2", text: "keyboard", meaning: "bàn phím" },
      { id: "tc_3", text: "software", meaning: "phần mềm" },
      { id: "tc_4", text: "network", meaning: "mạng lưới" },
      { id: "tc_5", text: "database", meaning: "cơ sở dữ liệu" },
      { id: "tc_6", text: "monitor", meaning: "màn hình" },
      { id: "tc_7", text: "mouse", meaning: "chuột" },
      { id: "tc_8", text: "processor", meaning: "bộ xử lý" },
      { id: "tc_9", text: "algorithm", meaning: "thuật toán" },
      { id: "tc_10", text: "programming", meaning: "lập trình" },
      { id: "tc_11", text: "application", meaning: "ứng dụng" },
      { id: "tc_12", text: "cloud", meaning: "đám mây" },
      { id: "tc_13", text: "server", meaning: "máy chủ" },
      { id: "tc_14", text: "client", meaning: "máy khách" },
      { id: "tc_15", text: "firewall", meaning: "tường lửa" },
      { id: "tc_16", text: "encryption", meaning: "mã hóa" },
      { id: "tc_17", text: "AI", meaning: "trí tuệ nhân tạo" },
      { id: "tc_18", text: "machine learning", meaning: "học máy" },
      { id: "tc_19", text: "cybersecurity", meaning: "an ninh mạng" },
      { id: "tc_20", text: "virtual reality", meaning: "thực tế ảo" },
      { id: "tc_21", text: "augmented reality", meaning: "thực tế tăng cường" },
      { id: "tc_22", text: "blockchain", meaning: "chuỗi khối" },
      { id: "tc_23", text: "cryptocurrency", meaning: "tiền mã hóa" },
      { id: "tc_24", text: "data mining", meaning: "khai phá dữ liệu" },
      { id: "tc_25", text: "IoT", meaning: "Internet vạn vật" },
      { id: "tc_26", text: "robotics", meaning: "người máy học" },
      { id: "tc_27", text: "compiler", meaning: "trình biên dịch" },
      { id: "tc_28", text: "debugging", meaning: "gỡ lỗi" },
      { id: "tc_29", text: "syntax", meaning: "cú pháp" },
      { id: "tc_30", text: "framework", meaning: "khung làm việc" },
    ]
  },
  {
    id: "action",
    name: "Hành Động",
    description: "Những động từ mạnh mẽ",
    words: [
      { id: "ac_1", text: "destroy", meaning: "tiêu diệt" },
      { id: "ac_2", text: "survive", meaning: "sinh tồn" },
      { id: "ac_3", text: "protect", meaning: "bảo vệ" },
      { id: "ac_4", text: "attack", meaning: "tấn công" },
      { id: "ac_5", text: "defend", meaning: "phòng thủ" },
      { id: "ac_6", text: "escape", meaning: "trốn thoát" },
      { id: "ac_7", text: "fight", meaning: "chiến đấu" },
      { id: "ac_8", text: "conquer", meaning: "chinh phục" },
      { id: "ac_9", text: "invade", meaning: "xâm lược" },
      { id: "ac_10", text: "rescue", meaning: "giải cứu" },
      { id: "ac_11", text: "chase", meaning: "đuổi theo" },
      { id: "ac_12", text: "capture", meaning: "bắt giữ" },
      { id: "ac_13", text: "strike", meaning: "đánh mạnh" },
      { id: "ac_14", text: "ambush", meaning: "phục kích" },
      { id: "ac_15", text: "retreat", meaning: "rút lui" },
      { id: "ac_16", text: "advance", meaning: "tiến lên" },
      { id: "ac_17", text: "hunt", meaning: "săn lùng" },
      { id: "ac_18", text: "smash", meaning: "đập tan" },
      { id: "ac_19", text: "seize", meaning: "chiếm lấy" },
      { id: "ac_20", text: "overcome", meaning: "vượt qua" },
      { id: "ac_21", text: "dominate", meaning: "thống trị" },
      { id: "ac_22", text: "challenge", meaning: "thách thức" },
      { id: "ac_23", text: "strike back", meaning: "phản công" },
      { id: "ac_24", text: "invigorate", meaning: "tiếp thêm sức mạnh" },
      { id: "ac_25", text: "persist", meaning: "kiên trì" },
      { id: "ac_26", text: "endure", meaning: "chịu đựng" },
      { id: "ac_27", text: "break through", meaning: "đột phá" },
      { id: "ac_28", text: "eliminate", meaning: "loại bỏ" },
      { id: "ac_29", text: "confront", meaning: "đối mặt" },
      { id: "ac_30", text: "triumph", meaning: "chiến thắng" }
    ]
  },
  {
    id: "animals",
    name: "Động Vật",
    description: "Các loài động vật phổ biến",
    words: [
      { id: "an_1", text: "dog", meaning: "chó" },
      { id: "an_2", text: "cat", meaning: "mèo" },
      { id: "an_3", text: "lion", meaning: "sư tử" },
      { id: "an_4", text: "tiger", meaning: "hổ" },
      { id: "an_5", text: "elephant", meaning: "voi" },
      { id: "an_6", text: "bear", meaning: "gấu" },
      { id: "an_7", text: "wolf", meaning: "sói" },
      { id: "an_8", text: "fox", meaning: "cáo" },
      { id: "an_9", text: "rabbit", meaning: "thỏ" },
      { id: "an_10", text: "deer", meaning: "nai" },
      { id: "an_11", text: "horse", meaning: "ngựa" },
      { id: "an_12", text: "cow", meaning: "bò" },
      { id: "an_13", text: "sheep", meaning: "cừu" },
      { id: "an_14", text: "goat", meaning: "dê" },
      { id: "an_15", text: "pig", meaning: "heo" },
      { id: "an_16", text: "chicken", meaning: "gà" },
      { id: "an_17", text: "duck", meaning: "vịt" },
      { id: "an_18", text: "eagle", meaning: "đại bàng" },
      { id: "an_19", text: "owl", meaning: "cú mèo" },
      { id: "an_20", text: "parrot", meaning: "vẹt" },
      { id: "an_21", text: "penguin", meaning: "chim cánh cụt" },
      { id: "an_22", text: "dolphin", meaning: "cá heo" },
      { id: "an_23", text: "whale", meaning: "cá voi" },
      { id: "an_24", text: "shark", meaning: "cá mập" },
      { id: "an_25", text: "crocodile", meaning: "cá sấu" },
      { id: "an_26", text: "snake", meaning: "rắn" },
      { id: "an_27", text: "frog", meaning: "ếch" },
      { id: "an_28", text: "monkey", meaning: "khỉ" },
      { id: "an_29", text: "panda", meaning: "gấu trúc" },
      { id: "an_30", text: "kangaroo", meaning: "chuột túi" }
    ]
  },
  {
    id: "emotions",
    name: "Cảm Xúc",
    description: "Các trạng thái cảm xúc phổ biến",
    words: [
      { id: "em_1", text: "happy", meaning: "hạnh phúc" },
      { id: "em_2", text: "sad", meaning: "buồn" },
      { id: "em_3", text: "angry", meaning: "tức giận" },
      { id: "em_4", text: "fearful", meaning: "sợ hãi" },
      { id: "em_5", text: "surprised", meaning: "ngạc nhiên" },
      { id: "em_6", text: "disgusted", meaning: "ghê tởm" },
      { id: "em_7", text: "excited", meaning: "phấn khích" },
      { id: "em_8", text: "nervous", meaning: "lo lắng" },
      { id: "em_9", text: "confident", meaning: "tự tin" },
      { id: "em_10", text: "lonely", meaning: "cô đơn" },
      { id: "em_11", text: "hopeful", meaning: "hy vọng" },
      { id: "em_12", text: "grateful", meaning: "biết ơn" },
      { id: "em_13", text: "jealous", meaning: "ghen tị" },
      { id: "em_14", text: "proud", meaning: "tự hào" },
      { id: "em_15", text: "ashamed", meaning: "xấu hổ" },
      { id: "em_16", text: "bored", meaning: "chán nản" },
      { id: "em_17", text: "curious", meaning: "tò mò" },
      { id: "em_18", text: "relaxed", meaning: "thư giãn" },
      { id: "em_19", text: "anxious", meaning: "bồn chồn" },
      { id: "em_20", text: "confused", meaning: "bối rối" },
      { id: "em_21", text: "satisfied", meaning: "hài lòng" },
      { id: "em_22", text: "frustrated", meaning: "thất vọng" },
      { id: "em_23", text: "optimistic", meaning: "lạc quan" },
      { id: "em_24", text: "pessimistic", meaning: "bi quan" },
      { id: "em_25", text: "inspired", meaning: "truyền cảm hứng" },
      { id: "em_26", text: "embarrassed", meaning: "ngượng ngùng" },
      { id: "em_27", text: "guilty", meaning: "tội lỗi" },
      { id: "em_28", text: "relieved", meaning: "nhẹ nhõm" },
      { id: "em_29", text: "passionate", meaning: "đam mê" },
      { id: "em_30", text: "calm", meaning: "bình tĩnh" }
    ]
  },
  {
    id: "sports",
    name: "Thể Thao",
    description: "Các môn thể thao và hoạt động",
    words: [
      { id: "sp_1", text: "football", meaning: "bóng đá" },
      { id: "sp_2", text: "basketball", meaning: "bóng rổ" },
      { id: "sp_3", text: "volleyball", meaning: "bóng chuyền" },
      { id: "sp_4", text: "tennis", meaning: "quần vợt" },
      { id: "sp_5", text: "badminton", meaning: "cầu lông" },
      { id: "sp_6", text: "swimming", meaning: "bơi lội" },
      { id: "sp_7", text: "running", meaning: "chạy bộ" },
      { id: "sp_8", text: "cycling", meaning: "đạp xe" },
      { id: "sp_9", text: "boxing", meaning: "quyền anh" },
      { id: "sp_10", text: "karate", meaning: "karate" },
      { id: "sp_11", text: "judo", meaning: "judo" },
      { id: "sp_12", text: "wrestling", meaning: "đấu vật" },
      { id: "sp_13", text: "golf", meaning: "gôn" },
      { id: "sp_14", text: "table tennis", meaning: "bóng bàn" },
      { id: "sp_15", text: "surfing", meaning: "lướt sóng" },
      { id: "sp_16", text: "skiing", meaning: "trượt tuyết" },
      { id: "sp_17", text: "snowboarding", meaning: "trượt ván tuyết" },
      { id: "sp_18", text: "hockey", meaning: "khúc côn cầu" },
      { id: "sp_19", text: "rugby", meaning: "bóng bầu dục" },
      { id: "sp_20", text: "cricket", meaning: "cricket" },
      { id: "sp_21", text: "archery", meaning: "bắn cung" },
      { id: "sp_22", text: "fencing", meaning: "đấu kiếm" },
      { id: "sp_23", text: "gymnastics", meaning: "thể dục dụng cụ" },
      { id: "sp_24", text: "weightlifting", meaning: "cử tạ" },
      { id: "sp_25", text: "skateboarding", meaning: "trượt ván" },
      { id: "sp_26", text: "climbing", meaning: "leo núi" },
      { id: "sp_27", text: "diving", meaning: "lặn" },
      { id: "sp_28", text: "marathon", meaning: "chạy marathon" },
      { id: "sp_29", text: "triathlon", meaning: "ba môn phối hợp" },
      { id: "sp_30", text: "yoga", meaning: "yoga" }
    ]
  },
  {
    id: "weather",
    "name": "Thời Tiết",
    "description": "Các hiện tượng và trạng thái thời tiết",
    "words": [
      { id: "we_1", text: "sunny", meaning: "nắng" },
      { id: "we_2", text: "cloudy", meaning: "nhiều mây" },
      { id: "we_3", text: "rainy", meaning: "mưa" },
      { id: "we_4", text: "stormy", meaning: "bão" },
      { id: "we_5", text: "windy", meaning: "gió" },
      { id: "we_6", text: "foggy", meaning: "sương mù" },
      { id: "we_7", text: "snowy", meaning: "tuyết" },
      { id: "we_8", text: "hail", meaning: "mưa đá" },
      { id: "we_9", text: "thunder", meaning: "sấm" },
      { id: "we_10", text: "lightning", meaning: "tia chớp" },
      { id: "we_11", text: "drizzle", meaning: "mưa phùn" },
      { id: "we_12", text: "overcast", meaning: "u ám" },
      { id: "we_13", text: "humid", meaning: "ẩm ướt" },
      { id: "we_14", text: "dry", meaning: "khô ráo" },
      { id: "we_15", text: "hot", meaning: "nóng" },
      { id: "we_16", text: "cold", meaning: "lạnh" },
      { id: "we_17", text: "warm", meaning: "ấm áp" },
      { id: "we_18", text: "chilly", meaning: "se lạnh" },
      { id: "we_19", text: "freezing", meaning: "đóng băng" },
      { id: "we_20", text: "blizzard", meaning: "bão tuyết" },
      { id: "we_21", text: "tornado", meaning: "lốc xoáy" },
      { id: "we_22", text: "hurricane", meaning: "cuồng phong" },
      { id: "we_23", text: "typhoon", meaning: "bão nhiệt đới" },
      { id: "we_24", text: "drought", meaning: "hạn hán" },
      { id: "we_25", text: "flood", meaning: "lũ lụt" },
      { id: "we_26", text: "mist", meaning: "sương mù nhẹ" },
      { id: "we_27", text: "clear sky", meaning: "trời quang" },
      { id: "we_28", text: "rainbow", meaning: "cầu vồng" },
      { id: "we_29", text: "heatwave", meaning: "nắng nóng kéo dài" },
      { id: "we_30", text: "thunderstorm", meaning: "dông bão" }
    ]
  }
];

export const VOCABULARY_DAILY: VocabularyDaily[] = [
  {
    id: "v1",
    word: "improve",
    pronunciation: "/ɪmˈpruːv/",
    partOfSpeech: "verb",
    meanings: ["Làm cho tốt hơn", "Cải thiện"],
    commonPhrases: [
      { phrase: "improve dramatically", meaning: "Cải thiện một cách đáng kể" },
      { phrase: "room for improvement", meaning: "Còn không gian/cơ hội để cải thiện" }
    ],
    examples: [
      { sentence: "I want to improve my English speaking skills.", translation: "Tôi muốn cải thiện kỹ năng nói tiếng Anh của mình." },
      { sentence: "Her health has improved dramatically since she started exercising.", translation: "Sức khỏe của cô ấy đã cải thiện đáng kể từ khi bắt đầu tập thể dục." }
    ],
    difficulty: "A2",
    tags: ["general", "action"]
  },
  {
    id: "v2",
    word: "achieve",
    pronunciation: "/əˈtʃiːv/",
    partOfSpeech: "verb",
    meanings: ["Đạt được", "Hoàn thành (mục tiêu)"],
    commonPhrases: [
      { phrase: "achieve a goal", meaning: "Đạt được mục tiêu" },
      { phrase: "sense of achievement", meaning: "Cảm giác thành tựu" }
    ],
    examples: [
      { sentence: "She achieved her goal of running a marathon.", translation: "Cô ấy đã đạt được mục tiêu chạy marathon." }
    ],
    difficulty: "B1",
    tags: ["success", "work"]
  },
  {
    id: "v3",
    word: "create",
    pronunciation: "/kriˈeɪt/",
    partOfSpeech: "verb",
    meanings: ["Tạo ra", "Sáng tạo"],
    commonPhrases: [
      { phrase: "create opportunities", meaning: "Tạo cơ hội" },
      { phrase: "creative process", meaning: "Quá trình sáng tạo" }
    ],
    examples: [
      { "sentence": "She created a beautiful painting.", translation: "Cô ấy đã tạo ra một bức tranh tuyệt đẹp." }
    ],
    difficulty: "A2",
    tags: ["art", "innovation"]
  },
  {
    id: "v4",
    word: "decide",
    pronunciation: "/dɪˈsaɪd/",
    partOfSpeech: "verb",
    meanings: ["Quyết định"],
    commonPhrases: [
      { phrase: "decide on a plan", meaning: "Quyết định kế hoạch" },
      { phrase: "make a decision", meaning: "Đưa ra quyết định" }
    ],
    examples: [
      { "sentence": "They decided to move to another city.", translation: "Họ đã quyết định chuyển đến một thành phố khác." }
    ],
    difficulty: "A2",
    tags: ["choice", "planning"]
  },
  {
    id: "v5",
    word: "support",
    pronunciation: "/səˈpɔːrt/",
    partOfSpeech: "verb",
    meanings: ["Hỗ trợ", "Ủng hộ"],
    commonPhrases: [
      { phrase: "support a friend", meaning: "Hỗ trợ bạn bè" },
      { phrase: "technical support", meaning: "Hỗ trợ kỹ thuật" }
    ],
    examples: [
      { "sentence": "She supported her team during the competition.", translation: "Cô ấy đã hỗ trợ đội của mình trong cuộc thi." }
    ],
    difficulty: "B1",
    tags: ["help", "teamwork"]
  },
  {
    id: "v6",
    word: "develop",
    pronunciation: "/dɪˈveləp/",
    partOfSpeech: "verb",
    meanings: ["Phát triển", "Xây dựng"],
    commonPhrases: [
      { phrase: "develop skills", meaning: "Phát triển kỹ năng" },
      { phrase: "develop a plan", meaning: "Xây dựng kế hoạch" }
    ],
    examples: [
      { "sentence": "The company developed a new product.", translation: "Công ty đã phát triển một sản phẩm mới." }
    ],
    difficulty: "B1",
    tags: ["growth", "business"]
  },
  {
    id: "v7",
    word: "discover",
    pronunciation: "/dɪˈskʌvər/",
    partOfSpeech: "verb",
    meanings: ["Khám phá", "Phát hiện"],
    commonPhrases: [
      { phrase: "discover new places", meaning: "Khám phá địa điểm mới" },
      { phrase: "discover the truth", meaning: "Phát hiện sự thật" }
    ],
    examples: [
      { "sentence": "They discovered a hidden cave.", translation: "Họ đã khám phá một hang động bí ẩn." }
    ],
    difficulty: "B1",
    tags: ["exploration", "knowledge"]
  },
  {
    id: "v8",
    word: "achieve",
    pronunciation: "/əˈtʃiːv/",
    partOfSpeech: "verb",
    meanings: ["Đạt được", "Hoàn thành (mục tiêu)"],
    commonPhrases: [
      { phrase: "achieve success", meaning: "Đạt được thành công" },
      { phrase: "sense of achievement", meaning: "Cảm giác thành tựu" }
    ],
    examples: [
      { "sentence": "He achieved success in his career.", translation: "Anh ấy đã đạt được thành công trong sự nghiệp." }
    ],
    difficulty: "B1",
    tags: ["success", "work"]
  },
  {
    id: "v9",
    word: "explain",
    pronunciation: "/ɪkˈspleɪn/",
    partOfSpeech: "verb",
    meanings: ["Giải thích"],
    commonPhrases: [
      { phrase: "explain clearly", meaning: "Giải thích rõ ràng" },
      { phrase: "explain the reason", meaning: "Giải thích lý do" }
    ],
    examples: [
      { "sentence": "The teacher explained the lesson carefully.", translation: "Giáo viên đã giải thích bài học một cách cẩn thận." }
    ],
    difficulty: "A2",
    tags: ["communication", "learning"]
  },
  {
    id: "v10",
    word: "choose",
    pronunciation: "/tʃuːz/",
    partOfSpeech: "verb",
    meanings: ["Chọn", "Lựa chọn"],
    commonPhrases: [
      { phrase: "choose wisely", meaning: "Chọn một cách khôn ngoan" },
      { phrase: "choose a career", meaning: "Chọn nghề nghiệp" }
    ],
    examples: [
      { "sentence": "She chose a red dress for the party.", translation: "Cô ấy đã chọn một chiếc váy đỏ cho bữa tiệc." }
    ],
    difficulty: "A2",
    tags: ["decision", "life"]
  },
  {
    id: "v11",
    word: "communicate",
    pronunciation: "/kəˈmjuːnɪkeɪt/",
    partOfSpeech: "verb",
    meanings: ["Giao tiếp", "Truyền đạt"],
    commonPhrases: [
      { phrase: "communicate effectively", meaning: "Giao tiếp hiệu quả" },
      { phrase: "communicate ideas", meaning: "Truyền đạt ý tưởng" }
    ],
    examples: [
      { "sentence": "They communicated through email.", translation: "Họ đã giao tiếp qua email." }
    ],
    difficulty: "B1",
    tags: ["communication", "skills"]
  },
  {
    id: "v12",
    word: "understand",
    pronunciation: "/ˌʌndərˈstænd/",
    partOfSpeech: "verb",
    meanings: ["Hiểu"],
    commonPhrases: [
      { phrase: "understand the problem", meaning: "Hiểu vấn đề" },
      { phrase: "easy to understand", meaning: "Dễ hiểu" }
    ],
    examples: [
      { "sentence": "I understand what you mean.", translation: "Tôi hiểu ý bạn." }
    ],
    difficulty: "A2",
    tags: ["knowledge", "learning"]
  },
]

export const ALL_VOCABULARY: Word[] = TOPICS.flatMap(topic => topic.words);