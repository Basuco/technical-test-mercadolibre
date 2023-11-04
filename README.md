# Interview Exercise, Mercado Libre Migration

Don Miguel has been selling on Mercado Libre for 10 years, but he has a problem: he suffers from [xanthophobia](https://www.autopista.es/planeta2030/es-xantofobia_269191_102.html#:~:text=La%20xantofobia%20se%20refiere%20al,sea%20o%20contenga%20este%20tono.) (fear of the color yellow), which causes him a lot of stress when accessing the Mercado Libre website.

His son Ángel, who is a programmer, told him that Mercado Libre has an open API that allows product searches with certain parameters, so he could create his own website to showcase his products. However, Ángel is just getting started in the frontend world and doesn't know how to do it.

Ángel heard that Next.js, TypeScript, and Tailwind CSS are good tools that could make the job easier, so he prepared this project for us to work on.

## Resources

Ángel did some research and found out that Miguel's store's `Seller ID` is `179571326`, and that the Mercado Libre API has an endpoint that allows searching for products from a particular seller. The endpoint is `https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326`. He also mentioned that by accessing the endpoint from a web browser, you can see the response in JSON format along with some information. The rest of the API documentation is available at [this link](https://developers.mercadolibre.com.ar/es_ar/items-y-busquedas).

## Requirements

- [x] When accessing the route `/`, we should see a list of all of Miguel's products in a grid format.
- [x] When accessing the route `/[category_id]`, we should see a list of products corresponding to that category.
- [x] In all routes, there should be a left-hand menu with available categories. The categories should be displayed in a tree-like structure, meaning that if a category has subcategories, they should be displayed as a submenu.
- [x] Categories should start collapsed, and by clicking a `-` or `+` button, they should expand or collapse individually.
- [x] Categories should maintain their expansion/collapse state when navigating between routes.
- [x] Clicking on a category should navigate us to the corresponding `/[category_id]` route.
- [x] Clicking on a product should redirect us to the Mercado Libre website for that product.

## Example
[![Example](./assets/mock.png)](./assets/mock.png)
> Note: The design is free, but it should be responsive. Given the available time for the exercise, it doesn't need to be very complex.

## How to run

- pnpm install
- pnpm run dev

## Learning notes

I didn't know to much about Next.js and had to investigate how the routing worked, specially the dynamics routes and that you can the catch all segments [...folderName] can also be made optional with the doble bracket [[...folderName]].

The hardest part was to create the category tree, using a recurvise method. Took me a lot of time checking Mercado Libre's api documentation and trying to figure out their particular way of storing the categories.

I think that with time this challenge isn't super hard but in a live coding I would have started sweating a lot.