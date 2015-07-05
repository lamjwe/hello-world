"use strict";angular.module("angularApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controller:"ModalInstanceCtrl",controller:"ModalCtrl"}).when("/menu",{templateUrl:"views/menu.html",controller:"MenuCtrl"}).otherwise({redirectTo:"/"})}]).directive("navgivation",function(){return{restrict:"E",templateUrl:"views/templates/nav.html"}}).directive("photogallery",function(){return{restrict:"E",templateUrl:"views/templates/photoGallery.html"}}).directive("logo",function(){return{restrict:"E",templateUrl:"views/templates/logo.html"}}).directive("appfooter",function(){return{restrict:"E",templateUrl:"views/templates/footer.html"}}).directive("contact",function(){return{restrict:"E",templateUrl:"views/templates/contact.html"}}).directive("about",function(){return{restrict:"E",templateUrl:"views/templates/about.html"}}).directive("ourmenu",function(){return{restrict:"E",templateUrl:"views/templates/menu.html"}}),angular.module("angularApp").controller("MainCtrl",["$scope","$http",function(a,b){b.get("api/pictureList.json").success(function(b){a.photos=b})}]),angular.module("angularApp").controller("ModalCtrl",["$scope","$modal","$log","$http",function(a,b,c,d){d.get("api/pictureList.json").success(function(b){a.photos=b}),a.animationsEnabled=!0,a.open=function(d,e,f){var g=b.open({animation:a.animationsEnabled,templateUrl:"myModalContent.html",controller:"ModalInstanceCtrl",size:d,resolve:{currentPhotoName:function(){return e},currentPhotoLink:function(){return f}}});g.result.then(function(){c.info("Modal dismissed at: "+new Date)})}}]),angular.module("angularApp").controller("ModalInstanceCtrl",["$scope","$modalInstance","currentPhotoName","currentPhotoLink",function(a,b,c,d){a.currentPhotoName=c,a.currentPhotoLink=d,a.ok=function(){b.close()},a.cancel=function(){b.dismiss("cancel")}}]),angular.module("angularApp").controller("MenuCtrl",["$scope","$http",function(a,b){b.get("api/menuItems.json").success(function(b){a.menuItems=b})}]),angular.module("angularApp").controller("NavCtrl",function(){this.tab=1,this.selectTab=function(a){this.tab=a},this.isSelected=function(a){return this.tab===a}});var cbpAnimatedHeader=function(){function a(){window.addEventListener("scroll",function(a){f||(f=!0,setTimeout(b,250))},!1)}function b(){var a=c();e=document.querySelector(".navbar-fixed-top"),a>=g?$(".navbar-fixed-top").addClass("navbar-shrink"):$(".navbar-fixed-top").removeClass("navbar-shrink"),f=!1}function c(){return window.pageYOffset||d.scrollTop}var d=document.documentElement,e=document.querySelector(".navbar-fixed-top"),f=!1,g=300;a()}();$(function(){$(".page-scroll a").bind("click",function(a){var b=$(this);$("html, body").stop().animate({scrollTop:$(b.attr("href")).offset().top},1500,"easeInOutExpo"),a.preventDefault()})}),$(function(){$("body").on("input propertychange",".floating-label-form-group",function(a){$(this).toggleClass("floating-label-form-group-with-value",!!$(a.target).val())}).on("focus",".floating-label-form-group",function(){$(this).addClass("floating-label-form-group-with-focus")}).on("blur",".floating-label-form-group",function(){$(this).removeClass("floating-label-form-group-with-focus")})}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()});