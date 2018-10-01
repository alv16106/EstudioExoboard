

//INCORRECTO
function foo(x) {
    if (x) {
        return x;
    }
    return "default string";
}

//CORRECTO
function bar(x) {
    if (x) {
        return x;
    }
    return "default string";
}