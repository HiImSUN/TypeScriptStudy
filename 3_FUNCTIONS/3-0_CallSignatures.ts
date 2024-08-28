// Call Signature를 통해 함수의 인풋과 아웃풋의 자료형을 명시해주자.

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
