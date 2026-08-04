import { Header } from "@/components/Header";
import { ArrowLeft, Check, Phone } from "@/components/Icons";
import { ProductShowcase } from "@/components/ProductShowcase";
import { catalog, refractorySizes } from "@/lib/catalog";
import { catalogHref } from "@/lib/products";
import { sitePath } from "@/lib/paths";

const cats = [
  {name:"آجر نما",count:"۱۶ مدل",description:"نسوز، قزاقی، دکوراتیو، رستیک، لعابی، سنتی و رسی",image:sitePath("/images/generated/category-firebrick.png"),filter:"facade"},
  {name:"آجر کوره",count:"۴ مدل",description:"آجرهای صنعتی مقاوم در برابر حرارت بالا",image:sitePath("/images/products/pa-f02.webp"),filter:"kiln"},
  {name:"آجر کف",count:"۳ مدل",description:"کف‌فرش مقاوم برای حیاط و فضای معماری",image:sitePath("/images/generated/category-floor.png"),filter:"floor"},
  {name:"آجر معمولی",count:"۶ مدل",description:"لفتون، فشاری و سفال برای دیوارچینی و سازه",image:sitePath("/images/products/pa-w01.webp"),filter:"ordinary"},
  {name:"مصالح جانبی",count:"۵ مدل",description:"بندکشی، چسب، نانو، شوینده و اسپیسر",image:sitePath("/images/products/pa-r02.webp"),filter:"accessories"}
];

export default function Home() {
  return <main>
    <Header/>
    <section className="hero">
      <div className="container heroGrid">
        <div className="heroContent"><span className="eyebrow">خرید مستقیم از کارخانه</span><h1>آجر برای ساختمان‌هایی که <em>ماندگار می‌شوند.</em></h1><p>مجموعه تخصصی آجر جهان‌نما برای معماران، سازندگان و پروژه‌های شاخص؛ همراه با راهنمای انتخاب، کنترل کیفیت و ارسال مستقیم به سراسر ایران.</p><div className="heroCtas"><a className="btn btnPrimary" href="#quote">دریافت استعلام قیمت <ArrowLeft/></a><a className="btn btnSecondary" href="#products">مشاهده محصولات</a></div><div className="heroTrust"><span><Check/> تضمین کیفیت</span><span><Check/> نمونه واقعی</span><span><Check/> ارسال سراسری</span></div></div>
        <div className="heroVisual"><div className="heroPanel"><img className="heroScene" src={sitePath("/images/generated/hero-brick-villa.png")} alt="ویلای معاصر با نمای آجر نسوز جهان‌نما"/><img className="heroLogo" src={sitePath("/images/jahan-nama-logo.png")} alt="نشان آجر جهان‌نما" width="112" height="112"/><div className="floatingCard"><small>محصول منتخب معماران</small><strong>آجر نسوز قرمز رستیک</strong><span>بافت طبیعی • مقاوم در برابر یخبندان</span></div></div><div className="heroStat"><strong>+۱۸</strong><span>سال تجربه در تولید آجر نما</span></div></div>
      </div>
    </section>

    <section className="section" id="products"><div className="container"><div className="sectionHead"><div><span className="eyebrow">انتخاب براساس کاربرد</span><h2>دسته‌بندی محصولات</h2></div><a className="textLink" href="#store-products">مشاهده همه محصولات <ArrowLeft/></a></div><div className="categoryGrid referenceCategories">{cats.map((c,i)=><a className={`categoryCard cat${i+1}`} href={`#cat-${catalog[i].slug}`} key={c.name}><span className="categoryIndex">۰{i+1}</span><img className="categoryImage" src={c.image} alt={c.name} loading="lazy"/><span className="categoryCount">{c.count}</span><h3>{c.name}</h3><p>{c.description}</p><b>مشاهده محصولات <ArrowLeft/></b></a>)}</div></div></section>

    <section className="section catalogSection" id="catalog"><div className="container"><div className="sectionHead"><div><span className="eyebrow">فهرست کامل فروشگاه</span><h2>همه دسته‌ها، دقیق و مرتب</h2></div><p className="sectionNote">برای دریافت موجودی و قیمت روز با دفتر فروش تماس بگیرید.</p></div><div className="catalogGrid">{catalog.map((group,index)=><article className="catalogGroup" id={`cat-${group.slug}`} key={group.slug}><span className="catalogNumber">۰{index+1}</span><h3>{group.name}</h3>{group.children?.map(child=><div className="catalogChild" id={`cat-${child.slug}`} key={child.slug}><strong><a href={catalogHref(child.slug)}>{child.name}</a></strong>{child.children?.length ? <div className="catalogTags">{child.children.map(item=><a id={`cat-${item.slug}`} href={catalogHref(item.slug)} key={item.slug}>{item.name}</a>)}</div>:null}{child.slug === "refractory-brick" && <div className="sizeBlock"><small>ابعاد آجر نسوز</small><div>{refractorySizes.map(size=><span key={size}>{size}</span>)}</div></div>}</div>)}</article>)}</div></div></section>

    <ProductShowcase/>

    <section className="section productionSection"><div className="container"><div className="sectionHead"><div><span className="eyebrow">همراهی تخصصی از آغاز تا تولید</span><h2>راه‌اندازی خط تولید آجر، از ایده تا بهره‌برداری</h2></div></div><div className="processGrid"><article><span>۰۱</span><h3>بررسی و طراحی</h3><p>ارزیابی ظرفیت، مواد اولیه، فضای کارخانه و طراحی مسیر مناسب تولید.</p></article><article><span>۰۲</span><h3>تأمین و راه‌اندازی</h3><p>انتخاب تجهیزات، نصب خط و هماهنگی مراحل اجرا با نیاز واقعی پروژه.</p></article><article><span>۰۳</span><h3>آموزش و بهره‌برداری</h3><p>آموزش تیم، کنترل آزمایشی تولید و همراهی تا رسیدن به خروجی پایدار.</p></article></div></div></section>

    <section className="section whySection"><div className="container"><div className="sectionHead"><div><span className="eyebrow">انتخاب مطمئن برای پروژه</span><h2>چرا آجر جهان‌نما؟</h2></div></div><div className="whyGrid"><article><Check/><h3>راهنمای انتخاب</h3><p>انتخاب نوع، رنگ و ابعاد مناسب بر اساس سبک معماری و شرایط پروژه.</p></article><article><Check/><h3>کنترل کیفیت</h3><p>بررسی کیفیت محصول پیش از بارگیری برای حفظ یکدستی سفارش.</p></article><article><Check/><h3>ارسال مطمئن</h3><p>هماهنگی حمل مستقیم از کارخانه و پیگیری ارسال تا مقصد پروژه.</p></article></div></div></section>

    <section className="section quoteSection" id="quote"><div className="container contactCta"><div><span className="eyebrow">مشاوره و استعلام</span><h2>برای استعلام قیمت و دریافت نمونه تماس بگیرید</h2><p>کارشناسان فروش جهان‌نما برای انتخاب محصول مناسب پروژه همراه شما هستند.</p></div><div className="contactNumbers"><Phone/><div><a href="tel:+989132675275"><strong>۰۹۱۳۲۶۷۵۲۷۵</strong></a><a href="tel:+989132105303">۰۹۱۳۲۱۰۵۳۰۳</a></div></div></div></section>

    <footer className="footer" id="contact"><div className="container footerGrid"><div className="footerBrand"><img src={sitePath("/images/jahan-nama-full-logo.png")} alt="نشان کامل آجر جهان‌نما" width="189" height="142" loading="lazy"/><p>تولید و عرضه مستقیم آجر نما برای پروژه‌های معماری و ساختمانی در سراسر ایران.</p></div><div><h4>محصولات</h4>{cats.slice(0,4).map((c,i)=><a href={`#cat-${catalog[i].slug}`} key={c.name}>{c.name}</a>)}</div><div><h4>دسترسی سریع</h4><a href="#products">دسته‌بندی محصولات</a><a href="#store-products">کاتالوگ محصولات</a><a href="#quote">استعلام قیمت</a></div><div><h4>ارتباط با ما</h4><p>شنبه تا پنجشنبه، ۸ تا ۱۸</p><a href="tel:+989132675275">۰۹۱۳۲۶۷۵۲۷۵</a><a href="tel:+989132105303">۰۹۱۳۲۱۰۵۳۰۳</a></div></div><div className="container footerBottom"><span>© ۱۴۰۵ آجر جهان‌نما</span><span>فروش مستقیم از کارخانه</span></div></footer>
    <a className="whatsapp" href="https://wa.me/989132675275" target="_blank" rel="noopener noreferrer" aria-label="مشاوره واتساپی با آجر جهان‌نما">WA</a>
  </main>;
}
