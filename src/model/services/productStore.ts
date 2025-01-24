import client from "../../conn/cosmos/client";

const dataBase = "Products";
const container = "Actives";

export const productsStore = {
  getProducts: async () => {
    const conn = await client();
    const response = await conn.database(dataBase).container(container).items.readAll().fetchAll();
    console.log(response.resources);
    return response.resources;
  },
};
