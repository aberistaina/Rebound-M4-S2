import Cuentas from "./cuentas.js"


export class Vip extends Cuentas{
    constructor(correo, password, usuario){
        super(correo, password)
        this.usuario = usuario
    }

    obtenerDatos(){
        return{
            correo: this.correo,
            password: this.password,
            usuario: this.usuario
        }
    }

}


export class Normal extends Cuentas{
    constructor(correo, password, usuario){
        super(correo, password)
        this.usuario = usuario
        
    }

    obtenerDatos(){
        return{
            correo: this.correo,
            password: this.password,
            usuario: this.usuario
        }
    }

    
}