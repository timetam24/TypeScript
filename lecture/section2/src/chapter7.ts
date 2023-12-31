// void
// 아무런 값도 없음을 의미하는 타입
// 보통은 다음과 같이 아무런 값도 반환하지 않는 함수의 반환값 타입을 정의할 때 사용
function func1(): void {
  console.log("hello");
}

// void 타입의 변수에는 undefiend 이외의 다른 타입 값은 담을 수 없음 (tsconfig.json에 엄격한 null 검사(strictNullChecks) 옵션을 해제(False)로 설정하는 경우 제외)
let a: void;
a = undefined;

// never
// 불가능을 의미하는 타입
// 함수가 어떠한 값도 반환할 수 없는 상황일 때 해당 함수의 반환값 타입을 정의할 때 사용
function func2(): never {
  while (true) {}
}
// 함수 func2는 무한 루프를 돌기 때문에 아무런 값도 반환할 수 없음 이 함수는 영원히 종료될 수 없기 때문에 뭔가를 반환한다는 것 자체가 '불가능'

// 의도적으로 오류를 발생시키는 함수도 never 타입으로 반환값 타입을 정의 가능
function func3(): never {
  throw new Error();
}

// 변수의 타입을 never로 정의하면 any를 포함해 그 어떠한 타입의 값도 이 변수에 담을 수 없음
let anyVar: any;
let b: never;
// b = 1; → 오류 발생
// b = null; → 오류 발생
// b = undefined; → 오류 발생
// b = anyVar; → 오류 발생
