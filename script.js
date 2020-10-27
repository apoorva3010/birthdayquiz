const quizData = [
    {
        question: "What do I love listening to the most",
        a: "Music",
        b: "Podcasts",
        c: "Radio",
        d: "Audiobooks",
        correct: "c"
    }, 
    {
        question: "What was my nickname in school?",
        a: "Apoo",
        b: "Canary",
        c: "MARS",
        d: "All of these",
        correct: "d"
    }, 
    {
        question: "What is my pet peeve?",
        a: "Eating my food without permission",
        b: "Slow Internet",
        c: "Asking questions during a movie",
        d: "Wrong spellings",
        correct: "d"
    }, 
    {
        question: "What is my guilty pleasure?",
        a: "Romantic Movies",
        b: "Removing ear wax",
        c: "Social media stalking",
        d: "Falling asleep in the movie theatre",
        correct: "b"
    }, 
    {
        question: "What was my favourite cartoon?",
        a: "Madeline",
        b: "Dragon Tales",
        c: "Oswald",
        d: "Tom and Jerry",
        correct: "a"
    }
];


const answers = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const quest = document.getElementById('question');
const atext = document.getElementById('atext');
const btext = document.getElementById('btext');
const ctext = document.getElementById('ctext');
const dtext = document.getElementById('dtext');
const submitBtn = document.getElementById('submit');

let currentques = 0;
let score = 0;


loadQuiz();

function loadQuiz(){

    deselect();

    const valy = quizData[currentques];
    quest.innerText = valy.question;
    atext.innerText = valy.a;
    btext.innerText = valy.b;
    ctext.innerText = valy.c;
    dtext.innerText = valy.d;
    
}

function getSelected(){
    let answering = undefined;
    
    answers.forEach((answer) => {
        if(answer.checked){
            answering = answer.id;
        }
    });

    return answering;
}

function deselect(){
    answers.forEach((answer) => {
        answer.checked = false;
    });
}

submitBtn.addEventListener("click", () => {

    const answering = getSelected();

    console.log(answering);

    if(answering){
        if(answering === quizData[currentques].correct){
            score++;
        }

        currentques++;
        if (currentques < quizData.length){
            loadQuiz();
        }
        else{
            if(score<3){
                quiz.innerHTML = "<h3>" + "<pre>"+'You answered ' + score + '/' + quizData.length + ' questions correctly!' +"\n" + 'Know her better for God\'s sake' + "</pre>" + " </h3>";
            }
            else{
                quiz.innerHTML = "<h3>" +  "<pre>"+'You answered ' + score + '/' + quizData.length + ' questions correctly!' + "\n" + 'What a sweetheart <3' + "</pre>" + " </h3>";
            }
        }
    }
    
}
);