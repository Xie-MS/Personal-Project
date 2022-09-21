import api from './api';

function reducer(
    state = [],
    action:any
  ) {
    switch (action.type) {
      case "getLabels": {
            const newLabelsData = state.map((item,index) => {
                
            })
          }
        default:
        return state;
      }
    }
  
  export default reducer;