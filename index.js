// javascript

const get = element => document.getElementById(element);

let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");

open.addEventListener('click', () => {
    nav.classList.add('open-nav');
})

exit.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})

// /** 
//   interactive buttons: Open Modal 
//   **/

// document.getElementById("open-modal").addEventListener("click", function() {
//     document.getElementById("overlay").style.display = "block";
// })


// /** 
//   Interactive buttons: Close Modal
// **/

// document.getElementById("close-modal").addEventListener("click", function() {
//     document.getElementById("overlay").style.display = "none";
// })