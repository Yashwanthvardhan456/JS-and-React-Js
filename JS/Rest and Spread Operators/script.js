const targetList = document.getElementById("taskList");

targetList.addEventListener("click", (e) => {
  if (e.target.classList.contains("Delete-btn")) {
    e.target.parentElement.remove();
  }
});
