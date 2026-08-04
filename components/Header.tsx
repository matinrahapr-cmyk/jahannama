"use client";

import { useState } from "react";
import { Menu, Search } from "./Icons";
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

  const closeMenus = () => {
    setOpen(false);
  };

  return <>
    <div className="topbar"><span>ارسال مستقیم از کارخانه به سراسر ایران</span><span><a href="tel:+989132675275">۰۹۱۳۲۶۷۵۲۷۵</a><i>•</i><a href="tel:+989132105303">۰۹۱۳۲۱۰۵۳۰۳</a></span></div>
    <header className="header">
      <div className="container headerInner">
        <a className="brand" href={sitePath("/")} aria-label="صفحه اصلی آجر جهان‌نما"><img src={sitePath("/images/jahan-nama-logo.png")} alt="نشان آجر جهان‌نما" width="56" height="56" fetchPriority="high"/></a>
        <nav className="nav productNav" aria-label="منوی اصلی">
          {catalog.map(node => <div className="catalogNavItem hasDropdown" key={node.slug}>
            <a href={catalogHref(node.slug)}>{node.name}{node.children?.length ? <span aria-hidden="true">⌄</span> : null}</a>
            {node.children?.length ? <div className={`catalogDropdown ${node.slug === "facade-brick" ? "wide" : ""}`}><MenuBranch node={node} onNavigate={closeMenus}/></div> : null}
          </div>)}
        </nav>
        <div className="headerActions"><button className="iconBtn" aria-label="جستجو"><Search/></button><a className="btn btnPrimary btnSmall" href={sitePath("/#quote")}>استعلام قیمت</a><button className="mobileMenu" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "بستن منو" : "بازکردن منو"} onClick={() => setOpen(!open)}><Menu/></button></div>
      </div>
      <div className={`mobileDrawer ${open ? "isOpen" : ""}`} id="mobile-navigation"><div className="mobileDrawerInner"><strong className="mobileProductsTitle">محصولات</strong>{catalog.map(node => node.children?.length ? <details key={node.slug}><summary>{node.name}</summary><MenuBranch node={node} onNavigate={closeMenus}/></details> : <a key={node.slug} href={catalogHref(node.slug)} onClick={closeMenus}>{node.name}</a>)}</div></div>
    </header>
  </>;
}
