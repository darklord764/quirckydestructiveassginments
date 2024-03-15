// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// hello world my name is raman
//'''''''''''''''''''''''''''''

function fileCleaner(){

     const fs = require ('fs'); 
     const path = './a.txt';
     
     
     fs.readFile(path , 'utf-8' , (err , data)=>{
          if(err){
               throw err;
          }
          let contents = data.replace(/\s+/g , " ")

          fs.writeFile(path , contents , 'utf-8' , (err)=>{
               if(err){
                    throw err
               }
               console.log('data cleaned successfully')
          } )

          } )        

}

fileCleaner();

















