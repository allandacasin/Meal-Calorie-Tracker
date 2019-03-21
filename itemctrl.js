class ItemCtrl {

  constructor() {    
      //Data Structure/State
    const Item = function(id, name, calories) {
      this.id = id;
      this.name = name;
      this.calories = calories;
    }

    //Public Meth0ds
    return {

      getItems: (item) => {
        return data.items;
      },

      /*Add items*/
      addItem: (name, calories) => {
        let ID;
        /*Create ID*/
        if(data.items.length > 0){
          ID = data.items[data.items.length - 1].id + 1;
        } else {
          ID = 0;
        }

        /*Calories to Numbers*/
        calories = parseInt(calories);

        /*Create new item*/
        const newItem =  new Item(ID, name, calories);

       /*Add Items to Array*/
        data.items.push(newItem);
       

        //console.log(data.items);
        return newItem;
      },

      /*Get Total Calories*/
      totalCalories: (items) => {
        let totalCalories = 0;
        
        items.forEach(function(item){
          totalCalories += parseInt(item.calories);

        })

        return totalCalories;

      },

      setTotalCalories: (totalCalories)=>{
        data.totalCalories = totalCalories;
      },

      /*Edit Item*/
      getItemById: (id) => {
        let edititem = null;
        
        data.items.forEach(function(item){
          if(item.id === id){
            edititem = item;
          }
        });
        
        return edititem;
      },

      setEditItem: (edititem) => {
        data.editItem = edititem;
        
      },

      submitEditItem: (name, calories) => { //updated item
        const id = parseInt(data.editItem.id);
    
        data.items.forEach(function(item){
          if(item.id === id){
             
            item.name = name;
            item.calories = parseInt(calories);

          }

        })
      },

      deleteItemOnUpdate: () => {
        const id = parseInt(data.editItem.id);
        data.items = data.items.filter(item => item.id !== id);             

      },

      logData: () =>{
        return data;
      }
    }
  }
}
