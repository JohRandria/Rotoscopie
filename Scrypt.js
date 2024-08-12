const membership=document.getElementById('membership');
const loginlink=document.querySelector('.login-link');
const signuplink=document.querySelector('.signup-link');
const login=document.querySelector('.login');
const btnclose=document.querySelector('.btn-close');
const reseauSociaux=document.querySelector('.RS')

/*home memberhip*/
signuplink.addEventListener('click', ()=>{
    membership.classList.add('active');
});
loginlink.addEventListener('click', ()=>{
    membership.classList.remove('active');
});
/*nav login*/
login.addEventListener('click', ()=>{
    membership.classList.add('active-none');
});
btnclose.addEventListener('click', ()=>{
    membership.classList.remove('active-none');
});
/*footer*/
reseauSociaux.addEventListener('click', ()=>{
    membership.classList.add('active-none');
});
/*actuality*/
function elargir() {
      document.getElementById("actuality1").style.height= "180%";
      document.querySelector(".actuvid").style.flexFlow="row wrap";
}

/*slide image*/
document.addEventListener("DOMContentLoaded", function() {
  var slideshow = document.querySelector('.xg');
  var images = slideshow.getElementsByTagName('img');
  var currentIndex = 0;
  var interval = 2000; // Changement d'image toutes les 3 secondes

  function nextSlide() {
    images[currentIndex].style.display = 'none'; // Masque l'image actuelle
    currentIndex = (currentIndex + 1) % images.length; // Passe à l'image suivante
    images[currentIndex].style.display = 'block'; // Affiche la nouvelle image
  }

  // Démarre le diaporama automatique
  setInterval(nextSlide, interval);
});
