export function isNull(condition) {
    return condition !== null ? true : false
}
export function isLength(param, max) {
    return param !== null && param.length >= max ? true : false
}
export function isEmail(param) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
    return reg.test(param) === false ? true : false
}
export function limit(param, max) { 
    param.length < max ? false : true   
}