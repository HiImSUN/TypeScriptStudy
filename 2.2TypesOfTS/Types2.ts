//readonly//
const ids: readonly number[] = [2019029007];

type Animal = {
  readonly name: string;
  age: number;
  hobby?: string;
};

//진짜 가끔 쓰이는 any//
//TS에게 보호장치를 의도적으로 씌우지 말라고 명령//
const j: any[] = [1, 2, 3, 4];
const k: any = true;

j + k; //이것은 마치 JS처럼 작동한다. 더 이상 실수를 보호받지 못 한다.
