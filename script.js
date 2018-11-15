'use strict';

(function() {
    document.querySelector('input').addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {

            // main
            var section = document.createElement('section');
            var TodoList = document.createElement('UL');
            var TodoElem = document.createElement("LI");
            var view =document.createElement("div");
            var label =document.createElement("label");
            var input =document.createElement("input");
            var span =document.createElement("span");
            var btnDestroy = document.createElement('span');
            // main

            // footer
            var footer = document.createElement('div');
            var footer__todoCount = document.createElement('span');
            var footer__todoFilter = document.createElement('div');
            var ToDo__all = document.createElement('span');
            var ToDo__active = document.createElement('span');
            var ToDo__complited = document.createElement('span');
            // footer

            // footer
            footer.className='footer';
            footer__todoCount.className='footer__todoCount';
            footer__todoFilter.className='footer__todoFilter';
            ToDo__all.className='todoFilter__all flter__item active';
            ToDo__all.innerHTML = "All";
            ToDo__active.className ='todoFilter__active flter__item';
            ToDo__active.innerHTML = "Active";
            ToDo__complited.className ='todoFilter__complited flter__item';
            ToDo__complited.innerHTML = "Complited";
            footer.appendChild(footer__todoCount);
            footer.appendChild(footer__todoFilter);
            footer__todoFilter.appendChild(ToDo__all);
            footer__todoFilter.appendChild(ToDo__active);
            footer__todoFilter.appendChild(ToDo__complited);

            // footer

            // main
            TodoList.id='todo__list';
            section.className='main';
            TodoElem.className='todo__elem';
            view.className='view';
            input.type='checkbox';
            input.className='inp';
            label.className='label';
            btnDestroy.className ='destroy';
            section.appendChild(TodoList);
            TodoList.appendChild(TodoElem);
            TodoElem.appendChild(view);
            view.appendChild(label);
            view.appendChild(btnDestroy);
            label.appendChild(input);
            label.appendChild(span);
            var textSpan = document.createTextNode(this.value);
            span.appendChild(textSpan);
            // main


            // добавления
            add__line(section,footer,TodoElem);
            var list = document.querySelectorAll('.todo__elem');
            var itemsLength = list.length;
            if(itemsLength >0 ){
                document.getElementsByClassName('footer')[0].style.display='block';
            }


        }
    });

})();
// function checkInp() {
//     var inputCheck = document.getElementsByClassName('inp');
//     var labelElem = document.getElementsByClassName('label');
// }


function remove__row() {
    var btnClose = document.getElementsByClassName('destroy');
    var i;
    for(i=0; i<btnClose.length; i++){
        btnClose[i].onclick = function () {
            var parentRow = this.parentElement;
            var parentRow2 = parentRow.parentElement;
            parentRow2.remove();
            var itemsLength = document.getElementsByClassName('todo__elem').length;
            if(itemsLength === 0){
                document.getElementsByClassName('footer')[0].style.display='none';
            }
        }
    }


}

function sibblingOf(name){
    var children = document.querySelectorAll(name);
    for(var i=0; i< children.length; i++){
        children[i].addEventListener("click", function(){
            for(var y=0; y<children.length;y++)
            {children[y].classList.remove("active")
            }
            this.classList.add("active");
            countItems();
        }, false)
    }

}
 function countItems() {
     var elm = document.querySelectorAll('.todo__elem');
     let footerCount = document.getElementsByClassName('footer__todoCount')[0];
     let itemsLength = elm.length;
     for(var i = 0; i<elm.length; i++){
         console.log(elm[i]);

         if(elm[i].style.display='block'){


             footerCount.innerHTML=''+itemsLength+' items left';
         }


     }

 }

 function add__line(section,footer,TodoElem) {
     if(document.getElementsByClassName('main').length<=0){
         document.getElementById('app').appendChild(section);
         document.getElementById('app').appendChild(footer);
         remove__row();
         sibblingOf('.footer__todoFilter > span','.todoFilter__all');

     }
     else{
         document.getElementById('todo__list').appendChild(TodoElem);
         remove__row();
         sibblingOf('.footer__todoFilter > span');

     }
     check__lineActive();
     check__lineComplited();
     check__lineAll();
     countItems();

 }
 function check__lineActive() {
    var inp = document.querySelectorAll('.inp');
    var children = document.querySelectorAll('.footer__todoFilter > span.todoFilter__active');
    for(let i =0; i<children.length; i++){
        children[i].addEventListener('click',function () {
            for(let x=0; x<inp.length; x++){
                if(inp[x].checked){
                    inp[x].closest('.todo__elem').style.display='none';
                }
                else{
                    inp[x].closest('.todo__elem').style.display='block';
                }
            }
        });
    }

 }

function check__lineComplited() {
    var inp = document.querySelectorAll('.inp');
    var children = document.querySelectorAll('.footer__todoFilter > span.todoFilter__complited');
    for(let i =0; i<children.length; i++){
        children[i].addEventListener('click',function () {
            for(let x=0; x<inp.length; x++){
                if(inp[x].checked){
                    inp[x].closest('.todo__elem').style.display='block';
                }
                else{
                    inp[x].closest('.todo__elem').style.display='none';
                }
            }
        });
    }

}

function check__lineAll() {
    var inp = document.querySelectorAll('.inp');
    var children = document.querySelectorAll('.footer__todoFilter > span.todoFilter__all');
    for(let i =0; i<children.length; i++){
        children[i].addEventListener('click',function () {
            for(let x=0; x<inp.length; x++){
                inp[x].closest('.todo__elem').style.display='block';
            }
        });
    }
}

