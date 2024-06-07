
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
console.log(menuToggle)
    menuToggle.addEventListener('click', function() {
        console.log("run")
        menu.classList.toggle('active');
    });
});