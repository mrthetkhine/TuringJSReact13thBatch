type Animal = {
  name: string;
}

type Bear = Animal & { 
  honey: boolean;
}

const bear = {
  name: "Winnie",
  honey: true
}
console.log('bear ',bear);