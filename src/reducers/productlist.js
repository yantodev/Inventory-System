const productList = {
  statusBuy: false,
  listProduct: [
    {
      id: 1,
      nameProduct: "Telur",
      hargaBeli: 25000,
      hargaJual: 26000,
      qty: 100,
      thumbnailUrl:
        "https://res.cloudinary.com/dk0z4ums3/image/upload/v1592885787/attached_image/inilah-manfaat-telur-dan-cara-menyimpannya.jpg",
      diskon: 0,
    },
    {
      id: 2,
      nameProduct: "Minyak",
      hargaBeli: 10000,
      hargaJual: 12000,
      qty: 150,
      thumbnailUrl:
        "https://statik.tempo.co/data/2016/11/22/id_558209/558209_620.jpg",
      diskon: 50,
    },
    {
      id: 3,
      nameProduct: "Gula",
      hargaBeli: 12000,
      hargaJual: 15000,
      qty: 120,
      thumbnailUrl:
        "https://id-test-11.slatic.net/p/8820fda555045c34ed3b4dca96e1cd6c.jpg",
      diskon: 0,
    },
    {
      id: 4,
      nameProduct: "Beras",
      hargaBeli: 12000,
      hargaJual: 15000,
      qty: 110,
      thumbnailUrl:
        "https://cdn.supermarket.co.id/wp-content/uploads/2020/07/1_A7292480001001_20191223140636165-1.png",
      diskon: 0,
    },
    {
      id: 5,
      nameProduct: "Ayam",
      hargaBeli: 25000,
      hargaJual: 27000,
      qty: 112,
      thumbnailUrl:
        "https://id-test-11.slatic.net/p/9510024adbbfc697d07ef12f03e4fe80.jpg",
      diskon: 0,
    },
    {
      id: 6,
      nameProduct: "Daging",
      hargaBeli: 75000,
      hargaJual: 78000,
      qty: 10,
      thumbnailUrl:
        "https://asset.kompas.com/crops/o6zdc0_3Z-kxUrW8nYaKeglbojo=/0x28:1000x695/750x500/data/photo/2021/07/14/60ee4d217d0f3.jpg",
      diskon: 0,
    },
    {
      id: 7,
      nameProduct: "Ikan",
      hargaBeli: 12000,
      hargaJual: 15000,
      qty: 15,
      thumbnailUrl:
        "https://www.mongabay.co.id/wp-content/uploads/2020/09/Ilustrasi-Megalodon.jpg",
      diskon: 0,
    },
    {
      id: 8,
      nameProduct: "Kopi",
      hargaBeli: 8500,
      hargaJual: 10000,
      qty: 19,
      thumbnailUrl:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-3723340/kopi-kampung-lampung_kopi-bubuk-kapal-lampung-netto-1-kg-_full01.jpg",
      diskon: 10,
    },
  ],
  listPenjualan: [],
};
const productReduce = (state = productList, action) => {
  const { type, payload } = action;
  console.log("state:", state);
  console.log("action:", payload);
  switch (type) {
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
