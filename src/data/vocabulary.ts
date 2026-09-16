import { Word } from "@/types";

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
    ]
  }
];

export const ALL_VOCABULARY: Word[] = TOPICS.flatMap(topic => topic.words);