function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var n=a[e];delete a[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){a[e]=n},t.parcelRequired7c6=i),i.register("kyEFX",(function(n,t){var r,a;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return a}),(function(e){return a=e}));var i={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},a=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),i("kyEFX").register(JSON.parse('{"1zJhX":"library.23ca3a92.js","hgNQc":"parking-page.dbcbc498.jpg","eM9ss":"library.3e22059b.js"}')),i("VT60Z");var c,l=i("krGWQ"),o=i("7me8F");function s(e){return console.log(e),e.map((({id:e,genres:t,poster_path:r,original_title:a,release_date:i,vote_average:l})=>`\n    <li class="card-set__item">\n     <a class="card" href="" id="${e}">\n      <div class="card__thumb">\n       <img class="card__image" src="${r?`https://image.tmdb.org/t/p/w500${r}`:n(c)}" alt="${a}" loading="lazy" />\n      </div>\n      <div class="card__info">\n       <h2 class="card__title">${a}</h2>\n       <div class="card__wrap">\n        <p class="card__item">${t[0].name} |</p>\n        <p class="card__item">${i.slice(0,4)}</p>\n        <p class="card__item">${l}</p>\n       </div>\n      </div>\n     </a>\n    </li>`)).join("")}c=new URL(i("kyEFX").resolve("hgNQc"),import.meta.url).toString();var d=i("f3kWi"),u=i("gjiCh");const f=new(0,o.default);function b(e){(0,u.onLoader)(),p(e).then((e=>{(0,u.offLoader)(),l.default.galleryLib.innerHTML=s(e),l.default.watchedLibBtn.classList.add("btn--current"),l.default.queueLibBtn.classList.remove("btn--current")}))}async function p(e){const n=e.map((async e=>(f.id=e,f.getFilmsDetails().then((e=>e.data)).catch((e=>console.log(e))))));return await Promise.all(n)}l.default.watchedLibBtn.addEventListener("click",(function(e){b(d.watchedArr)})),l.default.queueLibBtn.addEventListener("click",(function(e){n=d.queueArr,(0,u.onLoader)(),p(n).then((e=>{(0,u.offLoader)(),l.default.galleryLib.innerHTML=s(e),l.default.queueLibBtn.classList.add("btn--current"),l.default.watchedLibBtn.classList.remove("btn--current")}));var n})),b(d.watchedArr);
//# sourceMappingURL=library.23ca3a92.js.map
