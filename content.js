// alert("WOOOOsssOOO");

window.addEventListener("click", function(){
      
    var selText = window.getSelection(); 
    if(selText!=""){
        console.log(selText.toString());
        // alert(selText)
        var selRange = selText.getRangeAt(0);
        // do stuff with the range
    }
});



