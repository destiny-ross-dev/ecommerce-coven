import axios from "axios";

const initialState = {
  categoryList: []
};

const GET_CAT_LIST = "GET_CAT_LIST";

export function getCategoryList(category) {
  return {
    type: GET_CAT_LIST,
    payload: axios
      .get(`/items?category=${category}`)
      .then(catList => {
        console.log(catList.data);
        return catList.data;
      })
      .catch(err => console.log(err))
  };
}

export default function itemsReducer(state = initialState, action) {
  // console.log(action.type, action.payload);
  switch (action.type) {
    //PENDING cases
    case `${GET_CAT_LIST}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    // FULFILLED CASES
    case `${GET_CAT_LIST}_FULFILLED`:
      return { ...state, categoryList: action.payload, isLoading: false };

    //REJECTED CASES
    case `${GET_CAT_LIST}_REJECTED`:
      return {
        ...state,
        error: "ERROR",
        isLoading: false
      };
    default:
      return state;
  }
}
