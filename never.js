"use strict";
function error(message) {
    throw new Error(message);
    // throw 를 하면 리턴이 되지않는다. 
}
function fail() {
    return error('failed');
}
function infiniteLoop() {
    while (true) {
    }
}
// 타입오프를 이용해서 가로안에 내용이 어떠한 특정타입이 되도록 가드를 치는 것을
// 타입오브 가드 라고 한다. 
if (typeof a !== 'string') {
    a;
}
