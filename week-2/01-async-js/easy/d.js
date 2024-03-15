// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

function writefile(notOG) {
    const path = "./d.txt";
    const fs = require('fs');
    let contents = "";

    fs.readFile(path, 'utf-8', (err, OG) => {
        if (err) {
            console.error(`An error occurred: ${err.message}`);
            return;
        }

        console.log(`The data before writing: ${OG}`);
       

        fs.writeFile(path, notOG, 'utf-8', (err) => {
            if (err) {
                console.error(`An error occurred: ${err.message}`);
                return;
            }

            console.log(`The contents have been written successfully`);
            console.log(`The data after writing: ${notOG}`);
        });
    });
}

writefile(`Tujhya bahin chi chut`);
