{
  const tasks = [];
  const input = document.querySelector(".js-input"); // Przeniesiona deklaracja zmiennej input

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
        <li ${task.done ? 'style="text-decoration: line-through"' : ''}>
          <button class="button__done js-done">${task.done ? '✔' : ''}</button>
          <button class="button__remove js-remove">${'🗑️'}</button>
          <span style="flex-grow: 1;">${task.content}</span>
        </li>
      `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = input.value.trim();

    if (newTaskContent === "") {
      return;
    }

    addNewTask(newTaskContent);

  };

  const onFocus = () => {
    input.value = "";
  };

  const init = () => {
    render();

    input.value = "";

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);

    input.addEventListener('focus', onFocus);
  };

  init();
}