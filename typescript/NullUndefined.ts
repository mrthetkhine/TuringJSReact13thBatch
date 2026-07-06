type OptionalString = string | null | undefined;
let data : OptionalString = "Hello";
console.log('OptionalString ',data);

function liveDangerously(x?: number ) {
  // No error
  console.log(x!.toFixed());
}
liveDangerously(10);