let input = prompt("What would you like to do?");
const todo = ["Buy eggs", "Wash Clothes", "Relax"];


while (input != "quit" && input != "q") {
    if (input === 'list') {
        console.log("*****************")
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`)
        }
        console.log("*****************")
    } else if (input === 'new') {
        const newTodo = prompt("What do you want to add?");
        todo.push(newTodo);
        console.log(`${newTodo} is added to the list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt("Please enter the index to remove the todo"));
        if (!Number.isNaN(index)) {
            let deleted = todo.splice(index, 1);
            console.log(`Deleted todo is ${deleted}`);
        } else {
            console.log("Not a valid index");
        }
    }
    input = prompt("What would you like to do?");
}

console.log("You quit the app");