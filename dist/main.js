(()=>{"use strict";const e=(e,t)=>{const n=document.createElement("button");return n.setAttribute("id",e),n.classList.add("btn"),n.textContent=t,n},t=function(){const e=document.getElementById("sectionContent");e.innerHTML="";const t=(()=>{const e=document.createElement("section");e.classList.add("contactSection");const t=document.createElement("div");t.classList.add("contactContainer"),e.appendChild(t);const n=document.createElement("h1");return n.innerHTML="hi",t.appendChild(n),e})();e.appendChild(t)},n=function(){const e=document.getElementById("sectionContent");e.innerHTML="";const t=(()=>{const e=document.createElement("section");e.classList.add("homeSection");const t=document.createElement("h2");t.classList.add("homeHeading"),t.innerHTML="Treat yourself...",e.appendChild(t);const n=document.createElement("div");n.classList.add("contentContainer");const d=(e=>{const t=document.createElement("div");t.classList.add("imgContainer");const n=document.createElement("IMG");return n.setAttribute("src","imgs/redvel.jpg"),n.classList.add("image"),t.appendChild(n),t})();e.appendChild(d),e.appendChild(n);const c=(e=>{const t=document.createElement("button");return t.setAttribute("id","homeHeartBtn"),t.classList.add("homeBtn"),t})();n.appendChild(c);const i=document.createElement("div");i.classList.add("left"),c.appendChild(i);const a=document.createElement("div");a.classList.add("right"),c.appendChild(a);const o=document.createElement("div");o.classList.add("btnContent"),c.appendChild(o);const s=document.createElement("span");return s.innerHTML="Order Now",o.appendChild(s),e})();e.appendChild(t)},d=()=>{const e=document.createElement("div");return e.classList.add("itemDiv"),e},c=(e,t)=>{const n=document.createElement("div");n.classList.add("iconDiv");const d=document.createElement("img");return d.setAttribute("id",e),d.setAttribute("src",t),n.appendChild(d),n},i=(e,t)=>{const n=document.createElement("div");n.classList.add("itemContent");const d=document.createElement("h1");d.classList.add("menuTitleHeader"),d.innerHTML=e,n.appendChild(d);const c=document.createElement("p");return c.classList.add("itemDescription"),c.innerHTML=t,n.appendChild(c),n},a=function(){const e=document.getElementById("sectionContent");e.innerHTML="";const t=(()=>{const e=document.createElement("section");e.classList.add("menuSection");const t=document.createElement("div");t.classList.add("menuContainer"),e.appendChild(t);const n=d(),a=c("icon1","imgs/cake.png");n.appendChild(a),t.appendChild(n);const o=i("Strawberry Cake","Made with sweet strawberries throughout and a rich, creamy strawberry frosting");n.appendChild(o);const s=d(),l=c("icon2","imgs/pudding.png");s.appendChild(l),t.appendChild(s);const r=i("Chocolate Pudding","Chocolate cake layered with chocolate pudding. Topped with whipped cream and fresh blueberries");s.appendChild(r);const p=d(),m=c("icon3","imgs/chocCake.png");p.appendChild(m),t.appendChild(p);const h=i("The Queen Elizabeth","Layers of rich, moist yellow cake, each topped with decadent chocolate icing");p.appendChild(h);const u=d(),C=c("icon4","imgs/cupcake.png");u.appendChild(C),t.appendChild(u);const g=i("Red Velvet","Delicious red velvet cupcakes with our signature cream cheese frosting");u.appendChild(g);const E=d(),L=c("icon5","imgs/gelato.png");E.appendChild(L),t.appendChild(E);const v=i("Giorno Gelato","Deliciously smooth Gelato that comes in 6 different flavors");E.appendChild(v);const b=d(),y=c("icon6","imgs/heartCake.png");b.appendChild(y),t.appendChild(b);const B=i("Hailey's Heart Cake","Delicate layers of golden butter cake, filled with vanilla cream cheese and fresh strawberries");return b.appendChild(B),e})();e.appendChild(t)};(function(){const t=document.getElementById("content"),n=(()=>{const t=document.createElement("div");t.setAttribute("id","header");const n=document.createElement("h1");return n.setAttribute("id","headerTitle"),n.textContent="Sugar High",t.appendChild(n),t.appendChild((()=>{const t=document.createElement("nav");t.setAttribute("id","navBar");const n=e("homeNavBtn","Home"),d=e("menuBtn","Menu"),c=e("contactBtn","Contact Us");return t.appendChild(n),t.appendChild(d),t.appendChild(c),t})()),t})();t.appendChild(n);const d=(e=>{const t=document.createElement("main");return t.setAttribute("id","sectionContent"),t})();d.innerHTML="",d.setAttribute("id","sectionContent"),t.appendChild(d)})(),n(),(()=>{const e=document.getElementById("homeNavBtn"),d=document.getElementById("menuBtn"),c=document.getElementById("contactBtn");document.getElementById("homeHeartBtn").addEventListener("click",a),e.addEventListener("click",n),d.addEventListener("click",a),c.addEventListener("click",t)})()})();