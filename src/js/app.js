const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);
const $$$ = (element, event, handler) => element.addEventListener(event, handler);


$$$(document, 'DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp() {
    boton_nav();
}

function boton_nav() {
    const boton = $('.line-button');
    $$$(boton, 'click', ()=> {
        // Cambio de estado
        const interruptor = $('#off');
        if(interruptor){
            //console.log("off");
            interruptor.id = 'on';
        } else {
            //console.log("on");
            const interruptor = $('#on');
            interruptor.id = 'off';
        }

        // Agrandar y achicar el boton, se mezcla con la animacion de  2 lineas a equis en css
        if (boton.classList.contains('achicar')) {
            //console.log('se va a achicar');
            boton.style.transform = 'scale(1)'; 
            boton.classList.remove('achicar'); 
        } else {
            //console.log('se va a agrandar');
            boton.style.transform = 'scale(1.5)'; 
            boton.classList.add('achicar'); 
        }
        desplazamiento_menu()

    })
}

function desplazamiento_menu() {
    const menu = $('.menu');
    const boton = $('.line-button');
    if(boton.id === 'on') {
        console.log(menu);
        menu.classList.remove('oculto');
        menu.classList.add('visible');
        
    } else {
        console.log(menu);
        menu.classList.remove('visible');
        menu.classList.add('oculto');
        
    }
}



