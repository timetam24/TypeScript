// 배열
let numArr: number[] = [2023, 12, 28];
let strArr: string[] = ["today", "is", "Thursday"];
let boolArr: boolean[] = [true, false, true];

// 배열 안 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "sky", 2024];

// 다차원 배열
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 = 길이와 타입이 고정된 배열
let tup1: [number, string] = [12, "TIME"];
// 배열 메서드(push, pop) 사용 시 각별히 주의할 것!

const users: [string, number][] = [
  ["사용자 1", 1],
  ["사용자 2", 2],
  ["사용자 3", 3],
];
// 배열 사용 시 인덱스의 위치에 따라 넣어야 하는 값들이 이미 정해져있고 순서를 지키는 것이 중요할 때 튜플을 사용해서 값을 잘못 넣는 것을 방지한다
