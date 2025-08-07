const questions = [{
        'que' : 'What is the big city in pakistan',
        'a' : 'lahore',
        'b' : 'karachi',
        'c' : 'islamabad',
        'd' : 'rawalpindy',
        'correct' : 'b'
    },

    {
        'que' : 'What is the big river of pakistan',
        'a' : 'indus river',
        'b' : 'chinab river',
        'c' : 'ganga river',
        'd' : 'hub river',
        'correct' : 'a'
    },
    {
        'que' : 'What is the name of winnig nation of champian trophy 2017',
        'a' : 'England',
        'b' : 'Australia',
        'c' : 'pakistan',
        'd' : 'india',
        'correct' : 'c'
    },
    {
        'que' : 'What is the capital of pakistan',
        'a' : 'lahore',
        'b' : 'karachi',
        'c' : 'islamabad',
        'd' : 'rawalpindy',
        'correct' : 'c'
    },
    {
        'que' : 'What is the name of prime minister of pakistan',
        'a' : 'mian nawaz sharef',
        'b' : 'zardari',
        'c' : 'imran khan',
        'd' : 'shahbaz sharef',
        'correct' : 'd'
    },
];
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesbox = document.getElementById("quebox");
const optionInput = document.querySelectorAll(".options")
const btn = document.getElementById("btn");

const loadQuestion = ()=>{
    if(index === total){
        return endQuiz();
    }
    reset();
    const data =questions[index];
    quesbox.innerText=`${index+1}) ${data.que}`
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

const btnquez = ()=>{
    const data =questions[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;

}

const getAnswer = ()=>{
    let answer ;
    optionInput.forEach((input)=>{
        if(input.checked){
            answer = input.value;
        }
    }
)
return answer;
}

const reset = ()=>{
    optionInput.forEach((input)=>{
       input.checked = false;
    }
)
}

function endQuiz() {
    document.getElementById("box").innerHTML = `
    <div style = "text-align: center">
    <h3>Thankyou for playing this game </h3> 
    <br>
    <h2>${right} / ${total} are correct
    <div/>`
    
}

loadQuestion();
btn.addEventListener("click",btnquez);