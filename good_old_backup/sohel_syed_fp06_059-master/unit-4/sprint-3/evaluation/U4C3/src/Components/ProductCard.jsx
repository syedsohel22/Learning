import React from "react"


export function RestaurantCard({
    brand,
    category,
    price,
    id
}){
    return (
        <tr data-testid="item">
            <td>{id}</td>
            <td data-testid="brand">{brand}
            </td>
            <td data-testid="category">{category}
            </td>
            <td data-testid="price">{price}
            </td>
        </tr>
    )
}
