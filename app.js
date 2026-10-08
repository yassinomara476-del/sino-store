const products=[{"slug":"youtube-premium","product":"YouTube Premium","months":1,"price":111,"price7":106,"price8":107,"price9":108,"price10":109,"active":true},{"slug":"youtube-premium","product":"YouTube Premium","months":3,"price":335,"price7":320,"price8":323,"price9":326,"price10":329,"active":true},{"slug":"youtube-premium","product":"YouTube Premium","months":6,"price":671,"price7":641,"price8":647,"price9":653,"price10":659,"active":true},{"slug":"youtube-premium","product":"YouTube Premium","months":12,"price":1300,"price7":1242,"price8":1253,"price9":1265,"price10":1276,"active":true},{"slug":"spotify-premium","product":"Spotify Premium","months":1,"price":111,"price7":106,"price8":107,"price9":108,"price10":109,"active":true},{"slug":"spotify-premium","product":"Spotify Premium","months":3,"price":335,"price7":320,"price8":323,"price9":326,"price10":329,"active":true},{"slug":"spotify-premium","product":"Spotify Premium","months":6,"price":649,"price7":620,"price8":626,"price9":632,"price10":637,"active":true},{"slug":"spotify-premium","product":"Spotify Premium","months":12,"price":1276,"price7":1219,"price8":1231,"price9":1242,"price10":1253,"active":true},{"slug":"netflix","product":"Netflix Premium","months":1,"price":335,"price7":320,"price8":323,"price9":326,"price10":329,"active":true},{"slug":"netflix","product":"Netflix Premium","months":3,"price":1007,"price7":962,"price8":971,"price9":980,"price10":989,"active":true},{"slug":"netflix","product":"Netflix Premium","months":6,"price":2015,"price7":1925,"price8":1943,"price9":1961,"price10":1979,"active":true},{"slug":"netflix","product":"Netflix Premium","months":12,"price":4020,"price7":3841,"price8":3877,"price9":3913,"price10":3948,"active":true},{"slug":"chatgpt-plus","product":"ChatGPT Plus","months":1,"price":1623,"price7":1551,"price8":1565,"price9":1580,"price10":1594,"active":true},{"slug":"chatgpt-plus","product":"ChatGPT Plus","months":3,"price":3247,"price7":3102,"price8":3131,"price9":3160,"price10":3189,"active":true},{"slug":"chatgpt-plus","product":"ChatGPT Plus","months":6,"price":6495,"price7":6205,"price8":6263,"price9":6321,"price10":6379,"active":true},{"slug":"chatgpt-plus","product":"ChatGPT Plus","months":12,"price":12991,"price7":12411,"price8":12527,"price9":12643,"price10":12759,"active":true},{"slug":"discord-nitro","product":"Discord Nitro","months":1,"price":391,"price7":374,"price8":377,"price9":381,"price10":384,"active":true},{"slug":"discord-nitro","product":"Discord Nitro","months":3,"price":1175,"price7":1123,"price8":1133,"price9":1144,"price10":1154,"active":true},{"slug":"discord-nitro","product":"Discord Nitro","months":6,"price":2351,"price7":2246,"price8":2267,"price9":2288,"price10":2309,"active":true},{"slug":"discord-nitro","product":"Discord Nitro","months":12,"price":4703,"price7":4493,"price8":4535,"price9":4577,"price10":4619,"active":true},{"slug":"shahid-vip","product":"Shahid VIP","months":1,"price":223,"price7":213,"price8":215,"price9":217,"price10":219,"active":true},{"slug":"shahid-vip","product":"Shahid VIP","months":3,"price":671,"price7":641,"price8":647,"price9":653,"price10":659,"active":true},{"slug":"shahid-vip","product":"Shahid VIP","months":6,"price":1343,"price7":1283,"price8":1295,"price9":1307,"price10":1319,"active":true},{"slug":"shahid-vip","product":"Shahid VIP","months":12,"price":2676,"price7":2557,"price8":2581,"price9":2605,"price10":2628,"active":true},{"slug":"xbox-game-pass","product":"Xbox Game Pass Ultimate","months":1,"price":279,"price7":267,"price8":269,"price9":272,"price10":274,"active":true},{"slug":"xbox-game-pass","product":"Xbox Game Pass Ultimate","months":3,"price":839,"price7":802,"price8":809,"price9":817,"price10":824,"active":true},{"slug":"xbox-game-pass","product":"Xbox Game Pass Ultimate","months":6,"price":1679,"price7":1604,"price8":1619,"price9":1634,"price10":1649,"active":true},{"slug":"xbox-game-pass","product":"Xbox Game Pass Ultimate","months":12,"price":3359,"price7":3209,"price8":3239,"price9":3269,"price10":3299,"active":true},{"slug":"playstation-plus","product":"PlayStation Plus \"deluxe\"","months":1,"price":897,"price7":856,"price8":864,"price9":873,"price10":881,"active":true},{"slug":"playstation-plus","product":"PlayStation Plus \"deluxe\"","months":3,"price":2575,"price7":2460,"price8":2483,"price9":2506,"price10":2529,"active":true},{"slug":"playstation-plus","product":"PlayStation Plus \"deluxe\"","months":6,"price":5153,"price7":4922,"price8":4968,"price9":5014,"price10":5060,"active":true},{"slug":"playstation-plus","product":"PlayStation Plus \"deluxe\"","months":12,"price":7145,"price7":6826,"price8":6890,"price9":6954,"price10":7017,"active":true},{"slug":"canva-pro","product":"Canva Pro","months":1,"price":335,"price7":320,"price8":323,"price9":326,"price10":329,"active":true},{"slug":"canva-pro","product":"Canva Pro","months":3,"price":1007,"price7":962,"price8":971,"price9":980,"price10":989,"active":true},{"slug":"canva-pro","product":"Canva Pro","months":6,"price":2015,"price7":1925,"price8":1943,"price9":1961,"price10":1979,"active":true},{"slug":"canva-pro","product":"Canva Pro","months":12,"price":2239,"price7":2139,"price8":2159,"price9":2179,"price10":2199,"active":true},{"slug":"apple-music","product":"Apple Music","months":1,"price":140,"price7":134,"price8":135,"price9":137,"price10":138,"active":true},{"slug":"apple-music","product":"Apple Music","months":3,"price":393,"price7":375,"price8":378,"price9":382,"price10":386,"active":true},{"slug":"apple-music","product":"Apple Music","months":6,"price":785,"price7":749,"price8":756,"price9":763,"price10":771,"active":true},{"slug":"apple-music","product":"Apple Music","months":12,"price":1569,"price7":1498,"price8":1512,"price9":1526,"price10":1541,"active":true},{"slug":"snapchat-plus","product":"Snapchat+  annual plan","months":1,"price":134,"price7":128,"price8":129,"price9":130,"price10":131,"active":true},{"slug":"snapchat-plus","product":"Snapchat+  annual plan","months":3,"price":403,"price7":385,"price8":388,"price9":392,"price10":395,"active":true},{"slug":"snapchat-plus","product":"Snapchat+  annual plan","months":6,"price":806,"price7":770,"price8":777,"price9":784,"price10":791,"active":true},{"slug":"snapchat-plus","product":"Snapchat+  annual plan","months":12,"price":1612,"price7":1540,"price8":1555,"price9":1569,"price10":1583,"active":true},{"slug":"x-premium","product":"X Premium","months":1,"price":225,"price7":214,"price8":216,"price9":219,"price10":221,"active":true},{"slug":"x-premium","product":"X Premium","months":3,"price":639,"price7":610,"price8":616,"price9":622,"price10":627,"active":true},{"slug":"x-premium","product":"X Premium","months":6,"price":1233,"price7":1177,"price8":1188,"price9":1199,"price10":1210,"active":true},{"slug":"x-premium","product":"X Premium","months":12,"price":2352,"price7":2247,"price8":2268,"price9":2289,"price10":2310,"active":true},{"slug":"iptv-smarter-pro","product":"IPTV smarter pro ","months":12,"price":559,"price7":534,"price8":539,"price9":544,"price10":549,"active":true},{"slug":"iptv-smarter-pro","product":"IPTV smarter pro ","months":24,"price":1119,"price7":1069,"price8":1079,"price9":1089,"price10":1099,"active":true},{"slug":"iptv-smarter-pro","product":"IPTV smarter pro ","months":36,"price":1679,"price7":1604,"price8":1619,"price9":1634,"price10":1649,"active":true},{"slug":"pubg-uc","product":"PUBG Mobile UC","package":"60 UC","uc":60,"base":70,"price":79,"active":true},{"slug":"pubg-uc","product":"PUBG Mobile UC","package":"325 UC","uc":325,"base":265,"price":297,"active":true},{"slug":"pubg-uc","product":"PUBG Mobile UC","package":"385 UC","uc":385,"base":335,"price":376,"active":true},{"slug":"pubg-uc","product":"PUBG Mobile UC","package":"660 UC","uc":660,"base":510,"price":572,"active":true},{"slug":"pubg-uc","product":"PUBG Mobile UC","package":"720 UC","uc":720,"base":580,"price":650,"active":true},{"slug":"pubg-uc","product":"PUBG Mobile UC","package":"1045 UC","uc":1045,"base":880,"price":986,"active":true},{"slug":"pubg-uc","product":"PUBG Mobile UC","package":"1800 UC","uc":1800,"base":1350,"price":1513,"active":true},{"slug":"pubg-uc","product":"PUBG Mobile UC","package":"3850 UC","uc":3850,"base":2450,"price":2745,"active":true},{"slug":"pubg-uc","product":"PUBG Mobile UC","package":"8100 UC","uc":8100,"base":4750,"price":5321,"active":true},{"slug":"pubg-uc","product":"PUBG Mobile UC","package":"16200 UC","uc":16200,"base":9500,"price":10641,"active":true}];
let lang="ar";
let cart=JSON.parse(localStorage.getItem("sino-cart")||"[]");

const logoMap={
"youtube-premium":"https://cdn.simpleicons.org/youtube",
"spotify-premium":"https://cdn.simpleicons.org/spotify",
"netflix":"https://cdn.simpleicons.org/netflix",
"chatgpt-plus":"https://cdn.simpleicons.org/openai",
"discord-nitro":"https://cdn.simpleicons.org/discord",
"shahid-vip":"https://cdn.simpleicons.org/shahid",
"xbox-game-pass":"https://cdn.simpleicons.org/xbox",
"playstation-plus":"https://cdn.simpleicons.org/playstation",
"canva-pro":"https://cdn.simpleicons.org/canva",
"apple-music":"https://cdn.simpleicons.org/applemusic",
"snapchat-plus":"https://cdn.simpleicons.org/snapchat",
"x-premium":"https://cdn.simpleicons.org/x",
"iptv-smarter-pro":"https://cdn.simpleicons.org/plex",
"pubg-uc":"https://cdn.simpleicons.org/pubg"
};

const bundles=[
{name:"Entertainment Pack",ar:"باقة الترفيه",items:["Netflix Premium","YouTube Premium","Spotify Premium","Shahid VIP"],emoji:"🎬"},
{name:"Gaming Pack",ar:"باقة الألعاب",items:["Xbox Game Pass Ultimate","Discord Nitro","PlayStation Plus \"deluxe\""],emoji:"🎮"},
{name:"AI & Creator Pack",ar:"باقة الذكاء وصناعة المحتوى",items:["ChatGPT Plus","Canva Pro"],emoji:"✨"}
];

function money(n){return new Intl.NumberFormat("ar-EG").format(n)+" EGP";}
function icon(slug){return logoMap[slug]||"";}
function groupProducts(list, slugFilter){
  const map={};
  for(const p of list){
    if(slugFilter && p.slug!==slugFilter) continue;
    const key=p.slug;
    if(!map[key]) map[key]=[];
    map[key].push(p);
  }
  return Object.values(map);
}
function productCard(group,index,prefix){
  const p=group[0];
  const options=group.map(function(v,j){
    return "<option value='"+j+"'>"+(v.months?v.months+" Month":v.package)+"</option>";
  }).join("");
  const img=icon(p.slug)?'<img src="'+icon(p.slug)+'" alt="" loading="lazy" onerror="this.style.display=\'none\'">':"";
  return '<article class="card premium-card">'+
    '<div class="service-logo">'+img+'<span class="fallback">'+p.product.charAt(0)+'</span></div>'+
    '<h3>'+p.product+'</h3>'+
    '<p class="muted">'+(p.slug==="pubg-uc"?"شحن شدات PUBG عبر Player ID":"اختار المدة المناسبة لك")+'</p>'+
    '<select id="'+prefix+'-v-'+index+'" onchange="changePrice(\''+prefix+'\','+index+')">'+options+'</select>'+
    '<div class="card-price"><strong id="'+prefix+'-p-'+index+'">'+money(p.price)+'</strong><span> EGP</span></div>'+
    '<button class="primary" onclick="addToCart(\''+prefix+'\','+index+')">أضف للسلة</button>'+
    '</article>';
}
let subGroups=[],pubgGroups=[];
function renderAll(filter){
  const q=(filter||"").toLowerCase();
  subGroups=groupProducts(products.filter(function(p){return p.active && p.slug!=="pubg-uc" && p.product.toLowerCase().indexOf(q)>=0;}));
  pubgGroups=groupProducts(products.filter(function(p){return p.active && p.slug==="pubg-uc";}));
  const sub=document.getElementById("subscriptionProducts"); if(sub) sub.innerHTML=subGroups.map(function(g,i){return productCard(g,i,"sub");}).join("");
  const pg=document.getElementById("pubgProducts"); if(pg) pg.innerHTML=pubgGroups.map(function(g,i){return productCard(g,i,"pubg");}).join("");
}
function getGroup(prefix,i){return prefix==="pubg"?pubgGroups[i]:subGroups[i];}
function changePrice(prefix,i){
  const g=getGroup(prefix,i);
  const idx=Number(document.getElementById(prefix+"-v-"+i).value);
  document.getElementById(prefix+"-p-"+i).textContent=money(g[idx].price);
}
function addToCart(prefix,i){
  const g=getGroup(prefix,i);
  const idx=Number(document.getElementById(prefix+"-v-"+i).value);
  cart.push(g[idx]);
  saveCart();
  openCart();
}
function saveCart(){localStorage.setItem("sino-cart",JSON.stringify(cart));renderCart();}
function renderCart(){
  const count=document.getElementById("cartCount"); if(count) count.textContent=cart.length;
  const wrap=document.getElementById("cartItems");
  if(!wrap)return;
  wrap.innerHTML=cart.length?cart.map(function(p,i){
    return '<div class="cart-row"><div><b>'+p.product+'</b><small>'+(p.months?(p.months+" Month"):(p.package||""))+'</small></div><div><strong>'+money(p.price)+'</strong><button class="remove" onclick="removeItem('+i+')">×</button></div></div>';
  }).join(""):'<p class="muted">السلة فارغة.</p>';
  document.getElementById("cartTotal").textContent=money(cart.reduce(function(s,p){return s+p.price;},0));
}
function removeItem(i){cart.splice(i,1);saveCart();}
function openCart(){document.getElementById("cartDrawer").classList.add("open");renderCart();}
function closeCart(){document.getElementById("cartDrawer").classList.remove("open");}
function checkoutWhatsApp(){
  if(!cart.length)return;
  const total=cart.reduce(function(s,p){return s+p.price;},0);
  const lines=cart.map(function(p){return "- "+p.product+" "+(p.months?"("+p.months+" month)":(p.package?"("+p.package+")":""))+": "+money(p.price);}).join("\n");
  const msg="مرحباً SINO-STORE، أريد تنفيذ الطلب:\n"+lines+"\nالإجمالي: "+money(total)+"\nوسيلة الدفع: Vodafone Cash / InstaPay / Online";
  window.open("https://wa.me/201002633244?text="+encodeURIComponent(msg),"_blank");
}
function bundleMsg(name){
  const b=bundles.find(function(x){return x.name===name;});
  const msg="مرحباً SINO-STORE، أريد طلب "+(lang==="ar"?b.ar:name)+".";
  window.open("https://wa.me/201002633244?text="+encodeURIComponent(msg),"_blank");
}
function bundlePrice(b){
  let total=0;
  for(const name of b.items){
    const p=products.find(function(x){return x.product===name && x.months===1;});
    if(p) total+=p.price;
  }
  return total;
}
function renderBundles(){
  const el=document.getElementById("bundlesGrid"); if(!el)return;
  el.innerHTML=bundles.map(function(b){
    return '<article class="bundle-card"><div class="bundle-icon">'+b.emoji+'</div><span class="eyebrow">SINO-STORE BUNDLE</span><h3>'+(lang==="ar"?b.ar:b.name)+'</h3><div class="bundle-items">'+b.items.map(function(x){return "<span>"+x+"</span>";}).join("")+'</div><div class="bundle-bottom"><strong>'+money(bundlePrice(b))+'</strong><button class="primary" onclick="bundleMsg(\''+b.name+'\')">'+(lang==="ar"?"اطلب الباقة":"Get bundle")+'</button></div></article>';
  }).join("");
}
function applyLang(){
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-ar]").forEach(function(el){el.innerHTML=el.dataset[lang];});
  const s=document.getElementById("search"); if(s)s.placeholder=lang==="ar"?"ابحث عن اشتراك...":"Search subscriptions...";
  const lb=document.getElementById("langBtn"); if(lb)lb.textContent=lang==="ar"?"EN":"عربي";
  renderBundles();
}
document.getElementById("search").addEventListener("input",function(e){renderAll(e.target.value);});
document.getElementById("cartBtn").addEventListener("click",openCart);
document.getElementById("langBtn").addEventListener("click",function(){lang=lang==="ar"?"en":"ar";applyLang();});
renderAll("");
renderCart();
applyLang();
