const array = [
  8,
  "55",
  [
    2,
    "hello world",
    {
      a: 2,
      b: 5,
    },
    false,
  ],
  {
    arr: [true, 1, NaN, new Array(2, 33)],
    test: null,
    obj: { d: "moha", last: [2, false, undefined] },
  },
];
const [
  ,
  ,
  ,
  {
    arr: [, , , [, x1]],
    obj: { d: x2 },
  },
] = array;
// console.log(x1, x2);

document.getElementById("demo").innerHTML = `First require : ${x1} /////
   Second required : ${x2}`;
("");

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
const array2 = [
  2,
  4,
  [22, "test"],
  false,
  null,
  { a: 2 },
  [22, "test"],
  "null",
];

function isduplicated(array) {
  let x = new Set();

  for (let i of array) {
    if (typeof i === "object" && i !== null) {
      i = JSON.stringify(i);
    }
    if (x.has(i)) {
      return true;
    } else {
      x.add(i);
    }
  }
  return false;
}

let y = isduplicated(array2);
document.getElementById("demo2").innerHTML = `Is array  [
  2,
  4,
  [22, "test"],
  false,
  null,
  { a: 2 },
  [22, "test"],
  "null",
] has duplicated ? : ${y} `;
