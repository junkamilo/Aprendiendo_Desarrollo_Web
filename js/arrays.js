function nombresInvitados(){
    const invitados = ["juan","fabian","jose","camila","jordan","sandra"];
    return invitados;
}

const invitadosPersonas = nombresInvitados();
console.log("numeros de personas invitadas " + invitadosPersonas.length);
console.log("personas invitadas: " + invitadosPersonas);

/**validamos con la funcion includes */
console.log("le persona juan fue invitada?: " + invitadosPersonas.includes("juan"));
console.log("le persona juan fue invitada?: " + invitadosPersonas.includes("Ariosto"));

