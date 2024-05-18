import{a as h,S as g,i as f}from"./assets/vendor-09d7c26e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const p=document.querySelector(".card-container");function y(r){const e=r.hits.reduce((o,i)=>{const{webformatURL:t,largeImageURL:s,tags:n,likes:v,views:_,comments:w,downloads:E}=i;return o+=`<div class="container-img">
      <a href="${s}"><img src="${t}" alt="${n}"></a>
      <ul class="img_list">
        <li class="img_item">
          <h3 class="img_title">Likes</h3>
          <span class="img_text">${v}</span>
        </li>
        <li class="img_item">
          <h3 class="img_title">Views</h3>
          <span class="img_text">${_}</span>
        </li>
        <li class="img_item">
          <h3 class="img_title">comments</h3>
          <span class="img_text">${w}</span>
        </li>
        <li class="img_item">
          <h3 class="img_title">downloads</h3>
          <span class="img_text">${E}</span>
        </li>
      </ul>
        </div>`},"");p.insertAdjacentHTML("beforeend",e)}const P="43780591-6ab37bb22e1af39025cb54e89";h.defaults.baseURL="https://pixabay.com/api/";const b=15;function L(r,e){const o={per_page:b,page:e,key:P,q:r,safesearch:!0,image_type:"photo",orientation:"horizontal"};return h.get("",{params:o}).then(i=>i.data)}const d=document.querySelector(".search-form"),x=d.querySelector("input"),u=document.querySelector(".loader"),c=document.querySelector(".button-loader");let l="",a=0,m=0;d.addEventListener("submit",async r=>{r.preventDefault(),p.innerHTML="",u.classList.remove("is-hidden"),l=x.value.trim(),a=1;try{const e=await L(l,a);if(e.total===0||l==="")throw new Error("Sorry, there are no images matching your search query. Please try again!");y(e),new g(".container-img a").refresh(),m=Math.ceil(e.total/b),m>1&&c.classList.remove("is-hidden")}catch(e){f.show({title:e.message,position:"topRight",backgroundColor:"red"})}d.reset(),u.classList.add("is-hidden")});const S=()=>{const o=document.querySelector(".container-img:last-child").getBoundingClientRect().height*2;window.scrollBy({top:o,left:100,behavior:"smooth"})};c.addEventListener("click",async function r(){try{a+=1;const e=await L(l,a);y(e),new g(".container-img a").refresh(),S(),a>=m&&(c.classList.add("is-hidden"),c.removeEventListener("click",r),f.show({title:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{}});
//# sourceMappingURL=commonHelpers.js.map
