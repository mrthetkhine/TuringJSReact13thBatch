type Num = number;

let num:Num = 20;

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}
let bear: Bear = {
  name: "Winnie",
  honey: true
};

console.log('bear ',bear);
