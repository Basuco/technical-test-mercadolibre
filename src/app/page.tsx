import { type Product } from "../types";
import {getProducts} from '../services'
import { Products } from "@/components/Products";

export default async function HomePage() {
  const products = await getProducts();
  return (
    <Products products={products}/>
  );
}
