const questions = [
  {
    que: "which of the following is a Markup language",
    A: "HTML",
    B: "CSS",
    C: "javaScript",
    D: "PHP",
    correct: "a",
  },
  {
    que: "What Year Was JavaScript Launched",
    A: "1996",
    B: "1995",
    C: "1994",
    D: "none of the above",
    correct: "b",
  },
  {
    que: "What does CSS Stand For",
    A: "Hypertext Markup Language ",
    B: "Cascading Style sheet",
    C: "Json Object Notation",
    D: "Helicopter Terminals Motorboats Lamb",
    correct: "b",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
 wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".option");
const btn = document.getElementsByClassName("btn");

const loadQuestion = () => {
  if(index === total){
    return endQuiz ()
  }
  rest ()
  const data = questions[index];
  console.log(data);
  quesBox.innerHTML = `${index + 1}  )   ${data.que}`;

  optionInputs[0].nextElementSibling.innerHTML = data.A;
  optionInputs[1].nextElementSibling.innerHTML = data.B;
  optionInputs[2].nextElementSibling.innerHTML = data.C;
  optionInputs[3].nextElementSibling.innerHTML = data.D;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if(ans === data.correct) {
    right++

  } else {
    wrong++
  }
  index++;
  loadQuestion();
return;
   
  
};

const getAnswer = () => {
  let answer ;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  })
  return answer;
};

const rest = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  })
}

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
  <div style = "text-align:center">
  <h3> Thank You For Playing The Quiz</h3>
  <h2>${right} / ${total} are correct   </h2> </div>`;
}


loadQuestion();
