var x = prompt ("unesite vrijednost poluprecnika(R)");

var y = prompt ("unestive visinu valjka (H)");

const pi = 3.14;

function zapremina_valjka(x, y, pi){
     return x * x * y * pi;
}

alert ("zapremina valjka je " + zapremina_valjka(x, y, pi));