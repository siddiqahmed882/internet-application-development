class GroceryListView {
  constructor() {
    this.ul = document.getElementById('groceryList');
  }

  render(groceryList) {
    this.clear();
    groceryList.items.forEach((item) => {
      const li = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = item.checked;
      checkbox.id = item.id;
      li.appendChild(checkbox);

      const label = document.createElement('label');
      label.htmlFor = item.id;
      label.innerText = item.item;
      li.appendChild(label);

      const deleteButton = document.createElement('button');
      const i = document.createElement('i');
      i.classList.add('fa-solid', 'fa-trash-can');
      deleteButton.appendChild(i);
      li.appendChild(deleteButton);

      // event listeners
      checkbox.addEventListener('change', (event) => {
        item.checked = event.target.checked;
        groceryList.save();
      });

      deleteButton.addEventListener('click', () => {
        groceryList.removeItem(item.id);
        this.render(groceryList);
      });

      this.ul.appendChild(li);
    });
  }

  clear() {
    while (this.ul.firstChild) {
      this.ul.removeChild(this.ul.firstChild);
    }
  }
}

export default GroceryListView;
