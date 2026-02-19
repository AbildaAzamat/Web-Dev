const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" class="complete-checkbox">
        <span class="todo-text">${text}</span>
        <button class="delete-btn">Удалить</button>
    `;

    const checkbox = li.querySelector('.complete-checkbox');
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
    });

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    todoList.appendChild(li);
    input.value = "";
}

addBtn.addEventListener('click', addTask);

// Позволяем добавлять через Enter
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
