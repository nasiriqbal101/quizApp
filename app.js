
let questions = [
    {
        prompt: 'what color are Tomatos? \n (a) Red\n (b) Purpple\n (c) Orange',
        answer: 'a'
    },
    {
        prompt: 'what color are bananas? \n (a) Teal\n (b) Magenta\n (c) Yellow',
        answer: 'c'
    }
]
let score = 0;

for (let i = 0; i < questions.length; i++) {
    let result = window.prompt(questions[i].prompt);
    if (result == questions[i].answer) {
        score++;
        alert('correct');
    } else {
        alert('wrong');
    }
}
alert('you got' + score + '/' + questions.length);



