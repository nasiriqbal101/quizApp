
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('startGame')
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide')


}


setNextQuestion = () => {

}

selectAnswer = () => {

}

const questions = [
    {
        question: 'what is 2 + 2',
        answers: [
            { text: '4', correct: true},
            { text: '22', correct: false}
        ]
    }
]