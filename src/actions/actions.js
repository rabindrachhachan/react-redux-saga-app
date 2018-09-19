import * as types from "./types";

export function addOne(){
    return{
        type:types.INCREMENT,
    }
}

export function subOne(){
    return{
        type:types.DECREMENT,
    }
}

export function addOneAsync(){
    return{
        type: types.INCREMENT_ASYNC,
    }
}
