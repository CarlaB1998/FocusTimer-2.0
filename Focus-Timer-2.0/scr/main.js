document.addEventListener('DOMContentLoaded', function() {
    const buttonsClimb = document.querySelectorAll('#climb button');
  
    buttonsClimb.forEach(button => {
        button.addEventListener('click', function() {
            // Adiciona a classe 'climbactive' ao botão clicado
            button.classList.add('climbactive');
           
            // Remove a classe 'climbactive' dos outros botões
            buttonsClimb.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.classList.remove('climbactive');
                }
               
            });
        });
    });
});


//Variáveis
  //contador
  let minutesCount = document.querySelector('#minutes');
  let secondsCount = document.querySelector('#seconds');
  //Botoes
let btnplay= document.querySelector('#play')
let btnpouse=document.querySelector('#pouse')
let btnplus=document.querySelector('#plus')
let btnless=document.querySelector('#less')
let btnarvore=document.querySelector('#arvore')



let cafeteeriasound= new Audio('./Cafeteria.wav')
const interval = null;

let currentInterval = null




// Função para iniciar o contador
function play() {
    
    // Obtemos o valor atual do contador
    let seconds = parseInt(secondsCount.textContent);
    let minutes=parseInt(minutesCount.textContent);
    // Decrementamos o valor do contador
    seconds--;
    // Atualizamos o valor do contador no elemento HTML
  

    if (seconds < 0) {
        seconds = 59
        minutes --
    }
    secondsCount.textContent = String(seconds).padStart(2, '0');
    minutesCount.textContent = String(minutes).padStart(2, '0');

    if (minutes<0) {
        // Se chegaram, pare o intervalo
        minutes=0
        seconds=0
        clearInterval(currentInterval)
        secondsCount.textContent = String(seconds).padStart(2, '0');
        minutesCount.textContent = String(minutes).padStart(2, '0');
}}

// Adiciona evento de clique ao botão play
btnplay.addEventListener('click', () => {
    // Chama a função play imediatamente após o clique
    if (!currentInterval) {  play()};
    // Define um intervalo de 1000ms (1 segundo) para chamar a função play continuamente
  currentInterval= setInterval(play, 1000);

   
});

btnpouse.addEventListener('click',() => {
    clearInterval(currentInterval);
    currentInterval = null
   })

btnplus.addEventListener('click',()=> {
    let minutes = parseInt(minutesCount.textContent);
    minutes++
    minutesCount.textContent = minutes;


})
btnless.addEventListener('click',()=> {
    let minutes = parseInt(minutesCount.textContent);
    minutes--
    minutesCount.textContent = minutes;


})

 // Adiciona evento de clique ao contador para iniciar a edição
 minutesCount.addEventListener('click', function() {
  minutesCount.setAttribute('contenteditable', true)
   minutesCount.focus()
});

secondsCount.addEventListener('click', function() {
    secondsCount.setAttribute('contenteditable', true)
    secondsCount.focus()
});
 // Adiciona evento de entrada para aceitar somente números
 minutesCount.addEventListener('input', function() {
    // Remove todos os caracteres não numéricos
    this.textContent = this.textContent.replace(/\D/g, '');
});

secondsCount.addEventListener('input', function() {
    // Remove todos os caracteres não numéricos
    this.textContent = this.textContent.replace(/\D/g, '');
});

// Adiciona evento de clique fora do contador para encerrar a edição
document.addEventListener('click', function(event) {
    if (event.target !== minutesCount && event.target !== secondsCount) {
        minutesCount.blur(); // Remove o foco do elemento
        secondsCount.blur(); // Remove o foco do elemento
    }
});
