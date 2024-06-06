import{p as _,_ as s}from"./image.util.Dm_OAYs9.js";/* empty css                       */import{_ as h}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{r as u,f as v,o as m,c as p,a as t,t as d,n as g,i as f,F as x,h as E,e as n,b as P,m as S}from"./runtime-core.esm-bundler.DhSRhbEP.js";const y={__name:"Ticket",props:{reverse:Boolean,small:Boolean,title:String,iconName:String,color:String,backgroundColor:String,image:{src:String,alt:String},text:{color:String,title:String,paragraph:String}},setup(c,{expose:r}){r();const e=u({}),a=u({});v(async()=>{const l=Object.assign({"/src/assets/image/feature/feature_allergene.png":()=>s(()=>import("./feature_allergene.CUePFiLS.js"),[]),"/src/assets/image/feature/feature_photo.png":()=>s(()=>import("./feature_photo.D9ogDemK.js"),[]),"/src/assets/image/feature/feature_traduction.png":()=>s(()=>import("./feature_traduction.DbTRP4Kt.js"),[])}),o=Object.assign({"/src/assets/svg/icon/icon_allergene.svg":()=>s(()=>import("./icon_allergene.DIpGq4ev.js"),[]),"/src/assets/svg/icon/icon_email.svg":()=>s(()=>import("./icon_email.C6i2OoTd.js"),[]),"/src/assets/svg/icon/icon_email_error.svg":()=>s(()=>import("./icon_email_error.9uABU28K.js"),[]),"/src/assets/svg/icon/icon_email_success.svg":()=>s(()=>import("./icon_email_success.Bciz75K4.js"),[]),"/src/assets/svg/icon/icon_photo.svg":()=>s(()=>import("./icon_photo.B1730KZU.js"),[]),"/src/assets/svg/icon/icon_traduction.svg":()=>s(()=>import("./icon_traduction.CJKxvXU-.js"),[])}),[b,k]=await Promise.all([_(o),_(l)]);e.value=b,a.value=k});const i={iconsPath:e,imagesPath:a,ref:u,onMounted:v,get preloadImage(){return _}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},A=["src"],O={class:"card-ticket__content__frame"},T=["src","alt"],z={class:"card-ticket__content__text__title"},I={class:"card-ticket__content__text__paragraph"};function V(c,r,e,a,i,l){return m(),p("div",{class:f(["card-ticket",{"card-ticket--small":e.small}])},[t("div",{class:"card-ticket__header",style:g(`background-color: ${e.backgroundColor}; color: ${e.color};`)},[t("h2",null,d(e.title),1),t("img",{src:a.iconsPath[`icon_${e.iconName}`]?.src,alt:""},null,8,A)],4),t("div",{class:f(["card-ticket__content",{"card-ticket__content--reverse":e.reverse}]),style:g(`background-color: ${e.backgroundColor};`)},[t("div",O,[t("img",{class:"card-ticket__content__frame__image",src:a.imagesPath[`feature_${e.image.src}`]?.src,alt:e.image.alt},null,8,T)]),t("div",{class:"card-ticket__content__text",style:g(`color: ${e.text.color};`)},[t("h3",z,d(e.text.title),1),t("p",I,d(e.text.paragraph),1)],4)],6)],2)}const L=h(y,[["render",V]]),C={__name:"Features",setup(c,{expose:r}){r();const a={features:[{title:"Traductions",iconName:"traduction",color:"var(--color-tertiary-base)",backgroundColor:"var(--color-primary-light)",image:{src:"traduction",alt:"Un plat traduit dans la langue francaise et anglaise [fr, en]."},text:{color:"var(--color-light-base)",title:"Augmenter votre clientèle avec des traductions précises",paragraph:"Assurez-vous que chaque client comprenne parfaitement vos plats grâce à des traductions précises. En rendant vos plats accessibles dans plusieurs langues, vous pouvez attirer une clientèle internationale et optimiser votre service en gagnant du temps lors de la prise de commandes."}},{small:!0,title:"Allergènes",iconName:"allergene",color:"var(--color-dark-base)",backgroundColor:"transparent",image:{src:"allergene",alt:"Les 12 allergènes obligatoires a afficher sur vos plats."},text:{color:"var(--color-dark-base)",title:"Simplifiez l'affichage des allergènes",paragraph:"Garantissez la sécurité et la confiance de vos clients en affichant clairement les allergènes présents dans vos plats. Notre système intuitif simplifie l'affichage des informations cruciales, vous permettant de répondre aux normes obligatoires tout en offrant une expérience transparente et rassurante."}},{small:!0,reverse:!0,title:"Photos",iconName:"photo",color:"var(--color-tertiary-base)",backgroundColor:"var(--color-primary-base)",image:{src:"photo",alt:"Mettez vos plats en avant grâce a des photos de la préparation."},text:{color:"var(--color-light-base)",title:"Attirez plus de clients avec des photos alléchantes",paragraph:"Capturez l'attention de vos clients et stimulez leur appétit avec des photos alléchantes de vos plats. Mettez en valeur la beauté et la qualité de vos créations culinaires grâce à des images de haute qualité, offrant ainsi une expérience visuelle attrayante qui va augmenter vos ventes et attirer plus de clients."}}],CardTicket:L};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},D={class:"section-features"},N=t("div",{class:"section-features__head"},[t("h2",{class:"section-features__head__title"},[n("Gagner du temps"),t("br"),n(" avec nos fonctionnalités")]),t("p",{class:"section-features__head__paragraph"},[n("Optez pour des solutions qui simplifient votre travail et vous permettent de gagner du temps. Avec nos fonctionnalités dédiées, vous pouvez optimiser votre temps et concentrer vos efforts sur ce qui compte vraiment : "),t("strong",null,"offrir une expérience exceptionnelle à vos clients"),n(".")])],-1),R={class:"section-features__content"};function q(c,r,e,a,i,l){return m(),p("section",D,[N,t("div",R,[(m(),p(x,null,E(a.features,o=>P(a.CardTicket,S({key:o.title,ref_for:!0},o,{id:o.iconName}),null,16,["id"])),64))])])}const $=h(C,[["render",q]]);export{$ as default};
