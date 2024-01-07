/*
 * 맵드 타입 기반의 유틸리티 타입
 * Pick<T,K>, Omit<T,K>, Record<K,V>
 */

// 실습 예시
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

/*
 * Pick<T,K>
 * 특정 객체 타입으로부터 특정 프로퍼티 만을 골라내는 그런 타입
 */
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "",
  content: "",
};
// 추출된 타입 : { title : string; content : string }

// Pick<T,K> 직접 구현하기
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

/*
 * Omit<T,K>
 * 특정 객체 타입으로부터 특정 프로퍼티 만을 제거하는 타입
 */
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

// Omit<T,K> 직접 구현하기
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/*
 * Record<K,V>
 * 화면 크기에 따라 3가지 버전의 썸네일을 지원한다고 가정. Thumbnail 타입을 별도로 정의
 */
// type Thumbnail = {
//   large: {
//     url: string;
//   };
//   medium: {
//     url: string;
//   };
//   small: {
//     url: string;
//   };
// };

type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;

// Record<K,V> 직접 구현하기
type Record<K extends keyof any, V> = {
  [key in K]: V;
};
