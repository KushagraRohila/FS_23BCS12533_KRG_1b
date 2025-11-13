// This is an example of synchronous programming in JavaScript.
console.log("Start");

function task() {
  console.log("Task running...");
}

task();
console.log("End");

// This is an example of asynchronous programming in JavaScript.
console.log("Start");

setTimeout(() => {
  console.log("Task running after 2 seconds...");
}, 2000);

console.log("End");
