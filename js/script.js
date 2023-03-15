{
  const tasks = [
    {
      content: "Zrobić zadanie domowe",
      done: false,
    },
    {
      content: "Wyjdź na spacer z psem",
      done: true
    },
  ];

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
      <li>
      ${task.content}
      </li>
      `;
    }
    document.querySelector("js-taskList").innerHTML = htmlString;
  };

  const init = () => {
    render();
  };

  init();
}   