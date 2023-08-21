function HelpMe() {

}


function blackout(section) {
    if (section == 1) {
        console.log(11)
        document.getElementById("A").style.display = "flex";
    } else {
        console.log(12)
        document.getElementById("A").style.display = "none";
    }
    
    if (section == 2) {
        console.log(21)
        document.getElementById("B").style.display = "flex";
    } else {
        console.log(22)
        document.getElementById("B").style.display = "none";
    }

    if (section == 3) {
        console.log(31)
        document.getElementById("C").style.display = "flex";
    } else {
        console.log(32)
        document.getElementById("C").style.display = "none";
    }
    return
    
}