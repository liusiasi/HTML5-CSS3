const func = async () => {
    const arr = [1,2,3]
    arr.forEach(async item => {
        const ret = await(new Promise((resolve) => {
            setTimeout(() => {
                resolve(item)
            }, (3-item)*100);
        }))
        console.log(ret);
        console.log('forEach');
    })

    for(let item of arr){
        const ret = await(new Promise((resolve)=>{
            setTimeout(() => {
                console.log(item+'hh');
                resolve(item)
            }, (3-item)*1000);
        }))
        console.log(ret);
        console.log('of');

    }
}

func();