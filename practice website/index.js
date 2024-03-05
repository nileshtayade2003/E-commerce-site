function showReview(){
    document.querySelector('.review-con').style.opacity="100%";
    document.querySelector('.product-image').style.filter="brightness(0.4)";
}
function hideReview(){
    document.querySelector('.review-con').style.opacity="0%";
    document.querySelector('.product-image').style.filter="brightness(1)";
}

var sun=document.getElementById('sun-icon');
var moon=document.getElementById('moon-icon');
function darkMode(){
    moon.style.display='block';
    sun.style.display='none';
}
function lightMode(){
    moon.style.display='none';
    sun.style.display='block';
}