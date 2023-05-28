var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];

// Filtra o valida si algo el true o false

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo<=500
});

// Mapea los articulos

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre 
});

// Encuentra el primer valor solicitado

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

// Filtra sobre el array buscado

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

// Regresa una validacion para los que la cumplan

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});