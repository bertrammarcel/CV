/* Copyright 2021, SiteSpect, Inc. All Rights Reserved. */
(function(y,e){var g=y.document;var E="onpagehide"in y?"pagehide":"unload";var b=y.SS||{};y.SS=b;var S=y.encodeURIComponent;b.Cookie=function(){var r="\v";function f(e,t,n,r,i,a,o){var f;if(!n||n.toString().substr(0,1)!==";"){if(!a){a="/"}if(!i){i=y.location.hostname.match(/^[\d.]+|(?:\.[\da-z\-]+)*[\da-z\-]+\.[\da-z\-]+$/i)[0]}if(i.substr(0,1)!=="."){i="."+i}r=!r?"":";secure";if(o){var u=o.toLowerCase();if(u==="lax"){o=";SameSite=Lax"}else if(u==="strict"){o=";SameSite=Strict"}else if(u==="none"&&r){o=";SameSite=None"}else{o=""}}if(n!=null){n=parseInt(n,10);if(isNaN(n)){n=0}n=";expires="+new Date(+new Date+n).toUTCString()}f=";path="+a+";domain="+i+n+o+r}else{f=n}return S(e)+"="+S(t)+f}function i(e,t){e=" "+e+"=";t=" "+t+";";var n=t.indexOf(e);if(n>=0){n+=e.length;return decodeURIComponent(t.substring(n,t.indexOf(";",n)))}return""}function a(e){return e.split(r)}function u(e){return e.join(r)}function e(e,t){if(!e){return}var n=i(e,g.cookie);if(!n){return""}if(t){t=t.substr(0,1).toLowerCase()}switch(t){case"s":return n;case"a":return a(n);default:return n.match(r)?a(n):n}}function t(e,t,n,r,i,a,o){if(!e||/^(?:expires|max-age|path|domain|secure|HttpOnly)$/i.test(e)){return}if(typeof t==="object"){t=u(t)}g.cookie=f(e,t,n,r,i,a,o)}return{get:e,set:t}}();b.JSEvents=function(){function a(e,t,n){if(e.addEventListener){e.addEventListener(t,n,false)}else if(e.attachEvent){e.attachEvent("on"+t,n)}}function e(e,t,n){if(e.removeEventListener){e.removeEventListener(t,n,false)}else if(e.detachEvent){e.detachEvent("on"+t,n)}}function t(e){if(!e){e=y.event}var t=e.target||e.srcElement||g;if(t.nodeType===3){t=t.parentNode}return t}function n(e){var n=false,t=false,r,i;r=function(){if(!n){if(!g.body){return setTimeout(r,1)}n=true;e()}};if(g.addEventListener){i=function(){g.removeEventListener("DOMContentLoaded",i,false);r()};g.addEventListener("DOMContentLoaded",i,false)}else if(g.attachEvent){i=function(){if(g.readyState==="complete"){g.detachEvent("onreadystatechange",i);r()}};g.attachEvent("onreadystatechange",i);try{t=y.frameElement===null}catch(e){}if(g.documentElement.doScroll&&t){(function t(){if(n){return}try{g.documentElement.doScroll("left")}catch(e){setTimeout(t,1);return}r()})()}}a(y,"load",r)}return{on:a,off:e,trgt:t,ready:n}}();b.TimerFactory=function(){function e(){var t=-1,e=-1;function n(e){t=(e||new Date).getTime();return t>0}function r(){e=(new Date).getTime();return e>0}function i(){t=-1;e=-1}function a(){if(t<=0){throw"Failure to Start Timer"}if(e<=0){throw"Failure to Stop Timer"}if(t>e){throw"Failure to Reset Timer"}return(e-t)/1e3}return{start:n,stop:r,reset:i,diff:a}}function t(){return new e}return{get:t}}();if(!b.ssGetObjPath){var a;if(y.__ssaltpath){return y.__ssaltpath}b.ssGetObjPath=function(){var e="/__ssobj/";if(a){return a}var t=g.getElementsByTagName("script");var n=g.currentScript||t[t.length-1];if(n.getAttribute("ssobj")){a=n.getAttribute("ssobj");return a}var r=n.src;var i=r;if(i.match(/\/__ssobj\//)){a=e;return e}else{i=i.replace(/[^\/]*$/,"");if(i!=r){a=i;return i}}return e};b.ssGetObjPath()}b.EventTrack=function(){var f=y.location.host,u=y.location.protocol,s=b.ssGetObjPath()+"track",c=Math.floor(Math.random()*99999999),t=[],a=[],o=false;y.addEventListener(E,function(){o=true;for(var e=0;e<a.length;e++){p(a[e])}});function l(e){t.push(e)}function r(e){e+="-3";var t=g.createElement("img");t.src=e;t.id="SS.IMG"+c;t.style.width="0px";t.style.height="0px";g.body.appendChild(t);l(t)}function d(e,t){var n=(new Date).getTime()+c,r=[],i;if(typeof e==="object"){for(i=0;i<e.length;i++){e[i]="event"+i+"="+S(e[i])}e=e.join("&")}else{e="event="+S(e)}if(t&&typeof t==="object"){for(i in t){if(t.hasOwnProperty(i)){r[r.length]="value_"+S(i)+"="+S(t[i])}}t=r.join("&")}else{t="value="+S(t!==null?t:"")}var a=s+"?"+e+"&"+t+"&x="+n;var o=u!==y.location.protocol;if(m()||o){a="//"+f+a;if(o){a=u+a}}return a}function e(e){var t=e.match(/^(?:(https?:)?\/\/)?([^\/]+)/);if(!t){return}var n=t[1];var r=t[2];f=r;u=n||u}function i(e,t){var n=e+"-b";e+="-1";var r;if(y.navigator&&navigator.sendBeacon&&(o||y.event&&(y.event.type==="unload"||y.event.type==="pagehide"))){try{r=navigator.sendBeacon(n)}catch(e){r=false}}if(r){return true}var i;try{i=y.ActiveXObject?new y.ActiveXObject("Microsoft.XMLHTTP"):new y.XMLHttpRequest;i.open("GET",e,!t)}catch(e){return false}try{i.setRequestHeader("X-Requested-With","XMLHttpRequest");i.setRequestHeader("Accept","*/*")}catch(e){}try{i.send(null)}catch(e){if(e.number&65535!==1223){return false}}if(t){v(i,this,0)}else{i.onreadystatechange=function(){v(i,this,0)}}l(i);return true}function v(t,n,e){if(typeof y.__ssmMetricResponseReadyChange==="undefined"&&e<10){setTimeout(function(){v(t,n,e+1)},1e3)}else{if(typeof y.__ssmMetricResponseReadyChange!=="undefined"){y.__ssmMetricResponseReadyChange.forEach(function(e){e(t,n)})}}}function h(e){e+="-2";var t=new Image;t.src=e;l(t)}function m(){return f!==y.location.host}function n(e,t,n){var r=d(e,t);var i={url:r,sync:n,ran:0};a.push(i);if(m()||o){p(i)}else{setTimeout(function(){if(!o){p(i)}},200)}return true}function p(e){if(++e.ran>1){return}var t=e.url;var n=e.sync;if(m()||!i(t,n)){if(u==="https:"){r(t)}else{h(t)}}}n.beaconPatched=true;return{metric:n,rp:n,rpAsync:function(e,t){n(e,t,false)},rpSync:function(e,t){n(e,t,true)},r:t,setDomain:e}}();b.PageTimer=function(){var i=b.JSEvents,a,o;function f(t,n){var r=false;return function(){if(o&&!r){r=true;if(a.stop()){try{var e=a.diff();if(e<=1795){b.EventTrack.rp(t,e,n)}}catch(e){}}}}}function e(e,t,n){a=b.TimerFactory.get();o=a.start(n);if(o){var r=false;if(e==="ready"){i.ready(f(t,false));r=true}else if(e==="load"){i.on(y,"load",f(t,false));r=true}else if(e==="dwell"){i.on(y,E,f(t,true));r=true}else if(e==="abandon"){unloadEvent=f(t,true);i.on(y,E,unloadEvent);i.on(y,"load",function(){i.off(y,E,unloadEvent)});r=true}return r}else{return false}}return{time:e}}();b.Debug=function(){function e(e){y.addEventListener("error",t,false)}function t(e){var t=e.filename;if(t.match(/scripterror/i)){t="externaljsfile"}b.EventTrack.rp("js-error",{path:e.filename,line:e.lineno,error:e.message})}return{trackJSErrors:e}}();b.Util=function(){function r(e,t){if(Element.prototype.matches){return e.matches(t)}var n=(e.document||e.ownerDocument).querySelectorAll(t),r=n.length;while(--r>=0&&n.item(r)!==e){}return r>-1}function e(e,t){if(Element.prototype.closest){return e.closest(t)}var n=e;do{if(r(n,t))return n;n=n.parentElement||n.parentNode}while(n!==null&&n.nodeType===1);return null}return{elementClosest:e,elementMatches:r}}()})(this);
/* Copyright 2017, SiteSpect, Inc. All Rights Reserved. */
var ss_dom_var=function(){"use strict";var p=1e3;var h=1e3;var s=[];var _=null;var i=[];var e={};var m;var b;var t;var g;var y=false;var w=false;var S=false;var r=[];var o={};var u=[];var E=[];var A;var O={};var C={childList:true,attributes:true,characterData:true,subtree:true};var M="data-ss-variation-applied";var n="(?#i)";var N=function(t){var e=window.SS||{};e.getAsmtData=function(){return t};if(!e.ssGetObjPath){var a;e.ssGetObjPath=function(){var t="/__ssobj/";if(typeof __ssaltpath!=="undefined"){return __ssaltpath}if(a){return a}var e=document.getElementsByTagName("script");var r=document.currentScript||e[e.length-1];if(r.getAttribute("ssobj")){a=r.getAttribute("ssobj");return a}var i=r.src;var n=i;if(n.match(/\/__ssobj\//)){a=t;return t}else{n=n.replace(/[^\/]*$/,"");if(n!=i){a=n;return n}}return t}}e.ssGetObjPath();window.SS=e};N();var a=function(){try{A=new MutationObserver(t)}catch(t){}function t(t){t.forEach(function(t){var e=i(t.target);if(!w&&document.body.contains(e)){var r=n(e);if(r){r.forEach(function(t){s(e,t)})}}});e()}function i(t){var e;var r=t;while(r){if(r.nodeType===Node.ELEMENT_NODE){e=e||r;if(r.getAttribute(M)||E.indexOf(t)>-1){return r}}r=r.parentNode}return e}function e(){E.forEach(function(t,e){if(!document.querySelector("["+M+'="'+e+'"]')){delete E[e];delete u[e]}})}function c(t,e){t.innerHTML=e}function f(e,r){Object.keys(r).forEach(function(t){e.style[t]=r[t]})}function d(e,r){Object.keys(r).forEach(function(t){e.setAttribute(t,r[t])})}function l(t,e,r,i){if(typeof i==="string"){i=parseInt(i)}var n=null;var a="data-ss-v"+r+"-apply-once-restriction";if(i){n=t.getAttribute(a)}if(n===null){try{e.apply(t)}catch(t){return false}if(i){t.setAttribute(a,true)}}}function r(t){if(!t.selector){return 0}if(!m(t)){return 0}var e=document.querySelectorAll(t.selector);var r=0;var i;for(i=0;i<e.length;i++){if(y&&typeof __ssedit!=="undefined"&&__ssedit.isVEContent(e[i])){continue}r+=a(e[i],t)}return r}function n(t){var e=t.getAttribute(M);if(e===null){e=E.indexOf(t);if(e===-1){e=E.length;E[e]=t;if(A&&!w){A.observe(t,C)}}t.setAttribute(M,e)}var r=u[e];if(!r){r=u[e]=[]}return r}function a(t,e){var r=n(t);if(r.indexOf(e)===-1){r.push(e);return s(t,e)}return 0}function s(e,t){if(!m(t)){return}var r;var i=(new Date).getTime();var n=0;if(S){return}while(n<t.applied.length&&t.applied[n]+h<i){n++}t.applied.push(i);if(n){t.applied.splice(0,n)}if(t.applied.length>=p){console.warn("Possible infinite loop detected, aborting");return 0}if(y){r=e.ss_revert||e.cloneNode(true)}if(t.html){c(e,t.html)}if(t.css){f(e,t.css)}if(t.attributes){d(e,t.attributes)}if(t.custom){l(e,t.custom,t.id,t.csf_apply_once)}if(!t.counted&&t.trigger_counted&&!O[t.campaign_id]){t.counted=true;O[t.campaign_id]=true;if(typeof g!=="function"){g=N}b({handler:g,payload:O,target_domain:_})}v(t.id,1);if(e.hasAttribute("data-sspvid")){var a=document.querySelector(t.selector);if(t.custom&&!a&&t.attributes&&t.attributes["data-sspvid"]){a=document.querySelector('[data-sspvid="'+t.attributes["data-sspvid"]+'"]')}if(a){if(t.custom){var s=["data-sspvid","data-ss-sole-change","data-sspv-control","data-ss-fe-edit-type","data-ss-display-name","data-ss-orig-order","data-ssmid","data-ss-metric-name"];s.forEach(function(t){if(e.hasAttribute(t)){a.setAttribute(t,e.getAttribute(t))}});var o=Array.prototype.slice.call(e.attributes).filter(function(t){return t.name.match(/^data-ss-(?:control-)?reference-node-/)});o.forEach(function(t){a.setAttribute(t.name,t.value)})}if(y){if(r){a.ss_revert=r}if(typeof __ssedit!=="undefined"){__ssedit.outlineEdited(a)}}if(!a.hasAttribute(M)&&e.hasAttribute(M)){a.setAttribute(M,e.getAttribute(M));var u=E.indexOf(e);if(u>-1){E[u]=a}if(A&&!w){A.observe(a,C)}}}}else if(e.hasAttribute("data-ssmid")&&y){if(typeof __ssedit!=="undefined"){__ssedit.outlineEdited(e)}}if(A){A.takeRecords()}return 1}function v(t,e){o[t]=o[t]||0;o[t]+=e;var r="#ssp_history_panel .ss_csf_applied_"+t;var i=document.querySelectorAll(r);for(var n=0;n<i.length;n++){if(o[t]){i[n].style.display="block"}else{i[n].style.display="none"}}}return r}();function c(t){if(!(t instanceof Array)){t=s}var e=t.map(a).reduce(function(t,e){return t+e},0);return e}function q(t){return!!(t&&t.match(/\(\?#[^)]+_ss-invert\)/))}function f(t){return t.replace(/\(\?#[^)]*\)/g,"")}function T(t){var e=t.indexOf(n)!==-1?"i":"";var r=f(t);return new RegExp(r,e)}function d(t){return typeof t!=="undefined"&&t!==null}m=function(){function a(t){try{return t.script_criterion()}catch(t){return false}}function s(t){var e=!!document.location.hash.match(T(t.hash_criterion));if(q(t.hash_criterion)){e=!e}return e}function o(t){var e=document.location.hash.indexOf("?")+1,r=[""];if(e){r=document.location.hash.substring(e).split("&")}return i(t.hashquery_name_criterion,t.hashquery_value_criterion,r)}function u(t){var e=!!document.location.pathname.match(T(t.path_criterion));if(q(t.path_criterion)){e=!e}return e}function c(t){var e=document.location.search.substring(1).split("&");return i(t.query_name_criterion,t.query_value_criterion,e)}function i(t,e,r){var i=q(t);var n=!i;var a=q(e);var s=!a;var o=i||a;var u=i&&a;var c=T(t);var f=T(e);var d;var l;var v;var p=r.forEach(function(t){var e=t.split("=");var r=e.shift();var i=e.join("=");var n=r.match(c);var a=i.match(f);d=d||n;l=l||a;v=v||n&&a});if(n&&s){return v}else if(i&&s){return l&&!d}else if(n&&a){return!v}else{return!d&&!l}}return function(t){var e,r,i={Path:u,Hash:s,Query:c,HashQuery:o,Custom:a};var n=false;for(e=0;e<t.criteria.length;e++){r=t.criteria[e];if(d(r.GroupNumber)&&n&&d(r.Pre)&&d(t.criteria[r.Pre])&&r.GroupNumber===t.criteria[r.Pre].GroupNumber){continue}n=i[r.Type]&&i[r.Type](r);if(!n){if(!(d(r.GroupNumber)&&d(r.Next)&&d(t.criteria[r.Next])&&r.GroupNumber===t.criteria[r.Next].GroupNumber)){return false}}}return true}}();b=l({target:SS.ssGetObjPath()+"asmt_update"});t=l({target:SS.ssGetObjPath()+"api",alterRequest:function(t){t.setRequestHeader("X-SiteSpect-CSM-Url",window.location.href)}});function l(t){t=t||{};var i=t.target;var n=t.alterRequest;var e;var r=100;var a;var s;var o;function u(){d();var t=JSON.stringify(a),e=new XMLHttpRequest;if(o){o=o.replace(/\/$/,"")}var r=o?o+i:i;e.open("POST",r);if(n){n(e)}e.setRequestHeader("Content-Type","application/json;charset=UTF-8");e.withCredentials=true;e.addEventListener("load",c,false);e.send(t)}function c(t){var e;try{e=JSON.parse(t.target.response);if(typeof s==="function"){s(e,this)}v(e,0)}catch(t){}}function f(t){if(t&&e){d()}else if(e){return}e=setTimeout(u,r)}function d(){clearTimeout(e);e=null}return function(t){s=t.handler;a=t.payload;o=t.target_domain;if(!e){f()}}}function v(e,t){if(typeof window.__sscCSFCountStatusChange==="undefined"&&t<5){setTimeout(function(){v(e,t+1)},1e3)}else{if(typeof window.__sscCSFCountStatusChange!=="undefined"){window.__sscCSFCountStatusChange.forEach(function(t){t(e)})}}}function j(t){setTimeout(function(){w=!!t.is_ve_edit_mode},5e3)}function R(t){if(t){s=t.variations||s;e=t.timestamps||e;j(t);y=!!t.is_ve_edit_mode;_=t.current_domain}s.forEach(function(t){t.applied=t.applied||[]});r.forEach(function(t){t(s)})}function x(t){i=t?t.metrics||i:i}function G(t){r.push(t);t(s)}function P(t){return o[t]||0}function V(t){g=t}R(window.__ss_variations);x(window.__ss_variations);document.addEventListener("ready",function(){if(!s.length){R(window.__ss_variations)}if(!i.length){x(window.__ss_variations)}},false);function k(){if(y){S=true}}function L(){if(y){S=false}}function D(t){var r=t.identifying_attr_key;var i=t.identifying_attr_val;var n=t.identifying_script_content_regex;var a=t.new_selector;if(!y){return}Object.keys(s).forEach(function(t){var e=s[t];if(r&&e.attributes&&e.attributes[r]&&e.attributes[r]===i||n&&e.custom&&e.custom.toString().match(n)){e.selector=a}})}function H(r){var t=true;if(s.length&&!w){var i=r.getAttribute("data-sspvid");if(i){t=s.some(function(t){if(t.attributes&&t.attributes["data-sspvid"]===i){var e=r.getAttribute("data-ss-fe-edit-type")==="frontend_order";return!t.custom||e}})}}return t}function F(t){var e=[];var r={visits:[{AsmtCounted:[],Data:{}}]};t.forEach(function(t){r.visits[0].Data[t.id]={Hits:1};if(t.trigger_counting){t.vg_ids.forEach(function(t){if(e.indexOf(t)<=-1){e.push(t)}})}});if(e.length>0){r.visits[0].AsmtCounted=e}return r}function I(){var e=[];var r=false;i.forEach(function(t){if(m(t)){e.push(t);if(t.trigger_counting&&t.tc_ids&&t.tc_ids instanceof Array){t.tc_ids.forEach(function(t){if(!O[t]){O[t]=true;r=true}})}}});if(e.length>0){t({handler:function(t,e){function r(e,t){if(typeof window.__ssmCSMetricResponseReadyChange==="undefined"&&t<5){setTimeout(function(){r(e,t+1)},1e3)}else{if(typeof window.__ssmCSMetricResponseReadyChange!=="undefined"){window.__ssmCSMetricResponseReadyChange.forEach(function(t){t(e.getResponseHeader("SiteSpect-Metrics-Info"))})}}}r(e,0)},payload:F(e),target_domain:_});if(r){b({handler:g,target_domain:_})}}}return{applyVariations:c,applySingleVariation:a,setVariations:R,setMetrics:x,registerVariationWatcher:G,checkVariationApplied:P,setAsmtCallback:V,pauseVariations:k,unpauseVariations:L,updateVariationSelector:D,isSafeToEdit:H,evaluateMetrics:I}}();(function(){"use strict";function e(e){var t={childList:true,attributes:true,subtree:true};var r;var i;var n;var a=e.callback;var s=document.querySelector("html");if(s){if(window.MutationObserver){i=new MutationObserver(c);r=s;n=i.observe.bind(i,r,t);n()}else{o(s)}}function o(t){t.addEventListener("DOMSubtreeModified",f,false)}function u(t){t.removeEventListener("DOMSubtreeModified",f,false)}function c(){if(i){i.disconnect()}var t=document.querySelectorAll(e.selector);if(t.length>0){a()}if(n){n()}}function f(){u(s);c();o(s)}}ss_dom_var.registerVariationWatcher(function(t){t.forEach(function(t){e({selector:t.selector,callback:ss_dom_var.applySingleVariation.bind(ss_dom_var,t)})})});var t=null;setInterval(function(){if(t===null||t!==window.location.href){t=window.location.href;ss_dom_var.evaluateMetrics()}},500)})();
/* Copyright 2016, SiteSpect, Inc. All Rights Reserved. */
if(!window.SS){window.SS={}}SS.SPA=function(){"use strict";var n=1;var i=document.querySelectorAll.bind(document);function t(t){var o={childList:true,attributes:true};var c;var u;var f="ss-modified-"+n++;var s=e.bind(null,t.dynamicContainer,f);var d;var l=t.callback||t.callbackFunction;if(i(t.staticContainer).length>0){if(window.MutationObserver){if(t.watchSubtree){o.subtree=true}u=new MutationObserver(S);c=i(t.staticContainer)[0];d=u.observe.bind(u,c,o);d()}else{a(i(t.staticContainer),v)}if(t.runCallbackNow){l()}}function v(n){n.addEventListener("DOMSubtreeModified",w,false)}function b(n){n.removeEventListener("DOMSubtreeModified",w,false)}function S(){if(u){u.disconnect()}var n=s(true);if(n.length>0){a(n,r.bind(null,f));l()}if(d){d()}}function w(){a(i(t.staticContainer),b);S();a(i(t.staticContainer),v)}}function e(n,t,e){var a=[n];if(e){a.push(":not(."+t+")")}return i(a.join(""))}function a(n,i){[].forEach.call(n,i)}function r(n,i){if(i.className.indexOf(n)===-1){i.className+=" "+n}}return{dynamicModify:t}}();