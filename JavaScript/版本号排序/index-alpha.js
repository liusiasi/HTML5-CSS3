let s1 = '1.2.0';
let s2 = '1.0.1';

function parseVersion(v) {
    const vMatch = v.match(/^(\d+)\.(\d+)\.(\d+)(-(alpha|beta|rc)\.(\d+))?$/);
    if (vMatch === null) {
        throw new Error('invalidate version');
    }

    const major = parseInt(vMatch[1], 10);
    const minor = parseInt(vMatch[2], 10);
    const patch = parseInt(vMatch[3], 10);

    const pre = vMatch[4] ? vMatch[4].slice(1) : null;

    return { major, minor, patch, pre}

}

function compareVersion(version1, version2) {
    const _version1 = parseVersion(version1);
    const _version2 = parseVersion(version2);
   
    // 处理主版本号
    if(_version1.major !== _version2.major) {
        return  version1.major - version2.major;
    }

    // 处理次版本号
     if(_version1.minor !== _version2.minor) {
        return  _version1.minor - _version2.minor;
    }

     // 处理主版本号
     if(_version1.patch !== _version2.patch) {
        return  _version1.patch - _version2.patch;
    }

    // 处理预发版本号
    if(_version1.pre === null && _version2.pre === null) {
        return 0;
    }

    if(_version1.pre === null) {
        return -1;
    }

    if(_version2.pre === null) {
        return -1;
    }

    // 获取预发
    const preOrder = ['alpha', 'beta', 'rc'];
    const [tag1, num1] = _version1.pre.split('.');
    const [tag2, num2] = _version2.pre.split('.');

    const _verson1Order = preOrder.indexOf(tag1);
    const _verson2Order = preOrder.indexOf(tag2);

    if(_verson1Order !== _verson2Order) {
        return _verson1Order - _verson2Order;
    }

    return parseInt(num1) - parseInt(num2);
}

console.log(compareVersion(s1, s2));