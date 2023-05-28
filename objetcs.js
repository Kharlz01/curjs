// Objetos

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalles: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

// Funcion Constructora

function auto(marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla","Model 3",2020);