
let dictionary = {
    A: 1,
    B: 2,
    C: 2,
    D: 3,
    E: 3,
    F: 3,
    G: 4,
    H: 4,
    I: 4,
    J: 5,
    K: 5,
    L: 5,
    M: 6,
    N: 6,
    O: 6,
    P: 7,
    Q: 7,
    R: 7,
    S: 7,
    T: 8,
    U: 8,
    V: 8,
    W: 9,
    X: 9,
    Y: 9,
    Z: 0
}

function getNumFromLetters( text ){
    let number = "";
    text = text.toUpperCase();
    
    for( let i = 0; i < text.length; i ++ ){
        if ( isNaN(Number(text[i])) ){
    
            if( dictionary[text[i]] === undefined ){
                return "The text provided has invalid characters that do not represent a number";
            }
            number += dictionary[text[i]];
        }
        else{
            number += text[i];
        }
    }
    return number;
}

console.log( getNumFromLetters( '844DOMINOS' ) );

