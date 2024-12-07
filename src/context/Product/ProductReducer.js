import { log } from "async";

export const reducerProduct = (state, action) => {
  console.log("check acction payload ", action);

  // code here
  switch (action.type) {
    // GET

    case "CREATE_PRODUCT_START":
      return {
        isLoading: true,
        ...state,
        isError: false,
      };
    case "CREATE_PRODUCT_SUCCESS":
      return {
        isLoading: false,
        products: [...state.products, action.payload],
        isError: false,
      };

    case "CREATE_PRODUCT_FAILED":
      return {
        isLoading: false,
        products: [],
        isError: true,
      };

    // DELETE

    case "DELETE_PRODUCT_START":
      return {
        isLoading: true,
        ...state,
        isError: false,
      };
    case "DELETE_PRODUCT_SUCCESS":
      return {
        isLoading: false,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
        isError: false,
      };
    case "DELETE_PRODUCT_FAILED":
      return {
        isLoading: false,
        products: [],
        isError: true,
      };
    default:
      return state;
  }
};
