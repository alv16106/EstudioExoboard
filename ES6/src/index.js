// @flow

//INCORRECTO
function foo(x: ?number): string {
    if (x) {
        return x;
    }
    return "default string";
}

//CORRECTO
function bar(x: ?string): string {
    if (x) {
        return x;
    }
    return "default string";
}

const s = (re: string): string => {
    return re;
}
