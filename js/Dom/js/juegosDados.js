// elegimos el elemento principal donde vamos a inyectar todo
const bodyContent = document.getElementById("content-body");

function lanzarDados() {
  // Limpiamos el contenido anterior antes de crear uno nuevo
  bodyContent.innerHTML = "";

  // 1️⃣ Creamos los contenedores principales
  const contentResult = document.createElement("div");
  contentResult.classList.add("content-result");

  const contentDadoUno = document.createElement("div");
  contentDadoUno.classList.add("content-dado");

  const contentTitulo = document.createElement("div");
  contentTitulo.classList.add("content-titulo");

  const contentDadoDos = document.createElement("div");
  contentDadoDos.classList.add("content-dado");

  // 2️⃣ Creamos los elementos internos
  const dadoUno = document.createElement("div");
  dadoUno.classList.add("dado");

  const dadoDos = document.createElement("div");
  dadoDos.classList.add("dado");

  // ✨ Aplicamos la animación de "lanzamiento"
  dadoUno.classList.add("rolling");
  dadoDos.classList.add("rolling");

  const tituloVS = document.createElement("h1");
  tituloVS.classList.add("content-vs");

  // 3️⃣ Armamos la jerarquía base
  contentDadoUno.appendChild(dadoUno);
  contentTitulo.appendChild(tituloVS);
  contentDadoDos.appendChild(dadoDos);
  contentResult.append(contentDadoUno, contentTitulo, contentDadoDos);
  bodyContent.appendChild(contentResult);

  // Simulación de resultados de dados
  const jugador1 = Math.floor(Math.random() * 6) + 1;
  const jugador2 = Math.floor(Math.random() * 6) + 1;

  // Lógica para mostrar los puntos en los dados (simplificada)
  for (let i = 0; i < jugador1; i++) {
    const punto = document.createElement("div");
    punto.classList.add("result");
    dadoUno.appendChild(punto);
  }
  for (let i = 0; i < jugador2; i++) {
    const punto = document.createElement("div");
    punto.classList.add("result");
    dadoDos.appendChild(punto);
  }

  // Mostramos el resultado del juego
  if (jugador1 > jugador2) {
    tituloVS.innerHTML = "Jugador 1<br>Gana 🎉";
  } else if (jugador2 > jugador1) {
    tituloVS.innerHTML = "Jugador 2<br>Gana 🎉";
  } else {
    tituloVS.textContent = `¡Empate!`;
  }
}

// Lanza los dados al cargar la página y al hacer clic
lanzarDados();
bodyContent.addEventListener("click", lanzarDados);
