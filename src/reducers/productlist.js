const productList = {
  statusBuy: false,
  listProduct: [],
  listPenjualan: [],
};
const productReduce = (state = productList, action) => {
  const { type, payload } = action;
  console.log("state:", state);
  console.log("action:", payload);
  switch (type) {
    case "product":
      return {
        ...state,
        listProduct: [...state.listProduct, payload.product],
      };
    case "btn-buy":
      return {
        ...state, //agar tidak menghapus data lama
        statusBuy: true,
      };
    case "addProduct":
      return {
        ...state,
        listProduct: [...state.listProduct, payload.newProduct],
      };
    case "buy-item":
      return {
        ...state,
        listPenjualan: [...state.listPenjualan, payload.newPenjualan],
        statusBuy: false,
      };
    default:
      return state;
  }
};

export default productReduce;
