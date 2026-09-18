# 🚀 English Learning App: Daily Learn & Game Hub

Dự án này là một nền tảng học tiếng Anh kết hợp giữa **Học tập mỗi ngày (Daily Learn)** và **Giải trí (Game Hub)**.

Mục tiêu cốt lõi (MVP) của dự án là thiết kế một luồng học tập tự nhiên và hiệu quả:
**`Word (Từ vựng) ➔ Phrase (Cụm từ) ➔ Sentence (Câu) ➔ Usage (Thực hành qua ngữ cảnh)`**

---

## 📌 Tình trạng dự án (Current Status)

Dự án hiện tại đã hoàn thành **Phase 1** và **Phase 2**, tập trung hoàn thiện toàn bộ luồng học và kiểm tra của module `Daily Learn` với dữ liệu tĩnh (Mock Data).

### ✅ Phase 1: Kiến thức đầu vào (Learning Flow)

- Cung cấp bài học hàng ngày với 30-40 từ vựng.
- Áp dụng triết lý học vi mô (Micro-learning) bằng cách tách biệt sự chú ý, học qua 3 bước màn hình:
  1. **WordCard**: Từ vựng, phát âm, loại từ, nghĩa cơ bản.
  2. **PhraseList**: Các cụm từ thường đi kèm (Collocations) với từ vừa học.
  3. **ExampleSentence**: Câu ví dụ thực tế có highlight từ vựng.

### ✅ Phase 2: Thực hành & Đo lường (Exercise & Review Flow)

- **Contextual Fill-in-the-blank**: Bài tập trắc nghiệm điền khuyết dựa trên ngữ cảnh thực tế (không hỏi từ rời rạc).
- **Interactive UI**: Giao diện chọn đáp án trực quan (Đổi màu ngay khi Check: Xanh/Đúng, Đỏ/Sai).
- **Result Dashboard**: Bảng điểm thống kê dạng Retro/ASCII Box tổng hợp số câu đúng, tỷ lệ % (Accuracy), số từ đã học, và số từ cần ôn tập.
- **Review Mistakes**: Tự động thu thập ID các từ vựng trả lời sai và bắt buộc người dùng học lại (hiển thị lại WordCard) trước khi kết thúc bài học.

---

## 🛠 Tech Stack

- **Framework**: Next.js (App Router)
- **Ngôn ngữ**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React `useState`, `useEffect` (Dự kiến mở rộng với Zustand trong `stores/learningStore.ts`)

---

## 📂 Cấu trúc thư mục (Folder Structure)

Cấu trúc được tối ưu cho Next.js App Router:

```text
├── app/
│   ├── daily-learn/
│   │   ├── exercise/       # Giao diện bài tập, tính điểm, ôn tập (Phase 2)
│   │   │   └── page.tsx
│   │   ├── learn/          # Giao diện học Word -> Phrase -> Sentence (Phase 1)
│   │   │   └── page.tsx
│   │   └── progress/       # (TODO) Tiến độ học tập
│   ├── game/               # Game Hub
│   │   └── word-blaster/   # Game mini hiện có
│   ├── layout.tsx & globals.css
│   └── page.tsx
├── components/
│   └── shared/             # UI Components tái sử dụng
│       ├── ExampleSentence.tsx
│       ├── ExerciseCard.tsx
│       ├── PhraseList.tsx
│       ├── WordCard.tsx
│       └── ProgressBar.tsx # Thanh tiến trình học
├── data/
│   ├── vocabulary.ts       # Mock data từ vựng
│   └── exercise.ts         # Mock data bài tập ngữ cảnh
├── hooks/
│   └── useGameEngine.ts    # Custom hook cho Game Hub
├── stores/
│   └── learningStore.ts    # Quản lý Global State (Zustand)
├── types/
│   └── index.ts            # Khai báo TypeScript Interfaces (Vocabulary, Exercise)
└── utils/                  # Hàm hỗ trợ
    ├── dailyLesson.ts      # Logic lấy 40 từ mỗi ngày
    └── exercise.ts         # Logic chấm điểm, random câu hỏi
```

# 🧠 Data Models chính

## 1. Vocabulary

Type định nghĩa cấu trúc của một từ vựng hoàn chỉnh:

```typescript
export type Vocabulary = {
  id: string;
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  meanings: string[];
  commonPhrases: { phrase: string; meaning: string }[];
  examples: { sentence: string; translation: string }[];
  difficulty: "A1" | "A2" | "B1" | "B2";
  tags: string[];
};
```

## 2. Exercise Question

Type định nghĩa bài tập trắc nghiệm điền khuyết ngữ cảnh:

```
export type ExerciseQuestion = {
  id: string
  wordId: string      // Liên kết với Vocabulary.id để ôn tập nếu sai
  context: string     // Ngữ cảnh gợi ý
  sentence: string    // Câu chứa chỗ trống "____"
  options: string[]   // 4 đáp án Multiple choice
  correctAnswer: string
}
```

# 🚀 Hướng phát triển tiếp theo (Next Steps / Phase 3)

- **Database & API Integration**: Thay thế thư mục data/ tĩnh bằng việc fetch data từ Backend (Supabase/Firebase/PostgreSQL).

- **Spaced Repetition System**: Thuật toán lặp lại ngắt quãng. Cập nhật utils/dailyLesson.ts để không chỉ lấy từ mới mà còn lấy các từ cần ôn tập (dựa trên lịch sử sai ở Phase 2).

- **Global State Management**: Chuyển logic State phức tạp của app/daily-learn/exercise/page.tsx vào stores/learningStore.ts bằng Zustand để giữ State khi người dùng lỡ chuyển trang.

- **Game Integration**: Sử dụng chung nguồn Data Vocabulary cho game Word Blaster để củng cố kiến thức trực quan hơn.

# 💻 Cách chạy dự án

Cài đặt dependencies:

```
npm install
# hoặc
yarn install
```

Chạy môi trường phát triển (Development):

```
npm run dev
# hoặc
yarn dev
```

Truy cập http://localhost:3000 trên trình duyệt để trải nghiệm.
