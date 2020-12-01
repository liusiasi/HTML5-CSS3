setImmediate(()=>{
    console.log('setImmediate');
})

setTimeout(()=>{
    console.log('timeout');
},0)

new Promise((resolve , reject) => {
    resolve('promise');
    console.log('---promise----');
}).then(res => {
    console.log('promise');
})

process.nextTick(()=>{
    console.log('nextTick');
})