/* empty css                       */import{_ as g}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{o as s,c as n,i,t as l,j as o,a as _,F as a,k as d}from"./runtime-core.esm-bundler.DhSRhbEP.js";const m="AKfycby9vlD8itIOu66DqzDvZTFJB87Xtdo6eCt5xUrZ5GK9ZwrGwLHCk71etGXDTTAlwXFO",u="script.google.com";function D(t){const c=`https://${u}/macros/s/${m}/exec`,e=JSON.stringify({email:t}),r={method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json","Content-Length":e.length,Host:u},body:e};return fetch(c,r)}const p={__name:"Sending",props:{sending:Boolean,responseType:String},setup(t,{expose:c}){c();const e={};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},y={class:"cta-sending"},b={key:0,class:"cta-sending__button__icon cta-sending__button__icon--success",src:"/public/svg/icon/icon_email_success.svg"},v={key:1,class:"cta-sending__button__icon cta-sending__button__icon--error",src:"/public/svg/icon/icon_email_error.svg"},f={class:"cta-sending__button__slot--hidden"};function T(t,c,e,r,h,S){return s(),n("div",y,[e.responseType?(s(),n("div",{key:0,class:i(["cta-sending__message",{"cta-sending__message--error":e.responseType==="error"}])},l(e.responseType==="success"?"Votre mail a été envoyé !":"Une erreur est survenue"),3)):o("",!0),_("button",{type:"submit",class:i(["cta-sending__button",{"cta-sending__button--sending":e.sending}])},[e.sending?o("",!0):(s(),n(a,{key:0},[_("div",{class:i({"cta-sending__button__slot--hidden":e.responseType})},[d(t.$slots,"default")],2),e.responseType==="success"?(s(),n("img",b)):o("",!0),e.responseType==="error"?(s(),n("img",v)):o("",!0)],64)),e.sending?(s(),n(a,{key:1},[_("div",f,[d(t.$slots,"default")]),_("img",{class:i(["cta-sending__button__icon",{"cta-sending__button__icon--sending":e.sending}]),src:"/public/svg/icon/icon_email.svg"},null,2)],64)):o("",!0)],2)])}const B=g(p,[["render",T]]);export{B as c,D as s};