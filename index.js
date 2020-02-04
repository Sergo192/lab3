let expression = function(a,b,arguments = []){
    if (a>b){
        arguments.push(a)
        return arguments;
    }
    arguments.push(b)
    return arguments
};
expression();
declaration();
function declaration(a,b,arguments = []){
    if (a === b){
        arguments.push(true);
        return arguments
    }
    return arguments
};



