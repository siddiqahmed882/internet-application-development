// Define Item class
class GroceryItem {
  constructor(id = Date.now().toString(), item, checked = false) {
    this._id = id;
    this._item = item;
    this._checked = checked;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get item() {
    return this._item;
  }

  set item(item) {
    this._item = item;
  }

  get checked() {
    return this._checked;
  }

  set checked(checked) {
    this._checked = checked;
  }
}

export default GroceryItem;
