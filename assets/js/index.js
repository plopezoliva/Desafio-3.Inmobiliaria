
const propiedadesDisponibles = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      metros: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      metros: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      metros: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      metros: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      metros: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      metros: 500
    }
  ];
  
//se dara formato a la card (muestre en esta seccion de html)

const formatoCard= document.querySelector("#Propiedades")
for (let formato of propiedadesDisponibles ){
formatoCard.innerHTML+= `<div class="propiedades">
<div class="propiedad">
    <div class="img"> <img src=${formato.src} alt=""></div>
    <section>
        <h5>${formato.name}</h5>
        <div class="informacion-basica">
            <p>Cuartos: ${formato.rooms}</p>
            <p>Metros: ${formato.metros}</p>
        </div>
        <p class="my-3">${formato.description}</p>
        <button class="btn btn-info ">Ver más</button>
    </section>
</div>
</div>`;
}

//formato del titulo
const formatoTitulo= document.querySelector("#todas-propiedades")
formatoTitulo.innerHTML+= `<h4 class="py-3">Total: <span>${propiedadesDisponibles.length}</span></h4>`;

const clearPropiedades = (idSection)=>{
  const sectionElement= document.querySelector(`#${idSection}`);
  sectionElement.innerHTML= "";
}


//trabajando en el buscador (input)

document.getElementById("boton").addEventListener("click", ()=>{
  let cantidadDormitorios= document.querySelector("#input-dormitorio").value;
  let metrosCuadrados1= document.querySelector("#input-metros1").value;
  let metrosCuadrados2= document.querySelector("#input-metros2").value;
// console.log(cantidadDormitorios, metrosCuadrados1, metrosCuadrados2)

//validando formulario (Alert)

if(cantidadDormitorios.length == 0 || metrosCuadrados1.length == 0 || metrosCuadrados2.length == 0){
  alert("Faltan campos por llenar")

  
}else{
  //aqui se define el filtrado de la card
  let cardFiltrada = propiedadesDisponibles.filter(function(filtro){
    return filtro.metros >= metrosCuadrados1 && filtro.metros <= metrosCuadrados2;

  }) 
  // console.log(cardFiltrada)

  

  //aqui se muestra la card filtrada
  const resultadoCard= document.querySelector("#Propiedades")
  for (let formato1 of cardFiltrada ){
    resultadoCard.innerHTML+= `<div class="propiedades">
  <div class="propiedad">
      <div class="img"> <img src=${formato1.src} alt=""></div>
      <section>
          <h5>${formato1.name}</h5>
          <div class="informacion-basica">
              <p>Cuartos: ${formato1.rooms}</p>
              <p>Metros: ${formato1.metros}</p>
          </div>
          <p class="my-3">${formato1.description}</p>
          <button class="btn btn-info ">Ver más</button>
      </section>
  </div>
  </div>`;
  }
}

//limpiar los input
let limpiarInput= ()=>{
  document.getElementById("input-dormitorio").value = "";
document.getElementById("input-metros1").value = "";
document.getElementById("input-metros2").value = "";

}
limpiarInput();
} )


