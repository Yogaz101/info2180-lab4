window.onload = function () {
    const border = document.getElementById('boundary1');
    const all= document.querySelectorAll('.boundary');
    const thig= document.getElementsByClassName('.boundary');
    const finish= document.getElementById('end');
    const start= document.getElementById('start');
    const status= document.getElementById('status');
    
    function red(obj){
        obj.addEventListener("mouseover", function(){ obj.className += ' youlose'});
    }
    
    function changeAll(){
        all.forEach(function (t){
            t.addEventListener("mouseover", function(){ t.className += ' youlose'})
        });
    }
    
    function youWin(){
        var check=false;
        all.forEach(function (y){
            if (y.classList.contains("youlose")){
                console.log("it is true");
            }
            else{
                finish.addEventListener("mouseover", function(){ alert("You win!")});
            }
        });
    }
    
    function restart(){
            start.addEventListener("click", function(){ all.forEach(function (y){
                y.className = 'boundary'
                status.textContent='Move your mouse over the S to begin'
            })});
    }
    
    function setStatus(){
            finish.addEventListener("mouseover", function(){ status.textContent='You win!'})
    }
    
    
    red(border);
    changeAll();
    /*youWin();*/
    restart();
    setStatus();
}
