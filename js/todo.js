document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-btn');
    const editTaskButton = document.getElementById('edit-task-btn');
    const deleteTaskButton = document.getElementById('delete-tasks-btn');
    const taskList = document.getElementById('task-list');

    let selectedTask = null; // This stores the LI you click on

    // 1. ADD TASK
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement('li');
        
        // Inner structure
        li.innerHTML = `
            <input type="checkbox" class="task-check">
            <span>${taskText}</span>
        `;

        // Click to Select Logic
        li.addEventListener('click', (e) => {
            // Don't trigger selection if clicking the checkbox
            if (e.target.type === 'checkbox') return;

            // Remove selection from others
            document.querySelectorAll('#task-list li').forEach(el => el.classList.remove('selected'));
            
            // Set current selection
            li.classList.add('selected');
            selectedTask = li;
        });

        // Checkbox Logic
        const checkbox = li.querySelector('.task-check');
        checkbox.addEventListener('change', () => {
            li.classList.toggle('completed', checkbox.checked);
        });

        taskList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
    };

    // 2. EDIT SELECTED TASK
    editTaskButton.addEventListener('click', () => {
        if (selectedTask) {
            const span = selectedTask.querySelector('span');
            const currentText = span.innerText;
            const newText = prompt("Edit your task:", currentText);
            
            if (newText !== null && newText.trim() !== "") {
                span.innerText = newText;
            }
        } else {
            alert("Please click on a task in the list first to select it!");
        }
    });

    // 3. DELETE SELECTED TASK
    deleteTaskButton.addEventListener('click', () => {
        if (selectedTask) {
            selectedTask.remove();
            selectedTask = null; // Clear selection after deleting
        } else {
            alert("Please click on a task in the list first to select it!");
        }
    });

    // Event Listeners for Input
    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });
});