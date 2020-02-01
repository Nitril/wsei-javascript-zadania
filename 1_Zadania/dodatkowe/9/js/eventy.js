var articles = document.querySelectorAll('article');
var link1 = articles[0].querySelector('a');
var link2 = articles[1].querySelector('a');
var contents = document.getElementsByClassName('content');;

link1.addEventListener('click', function () {



    contents[0].style.display = 'block';


})


link2.addEventListener('mouseover', function () {

    contents[1].style.display = 'block';


})