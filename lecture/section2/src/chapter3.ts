// object
let user: {
  id?: number; //선택적 프로퍼티
  name: string;
} = { id: 1, name: "탐탐" };

// id가 아직 없는 사용자라면? 선택적 프로퍼티로 만들어주기
user = { name: "아무개" };

// 절대 값이 수정되어서는 안되는 프로퍼티 키가 있다면? readonly 사용
let config: { readonly apiKey: string } = { apiKey: "MY API KEY" };
// config.apiKey = "hacked"; → 값 변경 불가
