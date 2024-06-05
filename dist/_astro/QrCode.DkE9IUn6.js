/* empty css                       */import{_ as f}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{o as i,c as d,a as e,t as h,n as u,r as _,f as p,g as v,F as m,h as x,e as g,b as y,m as C}from"./runtime-core.esm-bundler.DhSRhbEP.js";const q={__name:"Base",props:{title:String,backgroundColor:String,text:{color:String,paragraph:String}},setup(l,{expose:a}){a();const r={};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},S={class:"card-base__header"},k=["innerHTML"];function $(l,a,r,s,t,n){return i(),d("div",{class:"card-base",style:u(`background-color: ${r.backgroundColor};`)},[e("div",S,[e("h3",null,h(r.title),1)]),e("div",{class:"card-base__content",style:u(`color: ${r.text.color};`)},[e("p",{class:"card-base__content__paragraph",innerHTML:r.text.paragraph},null,8,k)],4)],4)}const z=f(q,[["render",$]]),B={__name:"QrCode",setup(l,{expose:a}){a();const r=[{title:"Ingrédients",slug:"ingredient",backgroundColor:"var(--color-primary-base)",text:{paragraph:"Vos ingrédients définissent la qualité du plat que vous servez. <br><br> Mettez en avant leurs provenances et vous obtiendrez la confiance de vos clients. <br> Indiquer les allergènes pour veiller à la sécurité de tout le monde."}},{title:"Illustrations",slug:"illustration",backgroundColor:"var(--color-quaternary-base)",text:{paragraph:"Une photo peut faire toute la différence, profitez-en !"}},{title:"Coup de cœur",slug:"coupdecoeur",backgroundColor:"var(--color-secondary-base)",text:{color:"var(--color-tertiary-base)",paragraph:"Créer un coup de cœur, et augmenter vos ventes en mettant en valeur vos plats les plus rentables."}},{title:"Savoir-faire",slug:"savoirfaire",backgroundColor:"var(--color-primary-light)",text:{paragraph:"Savoir se différencier de vos concurrents peut être très important dans la restauration. <br><br> Communiquer sur la création et les étapes de votre plat. Pourquoi est-il si différent et meilleur !"}}],s=_(null);let t;const n=c=>{const b=c[0].target;c[0].isIntersecting&&(b.play(),t.disconnect())};p(()=>{t=new IntersectionObserver(n,{threshold:0}),s.value&&t.observe(s.value)}),v(()=>{t.disconnect()});const o={features:r,videoRef:s,get observer(){return t},set observer(c){t=c},handleIntersection:n,ref:_,onMounted:p,onBeforeUnmount:v,CardBase:z};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}},I={class:"section-qr-code"},Q=e("div",{class:"section-qr-code__head"},[e("h2",{class:"section-qr-code__head__title"},[g("Révéler vos plats "),e("br"),g(" par un simple scan")]),e("p",{class:"section-qr-code__head__paragraph"},"Transformez l'expérience de vos clients avec des QR codes dédiés à chaque plat. Laissez-les accéder à des descriptions détaillées, des traductions, des photos alléchantes et des informations sur les allergènes, le tout en scannant un simple QR code.")],-1),R={ref:"videoRef",class:"section-qr-code__video",playsinline:"",muted:"",preload:"none"},V=e("source",{src:"/public/video/lines.webm",type:"video/webm"},null,-1),L=e("p",null," Votre navigateur ne supporte pas les vidéos. Cette vidéo illustre des Qr code attachés a des plats. ",-1),M=[V,L],P={class:"section-qr-code__cards"};function T(l,a,r,s,t,n){return i(),d("section",I,[Q,e("video",R,M,512),e("div",P,[(i(),d(m,null,x(s.features,o=>y(s.CardBase,C({class:"section-products__cards__card",key:o.slug,ref_for:!0},o,{id:o.slug}),null,16,["id"])),64))])])}const j=f(B,[["render",T]]);export{j as default};