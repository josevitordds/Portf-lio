//Efeito digitando do nome: Desenvolvedor front-end

function ativarLetra(elemento){
    const arrText = elemento.innerHTML.split("");
    elemento.innerHTML = '';
    arrText.forEach((Letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += Letra;
        }, 150 * i);
    });

}

const titulo = document.querySelector(".digitando");
ativarLetra(titulo);

//constantes e variáveis
const BTN_PREV = document.querySelector("#prev-slider"); //botão reponsável para voltar ao slider anterior 
const BTN_NEXT = document.querySelector("#next-slider"); //botão responsável para ir ao slider posteiror 
const SLIDER = document.querySelectorAll('.slider'); //constante responsável para pegar a classe slider de todos os sliders

let currentSlide = 0; //Variável let vazia, que será responsável por armazenar os sliders



//funcções
function hideSlider() {
    SLIDER.forEach(item => item.classList.remove('on'));
} //função responsável por remover a classlist ('on') do slider

function showSlider() {
    SLIDER[currentSlide].classList.add('on')
} //função responsável por adicionar a classlist ('on') do slider

function nextSlider() {
    hideSlider()
    if (currentSlide == SLIDER.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++
    }
    showSlider()
} //função responsável por ir ao slider posterior, através de uma condicional if/else, se a condição for true ela irá voltar ao início senão ela continuará aumentar +1 ao slider anterior.

function prevSlider() {
    hideSlider()
    if (currentSlide == 0) {
        currentSlide = SLIDER.length - 1;
    } else {
        currentSlide--
    }
    showSlider()
}//função responsável para voltar ao slider anterior, através de uma condicional if/else, se a condição for true ela irá voltar ao final senão ela continuará a diminuir -1 ao slider.

setInterval(function (e) {
    hideSlider()
    if (currentSlide == SLIDER.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++
    }
    showSlider()
}, 10000) //SetInterval é responsável por fazer determinada função em um determinado tempo, neste caso, irá adicionar +1 slider ao anterior a cada 10segundos.

function ativarMenu(){
    document.getElementById("menu-active").style.display="block";
}
function desativarMenu(){
    document.getElementById("menu-active").style.opacity="0";
}

const btnMenu = document.querySelector("#btnMenu");
const closeMenu = document.querySelector("#close-menu");

//Adicionar o evento de click ou de hover

BTN_NEXT.addEventListener("click", nextSlider) //botão responsável para ir ao slider posteiror 
BTN_PREV.addEventListener("click", prevSlider)  //botão reponsável para voltar ao slider anterior 
btnMenu.addEventListener("click", ativarMenu)
closeMenu.addEventListener("click", desativarMenu)
