//dom节点的深度优先遍历
var arr=[];
function traversalDFSDom(rootDom){
    if(!rootDom) return;
    var len = rootDom.children.length;
    if(len === 0){
        arr.push(rootDom);
        return;
    }
    arr.push(rootDom);
    for(let i = 0 ; i < len ; i++){
        traversalDFSDom(rootDom.children[i])
    }
}

function traversalDFSDOM(rootDom) {
    if(!rootDom)return;
    var stack=[]
    var node = rootDom;
    while(node!=null){
        arr.push(node);
        if(node.children.length>=0){
            for(let i=node.children.length-1;i>=0;i--)
                stack.unshift(node.children[i]);
        }
        node = stack.shift()
    }
}
traversalDFSDOM(bodyDom)

//dom广度优先遍历

var stack = [bodyDom];
function traversalBFSDom(count){
    count = count || 0;
    if(stack[count]){
        var children = stack[count].children
        for(let i = 0 ; i < children.len ; i++){
            stack.push(children[i]);
        }
    }
    traversalBFSDom(++count);   
}

function traversalBFSDOM (rootDom) {
    if(!rootDom)return;
    arr.push(rootDom)
    var queue = [rootDom];
    while(queue.length){
        var node = queue.shift();
        if(!node.children.length){
            continue;
        }
        for(var i=0;i<node.children.length;i++){
            arr.push(node.children[i]);
            queue.push(node.children[i]);
        }
    }
}

