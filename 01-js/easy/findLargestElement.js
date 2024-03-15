/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    
    let largest = numbers[0];
    let index = 0;
    numbers.forEach((number , i)=>{
        if (number > largest){
            largest = number;
             index = i
        }     
   })
    console.log(`Largest element is: ${largest} at index: ${index}`)
    return largest;
}
// findLargestElement([3, 7, 2, 9, 1])
module.exports = findLargestElement;