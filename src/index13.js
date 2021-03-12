//set
let setArr = new Set(['jspang', '技术胖', 'web', 'jspang']);
console.log(setArr);  //Set(3) {"jspang", "技术胖", "web"}

//追加add
setArr.add("前端职场");
console.log(setArr);  //Set(4) {"jspang", "技术胖", "web", "前端职场"}

//删除delete
setArr.delete('前端职场');
console.log(setArr);  //Set(3) {"jspang", "技术胖", "web"}

//查找has
console.log(setArr.has('jspang'));  //true

//set的for..of循环
for (let item of setArr) {
    console.log(item);   //jspang  技术胖  web
}

//size属性
console.log(setArr.size);  //3

//forEach循环
setArr.forEach((value) => console.log(value));  //jspang  技术胖  web


//WeakSet
let weakObj = new WeakSet();
let obj = { a: 'jspang', b: '技术胖' };
let obj1 = obj;

weakObj.add(obj);
weakObj.add(obj1);
console.log(weakObj);

