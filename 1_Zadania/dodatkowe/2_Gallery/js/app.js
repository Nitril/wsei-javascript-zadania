
document.addEventListener('DOMContentLoaded', myCode, false);
function* makeRangeIterator(start = 0, end = 100, step = 1) {
    i = start;
    while(true) {

        yield i%2;
        i++
    }
}



function myCode() {
    console.log(`DOMContentLoaded\nDziała`);
    var lista = document.getElementsByClassName("gallery")[0].getElementsByTagName('li');
    
    for(var i = 0; i < lista.length; i++){
        // Console: print the clicked <p> element 
        lista[i].addEventListener('click', handleMouseClick, false);
         
    }
    
    var body = document.body;
    
    console.log(lista);
    console.log(body);
    
    
    function handleMouseClick(e) { 
    
        
        
        //getElementsByTagName('img')[0].src
        var img = this.querySelector('img');   
        console.log(img.src); 
        //document.body.style.background = "#f3f3f3 url('${this.querySelector('img').src}') no-repeat right top";
        //body.style.backgound.url = this.querySelector('img').src;
        //body.style.backgroundImage = "url('"+img.src+"')";
        //img.requestFullscreen();
        //img.style.display = 'block';
        
        var imgc = document.createElement('img'); 
        imgc.src = img.src; 

        
        //bdy.replaceChild(img, imgc);
        //var x = func();
        //console.log(gen().next())
        
        if (document.body.hasChildNodes()) {
            document.body.removeChild(document.body.lastChild);
            
         } 
        else document.body.appendChild(imgc);
            // while (body.hasChildNodes()) {  
                
            //   }
         
         
    }
    
    


}

