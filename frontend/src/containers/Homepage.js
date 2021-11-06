import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

import Empty from "../components/default/Empty";
import Footer from "../components/default/Footer";
import Header from "../components/default/Header";
import Pagination from "../components/default/Pagination";
import ProductCard from "../components/homepage/ProductCard";
import { Female, Male } from "../constants";
import { fetchCarts } from "../reducks/cart/operations";
import { getCarts } from "../reducks/cart/selectors";
import { fetchCategories } from "../reducks/category/operations";
import { getCategories } from "../reducks/category/selectors";
import { fetchProducts } from "../reducks/product/operations";
import { getProducts } from "../reducks/product/selectors";

export default function Homepage() {
	const query = new URLSearchParams(useLocation().search);
	const queryType = query.get("type");
	const queryCategoryId = query.get("categoryId");
	const queryCategoryName = query.get("categoryName");

	const history = useHistory();

	const dispatch = useDispatch();
	const selector = useSelector((state) => state);
	const products = getProducts(selector);
	const categories = getCategories(selector);
	const carts = getCarts(selector);
	const [type, setType] = useState(queryType);
	const [category, setCategory] = useState({ id: queryCategoryId, name: queryCategoryName });
	const [activeCategory, setActiveCategory] = useState(+queryCategoryId);

	const title = type ? (type === "male" ? Male : Female) : "Products List";

	useEffect(() => {
		dispatch(fetchProducts({ type, category_id: category.id }, () => history.replace({ search: "" })));
		dispatch(fetchCategories());
		dispatch(fetchCarts());
		// eslint-disable-next-line
	}, [type, category]);

	const categoryHandler = (category, isReset = false) => {
		if (isReset) {
			setCategory({ id: null, name: null });
			setActiveCategory(0);
			return;
		}
		setCategory({ id: category.id, name: category.name });
		setActiveCategory(category.id);
	};

	return (
		<>
			<Header totalCart={carts.totalCart} />
			<section className="main-wrapper">
				<div className="homepage">
					<div className="homepage-container">
						<div className="homepage-content">
							<select onChange={(e) => setType(e.target.value)} className="gender-select">
								<option value="">FILTER BY GENDER</option>
								<option selected={type === 'male'} value="male">Men's</option>
								<option selected={type === 'female'} value="female">Women's</option>
							</select>

							<div className="right-border">
								<p className="homepage-category-text">Category Lists</p>
								<div className="category-list">
									<ul>
										<li
											className={activeCategory === 0 ? "active" : ""}
											onClick={() => categoryHandler(null, true)}
										>
											All
										</li>
										{categories.results && categories.results.length > 0 ? (
											categories.results.map((c) => (
												<li
													className={activeCategory === c.id ? "active" : ""}
													onClick={() => categoryHandler(c)}
													key={c.id}
													to="#"
												>
													{c.name}
												</li>
											))
										) : (
											<Empty />
										)}
									</ul>
								</div>
							</div>
						</div>
						<div className="homepage-content">
							<div className="homepage-title">
								{title} {category.name && `- ${category.name}`}
							</div>
							<div className="product-container">
								{products.results && products.results.length > 0 ? (
									products.results.map((p) => {
										const cart = carts.results.find(c=> c.product.id === p.id) || null;
										return <ProductCard key={p.id} products={p} cart={cart} />
									})
								) : (
									<Empty />
								)}
							</div>
						</div>
					</div>
					<div className="product-pagination">
						{products.results && products.results.length > 0 ? (
							<Pagination
								metadata={{
									totalPages: products.total_pages,
									current: products.current,
									currentQuery: { type, category_id: category.id },
								}}
							/>
						) : (
							""
						)}
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
