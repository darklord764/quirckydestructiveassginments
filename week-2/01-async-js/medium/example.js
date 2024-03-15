function formatTime(date) {
    const options = { hour12: false };
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    return formattedTime;
  }
  
  function formatTimeWithAMPM(date) {
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const ampm = date.getHours() < 12 ? 'AM' : 'PM';
    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    return formattedTime;
  }
  
  function updateClock() {
    const currentDate = new Date();
    
    const formattedTime = formatTime(currentDate);
    const formattedTimeWithAMPM = formatTimeWithAMPM(currentDate);
  
    console.clear(); // Clear console to update time
  
    console.log('Current Time (24-Hour Format):', formattedTime);
    console.log('Current Time (12-Hour Format):', formattedTimeWithAMPM);
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to display the clock immediately
  updateClock();
  