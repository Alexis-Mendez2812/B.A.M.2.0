function Rectangulo () 
{
    let largo;
    let ancho;
    let cantidadDeAlambre;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    
    cantidadDeAlambre = (largo * ancho) * 3;

    alert("La cantidad de alambre que necesita es: " + cantidadDeAlambre + " mts ");

}
function Circulo () 
{   
    //toFixed(aqui adentro va el numero de decimales que quiero que me muestre EJMEPLO; 2) es para mostrar la cantidad de decimales

    let radio;
    let cantidadDeAlambre;

    // Math.pi = 3.1416
    // AREA = Math.PI * Math.pow(radio,2) = me saca el area de un circulo 

    radio = parseInt(document.getElementById("txtIdRadio").value);

    cantidadDeAlambre = (Math.PI * Math.pow(radio,2)) * 3;
    
    alert("la cantidad de alambre que se debe comprar es: " + cantidadDeAlambre.toFixed(2) + " Mts ");

	
}
function Materiales () 
{
    let largo;
    let ancho;
    let bolsaDeCemento;
    let bolsaDeCal;
    let contrapiso;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    bolsaDeCal = 3;
    bolsaDeCemento = 2;
    contrapiso = largo * ancho;

    alert("Materiales a utilizar: " + " Cemento: " + contrapiso * bolsaDeCemento + " Bolsas " + " Y  Cal: " + contrapiso * bolsaDeCal + " Bolsas ");

}
