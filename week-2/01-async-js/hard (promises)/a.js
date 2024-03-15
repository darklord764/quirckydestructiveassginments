function delay(seconds) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Promise resolved after ${seconds} seconds`);
      }, seconds * 1000);
    });
  }
  
  async function performAsyncTaskWithTimer(seconds) {
    let timer = 0;
  
    // Start the timer
    const timerInterval = setInterval(() => {
      console.clear();
      console.log(`Timer: ${timer}s`);
      timer++;
    }, 1000);
  
    try {
      // Perform the asynchronous task
      const result = await delay(seconds);
      console.clear();
      console.log(result);
    } catch (error) {
      console.error(`Error: ${error}`);
    } finally {
      // Stop the timer when the task is complete
      clearInterval(timerInterval);
    }
  }
  
  // Example usage:
  const secondsToWait = 5;
  performAsyncTaskWithTimer(secondsToWait);
  