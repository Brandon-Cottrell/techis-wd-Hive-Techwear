import React from "react";

import ProductCard from "./ProductCard";

export default function ProductListCard(props) {
	const { products, carts, productType, labelType } = props;
	if (productType && labelType) {
		return (
			<>
				<div class="homepage-subtitle">{labelType}</div>
				<div className="product-container">
					{products
						.filter((p) => p.type === productType)
						.map((p) => {
							const cart = carts.find((c) => c.product.id === p.id) || null;
							return <ProductCard key={p.id} products={p} cart={cart} />;
						})}
				</div>
			</>
		);
	} else {
		return (
			<div className="product-container">
				{products.map((p) => {
					const cart = carts.find((c) => c.product.id === p.id) || null;
					return <ProductCard key={p.id} products={p} cart={cart} />;
				})}
			</div>
		);
	}
}
