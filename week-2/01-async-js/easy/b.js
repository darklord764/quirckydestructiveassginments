// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. 
// There is a hint at the bottom of the file if you get stuck.


let s = 0;
function a(){
    
    console.clear();
    console.log(`Time: ${s} seconds`)
    s++;
    setTimeout(a , 1000)   
}
a();
 