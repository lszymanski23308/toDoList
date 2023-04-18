{

  const tasks = [];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

    render();
  }




  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  }

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  }


  const input = document.querySelector(".js-input");
  input.value = "";
  const button = document.querySelector(".js-button");


  button.addEventListener("click", function () {
    input.focus();

  });

  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index)
      });

    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index)
      });

    });
  }

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
  <li ${task.done ? 'style="text-decoration: line-through"' : ''}>
     <button class="button__done js-done">${task.done ? '✔' : ''}</button>
     <button class="button__remove js-remove">${'🗑️'}</button>
     ${task.content}
  </li>
`;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindEvents();
  };


  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-input").value.trim();

    if (newTaskContent === "") {
      return;
    }

    addNewTask(newTaskContent);
  }

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);

  };

  init();
}   