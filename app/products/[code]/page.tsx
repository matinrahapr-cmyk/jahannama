import { Header } from "@/components/Header";
import { ArrowLeft, Check, Phone } from "@/components/Icons";
import { storeProducts } from "@/lib/products";
import { withBasePath } from "@/lib/base-path";

export function generateStaticParams() {
  return storeProducts.map(product => ({ code: product.code.toLowerCase() }));
}

const categoryNames = {
  facade: "آجر نما",
  kiln: "آجر کوره",
  floor: "آجر کف",
  ordinary: "آجر معمولی",
  accessories: "مصالح جانبی",
};

export default async function ProductPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const product = storeProducts.find(item => item.code.toLowerCase() === code.toLowerCase());

  if (!product) {
    return <main><Header/><section className="section"><div className="container emptyProduct"><h1>محصول پیدا نشد</h1><a className="btn btnPrimary" href={withBasePath("/#store-products")}>بازگشت به محصولات</a></div></section></main>;
  }

  return <main>
    <Header/>
    <section className="productDetailSection">
      <div className="container">
        <nav className="productBreadcrumb" aria-label="مسیر صفحه">
          <a href={withBasePath("/")}>صفحه اصلی</a><span>←</span><a href={withBasePath("/#store-products")}>محصولات</a><span>←</span><span>{product.name}</span>
        </nav>
        <div className="productDetailGrid">
          <div className="productDetailGallery"><div className="productMainImage"><img src={product.image} alt={product.name}/><span className="detailStatus">{product.status}</span></div></div>
          <article className="productDetailInfo">
            <span className="eyebrow">{categoryNames[product.category]}</span>
            <h1>{product.name}</h1>
            <p className="detailCode">کد محصول: <b>{product.code}</b></p>
            <p className="detailIntro">این محصول از مجموعه آجر جهان‌نما برای اجرای نما و پروژه‌های ساختمانی عرضه می‌شود. برای بررسی موجودی، قیمت روز و انتخاب مقدار مناسب با دفتر فروش تماس بگیرید.</p>
            <dl className="detailSpecs">
              <div><dt>رنگ</dt><dd>{product.color}</dd></div><div><dt>ابعاد</dt><dd>{product.size}</dd></div>
              <div><dt>دسته‌بندی</dt><dd>{categoryNames[product.category]}</dd></div><div><dt>وضعیت</dt><dd>{product.status}</dd></div>
            </dl>
            <div className="detailBenefits"><span><Check/> مشاوره انتخاب محصول</span><span><Check/> ارسال سراسری</span><span><Check/> تأمین مستقیم پروژه</span></div>
            <div className="detailActions">
              <a className="btn btnPrimary" href={withBasePath("/#quote")}>استعلام قیمت این محصول <ArrowLeft/></a>
              <a className="btn btnSecondary" href="tel:+989133678359"><Phone/> تماس با فروش</a>
            </div>
            <small className="detailNotice">قیمت براساس مقدار سفارش، مقصد ارسال و موجودی روز اعلام می‌شود.</small>
          </article>
        </div>
        <div className="backToProducts"><a className="textLink" href={withBasePath("/#store-products")}>بازگشت به همه محصولات <ArrowLeft/></a></div>
      </div>
    </section>
  </main>;
}
