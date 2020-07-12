import shoppingList from './shopping-list.js';
import store from './store.js';
import item from './item.js';
import {testEnc} from './shopping-list.js';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
  testEnc();
};

$(main);