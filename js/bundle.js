let expandIconPro1 = document.querySelector('.fa-expandPro1');
let compressIconPro1 = document.querySelector('.fa-compressPro1');
let answerPro1 = document.querySelector('.answerPro1');

let expandIconPro2 = document.querySelector('.fa-expandPro2');
let compressIconPro2 = document.querySelector('.fa-compressPro2');
let answerPro2 = document.querySelector('.answerPro2');






let expandIcon = document.querySelector('.fa-expand1');
let compressIcon = document.querySelector('.fa-compress1');
let faqAnswer = document.querySelector('.faq-answer-1');


let expandIcon2 = document.querySelector('.fa-expand-2');
let compressIcon2 = document.querySelector('.fa-compress-2');
let faqAnswer2 = document.querySelector('.faq-answer-2');

let expandIcon3 = document.querySelector('.fa-expand-3');
let compressIcon3 = document.querySelector('.fa-compress-3');
let faqAnswer3 = document.querySelector('.faq-answer-3');


let expandIcon4 = document.querySelector('.fa-expand-4');
let compressIcon4 = document.querySelector('.fa-compress-4');
let faqAnswer4 = document.querySelector('.faq-answer-4');



expandIconPro1.addEventListener('click', displayAnswerPro1);
compressIconPro1.addEventListener('click', closeAnswerPro1);


expandIconPro2.addEventListener('click', displayAnswerPro2);
compressIconPro2.addEventListener('click', closeAnswerPro2);





expandIcon.addEventListener('click', displayAnswer);
compressIcon.addEventListener('click', closeAnswer);


expandIcon2.addEventListener('click', displayAnswer2);
compressIcon2.addEventListener('click', closeAnswer2);


expandIcon3.addEventListener('click', displayAnswer3);
compressIcon3.addEventListener('click', closeAnswer3);


expandIcon4.addEventListener('click', displayAnswer4);
compressIcon4.addEventListener('click', closeAnswer4);




// function openModal(){
//   modal.style.display = 'block';
// }


// function openModal2(){
//   modal2.style.display = 'block';



// }




function displayAnswerPro1(){
  answerPro1.style.display = 'block';
  if(answerPro1.style.display = 'block'){
    expandIconPro1.style.display = 'none';
    compressIconPro1.style.display = 'block';
  }
}

function closeAnswerPro1(){
  answerPro1.style.display = 'none';
  compressIconPro1.style.display = 'none';
  expandIconPro1.style.display  = 'block';
}




function displayAnswerPro2(){
  answerPro2.style.display = 'block';
  if(answerPro2.style.display = 'block'){
    expandIconPro2.style.display = 'none';
    compressIconPro2.style.display = 'block';
  }
}

function closeAnswerPro2(){
  answerPro2.style.display = 'none';
  compressIconPro2.style.display = 'none';
  expandIconPro2.style.display  = 'block';
}









function displayAnswer(){
  faqAnswer.style.display = 'block';
  if(faqAnswer.style.display = 'block'){
    expandIcon.style.display = 'none';
    compressIcon.style.display = 'block';
  }
}

function closeAnswer(){
  faqAnswer.style.display = 'none';
  compressIcon.style.display = 'none';
  expandIcon.style.display  = 'block';
}


function displayAnswer2(){
  faqAnswer2.style.display = 'block';
  if(faqAnswer2.style.display = 'block'){
    expandIcon2.style.display = 'none';
    compressIcon2.style.display = 'block';
  }
}

function closeAnswer2(){
  faqAnswer2.style.display = 'none';
  compressIcon2.style.display = 'none';
  expandIcon2.style.display  = 'block';
}


function displayAnswer3(){
  faqAnswer3.style.display = 'block';
  if(faqAnswer3.style.display = 'block'){
    expandIcon3.style.display = 'none';
    compressIcon3.style.display = 'block';
  }
}

function closeAnswer3(){
  faqAnswer3.style.display = 'none';
  compressIcon3.style.display = 'none';
  expandIcon3.style.display  = 'block';
}



function displayAnswer4(){
  faqAnswer4.style.display = 'block';
  if(faqAnswer4.style.display = 'block'){
    expandIcon4.style.display = 'none';
    compressIcon4.style.display = 'block';
  }
}

function closeAnswer4(){
  faqAnswer4.style.display = 'none';
  compressIcon4.style.display = 'none';
  expandIcon4.style.display  = 'block';
}




// listen for a click event
// closeBtn.addEventListener('click', closeModal);

// function closeModal(){
//   modal.style.display = 'none';
// }


// listen for a click event
// closeBtn2.addEventListener('click', closeModal2);

// function closeModal2(){
//   modal2.style.display = 'none';
// }