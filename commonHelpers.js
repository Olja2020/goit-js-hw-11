import{i as a,S as c}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const u=document.querySelector(".gallery"),m=document.querySelector(".form");function f(o){m.reset();const s=o.map(e=>`<div class="card"><a class="gallery-link" href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <ul class="list">
          <li class="item">Likes: <span>${e.likes}</span></li>
          <li class="item">Views: <span>${e.views}</span></li>
          <li class="item">Comments: <span>${e.comments}</span></li>
          <li class="item">Downloads: <span>${e.downloads}</span></li>
        </ul></div>`).join("");u.innerHTML=s}document.querySelector("button");const d=document.querySelector(".search");function y(){let o=d.value;const s=`https://pixabay.com/api/?key=42766573-a347fa67a5b7233d1286bfaa7&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;o&&fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{e.hits.length===0?a.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"}):(e.totalHits,e.total,e.hits,f(e.hits))}).catch(e=>{console.log(e)})}document.querySelector("button");document.querySelector(".search");const p=document.querySelector(".gallery"),i=document.querySelector(".form"),h=document.querySelector(".loader"),g=new c(".gallery a",{captionDelay:250,captionsData:"alt"});g.refresh();i.addEventListener("submit",function(o){o.preventDefault(),h.style.display="block",p.innerHTML="",y(),i.reset()});
//# sourceMappingURL=commonHelpers.js.map
