import{a as i}from"./assets/vendor-bdb8a163.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function p(){return i.defaults.headers.common["x-api-key"]="live_dFTSYM4XPRHVzFZoPyPBGLELAJnCFAEFP3dblha5UWWcBVqsJm8HcOpsSmkXjIC9",i({method:"get",url:"https://api.thecatapi.com/v1/breeds",responseType:"json"})}function f(o){i.defaults.headers.common["x-api-key"]="live_dFTSYM4XPRHVzFZoPyPBGLELAJnCFAEFP3dblha5UWWcBVqsJm8HcOpsSmkXjIC9";let t=`https://api.thecatapi.com/v1/images/search?breed_ids=${o}`;return i({method:"get",url:t,responseType:"json"})}const n=document.querySelector(".cat-list"),a=document.querySelector(".loader"),h=document.querySelector(".error"),c=document.querySelector(".description");p().then(({data:o})=>{let t="";for(const s of o)t+=`<option value="${s.id}">${s.name}</option>`;n.innerHTML=t,m(),n.classList.remove("hidden")}).catch(u);n==null||n.addEventListener("change",o=>{y(),f(o.target.value).then(({data:t})=>{const s=t[0].breeds[0];c.innerHTML=`
      <div class="image-box">
        <img src="${t[0].url}" alt="${s.name}" />
      </div>
      <div>
        <h1>${s.name}</h1>
        <p class="description">${s.description}</p>
        <div class="temperament-box">
          <p class="temperament-title">Temperament: </p>
          <p>${s.temperament}</p>
        </div>
      </div>
    `,m()}).catch(u)});function y(){c.classList.add("hidden"),c.innerHTML="",a.classList.remove("hidden")}function m(){a.classList.add("hidden"),c.classList.remove("hidden")}function u(o){console.log(o),h.classList.remove("hidden"),a.classList.add("hidden"),n.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
