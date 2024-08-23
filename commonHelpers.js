import{A as h,a as w,S as b,N as E,K as L,M as S,i as k}from"./assets/vendor-C-7gNprX.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function x(){const t=document.getElementById("menu-btn"),o=document.getElementById("menu"),n=document.querySelectorAll(".menu-link");t.addEventListener("click",function(){o.style.display==="none"||o.style.display===""?o.style.display="block":o.style.display="none",n.forEach(i=>{i.addEventListener("click",function(){o.style.display="none"})})})}new h(".accordion-container");w.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function P(){const{data:t}=await w.get("reviews");return t}async function T(t){return(await w.post("requests",t)).data}function C(t){return t.map(({author:o,avatar_url:n,review:i})=>`<li class="swiper-slide rev-item">
          <dir class="rev-card">
          <img
              class="rev-image"
              src="${n}"
              alt="photo ${o}"
              width="344"
            /> 
            <h3 class="rev-author">${o}</h3>
            <p id="elem" class="rev-review">${i}</p>
          </dir>
        </li>`).join("")}function F(){new b(".rev-swiper",{modules:[E,L,S],on:{init:function(){const t=document.querySelector(".swiper-button-disabled");t.disabled=!0},toEdge:function(t){const o=document.querySelector(".swiper-button-disabled");o.disabled=!0},fromEdge:function(t){const o=document.querySelector(".rev-next"),n=document.querySelector(".rev-prev");o.disabled=!1,n.disabled=!1}},navigation:{nextEl:".rev-next",prevEl:".rev-prev"},cssMode:!0,mousewheel:!1,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}})}function A(){let t=document.getElementById("rev"),o=t.querySelector(".rev-title");o.onclick=function(){t.classList.toggle("close")};const n=document.querySelector(".rev-container"),i=document.querySelector(".rev-list"),e=document.querySelector(".rev-error"),r=document.querySelectorAll(".rev-button");new IntersectionObserver((a,m)=>{a.forEach(d=>{d.isIntersecting&&(P().then(u=>{const v=C(u);i.innerHTML=v,F(),r.forEach(f=>{f.classList.remove("visually-hidden")}),e.classList.add("visually-hidden")}).catch(u=>{e.classList.remove("visually-hidden"),k.error({title:"Server error",titleSize:"20",position:"bottomCenter",theme:"dark",backgroundColor:"#CD5C5C",messageSize:"16",messageColor:"#FFFFFF",message:"Data not available"})}),m.unobserve(d.target))})},{threshold:.8}).observe(n)}function D(){document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("burger"),o=document.querySelector(".mob-menu"),n=document.querySelector(".close-mob-menu"),i=document.querySelector(".nav-mob-menu");t.addEventListener("click",function(){o.classList.add("active")}),n.addEventListener("click",function(){o.classList.remove("active")}),i.addEventListener("click",function(e){if(e.target.tagName==="A"){const r=e.target.getAttribute("href"),c=document.querySelector(r);c&&(window.scrollTo({top:c.offsetTop,behavior:"smooth"}),o.classList.remove("active"))}})})}function N(){const t=document.querySelectorAll(".covers-image"),o=new IntersectionObserver((n,i)=>{n.forEach(e=>{e.isIntersecting&&(e.target.classList.add("animated"),e.target.classList.remove("hidden"),i.unobserve(e.target))})},{threshold:.2});t.forEach(n=>{o.observe(n)})}function R(){new b(".img-slider",{speed:500,effect:"cube",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:!1,keyboard:!0})}const g="work-together-form";function V(){const t=document.querySelector("#js-work-together-form"),o=document.querySelector(".backdrop"),n=document.querySelector("#close-success"),i=document.querySelector("#work-together-input-email"),e=document.querySelector(".line-text-succes"),r=document.querySelector(".line-text-error"),c=document.querySelector(".line");let a=q();t.addEventListener("submit",u),t.addEventListener("input",m),o.addEventListener("click",I),n.addEventListener("click",p),window.addEventListener("keydown",O),i.addEventListener("input",d),B(a);function m(s){const{name:l,value:y}=s.target;a={...a,[l]:y},M(a)}function d(){i.checkValidity()?(c.classList.remove("error"),c.classList.add("succes"),e.classList.remove("visually-hidden"),r.classList.add("visually-hidden")):(c.classList.remove("succes"),c.classList.add("error"),e.classList.add("visually-hidden"),r.classList.remove("visually-hidden"))}async function u(s){s.preventDefault();try{const l=await T(a);v(l)}catch(l){f(l)}}function v(s){o.classList.remove("visually-hidden"),t.reset(),localStorage.removeItem(g),c.classList.remove("succes"),e.classList.add("visually-hidden"),document.body.classList.add("modal-open")}function f(s){k.error({maxWidth:"370px",position:"topRight",messageColor:"white",backgroundColor:"red",message:"Sorry, there was an error connecting to the server! Please correct your input and try again."}),console.error("Form submission error:",s.message)}function q(){try{return JSON.parse(localStorage.getItem(g))||{}}catch(s){return console.log("Error loading form data:",s),{}}}function M(s){try{localStorage.setItem(g,JSON.stringify(s))}catch(l){console.log("Error saving form data:",l)}}function B(s){for(const[l,y]of Object.entries(s))t.elements[l]&&(t.elements[l].value=y)}function p(){o.classList.add("visually-hidden"),document.body.classList.remove("modal-open")}function I(s){s.target===o&&p()}function O(s){s.key==="Escape"&&p()}}new h(".accord-container",{openOnInit:[0]});new b(".slider",{modules:[E,L,S],navigation:{nextEl:".button-next"},centeredSlides:!1,loop:!0,spaceBetween:0,slidesPerView:2,width:260,breakpoints:{768:{slidesPerView:3,width:600},1440:{slidesPerView:6,width:1200}}});function j(){const t=document.getElementById("scrollToTopBtn");window.addEventListener("scroll",function(){window.scrollY>800?t.style.display="flex":t.style.display="none"}),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})}j();x();D();A();R();document.addEventListener("DOMContentLoaded",()=>{N()});V();
//# sourceMappingURL=commonHelpers.js.map
