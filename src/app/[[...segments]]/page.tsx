import { Products } from "@/components/Products";
import { getProducts } from "@/services";

export default async function ProductsPage({
    params: {
        segments: [category],
    }
} : {params: {segments: string[]}}
) {
    const products = await getProducts(category);

    return <Products products={products}/>
}