"use strict";
const aNumber = maybe;
// 타입가드를 통해서 타입을 한정시켜야지만 쓸수있는 형태가 unknown
if (maybe === true) {
    const aBoolean = maybe;
    // const aString: string = maybe;
}
if (typeof maybe === 'string') {
    const aString = maybe;
    // const aBoolean: boolean =  maybe;
}
