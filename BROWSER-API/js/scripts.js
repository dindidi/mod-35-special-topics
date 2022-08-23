

function dragStart(event){

    console.log(event.dataTransfer);


    event.dataTransfer.setData('text/plain', event.target.id);

    event.currentTarget.style.bacgroundColor = 'gray'
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;

    dropzone.appendChild(draggableElement);

    event.dataTransfer.clearData();
}


//window.addEventListener('DOMContentLoaded', () => {

//    const drag = document.querySelector('.draggable');

//    drag.addEventListener('dragstart', dragStart);
//})





window.addEventListener('resize', function(){

    if( this.window.innerWidth < 620)
       console.log('smartphone');
    else if (this.window.innerWidth < 920)  
       console.log('tablete'); 
    else {
        console.log('descktop')
    }   
    
})
