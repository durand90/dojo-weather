function closeSide() {
    var toRemove = document.getElementById("side");
        toRemove.remove();
}

function goTo(el) {
    alert("You are clicking on " + el.innerText);
}




function changeFor() {
    var reShape = document.getElementById("selectThis").value;
    
    document.getElementById("book").innerText = "75\u00b0";
    document.getElementById("mon").innerText = "65\u00b0";

    document.getElementById("fah").innerText = "80\u00b0";
    document.getElementById("ton").innerText = "66\u00b0";

    document.getElementById("dah").innerText = "69\u00b0";
    document.getElementById("son").innerText = "61\u00b0";

    document.getElementById("sah").innerText = "78\u00b0";
    document.getElementById("non").innerText = "70\u00b0";
}


