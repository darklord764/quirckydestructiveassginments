function division(number , divisor) {
try {  
    if (divisor === 0) {
      throw new Error('Cannot divide by zero');
    }
  
    const result = number / divisor;
    console.log(result);  
  } catch (error) {
    console.error('An error occurred:', error.message);
  } finally {
    console.log('This code always runs.');
  }
  
}

division(10 , 0)


