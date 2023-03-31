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

    module.exports = random10PickerFunction;