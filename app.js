const n=id=>parseFloat(document.getElementById(id).value);const tl=x=>new Intl.NumberFormat("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2}).format(x);
function out(id,s){document.getElementById(id).innerHTML=s}
function valid(...a){return a.every(Number.isFinite)}
function kdvEkle(){let t=n("kdvTutar"),o=n("kdvOran");if(!valid(t,o))return out("kdvSonuc","Lütfen tutar ve oran gir.");let k=t*o/100;out("kdvSonuc",`KDV: ₺${tl(k)}<br>KDV dahil: ₺${tl(t+k)}`)}
function kdvCikar(){let t=n("kdvTutar"),o=n("kdvOran");if(!valid(t,o)||o<=-100)return out("kdvSonuc","Geçerli değer gir.");let net=t/(1+o/100),k=t-net;out("kdvSonuc",`KDV hariç: ₺${tl(net)}<br>KDV: ₺${tl(k)}`)}
function karHesapla(){let m=n("maliyet"),o=n("karOran");if(!valid(m,o))return out("karSonuc","Geçerli değer gir.");let k=m*o/100;out("karSonuc",`Kâr: ₺${tl(k)}<br>Satış fiyatı: ₺${tl(m+k)}`)}
function indirim(){let f=n("indFiyat"),o=n("indOran");if(!valid(f,o))return out("indSonuc","Geçerli değer gir.");let i=f*o/100;out("indSonuc",`İndirim: ₺${tl(i)}<br>Yeni fiyat: ₺${tl(f-i)}`)}
function zam(){let f=n("zamFiyat"),o=n("zamOran");if(!valid(f,o))return out("zamSonuc","Geçerli değer gir.");let z=f*o/100;out("zamSonuc",`Artış: ₺${tl(z)}<br>Yeni tutar: ₺${tl(f+z)}`)}
function yuzde(){let s=n("yuzdeSayi"),o=n("yuzdeOran");if(!valid(s,o))return out("yuzdeSonuc","Geçerli değer gir.");out("yuzdeSonuc",`Sonuç: ${tl(s*o/100)}`)}
function desi(){let a=n("en"),b=n("boy"),c=n("yuk");if(!valid(a,b,c))return out("desiSonuc","Üç ölçüyü de gir.");out("desiSonuc",`Desi: ${tl(a*b*c/3000)}`)}
function taksit(){let t=n("taksitTutar"),s=n("taksitSay");if(!valid(t,s)||s<1)return out("taksitSonuc","Geçerli değer gir.");out("taksitSonuc",`${Math.floor(s)} taksit × ₺${tl(t/Math.floor(s))}`)}
function say(){let t=document.getElementById("metin").value;let k=t.trim()?t.trim().split(/\s+/).length:0;out("metinSonuc",`${k} kelime • ${t.length} karakter`)}
document.getElementById("year").textContent=new Date().getFullYear();