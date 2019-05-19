import axios from "axios";

const initialState = {
  categoryList: [],
  categoryInfo: {}
};

const GET_CAT_LIST = "GET_CAT_LIST";
const GET_CAT_INFO = "GET_CAT_INFO";

export function getCategoryList(category) {
  return {
    type: GET_CAT_LIST,
    payload: axios
      .get(`/items/categories`)
      .then(catList => {
        return catList.data;
      })
      .catch(err => console.log(err))
  };
}
export function getCategoryInfo(category_url) {
  return {
    type: GET_CAT_INFO,
    payload: axios
      .get(`items/categories/${category_url}`)
      .then(catInfo => {
        return catInfo.data[0];
      })
      .catch(err => console.log(err))
  };
}

export default function itemsReducer(state = initialState, action) {
  console.log(action.type, action.payload);
  switch (action.type) {
    //PENDING cases
    case `${GET_CAT_LIST}_PENDING`:
    case `${GET_CAT_INFO}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    // FULFILLED CASES
    case `${GET_CAT_LIST}_FULFILLED`:
      return { ...state, categoryList: action.payload, isLoading: false };
    case `${GET_CAT_INFO}_FULFILLED`:
      return { ...state, categoryInfo: action.payload, isLoading: false };
    //REJECTED CASES
    case `${GET_CAT_LIST}_REJECTED`:
    case `${GET_CAT_INFO}_REJECTED`:
      return {
        ...state,
        error: "ERROR",
        isLoading: false
      };
    default:
      return state;
  }
}
