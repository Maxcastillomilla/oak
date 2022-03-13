let altura = document.body.clientHeight 

console.log(altura)


let inicio = 180
let primerscrollTop = document.documentElement.scrollTop;
document.getElementById("megaline").style.height = primerscrollTop + inicio + "px"


/* --------------- */

let img1 = document.querySelector('.i1');

let img2 = document.querySelector('.i2');

let img3 = document.querySelector('.i3');

let img4 = document.querySelector('.i4');

let img5 = document.querySelector('.i5');

let img6 = document.querySelector('.i6');








function ScrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    /* console.log(scrollTop) */
    
    if((inicio + scrollTop)> 220){
        document.getElementById("flecha").style.opacity = 0;
    }
    

    if(scrollTop < 2500){
        document.getElementById("megaline").style.height = inicio + scrollTop + "px"; 
        /* document.getElementById("megaline").style.transform = 'scale(1.5,1)'; // or any x and y value  */
        

    }

    if(img2.can == false  && scrollTop < 200){
        img2.classList.toggle('active');
        img2.can = true;
        /* console.log("true") */
    }

    if(scrollTop > 200){
        document.getElementById("t1").style.opacity = 1;

        if(img2.can != false  && scrollTop < 400){
            img2.classList.toggle('active');
            img2.can = false;
            /* console.log("false") */
        }
        if(img2.can == false  && scrollTop > 700){
            img2.classList.toggle('active');
            img2.can = true;
            /* console.log("true") */
        }
        else if(img2.can != false  && scrollTop < 700){
            img2.classList.toggle('active');
            img2.can = false;
            /* console.log("false") */
        }


        
        
    }
    else{
        document.getElementById("t1").style.opacity = 0;

        
        
    }
    if(scrollTop > 400){
        
        document.getElementById("sub1").style.opacity = 1;
        
    }
    else{
        document.getElementById("sub1").style.opacity = 0;
    }
    /* ------------------------------- */



    if(img3.can == false  && scrollTop < 700){
        img3.classList.toggle('active');
        img3.can = true;
        /* console.log("true") */
    }




    if(scrollTop > 700){
        document.getElementById("t2").style.opacity = 1;


        if(img3.can != false  && scrollTop < 700){
            img3.classList.toggle('active');
            img3.can = false;
           /*  console.log("false") */
        }
        if(img3.can == false  && scrollTop > 1270){
            img3.classList.toggle('active');
            img3.can = true;
            /* console.log("true") */
        }
        else if(img3.can != false  && scrollTop < 1270){
            img3.classList.toggle('active');
            img3.can = false;
            /* console.log("false") */
        }




    }
    else{
        document.getElementById("t2").style.opacity = 0;
    }
    if(scrollTop > 880){
        
        document.getElementById("sub2").style.opacity = 1;
        
    }
    else{
        document.getElementById("sub2").style.opacity = 0;
    }

     /* ------------------------------- */
     if(img4.can == false  && scrollTop < 1270){
        img4.classList.toggle('active');
        img4.can = true;
        /* console.log("true") */
    }




     if(scrollTop > 1270){
        document.getElementById("t3").style.opacity = 1;



        if(img4.can != false  && scrollTop < 1270){
            img4.classList.toggle('active');
            img4.can = false;
            /* console.log("false") */
        }
        if(img4.can == false  && scrollTop > 1790){
            img4.classList.toggle('active');
            img4.can = true;
            /* console.log("true") */
        }
        else if(img4.can != false  && scrollTop < 1790){
            img4.classList.toggle('active');
            img4.can = false;
            /* console.log("false") */
        }




    }
    else{
        document.getElementById("t3").style.opacity = 0;
    }
    if(scrollTop > 1360){
        
        document.getElementById("sub3").style.opacity = 1;
        document.getElementById("botonresi").style.opacity = 1;
        
        
    }
    else{
        document.getElementById("sub3").style.opacity = 0;
        document.getElementById("botonresi").style.opacity = 0;
    }





     /* ------------------------------- */

     if(img5.can == false  && scrollTop < 1790){
        img5.classList.toggle('active');
        img5.can = true;
        /* console.log("true") */
    }




     if(scrollTop > 1790){
        document.getElementById("t4").style.opacity = 1;

        if(img5.can != false  && scrollTop < 1790){
            img5.classList.toggle('active');
            img5.can = false;
            /* console.log("false") */
        }
        if(img5.can == false  && scrollTop > 2270){
            img5.classList.toggle('active');
            img5.can = true;
            /* console.log("true") */
        }
        else if(img5.can != false  && scrollTop < 2270){
            img5.classList.toggle('active');
            img5.can = false;
            /* console.log("false") */
        }

        
    }
    else{
        document.getElementById("t4").style.opacity = 0;
    }
    if(scrollTop > 1900){
        
        document.getElementById("sub4").style.opacity = 1;
        
        
        
    }
    else{
        document.getElementById("sub4").style.opacity = 0;
    }


    
     /* ------------------------------- */


     if(img6.can == false  && scrollTop < 2270){
        img6.classList.toggle('active');
        img6.can = true;
        /* console.log("true") */
    }



    
     if(scrollTop > 2270){
        document.getElementById("t5").style.opacity = 1;

       


        if(img6.can != false  && scrollTop < 2270){
            img6.classList.toggle('active');
            img6.can = false;
            /* console.log("false") */
        }
        if(img6.can == false  && scrollTop > 4000){
            img6.classList.toggle('active');
            img6.can = true;
            /* console.log("true") */
        }
        else if(img6.can != false  && scrollTop < 4000){
            img6.classList.toggle('active');
            img6.can = false;
            /* console.log("false") */
        }






    }
    else{
        document.getElementById("t5").style.opacity = 0;
    }
    if(scrollTop > 2410){
        
        document.getElementById("sub5").style.opacity = 1;
        
        
        
    }
    else{
        document.getElementById("sub5").style.opacity = 0;
    }



}




















window.addEventListener('scroll', ScrollParallax);