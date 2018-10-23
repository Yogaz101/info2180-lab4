window.onload = function () {
    const border = document.getElementById('boundary1');
    const all= document.querySelectorAll('.boundary');
    const thig= document.getElementsByClassName('.boundary');
    const finish= document.getElementById('end');
    const start= document.getElementById('start');
    const status= document.getElementById('status');
    const last= document.getElementsByClassName('.example');
    
    function red(obj){
        obj.addEventListener("mouseover", function(){ obj.className += ' youlose'});
    }
    
    function changeAll(){
        all.forEach(function (t){
            t.addEventListener("mouseover", function(){ t.className += ' youlose'})
        });
    }
    
   
    function restart(){
            last.className="";
            start.addEventListener("click", function(){ all.forEach(function (y){
                y.className = 'boundary';
                status.textContent='Move your mouse over the "S" to begin'
            })});
    }
    
    function setStatus(y){
            status.textContent=y;
    }
    
     function youWin(){
         finish.addEventListener("mouseover", function(){
             var change=0;
             all.forEach(function (y){
                 if(y.classList.contains("youlose")){
                     change++;
                     if(change>0){
                         setStatus('You Lose!');
                     }
                 }
                 else{
                     if(change==0){
                         setStatus('You Win!');
                     }
                 }
             });
         });
     }
             
    
    
    
    red(border);
    changeAll();
    youWin();
    restart();
}
