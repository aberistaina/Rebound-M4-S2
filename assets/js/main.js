import { Normal, Vip } from "./clases/clases.js";

function crearVip(){

    let nuevoVip = new Vip(
        email2.value, 
        pass2.value, 
        user.value, 
        )
    mostrarModalVip(nuevoVip)
    }

function mostrarModalVip(user){

    let {correo, password, usuario} = user.obtenerDatos()
    welcome.innerText = `Bienvenido ${usuario}`
    welcomeBody.innerText = `Usurario: ${usuario} Email: ${correo} Contraseña: ${password}`
}

function mostrarModalNormal(user){
    let {correo, password, usuario} = user.obtenerDatos()
    welcome.innerText = `Bienvenido ${usuario}`
    welcomeBody.innerText = `Email: ${correo} Contraseña: ${password}`
}

function crearNormal(){

    let usuario = "Usuario" + Math.floor(Math.random() * 100) + 1

    let nuevoNormal = new Vip(
        email1.value, 
        pass1.value, 
        usuario, 
        )
    mostrarModalNormal(nuevoNormal)

}

vipButton.addEventListener("click", crearVip)
bm.addEventListener("click", crearNormal)