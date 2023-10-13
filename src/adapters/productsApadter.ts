

import { Products } from '../models/useProducts';

export const createAddaptedProduct = (product:Products) => {
    const formattedProduct  = {
        id: product.id,
        title: product.title,
        priceMax: product.prices.max.amount,
        priceMin: product.prices.min.amount,
        image: product.featuredImage.url,
        tags: product.tags,
        totalInventory: product.totalInventory,
        tracksInventory: product.tracksInventory,
    }
      

return formattedProduct

}

