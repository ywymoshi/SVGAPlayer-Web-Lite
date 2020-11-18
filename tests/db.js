/*!
 * db
 * 
 * Version: 1.5.0-beta.5
 * Document: https://github.com/svga/SVGAPlayer-Web-Lite
 * (c) 2019 YY.SVGA
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SVGADB=t():e.SVGADB=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){var t=void 0===e?{name:"SVGA.Lite.DB",version:1,storeName:"svga_file"}:e,n=t.name,r=t.version,o=t.storeName;this.storeName=o,this.dbPromise=new Promise(function(e,t){if(!window.indexedDB)throw new Error("[SVGA.Lite.DB] indexedDB not supported");var i=window.indexedDB.open(n,r);i.onerror=function(e){t(new Error("[SVGA.Lite.DB] indexedDB open fail"+e))},i.onsuccess=function(){e(i.result)},i.onupgradeneeded=function(){i.result.createObjectStore(o)}})}return e.prototype.find=function(e){var t=this;return this.dbPromise.then(function(n){return new Promise(function(r){var o=n.transaction([t.storeName],"readonly").objectStore(t.storeName).get(e);o.onsuccess=function(){return r(o.result)}})})},e.prototype.insert=function(e,t){var n=this;return this.dbPromise.then(function(r){return new Promise(function(o){var i=r.transaction([n.storeName],"readwrite");i.objectStore(n.storeName).put(t,e),i.oncomplete=o})})},e.prototype.delete=function(e){var t=this;return this.dbPromise.then(function(n){return new Promise(function(r){n.transaction([t.storeName],"readwrite").objectStore(t.storeName).delete(e).onsuccess=r})})},e}();t.default=r}]).default});