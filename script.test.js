const {random10PickerFunction} = require('./testFunctions.js'); 

const {random10PickerFunction}= require('./script.js');
describe('random10PickerFunction', () => {
    const globalArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    const { random10, copyArray } = random10PickerFunction(globalArr);
  
    test('should have 10 elements in random10', () => {
      expect(random10).toHaveLength(10);
    });
  
   
  });
  
