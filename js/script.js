/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero (in ordine) tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49 
*/

// mi seleziono gli elementi
const eleLevel = document.querySelector('#level-difficulty');
const eleBtnPlay = document.querySelector('.play');
const eleCellContainer = document.querySelector('#cell-container');
let arrBomb = [];
const eleStampResult = document.querySelector('.stamp-result')

eleBtnPlay.addEventListener('click', generateGrid)
function generateGrid(){
    let level = eleLevel.value;
    console.log(level);
    eleCellContainer.innerHTML = ''
    if (level == 'normal') {
        for (i = 1; i < 101; i++) {
            eleCellContainer.innerHTML += `<div value="${i}" class="cell">${i}</div>`;
        }
        

    } else if (level == 'hard') {
        for (i = 1; i < 82; i++) {
            eleCellContainer.innerHTML += `<div value="${i}" class="cell hard">${i}</div>`
        }
        

    } else {
        for (i = 1; i < 50; i++) {
            eleCellContainer.innerHTML += `<div value="${i}" class="cell insane">${i}</div>`
        }
    }
    eleStampResult.innerHTML = '';
    clickCounterIndex = 0;
    eleCell = document.querySelectorAll('.cell');
    play();
    generateBomb(eleCell.length);

}

function play(){
   eleCell.forEach(element => {
       element.addEventListener('click', function selectCell(){
           if (arrBomb.includes(parseInt(element.innerHTML))) {
               element.classList.add("lose");
               element.innerHTML = `<i class="fa-solid fa-bomb"></i>`;
               eleStampResult.innerHTML = 'hai perso! il tuo punteggio è: ' + clickCounterIndex;
               element.removeEventListener('click', selectCell());
           } else {
               element.classList.add("clicked");
               clickCounterIndex++
           }
           
       })
   });
}

function generateBomb(cell){
   while (arrBomb.length < 16) {
    let randomNumb = Math.floor(Math.random() * (cell - 1 + 1) ) + 1;
    if (arrBomb.includes(randomNumb)) {
        
    } else {
        arrBomb.push(randomNumb)
    }
   }
}
let clickCounterIndex = 0;
