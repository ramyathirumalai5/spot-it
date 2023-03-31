const arrayOfObjects = [
  {id:0,src:'./pictures/0.jpg'},
  {id:1,src:'./pictures/1.jpg'},
  {id:2,src:'./pictures/2.jpg'},
  {id:3,src:'./pictures/3.jpg'},
  {id:4,src:'./pictures/4.jpg'},
  {id:5,src:'./pictures/5.jpg'},
  {id:6,src:'./pictures/6.jpg'},
  {id:7,src:'./pictures/7.jpg'},
  {id:8,src:'./pictures/8.jpg'},
  {id:9,src:'./pictures/9.jpg'},
  {id:10,src:'./pictures/10.jpg'},
  {id:11,src:'./pictures/11.jpg'},
  {id:12,src:'./pictures/12.jpg'},
  {id:13,src:'./pictures/13.jpg'},
  {id:14,src:'./pictures/14.jpg'},
  {id:15,src:'./pictures/15.jpg'},
  {id:16,src:'./pictures/16.jpg'},
  {id:17,src:'./pictures/17.jpg'},
  {id:18,src:'./pictures/18.jpg'},
  {id:19,src:'./pictures/19.jpg'},
  {id:20,src:'./pictures/20.jpg'},
  {id:21,src:'./pictures/21.jpg'},
  {id:22,src:'./pictures/22.jpg'},
  {id:23,src:'./pictures/23.jpg'},
  {id:24,src:'./pictures/24.jpg'},
  {id:25,src:'./pictures/25.jpg'},
];

const container = document.querySelector('.container');
const errorDisplay = document.querySelector('.errorDisplay-div');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.closeBtn');
const modalParagraph = document.querySelector('.modal-paragraph');
const modalh2 = document.querySelector('.modal-h2');

const counterSpan = document.querySelectorAll('.counterSpan');
const timer = document.querySelector('.timer');
const timerBtn = document.querySelector('.startBtn');
const globalArr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const random10 =[];
const cardsArray = [[],[],[],[],[]];
let count =4;
counterSpan.forEach((arr)=>{
  arr.textContent = 4;
}) 
let seconds = 0;
let minutes = 0;
let interval;
const timerFunction = () =>{
 seconds = seconds + 1;
 if(seconds >= 60){
  minutes = minutes+1;
  seconds=0;
 }
 let secondsValue = seconds < 10 ? `0${seconds}`:seconds;
 let minutesValue = minutes < 10 ? `0${minutes}`:minutes;
 timer.innerText = `${minutesValue}:${secondsValue}`;
}


timerBtn.addEventListener("click", ()=>{
  if(timerBtn.textContent == 'START')
  {
  container.classList.remove('disable-initially');

  interval= setInterval(timerFunction,1000);
  } else
  {
    timerBtn.textContent='START';
  window.location.reload();
  
  }

}); 

//To pick the random 10 numbers from the array
const random10PickerFunction = (array) =>{
const copyArray = array.slice();
 for(let i=0;i<10;i++){
    const randomNum = Math.floor(Math.random() * (25-i));
    const removeElement = copyArray.splice(randomNum,1)[0];
    random10.push(removeElement);
   
  }
  return {random10,copyArray};
}
const resultArray = random10PickerFunction(globalArr);

//dividing all the 10 random items between 5 different arrays
const divideArrayFunction = (cardsArray,random10,count)=>{
  for(let i=0;i<5;i++){
    for(let j=i+1;j<5;j++)
    {  
        cardsArray[i].push(random10[count]);
        cardsArray[j].push(random10[count]);
        count++;
    }
  }
  console.log(cardsArray);
}
divideArrayFunction(cardsArray,resultArray.random10,0);

//adding the remaining 15 items to the five arrays
const addRemainingArrayFunction = (copyArray,cardsArray) => {
 for(let i = 0; i< 2  ; i++){
  for(let j=0 ; j< 5;j++){
    cardsArray[j].push(copyArray[i*5+j]);
  }
 }
 return cardsArray;
}
const finalArray = addRemainingArrayFunction(resultArray.copyArray,cardsArray);
console.log(finalArray);

const shuffleArrayFunction = (array) =>{
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = array[i].length - 1; j >= 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      [array[i][j], array[i][k]] = [array[i][k], array[i][j]];
    }
  }
  return array;
}

const shuffledFinalArray = shuffleArrayFunction(finalArray);

//card1 fuction
const createCard1Function = (array,arrayOfObjects)=>{
const card1Div = document.querySelector('.card1');
for (let i = 0; i < array.length; i++) {
    const object = arrayOfObjects.find(obj => obj.id === array[i]);
    if (object) {
      const img = document.createElement('img');
      img.src = object.src;
      img.classList.add('card-item');
      img.setAttribute('id',object.id);
      card1Div.appendChild(img);
    }
  }
}
//card2 function
const createCard2Function = (array,arrayOfObjects)=>{
  const card2Div = document.querySelector('.card2');
  for (let i = 0; i < array.length; i++) {
    const object = arrayOfObjects.find(obj => obj.id === array[i]);
    if (object) {
      const img = document.createElement('img');
      img.src = object.src;
      img.classList.add('card-item');
      img.setAttribute('id',object.id);
      card2Div.appendChild(img);
    }
  }
  }

const createCard3Function = (array,arrayOfObjects)=>{
    const card3Div = document.querySelector('.card3');
    for (let i = 0; i < array.length; i++) {
      const object = arrayOfObjects.find(obj => obj.id === array[i]);
      if (object) {
        const img = document.createElement('img');
        img.src = object.src;
        img.classList.add('card-item');
      img.setAttribute('id',object.id);
        card3Div.appendChild(img);
      }
    }
    }

const createCard4Function = (array,arrayOfObjects)=>{
      const card4Div = document.querySelector('.card4');
      for (let i = 0; i < array.length; i++) {
        const object = arrayOfObjects.find(obj => obj.id === array[i]);
        if (object) {
          const img = document.createElement('img');
          img.src = object.src;
          img.classList.add('card-item');
      img.setAttribute('id',object.id);
          card4Div.appendChild(img);
        }
      }
      }

const createCard5Function = (array,arrayOfObjects)=>{
        const card5Div = document.querySelector('.card5');
        for (let i = 0; i < array.length; i++) {
          const object = arrayOfObjects.find(obj => obj.id === array[i]);
          if (object) {
            const img = document.createElement('img');
            img.src = object.src;
            img.classList.add('card-item');
            img.setAttribute('id',object.id);
            img.classList.add('card-item');
            card5Div.appendChild(img);
          }
        }
        }

        createCard1Function(shuffledFinalArray[0],arrayOfObjects);
        createCard2Function(shuffledFinalArray[1],arrayOfObjects);
        createCard3Function(shuffledFinalArray[2],arrayOfObjects);
        createCard4Function(shuffledFinalArray[3],arrayOfObjects);
        createCard5Function(shuffledFinalArray[4],arrayOfObjects);
   

//Where we test for the match
let cardItem = document.querySelectorAll('.card-item');
let picture1=false;
let picture2=false;
let picture1Value=0;
cardItem.forEach((card)=>{
card.addEventListener('click',(event)=>{
  console.log(event.target.attributes[2].value);
  if(!card.classList.contains('clicked')){
    card.classList.add('clicked');
    if(!picture1){
      picture1 = card;
      console.log(picture1);
      picture1Value = parseInt(event.target.attributes[2].value);
      console.log(picture1Value);
    } else{
      picture2=card;
      let picture2Value = parseInt(event.target.attributes[2].value);
      console.log('second click',picture2Value);
      if(picture1Value == picture2Value){
          picture1.classList.add('done');
          picture2.classList.add('done');
          let parentPicture1 = picture1.parentElement.parentElement;
          let parentPicture2 = picture2.parentElement.parentElement;
          updateCounter(parentPicture1,parentPicture2);
          
          picture1=false;
          picture2=false;
          checkIfGameOver();
      }
     //if both the pictures dont match
      else{
        displayErrors();
        picture1.classList.remove('clicked');
        picture2.classList.remove('clicked');
        picture1=false;
        picture2=false;
      }//end of 'dont match' else
    }//end of 'if picture2' else
  }// end of !card.classList.contains('clicked')

  else{
    picture1.classList.remove('clicked');
    picture1=false;
  }
})
})

//updating the counter
const updateCounter = (parent1,parent2) =>{
 let child1 = parent1.firstElementChild.firstElementChild;
 let child2 = parent2.firstElementChild.firstElementChild;
 let child1Count = child1.textContent;
 let child2Count = child2.textContent;
 let temp1 = parseInt(child1Count);
 temp1 = temp1 -1 ;
 let temp2 = parseInt(child2Count);
 temp2 = temp2 - 1;

 child1.textContent = temp1;
 child2.textContent = temp2;
 
 console.log(child1,child2);
 
}


let counter = 0;
const checkIfGameOver = () =>{
  
  counter = counter + 1;
  if(counter == 10)
  {
  container.classList.add('disable-initially');
  const currentTime = timer.innerText;
  clearInterval(interval);
  timerBtn.textContent='PLAY AGAIN';
  openModal(currentTime);
  //alert('Game Over');
  }
}

const displayErrors = () =>{
  errorDisplay.style.display='block';
setTimeout(()=>{
  errorDisplay.style.display='none';
},3000)
}




const openModal = (currentTime) =>{
  let grade;
  if(currentTime <= '00:45')
  grade='LEGEND';
  else if (currentTime <='00:55')
  grade='MASTER';
  else grade = 'TODDLER';

  modalh2.innerHTML=`YOU ARE A ${grade}`;
  modalParagraph.innerHTML = `You finished in ${currentTime}`;
    modal.classList.add('open-modal');
    console.log(grade);
}
closeBtn.addEventListener('click',()=>{
    modal.classList.remove('open-modal');
})


