/*
 * 제네릭 인터페이스
 */
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 1,
};

let keyPair2: KeyPair<boolean, number[]> = {
  key: true,
  value: [1, 2, 3],
};

/*
 * 인덱스 시그니쳐
 */
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: 1,
  key2: -1,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let boolMap: Map<boolean> = {
  key: true,
};

/*
 * 제네릭 타입 별칭
 */
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};

/*
 * 제네릭 인터페이스의 활용 예시
 * → 유저 관리 프로그램
 * → 유저 구분 : 학생 유저 / 개발자 유저
 */
interface Student {
  type: "student";
  grade: number;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.grade;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "유의진",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "아무개",
  profile: {
    type: "student",
    grade: 1,
  },
};
