'use strict';

//set
var setArr = new Set(['jspang', '技术胖', 'web', 'jspang']);
console.log(setArr); //Set(3) {"jspang", "技术胖", "web"}

//追加add
setArr.add("前端职场");
console.log(setArr); //Set(4) {"jspang", "技术胖", "web", "前端职场"}

//删除delete
setArr.delete('前端职场');
console.log(setArr); //Set(3) {"jspang", "技术胖", "web"}

//查找has
console.log(setArr.has('jspang')); //true

//set的for..of循环
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = setArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        console.log(item); //jspang  技术胖  web
    }

    //size属性
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

console.log(setArr.size); //3

//forEach循环
setArr.forEach(function (value) {
    return console.log(value);
}); //jspang  技术胖  web


//WeakSet
var weakObj = new WeakSet();
var obj = { a: 'jspang', b: '技术胖' };
weakObj.add(obj);
console.log(weakObj);
