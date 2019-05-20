
function todoList(){
	var tarea = document.getElementById('todoInput').value;
	var lista = document.getElementById('list');
	var texto = document.createTextNode(tarea);
	var nuevaTarea = document.createElement('li');
	var  enlace = document.createElement('a');

	enlace.appendChild(texto);
	enlace.setAttribute('href', '#');
	nuevaTarea.appendChild(enlace);
	list.appendChild("nuevaTarea");

	todoInput.value = "";

	for (var i = 0 ; 1 <= list.children.length - 1; i++) {
		list.children[i].addEventListener("click", function todoList(){
			this.parentNode.removeChild(this);
		});
	}
};

var eliminarTarea = function todoList(){
	this.parentNode.removeChild(this);
};

 for (var i = 0 ; 1 <= list.children.length - 1; i++) {
 	list.children[i].addEventListener("click", eliminarTarea);
 }