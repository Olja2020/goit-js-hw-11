import{i as a,S as l}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const c=document.querySelector(".gallery"),u=document.querySelector(".form");function f(s){u.reset();const o=s.map(e=>`<div class="card"><a class="gallery-link" href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <ul class="list">
          <li class="item">Likes: <span>${e.likes}</span></li>
          <li class="item">Views: <span>${e.views}</span></li>
          <li class="item">Comments: <span>${e.comments}</span></li>
          <li class="item">Downloads: <span>${e.downloads}</span></li>
        </ul></div>`).join("");c.innerHTML=o}document.querySelector("button");const m=document.querySelector(".search");document.querySelector(".gallery");const y=document.querySelector(".form");y.addEventListener("submit",function(s){s.preventDefault(),p()});function p(){let s=m.value;const o=`https://pixabay.com/api/?key=42766573-a347fa67a5b7233d1286bfaa7&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;s&&fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{e.hits.length===0?a.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"}):(e.totalHits,e.total,e.hits,f(e.hits))}).catch(e=>{console.log(e),a.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"})})}const d=new l(".gallery a",{captionDelay:250,captionsData:"alt"});d.refresh();
//# sourceMappingURL=commonHelpers.js.map
