let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () =>{
        if(inputNumber.valueMax.length > inputNumber.maxLength) inputNumber.value
        =inputNumber.value.slice(0, inputNumber.maxLength);

    };
});


var dropdownContainer = document.querySelector('.dropdown-container');
// Get the dropdown content element
var dropdownContent = dropdownContainer.querySelector('.dropdown-content');
// Add event listeners
dropdownContainer.addEventListener('mouseenter', function() {
  dropdownContent.style.display = 'block';
});
dropdownContainer.addEventListener('mouseleave', function() {
  dropdownContent.style.display = 'none';
});
