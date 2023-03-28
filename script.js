const globalArr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

const random10 =[];

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
console.log(resultArray.random10);
console.log(resultArray.copyArray);

const cardsArray = [[],[],[],[],[]];

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

const createCard1Function = (array1)=>{
const card1Div = document.querySelector('.card1');
if(array1.length == 0)
return card1Div;

const pTag = document.createElement("p");
pTag.textContent= array1[0];
card1Div.appendChild(pTag);

const remainingArray = array1.slice(1);
createCard1Function(remainingArray);

}

const createCard2Function = (array)=>{
  const card2Div = document.querySelector('.card2');
  if(array.length == 0)
  return card2Div;
  
  const pTag = document.createElement("p");
  pTag.textContent= array[0];
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
        card5Div.appendChild(pTag);
        
        const remainingArray = array.slice(1);
        createCard5Function(remainingArray);
        }

createCard1Function(finalArray[0]);
createCard2Function(finalArray[1]);
createCard3Function(finalArray[2]);
createCard4Function(finalArray[3]);
createCard5Function(finalArray[4]);
