"use client";

import { useEffect, useMemo, useState } from "react";
import { catalog, type CatalogNode } from "@/lib/catalog";
import { catalogProductCodes, productCategories, productHref, storeProducts } from "@/lib/products";

export function ProductShowcase() {
  const [filter, setFilter] = useState("all");
  const [subfilter, setSubfilter] = useState("all");
  const selectedCategory = productCategories.find(item => item.key === filter);
  const selectedCatalog = catalog.find(item => item.slug === (
    filter === "facade" ? "facade-brick" :
    filter === "kiln" ? "kiln-brick" :
    filter === "floor" ? "floor-brick" :
    filter === "ordinary" ? "ordinary-brick" :
    filter === "accessories" ? "accessories" : ""
  ));
  const subcategories = useMemo(() => {
    if (!selectedCatalog?.children) return [];
    const collectProductNodes = (nodes: CatalogNode[]): CatalogNode[] =>
      nodes.flatMap(item => {
        const descendants = item.children?.length ? collectProductNodes(item.children) : [];
        return catalogProductCodes[item.slug] ? [item, ...descendants] : descendants.length ? descendants : [item];
      });
    return collectProductNodes(selectedCatalog.children);
  }, [selectedCatalog]);
  const visible = storeProducts.filter(product =>
    (filter === "all" || product.category === filter) &&
    (subfilter === "all" || product.subcategory === subfilter)
  );
  const label = subfilter === "all"
    ? selectedCategory?.label ?? "همه محصولات"
    : subcategories.find(item => item.slug === subfilter)?.name ?? "محصولات";

  useEffect(() => {
    const applyUrlFilter = () => {
      const params = new URLSearchParams(window.location.search);
      const category = params.get("category");
      const productCode = params.get("product")?.toUpperCase();
      const product = productCode ? storeProducts.find(item => item.code === productCode) : undefined;
      if (product) {
        setFilter(product.category);
        setSubfilter(product.subcategory);
      } else if (category) {
        const categoryMap: Record<string, typeof filter> = {
          "facade-brick":"facade", "kiln-brick":"kiln", "floor-brick":"floor",
          "ordinary-brick":"ordinary", accessories:"accessories"
        };
        if (categoryMap[category]) setFilter(categoryMap[category]);
        else {
          const matched = storeProducts.find(item => item.subcategory === category);
          if (matched) {
            setFilter(matched.category);
            setSubfilter(category);
          }
        }
      }
    };
    applyUrlFilter();
    window.addEventListener("hashchange", applyUrlFilter);
    return () => window.removeEventListener("hashchange", applyUrlFilter);
  }, []);

  return <section className="section storeSection" id="store-products">
    <div className="container">
      <div className="sectionHead storeHead">
        <div><span className="eyebrow">کاتالوگ آجر جهان‌نما</span><h2>{label}</h2></div>
        <p className="sectionNote">نمایش {visible.length.toLocaleString("fa-IR")} محصول</p>
      </div>
      <div className="productFilters" role="group" aria-label="فیلتر محصولات">
        {productCategories.map(item => <button key={item.key} className={filter === item.key ? "active" : ""} onClick={() => { setFilter(item.key); setSubfilter("all"); }}>{item.label}</button>)}
      </div>
      {subcategories.length > 0 && <div className="productSubfilters" role="group" aria-label="زیر‌دسته محصولات">
        <button className={subfilter === "all" ? "active" : ""} onClick={() => setSubfilter("all")}>همه {selectedCategory?.label}</button>
        {subcategories.map(item => <button key={item.slug} className={subfilter === item.slug ? "active" : ""} onClick={() => setSubfilter(item.slug)}>{item.name}</button>)}
      </div>}
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
