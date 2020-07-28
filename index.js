function checklove(){
    document.getElementById("name").value;
    document.getElementById("pname").value;

    if(name=""){
        alert("enter your name");
    }
    else if(pname=""){
        alert("enter your partner name");
    }
   else {
        var lovedata = Math.floor(Math.random() * 100);
      
        document.getElementById("lovevalue").value = lovedata + "%";
    }
}
