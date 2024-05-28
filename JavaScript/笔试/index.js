console.log('1'); 

async function async1() {

    console.log('2');

    await async2();

    console.log('3');

}

async function async2() {

    console.log('4');

}


process.nextTick(function() {

    console.log('5');

})


setTimeout(function() {

    console.log('6');

    process.nextTick(function() {

        console.log('7');

    })

    new Promise(function(resolve) {

        console.log('8');

        resolve();

    }).then(function() {

        console.log('9')

    })

})


async1();


new Promise(function(resolve) {

    console.log('10');

    resolve();

}).then(function() {
    new Promise(function(resolve) {

        console.log('13');

        resolve();

    }).then(function() {

        console.log('14')

    })

    console.log('11');

});

console.log('12');

1  2  4 10 12  3 5 13 11 14
