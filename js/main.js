
// add hover class to selected list items
let list = document.querySelectorAll('.navigation li');

function activeLink(){
    list.forEach(item =>{
        item.classList.remove('hovered');
    })
    this.classList.add('hovered')
}
list.forEach((item) => item.addEventListener('mouseover', activeLink));

// menu Toggle
let Toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation ');
let main = document.querySelector('.main')

Toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}
