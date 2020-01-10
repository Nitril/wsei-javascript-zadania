/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener('DOMContentLoaded', myCode, false);
// function* makeRangeIterator(start = 0, end = 100, step = 1) {
//     i = start;
//     while(true) {

//         yield i%2;
//         i++
//     }
// }



function myCode() {
    console.log(`DOMContentLoaded\nDziała`);
    let gal = document.getElementsByClassName("gallery")[0].getElementsByTagName('li');
    //let lista = [];
    //for(var i = 0, a = []; i < gal.length; i++) lista.push(gal[i]);
    let lista = Array.from(document.getElementsByClassName("gallery")[0].getElementsByTagName('li'));
        
    var body = document.body;
    
    console.log(lista);
    console.log(body);
    
    for(let i = 0; i < lista.length; i++){
        
        lista[i].addEventListener('click', handleMouseClick, false);
         
    }

    function handleMouseClick(e) { 
    
        let img = this.querySelector('img');   
        console.log(img.src); 
                
        let div = document.createElement('div');
        div.classList.add('fullScreen');
        let imgc = document.createElement('img');
        imgc.src = img.src;
        let button = document.createElement('button');
        button.classList.add('close');
        let close = document.createTextNode('Close');
        button.appendChild(close);
        div.appendChild(imgc);
        div.appendChild(button);
        body.appendChild(div);
        
        button.addEventListener('click', function() {

            body.removeChild(div);
        }, false);
        
         
         
    }
    
    


}

