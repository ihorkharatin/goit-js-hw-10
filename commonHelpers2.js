import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as o}from"./assets/vendor-77e16229.js";const r={formEl:document.querySelector(".form"),bntEl:document.querySelector("button")};r.formEl.addEventListener("submit",m=>{m.preventDefault();const t=new FormData(r.formEl),e=t.get("delay"),n=t.get("state")==="fulfilled";new Promise((s,c)=>{setTimeout(()=>{n?s():c()},e)}).then(s=>o.success({message:`Fulfilled promise in ${e}ms`})).catch(s=>o.error({message:`Rejected promise in ${e}ms`}))});
//# sourceMappingURL=commonHelpers2.js.map
