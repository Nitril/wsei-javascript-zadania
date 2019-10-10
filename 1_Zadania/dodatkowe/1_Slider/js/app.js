document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Działa!');
    var imgIndex = 0;
    var next = document.getElementById("nextPicture");
    var prev = document.getElementById("prevPicture");
    
    //const list = document.querySelector('ul');
    //document.getElementsByClassName("slider")[0].classList.add('is-visible');
    //photoArray[index]. = "visible";
    //[index].
    //photoArray = document.getElementsByClassName("slider").getElementsByTagName('li')[0];
    photoArray = document.getElementsByClassName('slider')[0].getElementsByTagName('li'); 
    photoArray[imgIndex].classList.add('visible'); 
    
    console.log(photoArray[imgIndex]);
    console.log(prev);
    console.log(next);
       

    function nextClicked() {
        photoArray[imgIndex].classList.remove('visible');
        console.log("next clicked");
        if  (imgIndex >= photoArray.length-1) imgIndex = 0;
        else imgIndex++;
        photoArray[imgIndex].classList.add('visible'); 
    }

    function prevClicked() {
        photoArray[imgIndex].classList.remove('visible');
        console.log("prev clicked");
        if  (imgIndex <= 0) imgIndex = photoArray.length-1;
        else imgIndex--;
        photoArray[imgIndex].classList.add('visible'); 
    }

    next.addEventListener("click", nextClicked);
    prev.addEventListener("click", prevClicked);

    
});


    