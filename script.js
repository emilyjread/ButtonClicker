function logout(element) {
    element.innerText = "Logout";
}


function hide(element){
    element.remove()
}

function like(element){
    var word= element.parentNode.childNodes[1].innerText;
    alert(word + " was clicked")
}

