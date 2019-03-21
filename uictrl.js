/*UI Controller*/

class UICtrl {

  constructor (){

    //Public Methods
    return {
      populateItemList: (items) => {
        let html ='';

        items.forEach(function(item){
          html += `
            <li class="collection-item" id="${item.id}">
              <strong>${item.name} </strong> <em>${item.calories} Calories</em>
              <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"></i>
              </a>
            </li>
          `;
        });

        /*Insert List Items*/
          document.getElementById('item-list').innerHTML = html;
      },

      clearInput: () => {
        document.getElementById('item-name').value ='';
        document.getElementById('item-calories').value='';
      },

      addListItem: (item) => {
        /*Show the list*/
        document.getElementById('item-list').style.display = 'block';
        /*Create li element*/
        const li = document.createElement('li');
        /*Add Class*/
        li.className = 'collection-item';
        /*Add ID*/
        li.id = `${item.id}`;
        /*Add HTML*/
        li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>`;
        /*Insert Item*/
        document.getElementById('item-list').insertAdjacentElement('beforeend', li)
      },

      hideList: () => {
        document.getElementById('item-list').style.display = 'none';
      },

      showTotalCalories: (totalCalories) => {
        document.querySelector('.total-calories').innerHTML = totalCalories;
      },

      getItemInput: () => {
        return {
          name: document.getElementById('item-name').value,
          calories: document.getElementById('item-calories').value
        }
      },

      hideEditState: () => {
        document.querySelector('.update-btn').style.display = 'none';
        document.querySelector('.delete-btn').style.display = 'none';
        document.querySelector('.back-btn').style.display = 'none';
        document.querySelector('.add-btn').style.display = 'inline';

      },

      showEditState: () => {
        document.querySelector('.update-btn').style.display = 'inline';
        document.querySelector('.delete-btn').style.display = 'inline';
        document.querySelector('.back-btn').style.display = 'inline';
        document.querySelector('.add-btn').style.display = 'none';
      },

      showItemEditOnForm: () => {        
        document.querySelector('#item-name').value = data.editItem.name ;
        document.querySelector('#item-calories').value = data.editItem.calories ; 
      }

    }
  }
}