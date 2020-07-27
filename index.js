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
        var lovedata=math.random() * 100;
        lovedata= math.floor(lovedata) + 45;
        document.getElementById('lovevalue').value = lovedata + "%";
    }
}