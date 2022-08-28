






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



if(typeof a !== 'string'){


 a;

}