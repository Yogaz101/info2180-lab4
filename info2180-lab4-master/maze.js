window.onload = function () {
    var border = document.getElementById('boundary1');
    var all= document.querySelectorAll('.boundary');
    var thig= document.getElementsByClassName('.boundary');
    
    function red(obj){
        obj.addEventListener("mouseover", function(){ obj.className += ' youlose'});
    }
    
    function changeAll(){
        all.forEach(function (t){
            t.addEventListener("mouseover", function(){ t.className += ' youlose'})
        });
    }
    
    red(border);
    changeAll();
}
