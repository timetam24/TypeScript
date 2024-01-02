/*
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

type Admin = {
  tag: "Admin";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "Member";
  name: string;
  point: number;
};

type Guest = {
  tag: "Guest";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin → {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member → {name}님 현재까지 {point}점 모았습니다.
// Guest → {name}님 현재까지 {visitCount}번 오셨습니다.

// function login(user: User) {
//   if ("kickCount" in user) {
//     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`);
//   } else if ("point" in user) {
//     console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다`);
//   } else {
//     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
//   }
// } → 직관적이지 못한 코드

function login(user: User) {
  switch (user.tag) {
    case "Admin": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`);
      break;
    }
    case "Member": {
      console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다`);
      break;
    }
    case "Guest": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
    }
  }
}

/*
 * 복습 추가 사례
 */

// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log(`로딩 중`);
      break;
    }
    case "FAILED": {
      console.log(`에러 발생: ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공: ${task.response.data}`);
      break;
    }
  }
}
