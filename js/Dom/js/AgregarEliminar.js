
/**Se utilizara para agregar productos a favoritos */
let ArrayFavoritos = [];
//se colocaran los productos
let ArrayProductos = [];
//agregamos productos al array
ArrayProductos.push(
  {
    id: 1,
    imagenUrl:
      "https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Control Inalámbrico Pro",
    descripcion:
      "Control de alta precisión con joysticks personalizables y gatillos de respuesta rápida. Ideal para shooters y juegos de acción.",
    precio: 65000,
  },
  {
    id: 2,
    imagenUrl:
      "https://images.pexels.com/photos/7915429/pexels-photo-7915429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Teclado Mecánico RGB",
    descripcion:
      "Teclado mecánico con switches rojos para una pulsación rápida y silenciosa. Iluminación RGB totalmente personalizable.",
    precio: 120000,
  },
  {
    id: 3,
    imagenUrl:
      "https://images.pexels.com/photos/8199563/pexels-photo-8199563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Auriculares Gamer 7.1",
    descripcion:
      "Sumérgete en el juego con sonido envolvente 7.1. Micrófono con cancelación de ruido para una comunicación clara.",
    precio: 95000,
  },
  {
    id: 4,
    imagenUrl:
      "https://images.pexels.com/photos/4316734/pexels-photo-4316734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Mouse Gamer Ergonómico",
    descripcion:
      "Mouse ligero y ergonómico con sensor óptico de 16,000 DPI para un seguimiento perfecto y 6 botones programables.",
    precio: 55000,
  },
  {
    id: 5,
    imagenUrl:
      "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Tarjeta Gráfica RTX 4080",
    descripcion:
      "Potencia gráfica de última generación para jugar en 4K con Ray Tracing. Rendimiento extremo para los jugadores más exigentes.",
    precio: 1500000,
  }
);
//elegimos los elementos principales
const contentProductos = document.getElementById("content-productos");
const contentFavoritos = document.getElementById("content-favoritos");

function crearCard(
  { id, imagenUrl, nombre, descripcion, precio },
  contenedor,
  esFavorito = false
) {
  const contentCard = document.createElement("div");
  const contentimg = document.createElement("div");
  const contentButton = document.createElement("div");
  const actionButton = document.createElement("button");
  const img = document.createElement("img");
  const nameProducto = document.createElement("h3");
  const descriptionProducto = document.createElement("p");
  const priceProducto = document.createElement("p");

  // clases
  contentCard.classList.add("content-card");
  contentimg.classList.add("content-img");
  img.classList.add("img-logo");
  nameProducto.classList.add("name-product");
  descriptionProducto.classList.add("description-product");
  priceProducto.classList.add("price");
  contentButton.classList.add("button-container");
  actionButton.classList.add("add-to-cart-btn");

  // valores
  img.setAttribute("src", imagenUrl);
  nameProducto.textContent = nombre;
  descriptionProducto.textContent = descripcion;
  priceProducto.textContent = `$${precio.toLocaleString()}`;

  // Si es favorito → botón eliminar
  if (esFavorito) {
    actionButton.textContent = "Eliminar ❌";
    actionButton.addEventListener("click", () => {
      Swal.fire({
        title: "¿Eliminar de favoritos?",
        text: `Se quitará "${nombre}" de tu lista.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          ArrayFavoritos = ArrayFavoritos.filter((item) => item.id !== id);
          contentCard.remove();
          Swal.fire({
            title: "Eliminado",
            text: `"${nombre}" fue quitado de favoritos.`,
            icon: "success",
            timer: 2000,
            showConfirmButton: false
          });
        }
      });
    });
  } else {
    // Si no es favorito → botón agregar
    actionButton.innerHTML = `
      <span class="pr-[10px]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg" class="fill-current">
          <path d="M6.29977 5H21L19 12H7.37671M6.29977 5L3 2H1M6.29977 5L7.37671 12M7.37671 12L8 14H18.5M17 21C17.5523 21 18 20.5523 
          18 20C18 19.4477 17.5523 19 17 19C16.4477 19 16 19.4477 16 20C16 20.5523 16.4477 21 17 21ZM9 21C9.55228 21 10 20.5523 
          10 20C10 19.4477 9.55228 19 9 19C8.44772 19 8 19.4477 8 20C8 20.5523 8.44772 21 9 21Z"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      Agregar a Favoritos
    `;

    actionButton.addEventListener("click", () => {
      const ProductoExistente = ArrayFavoritos.some((item) => item.id === id);

      if (!ProductoExistente) {
        ArrayFavoritos.push({ id, imagenUrl, nombre, descripcion, precio });
        crearCard(
          { id, imagenUrl, nombre, descripcion, precio },
          contentFavoritos,
          true
        );
        actionButton.textContent = "En Favoritos ❤";

        Swal.fire({
          title: "Agregado a Favoritos",
          text: `"${nombre}" fue añadido correctamente.`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        });
      } else {
        Swal.fire({
          title: "Ya está en favoritos",
          text: `"${nombre}" ya fue agregado antes.`,
          icon: "info",
          timer: 2000,
          showConfirmButton: false
        });
      }
    });
  }

  // DOM
  contentimg.append(img);
  contentButton.append(actionButton);
  contentCard.append(
    contentimg,
    nameProducto,
    descriptionProducto,
    priceProducto,
    contentButton
  );
  contenedor.append(contentCard);
}


// Pintar todos los productos
ArrayProductos.forEach((producto) => crearCard(producto, contentProductos));

// Pintar todos los favoritos
ArrayFavoritos.forEach((producto) =>
  crearCard(producto, contentFavoritos, true)
);
