let json = {
    name: 'jspang',
    skill: 'web'
}
console.log(json.name);  //jspang

var map = new Map();

//增set
map.set(json, 'iam');
console.log(map);
// map.set('jspang', json);
// console.log(map);

//取值get
console.log(map.get(json));  //iam

//删除delete
map.delete(json);
console.log(map);  //Map(0) {}

//size属性
console.log(map.size);  //0

//查找has
console.log(map.has('jspang'));  //false

//清除clear
map.clear();




