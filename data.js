const localstorage = new LocalStorage();

const data = {
    /*items: [
      {id: 0, name: 'Steak Dinner', calories: 1200},
      {id: 1, name: 'Cookie', calories: 400},
      {id: 2, name: 'Eggs', calories: 300}
    ],
    //For testing purposes:
    */
    items: localstorage.getFromLocalStorage(),
    editItem: null,
    totalCalories: 0
}
