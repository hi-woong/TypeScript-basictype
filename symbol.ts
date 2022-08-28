console.log(Symbol('foo') == Symbol("foo"));

const sym = Symbol(); // 고유한 형태의 어떤값 오브젝트의 프로퍼티를 만들때 유용함

const obj = {
   [sym]: "value",

};

obj[sym]

//접근을 막거나 접근을 허용할때 사용!!!!