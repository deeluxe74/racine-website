import{w as d,v as p}from"./runtime-dom.esm-bundler.BOlpQ8vF.js";import{s as c,c as u}from"./Sending.XgK5lNSE.js";/* empty css                       */import{_ as m}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{r as a,c as v,a as e,w as f,b as h,d as g,e as i,o as y}from"./runtime-core.esm-bundler.DhSRhbEP.js";const b={__name:"Hero",setup(_,{expose:o}){o();const n=a(""),t=a(!1),s=a("");async function l(){t.value=!0;try{await c(n.value),s.value="success"}catch{s.value="error"}finally{t.value=!1,setTimeout(()=>{s.value="",n.value=""},4e3)}}const r={email:n,isSending:t,responseType:s,handleSubmit:l,ref:a,get sendEmail(){return c},ctaSending:u};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},x={class:"section-hero"},S={class:"section-hero__content"},w=e("div",{class:"section-hero__content__text"},[e("h1",{class:"section-hero__content__text__title"},[i(" Révélez le vrai "),e("mark",null,"cœur"),i(" de votre cuisine ")]),e("p",{class:"section-hero__content__text__paragraph"}," Découvrez comment nous pouvons transformer vos plats avec des traductions, des illustrations et des informations détaillées. ")],-1),T=e("div",{class:"section-hero__media"},[e("video",{class:"section-hero__media__video",autoplay:"",playsinline:"",muted:"",preload:"auto",poster:"/public/image/hero/screenpopup.png"},[e("source",{src:"/public/video/screenpopup.webm",type:"video/webm"}),e("p",null," Votre navigateur ne supporte pas les vidéos. Cette vidéo montre un exemple d'application avec la possibilité de traduire, illustrer, ou encore avertir sur les allergies de vos plats. ")])],-1);function V(_,o,n,t,s,l){return y(),v("section",x,[e("div",S,[w,e("form",{class:"section-hero__content__form",method:"POST",onSubmit:o[1]||(o[1]=d(r=>t.handleSubmit(),["prevent"]))},[f(e("input",{class:"section-hero__content__form__input",placeholder:"Entrer votre email",id:"email",type:"email",name:"email",required:"","onUpdate:modelValue":o[0]||(o[0]=r=>t.email=r)},null,512),[[p,t.email]]),h(t.ctaSending,{sending:t.isSending,responseType:t.responseType},{default:g(()=>[i(" Déguster la démo ")]),_:1},8,["sending","responseType"])],32)]),T])}const C=m(b,[["render",V]]);export{C as default};
