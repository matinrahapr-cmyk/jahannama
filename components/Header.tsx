"use client";

import { useState } from "react";
import { Menu, Phone, Search } from "./Icons";
import { catalog, refractorySizes, type CatalogNode } from "@/lib/catalog";
import { catalogHref } from "@/lib/products";

function MenuBranch({ node, level = 0 }: { node: CatalogNode; level?: number }) {
  return <div className={`menuBranch level${level}`}>
    <a className="menuBranchTitle" href={catalogHref(node.slug)}>{node.name}</a>
    {node.children?.length ? <div className="menuBranchChildren">
      {node.children.map(child => <MenuBranch key={child.slug} node={child} level={level + 1}/>)}
      {node.slug === "refractory-brick" && <div className="sizeMenu"><small>ابعاد موجود</small>{refractorySizes.map(size => <span key={size}>{size}</span>)}</div>}
    </div> : null}
  </div>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="topbar">ارسال سراسری از کارخانه • مشاوره رایگان انتخاب آجر</div>
    <header className="header">
      <div className="container headerInner">
        <a className="brand" href="#" aria-label="صفحه اصلی آجر جهان‌نما"><img src="/images/logo-symbol-dark.png" alt="نشان آجر جهان‌نما" width="56" height="56" fetchPriority="high"/><span><b>آجر جهان‌نما</b><small>JAHAN NAMA BRICK</small></span></a>
        <nav className="nav productNav" aria-label="منوی اصلی">
          {catalog.map(node => <div className={`catalogNavItem ${node.children?.length ? "hasDropdown" : ""}`} key={node.slug}>
            <a href={catalogHref(node.slug)}>{node.name}{node.children?.length ? <span>⌄</span> : null}</a>
            {node.children?.length ? <div className={`catalogDropdown ${node.slug === "facade-brick" ? "wide" : ""}`}><MenuBranch node={node}/></div> : null}
          </div>)}
          <a href="#projects">پروژه‌ها</a><a href="#calculator">محاسبه‌گر</a><a href="#quote">درباره ما</a><a href="#contact">تماس</a>
        </nav>
        <div className="headerActions"><button className="iconBtn" aria-label="جستجو"><Search/></button><a className="phoneLink" href="tel:+989133678359"><Phone/> ۰۹۱۳۳۶۷۸۳۵۹</a><a className="btn btnPrimary btnSmall" href="#quote">دریافت قیمت</a><button className="mobileMenu" aria-expanded={open} aria-label="بازکردن منو" onClick={() => setOpen(!open)}><Menu/></button></div>
      </div>
      <div className={`mobileDrawer ${open ? "isOpen" : ""}`}><div className="mobileDrawerInner">{catalog.map(node => <MenuBranch key={node.slug} node={node}/>)}<a href="#projects">پروژه‌ها</a><a href="#calculator">محاسبه‌گر آجر</a><a href="#contact">تماس با ما</a></div></div>
    </header>
  </>;
}
