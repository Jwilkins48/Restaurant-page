(()=>{"use strict";const e=(e,t)=>{const n=document.createElement("button");return n.setAttribute("id",e),n.classList.add("btn"),n.textContent=t,n},t=function(){const e=document.getElementById("sectionContent");e.innerHTML="";const t=(()=>{const e=document.createElement("section");e.classList.add("homeSection");const t=document.createElement("h2");t.classList.add("homeHeading"),t.innerHTML="Treat yourself...",e.appendChild(t);const n=document.createElement("div");n.classList.add("contentContainer");const d=(e=>{const t=document.createElement("div");t.classList.add("imgContainer");const n=document.createElement("IMG");return n.setAttribute("src","imgs/redvel.jpg"),n.classList.add("image"),t.appendChild(n),t})();e.appendChild(d),e.appendChild(n);const c=(e=>{const t=document.createElement("button");return t.setAttribute("id","homeHeartBtn"),t.classList.add("homeBtn"),t})();n.appendChild(c);const i=document.createElement("div");i.classList.add("left"),c.appendChild(i);const a=document.createElement("div");a.classList.add("right"),c.appendChild(a);const s=document.createElement("div");s.classList.add("btnContent"),c.appendChild(s);const o=document.createElement("span");return o.innerHTML="Order Now",s.appendChild(o),e})();e.appendChild(t)},n=()=>{const e=document.createElement("div");return e.classList.add("itemDiv"),e},d=(e,t)=>{const n=document.createElement("div");n.classList.add("iconDiv");const d=document.createElement("img");return d.setAttribute("id",e),d.setAttribute("src",t),n.appendChild(d),n},c=(e,t)=>{const n=document.createElement("div");n.classList.add("itemContent");const d=document.createElement("h1");d.classList.add("menuTitleHeader"),d.innerHTML=e,n.appendChild(d);const c=document.createElement("p");return c.classList.add("itemDescription"),c.innerHTML=t,n.appendChild(c),n},i=function(){const e=document.getElementById("sectionContent");e.innerHTML="";const t=(()=>{const e=document.createElement("section");e.classList.add("menuSection");const t=document.createElement("div");t.classList.add("menuContainer"),e.appendChild(t);const i=n(),a=d("icon1","imgs/cake.png");i.appendChild(a),t.appendChild(i);const s=c("Strawberry Cake","Made with sweet strawberries throughout and a rich, creamy strawberry frosting");i.appendChild(s);const o=n(),l=d("icon2","imgs/pudding.png");o.appendChild(l),t.appendChild(o);const r=c("Chocolate Pudding","Chocolate cake layered with chocolate pudding. Topped with whipped cream and fresh blueberries");o.appendChild(r);const p=n(),m=d("icon3","imgs/chocCake.png");p.appendChild(m),t.appendChild(p);const h=c("The Queen Elizabeth","Layers of rich, moist yellow cake, each topped with decadent chocolate icing");p.appendChild(h);const u=n(),C=d("icon4","imgs/cupcake.png");u.appendChild(C),t.appendChild(u);const g=c("Red Velvet","Delicious red velvet cupcakes with our signature cream cheese frosting");u.appendChild(g);const E=n(),L=d("icon5","imgs/gelato.png");E.appendChild(L),t.appendChild(E);const v=c("Gelato","Deliciously smooth Gelato that comes in 6 different flavors");E.appendChild(v);const b=n(),y=d("icon6","imgs/heartCake.png");b.appendChild(y),t.appendChild(b);const B=c("Hailey's Heart Cake","Delicate layers of golden butter cake, filled with vanilla cream cheese and fresh strawberries");return b.appendChild(B),e})();e.appendChild(t)};(function(){const t=document.getElementById("content"),n=(()=>{const t=document.createElement("div");t.setAttribute("id","header");const n=document.createElement("h1");return n.setAttribute("id","headerTitle"),n.textContent="Sugar High",t.appendChild(n),t.appendChild((()=>{const t=document.createElement("nav");t.setAttribute("id","navBar");const n=e("homeNavBtn","Home"),d=e("menuBtn","Menu"),c=e("contactBtn","Contact Us");return t.appendChild(n),t.appendChild(d),t.appendChild(c),t})()),t})();t.appendChild(n);const d=(e=>{const t=document.createElement("main");return t.setAttribute("id","sectionContent"),t})();d.setAttribute("id","sectionContent"),t.appendChild(d)})(),t(),(()=>{const e=document.getElementById("homeNavBtn"),n=document.getElementById("menuBtn");document.getElementById("contactBtn"),document.getElementById("homeHeartBtn").addEventListener("click",i),e.addEventListener("click",t),n.addEventListener("click",i)})()})();