import GroceryItem from './model/GroceryItem';
import GroceryList from './model/GroceryList';
import GroceryListView from './view/GroceryListView';

const initApp = () => {
  const groceryList = new GroceryList();
  groceryList.load();
  const groceryListView = new GroceryListView();
  groceryListView.render(groceryList);

  const form = document.getElementById('groceryForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newItem = form.item.value;
    if (!newItem) return;
    const item = new GroceryItem(undefined, newItem, false);
    groceryList.addItem(item);
    groceryListView.render(groceryList);
    form.reset();
  });

  const clearButton = document.getElementById('clearBtn');
  clearButton.addEventListener('click', () => {
    groceryList.clear();
    groceryListView.clear();
  });
};

document.addEventListener('DOMContentLoaded', initApp);
