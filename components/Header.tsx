"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, Phone, Search } from "./Icons";
import { catalog, refractorySizes, type CatalogNode } from "@/lib/catalog";
import { catalogHref } from "@/lib/products";
import { sitePath } from "@/lib/paths";

function MenuBranch({ node, level = 0, onNavigate }: { node: CatalogNode; level?: number; onNavigate?: () => void }) {
  const hasChildren = Boolean(node.children?.length);
  return <div className={`menuBranch level${level} ${hasChildren ? "hasChildren" : "isLeaf"}`}>
    <a className="menuBranchTitle" href={catalogHref(node.slug)} onClick={onNavigate}>
      <span>{node.name}</span>
      {hasChildren ? <b aria-hidden="true">‹</b> : null}
    </a>
    {node.children?.length ? <div className="menuBranchChildren">
      {node.children.map(child => <MenuBranch key={child.slug} node={child} level={level + 1} onNavigate={onNavigate}/>)}
      {node.slug === "refractory-brick" && <div className="sizeMenu"><small>ابعاد موجود</small>{refractorySizes.map(size => <span key={size}>{size}</span>)}</div>}
    </div> : null}
  </div>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!productsMenuRef.current?.contains(event.target as Node)) setProductsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProductsOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenus = () => {
    setOpen(false);
    setProductsOpen(false);
  };

  return <>
    <div className="topbar">ارسال سراسری از کارخانه • مشاوره رایگان انتخاب آجر</div>
    <header className="header">
      <div className="container headerInner">
        <a className="brand" href={sitePath("/")} aria-label="صفحه اصلی آجر جهان‌نما"><img src={sitePath("/images/logo-symbol-dark.png")} alt="نشان آجر جهان‌نما" width="56" height="56" fetchPriority="high"/><span><b>آجر جهان‌نما</b><small>JAHAN NAMA BRICK</small></span></a>
        <nav className="nav productNav" aria-label="منوی اصلی">
          <div className={`catalogNavItem hasDropdown productsRoot ${productsOpen ? "isOpen" : ""}`} ref={productsMenuRef}>
            <button className="productsMenuButton" type="button" aria-expanded={productsOpen} aria-controls="desktop-products-menu" onClick={() => setProductsOpen(value => !value)}>
              محصولات <span aria-hidden="true">⌄</span>
            </button>
            <div className="catalogDropdown megaCatalog" id="desktop-products-menu" aria-label="دسته‌بندی محصولات">
              {catalog.map(node => <MenuBranch key={node.slug} node={node} onNavigate={closeMenus}/>)}
            </div>
          </div>
          <a href={sitePath("/#projects")}>پروژه‌ها</a><a href={sitePath("/#calculator")}>محاسبه‌گر</a><a href={sitePath("/#quote")}>درباره ما</a><a href={sitePath("/#contact")}>تماس</a>
        </nav>
        <div className="headerActions"><button className="iconBtn" aria-label="جستجو"><Search/></button><a className="phoneLink" href="tel:+989133678359"><Phone/> ۰۹۱۳۳۶۷۸۳۵۹</a><a className="btn btnPrimary btnSmall" href={sitePath("/#quote")}>دریافت قیمت</a><button className="mobileMenu" aria-expanded={open} aria-label={open ? "بستن منو" : "بازکردن منو"} onClick={() => setOpen(!open)}><Menu/></button></div>
      </div>
      <div className={`mobileDrawer ${open ? "isOpen" : ""}`}><div className="mobileDrawerInner"><strong className="mobileProductsTitle">محصولات</strong>{catalog.map(node => <MenuBranch key={node.slug} node={node} onNavigate={closeMenus}/>)}<a href={sitePath("/#projects")} onClick={closeMenus}>پروژه‌ها</a><a href={sitePath("/#calculator")} onClick={closeMenus}>محاسبه‌گر آجر</a><a href={sitePath("/#contact")} onClick={closeMenus}>تماس با ما</a></div></div>
    </header>
  </>;
}
