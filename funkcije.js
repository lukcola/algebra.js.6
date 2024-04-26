/*
var myNiz = ["ime", "prezime", "godine", "broj cipela", "itd"];

function pronadjiNajduzuRijec(niz) {
    var najduzaRijec = "";
    var duljina = 0;
    for (var element of niz){
        if(element.length > duljina){
            duljina = element.length;
            najduzaRijec = element;
        }
    }
    return najduzaRijec;
}

var najduzaRijec = pronadjiNajduzuRijec(myNiz);

console.log(najduzaRijec);
*/
/*
function getMax(a, b) {
    let retVal = 0;
    if (a > b) {
        retVal = a;
    }
    else if (b > a) {
        retVal = b;
    }
    else if (a === b) {
        retVal = a;
    }
    return retVal;
}

console.log(getMax(1, 2));
*/

function zbroji(a, b) {
    if(typeof a !== "number" && typeof b !== "number"){
        return a + b;
    }
    return "error!";
}

console.log(zbroji("1", 2));