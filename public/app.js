const reducers = Redux.combineReducers({
  toDolist: (state = { arrayOfErrands: [] }, action) => {
    if(action.type === 'add'){
      state.arrayOfErrands.push(action.errand);
    }
    return state;
  }
});

const store = Redux.createStore(reducers);

$('#submitErrand').click(() => {
  const errand = $('#errand').val();
  store.dispatch({
    type: 'add',
    errand
  });

  const arrayOfErrandsToDisplay = store.getState().toDolist.arrayOfErrands;
  let displayArrayOfErrands = '';
  arrayOfErrandsToDisplay.forEach((e) => {
    displayArrayOfErrands = displayArrayOfErrands + `<div>${e}</div>`;
  });
  $('#toDoList').html(displayArrayOfErrands);
});

