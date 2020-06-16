let map = L.map('map-leaflet').setView([ -33.4372, -70.6506], 13)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Accediendo a boton
let btn = document.getElementById('call');
// Accediendo a parrafo
let lugar = document.getElementById('lugares-chile');

btn.addEventListener('click', function(){


    // Peticion al servidor github.io
    fetch('https://cswcl.github.io/fake-api/monumentos_historicos_extracto.geojson')
    .then(function(response) {
        
        return response.json();
    })
    .then(function(myJson) {

        // Creacion de arreglo CSV

        let cvz=[
            {id:582,description:"Templo Parroquial de El Sagrario"},
            {id:581,description:"Palacio Arzobispal"},
            {id:558,description:"Catedral de Santiago"},
            {id:589,description:"Correo Central"},
            {id:564,description:"Palacio de la Real Audiencia y Cajas Reales"},
            {id:590,description:"Municipal Santiago(Edicio Consistorial Santiago)"},
            {id:563,description:"Palacio Viejo de los Tribunales o Antiguo Palacio de la Aduana"},
            {id:604,description:"Edificio del Cuerpo de Bomberos de Santiago"},
            {id:567,description:"Edificio Comercial Edwards"},
            {id:771,description:"Murales de Nemesio AntÃºnez"},
            {id:768,description:"Murales de Nemesio AntÃºnez"},
            {id:769,description:"Murales de Nemesio AntÃºnez"},
            {id:562,description:"Casa Colorada"},
            {id:561,description:"Iglesia de Santo Domingo"},
            {id:584,description:"Ex Congreso Nacional y los jardines que le rodean"},
            {id:582,description:"Palacio de los Tribunales de Justicia"},
            {id:577,description:"Club de Septiembre (Casa Edwards)."},
            {id:779,description:"Murales de Nemesio AntÃºnez"},
            {id:597,description:"Iglesia de San AgustÃ­n"},
            {id:786,description:"Casa del Presidente Manuel Montt"},

        ] 
        // Datos Feature
        let contenido1= myJson.features;
        // Array que almacenara las cordenadas
        let contenidoTotal=[];
        // variable que contendra la latitud o longitud
        let variables;
        //Iteracion del json
        contenido1.forEach(punto => {

            variables = (punto.geometry.coordinates)

            let elementos = {
                latitud:variables[0],
                longitud:variables[1],
            }
            // llenando el array de informacion
        contenidoTotal.push(elementos)
     });

    //  Variable con el nombre tres tendra la fusion de los objetos
     let tres;
     console.log(contenidoTotal)
    //  Iteración he insercion de datos para generar el punto en el mapa
     for(let i = 0; i < contenidoTotal.length;i++){
        // fusion de objetos
        tres = Object.assign(contenidoTotal[i],cvz[i])
         let longitud = tres.longitud;
         let latitud = tres.latitud;
         let descri = tres.description

         L.marker([longitud,latitud]).addTo(map)
        .bindPopup(descri)
        .openPopup();

        
            var capa = document.getElementById("div1");
            var p = document.createElement("p");
            p.innerHTML = descri;
            capa.appendChild(p);
     }

    });
});

// ================================================ Fin del ejercicio ===============================================================

