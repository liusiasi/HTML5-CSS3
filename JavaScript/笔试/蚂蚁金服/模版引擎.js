/* 题目 4：
模版替换引擎函数，根据模版字符串和传入的数据返回替换后的字符串，形如(template, data) => string,
参数:
template: 模版字符串，例如 "My name is {{ name }}, I'm {{ age }} years old."
data: 数据对象，例如{ name: '小王', age: 20 }
返回:
"My name is 小王, I'm 20 years old."
*/
function render(template, data) {
    // TODO: 你的代码
    return template.replace(/\{\{(.*?)\}\}/g, (match,$1)=>data[$1.trim()]);
}

console.log(render("My name is {{ name }}, I'm {{ age }} years old.",{ name: '小王', age: 20 }));