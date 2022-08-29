






function error(message: string): never{
    throw new Error(message);

    // throw 를 하면 리턴이 되지않는다. 
}


function fail(){

    return error('failed');
}

function infiniteLoop(): never {

    while(true){


    }
}



declare const a: string | number;

// 타입오프를 이용해서 가로안에 내용이 어떠한 특정타입이 되도록 가드를 치는 것을
// 타입오브 가드 라고 한다. 

if(typeof a !== 'string'){


 a;

}

type Indexable<T> = T extends string ? T & {[ index: string]: any} : never;
//  extends 가 여기서 의미하는것은 T 가 만약에 스트링이면 T & {[ index: string]: any} 
// 이런식으로 보내는것이고 아니라면 never가 보내진다.



type ObjectIndexable = Indexable<{}>;