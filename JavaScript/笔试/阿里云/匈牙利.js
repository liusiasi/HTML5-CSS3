  /**
   * 匈牙利命名字符串和驼峰命名字符串互相转换
   * 说明：
   *  1. 将字符串匈牙利命名字符串(例如：person_first_name)转成驼峰命名字符串(例如：personFirstName)
   *  2. 将驼峰命名的字符串(例如：personFirstName)转成匈牙利命名字符串(例如：person_first_name)
   *  3. 字符长度不限
   * 示例：
   *  const str1 = 'person_first_name';
   *  parseStrToCamelCase(str1); // 返回 'personFirstName'
   * 
   *  const str2 = 'personFirstName';
   *  parseStrToHungarianNotation(str2); // 返回 'person_first_name'
   */
  
  function parseStrToCamelCase( str ) { 
     return str.replace(/(_[a-z])/g,(match,$1)=>{
        return $1.slice(1).toUpperCase();
     })
  }
  console.log(parseStrToCamelCase('person_first_name'));



 
  
  function parseStrToHungarianNotation( str ) {
    return str.replace(/[A-Z]/g,(match)=>{
        return '_'+match.toLowerCase();
     })
  }

  console.log(parseStrToHungarianNotation('personFirstName'));
