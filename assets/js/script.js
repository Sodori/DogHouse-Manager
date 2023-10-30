function HelpMe() {

}


function blackout(section) {
    if (section == 1) {
        document.getElementById("A").style.display = "flex";
        document.getElementById(1).style.backgroundColor= "yellow"
    } else {
        document.getElementById("A").style.display = "none";
        document.getElementById(1).style.backgroundColor= "grey"
    }
    
    if (section == 2) {
        document.getElementById("B").style.display = "flex";
        document.getElementById(2).style.backgroundColor= "yellow"
    } else {
        document.getElementById("B").style.display = "none";
        document.getElementById(2).style.backgroundColor= "grey"
    }

    if (section == 3) {
        document.getElementById("C").style.display = "flex";
        document.getElementById(3).style.backgroundColor= "yellow"
    } else {
        document.getElementById("C").style.display = "none";
        document.getElementById(3).style.backgroundColor= "grey"
    }
    return
    
}

function dimmer(mode) {
    if (mode == 0) {
        document.getElementById("dimmer").style.display = "none";
        document.getElementById("edit").style.display = "none";
    } else if (mode == 1) {
        document.getElementById("dimmer").style.display = "block";
        document.getElementById("edit").style.display = "block";
        
    } {
        
    }
    
}