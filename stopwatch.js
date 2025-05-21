let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let ms = document.querySelector("#ms");


let m = 0;
let s = 0;
let mss = 0 ;
let timer = null;

function start(){
   timer = setInterval(()=>{
        mss +=1;
        ms.innerHTML = `${mss}`

        

        if(mss === 60){
        s +=1;
        sec.innerHTML=`${s}`
        mss=0
    }
        if(s === 60){
            m +=1;
            min.innerHTML = `${m}`;
            s=0
        }
    },10);



}

function stop(){
    clearInterval(timer)
}


function reset(){
    
        m = 0;
        min.innerHTML = `${m}`
        
        s = 0;
        sec.innerHTML = `${s}`
        
        mss = 0;
        ms.innerHTML = `${mss}`

  
}