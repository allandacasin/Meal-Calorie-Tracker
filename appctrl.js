class App {
 
  constructor(){
    /*Load event Listeners*/
    const loadEventListeners = () => {
      /*add item on submit*/
      document.querySelector('.add-btn').addEventListener('click', itemAddSubmit);
      /*edit item on click*/
      document.getElementById('item-list').addEventListener('click', itemEditClick);

      /*submit edited item*/
      document.querySelector('.update-btn').addEventListener('click', itemEditSubmit);

      /*Back*/
      document.querySelector('.back-btn').addEventListener('click', backItem);

      /*delete item*/
      document.querySelector('.delete-btn').addEventListener('click', deleteItem);


      /*disable submit on enter*/
      document.addEventListener('keypress', function(e){
        if(e.keyCode === 13) {
          e.preventDefault();
          return false;
        }

      });
    }

    /*Add Item Submit*/
    const itemAddSubmit = (e) => {
      const uictrl = new UICtrl();
      const input = uictrl.getItemInput();

      /*Check for name and calorie input*/
      if (input.name !== '' && input.calories !== ''){
        const itemctrl = new ItemCtrl();

        const newItem = itemctrl.addItem(input.name, input.calories);
        

        /*add item to list*/
        //const uictrl = new UICtrl();
        uictrl.addListItem(newItem);

        uictrl.clearInput();

        /*get total caloreis*/
        const items = itemctrl.getItems();
        const totalcalories = itemctrl.totalCalories(items);

        /*show and set total calories*/
        uictrl.showTotalCalories(totalcalories);
        itemctrl.setTotalCalories(totalcalories);

        /*For Debug Purposes*/
        console.log(itemctrl.logData());


        /*set to local storage*/
        const localstorage = new LocalStorage();
        localstorage.setToLocalStorage(newItem);
      }

      e.preventDefault();

    }

    const itemEditClick = (e) => {
      const itemctrl = new ItemCtrl();
      const uictrl = new UICtrl();


    if(e.target.classList.contains('edit-item')){
      
      const id = parseInt(e.target.parentNode.parentNode.id);
      const edititem = itemctrl.getItemById(id);
      const setedititem = itemctrl.setEditItem(edititem);
      
      console.log(edititem);
      uictrl.showItemEditOnForm();

      uictrl.showEditState();

     }    
      
      e.preventDefault();
    }

    const itemEditSubmit = (e) => {
     
      const itemctrl = new ItemCtrl();
      const uictrl = new UICtrl();

      const updateitemonstorage = new LocalStorage();

      const input = uictrl.getItemInput();
      const updateditem = itemctrl.submitEditItem(input.name, input.calories);
   
      updateitemonstorage.updateItemOnStorage();      
     

      /*update list on UI*/
      
      const items = itemctrl.getItems();
      uictrl.populateItemList(items);

      /*update total calories on UI*/
      const totalcalories = itemctrl.totalCalories(items);
      itemctrl.setTotalCalories(totalcalories);
      uictrl.showTotalCalories(totalcalories);

      console.log(data);

      /*Clear after update*/
      uictrl.clearInput();

      /*hide Edit State*/
      uictrl.hideEditState();

      e.preventDefault();
    }

    /*back Item*/
    const backItem = (e) => {

      const uictrl = new UICtrl();
      uictrl.hideEditState();
      uictrl.clearInput();

      e.preventDefault();
    }

    /*delete item*/
    const deleteItem = (e) => {
      const storagectrl = new LocalStorage;
      const itemctrl = new ItemCtrl();
      
      const id = parseInt(data.editItem.id);
      storagectrl.deleteItemOnStorage(id);

      itemctrl.deleteItemOnUpdate();
      

      /*update list on UI*/
      const uictrl = new UICtrl();
      const items = itemctrl.getItems();

      /*hide list if items are already empty*/
      if (items.length === 0) {
          
          uictrl.hideList();
      }

      uictrl.populateItemList(items);

      /*update total calories on UI*/
      const totalcalories = itemctrl.totalCalories(items);
      itemctrl.setTotalCalories(totalcalories);
      uictrl.showTotalCalories(totalcalories);

      console.log(data);

      /*Clear after update*/
      uictrl.clearInput();

      /*hide Edit State*/
      uictrl.hideEditState();

      e.preventDefault();

    }


    /*Public Methods*/
    return {
      init: function() {

        /*Fetch Items from data structure*/
        const uictrl = new UICtrl();
        const itemctrl = new ItemCtrl();


        const items = itemctrl.getItems();

        uictrl.hideEditState();
     

        if (items.length === 0) {
          
          uictrl.hideList();
        } else {
          /*Popultae list with items*/
        const itemctrl = new ItemCtrl();


     
        uictrl.populateItemList(items);
        /*update list on UI*/
   
        /*update total calories on UI*/
        const totalcalories = itemctrl.totalCalories(items);
        itemctrl.setTotalCalories(totalcalories);
        uictrl.showTotalCalories(totalcalories);

        }
        
        /*Load Event Listeners*/
          loadEventListeners();
      }
    }
  }
}


const app = new App();
app.init();