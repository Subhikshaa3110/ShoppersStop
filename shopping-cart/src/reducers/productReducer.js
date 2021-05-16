import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE, ORDER_PRODUCTS_BY_CATEGORY, SEARCH_BAR } from "../actions/types";

const initState = { items: [], filteredItems: [], size: "", sort: "", category: "", searchValue:"" };
export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload, filteredItems: action.payload };
    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        filteredItems: action.payload.items,
        size: action.payload.size,
      };
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        filteredItems: action.payload.items,
        sort: action.payload.sort,
      };
      case ORDER_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        filteredItems: action.payload.items,
        category: action.payload.category,
      };
      case SEARCH_BAR:
      return {
        ...state,
        filteredItems: action.payload.items,
        searchValue: action.payload.searchValue,
      };

    default:
      return state;
  }
}