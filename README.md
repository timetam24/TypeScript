# TypScript 학습

## 1. 타입스크립트 개론

### 점진적 타입 시스템이다

- 타입이 정의된 변수들에 대해서는 타입을 미리 결정하고,  
  타입이 정의되어 있지 않은 변수들에 대해서는 타입스크립트가 초기화된 값을 기준으로 알아서 타입을 추론한다
- 코드 실행 전 검사를 통해 타입 안정성을 확보한다

<br/>

### 컴파일 과정

- 타입스크립트는 AST(추상 문법 트리)와 Type 검사 과정을 거치는데 성공하면 AST가 JavaScript 코드로 변환된다
- 만약 코드에 오류가 있어서 Type 검사를 실패하게 되면 컴파일은 종료된다
- 타입 오류가 없는 타입스크립트 코드는 컴파일 시 Type 검사를 통과하고 타입 관련 문법들은 삭제된 안전한 자바스크립트 코드로 변환된다

<br/>

<img src="https://github.com/timetam24/TIL/assets/135303974/77e7ac54-e40d-48fa-827d-9784c5b646d4">
<p style="text-align: right">자료 출처: winterlood</p>

<br/>

### 컴파일 옵션 설정

- tsconfig.json 자동 생성

  ```
  tsc --init
  ```

- tsconfig.json 커스텀
  ```
  {
   "compilerOptions": {
     "target": "ESNext", //컴파일 결과 생성되는 자바스크립트 코드의 버전을 설정
     "module": "ESNext", //변환되는 자바스크립트 코드의 모듈 시스템을 설정
     "outDir": "dist", //컴파일 결과 생성할 자바스크립트 코드의 위치를 결정
     "strict": true, //타입스크립트 컴파일러의 타입 검사 엄격함 수준
     "moduleDetection": "force" //타입스크립트의 모든 파일은 기본적으로 전역 파일(모듈)로 취급되는데 해당 옵션을 "force"로 설정하면 자동으로 모든 타입스크립트 파일이 로컬 파일(모듈)로 취급
  },
   "include": ["src"] //tsc에게 컴파일 할 타입스크립트 파일의 범위와 위치를 알려줌
  }
  ```

<br/>

## 2. 타입스크립트 기본

- [원시타입과 리터럴타입](https://github.com/timetam24/TypeScript/commit/063e8e1cab49efd260c3baccb78a93fddadbcc59)
- [배열과 튜플](https://github.com/timetam24/TypeScript/commit/c5f23d0372ba21206c53ea1d64ba8b5f56b88e6b)
- [객체](https://github.com/timetam24/TypeScript/commit/13f4e563faec03428de16086c4e7fd0b57cce317)
- [타입 별칭과 인덱스 시그니처](https://github.com/timetam24/TypeScript/commit/475b344e6d2816672b19e98ed444c04261547912)
- [enum 타입](https://github.com/timetam24/TypeScript/commit/42625d29fa627d97a736e125878ef241458e119c)
- [any와 unknown 타입](https://github.com/timetam24/TypeScript/commit/f5a367bcbdfcee93aca81be4caf564d11595401a)
- [void와 never 타입](https://github.com/timetam24/TypeScript/commit/a67f7bce20ae9de0037fa0c998e0f8c9fc9ffbd9)

<br/>

<!-- ## 3. 타입스크립트 이해하기

## 4. 함수와 타입

## 5. 인터페이스

## 6. 클래스

## 7. 제네릭

## 8. 타입 조작하기

## 9. 조건부 타입

## 10. 유틸리티 타입 -->
