// GET
export const createProductStart = () => ({
  type: "CREATE_PRODUCT_START",
});
export const createProductSuccess = (product) => ({
  type: "CREATE_PRODUCT_SUCCESS",
  payload: product,
});
export const createProductFailed = () => ({
  type: "CREATE_PRODUCT_FAILED",
});

// DELETE
export const deleteProductStart = () => ({
  type: "DELETE_PRODUCT_START",
});
export const deleteProductSuccess = (list) => ({
  type: "DELETE_PRODUCT_SUCCESS",
  payload: list,
});
export const deleteProductFailed = () => ({
  type: "DELETE_PRODUCT_FAILED",
});
