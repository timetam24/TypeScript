// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN,
  USER,
  GUEST,
}
// 할당하지 않아도 ADMIN부터 차례로 숫자(0부터 시작)가 자동 할당됨

const user1 = {
  name: "유의진",
  role: Role.ADMIN, // 0 ← 관리자
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 1 ← 일반 유저
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 2 ← 게스트
};

// 만약 숫자를 지정하고 싶다면 할당해주면 됨 (ex. SILVER = 8)
enum Ranking {
  GOLD,
  SILVER = 8,
  BRONZE,
}

const user4 = { name: "곽철용", ranking: Ranking.GOLD }; // 0
const user5 = { name: "이만태", ranking: Ranking.SILVER }; // 8
const user6 = { name: "황갑수", ranking: Ranking.BRONZE }; // 9

enum Language {
  korean = "ko",
  english = "en",
}

const user7 = {
  name: "김철수",
  language: Language.korean,
};

console.log(user1, user2, user3, user4, user5, user6, user7);
