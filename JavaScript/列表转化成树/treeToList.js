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


function toList(arr) {
    let result = [];

    for (let i = 0; i< arr.length; i++) {
        const { children, ...item } = arr[i];
        if (children && children.length) {
            result = result.concat(toList(children))
        }

        result.push(item);
    }

    return result;
}

console.log(toList(tree));
