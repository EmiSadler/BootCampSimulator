(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))C(N);new MutationObserver(N=>{for(const L of N)if(L.type==="childList")for(const I of L.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&C(I)}).observe(document,{childList:!0,subtree:!0});function u(N){const L={};return N.integrity&&(L.integrity=N.integrity),N.referrerPolicy&&(L.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?L.credentials="include":N.crossOrigin==="anonymous"?L.credentials="omit":L.credentials="same-origin",L}function C(N){if(N.ep)return;N.ep=!0;const L=u(N);fetch(N.href,L)}})();function Fu(y){return y&&y.__esModule&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y}var Ms={exports:{}},Tr={},Rs={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eu;function Od(){if(Eu)return G;Eu=1;var y=Symbol.for("react.element"),d=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),I=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),re=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),T=Symbol.iterator;function B(p){return p===null||typeof p!="object"?null:(p=T&&p[T]||p["@@iterator"],typeof p=="function"?p:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,Z={};function V(p,v,Y){this.props=p,this.context=v,this.refs=Z,this.updater=Y||le}V.prototype.isReactComponent={},V.prototype.setState=function(p,v){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,v,"setState")},V.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function R(){}R.prototype=V.prototype;function se(p,v,Y){this.props=p,this.context=v,this.refs=Z,this.updater=Y||le}var ce=se.prototype=new R;ce.constructor=se,J(ce,V.prototype),ce.isPureReactComponent=!0;var pe=Array.isArray,Ce=Object.prototype.hasOwnProperty,me={current:null},Ee={key:!0,ref:!0,__self:!0,__source:!0};function Pe(p,v,Y){var Q,X={},K=null,ae=null;if(v!=null)for(Q in v.ref!==void 0&&(ae=v.ref),v.key!==void 0&&(K=""+v.key),v)Ce.call(v,Q)&&!Ee.hasOwnProperty(Q)&&(X[Q]=v[Q]);var te=arguments.length-2;if(te===1)X.children=Y;else if(1<te){for(var de=Array(te),De=0;De<te;De++)de[De]=arguments[De+2];X.children=de}if(p&&p.defaultProps)for(Q in te=p.defaultProps,te)X[Q]===void 0&&(X[Q]=te[Q]);return{$$typeof:y,type:p,key:K,ref:ae,props:X,_owner:me.current}}function vt(p,v){return{$$typeof:y,type:p.type,key:v,ref:p.ref,props:p.props,_owner:p._owner}}function ct(p){return typeof p=="object"&&p!==null&&p.$$typeof===y}function jt(p){var v={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(Y){return v[Y]})}var rt=/\/+/g;function Be(p,v){return typeof p=="object"&&p!==null&&p.key!=null?jt(""+p.key):v.toString(36)}function Ye(p,v,Y,Q,X){var K=typeof p;(K==="undefined"||K==="boolean")&&(p=null);var ae=!1;if(p===null)ae=!0;else switch(K){case"string":case"number":ae=!0;break;case"object":switch(p.$$typeof){case y:case d:ae=!0}}if(ae)return ae=p,X=X(ae),p=Q===""?"."+Be(ae,0):Q,pe(X)?(Y="",p!=null&&(Y=p.replace(rt,"$&/")+"/"),Ye(X,v,Y,"",function(De){return De})):X!=null&&(ct(X)&&(X=vt(X,Y+(!X.key||ae&&ae.key===X.key?"":(""+X.key).replace(rt,"$&/")+"/")+p)),v.push(X)),1;if(ae=0,Q=Q===""?".":Q+":",pe(p))for(var te=0;te<p.length;te++){K=p[te];var de=Q+Be(K,te);ae+=Ye(K,v,Y,de,X)}else if(de=B(p),typeof de=="function")for(p=de.call(p),te=0;!(K=p.next()).done;)K=K.value,de=Q+Be(K,te++),ae+=Ye(K,v,Y,de,X);else if(K==="object")throw v=String(p),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return ae}function Ve(p,v,Y){if(p==null)return p;var Q=[],X=0;return Ye(p,Q,"","",function(K){return v.call(Y,K,X++)}),Q}function Fe(p){if(p._status===-1){var v=p._result;v=v(),v.then(function(Y){(p._status===0||p._status===-1)&&(p._status=1,p._result=Y)},function(Y){(p._status===0||p._status===-1)&&(p._status=2,p._result=Y)}),p._status===-1&&(p._status=0,p._result=v)}if(p._status===1)return p._result.default;throw p._result}var ye={current:null},j={transition:null},W={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:j,ReactCurrentOwner:me};function P(){throw Error("act(...) is not supported in production builds of React.")}return G.Children={map:Ve,forEach:function(p,v,Y){Ve(p,function(){v.apply(this,arguments)},Y)},count:function(p){var v=0;return Ve(p,function(){v++}),v},toArray:function(p){return Ve(p,function(v){return v})||[]},only:function(p){if(!ct(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},G.Component=V,G.Fragment=u,G.Profiler=N,G.PureComponent=se,G.StrictMode=C,G.Suspense=H,G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,G.act=P,G.cloneElement=function(p,v,Y){if(p==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+p+".");var Q=J({},p.props),X=p.key,K=p.ref,ae=p._owner;if(v!=null){if(v.ref!==void 0&&(K=v.ref,ae=me.current),v.key!==void 0&&(X=""+v.key),p.type&&p.type.defaultProps)var te=p.type.defaultProps;for(de in v)Ce.call(v,de)&&!Ee.hasOwnProperty(de)&&(Q[de]=v[de]===void 0&&te!==void 0?te[de]:v[de])}var de=arguments.length-2;if(de===1)Q.children=Y;else if(1<de){te=Array(de);for(var De=0;De<de;De++)te[De]=arguments[De+2];Q.children=te}return{$$typeof:y,type:p.type,key:X,ref:K,props:Q,_owner:ae}},G.createContext=function(p){return p={$$typeof:I,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},p.Provider={$$typeof:L,_context:p},p.Consumer=p},G.createElement=Pe,G.createFactory=function(p){var v=Pe.bind(null,p);return v.type=p,v},G.createRef=function(){return{current:null}},G.forwardRef=function(p){return{$$typeof:F,render:p}},G.isValidElement=ct,G.lazy=function(p){return{$$typeof:_,_payload:{_status:-1,_result:p},_init:Fe}},G.memo=function(p,v){return{$$typeof:re,type:p,compare:v===void 0?null:v}},G.startTransition=function(p){var v=j.transition;j.transition={};try{p()}finally{j.transition=v}},G.unstable_act=P,G.useCallback=function(p,v){return ye.current.useCallback(p,v)},G.useContext=function(p){return ye.current.useContext(p)},G.useDebugValue=function(){},G.useDeferredValue=function(p){return ye.current.useDeferredValue(p)},G.useEffect=function(p,v){return ye.current.useEffect(p,v)},G.useId=function(){return ye.current.useId()},G.useImperativeHandle=function(p,v,Y){return ye.current.useImperativeHandle(p,v,Y)},G.useInsertionEffect=function(p,v){return ye.current.useInsertionEffect(p,v)},G.useLayoutEffect=function(p,v){return ye.current.useLayoutEffect(p,v)},G.useMemo=function(p,v){return ye.current.useMemo(p,v)},G.useReducer=function(p,v,Y){return ye.current.useReducer(p,v,Y)},G.useRef=function(p){return ye.current.useRef(p)},G.useState=function(p){return ye.current.useState(p)},G.useSyncExternalStore=function(p,v,Y){return ye.current.useSyncExternalStore(p,v,Y)},G.useTransition=function(){return ye.current.useTransition()},G.version="18.3.1",G}var Pu;function As(){return Pu||(Pu=1,Rs.exports=Od()),Rs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function Id(){if(Tu)return Tr;Tu=1;var y=As(),d=Symbol.for("react.element"),u=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,N=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L={key:!0,ref:!0,__self:!0,__source:!0};function I(F,H,re){var _,T={},B=null,le=null;re!==void 0&&(B=""+re),H.key!==void 0&&(B=""+H.key),H.ref!==void 0&&(le=H.ref);for(_ in H)C.call(H,_)&&!L.hasOwnProperty(_)&&(T[_]=H[_]);if(F&&F.defaultProps)for(_ in H=F.defaultProps,H)T[_]===void 0&&(T[_]=H[_]);return{$$typeof:d,type:F,key:B,ref:le,props:T,_owner:N.current}}return Tr.Fragment=u,Tr.jsx=I,Tr.jsxs=I,Tr}var zu;function Fd(){return zu||(zu=1,Ms.exports=Id()),Ms.exports}var o=Fd(),q=As();const Ad=Fu(q);var Ui={},Ds={exports:{}},Je={},Os={exports:{}},Is={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function bd(){return Lu||(Lu=1,function(y){function d(j,W){var P=j.length;j.push(W);e:for(;0<P;){var p=P-1>>>1,v=j[p];if(0<N(v,W))j[p]=W,j[P]=v,P=p;else break e}}function u(j){return j.length===0?null:j[0]}function C(j){if(j.length===0)return null;var W=j[0],P=j.pop();if(P!==W){j[0]=P;e:for(var p=0,v=j.length,Y=v>>>1;p<Y;){var Q=2*(p+1)-1,X=j[Q],K=Q+1,ae=j[K];if(0>N(X,P))K<v&&0>N(ae,X)?(j[p]=ae,j[K]=P,p=K):(j[p]=X,j[Q]=P,p=Q);else if(K<v&&0>N(ae,P))j[p]=ae,j[K]=P,p=K;else break e}}return W}function N(j,W){var P=j.sortIndex-W.sortIndex;return P!==0?P:j.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var L=performance;y.unstable_now=function(){return L.now()}}else{var I=Date,F=I.now();y.unstable_now=function(){return I.now()-F}}var H=[],re=[],_=1,T=null,B=3,le=!1,J=!1,Z=!1,V=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ce(j){for(var W=u(re);W!==null;){if(W.callback===null)C(re);else if(W.startTime<=j)C(re),W.sortIndex=W.expirationTime,d(H,W);else break;W=u(re)}}function pe(j){if(Z=!1,ce(j),!J)if(u(H)!==null)J=!0,Fe(Ce);else{var W=u(re);W!==null&&ye(pe,W.startTime-j)}}function Ce(j,W){J=!1,Z&&(Z=!1,R(Pe),Pe=-1),le=!0;var P=B;try{for(ce(W),T=u(H);T!==null&&(!(T.expirationTime>W)||j&&!jt());){var p=T.callback;if(typeof p=="function"){T.callback=null,B=T.priorityLevel;var v=p(T.expirationTime<=W);W=y.unstable_now(),typeof v=="function"?T.callback=v:T===u(H)&&C(H),ce(W)}else C(H);T=u(H)}if(T!==null)var Y=!0;else{var Q=u(re);Q!==null&&ye(pe,Q.startTime-W),Y=!1}return Y}finally{T=null,B=P,le=!1}}var me=!1,Ee=null,Pe=-1,vt=5,ct=-1;function jt(){return!(y.unstable_now()-ct<vt)}function rt(){if(Ee!==null){var j=y.unstable_now();ct=j;var W=!0;try{W=Ee(!0,j)}finally{W?Be():(me=!1,Ee=null)}}else me=!1}var Be;if(typeof se=="function")Be=function(){se(rt)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,Ve=Ye.port2;Ye.port1.onmessage=rt,Be=function(){Ve.postMessage(null)}}else Be=function(){V(rt,0)};function Fe(j){Ee=j,me||(me=!0,Be())}function ye(j,W){Pe=V(function(){j(y.unstable_now())},W)}y.unstable_IdlePriority=5,y.unstable_ImmediatePriority=1,y.unstable_LowPriority=4,y.unstable_NormalPriority=3,y.unstable_Profiling=null,y.unstable_UserBlockingPriority=2,y.unstable_cancelCallback=function(j){j.callback=null},y.unstable_continueExecution=function(){J||le||(J=!0,Fe(Ce))},y.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):vt=0<j?Math.floor(1e3/j):5},y.unstable_getCurrentPriorityLevel=function(){return B},y.unstable_getFirstCallbackNode=function(){return u(H)},y.unstable_next=function(j){switch(B){case 1:case 2:case 3:var W=3;break;default:W=B}var P=B;B=W;try{return j()}finally{B=P}},y.unstable_pauseExecution=function(){},y.unstable_requestPaint=function(){},y.unstable_runWithPriority=function(j,W){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var P=B;B=j;try{return W()}finally{B=P}},y.unstable_scheduleCallback=function(j,W,P){var p=y.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?p+P:p):P=p,j){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=P+v,j={id:_++,callback:W,priorityLevel:j,startTime:P,expirationTime:v,sortIndex:-1},P>p?(j.sortIndex=P,d(re,j),u(H)===null&&j===u(re)&&(Z?(R(Pe),Pe=-1):Z=!0,ye(pe,P-p))):(j.sortIndex=v,d(H,j),J||le||(J=!0,Fe(Ce))),j},y.unstable_shouldYield=jt,y.unstable_wrapCallback=function(j){var W=B;return function(){var P=B;B=W;try{return j.apply(this,arguments)}finally{B=P}}}}(Is)),Is}var Mu;function Wd(){return Mu||(Mu=1,Os.exports=bd()),Os.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru;function Ud(){if(Ru)return Je;Ru=1;var y=As(),d=Wd();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C=new Set,N={};function L(e,t){I(e,t),I(e+"Capture",t)}function I(e,t){for(N[e]=t,e=0;e<t.length;e++)C.add(t[e])}var F=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),H=Object.prototype.hasOwnProperty,re=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},T={};function B(e){return H.call(T,e)?!0:H.call(_,e)?!1:re.test(e)?T[e]=!0:(_[e]=!0,!1)}function le(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function J(e,t,n,r){if(t===null||typeof t>"u"||le(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Z(e,t,n,r,i,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new Z(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];V[t]=new Z(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new Z(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new Z(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new Z(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new Z(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new Z(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new Z(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new Z(e,5,!1,e.toLowerCase(),null,!1,!1)});var R=/[\-:]([a-z])/g;function se(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(R,se);V[t]=new Z(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(R,se);V[t]=new Z(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(R,se);V[t]=new Z(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new Z(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new Z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new Z(e,1,!1,e.toLowerCase(),null,!0,!0)});function ce(e,t,n,r){var i=V.hasOwnProperty(t)?V[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(J(t,n,i,r)&&(n=null),r||i===null?B(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pe=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ce=Symbol.for("react.element"),me=Symbol.for("react.portal"),Ee=Symbol.for("react.fragment"),Pe=Symbol.for("react.strict_mode"),vt=Symbol.for("react.profiler"),ct=Symbol.for("react.provider"),jt=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),Be=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),Ve=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),j=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var P=Object.assign,p;function v(e){if(p===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);p=t&&t[1]||""}return`
`+p+e}var Y=!1;function Q(e,t){if(!e||Y)return"";Y=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var i=g.stack.split(`
`),l=r.stack.split(`
`),s=i.length-1,a=l.length-1;1<=s&&0<=a&&i[s]!==l[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==l[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==l[a]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{Y=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?v(e):""}function X(e){switch(e.tag){case 5:return v(e.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return e=Q(e.type,!1),e;case 11:return e=Q(e.type.render,!1),e;case 1:return e=Q(e.type,!0),e;default:return""}}function K(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ee:return"Fragment";case me:return"Portal";case vt:return"Profiler";case Pe:return"StrictMode";case Be:return"Suspense";case Ye:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jt:return(e.displayName||"Context")+".Consumer";case ct:return(e._context.displayName||"Context")+".Provider";case rt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ve:return t=e.displayName||null,t!==null?t:K(e.type)||"Memo";case Fe:t=e._payload,e=e._init;try{return K(e(t))}catch{}}return null}function ae(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return K(t);case 8:return t===Pe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function te(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function de(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function De(e){var t=de(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hn(e){e._valueTracker||(e._valueTracker=De(e))}function Lr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=de(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function gn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Un(e,t){var n=t.checked;return P({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bn(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=te(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Mr(e,t){t=t.checked,t!=null&&ce(e,"checked",t,!1)}function Hn(e,t){Mr(e,t);var n=te(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ie(e,t.type,n):t.hasOwnProperty("defaultValue")&&ie(e,t.type,te(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ie(e,t,n){(t!=="number"||gn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var oe=Array.isArray;function je(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+te(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return P({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xt(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(oe(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:te(n)}}function $n(e,t){var n=te(t.value),r=te(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function en(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rr,Ws=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bu=["Webkit","ms","Moz","O"];Object.keys(Vn).forEach(function(e){bu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vn[t]=Vn[e]})});function Us(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vn.hasOwnProperty(e)&&Vn[e]?(""+t).trim():t+"px"}function Bs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Us(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wu=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $i(e,t){if(t){if(Wu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function Yi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=null;function Qi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gi=null,yn=null,vn=null;function Hs(e){if(e=mr(e)){if(typeof Gi!="function")throw Error(u(280));var t=e.stateNode;t&&(t=ni(t),Gi(e.stateNode,e.type,t))}}function $s(e){yn?vn?vn.push(e):vn=[e]:yn=e}function Ys(){if(yn){var e=yn,t=vn;if(vn=yn=null,Hs(e),t)for(e=0;e<t.length;e++)Hs(t[e])}}function Vs(e,t){return e(t)}function Qs(){}var qi=!1;function Gs(e,t,n){if(qi)return e(t,n);qi=!0;try{return Vs(e,t,n)}finally{qi=!1,(yn!==null||vn!==null)&&(Qs(),Ys())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=ni(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Xi=!1;if(F)try{var Gn={};Object.defineProperty(Gn,"passive",{get:function(){Xi=!0}}),window.addEventListener("test",Gn,Gn),window.removeEventListener("test",Gn,Gn)}catch{Xi=!1}function Uu(e,t,n,r,i,l,s,a,c){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(w){this.onError(w)}}var qn=!1,Dr=null,Or=!1,Ki=null,Bu={onError:function(e){qn=!0,Dr=e}};function Hu(e,t,n,r,i,l,s,a,c){qn=!1,Dr=null,Uu.apply(Bu,arguments)}function $u(e,t,n,r,i,l,s,a,c){if(Hu.apply(this,arguments),qn){if(qn){var g=Dr;qn=!1,Dr=null}else throw Error(u(198));Or||(Or=!0,Ki=g)}}function tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xs(e){if(tn(e)!==e)throw Error(u(188))}function Yu(e){var t=e.alternate;if(!t){if(t=tn(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Xs(i),e;if(l===r)return Xs(i),t;l=l.sibling}throw Error(u(188))}if(n.return!==r.return)n=i,r=l;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=l;break}if(a===r){s=!0,r=i,n=l;break}a=a.sibling}if(!s){for(a=l.child;a;){if(a===n){s=!0,n=l,r=i;break}if(a===r){s=!0,r=l,n=i;break}a=a.sibling}if(!s)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function Ks(e){return e=Yu(e),e!==null?Js(e):null}function Js(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Js(e);if(t!==null)return t;e=e.sibling}return null}var Zs=d.unstable_scheduleCallback,eo=d.unstable_cancelCallback,Vu=d.unstable_shouldYield,Qu=d.unstable_requestPaint,Se=d.unstable_now,Gu=d.unstable_getCurrentPriorityLevel,Ji=d.unstable_ImmediatePriority,to=d.unstable_UserBlockingPriority,Ir=d.unstable_NormalPriority,qu=d.unstable_LowPriority,no=d.unstable_IdlePriority,Fr=null,wt=null;function Xu(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Fr,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Zu,Ku=Math.log,Ju=Math.LN2;function Zu(e){return e>>>=0,e===0?32:31-(Ku(e)/Ju|0)|0}var Ar=64,br=4194304;function Xn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Xn(a):(l&=s,l!==0&&(r=Xn(l)))}else s=n&~i,s!==0?r=Xn(s):l!==0&&(r=Xn(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function ec(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-dt(l),a=1<<s,c=i[s];c===-1?((a&n)===0||(a&r)!==0)&&(i[s]=ec(a,t)):c<=t&&(e.expiredLanes|=a),l&=~a}}function Zi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ro(){var e=Ar;return Ar<<=1,(Ar&4194240)===0&&(Ar=64),e}function el(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function nc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function tl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ue=0;function io(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var lo,nl,so,oo,ao,rl=!1,Ur=[],Ot=null,It=null,Ft=null,Jn=new Map,Zn=new Map,At=[],rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uo(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":Jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zn.delete(t.pointerId)}}function er(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=mr(t),t!==null&&nl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ic(e,t,n,r,i){switch(t){case"focusin":return Ot=er(Ot,e,t,n,r,i),!0;case"dragenter":return It=er(It,e,t,n,r,i),!0;case"mouseover":return Ft=er(Ft,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Jn.set(l,er(Jn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Zn.set(l,er(Zn.get(l)||null,e,t,n,r,i)),!0}return!1}function co(e){var t=nn(e.target);if(t!==null){var n=tn(t);if(n!==null){if(t=n.tag,t===13){if(t=qs(n),t!==null){e.blockedOn=t,ao(e.priority,function(){so(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ll(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vi=r,n.target.dispatchEvent(r),Vi=null}else return t=mr(n),t!==null&&nl(t),e.blockedOn=n,!1;t.shift()}return!0}function fo(e,t,n){Br(e)&&n.delete(t)}function lc(){rl=!1,Ot!==null&&Br(Ot)&&(Ot=null),It!==null&&Br(It)&&(It=null),Ft!==null&&Br(Ft)&&(Ft=null),Jn.forEach(fo),Zn.forEach(fo)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,rl||(rl=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,lc)))}function nr(e){function t(i){return tr(i,e)}if(0<Ur.length){tr(Ur[0],e);for(var n=1;n<Ur.length;n++){var r=Ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&tr(Ot,e),It!==null&&tr(It,e),Ft!==null&&tr(Ft,e),Jn.forEach(t),Zn.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)co(n),n.blockedOn===null&&At.shift()}var xn=pe.ReactCurrentBatchConfig,Hr=!0;function sc(e,t,n,r){var i=ue,l=xn.transition;xn.transition=null;try{ue=1,il(e,t,n,r)}finally{ue=i,xn.transition=l}}function oc(e,t,n,r){var i=ue,l=xn.transition;xn.transition=null;try{ue=4,il(e,t,n,r)}finally{ue=i,xn.transition=l}}function il(e,t,n,r){if(Hr){var i=ll(e,t,n,r);if(i===null)Sl(e,t,r,$r,n),uo(e,r);else if(ic(i,e,t,n,r))r.stopPropagation();else if(uo(e,r),t&4&&-1<rc.indexOf(e)){for(;i!==null;){var l=mr(i);if(l!==null&&lo(l),l=ll(e,t,n,r),l===null&&Sl(e,t,r,$r,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Sl(e,t,r,null,n)}}var $r=null;function ll(e,t,n,r){if($r=null,e=Qi(r),e=nn(e),e!==null)if(t=tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $r=e,null}function po(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gu()){case Ji:return 1;case to:return 4;case Ir:case qu:return 16;case no:return 536870912;default:return 16}default:return 16}}var bt=null,sl=null,Yr=null;function mo(){if(Yr)return Yr;var e,t=sl,n=t.length,r,i="value"in bt?bt.value:bt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[l-r];r++);return Yr=i.slice(e,1<r?1-r:void 0)}function Vr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qr(){return!0}function ho(){return!1}function Ze(e){function t(n,r,i,l,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Qr:ho,this.isPropagationStopped=ho,this}return P(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qr)},persist:function(){},isPersistent:Qr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Ze(wn),rr=P({},wn,{view:0,detail:0}),ac=Ze(rr),al,ul,ir,Gr=P({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(al=e.screenX-ir.screenX,ul=e.screenY-ir.screenY):ul=al=0,ir=e),al)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),go=Ze(Gr),uc=P({},Gr,{dataTransfer:0}),cc=Ze(uc),dc=P({},rr,{relatedTarget:0}),cl=Ze(dc),fc=P({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),pc=Ze(fc),mc=P({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hc=Ze(mc),gc=P({},wn,{data:0}),yo=Ze(gc),yc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xc[e])?!!t[e]:!1}function dl(){return wc}var kc=P({},rr,{key:function(e){if(e.key){var t=yc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dl,charCode:function(e){return e.type==="keypress"?Vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sc=Ze(kc),_c=P({},Gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vo=Ze(_c),Cc=P({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dl}),jc=Ze(Cc),Nc=P({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ec=Ze(Nc),Pc=P({},Gr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tc=Ze(Pc),zc=[9,13,27,32],fl=F&&"CompositionEvent"in window,lr=null;F&&"documentMode"in document&&(lr=document.documentMode);var Lc=F&&"TextEvent"in window&&!lr,xo=F&&(!fl||lr&&8<lr&&11>=lr),wo=" ",ko=!1;function So(e,t){switch(e){case"keyup":return zc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _o(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function Mc(e,t){switch(e){case"compositionend":return _o(t);case"keypress":return t.which!==32?null:(ko=!0,wo);case"textInput":return e=t.data,e===wo&&ko?null:e;default:return null}}function Rc(e,t){if(kn)return e==="compositionend"||!fl&&So(e,t)?(e=mo(),Yr=sl=bt=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xo&&t.locale!=="ko"?null:t.data;default:return null}}var Dc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Co(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dc[e.type]:t==="textarea"}function jo(e,t,n,r){$s(r),t=Zr(t,"onChange"),0<t.length&&(n=new ol("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var sr=null,or=null;function Oc(e){Ho(e,0)}function qr(e){var t=Nn(e);if(Lr(t))return e}function Ic(e,t){if(e==="change")return t}var No=!1;if(F){var pl;if(F){var ml="oninput"in document;if(!ml){var Eo=document.createElement("div");Eo.setAttribute("oninput","return;"),ml=typeof Eo.oninput=="function"}pl=ml}else pl=!1;No=pl&&(!document.documentMode||9<document.documentMode)}function Po(){sr&&(sr.detachEvent("onpropertychange",To),or=sr=null)}function To(e){if(e.propertyName==="value"&&qr(or)){var t=[];jo(t,or,e,Qi(e)),Gs(Oc,t)}}function Fc(e,t,n){e==="focusin"?(Po(),sr=t,or=n,sr.attachEvent("onpropertychange",To)):e==="focusout"&&Po()}function Ac(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qr(or)}function bc(e,t){if(e==="click")return qr(t)}function Wc(e,t){if(e==="input"||e==="change")return qr(t)}function Uc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Uc;function ar(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!H.call(t,i)||!ft(e[i],t[i]))return!1}return!0}function zo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lo(e,t){var n=zo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zo(n)}}function Mo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ro(){for(var e=window,t=gn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gn(e.document)}return t}function hl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bc(e){var t=Ro(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mo(n.ownerDocument.documentElement,n)){if(r!==null&&hl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Lo(n,l);var s=Lo(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hc=F&&"documentMode"in document&&11>=document.documentMode,Sn=null,gl=null,ur=null,yl=!1;function Do(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yl||Sn==null||Sn!==gn(r)||(r=Sn,"selectionStart"in r&&hl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ur&&ar(ur,r)||(ur=r,r=Zr(gl,"onSelect"),0<r.length&&(t=new ol("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function Xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _n={animationend:Xr("Animation","AnimationEnd"),animationiteration:Xr("Animation","AnimationIteration"),animationstart:Xr("Animation","AnimationStart"),transitionend:Xr("Transition","TransitionEnd")},vl={},Oo={};F&&(Oo=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function Kr(e){if(vl[e])return vl[e];if(!_n[e])return e;var t=_n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Oo)return vl[e]=t[n];return e}var Io=Kr("animationend"),Fo=Kr("animationiteration"),Ao=Kr("animationstart"),bo=Kr("transitionend"),Wo=new Map,Uo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){Wo.set(e,t),L(t,[e])}for(var xl=0;xl<Uo.length;xl++){var wl=Uo[xl],$c=wl.toLowerCase(),Yc=wl[0].toUpperCase()+wl.slice(1);Wt($c,"on"+Yc)}Wt(Io,"onAnimationEnd"),Wt(Fo,"onAnimationIteration"),Wt(Ao,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(bo,"onTransitionEnd"),I("onMouseEnter",["mouseout","mouseover"]),I("onMouseLeave",["mouseout","mouseover"]),I("onPointerEnter",["pointerout","pointerover"]),I("onPointerLeave",["pointerout","pointerover"]),L("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),L("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),L("onBeforeInput",["compositionend","keypress","textInput","paste"]),L("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),L("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),L("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vc=new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));function Bo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$u(r,t,void 0,e),e.currentTarget=null}function Ho(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,g=a.currentTarget;if(a=a.listener,c!==l&&i.isPropagationStopped())break e;Bo(i,a,g),l=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,g=a.currentTarget,a=a.listener,c!==l&&i.isPropagationStopped())break e;Bo(i,a,g),l=c}}}if(Or)throw e=Ki,Or=!1,Ki=null,e}function he(e,t){var n=t[Pl];n===void 0&&(n=t[Pl]=new Set);var r=e+"__bubble";n.has(r)||($o(t,e,2,!1),n.add(r))}function kl(e,t,n){var r=0;t&&(r|=4),$o(n,e,r,t)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function dr(e){if(!e[Jr]){e[Jr]=!0,C.forEach(function(n){n!=="selectionchange"&&(Vc.has(n)||kl(n,!1,e),kl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Jr]||(t[Jr]=!0,kl("selectionchange",!1,t))}}function $o(e,t,n,r){switch(po(t)){case 1:var i=sc;break;case 4:i=oc;break;default:i=il}n=i.bind(null,t,n,e),i=void 0,!Xi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Sl(e,t,n,r,i){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;a!==null;){if(s=nn(a),s===null)return;if(c=s.tag,c===5||c===6){r=l=s;continue e}a=a.parentNode}}r=r.return}Gs(function(){var g=l,w=Qi(n),k=[];e:{var x=Wo.get(e);if(x!==void 0){var E=ol,M=e;switch(e){case"keypress":if(Vr(n)===0)break e;case"keydown":case"keyup":E=Sc;break;case"focusin":M="focus",E=cl;break;case"focusout":M="blur",E=cl;break;case"beforeblur":case"afterblur":E=cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=go;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=cc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=jc;break;case Io:case Fo:case Ao:E=pc;break;case bo:E=Ec;break;case"scroll":E=ac;break;case"wheel":E=Tc;break;case"copy":case"cut":case"paste":E=hc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=vo}var D=(t&4)!==0,_e=!D&&e==="scroll",m=D?x!==null?x+"Capture":null:x;D=[];for(var f=g,h;f!==null;){h=f;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,m!==null&&(S=Qn(f,m),S!=null&&D.push(fr(f,S,h)))),_e)break;f=f.return}0<D.length&&(x=new E(x,M,null,n,w),k.push({event:x,listeners:D}))}}if((t&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",x&&n!==Vi&&(M=n.relatedTarget||n.fromElement)&&(nn(M)||M[Et]))break e;if((E||x)&&(x=w.window===w?w:(x=w.ownerDocument)?x.defaultView||x.parentWindow:window,E?(M=n.relatedTarget||n.toElement,E=g,M=M?nn(M):null,M!==null&&(_e=tn(M),M!==_e||M.tag!==5&&M.tag!==6)&&(M=null)):(E=null,M=g),E!==M)){if(D=go,S="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(D=vo,S="onPointerLeave",m="onPointerEnter",f="pointer"),_e=E==null?x:Nn(E),h=M==null?x:Nn(M),x=new D(S,f+"leave",E,n,w),x.target=_e,x.relatedTarget=h,S=null,nn(w)===g&&(D=new D(m,f+"enter",M,n,w),D.target=h,D.relatedTarget=_e,S=D),_e=S,E&&M)t:{for(D=E,m=M,f=0,h=D;h;h=Cn(h))f++;for(h=0,S=m;S;S=Cn(S))h++;for(;0<f-h;)D=Cn(D),f--;for(;0<h-f;)m=Cn(m),h--;for(;f--;){if(D===m||m!==null&&D===m.alternate)break t;D=Cn(D),m=Cn(m)}D=null}else D=null;E!==null&&Yo(k,x,E,D,!1),M!==null&&_e!==null&&Yo(k,_e,M,D,!0)}}e:{if(x=g?Nn(g):window,E=x.nodeName&&x.nodeName.toLowerCase(),E==="select"||E==="input"&&x.type==="file")var O=Ic;else if(Co(x))if(No)O=Wc;else{O=Ac;var A=Fc}else(E=x.nodeName)&&E.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(O=bc);if(O&&(O=O(e,g))){jo(k,O,n,w);break e}A&&A(e,x,g),e==="focusout"&&(A=x._wrapperState)&&A.controlled&&x.type==="number"&&ie(x,"number",x.value)}switch(A=g?Nn(g):window,e){case"focusin":(Co(A)||A.contentEditable==="true")&&(Sn=A,gl=g,ur=null);break;case"focusout":ur=gl=Sn=null;break;case"mousedown":yl=!0;break;case"contextmenu":case"mouseup":case"dragend":yl=!1,Do(k,n,w);break;case"selectionchange":if(Hc)break;case"keydown":case"keyup":Do(k,n,w)}var b;if(fl)e:{switch(e){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else kn?So(e,n)&&(U="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(xo&&n.locale!=="ko"&&(kn||U!=="onCompositionStart"?U==="onCompositionEnd"&&kn&&(b=mo()):(bt=w,sl="value"in bt?bt.value:bt.textContent,kn=!0)),A=Zr(g,U),0<A.length&&(U=new yo(U,e,null,n,w),k.push({event:U,listeners:A}),b?U.data=b:(b=_o(n),b!==null&&(U.data=b)))),(b=Lc?Mc(e,n):Rc(e,n))&&(g=Zr(g,"onBeforeInput"),0<g.length&&(w=new yo("onBeforeInput","beforeinput",null,n,w),k.push({event:w,listeners:g}),w.data=b))}Ho(k,t)})}function fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Qn(e,n),l!=null&&r.unshift(fr(e,l,i)),l=Qn(e,t),l!=null&&r.push(fr(e,l,i))),e=e.return}return r}function Cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yo(e,t,n,r,i){for(var l=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,g=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&g!==null&&(a=g,i?(c=Qn(n,l),c!=null&&s.unshift(fr(n,c,a))):i||(c=Qn(n,l),c!=null&&s.push(fr(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Qc=/\r\n?/g,Gc=/\u0000|\uFFFD/g;function Vo(e){return(typeof e=="string"?e:""+e).replace(Qc,`
`).replace(Gc,"")}function ei(e,t,n){if(t=Vo(t),Vo(e)!==t&&n)throw Error(u(425))}function ti(){}var _l=null,Cl=null;function jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,qc=typeof clearTimeout=="function"?clearTimeout:void 0,Qo=typeof Promise=="function"?Promise:void 0,Xc=typeof queueMicrotask=="function"?queueMicrotask:typeof Qo<"u"?function(e){return Qo.resolve(null).then(e).catch(Kc)}:Nl;function Kc(e){setTimeout(function(){throw e})}function El(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);nr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Go(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jn=Math.random().toString(36).slice(2),kt="__reactFiber$"+jn,pr="__reactProps$"+jn,Et="__reactContainer$"+jn,Pl="__reactEvents$"+jn,Jc="__reactListeners$"+jn,Zc="__reactHandles$"+jn;function nn(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Go(e);e!==null;){if(n=e[kt])return n;e=Go(e)}return t}e=n,n=e.parentNode}return null}function mr(e){return e=e[kt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function ni(e){return e[pr]||null}var Tl=[],En=-1;function Bt(e){return{current:e}}function ge(e){0>En||(e.current=Tl[En],Tl[En]=null,En--)}function fe(e,t){En++,Tl[En]=e.current,e.current=t}var Ht={},Ae=Bt(Ht),Qe=Bt(!1),rn=Ht;function Pn(e,t){var n=e.type.contextTypes;if(!n)return Ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ge(e){return e=e.childContextTypes,e!=null}function ri(){ge(Qe),ge(Ae)}function qo(e,t,n){if(Ae.current!==Ht)throw Error(u(168));fe(Ae,t),fe(Qe,n)}function Xo(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(u(108,ae(e)||"Unknown",i));return P({},n,r)}function ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,rn=Ae.current,fe(Ae,e),fe(Qe,Qe.current),!0}function Ko(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=Xo(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,ge(Qe),ge(Ae),fe(Ae,e)):ge(Qe),fe(Qe,n)}var Pt=null,li=!1,zl=!1;function Jo(e){Pt===null?Pt=[e]:Pt.push(e)}function ed(e){li=!0,Jo(e)}function $t(){if(!zl&&Pt!==null){zl=!0;var e=0,t=ue;try{var n=Pt;for(ue=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,li=!1}catch(i){throw Pt!==null&&(Pt=Pt.slice(e+1)),Zs(Ji,$t),i}finally{ue=t,zl=!1}}return null}var Tn=[],zn=0,si=null,oi=0,it=[],lt=0,ln=null,Tt=1,zt="";function sn(e,t){Tn[zn++]=oi,Tn[zn++]=si,si=e,oi=t}function Zo(e,t,n){it[lt++]=Tt,it[lt++]=zt,it[lt++]=ln,ln=e;var r=Tt;e=zt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var l=32-dt(t)+i;if(30<l){var s=i-i%5;l=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Tt=1<<32-dt(t)+i|n<<i|r,zt=l+e}else Tt=1<<l|n<<i|r,zt=e}function Ll(e){e.return!==null&&(sn(e,1),Zo(e,1,0))}function Ml(e){for(;e===si;)si=Tn[--zn],Tn[zn]=null,oi=Tn[--zn],Tn[zn]=null;for(;e===ln;)ln=it[--lt],it[lt]=null,zt=it[--lt],it[lt]=null,Tt=it[--lt],it[lt]=null}var et=null,tt=null,ve=!1,pt=null;function ea(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ta(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,tt=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ln!==null?{id:Tt,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,tt=null,!0):!1;default:return!1}}function Rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Dl(e){if(ve){var t=tt;if(t){var n=t;if(!ta(e,t)){if(Rl(e))throw Error(u(418));t=Ut(n.nextSibling);var r=et;t&&ta(e,t)?ea(r,n):(e.flags=e.flags&-4097|2,ve=!1,et=e)}}else{if(Rl(e))throw Error(u(418));e.flags=e.flags&-4097|2,ve=!1,et=e}}}function na(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function ai(e){if(e!==et)return!1;if(!ve)return na(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jl(e.type,e.memoizedProps)),t&&(t=tt)){if(Rl(e))throw ra(),Error(u(418));for(;t;)ea(e,t),t=Ut(t.nextSibling)}if(na(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=et?Ut(e.stateNode.nextSibling):null;return!0}function ra(){for(var e=tt;e;)e=Ut(e.nextSibling)}function Ln(){tt=et=null,ve=!1}function Ol(e){pt===null?pt=[e]:pt.push(e)}var td=pe.ReactCurrentBatchConfig;function hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var a=i.refs;s===null?delete a[l]:a[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function ui(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ia(e){var t=e._init;return t(e._payload)}function la(e){function t(m,f){if(e){var h=m.deletions;h===null?(m.deletions=[f],m.flags|=16):h.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Jt(m,f),m.index=0,m.sibling=null,m}function l(m,f,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<f?(m.flags|=2,f):h):(m.flags|=2,f)):(m.flags|=1048576,f)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,f,h,S){return f===null||f.tag!==6?(f=Ns(h,m.mode,S),f.return=m,f):(f=i(f,h),f.return=m,f)}function c(m,f,h,S){var O=h.type;return O===Ee?w(m,f,h.props.children,S,h.key):f!==null&&(f.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Fe&&ia(O)===f.type)?(S=i(f,h.props),S.ref=hr(m,f,h),S.return=m,S):(S=Ri(h.type,h.key,h.props,null,m.mode,S),S.ref=hr(m,f,h),S.return=m,S)}function g(m,f,h,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Es(h,m.mode,S),f.return=m,f):(f=i(f,h.children||[]),f.return=m,f)}function w(m,f,h,S,O){return f===null||f.tag!==7?(f=mn(h,m.mode,S,O),f.return=m,f):(f=i(f,h),f.return=m,f)}function k(m,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ns(""+f,m.mode,h),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ce:return h=Ri(f.type,f.key,f.props,null,m.mode,h),h.ref=hr(m,null,f),h.return=m,h;case me:return f=Es(f,m.mode,h),f.return=m,f;case Fe:var S=f._init;return k(m,S(f._payload),h)}if(oe(f)||W(f))return f=mn(f,m.mode,h,null),f.return=m,f;ui(m,f)}return null}function x(m,f,h,S){var O=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return O!==null?null:a(m,f,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ce:return h.key===O?c(m,f,h,S):null;case me:return h.key===O?g(m,f,h,S):null;case Fe:return O=h._init,x(m,f,O(h._payload),S)}if(oe(h)||W(h))return O!==null?null:w(m,f,h,S,null);ui(m,h)}return null}function E(m,f,h,S,O){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(h)||null,a(f,m,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ce:return m=m.get(S.key===null?h:S.key)||null,c(f,m,S,O);case me:return m=m.get(S.key===null?h:S.key)||null,g(f,m,S,O);case Fe:var A=S._init;return E(m,f,h,A(S._payload),O)}if(oe(S)||W(S))return m=m.get(h)||null,w(f,m,S,O,null);ui(f,S)}return null}function M(m,f,h,S){for(var O=null,A=null,b=f,U=f=0,Re=null;b!==null&&U<h.length;U++){b.index>U?(Re=b,b=null):Re=b.sibling;var ne=x(m,b,h[U],S);if(ne===null){b===null&&(b=Re);break}e&&b&&ne.alternate===null&&t(m,b),f=l(ne,f,U),A===null?O=ne:A.sibling=ne,A=ne,b=Re}if(U===h.length)return n(m,b),ve&&sn(m,U),O;if(b===null){for(;U<h.length;U++)b=k(m,h[U],S),b!==null&&(f=l(b,f,U),A===null?O=b:A.sibling=b,A=b);return ve&&sn(m,U),O}for(b=r(m,b);U<h.length;U++)Re=E(b,m,U,h[U],S),Re!==null&&(e&&Re.alternate!==null&&b.delete(Re.key===null?U:Re.key),f=l(Re,f,U),A===null?O=Re:A.sibling=Re,A=Re);return e&&b.forEach(function(Zt){return t(m,Zt)}),ve&&sn(m,U),O}function D(m,f,h,S){var O=W(h);if(typeof O!="function")throw Error(u(150));if(h=O.call(h),h==null)throw Error(u(151));for(var A=O=null,b=f,U=f=0,Re=null,ne=h.next();b!==null&&!ne.done;U++,ne=h.next()){b.index>U?(Re=b,b=null):Re=b.sibling;var Zt=x(m,b,ne.value,S);if(Zt===null){b===null&&(b=Re);break}e&&b&&Zt.alternate===null&&t(m,b),f=l(Zt,f,U),A===null?O=Zt:A.sibling=Zt,A=Zt,b=Re}if(ne.done)return n(m,b),ve&&sn(m,U),O;if(b===null){for(;!ne.done;U++,ne=h.next())ne=k(m,ne.value,S),ne!==null&&(f=l(ne,f,U),A===null?O=ne:A.sibling=ne,A=ne);return ve&&sn(m,U),O}for(b=r(m,b);!ne.done;U++,ne=h.next())ne=E(b,m,U,ne.value,S),ne!==null&&(e&&ne.alternate!==null&&b.delete(ne.key===null?U:ne.key),f=l(ne,f,U),A===null?O=ne:A.sibling=ne,A=ne);return e&&b.forEach(function(Dd){return t(m,Dd)}),ve&&sn(m,U),O}function _e(m,f,h,S){if(typeof h=="object"&&h!==null&&h.type===Ee&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ce:e:{for(var O=h.key,A=f;A!==null;){if(A.key===O){if(O=h.type,O===Ee){if(A.tag===7){n(m,A.sibling),f=i(A,h.props.children),f.return=m,m=f;break e}}else if(A.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Fe&&ia(O)===A.type){n(m,A.sibling),f=i(A,h.props),f.ref=hr(m,A,h),f.return=m,m=f;break e}n(m,A);break}else t(m,A);A=A.sibling}h.type===Ee?(f=mn(h.props.children,m.mode,S,h.key),f.return=m,m=f):(S=Ri(h.type,h.key,h.props,null,m.mode,S),S.ref=hr(m,f,h),S.return=m,m=S)}return s(m);case me:e:{for(A=h.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(m,f.sibling),f=i(f,h.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=Es(h,m.mode,S),f.return=m,m=f}return s(m);case Fe:return A=h._init,_e(m,f,A(h._payload),S)}if(oe(h))return M(m,f,h,S);if(W(h))return D(m,f,h,S);ui(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,h),f.return=m,m=f):(n(m,f),f=Ns(h,m.mode,S),f.return=m,m=f),s(m)):n(m,f)}return _e}var Mn=la(!0),sa=la(!1),ci=Bt(null),di=null,Rn=null,Il=null;function Fl(){Il=Rn=di=null}function Al(e){var t=ci.current;ge(ci),e._currentValue=t}function bl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){di=e,Il=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(qe=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(Il!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(di===null)throw Error(u(308));Rn=e,di.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var on=null;function Wl(e){on===null?on=[e]:on.push(e)}function oa(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Wl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Lt(e,r)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yt=!1;function Ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function aa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ee&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Lt(e,n)}return i=r.interleaved,i===null?(t.next=t,Wl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Lt(e,n)}function fi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tl(e,n)}}function ua(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function pi(e,t,n,r){var i=e.updateQueue;Yt=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,g=c.next;c.next=null,s===null?l=g:s.next=g,s=c;var w=e.alternate;w!==null&&(w=w.updateQueue,a=w.lastBaseUpdate,a!==s&&(a===null?w.firstBaseUpdate=g:a.next=g,w.lastBaseUpdate=c))}if(l!==null){var k=i.baseState;s=0,w=g=c=null,a=l;do{var x=a.lane,E=a.eventTime;if((r&x)===x){w!==null&&(w=w.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var M=e,D=a;switch(x=t,E=n,D.tag){case 1:if(M=D.payload,typeof M=="function"){k=M.call(E,k,x);break e}k=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=D.payload,x=typeof M=="function"?M.call(E,k,x):M,x==null)break e;k=P({},k,x);break e;case 2:Yt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,x=i.effects,x===null?i.effects=[a]:x.push(a))}else E={eventTime:E,lane:x,tag:a.tag,payload:a.payload,callback:a.callback,next:null},w===null?(g=w=E,c=k):w=w.next=E,s|=x;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;x=a,a=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(w===null&&(c=k),i.baseState=c,i.firstBaseUpdate=g,i.lastBaseUpdate=w,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);cn|=s,e.lanes=s,e.memoizedState=k}}function ca(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(u(191,i));i.call(r)}}}var gr={},St=Bt(gr),yr=Bt(gr),vr=Bt(gr);function an(e){if(e===gr)throw Error(u(174));return e}function Bl(e,t){switch(fe(vr,t),fe(yr,e),fe(St,gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hi(t,e)}ge(St),fe(St,t)}function On(){ge(St),ge(yr),ge(vr)}function da(e){an(vr.current);var t=an(St.current),n=Hi(t,e.type);t!==n&&(fe(yr,e),fe(St,n))}function Hl(e){yr.current===e&&(ge(St),ge(yr))}var xe=Bt(0);function mi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $l=[];function Yl(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var hi=pe.ReactCurrentDispatcher,Vl=pe.ReactCurrentBatchConfig,un=0,we=null,Te=null,Le=null,gi=!1,xr=!1,wr=0,nd=0;function be(){throw Error(u(321))}function Ql(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function Gl(e,t,n,r,i,l){if(un=l,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hi.current=e===null||e.memoizedState===null?sd:od,e=n(r,i),xr){l=0;do{if(xr=!1,wr=0,25<=l)throw Error(u(301));l+=1,Le=Te=null,t.updateQueue=null,hi.current=ad,e=n(r,i)}while(xr)}if(hi.current=xi,t=Te!==null&&Te.next!==null,un=0,Le=Te=we=null,gi=!1,t)throw Error(u(300));return e}function ql(){var e=wr!==0;return wr=0,e}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?we.memoizedState=Le=e:Le=Le.next=e,Le}function ot(){if(Te===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Le===null?we.memoizedState:Le.next;if(t!==null)Le=t,Te=e;else{if(e===null)throw Error(u(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Le===null?we.memoizedState=Le=e:Le=Le.next=e}return Le}function kr(e,t){return typeof t=="function"?t(e):t}function Xl(e){var t=ot(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=Te,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=s=null,c=null,g=l;do{var w=g.lane;if((un&w)===w)c!==null&&(c=c.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var k={lane:w,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};c===null?(a=c=k,s=r):c=c.next=k,we.lanes|=w,cn|=w}g=g.next}while(g!==null&&g!==l);c===null?s=r:c.next=a,ft(r,t.memoizedState)||(qe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,we.lanes|=l,cn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Kl(e){var t=ot(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);ft(l,t.memoizedState)||(qe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function fa(){}function pa(e,t){var n=we,r=ot(),i=t(),l=!ft(r.memoizedState,i);if(l&&(r.memoizedState=i,qe=!0),r=r.queue,Jl(ga.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Sr(9,ha.bind(null,n,r,i,t),void 0,null),Me===null)throw Error(u(349));(un&30)!==0||ma(n,t,i)}return i}function ma(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ha(e,t,n,r){t.value=n,t.getSnapshot=r,ya(t)&&va(e)}function ga(e,t,n){return n(function(){ya(t)&&va(e)})}function ya(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function va(e){var t=Lt(e,1);t!==null&&yt(t,e,1,-1)}function xa(e){var t=_t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:kr,lastRenderedState:e},t.queue=e,e=e.dispatch=ld.bind(null,we,e),[t.memoizedState,e]}function Sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wa(){return ot().memoizedState}function yi(e,t,n,r){var i=_t();we.flags|=e,i.memoizedState=Sr(1|t,n,void 0,r===void 0?null:r)}function vi(e,t,n,r){var i=ot();r=r===void 0?null:r;var l=void 0;if(Te!==null){var s=Te.memoizedState;if(l=s.destroy,r!==null&&Ql(r,s.deps)){i.memoizedState=Sr(t,n,l,r);return}}we.flags|=e,i.memoizedState=Sr(1|t,n,l,r)}function ka(e,t){return yi(8390656,8,e,t)}function Jl(e,t){return vi(2048,8,e,t)}function Sa(e,t){return vi(4,2,e,t)}function _a(e,t){return vi(4,4,e,t)}function Ca(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ja(e,t,n){return n=n!=null?n.concat([e]):null,vi(4,4,Ca.bind(null,t,e),n)}function Zl(){}function Na(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ql(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ea(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ql(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pa(e,t,n){return(un&21)===0?(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=n):(ft(n,t)||(n=ro(),we.lanes|=n,cn|=n,e.baseState=!0),t)}function rd(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{ue=n,Vl.transition=r}}function Ta(){return ot().memoizedState}function id(e,t,n){var r=Xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},za(e))La(t,n);else if(n=oa(e,t,n,r),n!==null){var i=$e();yt(n,e,r,i),Ma(n,t,r)}}function ld(e,t,n){var r=Xt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(za(e))La(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,a=l(s,n);if(i.hasEagerState=!0,i.eagerState=a,ft(a,s)){var c=t.interleaved;c===null?(i.next=i,Wl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=oa(e,t,i,r),n!==null&&(i=$e(),yt(n,e,r,i),Ma(n,t,r))}}function za(e){var t=e.alternate;return e===we||t!==null&&t===we}function La(e,t){xr=gi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ma(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tl(e,n)}}var xi={readContext:st,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},sd={readContext:st,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:ka,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yi(4194308,4,Ca.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yi(4194308,4,e,t)},useInsertionEffect:function(e,t){return yi(4,2,e,t)},useMemo:function(e,t){var n=_t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=id.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:xa,useDebugValue:Zl,useDeferredValue:function(e){return _t().memoizedState=e},useTransition:function(){var e=xa(!1),t=e[0];return e=rd.bind(null,e[1]),_t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=we,i=_t();if(ve){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Me===null)throw Error(u(349));(un&30)!==0||ma(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,ka(ga.bind(null,r,l,e),[e]),r.flags|=2048,Sr(9,ha.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=_t(),t=Me.identifierPrefix;if(ve){var n=zt,r=Tt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},od={readContext:st,useCallback:Na,useContext:st,useEffect:Jl,useImperativeHandle:ja,useInsertionEffect:Sa,useLayoutEffect:_a,useMemo:Ea,useReducer:Xl,useRef:wa,useState:function(){return Xl(kr)},useDebugValue:Zl,useDeferredValue:function(e){var t=ot();return Pa(t,Te.memoizedState,e)},useTransition:function(){var e=Xl(kr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:fa,useSyncExternalStore:pa,useId:Ta,unstable_isNewReconciler:!1},ad={readContext:st,useCallback:Na,useContext:st,useEffect:Jl,useImperativeHandle:ja,useInsertionEffect:Sa,useLayoutEffect:_a,useMemo:Ea,useReducer:Kl,useRef:wa,useState:function(){return Kl(kr)},useDebugValue:Zl,useDeferredValue:function(e){var t=ot();return Te===null?t.memoizedState=e:Pa(t,Te.memoizedState,e)},useTransition:function(){var e=Kl(kr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:fa,useSyncExternalStore:pa,useId:Ta,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=P({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function es(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:P({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wi={isMounted:function(e){return(e=e._reactInternals)?tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$e(),i=Xt(e),l=Mt(r,i);l.payload=t,n!=null&&(l.callback=n),t=Vt(e,l,i),t!==null&&(yt(t,e,i,r),fi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$e(),i=Xt(e),l=Mt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Vt(e,l,i),t!==null&&(yt(t,e,i,r),fi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$e(),r=Xt(e),i=Mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Vt(e,i,r),t!==null&&(yt(t,e,r,n),fi(t,e,r))}};function Ra(e,t,n,r,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!ar(n,r)||!ar(i,l):!0}function Da(e,t,n){var r=!1,i=Ht,l=t.contextType;return typeof l=="object"&&l!==null?l=st(l):(i=Ge(t)?rn:Ae.current,r=t.contextTypes,l=(r=r!=null)?Pn(e,i):Ht),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Oa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wi.enqueueReplaceState(t,t.state,null)}function ts(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ul(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=st(l):(l=Ge(t)?rn:Ae.current,i.context=Pn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(es(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wi.enqueueReplaceState(i,i.state,null),pi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function In(e,t){try{var n="",r=t;do n+=X(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function ns(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function rs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ud=typeof WeakMap=="function"?WeakMap:Map;function Ia(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ei||(Ei=!0,vs=r),rs(e,t)},n}function Fa(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){rs(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){rs(e,t),typeof r!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Aa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ud;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=_d.bind(null,e,t,n),t.then(e,e))}function ba(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wa(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var cd=pe.ReactCurrentOwner,qe=!1;function He(e,t,n,r){t.child=e===null?sa(t,null,n,r):Mn(t,e.child,n,r)}function Ua(e,t,n,r,i){n=n.render;var l=t.ref;return Dn(t,i),r=Gl(e,t,n,r,l,i),n=ql(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(ve&&n&&Ll(t),t.flags|=1,He(e,t,r,i),t.child)}function Ba(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!js(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Ha(e,t,l,r,i)):(e=Ri(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:ar,n(s,r)&&e.ref===t.ref)return Rt(e,t,i)}return t.flags|=1,e=Jt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Ha(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(ar(l,r)&&e.ref===t.ref)if(qe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,Rt(e,t,i)}return is(e,t,n,r,i)}function $a(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(An,nt),nt|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,fe(An,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,fe(An,nt),nt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,fe(An,nt),nt|=r;return He(e,t,i,n),t.child}function Ya(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function is(e,t,n,r,i){var l=Ge(n)?rn:Ae.current;return l=Pn(t,l),Dn(t,i),n=Gl(e,t,n,r,l,i),r=ql(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(ve&&r&&Ll(t),t.flags|=1,He(e,t,n,i),t.child)}function Va(e,t,n,r,i){if(Ge(n)){var l=!0;ii(t)}else l=!1;if(Dn(t,i),t.stateNode===null)Si(e,t),Da(t,n,r),ts(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,g=n.contextType;typeof g=="object"&&g!==null?g=st(g):(g=Ge(n)?rn:Ae.current,g=Pn(t,g));var w=n.getDerivedStateFromProps,k=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function";k||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==g)&&Oa(t,s,r,g),Yt=!1;var x=t.memoizedState;s.state=x,pi(t,r,s,i),c=t.memoizedState,a!==r||x!==c||Qe.current||Yt?(typeof w=="function"&&(es(t,n,w,r),c=t.memoizedState),(a=Yt||Ra(t,n,a,r,x,c,g))?(k||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=g,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,aa(e,t),a=t.memoizedProps,g=t.type===t.elementType?a:mt(t.type,a),s.props=g,k=t.pendingProps,x=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=st(c):(c=Ge(n)?rn:Ae.current,c=Pn(t,c));var E=n.getDerivedStateFromProps;(w=typeof E=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==k||x!==c)&&Oa(t,s,r,c),Yt=!1,x=t.memoizedState,s.state=x,pi(t,r,s,i);var M=t.memoizedState;a!==k||x!==M||Qe.current||Yt?(typeof E=="function"&&(es(t,n,E,r),M=t.memoizedState),(g=Yt||Ra(t,n,g,r,x,M,c)||!1)?(w||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,M,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,M,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=M),s.props=r,s.state=M,s.context=c,r=g):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return ls(e,t,n,r,l,i)}function ls(e,t,n,r,i,l){Ya(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Ko(t,n,!1),Rt(e,t,l);r=t.stateNode,cd.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Mn(t,e.child,null,l),t.child=Mn(t,null,a,l)):He(e,t,a,l),t.memoizedState=r.state,i&&Ko(t,n,!0),t.child}function Qa(e){var t=e.stateNode;t.pendingContext?qo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qo(e,t.context,!1),Bl(e,t.containerInfo)}function Ga(e,t,n,r,i){return Ln(),Ol(i),t.flags|=256,He(e,t,n,r),t.child}var ss={dehydrated:null,treeContext:null,retryLane:0};function os(e){return{baseLanes:e,cachePool:null,transitions:null}}function qa(e,t,n){var r=t.pendingProps,i=xe.current,l=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),fe(xe,i&1),e===null)return Dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=s):l=Di(s,r,0,null),e=mn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=os(n),t.memoizedState=ss,e):as(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return dd(e,t,s,r,a,i,n);if(l){l=r.fallback,s=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Jt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=Jt(a,l):(l=mn(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?os(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=ss,r}return l=e.child,e=l.sibling,r=Jt(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function as(e,t){return t=Di({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ki(e,t,n,r){return r!==null&&Ol(r),Mn(t,e.child,null,n),e=as(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dd(e,t,n,r,i,l,s){if(n)return t.flags&256?(t.flags&=-257,r=ns(Error(u(422))),ki(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Di({mode:"visible",children:r.children},i,0,null),l=mn(l,i,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Mn(t,e.child,null,s),t.child.memoizedState=os(s),t.memoizedState=ss,l);if((t.mode&1)===0)return ki(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(u(419)),r=ns(l,r,void 0),ki(e,t,s,r)}if(a=(s&e.childLanes)!==0,qe||a){if(r=Me,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Lt(e,i),yt(r,e,i,-1))}return Cs(),r=ns(Error(u(421))),ki(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Cd.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,tt=Ut(i.nextSibling),et=t,ve=!0,pt=null,e!==null&&(it[lt++]=Tt,it[lt++]=zt,it[lt++]=ln,Tt=e.id,zt=e.overflow,ln=t),t=as(t,r.children),t.flags|=4096,t)}function Xa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bl(e.return,t,n)}function us(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Ka(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(He(e,t,r.children,n),r=xe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xa(e,n,t);else if(e.tag===19)Xa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(fe(xe,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),us(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}us(t,!0,n,null,l);break;case"together":us(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Si(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fd(e,t,n){switch(t.tag){case 3:Qa(t),Ln();break;case 5:da(t);break;case 1:Ge(t.type)&&ii(t);break;case 4:Bl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;fe(ci,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(fe(xe,xe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?qa(e,t,n):(fe(xe,xe.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);fe(xe,xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ka(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(xe,xe.current),r)break;return null;case 22:case 23:return t.lanes=0,$a(e,t,n)}return Rt(e,t,n)}var Ja,cs,Za,eu;Ja=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},cs=function(){},Za=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,an(St.current);var l=null;switch(n){case"input":i=Un(e,i),r=Un(e,r),l=[];break;case"select":i=P({},i,{value:void 0}),r=P({},r,{value:void 0}),l=[];break;case"textarea":i=Nt(e,i),r=Nt(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ti)}$i(n,r);var s;n=null;for(g in i)if(!r.hasOwnProperty(g)&&i.hasOwnProperty(g)&&i[g]!=null)if(g==="style"){var a=i[g];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(N.hasOwnProperty(g)?l||(l=[]):(l=l||[]).push(g,null));for(g in r){var c=r[g];if(a=i!=null?i[g]:void 0,r.hasOwnProperty(g)&&c!==a&&(c!=null||a!=null))if(g==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(l||(l=[]),l.push(g,n)),n=c;else g==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(l=l||[]).push(g,c)):g==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(g,""+c):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(N.hasOwnProperty(g)?(c!=null&&g==="onScroll"&&he("scroll",e),l||a===c||(l=[])):(l=l||[]).push(g,c))}n&&(l=l||[]).push("style",n);var g=l;(t.updateQueue=g)&&(t.flags|=4)}},eu=function(e,t,n,r){n!==r&&(t.flags|=4)};function _r(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pd(e,t,n){var r=t.pendingProps;switch(Ml(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return Ge(t.type)&&ri(),We(t),null;case 3:return r=t.stateNode,On(),ge(Qe),ge(Ae),Yl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ai(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,pt!==null&&(ks(pt),pt=null))),cs(e,t),We(t),null;case 5:Hl(t);var i=an(vr.current);if(n=t.type,e!==null&&t.stateNode!=null)Za(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return We(t),null}if(e=an(St.current),ai(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[kt]=t,r[pr]=l,e=(t.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<cr.length;i++)he(cr[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":Bn(r,l),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},he("invalid",r);break;case"textarea":xt(r,l),he("invalid",r)}$i(n,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&ei(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&ei(r.textContent,a,e),i=["children",""+a]):N.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&he("scroll",r)}switch(n){case"input":hn(r),$(r,l,!0);break;case"textarea":hn(r),en(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ti)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[kt]=t,e[pr]=r,Ja(e,t,!1,!1),t.stateNode=e;e:{switch(s=Yi(n,r),n){case"dialog":he("cancel",e),he("close",e),i=r;break;case"iframe":case"object":case"embed":he("load",e),i=r;break;case"video":case"audio":for(i=0;i<cr.length;i++)he(cr[i],e);i=r;break;case"source":he("error",e),i=r;break;case"img":case"image":case"link":he("error",e),he("load",e),i=r;break;case"details":he("toggle",e),i=r;break;case"input":Bn(e,r),i=Un(e,r),he("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=P({},r,{value:void 0}),he("invalid",e);break;case"textarea":xt(e,r),i=Nt(e,r),he("invalid",e);break;default:i=r}$i(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="style"?Bs(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ws(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Yn(e,c):typeof c=="number"&&Yn(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(N.hasOwnProperty(l)?c!=null&&l==="onScroll"&&he("scroll",e):c!=null&&ce(e,l,c,s))}switch(n){case"input":hn(e),$(e,r,!1);break;case"textarea":hn(e),en(e);break;case"option":r.value!=null&&e.setAttribute("value",""+te(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?je(e,!!r.multiple,l,!1):r.defaultValue!=null&&je(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ti)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)eu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=an(vr.current),an(St.current),ai(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(l=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:ei(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ei(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return We(t),null;case 13:if(ge(xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&tt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ra(),Ln(),t.flags|=98560,l=!1;else if(l=ai(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[kt]=t}else Ln(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),l=!1}else pt!==null&&(ks(pt),pt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(xe.current&1)!==0?ze===0&&(ze=3):Cs())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return On(),cs(e,t),e===null&&dr(t.stateNode.containerInfo),We(t),null;case 10:return Al(t.type._context),We(t),null;case 17:return Ge(t.type)&&ri(),We(t),null;case 19:if(ge(xe),l=t.memoizedState,l===null)return We(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)_r(l,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=mi(e),s!==null){for(t.flags|=128,_r(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return fe(xe,xe.current&1|2),t.child}e=e.sibling}l.tail!==null&&Se()>bn&&(t.flags|=128,r=!0,_r(l,!1),t.lanes=4194304)}else{if(!r)if(e=mi(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_r(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!ve)return We(t),null}else 2*Se()-l.renderingStartTime>bn&&n!==1073741824&&(t.flags|=128,r=!0,_r(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Se(),t.sibling=null,n=xe.current,fe(xe,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return _s(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(nt&1073741824)!==0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function md(e,t){switch(Ml(t),t.tag){case 1:return Ge(t.type)&&ri(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(),ge(Qe),ge(Ae),Yl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Hl(t),null;case 13:if(ge(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(xe),null;case 4:return On(),null;case 10:return Al(t.type._context),null;case 22:case 23:return _s(),null;case 24:return null;default:return null}}var _i=!1,Ue=!1,hd=typeof WeakSet=="function"?WeakSet:Set,z=null;function Fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(e,t,r)}else n.current=null}function ds(e,t,n){try{n()}catch(r){ke(e,t,r)}}var tu=!1;function gd(e,t){if(_l=Hr,e=Ro(),hl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,g=0,w=0,k=e,x=null;t:for(;;){for(var E;k!==n||i!==0&&k.nodeType!==3||(a=s+i),k!==l||r!==0&&k.nodeType!==3||(c=s+r),k.nodeType===3&&(s+=k.nodeValue.length),(E=k.firstChild)!==null;)x=k,k=E;for(;;){if(k===e)break t;if(x===n&&++g===i&&(a=s),x===l&&++w===r&&(c=s),(E=k.nextSibling)!==null)break;k=x,x=k.parentNode}k=E}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cl={focusedElem:e,selectionRange:n},Hr=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var M=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var D=M.memoizedProps,_e=M.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?D:mt(t.type,D),_e);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(S){ke(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return M=tu,tu=!1,M}function Cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ds(t,n,l)}i=i.next}while(i!==r)}}function Ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nu(e){var t=e.alternate;t!==null&&(e.alternate=null,nu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[pr],delete t[Pl],delete t[Jc],delete t[Zc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ru(e){return e.tag===5||e.tag===3||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ru(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ps(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ti));else if(r!==4&&(e=e.child,e!==null))for(ps(e,t,n),e=e.sibling;e!==null;)ps(e,t,n),e=e.sibling}function ms(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ms(e,t,n),e=e.sibling;e!==null;)ms(e,t,n),e=e.sibling}var Oe=null,ht=!1;function Qt(e,t,n){for(n=n.child;n!==null;)lu(e,t,n),n=n.sibling}function lu(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Fr,n)}catch{}switch(n.tag){case 5:Ue||Fn(n,t);case 6:var r=Oe,i=ht;Oe=null,Qt(e,t,n),Oe=r,ht=i,Oe!==null&&(ht?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(ht?(e=Oe,n=n.stateNode,e.nodeType===8?El(e.parentNode,n):e.nodeType===1&&El(e,n),nr(e)):El(Oe,n.stateNode));break;case 4:r=Oe,i=ht,Oe=n.stateNode.containerInfo,ht=!0,Qt(e,t,n),Oe=r,ht=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&((l&2)!==0||(l&4)!==0)&&ds(n,t,s),i=i.next}while(i!==r)}Qt(e,t,n);break;case 1:if(!Ue&&(Fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ke(n,t,a)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,Qt(e,t,n),Ue=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function su(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hd),t.forEach(function(r){var i=jd.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Oe=a.stateNode,ht=!1;break e;case 3:Oe=a.stateNode.containerInfo,ht=!0;break e;case 4:Oe=a.stateNode.containerInfo,ht=!0;break e}a=a.return}if(Oe===null)throw Error(u(160));lu(l,s,i),Oe=null,ht=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(g){ke(i,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ou(t,e),t=t.sibling}function ou(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),Ct(e),r&4){try{Cr(3,e,e.return),Ci(3,e)}catch(D){ke(e,e.return,D)}try{Cr(5,e,e.return)}catch(D){ke(e,e.return,D)}}break;case 1:gt(t,e),Ct(e),r&512&&n!==null&&Fn(n,n.return);break;case 5:if(gt(t,e),Ct(e),r&512&&n!==null&&Fn(n,n.return),e.flags&32){var i=e.stateNode;try{Yn(i,"")}catch(D){ke(e,e.return,D)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Mr(i,l),Yi(a,s);var g=Yi(a,l);for(s=0;s<c.length;s+=2){var w=c[s],k=c[s+1];w==="style"?Bs(i,k):w==="dangerouslySetInnerHTML"?Ws(i,k):w==="children"?Yn(i,k):ce(i,w,k,g)}switch(a){case"input":Hn(i,l);break;case"textarea":$n(i,l);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var E=l.value;E!=null?je(i,!!l.multiple,E,!1):x!==!!l.multiple&&(l.defaultValue!=null?je(i,!!l.multiple,l.defaultValue,!0):je(i,!!l.multiple,l.multiple?[]:"",!1))}i[pr]=l}catch(D){ke(e,e.return,D)}}break;case 6:if(gt(t,e),Ct(e),r&4){if(e.stateNode===null)throw Error(u(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(D){ke(e,e.return,D)}}break;case 3:if(gt(t,e),Ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{nr(t.containerInfo)}catch(D){ke(e,e.return,D)}break;case 4:gt(t,e),Ct(e);break;case 13:gt(t,e),Ct(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ys=Se())),r&4&&su(e);break;case 22:if(w=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(g=Ue)||w,gt(t,e),Ue=g):gt(t,e),Ct(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!w&&(e.mode&1)!==0)for(z=e,w=e.child;w!==null;){for(k=z=w;z!==null;){switch(x=z,E=x.child,x.tag){case 0:case 11:case 14:case 15:Cr(4,x,x.return);break;case 1:Fn(x,x.return);var M=x.stateNode;if(typeof M.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,M.props=t.memoizedProps,M.state=t.memoizedState,M.componentWillUnmount()}catch(D){ke(r,n,D)}}break;case 5:Fn(x,x.return);break;case 22:if(x.memoizedState!==null){cu(k);continue}}E!==null?(E.return=x,z=E):cu(k)}w=w.sibling}e:for(w=null,k=e;;){if(k.tag===5){if(w===null){w=k;try{i=k.stateNode,g?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=k.stateNode,c=k.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Us("display",s))}catch(D){ke(e,e.return,D)}}}else if(k.tag===6){if(w===null)try{k.stateNode.nodeValue=g?"":k.memoizedProps}catch(D){ke(e,e.return,D)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;w===k&&(w=null),k=k.return}w===k&&(w=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:gt(t,e),Ct(e),r&4&&su(e);break;case 21:break;default:gt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ru(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yn(i,""),r.flags&=-33);var l=iu(e);ms(e,l,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=iu(e);ps(e,a,s);break;default:throw Error(u(161))}}catch(c){ke(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yd(e,t,n){z=e,au(e)}function au(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,l=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||_i;if(!s){var a=i.alternate,c=a!==null&&a.memoizedState!==null||Ue;a=_i;var g=Ue;if(_i=s,(Ue=c)&&!g)for(z=i;z!==null;)s=z,c=s.child,s.tag===22&&s.memoizedState!==null?du(i):c!==null?(c.return=s,z=c):du(i);for(;l!==null;)z=l,au(l),l=l.sibling;z=i,_i=a,Ue=g}uu(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,z=l):uu(e)}}function uu(e){for(;z!==null;){var t=z;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ue||Ci(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&ca(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ca(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var w=g.memoizedState;if(w!==null){var k=w.dehydrated;k!==null&&nr(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Ue||t.flags&512&&fs(t)}catch(x){ke(t,t.return,x)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function cu(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function du(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ci(4,t)}catch(c){ke(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){ke(t,i,c)}}var l=t.return;try{fs(t)}catch(c){ke(t,l,c)}break;case 5:var s=t.return;try{fs(t)}catch(c){ke(t,s,c)}}}catch(c){ke(t,t.return,c)}if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}var vd=Math.ceil,ji=pe.ReactCurrentDispatcher,hs=pe.ReactCurrentOwner,at=pe.ReactCurrentBatchConfig,ee=0,Me=null,Ne=null,Ie=0,nt=0,An=Bt(0),ze=0,jr=null,cn=0,Ni=0,gs=0,Nr=null,Xe=null,ys=0,bn=1/0,Dt=null,Ei=!1,vs=null,Gt=null,Pi=!1,qt=null,Ti=0,Er=0,xs=null,zi=-1,Li=0;function $e(){return(ee&6)!==0?Se():zi!==-1?zi:zi=Se()}function Xt(e){return(e.mode&1)===0?1:(ee&2)!==0&&Ie!==0?Ie&-Ie:td.transition!==null?(Li===0&&(Li=ro()),Li):(e=ue,e!==0||(e=window.event,e=e===void 0?16:po(e.type)),e)}function yt(e,t,n,r){if(50<Er)throw Er=0,xs=null,Error(u(185));Kn(e,n,r),((ee&2)===0||e!==Me)&&(e===Me&&((ee&2)===0&&(Ni|=n),ze===4&&Kt(e,Ie)),Ke(e,r),n===1&&ee===0&&(t.mode&1)===0&&(bn=Se()+500,li&&$t()))}function Ke(e,t){var n=e.callbackNode;tc(e,t);var r=Wr(e,e===Me?Ie:0);if(r===0)n!==null&&eo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&eo(n),t===1)e.tag===0?ed(pu.bind(null,e)):Jo(pu.bind(null,e)),Xc(function(){(ee&6)===0&&$t()}),n=null;else{switch(io(r)){case 1:n=Ji;break;case 4:n=to;break;case 16:n=Ir;break;case 536870912:n=no;break;default:n=Ir}n=ku(n,fu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fu(e,t){if(zi=-1,Li=0,(ee&6)!==0)throw Error(u(327));var n=e.callbackNode;if(Wn()&&e.callbackNode!==n)return null;var r=Wr(e,e===Me?Ie:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Mi(e,r);else{t=r;var i=ee;ee|=2;var l=hu();(Me!==e||Ie!==t)&&(Dt=null,bn=Se()+500,fn(e,t));do try{kd();break}catch(a){mu(e,a)}while(!0);Fl(),ji.current=l,ee=i,Ne!==null?t=0:(Me=null,Ie=0,t=ze)}if(t!==0){if(t===2&&(i=Zi(e),i!==0&&(r=i,t=ws(e,i))),t===1)throw n=jr,fn(e,0),Kt(e,r),Ke(e,Se()),n;if(t===6)Kt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!xd(i)&&(t=Mi(e,r),t===2&&(l=Zi(e),l!==0&&(r=l,t=ws(e,l))),t===1))throw n=jr,fn(e,0),Kt(e,r),Ke(e,Se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:pn(e,Xe,Dt);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=ys+500-Se(),10<t)){if(Wr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Nl(pn.bind(null,e,Xe,Dt),t);break}pn(e,Xe,Dt);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-dt(r);l=1<<s,s=t[s],s>i&&(i=s),r&=~l}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vd(r/1960))-r,10<r){e.timeoutHandle=Nl(pn.bind(null,e,Xe,Dt),r);break}pn(e,Xe,Dt);break;case 5:pn(e,Xe,Dt);break;default:throw Error(u(329))}}}return Ke(e,Se()),e.callbackNode===n?fu.bind(null,e):null}function ws(e,t){var n=Nr;return e.current.memoizedState.isDehydrated&&(fn(e,t).flags|=256),e=Mi(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&ks(t)),e}function ks(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function xd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!ft(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~gs,t&=~Ni,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function pu(e){if((ee&6)!==0)throw Error(u(327));Wn();var t=Wr(e,0);if((t&1)===0)return Ke(e,Se()),null;var n=Mi(e,t);if(e.tag!==0&&n===2){var r=Zi(e);r!==0&&(t=r,n=ws(e,r))}if(n===1)throw n=jr,fn(e,0),Kt(e,t),Ke(e,Se()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,Xe,Dt),Ke(e,Se()),null}function Ss(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(bn=Se()+500,li&&$t())}}function dn(e){qt!==null&&qt.tag===0&&(ee&6)===0&&Wn();var t=ee;ee|=1;var n=at.transition,r=ue;try{if(at.transition=null,ue=1,e)return e()}finally{ue=r,at.transition=n,ee=t,(ee&6)===0&&$t()}}function _s(){nt=An.current,ge(An)}function fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qc(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Ml(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ri();break;case 3:On(),ge(Qe),ge(Ae),Yl();break;case 5:Hl(r);break;case 4:On();break;case 13:ge(xe);break;case 19:ge(xe);break;case 10:Al(r.type._context);break;case 22:case 23:_s()}n=n.return}if(Me=e,Ne=e=Jt(e.current,null),Ie=nt=t,ze=0,jr=null,gs=Ni=cn=0,Xe=Nr=null,on!==null){for(t=0;t<on.length;t++)if(n=on[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=i,r.next=s}n.pending=r}on=null}return e}function mu(e,t){do{var n=Ne;try{if(Fl(),hi.current=xi,gi){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gi=!1}if(un=0,Le=Te=we=null,xr=!1,wr=0,hs.current=null,n===null||n.return===null){ze=1,jr=t,Ne=null;break}e:{var l=e,s=n.return,a=n,c=t;if(t=Ie,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var g=c,w=a,k=w.tag;if((w.mode&1)===0&&(k===0||k===11||k===15)){var x=w.alternate;x?(w.updateQueue=x.updateQueue,w.memoizedState=x.memoizedState,w.lanes=x.lanes):(w.updateQueue=null,w.memoizedState=null)}var E=ba(s);if(E!==null){E.flags&=-257,Wa(E,s,a,l,t),E.mode&1&&Aa(l,g,t),t=E,c=g;var M=t.updateQueue;if(M===null){var D=new Set;D.add(c),t.updateQueue=D}else M.add(c);break e}else{if((t&1)===0){Aa(l,g,t),Cs();break e}c=Error(u(426))}}else if(ve&&a.mode&1){var _e=ba(s);if(_e!==null){(_e.flags&65536)===0&&(_e.flags|=256),Wa(_e,s,a,l,t),Ol(In(c,a));break e}}l=c=In(c,a),ze!==4&&(ze=2),Nr===null?Nr=[l]:Nr.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var m=Ia(l,c,t);ua(l,m);break e;case 1:a=c;var f=l.type,h=l.stateNode;if((l.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Gt===null||!Gt.has(h)))){l.flags|=65536,t&=-t,l.lanes|=t;var S=Fa(l,a,t);ua(l,S);break e}}l=l.return}while(l!==null)}yu(n)}catch(O){t=O,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function hu(){var e=ji.current;return ji.current=xi,e===null?xi:e}function Cs(){(ze===0||ze===3||ze===2)&&(ze=4),Me===null||(cn&268435455)===0&&(Ni&268435455)===0||Kt(Me,Ie)}function Mi(e,t){var n=ee;ee|=2;var r=hu();(Me!==e||Ie!==t)&&(Dt=null,fn(e,t));do try{wd();break}catch(i){mu(e,i)}while(!0);if(Fl(),ee=n,ji.current=r,Ne!==null)throw Error(u(261));return Me=null,Ie=0,ze}function wd(){for(;Ne!==null;)gu(Ne)}function kd(){for(;Ne!==null&&!Vu();)gu(Ne)}function gu(e){var t=wu(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?yu(e):Ne=t,hs.current=null}function yu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=pd(n,t,nt),n!==null){Ne=n;return}}else{if(n=md(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Ne=null;return}}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);ze===0&&(ze=5)}function pn(e,t,n){var r=ue,i=at.transition;try{at.transition=null,ue=1,Sd(e,t,n,r)}finally{at.transition=i,ue=r}return null}function Sd(e,t,n,r){do Wn();while(qt!==null);if((ee&6)!==0)throw Error(u(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(nc(e,l),e===Me&&(Ne=Me=null,Ie=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Pi||(Pi=!0,ku(Ir,function(){return Wn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=at.transition,at.transition=null;var s=ue;ue=1;var a=ee;ee|=4,hs.current=null,gd(e,n),ou(n,e),Bc(Cl),Hr=!!_l,Cl=_l=null,e.current=n,yd(n),Qu(),ee=a,ue=s,at.transition=l}else e.current=n;if(Pi&&(Pi=!1,qt=e,Ti=i),l=e.pendingLanes,l===0&&(Gt=null),Xu(n.stateNode),Ke(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ei)throw Ei=!1,e=vs,vs=null,e;return(Ti&1)!==0&&e.tag!==0&&Wn(),l=e.pendingLanes,(l&1)!==0?e===xs?Er++:(Er=0,xs=e):Er=0,$t(),null}function Wn(){if(qt!==null){var e=io(Ti),t=at.transition,n=ue;try{if(at.transition=null,ue=16>e?16:e,qt===null)var r=!1;else{if(e=qt,qt=null,Ti=0,(ee&6)!==0)throw Error(u(331));var i=ee;for(ee|=4,z=e.current;z!==null;){var l=z,s=l.child;if((z.flags&16)!==0){var a=l.deletions;if(a!==null){for(var c=0;c<a.length;c++){var g=a[c];for(z=g;z!==null;){var w=z;switch(w.tag){case 0:case 11:case 15:Cr(8,w,l)}var k=w.child;if(k!==null)k.return=w,z=k;else for(;z!==null;){w=z;var x=w.sibling,E=w.return;if(nu(w),w===g){z=null;break}if(x!==null){x.return=E,z=x;break}z=E}}}var M=l.alternate;if(M!==null){var D=M.child;if(D!==null){M.child=null;do{var _e=D.sibling;D.sibling=null,D=_e}while(D!==null)}}z=l}}if((l.subtreeFlags&2064)!==0&&s!==null)s.return=l,z=s;else e:for(;z!==null;){if(l=z,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Cr(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,z=m;break e}z=l.return}}var f=e.current;for(z=f;z!==null;){s=z;var h=s.child;if((s.subtreeFlags&2064)!==0&&h!==null)h.return=s,z=h;else e:for(s=f;z!==null;){if(a=z,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Ci(9,a)}}catch(O){ke(a,a.return,O)}if(a===s){z=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,z=S;break e}z=a.return}}if(ee=i,$t(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Fr,e)}catch{}r=!0}return r}finally{ue=n,at.transition=t}}return!1}function vu(e,t,n){t=In(n,t),t=Ia(e,t,1),e=Vt(e,t,1),t=$e(),e!==null&&(Kn(e,1,t),Ke(e,t))}function ke(e,t,n){if(e.tag===3)vu(e,e,n);else for(;t!==null;){if(t.tag===3){vu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gt===null||!Gt.has(r))){e=In(n,e),e=Fa(t,e,1),t=Vt(t,e,1),e=$e(),t!==null&&(Kn(t,1,e),Ke(t,e));break}}t=t.return}}function _d(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(Ie&n)===n&&(ze===4||ze===3&&(Ie&130023424)===Ie&&500>Se()-ys?fn(e,0):gs|=n),Ke(e,t)}function xu(e,t){t===0&&((e.mode&1)===0?t=1:(t=br,br<<=1,(br&130023424)===0&&(br=4194304)));var n=$e();e=Lt(e,t),e!==null&&(Kn(e,t,n),Ke(e,n))}function Cd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xu(e,n)}function jd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),xu(e,n)}var wu;wu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)qe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return qe=!1,fd(e,t,n);qe=(e.flags&131072)!==0}else qe=!1,ve&&(t.flags&1048576)!==0&&Zo(t,oi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Si(e,t),e=t.pendingProps;var i=Pn(t,Ae.current);Dn(t,n),i=Gl(null,t,r,e,i,n);var l=ql();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ge(r)?(l=!0,ii(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ul(t),i.updater=wi,t.stateNode=i,i._reactInternals=t,ts(t,r,e,n),t=ls(null,t,r,!0,l,n)):(t.tag=0,ve&&l&&Ll(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Si(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ed(r),e=mt(r,e),i){case 0:t=is(null,t,r,e,n);break e;case 1:t=Va(null,t,r,e,n);break e;case 11:t=Ua(null,t,r,e,n);break e;case 14:t=Ba(null,t,r,mt(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),is(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Va(e,t,r,i,n);case 3:e:{if(Qa(t),e===null)throw Error(u(387));r=t.pendingProps,l=t.memoizedState,i=l.element,aa(e,t),pi(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=In(Error(u(423)),t),t=Ga(e,t,r,n,i);break e}else if(r!==i){i=In(Error(u(424)),t),t=Ga(e,t,r,n,i);break e}else for(tt=Ut(t.stateNode.containerInfo.firstChild),et=t,ve=!0,pt=null,n=sa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ln(),r===i){t=Rt(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return da(t),e===null&&Dl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,jl(r,i)?s=null:l!==null&&jl(r,l)&&(t.flags|=32),Ya(e,t),He(e,t,s,n),t.child;case 6:return e===null&&Dl(t),null;case 13:return qa(e,t,n);case 4:return Bl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mn(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Ua(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,s=i.value,fe(ci,r._currentValue),r._currentValue=s,l!==null)if(ft(l.value,s)){if(l.children===i.children&&!Qe.current){t=Rt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){s=l.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=Mt(-1,n&-n),c.tag=2;var g=l.updateQueue;if(g!==null){g=g.shared;var w=g.pending;w===null?c.next=c:(c.next=w.next,w.next=c),g.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),bl(l.return,n,t),a.lanes|=n;break}c=c.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(u(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),bl(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Dn(t,n),i=st(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=mt(r,t.pendingProps),i=mt(r.type,i),Ba(e,t,r,i,n);case 15:return Ha(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Si(e,t),t.tag=1,Ge(r)?(e=!0,ii(t)):e=!1,Dn(t,n),Da(t,r,i),ts(t,r,i,n),ls(null,t,r,!0,e,n);case 19:return Ka(e,t,n);case 22:return $a(e,t,n)}throw Error(u(156,t.tag))};function ku(e,t){return Zs(e,t)}function Nd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new Nd(e,t,n,r)}function js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ed(e){if(typeof e=="function")return js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rt)return 11;if(e===Ve)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ri(e,t,n,r,i,l){var s=2;if(r=e,typeof e=="function")js(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ee:return mn(n.children,i,l,t);case Pe:s=8,i|=8;break;case vt:return e=ut(12,n,t,i|2),e.elementType=vt,e.lanes=l,e;case Be:return e=ut(13,n,t,i),e.elementType=Be,e.lanes=l,e;case Ye:return e=ut(19,n,t,i),e.elementType=Ye,e.lanes=l,e;case ye:return Di(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ct:s=10;break e;case jt:s=9;break e;case rt:s=11;break e;case Ve:s=14;break e;case Fe:s=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=ut(s,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function mn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function Di(e,t,n,r){return e=ut(22,e,r,t),e.elementType=ye,e.lanes=n,e.stateNode={isHidden:!1},e}function Ns(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function Es(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pd(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=el(0),this.expirationTimes=el(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=el(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ps(e,t,n,r,i,l,s,a,c){return e=new Pd(e,t,n,a,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ut(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ul(l),e}function Td(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:me,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Su(e){if(!e)return Ht;e=e._reactInternals;e:{if(tn(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(Ge(n))return Xo(e,n,t)}return t}function _u(e,t,n,r,i,l,s,a,c){return e=Ps(n,r,!0,e,i,l,s,a,c),e.context=Su(null),n=e.current,r=$e(),i=Xt(n),l=Mt(r,i),l.callback=t??null,Vt(n,l,i),e.current.lanes=i,Kn(e,i,r),Ke(e,r),e}function Oi(e,t,n,r){var i=t.current,l=$e(),s=Xt(i);return n=Su(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(i,t,s),e!==null&&(yt(e,i,s,l),fi(e,i,s)),s}function Ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ts(e,t){Cu(e,t),(e=e.alternate)&&Cu(e,t)}function zd(){return null}var ju=typeof reportError=="function"?reportError:function(e){console.error(e)};function zs(e){this._internalRoot=e}Fi.prototype.render=zs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Oi(e,t,null,null)},Fi.prototype.unmount=zs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){Oi(null,e,null,null)}),t[Et]=null}};function Fi(e){this._internalRoot=e}Fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=oo();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&co(e)}};function Ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nu(){}function Ld(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var g=Ii(s);l.call(g)}}var s=_u(t,r,e,0,null,!1,!1,"",Nu);return e._reactRootContainer=s,e[Et]=s.current,dr(e.nodeType===8?e.parentNode:e),dn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var g=Ii(c);a.call(g)}}var c=Ps(e,0,!1,null,null,!1,!1,"",Nu);return e._reactRootContainer=c,e[Et]=c.current,dr(e.nodeType===8?e.parentNode:e),dn(function(){Oi(t,c,n,r)}),c}function bi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var a=i;i=function(){var c=Ii(s);a.call(c)}}Oi(t,s,e,i)}else s=Ld(n,t,e,i,r);return Ii(s)}lo=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xn(t.pendingLanes);n!==0&&(tl(t,n|1),Ke(t,Se()),(ee&6)===0&&(bn=Se()+500,$t()))}break;case 13:dn(function(){var r=Lt(e,1);if(r!==null){var i=$e();yt(r,e,1,i)}}),Ts(e,1)}},nl=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=$e();yt(t,e,134217728,n)}Ts(e,134217728)}},so=function(e){if(e.tag===13){var t=Xt(e),n=Lt(e,t);if(n!==null){var r=$e();yt(n,e,t,r)}Ts(e,t)}},oo=function(){return ue},ao=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}},Gi=function(e,t,n){switch(t){case"input":if(Hn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ni(r);if(!i)throw Error(u(90));Lr(r),Hn(r,i)}}}break;case"textarea":$n(e,n);break;case"select":t=n.value,t!=null&&je(e,!!n.multiple,t,!1)}},Vs=Ss,Qs=dn;var Md={usingClientEntryPoint:!1,Events:[mr,Nn,ni,$s,Ys,Ss]},Pr={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rd={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ks(e),e===null?null:e.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||zd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{Fr=Wi.inject(Rd),wt=Wi}catch{}}return Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Md,Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ls(t))throw Error(u(200));return Td(e,t,null,n)},Je.createRoot=function(e,t){if(!Ls(e))throw Error(u(299));var n=!1,r="",i=ju;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ps(e,1,!1,null,null,n,!1,r,i),e[Et]=t.current,dr(e.nodeType===8?e.parentNode:e),new zs(t)},Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=Ks(t),e=e===null?null:e.stateNode,e},Je.flushSync=function(e){return dn(e)},Je.hydrate=function(e,t,n){if(!Ai(t))throw Error(u(200));return bi(null,e,t,!0,n)},Je.hydrateRoot=function(e,t,n){if(!Ls(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",s=ju;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=_u(t,null,e,1,n??null,i,!1,l,s),e[Et]=t.current,dr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Fi(t)},Je.render=function(e,t,n){if(!Ai(t))throw Error(u(200));return bi(null,e,t,!1,n)},Je.unmountComponentAtNode=function(e){if(!Ai(e))throw Error(u(40));return e._reactRootContainer?(dn(function(){bi(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1},Je.unstable_batchedUpdates=Ss,Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ai(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return bi(e,t,n,!1,r)},Je.version="18.3.1-next-f1338f8080-20240426",Je}var Du;function Bd(){if(Du)return Ds.exports;Du=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(d){console.error(d)}}return y(),Ds.exports=Ud(),Ds.exports}var Ou;function Hd(){if(Ou)return Ui;Ou=1;var y=Bd();return Ui.createRoot=y.createRoot,Ui.hydrateRoot=y.hydrateRoot,Ui}var $d=Hd();const Yd=Fu($d);function Vd({energy:y}){const u=Math.ceil(y/100*10),C=Array(10).fill(0).map((N,L)=>L<u?"filled":"empty");return o.jsxs("div",{className:"energy-container",children:[o.jsxs("h3",{children:["Energy: ",y,"/100"]}),o.jsx("div",{className:"energy-bar",children:C.map((N,L)=>o.jsx("div",{className:`energy-segment ${N}`,title:`${N==="filled"?"Energy available":"Energy depleted"}`},L))})]})}function Qd({codingSkill:y,daysSinceActivity:d=0}){const u=Math.min(y,100),C=d>1;return o.jsxs("div",{className:"skill-container",children:[o.jsxs("div",{className:"skill-header",children:[o.jsxs("h3",{children:["Coding Skill: ",y]}),C&&o.jsx("span",{className:"decay-warning",children:"⚠️ Skills decay without practice"})]}),o.jsx("div",{className:"skill-bar",children:o.jsx("div",{className:`skill-progress ${C?"decay-risk":""}`,style:{width:`${u}%`},title:`Coding Skill: ${y}`})})]})}const zr=[{id:1,name:"Chat over a cup of tea",energyCost:3,bondIncrease:8},{id:2,name:"Go for coffee",energyCost:5,bondIncrease:10},{id:3,name:"Play ping pong",energyCost:8,bondIncrease:12},{id:4,name:"Send memes",energyCost:2,bondIncrease:6},{id:5,name:"Do yoga together",energyCost:7,bondIncrease:11},{id:6,name:"Go for a walk",energyCost:6,bondIncrease:10},{id:7,name:"Get candy from the convenience store",energyCost:4,bondIncrease:7},{id:8,name:"Hangout in the chill room",energyCost:3,bondIncrease:7},{id:9,name:"Play video games",energyCost:6,bondIncrease:12},{id:10,name:"Discuss politics",energyCost:7,bondIncrease:9},{id:11,name:"Discuss coding",energyCost:5,bondIncrease:10},{id:12,name:"Study together",energyCost:8,bondIncrease:11},{id:13,name:"Grab lunch together",energyCost:6,bondIncrease:12},{id:14,name:"Attend a meetup",energyCost:9,bondIncrease:14},{id:15,name:"Work on a side project",energyCost:10,bondIncrease:15},{id:16,name:"Give them a coding tip",energyCost:3,bondIncrease:8},{id:17,name:"Share a funny coding meme",energyCost:2,bondIncrease:6},{id:18,name:"Help debug their code",energyCost:8,bondIncrease:14},{id:19,name:"Play chess",energyCost:5,bondIncrease:9},{id:20,name:"Get bubble tea",energyCost:4,bondIncrease:8}];function Gd(y,d){const u=Object.keys(y),C=u[Math.floor(Math.random()*u.length)];return{...d.find(L=>L.name===C)||{name:C},bondValue:y[C]}}function qd(y,d,u){const N=(y[d]||0)+u,L=Math.max(-100,Math.min(100,N));return{...y,[d]:L}}function Xd(y,d){const u=y.likes||[],C=y.dislikes||[];let N=d.bondIncrease,L="neutral",I="";return u.includes(d.id)?(N=Math.round(d.bondIncrease*1.5),L="like",I=`${y.name}'s face lit up! They really enjoyed ${d.name}! Your bond increased by ${N}.`):C.includes(d.id)?(N=-Math.round(d.bondIncrease*1),L="dislike",I=`Oops! ${y.name} clearly disliked this activity. Your bond decreased by ${Math.abs(N)}.`):I=`You had a nice time with ${y.name}. Your bond increased by ${N}.`,{bondChange:N,reaction:L,message:I}}function Kd({member:y,socialBonds:d,discoveredInfo:u,getRelationshipStatus:C,onClose:N}){var H,re;const L=u[y.name]||{},I=d[y.name]||0,F=I<0;return o.jsx("div",{className:"member-modal-overlay",onClick:N,children:o.jsxs("div",{className:"member-modal-content",onClick:_=>_.stopPropagation(),children:[o.jsxs("div",{className:`member-modal-header ${F?"negative":"positive"}`,children:[o.jsx("h3",{children:y.name}),o.jsx("button",{className:"modal-close-btn",onClick:N,children:"×"})]}),o.jsxs("div",{className:"member-modal-body",children:[y.expertise&&L.expertise?o.jsxs("div",{className:"member-detail",children:[o.jsx("span",{className:"detail-label",children:"Expertise:"}),o.jsx("span",{className:"detail-value",children:y.expertise})]}):o.jsxs("div",{className:"member-detail undiscovered",children:[o.jsx("span",{className:"detail-label",children:"Expertise:"}),o.jsx("span",{className:"detail-value",children:"Unknown"})]}),y.personality&&L.personality?o.jsxs("div",{className:"member-detail",children:[o.jsx("span",{className:"detail-label",children:"Personality:"}),o.jsx("span",{className:"detail-value",children:y.personality})]}):o.jsxs("div",{className:"member-detail undiscovered",children:[o.jsx("span",{className:"detail-label",children:"Personality:"}),o.jsx("span",{className:"detail-value",children:"Unknown"})]}),y.hobby&&L.hobby?o.jsxs("div",{className:"member-detail",children:[o.jsx("span",{className:"detail-label",children:"Hobby:"}),o.jsx("span",{className:"detail-value",children:y.hobby})]}):o.jsxs("div",{className:"member-detail undiscovered",children:[o.jsx("span",{className:"detail-label",children:"Hobby:"}),o.jsx("span",{className:"detail-value",children:"Unknown"})]}),y.background&&L.background?o.jsxs("div",{className:"member-detail",children:[o.jsx("span",{className:"detail-label",children:"Background:"}),o.jsx("span",{className:"detail-value",children:y.background})]}):o.jsxs("div",{className:"member-detail undiscovered",children:[o.jsx("span",{className:"detail-label",children:"Background:"}),o.jsx("span",{className:"detail-value",children:"Unknown"})]}),d[y.name]!==void 0&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"member-detail",children:[o.jsx("span",{className:"detail-label",children:"Bond Strength:"}),o.jsxs("span",{className:`detail-value ${F?"negative":"positive"}`,children:[I,"/100"]})]}),o.jsxs("div",{className:"member-detail",children:[o.jsx("span",{className:"detail-label",children:"Relationship:"}),o.jsx("span",{className:`detail-value ${F?"negative":"positive"}`,children:C(I)})]})]}),d[y.name]!==void 0&&(I>=60||I<=-60)&&(((H=y.likes)==null?void 0:H.length)>0||((re=y.dislikes)==null?void 0:re.length)>0)&&o.jsxs("div",{className:"member-preferences",children:[o.jsx("h4",{children:"Activity Preferences"}),o.jsxs("div",{className:"preferences-columns",children:[o.jsxs("div",{className:"preferences-column",children:[o.jsx("h5",{children:"Likes"}),o.jsx("ul",{className:"preferences-list likes-list",children:y.likes&&y.likes.length>0?y.likes.map(_=>{const T=zr.find(B=>B.id===_);return T?o.jsx("li",{className:"preference-item like-item",children:T.name},`like-${_}`):null}):o.jsx("li",{className:"preference-item empty",children:"No known likes"})})]}),o.jsxs("div",{className:"preferences-column",children:[o.jsx("h5",{children:"Dislikes"}),o.jsx("ul",{className:"preferences-list dislikes-list",children:y.dislikes&&y.dislikes.length>0?y.dislikes.map(_=>{const T=zr.find(B=>B.id===_);return T?o.jsx("li",{className:"preference-item dislike-item",children:T.name},`dislike-${_}`):null}):o.jsx("li",{className:"preference-item empty",children:"No known dislikes"})})]})]})]})]})]})})}function Jd({socialBonds:y,cohortMembers:d=[],discoveredInfo:u={}}){const[C,N]=q.useState(null),L=100,I=Object.entries(y).sort((_,T)=>T[1]-_[1]),F=_=>_>=100?"Best Friend":_>=80?"Close Friend":_>=60?"Good Friend":_>=40?"Friend":_>=1?"Acquaintance":_===0?"Classmate":_>=-40?"Awkward":_>=-60?"Tense":_>=-80?"Hostile":_>=-90?"Enemy":"Nemesis",H=_=>d.find(T=>T.name===_)||{name:_},re=_=>{const T=H(_);N(T)};return o.jsxs("div",{className:"social-bonds-container",children:[o.jsxs("h3",{children:["Classmates (",I.length,")"]}),o.jsx("div",{className:"bonds-grid",children:I.map(([_,T])=>{const B=F(T);H(_),u[_];const le=T<0,J=T>0;return o.jsxs("div",{className:`bond-item ${le?"negative-bond":J?"positive-bond":""}`,onClick:()=>re(_),children:[o.jsxs("div",{className:"bond-header",children:[o.jsx("span",{className:"bond-name",children:_}),o.jsxs("span",{className:`bond-value ${le?"negative":"positive"}`,children:[T,"/100"]})]}),o.jsx("div",{className:"bond-bar",children:o.jsx("div",{className:`bond-progress ${le?"negative":"positive"}`,style:{width:`${Math.min(Math.abs(T),L)}%`},title:`${_}: ${T}`})}),o.jsx("div",{className:`relationship-status ${le?"negative":"positive"}`,children:B})]},_)})}),C&&o.jsx(Kd,{member:C,socialBonds:y,discoveredInfo:u,getRelationshipStatus:F,onClose:()=>N(null)})]})}function Au({day:y,actionsRemaining:d,onEndDay:u,page:C}){const N=["January","February","March","April","May","June","July","August","September","October","November","December"],I=y,F=Math.floor((I-1)/30),H=(I-1)%30+1,re=N[F%12],_=Math.floor(F/12)+1,T=(I-1)%7,B=T>=5,le=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],J=()=>{const R=[],ce=(I-H+1-1)%7,pe=ce;for(let Ce=1;Ce<=30;Ce++){const me=(ce+Ce-1)%7,Ee=me>=5;R.push({dayNum:Ce,isWeekend:Ee,dayOfWeek:me})}return{days:R,emptyDays:pe}},{days:Z,emptyDays:V}=J();return o.jsxs("div",{className:"calendar-container",children:[o.jsxs("div",{className:"calendar-header",children:[o.jsxs("h2",{children:[re," ",_]}),o.jsxs("div",{className:"calendar-info",children:[o.jsxs("p",{children:["Bootcamp Day: ",I]}),o.jsxs("p",{children:["Today: ",le[T]]}),B?o.jsx("p",{className:"weekend-label",children:"Weekend - No Bootcamp"}):o.jsxs("p",{children:["Actions: ",d,"/8"]})]})]}),o.jsxs("div",{className:"calendar-grid",children:[["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((R,se)=>o.jsx("div",{className:`calendar-day-name ${se>=5?"weekend":""}`,children:R},`header-${se}`)),Array.from({length:V}).map((R,se)=>o.jsx("div",{className:"calendar-day empty"},`empty-${se}`)),Z.map(({dayNum:R,isWeekend:se})=>o.jsx("div",{className:`calendar-day ${R===H?"current":""} ${se?"weekend":""}`,children:R},`day-${R}`))]}),o.jsx("div",{className:"calendar-actions",children:o.jsx("button",{onClick:u,className:"end-day-btn",children:B?"Skip to Monday":"End Day Early"})})]})}function Zd({practiceCoding:y,socialize:d,rest:u,studyPython:C}){return o.jsxs("div",{className:"actions-panel",children:[o.jsx("h1",{children:"Daily Actions"}),o.jsxs("div",{className:"actions-buttons",children:[o.jsx("button",{onClick:C,children:"Study Python"}),o.jsx("button",{onClick:y,children:"Practice Coding"}),o.jsx("button",{onClick:d,children:"Socialize"}),o.jsx("button",{onClick:u,children:"Rest"})]})]})}const Bi=[{id:1,title:"Sum Two Numbers",description:"Write a function that returns the sum of two numbers.",initialCode:`def add_numbers(a, b):
    # Your code here
    

# Example usage
result = add_numbers(5, 3)
print(result)`,expectedOutput:"8",hint:"Use the + operator to add the numbers and return the result.",solution:`def add_numbers(a, b):
    return a + b

# Example usage
result = add_numbers(5, 3)
print(result)`},{id:2,title:"Greet User",description:"Write a function that takes a name as input and returns a greeting message.",initialCode:`def greet(name):
    # Your code here
    

# Example usage
result = greet('Alex')
print(result)`,expectedOutput:"Hello, Alex!",hint:"Use string concatenation or f-strings to combine the greeting with the name.",solution:`def greet(name):
    return f"Hello, {name}!"

# Example usage
result = greet('Alex')
print(result)`},{id:3,title:"String Reversal",description:"Write a function that reverses a string.",initialCode:`def reverse_string(text):
    # Your code here
    

# Example usage
result = reverse_string('hello')
print(result)`,expectedOutput:"olleh",hint:"You can use string slicing with a negative step: text[::-1]",solution:`def reverse_string(text):
    return text[::-1]

# Example usage
result = reverse_string('hello')
print(result)`},{id:4,title:"Even or Odd",description:"Write a function that determines if a number is even or odd.",initialCode:`def is_even(number):
    # Your code here
    

# Example usage
result = is_even(4)
print(result)`,expectedOutput:"True",hint:"Use the modulo operator (%) to check if a number is divisible by 2.",solution:`def is_even(number):
    return number % 2 == 0

# Example usage
result = is_even(4)
print(result)`},{id:5,title:"Convert Temperature",description:"Write a function that converts temperature from Celsius to Fahrenheit.",initialCode:`def celsius_to_fahrenheit(celsius):
    # Your code here
    

# Example usage
result = celsius_to_fahrenheit(25)
print(result)`,expectedOutput:"77.0",hint:"The formula is: Fahrenheit = (Celsius * 9/5) + 32",solution:`def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

# Example usage
result = celsius_to_fahrenheit(25)
print(result)`},{id:6,title:"Calculate Average",description:"Write a function that calculates the average of a list of numbers.",initialCode:`def calculate_average(numbers):
    # Your code here
    

# Example usage
result = calculate_average([5, 10, 15, 20])
print(result)`,expectedOutput:"12.5",hint:"Calculate the sum of all elements, then divide by the number of elements.",solution:`def calculate_average(numbers):
    return sum(numbers) / len(numbers)

# Example usage
result = calculate_average([5, 10, 15, 20])
print(result)`},{id:7,title:"Multiply Strings",description:"Create a function that repeats a string a given number of times.",initialCode:`def repeat_string(text, times):
    # Your code here
    

# Example usage
result = repeat_string('abc', 3)
print(result)`,expectedOutput:"abcabcabc",hint:"You can multiply a string by a number in Python using the * operator.",solution:`def repeat_string(text, times):
    return text * times

# Example usage
result = repeat_string('abc', 3)
print(result)`},{id:8,title:"Count Words",description:"Write a function that counts the number of words in a sentence.",initialCode:`def count_words(sentence):
    # Your code here
    

# Example usage
result = count_words('Python is a great programming language')
print(result)`,expectedOutput:"6",hint:"You can split the sentence into a list of words using the split() method.",solution:`def count_words(sentence):
    return len(sentence.split())

# Example usage
result = count_words('Python is a great programming language')
print(result)`},{id:9,title:"Largest Number",description:"Write a function that finds the largest number in a list.",initialCode:`def find_largest(numbers):
    # Your code here
    

# Example usage
result = find_largest([5, 12, 9, 8, 14, 2])
print(result)`,expectedOutput:"14",hint:"You can use the built-in max() function or implement your own comparison logic.",solution:`def find_largest(numbers):
    return max(numbers)

# Example usage
result = find_largest([5, 12, 9, 8, 14, 2])
print(result)`},{id:10,title:"Count Vowels",description:"Write a function that counts the number of vowels in a string.",initialCode:`def count_vowels(text):
    # Your code here
    

# Example usage
result = count_vowels('programming')
print(result)`,expectedOutput:"3",hint:"Check each character against the vowels (a, e, i, o, u) and count the matches.",solution:`def count_vowels(text):
    vowels = 'aeiou'
    count = 0
    for char in text.lower():
        if char in vowels:
            count += 1
    return count

# Example usage
result = count_vowels('programming')
print(result)`},{id:11,title:"Reverse Words",description:"Write a function that reverses each word in a sentence while keeping the word order.",initialCode:`def reverse_words(sentence):
    # Your code here
    

# Example usage
result = reverse_words('Hello world')
print(result)`,expectedOutput:"olleH dlrow",hint:"Split the sentence into words, reverse each word, then join them back together.",solution:`def reverse_words(sentence):
    words = sentence.split()
    reversed_words = [word[::-1] for word in words]
    return ' '.join(reversed_words)

# Example usage
result = reverse_words('Hello world')
print(result)`},{id:12,title:"FizzBuzz",description:"Implement the classic FizzBuzz function. For numbers divisible by 3, return 'Fizz'. For numbers divisible by 5, return 'Buzz'. For numbers divisible by both 3 and 5, return 'FizzBuzz'. Otherwise, return the number itself as a string.",initialCode:`def fizzbuzz(number):
    # Your code here
    

# Example usage
result = fizzbuzz(15)
print(result)`,expectedOutput:"FizzBuzz",hint:"Use the modulo operator (%) to check divisibility and conditional statements to determine the return value.",solution:`def fizzbuzz(number):
    if number % 3 == 0 and number % 5 == 0:
        return 'FizzBuzz'
    elif number % 3 == 0:
        return 'Fizz'
    elif number % 5 == 0:
        return 'Buzz'
    else:
        return str(number)

# Example usage
result = fizzbuzz(15)
print(result)`},{id:13,title:"Remove Duplicates",description:"Write a function that removes duplicate values from a list while preserving the original order.",initialCode:`def remove_duplicates(items):
    # Your code here
    

# Example usage
result = remove_duplicates([1, 2, 3, 2, 1, 4, 5, 4])
print(result)`,expectedOutput:"[1, 2, 3, 4, 5]",hint:"You can use a dictionary or set to keep track of unique items while preserving the original order.",solution:`def remove_duplicates(items):
    seen = set()
    result = []
    for item in items:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

# Example usage
result = remove_duplicates([1, 2, 3, 2, 1, 4, 5, 4])
print(result)`},{id:14,title:"List Filtering",description:"Write a function that filters out all numbers from a list that are less than a given value.",initialCode:`def filter_list(numbers, minimum):
    # Your code here
    

# Example usage
result = filter_list([1, 4, 6, 7, 2, 9], 5)
print(result)`,expectedOutput:"[6, 7, 9]",hint:"Use a list comprehension or filter function to keep only the elements that meet the condition.",solution:`def filter_list(numbers, minimum):
    return [num for num in numbers if num >= minimum]

# Example usage
result = filter_list([1, 4, 6, 7, 2, 9], 5)
print(result)`},{id:15,title:"Title Case Converter",description:"Write a function that converts a sentence to title case (first letter of each word capitalized).",initialCode:`def title_case(sentence):
    # Your code here
    

# Example usage
result = title_case('python programming is fun')
print(result)`,expectedOutput:"Python Programming Is Fun",hint:"Split the sentence into words, capitalize each word, then join them back together.",solution:`def title_case(sentence):
    words = sentence.split()
    title_words = [word.capitalize() for word in words]
    return ' '.join(title_words)

# Example usage
result = title_case('python programming is fun')
print(result)`},{id:16,title:"Dictionary Creation",description:"Create a function that takes two lists and returns a dictionary where items from the first list are keys and items from the second list are values.",initialCode:`def create_dict(keys, values):
    # Your code here
    

# Example usage
result = create_dict(['a', 'b', 'c'], [1, 2, 3])
print(result)`,expectedOutput:"{'a': 1, 'b': 2, 'c': 3}",hint:"Use the zip function to combine the two lists and then convert to a dictionary.",solution:`def create_dict(keys, values):
    return dict(zip(keys, values))

# Example usage
result = create_dict(['a', 'b', 'c'], [1, 2, 3])
print(result)`},{id:17,title:"Palindrome Check",description:"Write a function that checks whether a string is a palindrome (reads the same forwards and backwards).",initialCode:`def is_palindrome(text):
    # Your code here
    

# Example usage
result = is_palindrome('racecar')
print(result)`,expectedOutput:"True",hint:"Remove spaces and convert to lowercase, then compare the string with its reverse.",solution:`def is_palindrome(text):
    text = text.lower().replace(' ', '')
    return text == text[::-1]

# Example usage
result = is_palindrome('racecar')
print(result)`},{id:18,title:"Find Missing Number",description:"Write a function that finds the missing number in a sequence from 1 to n.",initialCode:`def find_missing(numbers):
    # Your code here
    

# Example usage
result = find_missing([1, 2, 4, 5, 6])
print(result)`,expectedOutput:"3",hint:"The sum of numbers from 1 to n is n*(n+1)/2. You can use this formula to find the missing number.",solution:`def find_missing(numbers):
    n = len(numbers) + 1
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(numbers)
    return expected_sum - actual_sum

# Example usage
result = find_missing([1, 2, 4, 5, 6])
print(result)`},{id:19,title:"Anagram Check",description:"Write a function that checks if two strings are anagrams (contain the same characters in a different order).",initialCode:`def is_anagram(str1, str2):
    # Your code here
    

# Example usage
result = is_anagram('listen', 'silent')
print(result)`,expectedOutput:"True",hint:"Sort the characters in both strings and compare them, or count the occurrences of each character.",solution:`def is_anagram(str1, str2):
    return sorted(str1.lower()) == sorted(str2.lower())

# Example usage
result = is_anagram('listen', 'silent')
print(result)`},{id:20,title:"Prime Number Checker",description:"Create a function that checks if a number is prime (only divisible by 1 and itself).",initialCode:`def is_prime(number):
    # Your code here
    

# Example usage
result = is_prime(17)
print(result)`,expectedOutput:"True",hint:"Check divisibility from 2 up to the square root of the number.",solution:`def is_prime(number):
    if number <= 1:
        return False
    if number <= 3:
        return True
    if number % 2 == 0 or number % 3 == 0:
        return False
    i = 5
    while i * i <= number:
        if number % i == 0 or number % (i + 2) == 0:
            return False
        i += 6
    return True

# Example usage
result = is_prime(17)
print(result)`},{id:21,title:"Flatten Nested List",description:"Write a function that flattens a nested list structure into a single list.",initialCode:`def flatten_list(nested_list):
    # Your code here
    

# Example usage
result = flatten_list([1, [2, 3], [4, [5, 6]]])
print(result)`,expectedOutput:"[1, 2, 3, 4, 5, 6]",hint:"Use recursion to handle arbitrary levels of nesting.",solution:`def flatten_list(nested_list):
    result = []
    for item in nested_list:
        if isinstance(item, list):
            result.extend(flatten_list(item))
        else:
            result.append(item)
    return result

# Example usage
result = flatten_list([1, [2, 3], [4, [5, 6]]])
print(result)`},{id:22,title:"Common Elements",description:"Write a function that finds common elements between two lists without duplicates.",initialCode:`def find_common(list1, list2):
    # Your code here
    

# Example usage
result = find_common([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])
print(result)`,expectedOutput:"[4, 5]",hint:"Use sets to efficiently find the intersection between the two lists.",solution:`def find_common(list1, list2):
    return list(set(list1) & set(list2))

# Example usage
result = find_common([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])
print(result)`}];function ef(y,d){let u="",C=!1;switch(y){case 1:d.includes("return a + b")||d.includes("return b + a")?(u="8",C=!0):u="Error: The function doesn't return the correct value.";break;case 2:d.includes("return")&&(d.includes("Hello")||d.includes("hello"))&&d.includes("name")&&(d.includes("+")||d.includes('f"'))?(u="Hello, Alex!",C=!0):u="Error: The function doesn't return the correct greeting.";break;case 3:d.includes("return text[::-1]")||d.includes("''.join(reversed(")?(u="olleh",C=!0):u="Error: The function doesn't reverse the string correctly.";break;case 4:d.includes("return number % 2 == 0")||d.includes("return not number % 2")?(u="True",C=!0):u="Error: The function doesn't correctly identify even numbers.";break;case 5:d.includes("return")&&d.includes("celsius * 9/5")&&d.includes("+ 32")||d.includes("return")&&d.includes("celsius * (9/5)")&&d.includes("+ 32")?(u="77.0",C=!0):u="Error: The function doesn't convert temperature correctly.";break;case 6:d.includes("return sum(numbers) / len(numbers)")?(u="12.5",C=!0):u="Error: The function doesn't calculate the average correctly.";break;case 7:d.includes("return text * times")?(u="abcabcabc",C=!0):u="Error: The function doesn't repeat the string correctly.";break;case 8:d.includes("return len(sentence.split())")||d.includes("split()")&&d.includes("len(")&&d.includes("return")?(u="6",C=!0):u="Error: The function doesn't count words correctly.";break;case 9:d.includes("return max(numbers)")||d.includes("max =")&&d.includes("return max")||d.includes("largest =")&&d.includes("return largest")?(u="14",C=!0):u="Error: The function doesn't find the largest number correctly.";break;case 10:(d.includes("vowels")||d.includes("aeiou"))&&(d.includes("count += 1")||d.includes("count = count + 1")||d.includes("count+=1")||d.includes("count++")||d.includes("count = len"))?(u="3",C=!0):u="Error: The function doesn't count vowels correctly.";break;case 11:d.includes("split")&&d.includes("join")&&d.includes("[::-1]")||d.includes("split")&&d.includes("reversed")&&d.includes("join")?(u="olleH dlrow",C=!0):u="Error: The function doesn't reverse words correctly.";break;case 12:d.includes("if number % 3 == 0 and number % 5 == 0")&&d.includes("return 'FizzBuzz'")&&d.includes("return 'Fizz'")&&d.includes("return 'Buzz'")?(u="FizzBuzz",C=!0):u="Error: The function doesn't implement FizzBuzz correctly.";break;case 13:d.includes("seen = set()")&&d.includes("if item not in seen")||d.includes("result = []")&&d.includes("not in result")||d.includes("list(dict.fromkeys")?(u="[1, 2, 3, 4, 5]",C=!0):u="Error: The function doesn't remove duplicates correctly.";break;case 14:d.includes("return [")&&d.includes("for")&&d.includes("if")&&d.includes(">=")||d.includes("filter")&&d.includes("lambda")?(u="[6, 7, 9]",C=!0):u="Error: The function doesn't filter the list correctly.";break;case 15:d.includes("split")&&d.includes("capitalize")&&d.includes("join")||d.includes("split")&&d.includes("title()")?(u="Python Programming Is Fun",C=!0):u="Error: The function doesn't convert to title case correctly.";break;case 16:d.includes("dict(zip(")||d.includes("{")&&d.includes("for")&&d.includes("in zip(")?(u="{'a': 1, 'b': 2, 'c': 3}",C=!0):u="Error: The function doesn't create a dictionary correctly.";break;case 17:d.includes("text == text[::-1]")||d.includes("reversed(")&&d.includes("join")||d.includes("for")&&d.includes("reversed")?(u="True",C=!0):u="Error: The function doesn't check palindromes correctly.";break;case 18:d.includes("n = len(numbers) + 1")&&d.includes("expected_sum")&&d.includes("actual_sum")&&d.includes("return expected_sum - actual_sum")||d.includes("range")&&d.includes("set")&&d.includes("difference")?(u="3",C=!0):u="Error: The function doesn't find the missing number correctly.";break;case 19:d.includes("sorted(str1.lower()) == sorted(str2.lower())")||d.includes("Counter")&&d.includes("str1")&&d.includes("str2")||d.includes("sort")&&d.includes("join")&&d.includes("==")?(u="True",C=!0):u="Error: The function doesn't check anagrams correctly.";break;case 20:d.includes("for")&&d.includes("range")&&d.includes("number % i == 0")||d.includes("while")&&d.includes("number % i == 0")?(u="True",C=!0):u="Error: The function doesn't check for prime numbers correctly.";break;case 21:d.includes("if isinstance(item, list)")&&d.includes("recursion")||d.includes("flatten_list(item)")||d.includes("from itertools import chain")||d.includes("from collections import Iterable")?(u="[1, 2, 3, 4, 5, 6]",C=!0):u="Error: The function doesn't flatten the nested list correctly.";break;case 22:d.includes("set(list1) & set(list2)")||d.includes("intersection")&&d.includes("set")||d.includes("for")&&d.includes("if")&&d.includes("in")&&d.includes("list1")&&d.includes("list2")?(u="[4, 5]",C=!0):u="Error: The function doesn't find common elements correctly.";break;default:u="Error: Unknown challenge."}return{output:u,isCorrect:C}}function tf({onComplete:y,onClose:d,currentLevel:u=0}){const[C,N]=q.useState(""),[L,I]=q.useState(""),[F,H]=q.useState(null),[re,_]=q.useState(!1),[T,B]=q.useState(!1),le=R=>{const se=Math.min(R,Bi.length-1);return Bi[se]};q.useEffect(()=>{const R=le(u);H(R),N(R.initialCode),I(""),_(!1),B(!1)},[u]);const J=()=>{try{if(T)return;I("");const R=ef(F.id,C);I(R.output),_(R.isCorrect),R.isCorrect&&(B(!0),I(se=>se+`

✓ Great job! Your solution is correct! Returning to main game...`),setTimeout(()=>{y&&y()},3500))}catch(R){I(`Error executing code: ${R.message}`)}},Z=()=>{I(`Hint: ${F.hint}`)},V=()=>{N(F.solution),I("Solution revealed! You can run it to see how it works.")};return F?o.jsx("div",{className:"coding-practice-modal",children:o.jsxs("main",{className:"coding-practice-container",children:[o.jsxs("div",{className:"coding-header",children:[o.jsx("h2",{children:F.title}),o.jsx("button",{className:"close-button",onClick:d,disabled:T,children:"×"})]}),o.jsxs("div",{className:"challenge-description",children:[o.jsx("p",{children:F.description}),o.jsx("div",{className:"challenge-difficulty",children:o.jsxs("span",{children:["Difficulty: ",u+1,"/",Bi.length]})})]}),o.jsx("div",{className:"code-editor",children:o.jsx("textarea",{value:C,onChange:R=>N(R.target.value),placeholder:"Write your Python code here...",spellCheck:"false",disabled:T})}),o.jsxs("div",{className:"terminal",children:[o.jsx("div",{className:"terminal-header",children:o.jsx("span",{children:"Terminal Output"})}),o.jsx("div",{className:"terminal-content",children:L?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"terminal-command",children:"$ python solution.py"}),o.jsx("div",{className:`terminal-output ${re?"success":""}`,children:L}),re&&!T&&o.jsx("div",{className:"success-message",children:"✓ Great job! Your solution is correct!"})]}):o.jsx("div",{className:"terminal-prompt",children:"Run your code to see output here."})})]}),o.jsxs("div",{className:"coding-actions",children:[o.jsx("button",{onClick:J,disabled:T,children:"Run Code"}),o.jsx("button",{onClick:Z,disabled:T,children:"Hint"}),o.jsx("button",{onClick:V,disabled:T,children:"Show Solution"})]})]})}):o.jsx("div",{children:"Loading challenge..."})}function nf({person:y,onComplete:d,onClose:u,onDiscoverInfo:C}){const[N,L]=q.useState(null),[I,F]=q.useState([]),[H,re]=q.useState(null),[_,T]=q.useState(null),[B,le]=q.useState(!1);q.useEffect(()=>{const se=[...zr].sort(()=>.5-Math.random()).slice(0,4);F(se)},[y.name]);const J=R=>{let ce=[...["expertise","personality","hobby","background"]];R.id===10||R.id===11?ce.push("personality","personality","expertise","expertise"):R.id===3||R.id===9||R.id===19?ce.push("hobby","hobby","personality"):R.id===12||R.id===15||R.id===18?ce.push("expertise","expertise","background"):(R.id===7||R.id===8||R.id===13||R.id===20)&&ce.push("hobby","personality");const pe=ce[Math.floor(Math.random()*ce.length)];return y[pe]?{attribute:pe,value:y[pe]}:{attribute:"personality",value:y.personality||"Mysterious"}},Z=R=>{L(R);const se=J(R);re(se);const ce=Xd(y,R);T(ce),le(!0)},V=()=>{N&&d(N,H,_)};return o.jsx("div",{className:"socialize-modal-overlay",children:o.jsxs("div",{className:"socialize-modal-content",children:[o.jsxs("div",{className:"socialize-modal-header",children:[o.jsxs("h3",{children:["Socialize with ",y.name]}),o.jsx("button",{className:"modal-close-btn",onClick:u,children:"×"})]}),o.jsx("div",{className:"socialize-modal-body",children:B?o.jsxs("div",{className:"results-container",children:[o.jsx("h4",{children:"Activity Results"}),o.jsxs("div",{className:"activity-summary",children:["You chose to ",o.jsx("strong",{children:N.name})," with"," ",y.name,"."]}),_&&o.jsxs("div",{className:`reaction-message ${_.reaction}`,children:[o.jsx("p",{children:_.message}),_.reaction==="dislike"&&o.jsxs("p",{className:"extra-warning",children:[o.jsx("strong",{children:"Be careful!"})," Some activities can damage your relationship."]})]}),H&&o.jsx("div",{className:"discovery-message",children:o.jsxs("p",{children:["You learned that ",y.name,"'s ",H.attribute," ",'is "',H.value,'"!']})}),o.jsxs("div",{className:"bond-change-summary",children:[o.jsxs("div",{className:"bond-result",children:["Bond Change:"," ",o.jsxs("span",{className:_.bondChange>=0?"positive-bond":"negative-bond",children:[_.bondChange>=0?"+":"",_.bondChange]})]}),o.jsxs("div",{className:"energy-spent",children:["Energy Spent:"," ",o.jsxs("span",{className:"negative-energy",children:["-",N.energyCost]})]})]}),o.jsx("button",{className:"continue-button",onClick:V,children:"Continue"})]}):o.jsxs(o.Fragment,{children:[o.jsxs("p",{className:"socialize-prompt",children:["What would you like to do with ",y.name,"?"]}),o.jsxs("div",{className:"bond-status",children:["Current Bond:"," ",o.jsx("span",{className:y.bondValue<0?"negative-bond":"positive-bond",children:y.bondValue})]}),o.jsx("div",{className:"activity-options",children:I.map(R=>o.jsxs("button",{className:`activity-button ${N===R?"selected":""}`,onClick:()=>Z(R),disabled:N!==null,children:[o.jsx("span",{className:"activity-name",children:R.name}),o.jsx("div",{className:"activity-details",children:o.jsxs("span",{className:"energy-cost",children:["Energy: -",R.energyCost]})})]},R.id))})]})})]})})}function rf({onComplete:y,onClose:d,currentLevel:u=0}){const[C,N]=q.useState(null),L=[{id:1,title:"Hello World - Your First Python Program",content:`Every programmer starts with a "Hello World" program. In Python, it's incredibly simple:

\`\`\`python
print("Hello World")
\`\`\`

The \`print()\` function displays text to the screen. Text strings in Python are enclosed in quotes (either single ' or double ").

Try running this in a Python environment and you'll see "Hello World" displayed on the screen.`,tip:"Python is known for its readability and simplicity. Unlike other languages, you don't need semicolons or complex syntax to get started!"},{id:2,title:"Variables and Data Types",content:`Variables let you store information that can be used later. In Python, you don't need to declare variable types:

\`\`\`python
name = "Alice"        # A string
age = 25              # An integer
height = 5.7          # A float (decimal)
is_student = True     # A boolean (True/False)

print(name)
print("Age:", age)
print(f"Height: {height} ft")  # f-strings for formatting
\`\`\`

Python determines the type automatically based on what you assign to it.`,tip:"Unlike languages like Java or C++, Python uses dynamic typing. You can reassign a variable to a different data type later in your code!"},{id:3,title:"Basic Operators",content:`Python has all the standard mathematical operators:

\`\`\`python
a = 10
b = 3

print(a + b)    # Addition: 13
print(a - b)    # Subtraction: 7
print(a * b)    # Multiplication: 30
print(a / b)    # Division: 3.3333...
print(a % b)    # Modulus (remainder): 1
print(a ** b)   # Exponentiation: 1000
print(a // b)   # Floor division: 3
\`\`\`

Python also has comparison operators that return boolean values:

\`\`\`python
print(a > b)    # True
print(a == b)   # False
print(a != b)   # True
\`\`\``,tip:"The modulus operator (%) is incredibly useful for checking if a number is even, odd, or divisible by another number."},{id:4,title:"String Operations",content:`Strings in Python are extremely versatile:

\`\`\`python
name = "Python Programming"

# Basic operations
print(len(name))                # Length: 18
print(name.upper())             # "PYTHON PROGRAMMING"
print(name.lower())             # "python programming"
print(name.replace("P", "J"))   # "Jython Jrogramming"

# String indexing and slicing
print(name[0])                  # "P" (first character)
print(name[-1])                 # "g" (last character)
print(name[0:6])                # "Python" (slice from 0 to 5)
print(name[7:])                 # "Programming" (slice from 7 to end)
print(name[:6])                 # "Python" (slice from start to 5)

# String methods
print("programming" in name.lower())  # True (checking substring)
print(name.split(" "))                # ["Python", "Programming"]
print(" ".join(["Hello", "World"]))   # "Hello World"
\`\`\`

String slicing with \`[start:end]\` is extremely useful for extracting parts of strings.`,tip:"To reverse a string, you can use the slice notation with a negative step: text[::-1]"},{id:5,title:"Lists - Python's Versatile Arrays",content:`Lists are ordered collections of items, similar to arrays in other languages:

\`\`\`python
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]  # Can contain different types

# Accessing items (indexing starts at 0)
print(fruits[0])     # "apple"
print(numbers[1:3])  # [2, 3] (slicing)

# Common operations
fruits.append("orange")  # Add an item
fruits.remove("banana")  # Remove an item
print(len(fruits))       # Get length: 3
print("apple" in fruits) # Check if item exists: True

# More list methods
numbers.sort()           # Sort in-place: [1, 2, 3, 4, 5]
numbers.reverse()        # Reverse in-place: [5, 4, 3, 2, 1]
fruits.insert(1, "kiwi") # Insert at position: ["apple", "kiwi", "cherry", "orange"]
print(fruits.pop())      # Remove and return last item: "orange"
\`\`\`

Lists are mutable, meaning you can change them after creation.`,tip:"List slicing with [start:end] is a powerful way to extract parts of a list. The 'end' index is not included in the result."},{id:6,title:"Conditional Statements",content:`Conditional statements let your program make decisions:

\`\`\`python
age = 18

if age < 13:
    print("Child")
elif age < 18:
    print("Teenager")
else:
    print("Adult")  # This will print

# Multiple conditions with logical operators
temperature = 75
is_sunny = True

if temperature > 70 and is_sunny:
    print("It's a beautiful day!")  # This will print

# Nested conditions
score = 85
if score >= 60:
    print("Passed")
    if score >= 80:
        print("Excellent!")  # This will print
\`\`\`

Python uses indentation (spaces or tabs) to create code blocks instead of curly braces {}. The standard is 4 spaces per indentation level.`,tip:"The logical operators in Python are 'and', 'or', and 'not' (instead of &&, ||, and ! in many other languages)."},{id:7,title:"Loops - Repeating Code",content:`Loops help you execute code multiple times. The most common types are for and while loops:

\`\`\`python
# For loop with a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# For loop with a range
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1  # Shorthand for count = count + 1

# Loop control statements
for i in range(10):
    if i == 3:
        continue  # Skip the rest of this iteration
    if i == 7:
        break     # Exit the loop completely
    print(i)      # Prints 0, 1, 2, 4, 5, 6
\`\`\`

The 'break' statement exits a loop, and 'continue' skips to the next iteration.`,tip:"The range() function is commonly used with for loops. range(start, stop, step) can be configured for different sequences of numbers."},{id:8,title:"Functions - Reusable Code Blocks",content:`Functions help you organize and reuse code:

\`\`\`python
def greet(name):
    """This is a docstring: it documents what the function does."""
    return f"Hello, {name}!"

# Calling the function
message = greet("Alex")
print(message)  # "Hello, Alex!"

# Function with default parameter
def greet_with_time(name, time="day"):
    return f"Good {time}, {name}!"

print(greet_with_time("Alex"))         # "Good day, Alex!"
print(greet_with_time("Alex", "night")) # "Good night, Alex!"

# Multiple return values (as a tuple)
def get_user_info():
    return "Alice", 30, "London"  

name, age, city = get_user_info()
print(name)  # "Alice"
\`\`\`

Functions can return values or perform actions without returning anything.`,tip:"Python supports both positional and keyword arguments. You can also create functions that accept variable numbers of arguments using *args and **kwargs."},{id:9,title:"Dictionaries - Key-Value Pairs",content:`Dictionaries store data as key-value pairs:

\`\`\`python
# Creating a dictionary
person = {
    "name": "Alex",
    "age": 30,
    "city": "London"
}

# Accessing values
print(person["name"])  # "Alex"

# Adding or modifying
person["email"] = "alex@example.com"
person["age"] = 31

# Checking if a key exists
if "phone" in person:
    print(person["phone"])
else:
    print("No phone number")  # This will print

# Safer way to get values with a default
phone = person.get("phone", "Not available")
print(phone)  # "Not available"

# Looping through a dictionary
for key, value in person.items():
    print(f"{key}: {value}")

# Dictionary methods
print(person.keys())    # dict_keys(['name', 'age', 'city', 'email'])
print(person.values())  # dict_values(['Alex', 31, 'London', 'alex@example.com'])
\`\`\`

Dictionaries are extremely useful for representing structured data.`,tip:"Unlike lists, dictionary keys must be immutable (strings, numbers, tuples, but not lists). Keys must also be unique within a dictionary."},{id:10,title:"Tuples and Sets",content:`Besides lists and dictionaries, Python offers tuples and sets:

\`\`\`python
# Tuples - Immutable ordered collections
coordinates = (10, 20)
rgb = (255, 0, 128)

# Accessing tuple elements (similar to lists)
print(coordinates[0])  # 10

# You can't modify tuples
# coordinates[0] = 15  # This would cause an error!

# Sets - Unordered collections of unique items
unique_numbers = {1, 2, 3, 4, 5}
also_unique = set([1, 2, 2, 3, 3, 3])  # Creates {1, 2, 3}

# Common set operations
unique_numbers.add(6)      # Add an item
unique_numbers.remove(1)   # Remove an item
print(2 in unique_numbers) # Check membership: True

# Mathematical set operations
set_a = {1, 2, 3, 4}
set_b = {3, 4, 5, 6}
print(set_a | set_b)  # Union: {1, 2, 3, 4, 5, 6}
print(set_a & set_b)  # Intersection: {3, 4}
print(set_a - set_b)  # Difference: {1, 2}
\`\`\`

Tuples are perfect for data that shouldn't change, while sets are ideal for eliminating duplicates and performing set operations.`,tip:"Sets are incredibly efficient for testing membership (checking if an item exists). This operation is much faster in sets than in lists."},{id:11,title:"Error Handling with Try/Except",content:`Python uses try/except blocks for error handling:

\`\`\`python
try:
    # Code that might cause an error
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"10 divided by {number} is {result}")
except ValueError:
    # Handles case where input isn't a valid number
    print("That's not a valid number!")
except ZeroDivisionError:
    # Handles case where number is zero
    print("You can't divide by zero!")
except:
    # Catches any other errors
    print("Something went wrong!")
finally:
    # This code always runs
    print("Thank you for trying!")

# You can also get information about the error
try:
    # Some code that might fail
    x = 10 / 0
except Exception as e:
    print(f"An error occurred: {e}")  # "An error occurred: division by zero"
\`\`\`

Error handling prevents your program from crashing when unexpected issues occur.`,tip:"It's best practice to catch specific exceptions rather than using a bare 'except:' statement. This makes debugging easier and prevents hiding bugs."},{id:12,title:"File Operations",content:`Python makes it easy to work with files:

\`\`\`python
# Writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, world!\\n")
    file.write("This is a test file.")

# Reading from a file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)

# Reading line by line
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())  # strip() removes whitespace/newlines

# Appending to a file
with open("example.txt", "a") as file:
    file.write("\\nAppending a new line.")

# Reading and writing binary files
with open("image.jpg", "rb") as binary_file:
    data = binary_file.read(1024)  # Read first 1024 bytes
\`\`\`

The 'with' statement automatically closes the file when you're done with it.`,tip:"The 'with' statement is a best practice for file operations as it ensures files are properly closed even if an error occurs during processing."},{id:13,title:"List Comprehensions",content:`List comprehensions provide a concise way to create lists:

\`\`\`python
# Traditional approach
squares = []
for x in range(1, 6):
    squares.append(x**2)
print(squares)  # [1, 4, 9, 16, 25]

# Using list comprehension
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# With condition
even_squares = [x**2 for x in range(1, 11) if x % 2 == 0]
print(even_squares)  # [4, 16, 36, 64, 100]

# Nested list comprehension
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix for num in row]
print(flattened)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Dictionary comprehension
names = ['Alice', 'Bob', 'Charlie']
name_lengths = {name: len(name) for name in names}
print(name_lengths)  # {'Alice': 5, 'Bob': 3, 'Charlie': 7}
\`\`\`

List comprehensions are more readable and typically faster than traditional loops for creating lists.`,tip:"You can also create dictionary comprehensions with {key: value for item in iterable} and set comprehensions with {item for item in iterable}."},{id:14,title:"Lambda Functions",content:`Lambda functions are small, anonymous functions defined with the lambda keyword:

\`\`\`python
# Traditional function vs lambda
def square(x):
    return x * x

# Equivalent lambda function
square_lambda = lambda x: x * x

print(square(5))       # 25
print(square_lambda(5)) # 25

# Using lambda with built-in functions
numbers = [1, 5, 3, 9, 2, 6]
sorted_numbers = sorted(numbers)  # [1, 2, 3, 5, 6, 9]

# Sort by absolute difference from 5
custom_sort = sorted(numbers, key=lambda x: abs(x - 5))
print(custom_sort)  # [5, 6, 3, 9, 2, 1]

# Lambda with filter
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # [2, 6]

# Lambda with map
squared_numbers = list(map(lambda x: x**2, numbers))
print(squared_numbers)  # [1, 25, 9, 81, 4, 36]
\`\`\`

Lambda functions are useful when you need a simple function for a short period of time.`,tip:"While lambda functions can be convenient, they're best used for simple operations. For complex logic, a regular named function is more readable."},{id:15,title:"Modules and Imports",content:`Python's power comes from its vast library of modules:

\`\`\`python
# Importing an entire module
import math
print(math.sqrt(16))  # 4.0

# Importing specific functions
from random import randint
print(randint(1, 10))  # Random number between 1 and 10

# Importing with an alias
import datetime as dt
now = dt.datetime.now()
print(now)

# Some essential standard library modules
import os              # Operating system interface
import sys             # System-specific parameters
import json            # JSON encoding/decoding
import csv             # CSV file reading/writing
import re              # Regular expressions
import collections     # Specialized container datatypes
import itertools       # Functions for efficient looping
import functools       # Higher-order functions
\`\`\`

The Python Standard Library includes modules for math, datetime handling, file operations, networking, and much more.`,tip:"While you can use 'from module import *' to import all functions, it's generally not recommended as it can lead to namespace conflicts and make code harder to understand."},{id:16,title:"Working with JSON Data",content:`JSON (JavaScript Object Notation) is a common data format that Python handles easily:

\`\`\`python
import json

# Converting Python objects to JSON strings
person = {
    "name": "Alice",
    "age": 30,
    "languages": ["Python", "JavaScript", "C++"],
    "is_student": False
}

# Convert Python dict to JSON string
json_string = json.dumps(person, indent=4)
print(json_string)

# Writing JSON to a file
with open("person.json", "w") as file:
    json.dump(person, file, indent=4)

# Reading JSON from a string
data = '{"name": "Bob", "age": 25}'
parsed_data = json.loads(data)
print(parsed_data["name"])  # "Bob"

# Reading JSON from a file
with open("person.json", "r") as file:
    loaded_person = json.load(file)
    print(loaded_person["languages"])  # ["Python", "JavaScript", "C++"]
\`\`\`

JSON is commonly used for configuration files and API responses.`,tip:"JSON only supports basic data types (strings, numbers, booleans, null, arrays, and objects). Custom Python objects must be serialized to these types first."},{id:17,title:"Regular Expressions",content:`Regular expressions help you match and manipulate text patterns:

\`\`\`python
import re

text = "Contact us at info@example.com or support@company.org"

# Find all email addresses
emails = re.findall(r'[\\w.+-]+@[\\w-]+\\.[\\w.-]+', text)
print(emails)  # ['info@example.com', 'support@company.org']

# Search for a pattern
phone = "Call me at 555-123-4567"
match = re.search(r'\\d{3}-\\d{3}-\\d{4}', phone)
if match:
    print("Found phone number:", match.group())  # Found phone number: 555-123-4567

# Replace pattern
censored = re.sub(r'\\d{4}', 'XXXX', "My credit card: 1234 5678 9012 3456")
print(censored)  # My credit card: XXXX XXXX XXXX XXXX

# Match at beginning or end
starts_with_hello = re.match(r'^Hello', "Hello world")  # Matches
ends_with_world = re.search(r'world$', "Hello world")   # Matches
\`\`\`

Regular expressions can be complex but are extremely powerful for text processing.`,tip:"The 'r' prefix before the pattern string creates a 'raw string', which is recommended for regex patterns to avoid conflicts with Python's own escape sequences."},{id:18,title:"Classes and Object-Oriented Programming",content:`Python is a versatile object-oriented programming language:

\`\`\`python
class Person:
    # Class variable shared by all instances
    species = "Human"
    
    # Constructor method
    def __init__(self, name, age):
        # Instance variables unique to each instance
        self.name = name
        self.age = age
        
    # Instance method
    def greet(self):
        return f"Hello, my name is {self.name}"
        
    # Method with parameters
    def celebrate_birthday(self):
        self.age += 1
        return f"Happy {self.age}th birthday, {self.name}!"
        
# Creating objects (instances)
alice = Person("Alice", 30)
bob = Person("Bob", 25)

print(alice.name)            # "Alice"
print(bob.greet())           # "Hello, my name is Bob"
print(alice.species)         # "Human" (class variable)
print(bob.celebrate_birthday()) # "Happy 26th birthday, Bob!"
\`\`\`

Classes help organize code and data together, modeling real-world concepts.`,tip:"Python uses 'self' as the first parameter in instance methods to refer to the instance itself. It's similar to 'this' in other languages but is explicitly included in the parameter list."},{id:19,title:"Inheritance and Polymorphism",content:`Inheritance allows you to create new classes based on existing ones:

\`\`\`python
# Base class
class Animal:
    def __init__(self, name):
        self.name = name
        
    def speak(self):
        return "Some sound"
        
# Derived class (inherits from Animal)
class Dog(Animal):
    def speak(self):
        return "Woof!"
        
# Another derived class
class Cat(Animal):
    def speak(self):
        return "Meow!"
        
# Creating objects
animal = Animal("Generic Animal")
dog = Dog("Buddy")
cat = Cat("Whiskers")

print(animal.name)    # "Generic Animal"
print(dog.name)       # "Buddy" (inherited attribute)
print(cat.speak())    # "Meow!" (overridden method)

# Polymorphism - same method works for different classes
def make_speak(animal):
    return animal.speak()
    
print(make_speak(dog))  # "Woof!"
print(make_speak(cat))  # "Meow!"

# Multiple inheritance
class A:
    def method(self):
        return "A"
        
class B:
    def method(self):
        return "B"
        
class C(A, B):  # Inherits from both A and B
    pass
    
c = C()
print(c.method())  # "A" (method from the first parent class is used)
\`\`\`

Inheritance promotes code reuse, while polymorphism allows for flexible and interchangeable objects.`,tip:"Python supports multiple inheritance, but it can lead to complexity. The Method Resolution Order (MRO) determines which parent's method is called first."},{id:20,title:"Working with Dates and Times",content:`Python provides powerful modules for handling dates and times:

\`\`\`python
import datetime

# Current date and time
now = datetime.datetime.now()
print(now)  # 2025-05-31 15:30:45.123456

# Creating date objects
birthday = datetime.date(1991, 5, 31)
print(birthday)  # 1991-05-31

# Creating time objects
alarm = datetime.time(7, 30, 0)  # 7:30:00
print(alarm)

# Date arithmetic
today = datetime.date.today()
one_week = datetime.timedelta(days=7)
next_week = today + one_week
print(next_week)  # Date one week from today

# Time differences
start = datetime.datetime.now()
# ... some code that takes time
end = datetime.datetime.now()
duration = end - start
print(f"Operation took {duration.total_seconds()} seconds")

# Formatting dates
print(now.strftime("%Y-%m-%d %H:%M:%S"))  # 2025-05-31 15:30:45
print(now.strftime("%A, %B %d, %Y"))      # Saturday, May 31, 2025
\`\`\`

The datetime module is crucial for applications that need to work with dates, times, and time intervals.`,tip:"When working with international applications, be aware of timezone issues. The datetime module has timezone support, and the pytz library is useful for more advanced timezone handling."},{id:21,title:"Virtual Environments and Package Management",content:`Python's package ecosystem is managed with pip and virtual environments:

\`\`\`python
# Creating a virtual environment
# In terminal/command prompt:
# python -m venv myenv

# Activating the environment (Windows)
# myenv\\Scripts\\activate

# Activating the environment (macOS/Linux)
# source myenv/bin/activate

# Installing a package
# pip install requests

# Using an installed package
import requests

response = requests.get('https://api.github.com')
print(response.status_code)  # 200 if successful
data = response.json()
print(data.keys())

# Creating requirements.txt
# pip freeze > requirements.txt

# Installing from requirements.txt
# pip install -r requirements.txt

# Deactivating virtual environment
# deactivate
\`\`\`

Virtual environments keep project dependencies isolated from each other and the system Python.`,tip:"Always use virtual environments for your projects - it prevents dependency conflicts between different projects and makes it easy to share your project's requirements."},{id:22,title:"Generators and Iterators",content:`Generators provide a memory-efficient way to work with large data sequences:

\`\`\`python
# Generator function using yield
def count_up_to(max):
    count = 1
    while count <= max:
        yield count
        count += 1

# Using the generator
counter = count_up_to(5)
print(next(counter))  # 1
print(next(counter))  # 2
print(next(counter))  # 3

# Generators are iterators
for number in count_up_to(3):
    print(number)  # Prints 1, 2, 3

# Generator expressions - like list comprehensions but with ()
squared = (x**2 for x in range(1, 6))
for num in squared:
    print(num)  # Prints 1, 4, 9, 16, 25

# Infinite sequences (use with caution!)
def infinite_counter():
    num = 0
    while True:
        yield num
        num += 1

# Take just what you need
from itertools import islice
first_10 = islice(infinite_counter(), 10)
print(list(first_10))  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
\`\`\`

Generators calculate values on-demand, saving memory when working with large sequences.`,tip:"Unlike lists that compute and store all values in memory, generators compute values only when requested. This makes them ideal for processing large datasets or infinite sequences."},{id:23,title:"Context Managers with 'with' Statement",content:`Context managers help manage resources properly:

\`\`\`python
# Built-in context managers for files
with open('example.txt', 'w') as file:
    file.write('Hello, World!')
# File is automatically closed after the block

# Creating your own context manager using a class
class MyContext:
    def __init__(self, name):
        self.name = name
        
    def __enter__(self):
        print(f"Entering {self.name}")
        return self  # This is returned as 'context'
        
    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"Exiting {self.name}")
        # Return True to suppress exceptions, False to propagate
        return False

# Using our custom context manager
with MyContext("test") as context:
    print(f"Inside the context: {context.name}")

# Creating context manager using contextlib
from contextlib import contextmanager

@contextmanager
def my_context(name):
    print(f"Entering {name}")
    try:
        # Setup code - runs before the with block
        yield name  # This value is returned as 'value'
        # Cleanup code - runs after the with block
    finally:
        print(f"Exiting {name}")

with my_context("test2") as value:
    print(f"Inside the context: {value}")
\`\`\`

Context managers ensure proper resource initialization and cleanup, even if exceptions occur.`,tip:"Context managers are ideal for managing resources like files, network connections, and database transactions that need proper cleanup regardless of exceptions."},{id:24,title:"Decorators - Modifying Function Behavior",content:`Decorators allow you to modify the behavior of functions and methods:

\`\`\`python
# Simple decorator that prints function info
def log_function(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with {args} and {kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

# Apply decorator with @ syntax
@log_function
def add(a, b):
    return a + b

# Now when we call add(), it's wrapped with the logging
result = add(3, 5)  # Logs the call and return value

# Decorator with arguments
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            results = []
            for _ in range(times):
                results.append(func(*args, **kwargs))
            return results
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))  # Calls greet 3 times and returns results in a list

# Real-world examples
import time

def timing_decorator(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timing_decorator
def slow_function():
    time.sleep(1)
    return "Done"

slow_function()  # Shows execution time
\`\`\`

Decorators are a powerful way to extend and modify the behavior of functions without changing their code.`,tip:"Python's decorator pattern makes it easy to apply common functionality like logging, timing, authentication, and caching across many functions."},{id:25,title:"Functional Programming Tools",content:`Python supports functional programming concepts through various built-ins and modules:

\`\`\`python
from functools import reduce

numbers = [1, 2, 3, 4, 5]

# map - applies a function to each item in an iterable
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# filter - selects items from an iterable based on a function
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4]

# reduce - cumulatively applies a function to items, reducing to a single value
sum_all = reduce(lambda x, y: x + y, numbers)
print(sum_all)  # 15 (1+2+3+4+5)

# all - returns True if all items in iterable are truthy
print(all([True, 1, "hello"]))  # True
print(all([True, 0, "hello"]))  # False (0 is falsy)

# any - returns True if any item in iterable is truthy
print(any([False, 0, "", "hello"]))  # True ("hello" is truthy)
print(any([False, 0, ""]))  # False (all falsy)

# sorted with key function
words = ["apple", "banana", "cherry", "date"]
by_length = sorted(words, key=len)  # Sort by length
print(by_length)  # ['date', 'apple', 'banana', 'cherry']

# Partial functions
from functools import partial
def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)
print(square(5))  # 25
\`\`\`

Functional programming emphasizes pure functions and immutable data.`,tip:"While Python isn't a pure functional language, it offers many tools for functional programming. The key is to avoid modifying state and favor immutable data structures."},{id:26,title:"Asynchronous Programming with async/await",content:`Asynchronous programming allows non-blocking execution of code:

\`\`\`python
import asyncio

# Define an asynchronous function with 'async def'
async def say_after(delay, message):
    await asyncio.sleep(delay)  # Non-blocking sleep
    print(message)

# Another async function that calls other async functions
async def main():
    print("Start")
    
    # Run sequentially
    await say_after(1, "Hello")
    await say_after(1, "World")
    
    print("Sequential part done")
    
    # Run concurrently
    task1 = asyncio.create_task(say_after(1, "Concurrent Hello"))
    task2 = asyncio.create_task(say_after(1, "Concurrent World"))
    
    # Wait for both tasks to complete
    await task1
    await task2
    
    print("Concurrent part done")

# Run the async program
asyncio.run(main())

# Handling multiple tasks
async def gather_example():
    results = await asyncio.gather(
        say_after(1, "First"),
        say_after(2, "Second"),
        say_after(3, "Third")
    )
    return results
\`\`\`

Asynchronous programming is ideal for I/O-bound operations like network requests or file operations.`,tip:"Use async/await for programs that need to perform multiple I/O operations concurrently without blocking. It's especially useful for web scrapers, API clients, and web servers."},{id:27,title:"Working with Databases in Python",content:`Python can interact with various databases easily:

\`\`\`python
# SQLite - built into Python's standard library
import sqlite3

# Connect to a database (creates it if it doesn't exist)
conn = sqlite3.connect('example.db')
cursor = conn.cursor()

# Create a table
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT,
    email TEXT UNIQUE,
    age INTEGER
)
''')

# Insert data
cursor.execute('INSERT INTO users (name, email, age) VALUES (?, ?, ?)',
              ('Alice', 'alice@example.com', 30))

# Insert multiple rows
users = [
    ('Bob', 'bob@example.com', 25),
    ('Charlie', 'charlie@example.com', 35)
]
cursor.executemany('INSERT INTO users (name, email, age) VALUES (?, ?, ?)', users)

# Commit changes
conn.commit()

# Query data
cursor.execute('SELECT * FROM users WHERE age > ?', (25,))
results = cursor.fetchall()
for row in results:
    print(f"ID: {row[0]}, Name: {row[1]}, Email: {row[2]}, Age: {row[3]}")

# Use column names
cursor.execute('SELECT name, email FROM users')
for row in cursor.fetchall():
    name, email = row
    print(f"{name}: {email}")

# Close connection
conn.close()

# Example with context manager for automatic closing
with sqlite3.connect('example.db') as conn:
    cursor = conn.cursor()
    cursor.execute('SELECT COUNT(*) FROM users')
    count = cursor.fetchone()[0]
    print(f"Total users: {count}")
\`\`\`

For more complex applications, consider libraries like SQLAlchemy or Django ORM to abstract the database layer.`,tip:"Always use parameterized queries (with ? or named placeholders) instead of string formatting to prevent SQL injection attacks."},{id:28,title:"Testing in Python with pytest",content:`Writing tests is essential for reliable code. pytest makes it easy:

\`\`\`python
# File: math_functions.py
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

# File: test_math_functions.py
import pytest
from math_functions import add, multiply, divide

# Simple test function
def test_add():
    assert add(3, 5) == 8
    assert add(-1, 1) == 0
    assert add(0, 0) == 0

# Test function with multiple assertions
def test_multiply():
    assert multiply(2, 3) == 6
    assert multiply(0, 5) == 0
    assert multiply(-2, -3) == 6

# Testing for exceptions
def test_divide_exception():
    with pytest.raises(ValueError):
        divide(10, 0)

# Parameterized tests
@pytest.mark.parametrize("a, b, expected", [
    (5, 2, 2.5),
    (10, 2, 5),
    (1, 4, 0.25),
])
def test_divide(a, b, expected):
    assert divide(a, b) == expected

# Fixtures - reusable test resources
@pytest.fixture
def sample_data():
    return [1, 2, 3, 4, 5]

def test_with_fixture(sample_data):
    assert len(sample_data) == 5
    assert sum(sample_data) == 15
\`\`\`

Run tests with the pytest command in your terminal. pytest automatically discovers and runs test files that match the pattern test_*.py or *_test.py.`,tip:"Write tests before implementing features (Test-Driven Development) to ensure your code meets requirements. Small, focused tests make debugging easier."},{id:29,title:"Python Design Patterns",content:`Design patterns are reusable solutions to common software design problems:

\`\`\`python
# Singleton Pattern - ensures a class has only one instance
class Singleton:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Singleton, cls).__new__(cls)
        return cls._instance

# Usage
s1 = Singleton()
s2 = Singleton()
print(s1 is s2)  # True - they're the same instance

# Factory Pattern - create objects without specifying exact class
class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class AnimalFactory:
    def create_animal(self, animal_type):
        if animal_type == "dog":
            return Dog()
        elif animal_type == "cat":
            return Cat()
        else:
            raise ValueError(f"Unknown animal type: {animal_type}")

# Usage
factory = AnimalFactory()
dog = factory.create_animal("dog")
print(dog.speak())  # "Woof!"

# Observer Pattern - for event handling
class Subject:
    def __init__(self):
        self._observers = []
        
    def attach(self, observer):
        self._observers.append(observer)
        
    def detach(self, observer):
        self._observers.remove(observer)
        
    def notify(self, message):
        for observer in self._observers:
            observer.update(message)

class Observer:
    def update(self, message):
        pass

class ConcreteObserver(Observer):
    def __init__(self, name):
        self.name = name
        
    def update(self, message):
        print(f"{self.name} received: {message}")

# Usage
subject = Subject()
observer1 = ConcreteObserver("Observer 1")
observer2 = ConcreteObserver("Observer 2")

subject.attach(observer1)
subject.attach(observer2)
subject.notify("Hello, observers!")
\`\`\`

Understanding common design patterns helps write better, more maintainable code.`,tip:"Design patterns are useful templates, but don't force them where they don't fit. Python's dynamic nature often allows for simpler solutions than traditional design patterns used in languages like Java."}];return q.useEffect(()=>{const I=Math.min(u,L.length-1);N(L[I])},[u]),C?o.jsx("div",{className:"study-python-modal",children:o.jsxs("div",{className:"study-python-container",children:[o.jsxs("div",{className:"study-header",children:[o.jsx("h2",{children:C.title}),o.jsx("button",{className:"close-button",onClick:d,children:"×"})]}),o.jsxs("div",{className:"lesson-content",children:[o.jsx("div",{className:"lesson-text",dangerouslySetInnerHTML:{__html:C.content.replace(/```python([\s\S]*?)```/g,'<pre class="code-block">$1</pre>')}}),o.jsxs("div",{className:"lesson-tip",children:[o.jsx("h4",{children:"💡 Pro Tip:"}),o.jsx("p",{children:C.tip})]})]}),o.jsx("div",{className:"study-actions",children:o.jsx("button",{onClick:y,children:"Got it! (+3 Coding Skill)"})})]})}):o.jsx("div",{children:"Loading lesson..."})}function lf({onClose:y,onStartNewDay:d}){return o.jsx("div",{className:"energy-modal-overlay",children:o.jsxs("div",{className:"energy-modal",children:[o.jsxs("div",{className:"energy-modal-header",children:[o.jsx("h3",{children:"Low Energy"}),o.jsx("button",{className:"modal-close-btn",onClick:y,children:"×"})]}),o.jsxs("div",{className:"energy-modal-body",children:[o.jsx("div",{className:"energy-icon",children:"⚡"}),o.jsx("p",{children:"You're too tired to continue!"}),o.jsx("p",{className:"energy-message",children:"Your energy is too low for this activity. Would you like to rest or end the day?"})]}),o.jsxs("div",{className:"energy-modal-footer",children:[o.jsx("button",{className:"rest-button",onClick:y,children:"Rest (+20 Energy)"}),o.jsx("button",{className:"end-day-button",onClick:d,children:"End Day"})]})]})})}function sf({onStartNewDay:y,daySummary:d}){return o.jsx("div",{className:"day-summary-modal-overlay",children:o.jsxs("div",{className:"day-summary-modal",children:[o.jsx("div",{className:"day-summary-header",children:o.jsx("h3",{children:"Day Complete"})}),o.jsxs("div",{className:"day-summary-body",children:[o.jsx("div",{className:"day-icon",children:"🌙"}),o.jsx("h3",{children:"Daily Summary"}),o.jsxs("div",{className:"summary-stats",children:[o.jsxs("div",{className:"summary-item",children:[o.jsx("span",{className:"summary-label",children:"Coding Skill Gained:"}),o.jsxs("span",{className:"summary-value positive",children:["+",d.skillGained]})]}),d.skillDecayed>0&&o.jsxs("div",{className:"summary-item",children:[o.jsx("span",{className:"summary-label",children:"Coding Skill Lost:"}),o.jsxs("span",{className:"summary-value negative",children:["-",d.skillDecayed]})]}),o.jsxs("div",{className:"summary-item",children:[o.jsx("span",{className:"summary-label",children:"Energy Level:"}),o.jsxs("span",{className:`summary-value ${d.energyLevel<30?"negative":"neutral"}`,children:[d.energyLevel,"/100"]})]}),d.newRelationships>0&&o.jsxs("div",{className:"summary-item",children:[o.jsx("span",{className:"summary-label",children:"New Relationships:"}),o.jsxs("span",{className:"summary-value positive",children:["+",d.newRelationships]})]}),d.bondsImproved>0&&o.jsxs("div",{className:"summary-item",children:[o.jsx("span",{className:"summary-label",children:"Bonds Improved:"}),o.jsxs("span",{className:"summary-value positive",children:["+",d.bondsImproved]})]}),d.challengesCompleted>0&&o.jsxs("div",{className:"summary-item",children:[o.jsx("span",{className:"summary-label",children:"Coding Challenges Completed:"}),o.jsxs("span",{className:"summary-value positive",children:["+",d.challengesCompleted]})]}),d.lessonsLearned>0&&o.jsxs("div",{className:"summary-item",children:[o.jsx("span",{className:"summary-label",children:"Python Lessons Completed:"}),o.jsxs("span",{className:"summary-value positive",children:["+",d.lessonsLearned]})]})]}),o.jsxs("div",{className:"day-tip",children:[o.jsx("strong",{children:"Tip:"})," ",d.tip||"Balance your activities and make sure to rest when your energy gets low!"]})]}),o.jsx("div",{className:"day-summary-footer",children:o.jsx("button",{className:"next-day-button",onClick:y,children:"Start Next Day"})})]})})}const of=()=>{if(!((day-1)%7>=5)&&shouldTriggerEvent()){const u=getRandomEvent();if(alert(`${u.name}: ${u.description}`),u.effect.actionsLost==="all")setActionsRemaining(0);else{const C=Math.max(0,actionsRemaining-u.effect.actionsLost);setActionsRemaining(C)}if(setEnergy(Math.max(0,Math.min(100,energy+u.effect.energyChange))),setCodingSkill(codingSkill+u.effect.skillChange),u.effect.bondsChange!==0&&u.effect.bondsChangeType==="all"){const C={};Object.keys(cohortData.bonds).forEach(N=>{const L=cohortData.bonds[N],I=Math.max(-100,Math.min(100,L+u.effect.bondsChange));C[N]=I}),setCohortData({...cohortData,bonds:C})}setEventMessage({title:u.name,description:u.description,type:u.type})}},af=[{name:"Fliss",expertise:"Front-end",personality:"Outgoing",hobby:"Hiking",background:"Graphic Design",likes:[],dislikes:[]},{name:"Louis",expertise:"Back-end",personality:"Analytical",hobby:"Chess",background:"Mathematics",likes:[],dislikes:[]},{name:"Imogen",expertise:"Full-stack",personality:"Creative",hobby:"Music",background:"Librarian",likes:[],dislikes:[]},{name:"Alister",expertise:"DevOps",personality:"Methodical",hobby:"Cooking",background:"IT Support",likes:[],dislikes:[]},{name:"Emily",expertise:"Mobile",personality:"Enthusiastic",hobby:"Photography",background:"Education",likes:[],dislikes:[]},{name:"Frank",expertise:"Database",personality:"Quiet",hobby:"Reading",background:"Accounting",likes:[],dislikes:[]},{name:"Dean",expertise:"UI/UX",personality:"Detail-oriented",hobby:"Painting",background:"Psychology",likes:[],dislikes:[]},{name:"Kate",expertise:"Front-end",personality:"Patient",hobby:"Gardening",background:"Customer Service",likes:[],dislikes:[]},{name:"Etienne",expertise:"Security",personality:"Careful",hobby:"Gaming",background:"Politics",likes:[],dislikes:[]},{name:"Arthur",expertise:"Full-stack",personality:"Resourceful",hobby:"Traveling",background:"Journalism",likes:[],dislikes:[]},{name:"Ben",expertise:"Back-end",personality:"Logical",hobby:"Sports",background:"Engineering",likes:[],dislikes:[]},{name:"Jake",expertise:"Mobile",personality:"Ambitious",hobby:"Fitness",background:"Healthcare",likes:[],dislikes:[]},{name:"Abbie",expertise:"UI/UX",personality:"Artistic",hobby:"Dancing",background:"Design",likes:[],dislikes:[]},{name:"Luke",expertise:"DevOps",personality:"Problem-solver",hobby:"DIY Projects",background:"Construction",likes:[],dislikes:[]},{name:"Calvin",expertise:"Data Science",personality:"Inquisitive",hobby:"Astronomy",background:"Research",likes:[],dislikes:[]}];function Iu(y=5,d=10){const u=[...af].sort(()=>.5-Math.random()),C=Math.floor(Math.random()*(d-y+1))+y,L=u.slice(0,C).map(F=>{const re=[...zr.map(J=>J.id)].sort(()=>.5-Math.random()),_=Math.floor(Math.random()*3)+3,T=re.slice(0,_),B=Math.floor(Math.random()*3)+2,le=re.slice(_,_+B);return{...F,likes:T,dislikes:le}}),I={};return L.forEach(F=>{I[F.name]=0}),{members:L,bonds:I}}function uf(){const[y,d]=q.useState(!1),[u,C]=q.useState(null),[N,L]=q.useState(!1),[I,F]=q.useState({skillGained:0,energyLevel:100,newRelationships:0,bondsImproved:0,challengesCompleted:0,lessonsLearned:0,tip:""}),[H,re]=q.useState(()=>Iu().bonds),[_,T]=q.useState(100),[B,le]=q.useState(0),[J,Z]=q.useState(1),[V,R]=q.useState(8),[se,ce]=q.useState(!1),[pe,Ce]=q.useState(!1),[me,Ee]=q.useState(null),[Pe,vt]=q.useState(()=>Iu()),[ct,jt]=q.useState({}),[rt,Be]=q.useState(0),[Ye,Ve]=q.useState(!1),[Fe,ye]=q.useState(0),[j,W]=q.useState(null),[P,p]=q.useState(1),v=$=>{F(ie=>({...ie,skillGained:ie.skillGained+$}))},Y=()=>{F($=>({...$,bondsImproved:$.bondsImproved+1}))},Q=()=>{F($=>({...$,newRelationships:$.newRelationships+1}))},X=()=>{F($=>({...$,challengesCompleted:$.challengesCompleted+1}))},K=()=>{F($=>({...$,lessonsLearned:$.lessonsLearned+1}))},ae=()=>_<30?"Try to rest more during the day to keep your energy up!":I.skillGained<5?"Focus more on studying and coding practice to improve your skills faster.":I.bondsImproved===0?"Don't forget to socialize with your classmates to build relationships!":"Great job balancing your activities today!",te=$=>{const ie=$-P;if(ie>1){const oe=Math.min(B,ie);if(oe>0)return le(je=>Math.max(0,je-oe)),{occurred:!0,amount:oe}}return{occurred:!1,amount:0}},de=()=>{L(!1),d(!1);const $=J+1,ie=te($);Z($);const je=($-1)%7>=5;R(je?0:8),je&&T(Math.min(_+30,100)),W(null),je||of(),F({skillGained:0,energyLevel:_,newRelationships:0,bondsImproved:0,challengesCompleted:0,lessonsLearned:0,skillDecayed:ie.occurred?ie.amount:0,tip:ie.occurred?`You lost ${ie.amount} coding skill points due to lack of practice.`:""})},De=()=>{const $=(J-1)%7;if($>=5){const je=J+($===5?2:1);if(Z(je),R(8),Math.random()<.75)T(100);else{const xt=["You hosted a big family dinner over the weekend.","You helped a friend move to a new apartment.","You worked a shift at the local pub for extra money.","You spent the weekend on a DIY home improvement project.","You went hiking and overdid it a bit.","You attended a friend's wedding that went late into the night."];if(Math.random()<.3){const en=Math.floor(Math.random()*6)+5;le(B+en),p(je),alert(`You spent the weekend working on a personal coding project. You gained ${en} coding skill points, but you're starting the week a bit tired.`),T(Math.min(_+15,70))}else{const en=xt[Math.floor(Math.random()*xt.length)];alert(`${en} You're starting the week a bit tired.`),T(Math.min(_+25,75))}}te(je)}else de()},hn=()=>{if((J-1)%7>=5){alert("It's the weekend! No bootcamp today. You can skip to Monday or enjoy your free time.");return}if(_<10){C("coding"),d(!0);return}ce(!0)},Lr=()=>{if(se){le(B+5),v(5),X(),p(J),T(Math.max(0,_-10));const $=V-1;if(R($),Be(ie=>{const oe=ie+1;return oe>=Bi.length?0:oe}),$<=0){F(oe=>({...oe,energyLevel:Math.max(0,_-10)}));const ie=ae();F(oe=>({...oe,tip:ie})),L(!0)}ce(!1)}},gn=()=>{if((J-1)%7>=5){alert("It's the weekend! No bootcamp today. You can skip to Monday or enjoy your free time.");return}const oe=Math.min(...zr.map(Nt=>Nt.energyCost));if(_<oe){C("socialize"),d(!0);return}const je=Gd(Pe.bonds,Pe.members);Ee(je),Ce(!0)},Un=($,ie,oe)=>{if(!(!pe||!me||!$)){if(Ce(!1),_>=$.energyCost){const je=qd(Pe.bonds,me.name,oe.bondChange);vt({...Pe,bonds:je}),oe.bondChange>0&&Y(),ie&&(jt(xt=>{const $n=xt[me.name]||{};return{...xt,[me.name]:{...$n,[ie.attribute]:!0}}}),Q()),T(Math.max(0,_-$.energyCost));const Nt=V-1;R(Nt),Nt<=0&&(F(xt=>({...xt,energyLevel:Math.max(0,_-$.energyCost)})),L(!0))}else alert("You don't have enough energy for this activity!");Ee(null)}},Bn=()=>{T(Math.min(_+20,100));const $=V-1;R($),d(!1),$<=0&&(F(ie=>({...ie,energyLevel:Math.min(_+20,100),tip:"Great job taking time to rest!"})),setTimeout(()=>{L(!0)},100)),C(null)},Mr=()=>{if((J-1)%7>=5){alert("It's the weekend! No bootcamp today. You can skip to Monday or enjoy your free time.");return}if(_<5){C("study"),d(!0);return}Ve(!0)},Hn=()=>{if(Ye){le(B+3),v(3),K(),p(J),T(Math.max(0,_-5));const $=V-1;if(R($),ye(ie=>{const oe=ie+1;return oe>=29?0:oe}),$<=0){F(oe=>({...oe,energyLevel:Math.max(0,_-5)}));let ie=ae();F(oe=>({...oe,tip:ie})),setTimeout(()=>{L(!0)},100)}Ve(!1)}};return o.jsxs("div",{className:"game-container",children:[o.jsx(Au,{day:J,actionsRemaining:V,onEndDay:De}),o.jsxs("div",{className:"stats-panel",children:[o.jsx(Vd,{energy:_}),o.jsx(Qd,{codingSkill:B,daysSinceActivity:J-P}),o.jsx(Jd,{socialBonds:Pe.bonds,cohortMembers:Pe.members,discoveredInfo:ct})]}),o.jsx("div",{className:"actions-container",children:o.jsx(Zd,{practiceCoding:hn,socialize:gn,studyPython:Mr,rest:Bn})}),se&&o.jsx(tf,{onComplete:Lr,onClose:()=>ce(!1),currentLevel:rt}),pe&&me&&o.jsx(nf,{person:me,onComplete:Un,onClose:()=>Ce(!1)}),Ye&&o.jsx(rf,{onComplete:Hn,onClose:()=>Ve(!1),currentLevel:Fe}),y&&o.jsx(lf,{onClose:Bn,onStartNewDay:De}),N&&o.jsx(sf,{onStartNewDay:()=>{L(!1),De()},daySummary:I})]})}function Fs({review:y,name:d,role:u,avatar:C}){return o.jsxs("div",{className:"testimonial-card",children:[o.jsx("div",{className:"testimonial-rating",children:"★★★★★"}),o.jsx("p",{className:"testimonial-text",children:y}),o.jsx("div",{className:"testimonial-author",children:" "}),o.jsx("div",{className:"author-avatar",children:C}),o.jsxs("div",{className:"author-info",children:[o.jsx("div",{className:"author-name",children:d}),o.jsx("div",{className:"author-title",children:u})]})]})}function cf({onStartGame:y}){const[d,u]=q.useState("intro");return o.jsxs("div",{className:"landing-container",children:[o.jsxs("div",{className:"landing-hero",children:[o.jsxs("div",{className:"hero-content",children:[o.jsx("div",{className:"logo-container",children:o.jsx("img",{src:"/assets/BootCampSimLogo2.png",alt:"BootCamp Simulator Logo",className:"landing-logo"})}),o.jsx("h1",{children:"Master Python Programming Through Gamified Learning"}),o.jsx("p",{className:"hero-subtitle",children:"Experience the life of a coding bootcamp student while learning real Python skills"}),o.jsx("button",{className:"cta-button",onClick:y,children:"Start Your Coding Journey"})]}),o.jsx("div",{className:"hero-image",children:o.jsx("div",{className:"hero-screenshot",children:o.jsx("div",{className:"code-snippet",children:o.jsx("pre",{children:o.jsxs("code",{children:["def hello_world():",o.jsx("br",{}),'  return "Hello, future developer!"']})})})})})]}),o.jsxs("div",{className:"value-section",children:[o.jsx("h2",{children:"Why Bootcamp Simulator?"}),o.jsxs("div",{className:"value-grid",children:[o.jsxs("div",{className:"value-card",children:[o.jsx("div",{className:"value-icon",children:"📊"}),o.jsx("h3",{children:"Learn by Doing"}),o.jsx("p",{children:"Solve real coding challenges and build practical skills through hands-on practice"})]}),o.jsxs("div",{className:"value-card",children:[o.jsx("div",{className:"value-icon",children:"🎮"}),o.jsx("h3",{children:"Gamified Experience"}),o.jsx("p",{children:"Turn learning into fun with progress tracking, achievements, and balanced gameplay"})]}),o.jsxs("div",{className:"value-card",children:[o.jsx("div",{className:"value-icon",children:"📚"}),o.jsx("h3",{children:"Structured Learning"}),o.jsx("p",{children:"Progress through a carefully designed curriculum from basics to advanced concepts"})]})]})]}),o.jsxs("div",{className:"features-section",children:[o.jsxs("div",{className:"landing-tabs",children:[o.jsx("button",{className:`tab-button ${d==="intro"?"active":""}`,onClick:()=>u("intro"),children:"Overview"}),o.jsx("button",{className:`tab-button ${d==="howtoplay"?"active":""}`,onClick:()=>u("howtoplay"),children:"How It Works"}),o.jsx("button",{className:`tab-button ${d==="learning"?"active":""}`,onClick:()=>u("learning"),children:"Learning Path"})]}),o.jsxs("div",{className:"tab-content",children:[d==="intro"&&o.jsx("div",{className:"intro-content",children:o.jsxs("div",{className:"tab-grid",children:[o.jsx("div",{className:"tab-image",children:o.jsx("img",{src:"/assets/BootCampSimScreen.png",alt:"Bootcamp Illustration"})}),o.jsxs("div",{className:"tab-text",children:[o.jsx("h2",{children:"The Bootcamp Experience, Gamified"}),o.jsx("p",{children:"You've just enrolled in a 12-week intensive coding bootcamp. Your mission is to build your coding skills, make connections with your classmates, and thrive in the demanding schedule."}),o.jsxs("div",{className:"feature-list",children:[o.jsxs("div",{className:"feature-item",children:[o.jsx("div",{className:"feature-icon",children:"📊"}),o.jsx("div",{children:"Track your progress from beginner to expert"})]}),o.jsxs("div",{className:"feature-item",children:[o.jsx("div",{className:"feature-icon",children:"🤝"}),o.jsx("div",{children:"Form relationships with unique classmates"})]}),o.jsxs("div",{className:"feature-item",children:[o.jsx("div",{className:"feature-icon",children:"⚡"}),o.jsx("div",{children:"Balance activities and energy management"})]}),o.jsxs("div",{className:"feature-item",children:[o.jsx("div",{className:"feature-icon",children:"🎲"}),o.jsx("div",{children:"React to unexpected events that affect your journey"})]})]})]})]})}),d==="howtoplay"&&o.jsx("div",{className:"howtoplay-content",children:o.jsxs("div",{className:"tab-grid",children:[o.jsxs("div",{className:"tab-text",children:[o.jsx("h2",{children:"Your Day at the Bootcamp"}),o.jsx("p",{children:"Every day gives you 8 action points to spend wisely on activities that help you progress while managing your energy levels."}),o.jsxs("div",{className:"activity-cards",children:[o.jsxs("div",{className:"activity-card",children:[o.jsx("div",{className:"activity-icon",children:"📚"}),o.jsx("h3",{children:"Study Python"}),o.jsx("p",{children:"Learn programming concepts"}),o.jsxs("div",{className:"activity-stats",children:[o.jsx("span",{className:"skill-gain",children:"+3 Skill"}),o.jsx("span",{className:"energy-cost",children:"-5 Energy"})]})]}),o.jsxs("div",{className:"activity-card",children:[o.jsx("div",{className:"activity-icon",children:"💻"}),o.jsx("h3",{children:"Practice Coding"}),o.jsx("p",{children:"Solve real coding challenges"}),o.jsxs("div",{className:"activity-stats",children:[o.jsx("span",{className:"skill-gain",children:"+5 Skill"}),o.jsx("span",{className:"energy-cost",children:"-10 Energy"})]})]}),o.jsxs("div",{className:"activity-card",children:[o.jsx("div",{className:"activity-icon",children:"👥"}),o.jsx("h3",{children:"Socialize"}),o.jsx("p",{children:"Build relationships with classmates"}),o.jsxs("div",{className:"activity-stats",children:[o.jsx("span",{className:"bond-gain",children:"Improve Bonds"}),o.jsx("span",{className:"energy-cost",children:"Varies"})]})]}),o.jsxs("div",{className:"activity-card",children:[o.jsx("div",{className:"activity-icon",children:"🛌"}),o.jsx("h3",{children:"Rest"}),o.jsx("p",{children:"Recover your energy"}),o.jsxs("div",{className:"activity-stats",children:[o.jsx("span",{className:"energy-gain",children:"+20 Energy"}),o.jsx("span",{className:"action-cost",children:"-1 Action"})]})]})]})]}),o.jsx("div",{className:"tab-image",children:o.jsx(Au,{page:"LandingPage",day:1})})]})}),d==="learning"&&o.jsxs("div",{className:"learning-content",children:[o.jsx("h2",{children:"Your Python Learning Journey"}),o.jsx("p",{className:"learning-intro",children:"Master Python from beginner to advanced through our dual approach of theory and practice"}),o.jsxs("div",{className:"learning-path",children:[o.jsxs("div",{className:"learning-step",children:[o.jsx("div",{className:"step-number",children:"1"}),o.jsxs("div",{className:"step-content",children:[o.jsx("h3",{children:"Study Python Fundamentals"}),o.jsx("p",{children:"Access 20 comprehensive lessons covering:"}),o.jsxs("div",{className:"topics-grid",children:[o.jsxs("div",{className:"topic-item",children:[o.jsx("div",{className:"topic-icon",children:"➊"}),o.jsx("div",{children:"Basic Syntax"})]}),o.jsxs("div",{className:"topic-item",children:[o.jsx("div",{className:"topic-icon",children:"➋"}),o.jsx("div",{children:"Data Types"})]}),o.jsxs("div",{className:"topic-item",children:[o.jsx("div",{className:"topic-icon",children:"➌"}),o.jsx("div",{children:"Control Flow"})]}),o.jsxs("div",{className:"topic-item",children:[o.jsx("div",{className:"topic-icon",children:"➍"}),o.jsx("div",{children:"Functions"})]}),o.jsxs("div",{className:"topic-item",children:[o.jsx("div",{className:"topic-icon",children:"➎"}),o.jsx("div",{children:"Data Structures"})]}),o.jsxs("div",{className:"topic-item",children:[o.jsx("div",{className:"topic-icon",children:"➏"}),o.jsx("div",{children:"Advanced Concepts"})]})]})]})]}),o.jsx("div",{className:"path-connector"}),o.jsxs("div",{className:"learning-step",children:[o.jsx("div",{className:"step-number",children:"2"}),o.jsxs("div",{className:"step-content",children:[o.jsx("h3",{children:"Apply Through Practice"}),o.jsx("p",{children:"Solve 22 coding challenges with increasing difficulty:"}),o.jsxs("ul",{className:"practice-features",children:[o.jsx("li",{children:"Write and test real Python code"}),o.jsx("li",{children:"Receive instant feedback on your solutions"}),o.jsx("li",{children:"Access hints when you get stuck"}),o.jsx("li",{children:"Review example solutions to learn best practices"})]}),o.jsx("div",{className:"code-example",children:o.jsx("pre",{children:o.jsxs("code",{children:["def calculate_average(numbers):",o.jsx("br",{}),"  return sum(numbers) / len(numbers)"]})})})]})]})]})]})]})]}),o.jsxs("section",{className:"testimonials-section",children:[o.jsx("h2",{children:"What Our Users Say"}),o.jsxs("div",{className:"testimonials-grid",children:[o.jsx(Fs,{name:"John S.",review:"Bootcamp Simulator transformed my Python skills! The gamified approach made learning fun and engaging. I highly recommend it to anyone looking to master coding.",role:"Junior Engineer",avatar:"JS"}),o.jsx(Fs,{name:"Lily C.",review:"I tried many ways to learn Python, but Bootcamp Simulator made it stick by combining theory with actual practice in a fun, engaging way.",role:"Self-taught Developer",avatar:"LC"}),o.jsx(Fs,{name:"Mark K.",review:"I love the gamified approach! It keeps me motivated to learn and practice every day.",role:"Self-taught Developer",avatar:"MK"})]})]}),o.jsxs("div",{className:"final-cta",children:[o.jsx("h2",{children:"Ready to Start Your Coding Journey?"}),o.jsx("p",{children:"Join thousands of learners who have mastered Python through our interactive bootcamp simulation"}),o.jsx("button",{className:"cta-button",onClick:y,children:"Launch Bootcamp Simulator"})]})]})}function df(){const[y,d]=q.useState(!1),u=()=>{d(!0)},C=()=>{window.confirm("Are you sure you want to leave the game and return to the main menu? Your progress will not be saved.")&&d(!1)};return o.jsx("div",{className:"App",children:y?o.jsxs("div",{className:"game-layout",children:[o.jsx("div",{className:"game-logo-container",onClick:C,children:o.jsx("img",{src:"/assets/BootCampSimLogo2.png",alt:"BootCamp Simulator Logo",className:"game-logo-large",title:"Click to return to main menu"})}),o.jsxs("div",{className:"game-content",children:[o.jsx("h1",{children:"Bootcamp Simulator"}),o.jsx(uf,{})]})]}):o.jsx(cf,{onStartGame:u})})}Yd.createRoot(document.getElementById("root")).render(o.jsx(Ad.StrictMode,{children:o.jsx(df,{})}));
