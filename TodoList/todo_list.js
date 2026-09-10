// Step 2: Mengambil Elemen DOM dan Inisialisasi Array
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

let tasks = [];

// Step 3: Fungsi Tambah Tugas
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = "";
        displayTasks();
    }
}

// Step 3: Fungsi Tampilkan Tugas
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                        <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

// Step 3: Fungsi Toggle Status Tugas
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Step 3: Fungsi Hapus Tugas Selesai
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

// Practice Task: Fungsi Hapus Semua Tugas
function clearAllTasks() {
    tasks = [];
    displayTasks();
}

// Event Listeners
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllBtn.addEventListener("click", clearAllTasks);

// Tampilkan tugas saat pertama kali dimuat
displayTasks();