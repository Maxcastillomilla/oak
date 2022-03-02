let altura = document.body.clientHeight 

console.log(altura)


let inicio = 180
let primerscrollTop = document.documentElement.scrollTop;
document.getElementById("megaline").style.height = primerscrollTop + inicio + "px"







function ScrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop)
    

    if(scrollTop < 2500){
        document.getElementById("megaline").style.height = inicio + scrollTop + "px"; 
        /* document.getElementById("megaline").style.transform = 'scale(1.5,1)'; // or any x and y value  */
        

    }


    if(scrollTop > 200){
        document.getElementById("t1").style.opacity = 1;
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

    if(scrollTop > 700){
        document.getElementById("t2").style.opacity = 1;
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

     if(scrollTop > 1270){
        document.getElementById("t3").style.opacity = 1;
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

     if(scrollTop > 1790){
        document.getElementById("t4").style.opacity = 1;
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

     if(scrollTop > 2370){
        document.getElementById("t5").style.opacity = 1;
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