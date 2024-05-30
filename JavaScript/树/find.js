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

function findNode(tree, name) {
    if (tree.length === 0) return null;
    for(let i = 0; i < tree.length; i++) {
        const element = tree[i];
        if (element.name === name) {
            console.log('find');
            console.log(element);
            return element.id;
        }

        if (element.children) {
           const res = findNode(element.children, name);
           if(res) return res;
        }  
    }
}

console.log(findNode(tree, "4"));