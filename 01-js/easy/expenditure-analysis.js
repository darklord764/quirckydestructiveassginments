/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {


  let spendings = {};
  for(let i=0; i<transactions.length ; i++){
    const {category , price}  = transactions[i]
    if(!spendings[category]){
      spendings[category] = 0
    }
    spendings[category] += price;
  }
  // console.log(spendings)
  let answer = [];
  for (let i = 0; i < Object.keys(spendings).length; i++) {
    var category = Object.keys(spendings)[i];
    var obj = {
      category: category,
      totalSpent: spendings[category]
    };
    answer.push(obj); 
  }
  // console.log(answer);
  return answer;
  
      
}
// calculateTotalSpentByCategory([
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
//   {
//     id: 2,
//     timestamp: 1656259600000,
//     price: 20,
//     category: 'Food',
//     itemName: 'Burger',
//   },
//   {
//     id: 3,
//     timestamp: 1656019200000,
//     price: 15,
//     category: 'Clothing',
//     itemName: 'T-Shirt',
//   },
//   {
//     id: 4,
//     timestamp: 1656364800000,
//     price: 30,
//     category: 'Electronics',
//     itemName: 'Headphones',
//   },
//   {
//     id: 5,
//     timestamp: 1656105600000,
//     price: 25,
//     category: 'Clothing',
//     itemName: 'Jeans',
//   },
// ])
module.exports = calculateTotalSpentByCategory;

    
    // const result = Object.keys(spendings).map(category => ({
    //     category,
    //     totalSpent: spendings[category],
    //   }));
    //   console.log(result)
    //   return result;