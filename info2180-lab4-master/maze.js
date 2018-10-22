window.onload = function () {
    var border = document.getElementById('boundary1');
    var all= document.querySelectorAll('.boundary');
    var thig= document.getElementsByClassName('.boundary');
    var finish= document.getElementById('end');
    var start= document.getElementById('start');
    
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
            })});
    }
    
    
    red(border);
    changeAll();
    /*youWin();*/
    restart();
}
