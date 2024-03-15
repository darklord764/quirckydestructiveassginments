// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function regularclock(date){
    
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    return formattedTime
    // console.log(formattedTime)
    
}

function ampm(date){ 
    
    let hours = date.getHours()%12||12;
     hours = hours.toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const ampms = date.getHours() < 12 ? 'AM' : 'PM';

    const formattedTime = `${hours}:${minutes}:${seconds} ${ampms}`;
    return formattedTime;

}

function clock(){
    const newDate = new Date();
    console.clear()
    const time = regularclock(newDate);
    const timeampm = ampm(newDate)

    console.log('Current time (24 hour format): ' , time )
    console.log('Current time (12 hour format): ' , timeampm )

    setTimeout(clock , 1000);
}

clock()