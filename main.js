let a = "";
let b = 30;
for (let i = 20.5; i <= b; i += 0.5) {
  a += i - 0.5 + (i < b ? " " : "");
}
console.log(a);

let d = 27;
for (let v = 10; v <= 100; v += 10) {
  console.log(d * v);
}

let n = 100;
for (let k = 1; k <= 100; k++) {
  let m = k ** 2;
  m < n ? console.log(k, m) : null;
}

let p = 11;
let f = "Просте";
for (let ui = 2; ui <= p; ui++) {
  if (p % ui === 0 && p !== ui && p !== 1) {
    f = "Не просте";
  }
  console.log(ui);
}
console.log(f);

let num = 81;
for (let c = 1; c <= num; c *= 3) {
  if (num === c) {
    console.log("Tak", c);
  }
}
