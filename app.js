const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})

const fbPageBtn = document.getElementById('fb-page-btn');

fbPageBtn.addEventListener('click', function(e){
  e.preventDefault();
  window.open('https://www.facebook.com/groups/459827210733811', '_blank')
})

const getStartedBtn = document.getElementById('get-started-btn');

getStartedBtn.addEventListener('click', function(){
  document.getElementById('about').scrollIntoView();
})