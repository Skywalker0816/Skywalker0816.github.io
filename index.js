const $home = document.querySelector('#home');
// const $about = document.querySelector('#about');
// const $portfolio = document.querySelector('#portfolio');
// const $contact = document.querySelector('#contact');

const $toggleIcon = document.querySelector('.toggle-icon');
const $iconContainer = document.getElementById('icon-container');

const $header = document.getElementById('header');
const $menu = document.getElementById('menu');

const $project1Container = document.getElementById('project-1');
const $project2Container = document.getElementById('project-2');
const $project3Container = document.getElementById('project-3');
const $project4Container = document.getElementById('project-4');

const $aboutButton = document.getElementById('aboutButton');
const $portfolioButton = document.getElementById('portfolioButton');
const $hide = document.getElementById('hide');

const ipad = matchMedia('screen and (max-width: 480px)');

let $homeHeight = $home.offsetHeight;

function superScroll() {
  if ($homeHeight <= scrollY){
    $header.style.position = 'fixed';
    $header.style.background = 'rgb(0, 0, 0)';
  } else {
    $header.style.position = 'absolute';
    $header.style.background = 'transparent';
  }
}

ipad.addListener(validation)

function validation(event) {
  if (event.matches) {
    window.removeEventListener('scroll', superScroll)
  }
  else {
    window.addEventListener('scroll', superScroll)
  }
}

validation(ipad);

$toggleIcon.addEventListener('click', () => {
  $iconContainer.classList.toggle('pushed');
  $menu.classList.toggle('visible');
  $header.classList.toggle('backdrop')
});

$aboutButton.addEventListener('click', () => {
  $hide.classList.toggle('fadeIn');
  if ($aboutButton.value == 'Más sobre mi') {
    $aboutButton.setAttribute('value', 'Ver menos')
  } else {
    $aboutButton.setAttribute('value', 'Más sobre mi')
  }
});
$portfolioButton.addEventListener('click', () => {
  $project3Container.classList.toggle('fadeIn');
  $project4Container.classList.toggle('fadeIn');
  if ($portfolioButton.value == 'Ver más') {
    $portfolioButton.setAttribute('value', 'Ver menos')
  } else {
    $portfolioButton.setAttribute('value', 'Ver más')
  }
});

function projectTemplate (project) {
  return (
    `
    <h3 class="project-title">${project.title}</h3>
    <figure class="project-image">
      <img src="${project.image}" alt="${project.name}">
      <div class="overlay">
        <a target="_black" href="${project.code}">Ver el código</a>
        <a target="_black" href="${project.url}">Ver la página</a>
      </div>
    </figure>
    <div class="project-details">
      <p>${project.details}</p>
    </div>
    `
  )
}

const project1 = {
  title: '100tifi.co',
  image: 'images/projects/cientifico.png',
  details: 'Single Page Application con Vanilla JS',
  code: 'https://github.com/Centenosky/100tifi.co',
  url: 'https://centenosky.github.io/100tifi.co/',
}
const project2 = {
  title: 'Mi blog',
  image: 'images/projects/mi-blog.png',
  details: 'Mi blog creado con el curso practico de html y css',
  code: 'https://github.com/Centenosky/Mi-Blog',
  url: 'https://diego-blog.netlify.app',
}
const project3 = {
  title: 'Platzi Conf Hawaii',
  image: 'images/projects/platzi-conf.png',
  details: 'Creado con bootstrap',
  code: 'https://github.com/Centenosky/Platzi-Conf',
  url: 'https://Centenosky.github.io/Platzi-Conf/',
}
const project4 = {
  title: 'Clon de Facebook',
  image: 'images/projects/clon-facebook.png',
  details: 'Reto de clonar Facebook',
  code: 'https://github.com/Centenosky/Facebook-clone',
  url: 'https://Centenosky.github.io/Facebook-clone/',
}
const firstProject = projectTemplate(project1);
const secondProject = projectTemplate(project2);
const thirdProject = projectTemplate(project3);
const fourthProject = projectTemplate(project4);

$project1Container.innerHTML = firstProject;
$project2Container.innerHTML = secondProject;
$project3Container.innerHTML = thirdProject;
$project4Container.innerHTML = fourthProject;
  