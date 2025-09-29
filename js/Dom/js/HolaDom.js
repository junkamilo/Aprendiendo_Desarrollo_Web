const cardContainer = document.getElementById("card-container");


const card = document.createElement("div");
const imageLink = document.createElement("a");
const image = document.createElement("img");
const contentDiv = document.createElement("div");
const titleLink = document.createElement("a");
const title = document.createElement("h5");
const paragraph = document.createElement("p");
const readMoreButton = document.createElement("a");

// Atributos para el enlace de la imagen y la imagen misma
imageLink.setAttribute("href", "#");
image.setAttribute("src", "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
image.setAttribute("alt", "Persona usando tecnología VR");

// Contenido para el título, párrafo y botón
title.textContent = "El Futuro de la Interacción Digital en 2025";
paragraph.textContent = "Exploramos las adquisiciones tecnológicas más importantes y cómo están moldeando el futuro de la realidad virtual y aumentada.";

readMoreButton.textContent = "Leer más";
readMoreButton.setAttribute("href", "#");
//aplicamos los estilos
card.classList.add(
    "max-w-sm",
    "bg-white",
    "border",
    "border-gray-200",
    "rounded-2xl",
    "shadow-lg",
    "dark:bg-gray-800",
    "dark:border-gray-700",
    "transition-all",
    "duration-300",
    "ease-in-out",
    "hover:shadow-2xl", 
    "hover:-translate-y-2",
    "group",
    "my-[50px]",
    "mx-auto"
);

image.classList.add(
    "rounded-t-2xl", 
    "object-cover",
    "h-48", 
    "w-full"
);

contentDiv.classList.add("p-6");

// Estilos para el título
title.classList.add(
    "mb-2",
    "text-2xl",
    "font-bold",
    "tracking-tight",
    "text-gray-900",
    "dark:text-white",
    "hover:text-violet-600",
    "dark:hover:text-violet-400"
);


paragraph.classList.add(
    "mb-5",
    "font-normal",
    "text-gray-600",
    "dark:text-gray-400"
);

readMoreButton.classList.add(
    "inline-flex",
    "items-center",
    "px-4",
    "py-2",
    "text-sm",
    "font-medium",
    "text-center",
    "text-white",
    "bg-gradient-to-r", 
    "from-violet-500",
    "to-purple-600",
    "rounded-lg",
    "shadow-md",
    "shadow-violet-500/30", 
    "hover:from-violet-600",
    "hover:to-purple-700",
    "focus:ring-4",
    "focus:outline-none",
    "focus:ring-violet-300",
    "dark:focus:ring-violet-800",
    "transition-all",
    "duration-300",
    "transform",
    "hover:scale-105"
);

const svgIconHTML = `
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
`;
readMoreButton.innerHTML += svgIconHTML; 

// Unimos los elementos en el orden correcto (de adentro hacia afuera)
imageLink.append(image);
titleLink.append(title);
contentDiv.append(titleLink, paragraph, readMoreButton);

// Añadimos la sección de imagen y la de contenido a la tarjeta principal
card.append(imageLink, contentDiv);

// Finalmente, añadimos la tarjeta completa al contenedor en nuestro HTML
cardContainer.append(card);