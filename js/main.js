/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/

//array = ["cica", "kutya", "védelmi", "hiba"];

function generateList(array) {
    let fulltext='';
    for (let i = 0; i < array.length; i++)
    {
        fulltext += '<li>' + array[i] + '</li>';
        }
    return '<ul>' + fulltext + '</ul>';
}

//console.log(generateList(array));