import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE, ORDER_PRODUCTS_BY_CATEGORY, SEARCH_BAR} from "./types"

export const fetchProducts = () => (dispatch) => {
    fetch("http://localhost:8000/products")
    .then((res) => res.json())
    .catch((err) =>
      fetch("db.json")
        .then((res) => res.json())
        .then((data) => data.products)
    )
    .then((data) => {
      dispatch({ type: FETCH_PRODUCTS, payload: data });
    });
};

export const searchBar = (products, searchValue) => (dispatch) => {
  return dispatch ({
    type: SEARCH_BAR,
    payload: {
      searchValue: searchValue,
      items: 
        products.filter(
          (x) => x.title.toLowerCase().includes(searchValue.toLowerCase())===true||x.category.toLowerCase()===searchValue.toLowerCase()
        )
    }
  })
}
export const filterProducts = (products, size) => (dispatch) => {
    return  dispatch({
      type: FILTER_PRODUCTS_BY_SIZE,
      payload: {
        size: size,
        items:
          size === ""
            ? products
            : products.filter(
                (x) => x.availableSizes.indexOf(size.toUpperCase()) >= 0
              ),
      },
    });
  };

  export const filterCategories = (products, category) => (dispatch) => {
    return  dispatch({
      type: ORDER_PRODUCTS_BY_CATEGORY,
      payload: {
        category: category,
        items:
          category === ""
            ? products
            : products.filter(
                (x) => x.category===category
              ),
      },
    });
  };
  export const sortProducts = (items, sort) => (dispatch) => {
    const products = items.slice();
    if (sort !== "") {
      products.sort((a, b) =>
        sort === "Lowest"
          ? a.price > b.price
            ? 1
            : -1
          : a.price < b.price
          ? 1
          : -1
      );
    } else {
      products.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
    return dispatch({
      type: ORDER_PRODUCTS_BY_PRICE,
      payload: {
        sort: sort,
        items: products,
      },
    });
  };