document.addEventListener("DOMContentLoaded", function () {
  // Get references to HTML elements
  const addForm = document.querySelector("#addForm form");
  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");
  const articleTable = document.querySelector("#articleTable table");
  const articleContent = document.getElementById("articleContent");

  // Load existing articles from localStorage
  const storedArticles = JSON.parse(localStorage.getItem("articles")) || [];

  // Update the article table in the HTML
  function updateArticleTable() {
    articleTable.innerHTML = `
            <tr>
                <th>Title</th>
                <th>Actions</th>
            </tr>
        `;

    for (const [index, article] of storedArticles.entries()) {
      // Create new rows for title and actions
      const newRow = articleTable.insertRow();
      const titleCell = newRow.insertCell();
      const actionsCell = newRow.insertCell();

      // Set title and actions content
      titleCell.textContent = article.title;
      titleCell.classList.add("article-title");

      actionsCell.innerHTML = `
                <div class="btn-container">
                    <button class="btn-edit" data-index="${index}">Edit</button>
                    <button class="btn-delete" data-index="${index}">Delete</button>
                </div>
            `;

      // Create a row for content
      const contentRow = articleTable.insertRow();
      const contentCell = contentRow.insertCell();
      contentCell.classList.add("article-content");
      contentCell.colSpan = 2;
      contentCell.textContent = article.content;
      contentCell.style.display = "none";
    }
