const taskList = document.getElementById("taskList");
const taskinput = document.getElementById("taskInput");
const addTaskbtn = document.getElementById("addTask");

addTaskbtn.addEventListener("click", () => {
  const dummy = taskinput.value.trim();
  if (dummy === "") {
    alert("Please Enter a value");
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `
  ${dummy}
  <button class="Delete-btn">Delete</button>
  `;

  dummy.appendChild(li);
  taskinput.value = "";
});

//Removing the Item
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("Delete-btn")) {
    e.target.parentElement.remove();
  }
});
