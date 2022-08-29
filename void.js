"use strict";
// 이렇게 리턴타입 void 로 지정된것은 
// 이 함수의 리턴을 가지고 무엇을 하지않겟다 라고 명시적을 표현
// 하고 그것을 막는 행위
function returnVoid(message) {
    console.log(message);
    return undefined; // 유일하게 indefined 할당이가능;
}
returnVoid("리턴이 없다.");
