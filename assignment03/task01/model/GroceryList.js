import GroceryItem from './GroceryItem.js';

class GroceryList {
  constructor() {
    this.items = [];
  }

  load() {
    const rawData = localStorage.getItem('groceryList');
    const parsedData = JSON.parse(rawData) || [];
    parsedData.forEach((item) => {
      this.items.push(new GroceryItem(item._id, item._item, item._checked));
    });
  }

  save() {
    const rawData = JSON.stringify(this.items);
    localStorage.setItem('groceryList', rawData);
  }

  clear() {
    this.items = [];
    this.save();
  }

  addItem(item) {
    this.items.push(item);
    this.save();
  }

  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
    this.save();
  }
}

export default GroceryList;
