const categories = [
  ['آجر نسوز','category-firebrick.webp'],['آجر قزاقی','category-qazaqi.webp'],['آجر سفید','category-white.webp'],
  ['آجر طوسی','category-gray.webp'],['آجر کف','category-floor.webp'],['آجر دکوراتیو','category-decorative.webp']
];
const products = [
  ['آجر نسوز قرمز AP33','JN-AP33','قرمز رستیک • ۷×۳۲','۸۹۰٬۰۰۰ تومان','پرفروش','category-firebrick.webp','#A83A2C'],
  ['آجر سفید صدفی','JN-W12','سفید مات • ۵.۵×۲۶','۱٬۱۲۰٬۰۰۰ تومان','معماری مدرن','category-white.webp','#E8E2D9'],
  ['آجر طوسی دودی','JN-G08','طوسی تیره • ۶×۲۶','۹۸۰٬۰۰۰ تومان','جدید','category-gray.webp','#77706E'],
  ['آجر قزاقی سنتی','JN-Q21','دست‌ساز • ۵.۵×۲۰','۷۶۰٬۰۰۰ تومان','اصیل','category-qazaqi.webp','#B56342']
];
document.querySelector('#categories').innerHTML = categories.map((c,i)=>`<a class="categoryCard cat${i+1}" href="#quote"><span class="categoryIndex">۰${i+1}</span><img class="categoryImage" src="assets/${c[1]}" alt="بافت ${c[0]} جهان‌نما" loading="lazy"><h3>${c[0]}</h3><p>مشاهده رنگ‌ها و ابعاد</p><span class="cardArrow">←</span></a>`).join('');
document.querySelector('#productGrid').innerHTML = products.map((p,i)=>`<article class="productCard"><div class="productVisual productVisual${i+1}"><span class="productBadge">${p[4]}</span><img src="assets/${p[5]}" alt="${p[0]}" loading="lazy"></div><div class="productBody"><div class="productTop"><span class="swatch" style="background:${p[6]}"></span><span>${p[2]}</span></div><h3>${p[0]}</h3><p class="sku">کد ${p[1]}</p><div class="price"><span>قیمت پایه هر مترمربع</span><strong>${p[3]}</strong></div><div class="productActions"><a class="btn btnPrimary btnSmall" href="#quote">استعلام قیمت</a></div></div></article>`).join('');

const fa = n => new Intl.NumberFormat('fa-IR').format(n);
function calculate(){const area=Math.max(0,Number(document.querySelector('#area').value)||0);const per=Number(document.querySelector('#brickType').value);const waste=Math.max(0,Number(document.querySelector('#waste').value)||0);document.querySelector('#calcOutput').textContent=`${fa(Math.ceil(area*per*(1+waste/100)))} قالب`;}
document.querySelector('#brickCalculator').addEventListener('input',calculate);
document.querySelector('#brickCalculator').addEventListener('submit',e=>{e.preventDefault();calculate();document.querySelector('#quote').scrollIntoView({behavior:'smooth'});});
document.querySelector('.mobileMenu').addEventListener('click',e=>{const open=document.body.classList.toggle('menuOpen');e.currentTarget.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.mobileNav a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menuOpen')));
document.querySelector('#quoteForm').addEventListener('submit',e=>{e.preventDefault();const msg=e.currentTarget.querySelector('.formMessage');msg.textContent='درخواست شما ثبت شد؛ این نسخه نمایشی است و ارسال نهایی پس از اتصال فرم فعال می‌شود.';msg.classList.add('successMessage');});
calculate();
