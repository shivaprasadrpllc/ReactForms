(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"57GC":function(e,o,n){"use strict";n.r(o);var t=n("ofXK"),r=n("3Pt+"),a=n("fXoL");function i(e,o){if(1&e&&(a.Rb(0,"div",1),a.Rb(1,"form",2),a.Rb(2,"div",3),a.Rb(3,"div",4),a.Rb(4,"div",5),a.Rb(5,"label",6),a.oc(6,"First Name"),a.Qb(),a.Nb(7,"input",7),a.Qb(),a.Rb(8,"div",5),a.Rb(9,"label",8),a.oc(10,"Last Name"),a.Qb(),a.Nb(11,"input",9),a.Qb(),a.Rb(12,"div",5),a.Rb(13,"label",10),a.oc(14,"Email"),a.Qb(),a.Nb(15,"input",11),a.Qb(),a.Rb(16,"div",5),a.Rb(17,"div",12),a.Rb(18,"legend",13),a.oc(19,"Gender"),a.Qb(),a.Rb(20,"div",14),a.Rb(21,"div",15),a.Nb(22,"input",16),a.Rb(23,"label",17),a.oc(24,"Male"),a.Qb(),a.Qb(),a.Rb(25,"div",15),a.Nb(26,"input",18),a.Rb(27,"label",19),a.oc(28,"Fe-Male"),a.Qb(),a.Qb(),a.Rb(29,"div",15),a.Nb(30,"input",20),a.Rb(31,"label",21),a.oc(32,"Others"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(33,"div",5),a.Rb(34,"div",12),a.Rb(35,"legend",13),a.oc(36,"Company Info"),a.Qb(),a.Rb(37,"div",22),a.Rb(38,"div",5),a.Rb(39,"label",23),a.oc(40,"Company Name"),a.Qb(),a.Nb(41,"input",24),a.Qb(),a.Rb(42,"div",5),a.Rb(43,"label",25),a.oc(44,"Company Code"),a.Qb(),a.Nb(45,"input",26),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(46,"div",5),a.Rb(47,"div",12),a.Rb(48,"legend",13),a.oc(49,"Active"),a.Qb(),a.Rb(50,"div",14),a.Rb(51,"div",15),a.Nb(52,"input",27),a.Rb(53,"label",17),a.oc(54,"Male"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb()),2&e){const e=a.bc();a.Bb(1),a.ec("formGroup",e.actionFormgroup)}}let l=(()=>{class e{constructor(e){this.formBuilder=e,this.skillSet=[{name:"C#",value:"cLang"},{name:"DOT.Net",value:"dotnet"},{name:"Angular",value:"angular"}],this.showDiv=!1}ngOnInit(){this.actionFormgroup=this.formBuilder.group({fName:new r.e("Shiva",[]),lName:new r.e("Prasad",[]),email:new r.e("abc@gmail.com",[]),gender:new r.e("female",[]),isActive:new r.e(!1,[]),companyInfo:new r.g({fName:new r.e("PLLC"),compCode:new r.e("PHD110")}),skills:new r.c([this.formBuilder.group({cLang:new r.e(!0),dotnet:new r.e(!0),angular:new r.e(!0)})])}),setTimeout(()=>{this.addNewArray(),this.showDiv=!0,console.log(this.actionFormgroup)},3e3)}addNewArray(){console.log(this.getFormControls()),this.actionFormgroup.get("skills").push(this.getFormControls())}getFormControls(){const e={};return this.skillSet.forEach(o=>{e[o.value]=new r.e(!0)}),console.log(e),new r.g(e)}}return e.\u0275fac=function(o){return new(o||e)(a.Mb(r.d))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-from-contols"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],["action","",3,"formGroup"],[1,"row",2,"margin","10px"],[1,"col-4"],[1,"form-group"],["for","fName"],["type","text","formControlName","fName","name","fName","id","fName",1,"form-control"],["for","lName"],["type","text","formControlName","lName","name","lName","id","lName",1,"form-control"],["for","email"],["type","text","formControlName","email","name","email","id","email",1,"form-control"],[1,"row"],[1,"col-form-label","col-2"],[1,"col-10"],[1,"form-check"],["type","radio","name","gender","id","male","formControlName","gender","value","male",1,"form-check-input"],["for","male",1,"form-check-label"],["type","radio","name","gender","id","female","formControlName","gender","value","female",1,"form-check-input"],["for","female",1,"form-check-label"],["type","radio","name","gender","id","other","formControlName","gender","value","other",1,"form-check-input"],["for","other",1,"form-check-label"],["formGroupName","companyInfo",1,"col-10"],["for","cName"],["type","text","name","cName","id","cName","formControlName","fName",1,"form-control"],["for","cCode"],["type","text","name","cCode","id","cCode","formControlName","compCode",1,"form-control"],["type","checkbox","name","isActive","id","isActive","formControlName","isActive",1,"form-check-input"]],template:function(e,o){1&e&&a.nc(0,i,55,1,"div",0),2&e&&a.ec("ngIf",o.showDiv)},directives:[t.j,r.q,r.l,r.h,r.b,r.k,r.f,r.n,r.i,r.a],styles:["label[_ngcontent-%COMP%]{margin-bottom:0}"]}),e})();var m=n("tyNb");n.d(o,"CfromModule",(function(){return c}));const b=[{path:"",component:l}];let c=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(o){return new(o||e)},imports:[[t.b,r.j,r.o,m.a.forChild(b)]]}),e})()}}]);