// '제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.'
// Generic 연습
type Player<E> = {
  name: string;
  extraInfo: E;
};

type SnooPlayer = Player<{ favFood: string }>;

const snoo: SnooPlayer = {
  name: "snoo",
  extraInfo: {
    favFood: "chicken",
  },
};

const nico: Player<null> = {
  name: "nico",
  extraInfo: null,
};

//ex2
type arrNumbers = Array<number>;
const numbers: arrNumbers = [1, 2, 3, 4];

const printAllNumbers: (arr: Array<number>) => number = (arr) => {
  return arr[0];
};
