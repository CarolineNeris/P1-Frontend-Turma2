document.addEventListener('DOMContentLoaded', () => {
    // Verifica se há tarefas salvas no localStorage ao carregar a página
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
  
    // Adiciona as tarefas salvas à lista ao carregar a página
    savedTasks.forEach(task => {
      const newTask = document.createElement('li');
      newTask.innerText = task.text;
      newTask.classList.toggle('completed', task.completed);
      newTask.onclick = toggleTask;
      taskList.appendChild(newTask);
    });
  });
  
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      const newTask = document.createElement('li');
      newTask.innerText = taskText;
      newTask.onclick = toggleTask;
      taskList.appendChild(newTask);
      
      // Salva a nova tarefa no localStorage
      saveTaskToLocalStorage({ text: taskText, completed: false });
  
      taskInput.value = '';
    } else {
      alert('Por favor, insira uma tarefa válida.');
    }
  }
  
  function toggleTask() {
    this.classList.toggle('completed');
    
    // Atualiza o status da tarefa no localStorage ao ser marcada/desmarcada
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const clickedTaskText = this.innerText;
    const updatedTasks = tasks.map(task => {
      if (task.text === clickedTaskText) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }
  
  function saveTaskToLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  