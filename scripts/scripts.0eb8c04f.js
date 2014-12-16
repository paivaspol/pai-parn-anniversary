"use strict";angular.module("paiParnAnniversaryApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/index.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("paiParnAnniversaryApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.shouldShowOverlay=!1,a.overlayImage="",a.overlayDescription="",a.overlayTitle="",a.overlayDate="",a.hideOverlay=function(){a.shouldShowOverlay=!1},a.showOverlay=function(b){a.shouldShowOverlay=!0,a.overlayTitle=b.title,a.overlayDescription=b.description,a.overlayDate=b.date,a.overlayImage=b.imgPath},a.eventsRaw=[{date:"16/12/2013",title:"วันที่ 1 :)",description:"วันแรกของปีที่เรามีความสุขที่สุดปีหนึ่งของเรา ขอบคุณนะที่ตอบตกลงในวันนั้น :)",imgPath:"images/beginning.jpg"},{date:"20/12/2013",title:"Christmas",description:"วันนั้นเราไปเดินเล่นกันที่ CTW แล้วก็ไปถ่ายรูปกับต้นคริสมาสต์ใหญ่ๆหน้า CTW :3",imgPath:"images/christmas.jpg"},{date:"3/1/2014",title:"ชิงช้าสวรรค์",description:"วันนั้นเราไปเดินเล่นที่ Asiatique กัน แล้วก็ขึ้นชิงช้าสวรรค์กันด้วย",imgPath:"images/asiatique.jpg"},{date:"14/2/2014",title:"คลิปหลุดแวสโพล",description:"เราอัดคลิปไปให้ป่าน ร้องสด เล่นสด ตัดสด เพี้ยนสด แต่ก็ซึ้งมั้งงง",imgPath:"images/valentines-vaspol.jpg"},{date:"14/2/2014",title:"You've got mail.",description:"ป่านส่งของขวัญวันวาเลนไทน์มาให้ เป็นจรวดกระดาษ พร้อมข้อความซึ้งๆข้างใน",imgPath:"images/valentines-parn.jpg"},{date:"6/7/2013",title:"ร้อนตับแล๊บ ณ บางปู",description:"วันนั้นเราไปเที่ยวบางปูกัน แต่กะเวลากันผิดไปหน่อยเลยไปถึงตอนที่มันร้อนมาก ตอนเย็นก็กินข้าวกันที่ระเบียงทะเล แล้วต้องฝ่ากองทัพแมลง ส่วนตอนเช้าก็ไปเดินเล่นที่ Mega Bangna กัน",imgPath:"images/bangpu.jpg"},{date:"13/7/2014",title:"สวัสดีกลูต้า",description:"วันนี้เราไป Jam Factory กัน ป่านอยากไปดูที่เค้าจัดแสดงกลูต้า ก่อนหน้านั้นเราก็แวะกินสุกี้ก่อน แล้วก็ไปพิพิฒสยามกันต่อ เย็นวันนั้นป่านปวดท้องมากเลยต้องรีบพากลับไปส่งที่บ้าน",imgPath:"images/gluta.jpg"},{date:"15/12/2014",title:"364 Days...",description:"วันนั้นเป็นวันที่เราคบกันได้ 364 วัน วันนี้เป็นวันที่เราเพิ่งกลับมาจากอเมริกา แล้วก็รีบมาหาป่านเลย พรุ่งนี้เราก็จะครบหนึ่งปีแล้ว :)",imgPath:"images/364.jpg"}],a.eventsParser=function(){if(!a.hasGottenEvent){for(var b=4,c=[],d=0,e=0;e<a.eventsRaw.length;e++)e%b===0&&(d++,c[d]=[]),c[d].push(a.eventsRaw[e]);return a.hasGottenEvent=!0,c}return[]},a.events=a.eventsParser(),a.createUrl=function(a){var b=a.imgPath;return b}}]),angular.module("paiParnAnniversaryApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);