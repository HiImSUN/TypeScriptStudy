//Type : unknown
let a: unknown;
if (typeof a === "number") {
  let b = a + 1;
}
if (typeof a === "string") {
  let b = a.toUpperCase();
}

//Type : never
//never는 return을 하지 않는 함수를 만들 때 쓰인다.
function hello(): never {
  throw new Error("xxx");
}

function sayName(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name; //이 경우 type이 never가 된다.
  }
}
