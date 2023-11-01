import {type Product} from "@/types"

export function Products ({products}:{products: Product[]}) {
    return (
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {
          products.map(({id, thumbnail, title, price, currency_id: currencyId}) => (
            <li key={id}>
              <img src={thumbnail} alt={title}/>
              <h3>{title}</h3>
              <strong>{price.toLocaleString('es-AR', {
                currency: currencyId,
                style: "currency"
              })}</strong>
            </li>
          ))
        }
      </ul>
    );
  }