class LocalStorage {
  constructor() {
    /*Public Methods*/
    return {
      setToLocalStorage: (newitem) => {
        let items;
        if(localStorage.getItem('items') === null){
          items = [];       
        } else {
          items = JSON.parse(localStorage.getItem('items'));
        }

        items.push(newitem);

        localStorage.setItem('items', JSON.stringify(items));

      },

      getFromLocalStorage: () => {
        let items;
        if(localStorage.getItem('items') === null){
          items = [];
        } else {
          items = JSON.parse(localStorage.getItem('items'));
        }
        return items;
      },

      updateItemOnStorage: () => {
        let items;
        const id = parseInt(data.editItem.id);
        console.log(data.editItem);
        items = JSON.parse(localStorage.getItem('items'));

        items.forEach(function(item, index){
          if(data.editItem.id === item.id){


            items.splice(index, 1, data.editItem);

          }

        });
        
        localStorage.setItem('items', JSON.stringify(items));
        console.log(data.editItem);
      },

      deleteItemOnStorage: (id) => {
        
        let items;

        items = JSON.parse(localStorage.getItem('items'));
        
        items = items.filter(item => item.id !== id);

        localStorage.setItem('items', JSON.stringify(items));

      }
    }
  }
}