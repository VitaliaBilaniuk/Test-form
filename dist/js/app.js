(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='./',b(b.s=7)})([function(a){'use strict';a.exports={hello:'world'}},function(){},function(a,b,c){a.exports=c.p+'fdbc0f3cddee2ab17bffe160ed89431e.png'},function(a,b,c){a.exports=c.p+'4a1c577473e90c43a2c79fc91da7e93f.png'},function(a,b,c){a.exports=c.p+'dc161bc107f7a9db42ca7a971cb68989.png'},function(a,b,c){a.exports=c.p+'../images/safari-pinned-tab.svg'},function(a,b,c){a.exports=c.p+'favicon.ico'},function(a,b,c){'use strict';c(0);c(1),c(2),c(4),c(3),c(5),c(6),window.onload=function(){function d(a){var b,c,d,e=[];for(b=document.getElementsByClassName('select-items'),c=document.getElementsByClassName('select-selected'),d=0;d<c.length;d++)a==c[d]?e.push(d):c[d].classList.remove('select-arrow-active');for(d=0;d<b.length;d++)e.indexOf(d)&&b[d].classList.add('select-hide')}var e=document.getElementById('files'),f=document.getElementById('file-name');e.addEventListener('change',function(){f.innerHTML=this.value});var g,h,i,j,k,a,b;for(g=document.getElementsByClassName('custom-select'),h=0;h<g.length;h++){for(j=g[h].getElementsByTagName('select')[0],k=document.createElement('DIV'),k.setAttribute('class','select-selected'),k.innerHTML=j.options[j.selectedIndex].innerHTML,g[h].appendChild(k),a=document.createElement('DIV'),a.setAttribute('class','select-items select-hide'),i=0;i<j.length;i++)b=document.createElement('DIV'),b.innerHTML=j.options[i].innerHTML,b.addEventListener('click',function(){var a,b,c,d,e;for(d=this.parentNode.parentNode.getElementsByTagName('select')[0],e=this.parentNode.previousSibling,b=0;b<d.length;b++)if(d.options[b].innerHTML==this.innerHTML){for(d.selectedIndex=b,e.innerHTML=this.innerHTML,a=this.parentNode.getElementsByClassName('same-as-selected'),c=0;c<a.length;c++)a[c].removeAttribute('class');this.setAttribute('class','same-as-selected');break}e.click()}),a.appendChild(b);g[h].appendChild(a),k.addEventListener('click',function(a){a.stopPropagation(),d(this),this.nextSibling.classList.toggle('select-hide'),this.classList.toggle('select-arrow-active')})}document.addEventListener('click',d)}}]);
//# sourceMappingURL=app.js.map