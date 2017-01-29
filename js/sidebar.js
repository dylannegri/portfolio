// Get the modal
var modal = document.getElementById('myModal');
//
// // Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("images");
var captionText = document.getElementById("caption");
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

function clicking(count){
    modal.style.display = "block";
    modalImg.src = document.getElementsByClassName("items")[count].src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


function openNav() {
    // console.log(document.getElementsByClassName("items")[0].style);
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    for(var i = 0; i<document.getElementsByClassName("items").length;i++){
        document.getElementsByClassName("items")[i].style.opacity = "0.4";
    }
    //$(".items").css("opacity", 0.4);
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "rgb(22,22,22)";
    for(var i = 0; i<document.getElementsByClassName("items").length;i++){
        document.getElementsByClassName("items")[i].style.opacity = "1";
    }//loop through images
}//closeNav()

