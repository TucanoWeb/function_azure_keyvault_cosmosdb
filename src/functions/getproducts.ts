import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { productsStore } from "../model/services/productStore";

export async function getproducts(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  const products = await productsStore.getProducts();

  return { body: JSON.stringify(products), status: 200 };
}

app.http("get-products", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: getproducts,
});
