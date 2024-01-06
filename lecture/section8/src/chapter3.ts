/*
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  // [key in "id" | "name" | "age"]?: User[key];
  [key in keyof User]?: User[key];
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

function fetchUser(): User {
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

function updateUser(user: PartialUser) {
  // ... 유저 정보 수정 기능
}

updateUser({ age: 25 }); // 결과: 수정하고 싶은 프로퍼티만 전달 가능!
