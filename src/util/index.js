export function hash(){
    let timspace = new Date().getTime().toString(16);
    let random = Math.random().toString(16);
    return timspace + random
}