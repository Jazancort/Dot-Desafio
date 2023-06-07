(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0dd9":function(t,e,a){},1605:function(t,e,a){"use strict";a("6f35")},"4e69":function(t,e,a){"use strict";a("660a")},"660a":function(t,e,a){},"6f35":function(t,e,a){},8333:function(t,e,a){},"8e88":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"checkout"},[e("div",{staticClass:"checkout--content"},[e("div",{staticClass:"checkout--item-form"},[e("UserForm",{on:{formValidated:t.getValidation}})],1),e("div",{staticClass:"checkout--item-movies"},[e("SelectedMovies",{attrs:{isValidated:t.isValidated}})],1)])])},l=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"checkout--form"},[e("div",{staticClass:"checkout--form-title"},[t._v("Finalizar Compra")]),e("q-form",{ref:"myForm",attrs:{"no-error-focus":""}},[e("div",{staticClass:"default-spacing"},[e("q-input",{attrs:{rules:[t=>t&&t.length>3||"Digite um nome válido"],color:"blue-grey-6",label:"Nome Completo",outlined:"","lazy-rules":""},on:{blur:t.validateForm},model:{value:t.nome,callback:function(e){t.nome=e},expression:"nome"}})],1),e("div",{staticClass:"row default-spacing"},[e("div",{class:{"col-6":t.$q.platform.is.mobile,"col-7":!t.$q.platform.is.mobile}},[e("q-input",{staticClass:"checkout--form-space",attrs:{rules:[t=>t.length>0&&t.length>10||"Digite um CPF válido"],color:"blue-grey-6",label:"CPF",mask:"###.###.###-##",outlined:"","unmasked-value":""},on:{blur:t.validateForm},model:{value:t.cpf,callback:function(e){t.cpf=e},expression:"cpf"}})],1),e("div",{staticClass:"col"},[e("q-input",{attrs:{rules:[t=>t.length>0&&t.length>9||"Digite um número válido"],mask:t.phoneMask,color:"blue-grey-6",label:"Celular",type:"tel","unmasked-value":"",outlined:"","lazy-rules":""},on:{blur:t.validateForm},model:{value:t.celular,callback:function(e){t.celular=e},expression:"celular"}})],1)]),e("div",{staticClass:"default-spacing"},[e("q-input",{attrs:{rules:[t=>/.+@.+\..+/.test(t)||"Digite um e-mail válido"],color:"blue-grey-6",label:"E-mail",type:"email",outlined:"","lazy-rules":""},on:{blur:t.validateForm},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),e("div",{staticClass:"row default-spacing"},[e("div",{class:{"col-6":t.$q.platform.is.mobile,"col-5":!t.$q.platform.is.mobile}},[e("q-input",{staticClass:"checkout--form-space",attrs:{rules:[t=>/^\d{5}-\d{3}$/.test(t)||"Digite um CEP válido"],color:"blue-grey-6",label:"CEP",mask:"#####-###",outlined:"","lazy-rules":""},on:{blur:t.validateForm},model:{value:t.cep,callback:function(e){t.cep=e},expression:"cep"}})],1),e("div",{staticClass:"col"},[e("q-input",{attrs:{rules:[t=>t&&t.length>2||"Digite um endereço válido"],color:"blue-grey-6",label:"Endereço",outlined:"","lazy-rules":""},on:{blur:t.validateForm},model:{value:t.endereco,callback:function(e){t.endereco=e},expression:"endereco"}})],1)]),e("div",{staticClass:"row default-spacing"},[e("div",{class:{"col-6":t.$q.platform.is.mobile,"col-7":!t.$q.platform.is.mobile}},[e("q-input",{staticClass:"checkout--form-space",attrs:{rules:[t=>t&&t.length>2||"Digite uma cidade válida"],color:"blue-grey-6",label:"Cidade",outlined:"","lazy-rules":""},on:{blur:t.validateForm},model:{value:t.cidade,callback:function(e){t.cidade=e},expression:"cidade"}})],1),e("div",{staticClass:"col"},[e("q-input",{attrs:{rules:[t=>t&&t.length>1||"Digite um estado válido"],color:"blue-grey-6",label:"Estado",outlined:"","lazy-rules":""},on:{blur:t.validateForm},model:{value:t.estado,callback:function(e){t.estado=e},expression:"estado"}})],1)])])],1)},s=[],r={name:"UserForm",data(){return{nome:null,cpf:"",celular:"",email:null,cep:null,endereco:null,cidade:null,estado:null}},computed:{phoneMask(){return this.celular.length>10?"(##) #####-####":"(##) ####-#####"}},methods:{validateForm(){this.$refs.myForm.validate().then((t=>{t?(this.$emit("formValidated",!0),localStorage.setItem("userName",this.nome)):(this.$emit("formValidated",!1),localStorage.removeItem("userName"))}))}}},n=r,c=(a("b65b"),a("2877")),d=Object(c["a"])(n,o,s,!1,null,"11584256",null),u=d.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"selected-movies"},[e("MovieInfoTitles",{attrs:{gap:t.$q.platform.is.mobile?"medium":"big"}}),t._l(t.cart,(function(a){return e("div",{key:a.id},[e("MovieInfo",{attrs:{poster:a.poster,title:a.title,date:a.release_date,votes:a.vote_average,id:a.id,quantity:a.quantity,hasCart:!1,gap:t.$q.platform.is.mobile?"small":"big",nameSize:t.$q.platform.is.mobile?"small":"big"}}),e("hr",{staticClass:"content--line"})],1)})),e("div",{staticClass:"row total"},[e("div",{staticClass:"col-8 total--text"},[t._v("Total:")]),e("div",{staticClass:"col total--price"},[t._v("R$ "+t._s(t.totalValue))])]),e("q-btn",{staticClass:"full-width button",attrs:{disable:!t.isValidated||0===t.cart.length,label:"Finalizar","no-caps":""},on:{click:t.submit}}),e("FinalizationDialog",{attrs:{isOpen:t.dialog}})],2)},f=[],v=a("e4d4"),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"movie-info-title",class:`movie-info-title__${t.gap}`},[e("div",{staticClass:"movie-info-title--text"},[t._v("Imagem")]),e("div",{staticClass:"movie-info-title--text"},[t._v("Nome")]),e("div",{staticClass:"movie-info-title--text-qtd"},[t._v("Qtd")]),e("div",{staticClass:"movie-info-title--text-price"},[t._v("Preço")])])},g=[],h={name:"MovieInfoTitles",props:{gap:{type:String,default:"medium"}}},b=h,C=(a("f5dc"),Object(c["a"])(b,p,g,!1,null,"10c94d4c",null)),y=C.exports,_=function(){var t=this,e=t._self._c;return e("q-dialog",{attrs:{value:t.isOpen,persistent:""}},[e("q-card",{staticClass:"dialog-card",staticStyle:{width:"400px"}},[e("q-card-section",{staticClass:"dialog-card--content",attrs:{align:"center"}},[e("div",{staticClass:"dialog-card--title"},[t._v("Obrigado "+t._s(t.userName)+"!")])]),e("q-card-section",{staticClass:"dialog-card--content",attrs:{align:"center"}},[e("div",{staticClass:"dialog-card--subtitle"},[t._v("Sua compra foi finalizada com sucesso!")])]),e("q-card-actions",{staticClass:"dialog-card--content",attrs:{align:"center"}},[e("q-btn",{staticClass:"dialog-card--button full-width",attrs:{"no-caps":"",flat:""},on:{click:t.closeDialog}},[t._v("\n        Ir para loja\n      ")])],1)],1)],1)},S=[],q=(a("14d9"),{name:"FinalizationDialog",props:{isOpen:{type:Boolean,default:!1}},data(){return{userName:null}},created(){const t=localStorage.getItem("userName");if(t){const e=t.split(" ");this.userName=e.slice(0,2).join(" ")}},methods:{closeDialog(){this.$router.push("/"),localStorage.removeItem("cart")}}}),k=q,x=(a("4e69"),Object(c["a"])(k,_,S,!1,null,"6bf9edb8",null)),F=x.exports,I=a("e8ec"),N={name:"SelectedMovies",components:{MovieInfo:v["a"],MovieInfoTitles:y,FinalizationDialog:F},props:{isValidated:{type:Boolean,default:!1}},data(){return{itemCount:2,cart:[],totalValue:null,dialog:!1}},computed:{isLastItem(){return t=>t===this.cart.length-1}},created(){this.loadCart(),Object(I["c"])(this.loadCart)},watch:{totalValue(){this.loadCart}},methods:{submit(){this.dialog=!0},loadCart(){const t=localStorage.getItem("cart");this.cart=t?JSON.parse(t):[],this.getTotalPrice()},getTotalPrice(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=t.reduce(((t,e)=>t+9.99*e.quantity),0);this.totalValue=e.toFixed(2)}}},O=N,$=(a("a3ac"),Object(c["a"])(O,m,f,!1,null,"c9b52772",null)),z=$.exports,w={name:"Checkout",components:{UserForm:u,SelectedMovies:z},data(){return{isValidated:!1}},methods:{getValidation(t){this.isValidated=t}}},V=w,D=(a("af1a"),Object(c["a"])(V,i,l,!1,null,"f9cff87e",null));e["default"]=D.exports},a3ac:function(t,e,a){"use strict";a("8333")},af1a:function(t,e,a){"use strict";a("e220")},b65b:function(t,e,a){"use strict";a("be00")},be00:function(t,e,a){},e220:function(t,e,a){},e4d4:function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"movie-info",class:`movie-info__${t.gap}`},[e("img",{staticClass:"header--logo-img",attrs:{src:`https://image.tmdb.org/t/p/original${t.poster}`,height:t.imgHeight}}),e("div",{staticClass:"movie-info--text-name",class:`movie-info--text-name__${t.nameSize}`},[t._v("\n    "+t._s(t.title)+"\n  ")]),t.hasCart?t._e():e("div",{staticClass:"movie-info--text-quantity"},[t._v(t._s(t.quantity))]),e("div",{staticClass:"movie-info--text-price"},[t._v("R$9,99")]),t.hasCart?e("div",{staticClass:"movie-info--text-icon"},[e("q-btn",{attrs:{flat:"",round:"",color:"teal-5",icon:"shopping_cart",size:"12px"},on:{click:t.addToCart}})],1):t._e(),e("div",{staticClass:"movie-info--text-icon"},[e("q-btn",{attrs:{flat:"",round:"",icon:"delete",size:"12px"},on:{click:t.removeItem}})],1)])},l=[],o=(a("14d9"),{name:"MovieInfo",props:{hasCart:{type:Boolean,default:!1},imgHeight:{type:String,default:"50px"},gap:{type:String,default:"small"},nameSize:{type:String,default:"small"},title:{type:String,default:""},date:{type:String,default:""},poster:{type:String,default:""},genres:{type:String,default:""},votes:{type:Number,default:null},id:{type:Number,default:null},quantity:{type:Number,default:null}},data(){return{drawerRight:!1}},methods:{addToCart(){const t={id:this.id,title:this.title,quantity:1,poster:this.poster};let e=JSON.parse(localStorage.getItem("cart"))||[];const a=e.findIndex((e=>e.id===t.id));-1!==a?e.splice(a,1):e.push(t),this.removeFromFavorites(),localStorage.setItem("cart",JSON.stringify(e))},removeItem(){this.hasCart?this.removeFromFavorites():this.removeFromCart()},removeFromCart(){const t=JSON.parse(localStorage.getItem("cart"))||[],e=t.filter((t=>t.id!==this.id));localStorage.setItem("cart",JSON.stringify(e))},removeFromFavorites(){const t=JSON.parse(localStorage.getItem("favorites"))||[],e=t.filter((t=>t.id!==this.id));localStorage.setItem("favorites",JSON.stringify(e))}}}),s=o,r=(a("1605"),a("2877")),n=Object(r["a"])(s,i,l,!1,null,"c2180f84",null);e["a"]=n.exports},e8ec:function(t,e,a){"use strict";function i(t){let e=l();setInterval((()=>{const a=l();a!==e&&(e=a,t(e))}),1e3)}function l(){const t=JSON.parse(localStorage.getItem("favorites"))||[];return t.length}function o(t){let e=s();setInterval((()=>{const a=s();a!==e&&(e=a,t(e))}),1e3)}function s(){const t=JSON.parse(localStorage.getItem("cart"))||[];return t.length}a.d(e,"d",(function(){return i})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return s}))},f5dc:function(t,e,a){"use strict";a("0dd9")}}]);