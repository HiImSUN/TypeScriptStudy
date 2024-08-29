type SuperPrint = {
  //   (arr: number[]): void;
  //   (arr: boolean[]): void;
  //   (arr: string[]): void;
  // 위와 같이 모든 조합에 대해 만드는 것보다 Generic을 사용하자.
  <T, M>(a: T[], b: M): T;
};

const superPrint: SuperPrint = (arr) => arr[0];

const aa = superPrint([1, 2, 3, 4], "x");
const bb = superPrint([true, false, true], 2);
const cc = superPrint(["a", "b", "c"], true);
const dd = superPrint([1, 2, "hi", "hello"], []);
