let a: number = 1;
let b: string = "hi";
let c: boolean[] = [true];

const player: {
  name: string;
  age?: number;
} = {
  name: "snoo",
};

if (player.age && player.age < 10) {
  //
}

//////////TYPE//////////
type Player = {
  name: string;
  age?: number;
};
const snoo: Player = {
  name: "snoo",
};
const sngu: Player = {
  name: "sngu",
  age: 12,
};

// function playerMaker(name: string): Player {
//   return {
//     name,
//   };
// }

const playerMaker = (name: string): Player => ({ name });
const nico = playerMaker("nico");
nico.age = 12;
