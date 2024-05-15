import{a as l,i as h}from"./assets/vendor-692d188f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=document.querySelector(".card-container");function g(i){const s=i.hits.reduce((r,a)=>{const{webformatURL:e,largeImageURL:t,tags:o,likes:u,views:d,comments:f,downloads:p}=a;return r+=`<div class="container-img">
      <a href="${t}"><img src="${e}" alt="${o}"></a>
      <ul class="img_list">
        <li class="img_item">
          <h3 class="img_title">Likes</h3>
          <span class="img_text">${u}</span>
        </li>
        <li class="img_item">
          <h3 class="img_title">Views</h3>
          <span class="img_text">${d}</span>
        </li>
        <li class="img_item">
          <h3 class="img_title">comments</h3>
          <span class="img_text">${f}</span>
        </li>
        <li class="img_item">
          <h3 class="img_title">downloads</h3>
          <span class="img_text">${p}</span>
        </li>
      </ul>
        </div>`},"");m.insertAdjacentHTML("beforeend",s)}const y="43780591-6ab37bb22e1af39025cb54e89";l.defaults.baseURL="https://pixabay.com/api/";function _(i){const s={key:y,q:i,safesearch:!0,image_type:"photo",orientation:"horizontal"};return l.get("",{params:s}).then(r=>r.data)}const n=document.querySelector(".search-form"),L=n.querySelector("input"),c=document.querySelector(".loader");n.addEventListener("submit",async i=>{i.preventDefault(),m.innerHTML="",c.classList.remove("is-hidden");const s=L.value.trim();try{const r=await _(s);if(r.total===0||s==="")throw new Error("Sorry, there are no images matching your search query. Please try again!");g(r)}catch(r){h.show({title:r.message,position:"topRight",backgroundColor:"red"})}n.reset(),c.classList.add("is-hidden")});
//# sourceMappingURL=commonHelpers.js.map
