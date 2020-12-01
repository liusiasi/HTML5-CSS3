function translateDataToTree(data) {
    let parents = data.filter(value => value.parentId == 'undefined' || value.parentId == null)
    let children = data.filter(value => value.parentId !== 'undefined' && value.parentId != null)
    let translator = (parents, children) => {
      parents.forEach((parent) => {
        children.forEach((current, index) => {
          if (current.parentId === parent.id) {
            let temp = JSON.parse(JSON.stringify(children))
            temp.splice(index, 1)
            translator([current], temp)
            typeof parent.children !== 'undefined' ? parent.children.push(current) : parent.children = [current]
          }
        }
        )
      }
      )
    }
   
    translator(parents, children)
   
    return parents
  }

  var data = [{
    id: 1,
    name: '1',
}, {
    id: 2,
    name: '1-1',
    parentId: 1
}, {
    id: 3,
    name: '1-1-1',
    parentId: 2
}, {
    id: 4,
    name: '1-2',
    parentId: 1
}, {
    id: 5,
    name: '1-2-2',
    parentId: 4
}, {
    id: 6,
    name: '1-1-1-1',
    parentId: 3
}, {
    id: 7,
    name: '2',
}]

console.log(translateDataToTree(data));