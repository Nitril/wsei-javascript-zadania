/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//deklaracja funkcji o nazwie jeden
function jeden() {

    //deklaracja zmiennej zmienna1 - zmienna lokalna dla funkcji jeden
    var zmienna1 = 1;

    //Deklaracja funkcji dwa we wnętrzu funkcji jeden. stworzenie nowego zakresu dla funkcji dwa
    function dwa() {

        //wypisanie do konsoli zawartości zmiennej jeden - jest to zmienna dostępne z poziomu funkcji dwa
        console.log(zmienna1);

        //deklaracja zmienna2 jako zmiennej lokalnej dla zakresu dwa
        var zmienna2 = 3;
    }

    //wywołanie funkcji dwa w ramach wykonywania funkcji jeden
    dwa();

    //wypisanie do do konsoli zawartosci zmiennej2 - niedostępnej z poziomu funkcji jeden ponieważ jest zadeklarowana jako zmienna lokalna dla funkcji dwa
    console.log(zmienna2)
}

//wywołanie funkcji jeden
jeden()