var why = 0
was = false
function sad(){
    if (was == true){
        alert("good job you did it :D")
    }
}

function ok(){
    why += 1
    if (why == 45){
        why = 0
        was = true
    }
    if (why == 44){
        was = true
    }
    console.log(why)
    document.getElementById("img").src = "house/House" + why + ".png";
    sad()
}

function reset(){
    prompt("do you realy want to do that ?")
    why = 0
    console.log(why)
    document.getElementById("img").src = "house/House" + why + ".png";
    was = false
}
function back(){
    why -= 1


    if (why == -1){
        why = 44
    }
    console.log(why)
    document.getElementById("img").src = "house/House" + why + ".png";
    sad()
}