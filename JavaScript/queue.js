
var queue = new queue();
var testNums = parseInt(readline());
var initialNums = 0;
while(initialNums < testNums){
    var line = parseInt(readline());
    for(let i = 0 ; i < line ; i++){
        var lineOp = readline();
        var op = lineOp.split(' ');
        switch(op[0]) {
            case "PUSH": queue.push(op[1]);
            case "POP": print(queue.pop());
            case "TOP": print(queue.top());
            case "SIZE": print(queue.size());
            case "CLEAR": queue.clear();
            default:
                break;
        }

    }
    initialNums++;
}
function queue() {
    this.queue = [];
    this.push = push;
    this.pop = pop;
    this.top = top;
    this.size = size;
}

function push(el){
    this.queue.push(el);
}

function pop(){
    if(this.queue.length === 0) return -1;
    this.queue.shift();
}

function top(){
    if(this.queue.length === 0) return -1;
    return this.lengt.queue[0];
}

function size(){
    return this.queue.length;
}

function clear(){
    this.queue = [];
}