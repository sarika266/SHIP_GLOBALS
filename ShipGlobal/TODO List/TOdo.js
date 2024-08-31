function moveTask(button, targetStatus) {
    const taskItem = button.parentElement;
    const targetCard = document.getElementById(targetStatus);
    

    taskItem.remove();

    const newTaskItem = document.createElement('li');
    newTaskItem.innerHTML = taskItem.innerHTML; 

    if (targetStatus === 'backlog') {
        newTaskItem.innerHTML += ' <button class="next" onclick="moveTask(this, \'toDo\')">→</button>';
    } else if (targetStatus === 'toDo') {
        newTaskItem.innerHTML += ' <button class="prev" onclick="moveTask(this, \'backlog\')">←</button><button class="next" onclick="moveTask(this, \'ongoing\')">→</button>';
    } else if (targetStatus === 'ongoing') {
        newTaskItem.innerHTML += ' <button class="prev" onclick="moveTask(this, \'toDo\')">←</button><button class="next" onclick="moveTask(this, \'done\')">→</button>';
    } else if (targetStatus === 'done') {
        newTaskItem.innerHTML += ' <button class="prev" onclick="moveTask(this, \'ongoing\')">←</button>';
    }

    
    targetCard.querySelector('ul').appendChild(newTaskItem);
}
