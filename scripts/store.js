import item from './item.js'

const items = [];
let hideCheckedItems = false;

const findById = function(id) {
    return items.find(item => item.id === id);
}

const addItem = function(name) {
    try {
        item.validateName(name);
        this.items.push(item.create(name));
    } catch (error) {
        console.log(error.message);
    }
}

const findAndToggleChecked = function(id) {
    let foundItem = this.findById(id);
    foundItem.checked = !foundItem.checked;
    //this.findById(id).checked = !this.findById(id).checked;
}

const findAndUpdateName = function(id, newName) {
    try {
        item.validateName(name);
        let foundItem = this.findById(id);
        foundItem.name = newName;
    } catch (error) {
        console.log(`Cannot update name: ${error.message}`);
    }
}

const findAndDelete = function(id) {
    this.items.splice(items.findIndex(item => item.id === id), 1);
}

const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
};