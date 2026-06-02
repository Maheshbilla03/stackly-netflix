function editMovie(button) {
  const card = button.closest(".movie-card");
  const title = card.querySelector("h3");
  const category = card.querySelector("p");

  const newTitle = prompt("Enter movie name:", title.innerText);
  const newCategory = prompt(
    "Enter category:",
    category.innerText.replace("Category: ", "")
  );

  if (newTitle) {
    title.innerText = newTitle;
  }

  if (newCategory) {
    category.innerText = "Category: " + newCategory;
  }
}

function deleteMovie(button) {
  const confirmDelete = confirm("Are you sure you want to delete this movie?");

  if (confirmDelete) {
    button.closest(".movie-card").remove();
  }
}