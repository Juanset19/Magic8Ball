/**
 * Magic 8 Ball Project
 * Proyecto Bola 8 Mágica
 */

/**
 * Let's create a window
 * Creemos una ventana
 */
var window = Titanium.UI.createWindow({
	backgroundColor: 'white',
	title:'Hola'
});


/**
 * Let's create a label with an image of a Magic 8 Ball
 * Creemos una etiqueta con una imagen de la Bola 8 Mágica
 */
var label = Titanium.UI.createLabel({
	backgroundImage: 'images/Magic 8 Ball.jpg',
	text: 'Pregunta y te lo digo',
	font: {fontSize : 25},
	color: 'red',
	width: 300,
	height: 500
});


/**
 * The array of messages
 * El arreglo de mensajes
 */
var messages = ['En mi opinión, sí','Es cierto','Es decididamente así','Probablemente','Buen Pronóstico',
				'Todo apunta a que sí', 'Sin duda','Sí','Sí - definitivamente','Debes confiar en ello',
				'Respuesta vaga, vuelve a intentarlo','Pregunta en otro moment','Será mejor que no te lo diga ahora',
				'No puedo predecirlo ahora','Concéntrate y vuelve a preguntar','No cuentes con ello',
				'Mi respuesta es no','Mis fuentes me dicen que no','Las perspectivas no son buenas',
				'Muy dudoso'];
		
/**
 * Let's get a number between 1 and 20
 * Obtengamos un número entre 1 y 20
 * 
 * URI|Fuente:http://developer.appcelerator.com/question/4521/generate-random-number
 */		
function randomXToY(minVal,maxVal)
{ 
	var randVal = minVal+(Math.random()*(maxVal-minVal)); 
	return Math.round(randVal);
};

/**
 * Let's add an event listener for clicking the button
 * Añadamos un evento para cuando clickeen el botón
 */
label.addEventListener('click',function(e){
	setTimeout(function(){
		label.text=messages[randomXToY(0,19)]
	},3000);
	setTimeout(function(){
		label.text='Pregunta y te lo digo'
	},2000);
});


/**
 * Let's add the label to the window
 * Añadamos la etiqueta a la ventana
 */
window.add(label);


/**
 * Let's open the window
 * Abramos la ventana
 */
window.open();
