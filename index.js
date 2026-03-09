function markAsDone(todos) {
    return transform(0, todos, []);
}

function transform(index, todos, modifiedTodos){
    if(index < todos.length){
        const updated = "done - " + todos[index];
        return transform(index + 1, todos, [...modifiedTodos, updated]);
        return modifiedTodos
    }else{
        return modifiedTodos
    }
}

