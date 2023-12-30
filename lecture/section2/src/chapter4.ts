// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
};

let user1: User = {
  id: 1234,
  name: "의진",
  nickname: "timetam",
  birth: "1998.10.11",
};

let user2: User = {
  id: 12345,
  name: "아무개",
  nickname: "amugae",
  birth: "2023.12.30",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // ➝ 프로퍼티 key로 Korea가 있어야 하고 value는 number여야 한다
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
