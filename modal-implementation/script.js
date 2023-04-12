'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
  
const openModal = function(){
    console.log('Button Clicked') ;
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');


}


for(let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click',  openModal /*function(){
        console.log('Button Clicked' + i) ;
         modal.classList.remove('hidden');
         overlay.classList.remove('hidden');

    
         //model.style.display='block'; work same as remove hidden 
    }   */ );
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal//also a value as that of function prpvided
/*function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}   */);

overlay.addEventListener('click' , closeModal/* function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
} */);


document.addEventListener('keydown' , function(e){
    console.log(e.key);
if(e.key === 'Escape'&&  !modal.classList.contains('hidden')){  
//console.log("Esc was pressed");
//if(!modal.classList.contains('hidden'))
    closeModal();
}
});