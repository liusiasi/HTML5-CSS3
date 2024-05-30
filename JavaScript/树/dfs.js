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


function dfs(tree, result = []) {
    if (!tree || tree.length === 0) return result;
    for(item of tree) {
        result.push(item.id);
        if(item.children) dfs(item.children, result);
   }

   return result
}

console.log(dfs(tree));