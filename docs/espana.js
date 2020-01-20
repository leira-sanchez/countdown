// // var coll = document.getElementsByClassName("collapsible");
// var coll = document.querySelectorAll(".collapsible");
// console.log('coll: ', coll.length);
// var i;

// for (i = 0; i < coll.length; i++) {
//     console.log('in the for')
//     coll[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var content = this.nextElementSibling;
//         // var content = document.getElementById("flight-status");
//         // var content = document.getElementsByClassName("content");
//         if (content.style.display === "block") {
//             content.style.display = "none";
//         } else {
//             content.style.display = "block";
//         }
//     });
// }

function collapsible(e) {
    console.log('en collapsible');
    e.target.classList.toggle("active");
    var contenido = e.target.nextElementSibling;
    console.log('contenido: ', e.target.nextElementSibling);
    // contenido.classList.toggle("active");
    if (contenido.style.display === "block") {
        console.log('in the if');
        contenido.style.display = "none";
    } else {
        console.log('in the else');
        contenido.style.display = "block";
    }
}