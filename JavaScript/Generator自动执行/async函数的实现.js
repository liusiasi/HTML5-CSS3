/**
 * async就是Generator的语法糖 等于 Generator+自动执行器
 */


function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);
        return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
                        return step("next", value);
                    },
                        function (err) {
                            return step("throw", err);
                        });
                }
            }
            return step("next");
        });
    };
}

function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

let test = function () {
    var ref = _asyncToGenerator(function* () {
        for (let i = 0; i < 10; i++) {
            yield sleep(100);
        }
    });

    return function test() {
        return ref.apply(this, arguments);
    };
}();

function _async(fn) {
    return function () {
        var gen = fn.apply(this, arguments);
        return new Promise((resolve, reject) => {
            let step = function (key, args) {
                try {
                    let info = gen[key](args);
                    let value = info.value;
                } catch (e) {
                    reject(e);
                    return;
                }
                if(info.done){
                    resolve(value);
                }else{
                    return Promise.resolve(value).then(value => {
                        step('next',value)
                    },err=>{
                        step('throw',err);
                    })
                }

            }
            step('next');
        })
    }
}