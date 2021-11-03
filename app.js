
const QAObj = [
    {
        Question: 'capital of Andhra Pradesh is',
        Options: ['delhi', 'agra', 'Amravati', 'kalkata'],
        Answer: 2
    },
    {
        Question: 'Capital of Assam  is',
        Options: ['delhi', 'Dispur', 'bihar', 'Itanagar'],
        Answer: 1
    }
    ,
    {
        Question: 'Capital of Arunachal Pradesh is',
        Options: ['delhi', 'Lakhnau', 'bihar', 'Itanagar'],
        Answer: 3
    }
    ,
    {
        Question: 'Capital of Bihar  is',
        Options: ['delhi', 'Lakhnau', 'Patna', 'Itanagar'],
        Answer: 2
    }
    ,
    {
        Question: 'Capital of Chhattisgarh  is',
        Options: ['Atal Nagar (Naya Raipur)', 'Lakhnau', 'bihar', 'Itanagar'],
        Answer: 0
    }
    ,
    {
        Question: 'Capital of Goa  is',
        Options: ['delhi', 'Lakhnau', 'bihar', 'Panaji'],
        Answer: 3
    }
    ,
    {
        Question: 'Capital of Gujarat  is',
        Options: ['Gandhinagar', 'Lakhnau', 'Panaji', 'Itanagar'],
        Answer: 0
    }
    ,
    {
        Question: 'Capital of Haryana  is',
        Options: ['delhi', 'Lakhnau', 'Chandigarh', 'Itanagar'],
        Answer: 2
    }
    ,
    {
        Question: 'Capital of Himachal Pradesh is',
        Options: ['delhi', 'Lakhnau', 'bihar', 'Shimla/Dharamshala'],
        Answer: 3
    }
    ,
    {
        Question: 'Capital of Jammu and Kashmir is',
        Options: ['delhi', 'Srinagar/Jammu', 'bihar', 'Itanagar'],
        Answer: 1
    }
    ,
    {
        Question: 'Capital of Jharkhand  is',
        Options: ['Ranchi', 'Lakhnau', 'bihar', 'Itanagar'],
        Answer: 0
    }
    ,
    {
        Question: 'Capital of Karnataka  is',
        Options: ['delhi', 'Lakhnau', 'Bengaluru', 'Itanagar'],
        Answer: 2
    }
    ,
    {
        Question: 'Capital of Kerala  is',
        Options: ['delhi', 'Thiruvananthapuram', 'Kerala ', 'Itanagar'],
        Answer: 1
    }
    ,
    {
        Question: 'Capital of Madhya Pradesh is',
        Options: ['Bhopal', 'Lakhnau', 'bihar', 'Itanagar'],
        Answer: 0
    }
    ,
    {
        Question: 'Capital of Maharashtra  is',
        Options: ['delhi', 'Lakhnau', 'Mumbai', 'Itanagar'],
        Answer: 2
    }
    ,
    {
        Question: 'Capital of Manipur  is',
        Options: ['delhi', 'Lakhnau', 'bihar', 'Imphal '],
        Answer: 3
    }

]
const nextBtnElem = document.querySelector('.nextButton');
nextBtnElem.style.display = 'none';
const playagainElem = document.querySelector('.playagainButton');
playagainElem.style.display = 'none';
const questinElem = document.querySelector('.question');
const optionElem = document.querySelector('.choiceList');
const playElem = document.querySelector('.playButton');
const quizMessageElem = document.querySelector('.quizMessage');

playElem.addEventListener('click', playGame);
playagainElem.addEventListener('click', playGameAgain);
function playGame() {
    playElem.style.display = 'none';
    nextBtnElem.style.display = 'block'
    nextQuiestion();
}

function playGameAgain() {
    location.reload();

}

nextBtnElem.addEventListener('click', nextQuiestion);
let index = -1;
let score = 0;

function nextQuiestion() {
    index++;

    quizMessageElem.style.display = 'none';

    questinElem.innerHTML = `${QAObj[index].Question}`;

    optionElem.innerHTML = `
    
    <li class="radio"><input type="radio" name="option" value="${QAObj[index].Options[0]}">
    <label for="option">${QAObj[index].Options[0]}</label>
    </li>    
    <li><input type="radio" name="option" value="${QAObj[index].Options[1]}">
    <label for="option">${QAObj[index].Options[1]}</label>
    </li>
    <li><input type="radio" name="option" value="${QAObj[index].Options[2]}">
    <label for="option">${QAObj[index].Options[2]}</label>
    </li>
    <li><input type="radio" name="option" value="${QAObj[index].Options[3]}">
    <label for="option">${QAObj[index].Options[3]}</label>
    </li>`;



    const inputElem = document.querySelectorAll('input[type=radio]');

    inputElem.forEach(elem => {
        elem.addEventListener('click', () => {


            const radioBtnsChecked = document.querySelector('input[type=radio]:checked').value;
            if (radioBtnsChecked == QAObj[index].Options[QAObj[index].Answer]) {
                score++;

            }
        });
    })

    if (index > QAObj.length - 2) {
        const resultElem = document.querySelector('.result');
        resultElem.innerHTML = `your Score is ${score} out of ${QAObj.length}`;
        playagainElem.style.display = 'block';
        nextBtnElem.style.display = 'none';
    }

}
































// var currentQuestion = 0;
// var correctAnswers = 0;
// var quizOver = false;

// window.addEventListener('DOMContentLoaded', function(e){
//     displayCurrentQuestion();

//     var quizMessage = document.querySelector('.quizMessage');

//         quizMessage.style.display = 'none';

//     document.querySelector('.nextButton').addEventListener('click', function(){

//         if(!quizOver){
//             var radioBtnsChecked = document.querySelector('input[type=radio]:checked');

//             if (radioBtnsChecked === null){
//                 quizMessage.innerText = 'Please select an answer';
//                 quizMessage.style.display = 'block';
//             } else {
//                 console.log(radioBtnsChecked.value);
//                 quizMessage.style.display = 'none';
//                 if (parseInt(radioBtnsChecked.value) === questions[currentQuestion].correctAnswer){
//                     correctAnswers++;
//                 }

//                 currentQuestion++;

//                 if (currentQuestion < questions.length){
//                     displayCurrentQuestion();
//                 } else {
//                     displayScore();
//                     document.querySelector('.nextButton').innerText = 'Play Again?';
//                     quizOver = true;
//                  }
//                 }   
//         } else {
//             quizOver = false;
//             document.querySelector('.nextButton').innerText = 'Next Question';
//             resetQuiz();
//             displayCurrentQuestion();
//             hideScore();
//         }
//     });
// });

// function displayCurrentQuestion(){
//     console.log('In display current Questions');

//     var question = questions[currentQuestion].question;
//     var questionClass = document.querySelector('.quizContainer > .question');
//     var choiceList = document.querySelector('.quizContainer > .choiceList');
//     var numChoices = questions[currentQuestion].choices.length;

//     //Set the questionClass text to the current question
//     questionClass.innerText = question;

//     //Remove all current <li> elements (if any)
//     choiceList.innerHTML = '';

//     var choice;
//     for (i = 0; i < numChoices; i++){
//         choice = questions[currentQuestion].choices[i];
//         var li = document.createElement('li');
//             li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
//         choiceList.appendChild(li);

//     }
// }

// function resetQuiz(){
//     currentQuestion = 0;
//     correctAnswers = 0;
//     hideScore();
// }

// function displayScore(){
//     document.querySelector('.quizContainer > .result').innerText = 'You scored: ' + correctAnswers + ' out of ' + questions.length;
//     document.querySelector('.quizContainer > .result').style.display = 'block';
// }

// function hideScore(){
//     document.querySelector('.result').style.display = 'none';
// }
// //https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event