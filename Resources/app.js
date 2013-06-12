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
	title:'Magic 8 Ball'
});


/**
 * Let's create a button with an image of a Magic 8 Ball
 * Creemos un botón con una imagen de la Bola 8 Mágica
 */
var button = Titanium.UI.createButton({
	backgroundImage: 'images/Magic 8 Ball.jpg',
	title: 'Pregunta y te lo digo',
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
button.addEventListener('click',function(e){
	alert(messages[randomXToY(1,20)]);
});


/**
 * Let's add the button to the window
 * Añadamos el botón a la ventana
 */
window.add(button);

/**
 * Let's open the window
 * Abramos la ventana
 */
window.open();
