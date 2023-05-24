{
  const tasks = [];
  const input = document.querySelector(".js-input");
  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

    render();

  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li> 
          <button class="button__done js-done">${task.done ? '✔' : ''}</button>
          <span style="${task.done ? 'text-decoration: line-through' : ''}; flex-grow: 1;">${task.content}</span>
          <button class="button__remove js-remove">${'🗑️'}</button>
        </li>
      `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const input = document.querySelector(".js-input");

    const newTaskContent = input.value.trim();
    input.focus();

    if (newTaskContent === "") {
      return;
    }
    input.value = "";

    addNewTask(newTaskContent);

  };

  const init = () => {
    render();

    input.value = "";

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);

  };

  init();
}