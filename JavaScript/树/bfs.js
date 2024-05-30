let tree = [
    {
        "id": 1,
        "name": "1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "2",
                "pid": 1,
                "children": []
            },
            {
                "id": 3,
                "name": "3",
                "pid": 1,
                "children": [
                   {
                     "id": 4,
                     "name": "4",
                     "pid": 3,
                     "children": []
                   }
                ]
            }
        ]
    }
]


function bfs(arr) {
    let queue = [arr[0]];
    let result = []
    while(queue.length) {
        let cur = queue.shift();
        result.push(cur.id);
        for (let i = 0; i < cur.children.length; i++) {
            queue.push(cur.children[i]);
        }
    }

    return result;
}

console.log(bfs(tree));