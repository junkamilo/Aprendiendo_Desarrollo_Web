// Rutas de las imágenes y sonidos con su tecla asignada
const sonidos = [
  { key: 'a', img: '/js/Dom/img/crash.png', sound: '/js/Dom/sound/crash.mp3' },
  { key: 's', img: '/js/Dom/img/kick.png', sound: '/js/Dom/sound/kick-bass.mp3' },
  { key: 'd', img: '/js/Dom/img/snare.png', sound: '/js/Dom/sound/snare.mp3' },
  { key: 'f', img: '/js/Dom/img/tom1.png', sound: '/js/Dom/sound/tom-1.mp3' },
  { key: 'g', img: '/js/Dom/img/tom2.png', sound: '/js/Dom/sound/tom-2.mp3' },
  { key: 'h', img: '/js/Dom/img/tom3.png', sound: '/js/Dom/sound/tom-3.mp3' },
  { key: 'j', img: '/js/Dom/img/tom4.png', sound: '/js/Dom/sound/tom-4.mp3' }
];

// Contenedor principal y cuerpo del documento
const contentBody = document.querySelector('.content-body');
const body = document.body;

// Creamos el título y contenedor de imágenes
const titulo = document.createElement('h1');
titulo.textContent = 'Drum Kit';
titulo.classList.add('titulo');

const contentCards = document.createElement('div');
contentCards.classList.add('content-cards');

// Objeto para mapear tecla -> audio y elemento div (para la animación)
const keyMap = {};

// Recorremos cada elemento y creamos su estructura
sonidos.forEach(({ key, img, sound }) => {
  const contentImg = document.createElement('div');
  contentImg.classList.add('content-img');

  const imagen = document.createElement('img');
  imagen.classList.add('img-fluid'); // Simplificamos clases, Tailwind se encarga del resto
  imagen.setAttribute('src', img);
  imagen.setAttribute('alt', `Tecla ${key.toUpperCase()}`);
  
  const audio = new Audio(sound);

  // Guardamos en el mapa el audio y el contenedor del pad (contentImg)
  keyMap[key] = { audio, pad: contentImg };

  // Evento de clic para reproducir sonido
  contentImg.addEventListener('click', () => {
    reproducirSonido(key);
  });
  
  const label = document.createElement('span');
  label.textContent = key.toUpperCase();
  label.classList.add('key-label');

  contentImg.appendChild(imagen);
  contentImg.appendChild(label);
  contentCards.appendChild(contentImg);
});

// Insertamos al DOM principal
contentBody.appendChild(titulo);
contentBody.appendChild(contentCards);

// Función para reproducir sonido y activar animaciones
function reproducirSonido(key) {
  const item = keyMap[key];
  if (!item) return;

  const { audio, pad } = item;
  audio.currentTime = 0;
  audio.play();

  // Efecto visual en el pad (shockwave)
  pad.classList.add('active');
  
  // Efecto de pulso en el fondo
  contentBody.classList.add('body-pulse');

  // Escuchamos el final de la animación para limpiar la clase
  pad.addEventListener('animationend', () => {
    pad.classList.remove('active');
  }, { once: true }); // 'once: true' remueve el listener después de ejecutarse
  
  // Removemos el pulso del fondo un poco después
  setTimeout(() => contentBody.classList.remove('body-pulse'), 100);
}

// Evento global de teclado
document.addEventListener('keydown', (e) => {
  reproducirSonido(e.key.toLowerCase());
});




