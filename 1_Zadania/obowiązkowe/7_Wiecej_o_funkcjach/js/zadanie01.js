
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//deklaracja funkcji sortArray
function sortArray() {

    //deklaracja tablicy z liczbami do posortowania
    var points = [41, 3, 6, 1, 114, 54, 64];

    //wywałenie metpdy sortującej sort na tablicy points
    points.sort(function (a, b) {
        // funkcja compareFunction  bedąca parametrem funkcji sort przekazuje informacje o sposobie sortowania liczb. w tym wypadku funkcjaw celu porównania odejmuje a od b czyli elementy porównywane
        return a - b;
    });

    //zwrócenie posortowaniej tablicy points
    return points;
}

//wywołanie funkcji sortArray
sortArray();