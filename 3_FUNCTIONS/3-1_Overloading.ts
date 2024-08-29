// 아마 우리는 대부분의 시간을 다른 사람들이 만든 외부 라이브러리를 사용하는데 쓸 것이다.
// 그런 패키지와 라이브러리들은 오버로딩을 매우 많이 사용한다.
// 그래서 우리는 이 오버로딩에 대해 잘 알고 있어야 한다.
// 오버로딩은, 여러 개의 Call Signature를 가지고 있을 때 발생한다

//ex1
type Add2 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add2: Add2 = (a, b) => {
  if (typeof b === "string") {
    return a;
  }
  return a + b;
};

//ex2
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};
