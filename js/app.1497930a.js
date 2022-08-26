(function(){"use strict";var e={8980:function(e,r,t){var n=t(9242),a=t(3396);function o(e,r,t,n,o,i){const l=(0,a.up)("CardForm");return(0,a.wg)(),(0,a.j4)(l)}var i=t(7139),l=t.p+"img/bg-main-mobile.c46c7969.png",s=t.p+"img/bg-main-desktop.64ba6e8f.png",c=t.p+"img/bg-card-back.50bec165.png",u=t.p+"img/bg-card-front.209d5f43.png",d=t.p+"img/card-logo.cc3abd1d.svg",m=t.p+"img/icon-complete.2894d482.svg";const p=e=>((0,a.dD)("data-v-96d3f2a8"),e=e(),(0,a.Cn)(),e),g=p((()=>(0,a._)("div",{class:"page-bg"},[(0,a._)("img",{class:"mobile-bg block lg:hidden",src:l,alt:"bg-main-mobile"}),(0,a._)("img",{class:"large-bg hidden lg:block",src:s,alt:"bg-main"})],-1))),f={class:"page-container"},h={class:"cards-container flex-grow"},b={class:"card-back"},v={class:"relative h-fit w-fit"},C=p((()=>(0,a._)("img",{class:"-z-20",src:c},null,-1))),_={class:"absolute right-14 top-[6.6em]"},w={class:"text-white font-medium text-xl"},N={class:"card-front"},x={class:"relative h-fit w-fit"},y=p((()=>(0,a._)("img",{class:"-z-20",src:u},null,-1))),k=p((()=>(0,a._)("img",{class:"absolute left-8 top-8",src:d},null,-1))),M={class:"absolute left-8 top-32 w-[86%]"},V={class:"text-white font-medium text-3xl tracking-[0.08em]"},Y={class:"flex flex-row justify-between w-full mt-6"},I={class:"text-white font-normal text-lg tracking-[0.1em] uppercase"},D={class:"text-white"},O={class:"text-white"},F=(0,a.Uk)("/"),j={class:"text-white"},q={class:"form-container flex-grow"},z={class:"card-form"},A={class:"card-form-item mb-4"},U=p((()=>(0,a._)("label",{class:"mb-2 uppercase"},"Cardholder Name",-1))),P={class:"input-border"},Z={class:"card-form-item"},B=p((()=>(0,a._)("label",{class:"mb-2 uppercase"},"Card Number",-1))),T={class:"input-border"},E={class:"grid grid-cols-4 gap-3 mt-4"},J={class:"card-form-item col-span-2"},S=p((()=>(0,a._)("label",{class:"mb-2 uppercase"},"Exp. Date (MM/YY)",-1))),W={class:"grid grid-cols-2 gap-2"},H={class:"input-border"},G={class:"input-border"},K={class:"card-form-item col-span-2"},L=p((()=>(0,a._)("label",{class:"mb-2 uppercase"},"CVC",-1))),Q={class:"input-border"},R={class:"form-container flex-grow"},X={class:"card-form"},$=p((()=>(0,a._)("div",{class:"flex flex-row items-center justify-center mb-8"},[(0,a._)("img",{src:m,alt:"complete icon"})],-1))),ee=p((()=>(0,a._)("h1",{class:"text-2xl text-center mb-4 tracking-widest uppercase"},"Thank you!",-1))),re=p((()=>(0,a._)("p",{class:"text-violet tracking-wide text-center mb-12"},"We've added your card details",-1)));function te(e,r,t,o,l,s){return(0,a.wg)(),(0,a.iD)(a.HY,null,[g,(0,a._)("div",f,[(0,a._)("section",h,[(0,a._)("div",b,[(0,a._)("div",v,[C,(0,a._)("div",_,[(0,a._)("p",w,(0,i.zw)(s.getCVC),1)])])]),(0,a._)("div",N,[(0,a._)("div",x,[y,k,(0,a._)("div",M,[(0,a._)("p",V,(0,i.zw)(s.getCardNumForPreview),1),(0,a._)("div",Y,[(0,a._)("p",I,(0,i.zw)(s.getName),1),(0,a._)("p",D,[(0,a._)("span",O,(0,i.zw)(s.getMonth),1),F,(0,a._)("span",j,(0,i.zw)(s.getYear),1)])])])])])]),(0,a.wy)((0,a._)("section",q,[(0,a._)("form",z,[(0,a._)("div",A,[U,(0,a._)("div",P,[(0,a._)("input",{class:(0,i.C_)([l.error.noNameInput?"error":""]),onInput:r[0]||(r[0]=(0,n.iM)((e=>s.setCardholderName(e.target)),["prevent"])),placeholder:"e. g. Jane Appleseed",required:""},null,34)])]),(0,a._)("div",Z,[B,(0,a._)("div",T,[(0,a._)("input",{class:(0,i.C_)([l.error.noNumberInput||l.error.wrongNumber?"error":""]),onInput:r[1]||(r[1]=(0,n.iM)((e=>s.setCardNum(e.target)),["prevent"])),placeholder:"e. g. 1234 5678 9123 0000",required:"",maxlength:"19"},null,34)]),(0,a._)("span",{class:(0,i.C_)(["req-warning",l.error.wrongNumber?"visible":"invisible"])},"Wrong format, numbers only",2)]),(0,a._)("div",E,[(0,a._)("div",J,[S,(0,a._)("div",W,[(0,a._)("div",H,[(0,a._)("input",{class:(0,i.C_)([l.error.wrongDate.month?"error":""]),onInput:r[2]||(r[2]=(0,n.iM)((e=>s.setMonth(e.target)),["prevent"])),type:"text",placeholder:"MM",required:"",maxlength:"3",min:"0",max:"99"},null,34)]),(0,a._)("div",G,[(0,a._)("input",{class:(0,i.C_)([l.error.wrongDate.year?"error":""]),onInput:r[3]||(r[3]=(0,n.iM)((e=>s.setYear(e.target)),["prevent"])),type:"text",placeholder:"YY",required:"",maxlength:"3",min:"0",max:"99"},null,34)])]),(0,a._)("span",{class:(0,i.C_)(["req-warning",l.error.wrongDate.month||l.error.wrongDate.year?"visible":"invisible"])},"Can't be blank",2)]),(0,a._)("div",K,[L,(0,a._)("div",Q,[(0,a.wy)((0,a._)("input",{class:(0,i.C_)([l.error.wrongCVC?"error":""]),onInput:r[4]||(r[4]=(0,n.iM)((e=>s.setCVC(e.target.value)),["prevent"])),"onUpdate:modelValue":r[5]||(r[5]=e=>l.cardCVC=e),placeholder:"e. g. 123",required:"",maxlength:"3"},null,34),[[n.nr,l.cardCVC]])]),(0,a._)("span",{class:(0,i.C_)(["req-warning",l.error.wrongCVC?"visible":"invisible"])},"Can't be blank",2)]),(0,a._)("button",{type:"button",onClick:r[6]||(r[6]=(...e)=>s.confirmValidation&&s.confirmValidation(...e)),class:"form-submit mt-1 col-span-4"},"Confirm")])])],512),[[n.F8,!l.formComplete]]),(0,a.wy)((0,a._)("section",R,[(0,a._)("div",X,[$,ee,re,(0,a._)("button",{onClick:r[7]||(r[7]=(...e)=>s.continueFormBtn&&s.continueFormBtn(...e)),class:"form-submit mt-1 col-span-4"},"Continue")])],512),[[n.F8,l.formComplete]])])],64)}function ne(e){return/[a-zA-Z]/.test(e)}var ae={name:"InteractiveCard",data(){return{cardholderName:null,cardNumber:null,dateM:null,dateY:null,cardCVC:null,formComplete:!1,error:{noNameInput:!1,noNumberInput:!1,wrongName:!1,wrongNumber:!1,wrongDate:{month:!1,year:!1},wrongCVC:!1}}},methods:{continueFormBtn(){this.formComplete=!1},setCardholderName(e){let r=e.value;this.cardholderName=r,this.error.noNameInput=!1,e.value=this.getName},setCardNum(e){let r=e.value;ne(r)?this.error.wrongNumber=!0:this.error.wrongNumber=!1,r=r.toString().replaceAll(" ",""),this.cardNumber=r,this.error.noNumberInput=!1,e.value=this.getCardNum},setMonth(e){let r=e.value;r=Number(r),isNaN(r)&&(r=1),r<1&&(r=1),r>12&&(r=12),this.dateM=r,this.error.wrongDate.month=!1,e.value=this.getMonth},setYear(e){let r=e.value;r=Number(r),isNaN(r)&&(r=1),r>99&&(r=99),this.dateY=Number(r),this.error.wrongDate.year=!1,e.value=this.getYear},setCVC(e){this.cardCVC=e,this.error.wrongCVC=!1},confirmValidation(){let e=!0;null==this.cardholderName&&(this.error.noNameInput=!0,e=!1),null==this.cardNumber&&(this.error.noNumberInput=!0,e=!1),null==this.dateM&&(this.error.wrongDate.month=!0,e=!1),null==this.dateY&&(this.error.wrongDate.year=!0,e=!1),null==this.cardCVC&&(this.error.wrongCVC=!0,e=!1),!0===e&&(this.formComplete=!0)}},computed:{getName:function(){if(null===this.cardholderName)return"Jane Appleseed";let e=this.cardholderName.split(" ");for(let r=0;r<e.length;r++){const t=e[r];e[r]=t.charAt(0).toUpperCase()+t.slice(1)}return e.toString().replaceAll(","," ")},getCardNum:function(){if(null===this.cardNumber)return"0000 0000 0000 0000";let e=this.cardNumber,r="",t=0;for(let n=0;n<e.length;n++)4===t&&(r+=" ",t=0),r+=e[n],t++;return r.toUpperCase()},getCardNumForPreview:function(){if(null===this.cardNumber)return"0000 0000 0000 0000";let e=this.cardNumber,r="",t=0;for(let n=0;n<16;n++)4===t&&(r+=" ",t=0),n<e.length?isNaN(e[n])?r+="0":r+=e[n]:r+="0",t++;return r.toUpperCase()},getMonth:function(){return null==this.dateM?"00":Number(this.dateM)<10?"0"+this.dateM:this.dateM},getYear:function(){return null==this.dateY?"00":Number(this.dateY)<10?"0"+this.dateY:this.dateY},getCVC:function(){return null==this.cardCVC?"000":this.cardCVC}}},oe=t(89);const ie=(0,oe.Z)(ae,[["render",te],["__scopeId","data-v-96d3f2a8"]]);var le=ie,se=(0,a.aZ)({name:"App",components:{CardForm:le}});const ce=(0,oe.Z)(se,[["render",o]]);var ue=ce;(0,n.ri)(ue).mount("#app")}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={exports:{}};return e[n](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(r,n,a,o){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],o=e[u][2];for(var l=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[s])}))?n.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(u--,1);var c=a();void 0!==c&&(r=c)}}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,a,o]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){t.p="/bank-card-form/"}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var a,o,i=n[0],l=n[1],s=n[2],c=0;if(i.some((function(r){return 0!==e[r]}))){for(a in l)t.o(l,a)&&(t.m[a]=l[a]);if(s)var u=s(t)}for(r&&r(n);c<i.length;c++)o=i[c],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(u)},n=self["webpackChunkbank_card_form"]=self["webpackChunkbank_card_form"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(8980)}));n=t.O(n)})();
//# sourceMappingURL=app.1497930a.js.map