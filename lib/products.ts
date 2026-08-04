import { sitePath } from "./paths";

export type StoreProduct = {
  name: string;
  code: string;
  category: "facade" | "kiln" | "floor" | "ordinary" | "accessories";
  subcategory: string;
  color: string;
  size: string;
  status: string;
  image: string;
};

const img = (name: string) => sitePath(`/images/products/${name}.webp`);

export const storeProducts: StoreProduct[] = [
  {name:"آجر نسوز انگلیسی ۷×۳۱",code:"JN-F01",category:"facade",subcategory:"english-brick",color:"رندوم انگلیسی",size:"۷ × ۳۱",status:"پرفروش",image:img("pa-m01")},
  {name:"آجر نسوز شاموتی ۸×۴۰",code:"JN-F02",category:"facade",subcategory:"chamotte-brick",color:"شاموتی",size:"۸ × ۴۰",status:"موجود",image:img("pa-m03")},
  {name:"آجر سفید ۱۰×۶۰",code:"JN-F03",category:"facade",subcategory:"white-brick",color:"سفید",size:"۱۰ × ۶۰",status:"موجود",image:img("pa-m04")},
  {name:"آجر طوسی ۲۰×۸۰",code:"JN-F04",category:"facade",subcategory:"gray-brick",color:"طوسی",size:"۲۰ × ۸۰",status:"سفارشی",image:img("pa-t08")},
  {name:"آجر قهوه‌ای ۱۲×۱۰۰",code:"JN-F05",category:"facade",subcategory:"brown-brick",color:"قهوه‌ای",size:"۱۲ × ۱۰۰",status:"سفارشی",image:img("pa-i03")},
  {name:"آجر مشکی",code:"JN-F06",category:"facade",subcategory:"black-brick",color:"مشکی",size:"۷ × ۳۱",status:"موجود",image:img("pa-m05")},
  {name:"آجر شومینه",code:"JN-F07",category:"facade",subcategory:"fireplace-brick",color:"شاموتی",size:"۶٫۵ × ۱۱ × ۲۳",status:"موجود",image:img("pa-f01")},
  {name:"آجر کرکره‌ای",code:"JN-F08",category:"facade",subcategory:"shutter-brick",color:"رستیک",size:"۵ × ۳۱",status:"موجود",image:img("pa-i03")},
  {name:"آجر تایل",code:"JN-F09",category:"facade",subcategory:"tile-brick",color:"تنوع رنگ",size:"۱۰ × ۶۰",status:"موجود",image:img("pa-m07")},
  {name:"آجر قزاقی زرد",code:"JN-F10",category:"facade",subcategory:"qazagi-brick",color:"زرد",size:"۵٫۵ × ۱۰ × ۲۰",status:"موجود",image:img("pa-t01")},
  {name:"آجر قزاقی قرمز",code:"JN-F11",category:"facade",subcategory:"qazagi-brick",color:"قرمز اخرا",size:"۵٫۵ × ۱۰ × ۲۰",status:"موجود",image:img("pa-t02")},
  {name:"آجر دکوراتیو",code:"JN-F12",category:"facade",subcategory:"decorative-brick",color:"ترکیبی",size:"۶ × ۲۴",status:"موجود",image:img("pa-i01")},
  {name:"آجر رستیک",code:"JN-F13",category:"facade",subcategory:"rustic-brick",color:"رستیک قرمز",size:"۷ × ۳۱",status:"موجود",image:img("pa-i04")},
  {name:"آجر لعابی",code:"JN-F14",category:"facade",subcategory:"glazed-brick",color:"کله‌غازی",size:"۱۰ × ۲۰",status:"سفارشی",image:img("pa-m10")},
  {name:"آجر سنتی خشت دستی",code:"JN-F15",category:"facade",subcategory:"traditional-brick",color:"انگلیسی",size:"۱۰ × ۲۰",status:"موجود",image:img("pa-t04")},
  {name:"آجر رسی نما",code:"JN-F16",category:"facade",subcategory:"clay-brick",color:"قرمز رسی",size:"۷ × ۳۱",status:"موجود",image:img("pa-t05")},
  {name:"آجر کوره شاموتی",code:"JN-K01",category:"kiln",subcategory:"kiln-brick",color:"شاموتی",size:"۶٫۵ × ۱۱ × ۲۳",status:"استعلام",image:img("pa-f01")},
  {name:"آجر کوره سیلیسی",code:"JN-K02",category:"kiln",subcategory:"kiln-brick",color:"کرم روشن",size:"استاندارد کوره",status:"استعلام",image:img("pa-f02")},
  {name:"آجر کوره آلومینایی",code:"JN-K03",category:"kiln",subcategory:"kiln-brick",color:"کرم صنعتی",size:"سفارشی",status:"سفارشی",image:img("pa-f03")},
  {name:"آجر کوره منیزیتی",code:"JN-K04",category:"kiln",subcategory:"kiln-brick",color:"خاکستری",size:"سفارشی",status:"استعلام",image:img("pa-f04")},
  {name:"آجر کف قزاقی",code:"JN-L01",category:"floor",subcategory:"floor-brick",color:"زرد سنتی",size:"۲۰ × ۲۰",status:"موجود",image:img("pa-m11")},
  {name:"آجر کف نسوز",code:"JN-L02",category:"floor",subcategory:"floor-brick",color:"شاموتی",size:"۱۰ × ۲۰",status:"موجود",image:img("pa-t10")},
  {name:"آجر کف رستیک",code:"JN-L03",category:"floor",subcategory:"floor-brick",color:"رندوم قرمز",size:"۲۰ × ۲۰",status:"موجود",image:img("pa-t09")},
  {name:"آجر لفتون زرد",code:"JN-O01",category:"ordinary",subcategory:"yellow-lofton-brick",color:"زرد",size:"۵٫۵ × ۱۰ × ۲۱",status:"موجود",image:img("pa-w01")},
  {name:"آجر لفتون قرمز",code:"JN-O02",category:"ordinary",subcategory:"red-lofton-brick",color:"قرمز",size:"۵٫۵ × ۱۰ × ۲۱",status:"موجود",image:img("pa-w02")},
  {name:"آجر فشاری",code:"JN-O03",category:"ordinary",subcategory:"pressed-brick",color:"قرمز",size:"۵ × ۱۰ × ۲۰",status:"موجود",image:img("pa-w04")},
  {name:"آجر سفال ۷",code:"JN-O04",category:"ordinary",subcategory:"clay-block",color:"سفالی",size:"۷ × ۲۰ × ۲۰",status:"موجود",image:img("pa-w07")},
  {name:"آجر سفال ۱۰",code:"JN-O05",category:"ordinary",subcategory:"clay-block",color:"سفالی",size:"۱۰ × ۲۰ × ۲۰",status:"موجود",image:img("pa-w06")},
  {name:"آجر سفال ۱۵",code:"JN-O06",category:"ordinary",subcategory:"clay-block",color:"سفالی",size:"۱۵ × ۲۰ × ۲۰",status:"موجود",image:img("pa-w05")},
  {name:"پودر بندکشی آجر",code:"JN-A01",category:"accessories",subcategory:"brick-grout",color:"تنوع رنگ",size:"کیسه‌ای",status:"موجود",image:img("pa-r02")},
  {name:"چسب آجر",code:"JN-A02",category:"accessories",subcategory:"brick-adhesive",color:"خاکستری",size:"بسته‌بندی پروژه‌ای",status:"موجود",image:img("pa-r01")},
  {name:"نانو آجر",code:"JN-A03",category:"accessories",subcategory:"brick-nano-coating",color:"شفاف",size:"گالن",status:"استعلام",image:img("pa-r01")},
  {name:"محلول شستشوی آجر نما",code:"JN-A04",category:"accessories",subcategory:"brick-cleaner",color:"شفاف",size:"گالن",status:"موجود",image:img("pa-r02")},
  {name:"اسپیسر آجر نما",code:"JN-A05",category:"accessories",subcategory:"brick-spacer",color:"سفید",size:"بسته ۱۰۰ عددی",status:"موجود",image:img("pa-m12")}
];

export const productCategories = [
  {key:"all", label:"همه محصولات"},
  {key:"facade", label:"آجر نما"},
  {key:"kiln", label:"آجر کوره"},
  {key:"floor", label:"آجر کف"},
  {key:"ordinary", label:"آجر معمولی"},
  {key:"accessories", label:"مصالح جانبی"}
] as const;

export const catalogProductCodes: Record<string, string> = {
  "english-brick": "JN-F01",
  "chamotte-brick": "JN-F02",
  "white-brick": "JN-F03",
  "gray-brick": "JN-F04",
  "brown-brick": "JN-F05",
  "black-brick": "JN-F06",
  "fireplace-brick": "JN-F07",
  "shutter-brick": "JN-F08",
  "tile-brick": "JN-F09",
  "qazagi-brick": "JN-F10",
  "decorative-brick": "JN-F12",
  "rustic-brick": "JN-F13",
  "glazed-brick": "JN-F14",
  "traditional-brick": "JN-F15",
  "clay-brick": "JN-F16",
  "yellow-lofton-brick": "JN-O01",
  "red-lofton-brick": "JN-O02",
  "pressed-brick": "JN-O03",
  "clay-block": "JN-O04",
  "brick-grout": "JN-A01",
  "brick-adhesive": "JN-A02",
  "brick-nano-coating": "JN-A03",
  "brick-cleaner": "JN-A04",
  "brick-spacer": "JN-A05",
};

export function productHref(code: string) {
  return sitePath(`/products/${code.toLowerCase()}/`);
}

export function catalogHref(slug: string) {
  const code = catalogProductCodes[slug];
  return code ? productHref(code) : sitePath(`/?category=${slug}#store-products`);
}
