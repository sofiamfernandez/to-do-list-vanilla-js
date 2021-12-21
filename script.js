//variables de info data
const dateNumber = document.getElementById('dateNumber');
const dateText   = document.getElementById('dateText');
const dateMonth  = document.getElementById('dateMonth');
const dateYear   = document.getElementById('dateYear');

//task container

const tasksContainer = document.getElementById('tasksContainer');

const setDate = ()=> {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es',{day: 'numeric'});
    dateText.textContent   = date.toLocaleString('es',{weekday: 'long'});
    dateMonth.textContent  = date.toLocaleString('es',{month: 'short'});
    dateYear.textContent   = date.toLocaleString('es',{year: 'numeric'});
}

//para agregar una nueva tarea esperamos el evento. El prevent default evitará que el submit nos mande a otra página
 const addNewTask = event => {
     event.preventDefault();
     const {value} = event.target.taskText; //capturamos lo que trae el evento

     if(!value) return; //evita la ejecución del evento vacío

     //creamos un elemento y vamos a hacer 3 cosas
     const task = document.createElement('div');
     //1)agrego dos clases
     task.classList.add('task','roundBorder');
     //2) agrego un addEventListener para que al escuchar el click llame a la función changetaskState para cambiar el estado
     task.addEventListener('click',changeTaskState);
     //3) agregar el texto que puso el usuario a la tarea
     task.textContent = value;
     tasksContainer.prepend(task); //prepend para indicar que los agregamos al principio de la lista
    // reseteamos luego de agregada la tarea
    event.target.reset();


 };

 const changeTaskState = event =>{
     event.target.classList.toggle('done');
     //toggle significa conmutar cambiar, si tiene la clase done se la quitamos y si no la tiene se la agregamos
 };
 const order = () =>{
     const done = [];
     const toDo = [];

     tasksContainer.childNodes.forEach(elemento => {
         elemento.classList.contains('done') ? done.push(elemento) : toDo.push(elemento); 
     })
     return[...toDo, ...done];
 }
 const renderOrderedTask = () => {
     order().forEach(elemento => tasksContainer.appendChild(elemento));
 }

 setDate();