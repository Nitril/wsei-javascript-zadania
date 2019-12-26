document.addEventListener('DOMContentLoaded', myCode, false);


function myCode() {
    
    console.log("działa");

    var imge = Array.from(document.getElementById("gallery").getElementsByTagName("img"));
    var showButton = document.getElementById("showButton");
    var closeButton = document.getElementById("hideButton");
    var tagInput = document.getElementById("tagInput");

    console.log(imge);
    console.log(showButton);
    console.log(closeButton);
    console.log(tagInput);

    // for(let i = 0; i < imge.length; i++){
        
    //     imge[i].addEventListener('click', handleMouseClick, false);
    //let innTxt = tagInput.innerText;     
    // }
    //let innTxt = tagInput.placeholder.innerText;
    closeButton.addEventListener('click', function() {
        let innTxt = tagInput.value;
        console.log(innTxt);
        tagInput.value ="";

        for (let i = 0; i < imge.length; i++) {
            if (imge[i].dataset.tag.indexOf(innTxt) != -1 && innTxt != "") {
                //console.log(imge[i].dataset.tag);
                imge[i].classList.add("invisible");
            }
            
        }


    }, false);

    showButton.addEventListener('click', function() {
        let innTxt = tagInput.value;
        console.log(innTxt);
        tagInput.value ="";

        for (let i = 0; i < imge.length; i++) {
            if (imge[i].dataset.tag.indexOf(innTxt) != -1 && innTxt != "") {
                //console.log(imge[i].dataset.tag);
                imge[i].classList.remove("invisible");
            }
            
        }
    }, false);

}
