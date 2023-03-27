let values = [];


for (let i = 0; i < 5; i++) {
  let value = Math.floor(Math.random() * 900) + 100;
  values.push(value);
}
console.log(values);

let minValue = Math.min(...values);
let maxValue = Math.max(...values);


console.log("Minimum value: " + minValue);
console.log("Maximum value: " + maxValue);