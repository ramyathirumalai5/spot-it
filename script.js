const counterSpan = document.querySelectorAll('.counterSpan');
const globalArr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const random10 =[];
const cardsArray = [[],[],[],[],[]];
let count =4;
counterSpan.forEach((arr)=>{
  arr.textContent = 4;
})

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
 for(let i = 0; i< 3; i++){
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
const createCard1Function = (array1)=>{
const card1Div = document.querySelector('.card1');

if(array1.length == 0)
return card1Div;

const pTag = document.createElement("p");
pTag.textContent= array1[0];
pTag.className = 'card-item';
card1Div.appendChild(pTag);

const remainingArray = array1.slice(1);
createCard1Function(remainingArray);

}
//card2 function
const createCard2Function = (array)=>{
  const card2Div = document.querySelector('.card2');
  if(array.length == 0)
  return card2Div;
  
  const pTag = document.createElement("p");
  pTag.textContent= array[0];
  pTag.className='card-item';
  card2Div.appendChild(pTag);
  
  const remainingArray = array.slice(1);
  createCard2Function(remainingArray);
 
  }

const createCard3Function = (array)=>{
    const card3Div = document.querySelector('.card3');
    if(array.length == 0)
    return card3Div;  
    
    const pTag = document.createElement("p");
    pTag.textContent= array[0];
    pTag.className='card-item';
    card3Div.appendChild(pTag);
    
    const remainingArray = array.slice(1);
    createCard3Function(remainingArray);
    
    
    }

const createCard4Function = (array)=>{
      const card4Div = document.querySelector('.card4');
      if(array.length == 0)
      return card4Div;  
      
      const pTag = document.createElement("p");
      pTag.textContent= array[0];
      pTag.className='card-item';
      card4Div.appendChild(pTag);
      
      const remainingArray = array.slice(1);
      createCard4Function(remainingArray);
      }

const createCard5Function = (array)=>{
        const card5Div = document.querySelector('.card5');
        if(array.length == 0)
        return card5Div;  
        
        const pTag = document.createElement("p");
        pTag.textContent= array[0];
        pTag.className='card-item';
        card5Div.appendChild(pTag);
        
        const remainingArray = array.slice(1);
        createCard5Function(remainingArray);
        }

        createCard1Function(shuffledFinalArray[0]);
        createCard2Function(shuffledFinalArray[1]);
        createCard3Function(shuffledFinalArray[2]);
        createCard4Function(shuffledFinalArray[3]);
        createCard5Function(shuffledFinalArray[4]);
        
//Where we test for the match
let cardItem = document.querySelectorAll('.card-item');
let picture1=false;
let picture2=false;
let picture1Value=0;
cardItem.forEach((card)=>{
card.addEventListener('click',(event)=>{
  console.log(event);
  if(!card.classList.contains('clicked')){
    card.classList.add('clicked');
    if(!picture1){
      picture1 = card;
      picture1Value = event.target.innerText;
      console.log(picture1Value);
    } else{
      picture2=card;
      let picture2Value = event.target.innerText;
      console.log('second click',picture2Value);
      if(picture1Value == picture2Value){
          picture1.classList.add('done');
          picture2.classList.add('done');
          let parentPicture1 = picture1.parentElement.parentElement;
          let parentPicture2 = picture2.parentElement.parentElement;
          updateCounter(parentPicture1,parentPicture2);
          picture1=false;
          picture2=false;
          
      }
     //if both the pictures dont match
      else{
        alert('They dont match');
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



