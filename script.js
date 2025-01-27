function addTask() {
    const input = document.getElementById('tf-input');
    const inputValue = input.value;

    if (inputValue.trim() !== '') { // trim() untuk menghapus spasi di awal
        const task = document.createElement('li');

        const x = document.createElement('p');
        x.textContent = inputValue;
        task.appendChild(x);

        task.classList.add('items');

        // Membuat id
        task.id = 'task-' + Date.now();
    
        // Membuat button edit
        const bEdit = document.createElement('button');
        bEdit.textContent = "Edit";
        bEdit.classList.add('button-edit');

        bEdit.addEventListener('click', function () {
            editTask(task.id);
        })

        task.appendChild(bEdit);

        // Membuat button delete
        const bDelete = document.createElement('button');
        bDelete.textContent = "Delete";
        bDelete.classList.add('button-delete');

        bDelete.addEventListener('click', function() {
            deleteTask(task.id);
        })

        task.appendChild(bDelete);

        // Menampilkan
        const taskContainer = document.getElementById('task-container');
        taskContainer.appendChild(task);

        // Reset input
        input.value = '';
    } else {
        alert('Input tidak boleh kosong!');
    }
}

function deleteTask(id) {
    const taskDelete = document.getElementById(id);
    taskDelete.remove();
}

function editTask(id) {
    const taskEdit = document.getElementById(id);

    const text = taskEdit.querySelector('p').textContent;
    const input = document.getElementById('tf-input');

    input.value = text;
    idTask = id;
    
    // Mengubah tulisan edit
    const bAdd = document.getElementById('bAdd');
    bAdd.textContent = "Edit";

    bAdd.onclick = function() {
        updateTask();
    }
}

function updateTask() {
    const input = document.getElementById('tf-input');
    const inputNewValue = input.value;

    if (inputNewValue.trim() !== '') {
        const task = document.getElementById(idTask);
        task.querySelector('p').textContent = inputNewValue;
    
        const bAdd = document.getElementById('bAdd');
        bAdd.textContent = "Add";
        input.value = '';
        bAdd.onclick = function() {
            addTask();
        };
    } else {
        alert('Input tidak boleh kosong!');
    }
}