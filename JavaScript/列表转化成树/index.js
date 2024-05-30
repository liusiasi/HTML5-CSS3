const arr = [
    { id: 1, title: "child1", parentId: 0 },
    { id: 2, title: "child2", parentId: 0 },
    { id: 3, title: "child1_1", parentId: 1 },
    { id: 4, title: "child1_2", parentId: 1 },
    { id: 5, title: "child2_1", parentId: 2 }
]


function arrToTree(arr) {
    let result = [];
    let map = {};

    for (item of arr) {
        map[item.id] = { ...item, children: [] }
    }

    for (item of arr) {
        const newItem = map[item.id];
        if (item.parentId === 0) {
            result.push(newItem);
        } else {
            map[item.parentId].children.push(newItem);
        }
    }
    return result;
}

console.log(JSON.stringify(arrToTree(arr)));