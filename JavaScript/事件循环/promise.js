const f = () => console.log('now');
(
  () => new Promise(
    resolve => resolve(f())
  )
)();
console.log('next');


Promise.resolve(f()).then(res => {
    console.log(res);
});

console.log('next');
