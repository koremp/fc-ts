const initialState = {

};

const reducers = {

};

function defaultReducer(state: any) {
  return state;
}

export default function reducer() {

}

// fix
// export default function reducer(state = initialState, action: any) {
//   return (reducers[action.type] || defaultReducer)(state, action);
// }
