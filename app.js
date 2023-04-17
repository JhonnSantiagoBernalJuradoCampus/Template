class padre{
    #nacionalidad
    constructor({color="rojo"}){
        this.color = color;
    }
    setNacionalidad(Nacionalidad){
        console.log("padre");
        this.#nacionalidad = Nacionalidad
        return this.#nacionalidad
    }
}
class hijo extends padre{
    #nacionalidad
    constructor({color="Amarillo"}){
        super({color});
    }
    setNacionalidad(Nacionalidad){
        console.log("hijo");
        this.#nacionalidad = Nacionalidad;
        return this.#nacionalidad
    }
}
let obj2 = new hijo({})
console.log(obj2.setNacionalidad("Peruano :("));