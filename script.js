const open = document.getElementById("open");
const close = document.getElementById('close');

open.addEventListener('click', openMenu);
close.addEventListener('click', openMenu);

function openMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    open.classList.toggle('hidden');
    close.classList.toggle('active');

}