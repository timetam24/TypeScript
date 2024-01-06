/*
 * 인덱스드 엑세스 타입
 * → 객체, 배열, 튜플에 사용 가능
 */

/*
 * 1. 객체 프로퍼티의 타입 추출하기
 */
interface Book {
  title: string;
  publication: number;
  author: {
    name: string;
    debut: number;
  };
}

const book: Book = {
  title: "종의 기원",
  publication: 20160514,
  author: {
    name: "정유정",
    debut: 2007,
  },
};

function printBookAuthorInfo(author: Book["author"]) {
  console.log(`${author.name}, ${author.debut}`);
}
// 주의! 인덱스에는 값이 아니라 타입만 들어갈 수 있다.
// 만약 "author"를 문자열 값으로 다른 변수에 저장하고 인덱스에 사용하려고 하면 오류가 발생한다.

/*
 * 2. 배열 요소의 타입 추출하기
 */
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

const post: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "유의진",
    age: 25,
  },
};

printAuthorInfo(post.author);

/*
 * 3. 튜플의 요소 타입 추출하기
 */

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean

type TupNum = Tup[number]; // number | string | boolean
