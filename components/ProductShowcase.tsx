"use client";

import { useState } from "react";
import { productCategories, productHref, storeProducts } from "@/lib/products";

export function ProductShowcase() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? storeProducts : storeProducts.filter(product => product.category === filter);
  const label = productCategories.find(item => item.key === filter)?.label ?? "همه محصولات";

  return <section className="section storeSection" id="store-products">
    <div className="container">
      <div className="sectionHead storeHead">
        <div><span className="eyebrow">کاتالوگ آجر جهان‌نما</span><h2>{label}</h2></div>
        <p className="sectionNote">نمایش {visible.length.toLocaleString("fa-IR")} محصول</p>
      </div>
      <div className="productFilters" role="group" aria-label="فیلتر محصولات">
        {productCategories.map(item => <button key={item.key} className={filter === item.key ? "active" : ""} onClick={() => setFilter(item.key)}>{item.label}</button>)}
      </div>
      <div className="storeProductGrid">
        {visible.map(product => <a className="storeProductCard" href={productHref(product.code)} aria-label={`مشاهده جزئیات ${product.name}`} key={product.code}>
          <div className="storeProductPhoto"><img src={product.image} alt={product.name} loading="lazy"/><span>{product.status}</span></div>
          <div className="storeProductBody">
            <small>جهان‌نما · {product.code}</small>
            <h3>{product.name}</h3>
            <dl>
              <div><dt>رنگ</dt><dd>{product.color}</dd></div>
              <div><dt>ابعاد</dt><dd>{product.size}</dd></div>
            </dl>
            <p>برای قیمت روز استعلام بگیرید</p>
            <span className="btn btnSecondary">مشاهده محصول و استعلام</span>
          </div>
        </a>)}
      </div>
    </div>
  </section>;
}
