document.addEventListener('DOMContentLoaded', function() {
    const bookList = document.getElementById('bookList');
    const bookForm = document.getElementById('bookForm');
  
    bookForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
  
      if (title && author) {
        addBook(title, author);
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
      }
    });
  
    function addBook(title, author) {
      const row = document.createElement('tr');
      const titleCell = document.createElement('td');
      titleCell.textContent = title;
      const authorCell = document.createElement('td');
      authorCell.textContent = author;
      const actionCell = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        row.remove();
      });
      actionCell.appendChild(deleteButton);
  
      row.appendChild(titleCell);
      row.appendChild(authorCell);
      row.appendChild(actionCell);
      bookList.appendChild(row);
    }
  });
  