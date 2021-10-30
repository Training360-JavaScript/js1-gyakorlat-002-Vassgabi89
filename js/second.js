/*
- A `js/second.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként kap egy tetszőleges 
típusú elemeket tartalmazó tömböt és egy tetszőleges primitív értéket!
- A függvény neve `checker` legyen!
- A függvény __visszatérési értéke__ egy objektum, amely a következő 
property-ket tartalmazza:
- `exists`: Értéke true/false attól függően, hogy a második paraméterként 
megadott érték megtalálható-e a tömbben
- `index`: Értéke egy szám; ha a második paraméterként megadott érték 
megtalálható a tömbben, akkor a tömbben lévő indexe, 
ha nem, akkor -1 legyen az értéke
- `allElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömb minden eleme number típusú-e vagy sem
- `someElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömbben van-e number típusú elem vagy sem
*/

/*
const index = (array, x) => {
    let index;
    if (array.findIndex(value => value === x)) {index=array.findIndex(value => value === x);}
    else index=-1;
    return index;
}
*/

function indexFunc (array, x)  {
    let index;
    if (array.findIndex(value => value === x)) {index=array.findIndex(value => value === x);}
    else index=-1;
    return index;
}

const checker = (array,x) => ({
    exists: array.some(value => value === x),
    index: array.findIndex(value => value === x), //ide jönne, hogy -1 ha ne mtalálja, de csak 
    allElementsAreNumbers: array.every(item => typeof item==='number'),
    someElementsAreNumbers: array.some(item => typeof item==='number')
});
