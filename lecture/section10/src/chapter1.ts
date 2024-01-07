/*
 * 맵드 타입 기반의 유틸리티 타입
 * Partial<T>, Required<T>, Readonly<T>
 */

// 실습 예시
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

/*
 * Partial<T>
 * 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 변환
 */
const draft: Partial<Post> = {
  title: "가제",
  content: "내용",
};

// Partial<T> 직접 구현하기
type Partial<T> = {
  [key in keyof T]?: T[key];
};

/*
 * Required<T>
 * 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 변환
 */
const withThumbnailPost: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

// Required<T> 직접 구현하기
type Required<T> = {
  [key in keyof T]-?: T[key];
};

/*
 * Readonly<T>
 * 특정 객체 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 변환
 */
const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글입니다.",
  tags: [],
  content: "",
};
// readonlyPost.content = '해킹당함'; → 에러

// Readonly<T> 직접 구현하기
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};
