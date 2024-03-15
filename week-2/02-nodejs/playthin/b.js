
todos = [{"id":1,"title":"samosa","description":"kha le bhosdike"},{"id":2,"title":"panipuri","description":"kha le bhosdike"},
{"id":4,"title":"kachori","description":"kha le bhosdike"},{"id":5,"title":"chai","description":"pi le bhosdike"},
{"id":6,"title":"juice","description":"pi le bhosdike"}]

function updateIds(arr) {
arr.forEach((task, index) => {
    task.id = index + 1;
});
}

updateIds(todos)
console.log(todos)