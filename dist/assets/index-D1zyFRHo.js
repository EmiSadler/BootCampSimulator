(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))C(_);new MutationObserver(_=>{for(const E of _)if(E.type==="childList")for(const R of E.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&C(R)}).observe(document,{childList:!0,subtree:!0});function d(_){const E={};return _.integrity&&(E.integrity=_.integrity),_.referrerPolicy&&(E.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?E.credentials="include":_.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function C(_){if(_.ep)return;_.ep=!0;const E=d(_);fetch(_.href,E)}})();function Ou(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}var Ls={exports:{}},Er={},Ms={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function bd(){if(Pu)return X;Pu=1;var g=Symbol.for("react.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),R=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),D=Symbol.iterator;function O(p){return p===null||typeof p!="object"?null:(p=D&&p[D]||p["@@iterator"],typeof p=="function"?p:null)}var ee={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},re=Object.assign,Q={};function q(p,v,V){this.props=p,this.context=v,this.refs=Q,this.updater=V||ee}q.prototype.isReactComponent={},q.prototype.setState=function(p,v){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,v,"setState")},q.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function F(){}F.prototype=q.prototype;function se(p,v,V){this.props=p,this.context=v,this.refs=Q,this.updater=V||ee}var de=se.prototype=new F;de.constructor=se,re(de,q.prototype),de.isPureReactComponent=!0;var ae=Array.isArray,je=Object.prototype.hasOwnProperty,fe={current:null},Ne={key:!0,ref:!0,__self:!0,__source:!0};function He(p,v,V){var G,J={},Z=null,ce=null;if(v!=null)for(G in v.ref!==void 0&&(ce=v.ref),v.key!==void 0&&(Z=""+v.key),v)je.call(v,G)&&!Ne.hasOwnProperty(G)&&(J[G]=v[G]);var te=arguments.length-2;if(te===1)J.children=V;else if(1<te){for(var pe=Array(te),Be=0;Be<te;Be++)pe[Be]=arguments[Be+2];J.children=pe}if(p&&p.defaultProps)for(G in te=p.defaultProps,te)J[G]===void 0&&(J[G]=te[G]);return{$$typeof:g,type:p,key:Z,ref:ce,props:J,_owner:fe.current}}function vt(p,v){return{$$typeof:g,type:p.type,key:v,ref:p.ref,props:p.props,_owner:p._owner}}function ct(p){return typeof p=="object"&&p!==null&&p.$$typeof===g}function jt(p){var v={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(V){return v[V]})}var Xe=/\/+/g;function Me(p,v){return typeof p=="object"&&p!==null&&p.key!=null?jt(""+p.key):v.toString(36)}function Ke(p,v,V,G,J){var Z=typeof p;(Z==="undefined"||Z==="boolean")&&(p=null);var ce=!1;if(p===null)ce=!0;else switch(Z){case"string":case"number":ce=!0;break;case"object":switch(p.$$typeof){case g:case u:ce=!0}}if(ce)return ce=p,J=J(ce),p=G===""?"."+Me(ce,0):G,ae(J)?(V="",p!=null&&(V=p.replace(Xe,"$&/")+"/"),Ke(J,v,V,"",function(Be){return Be})):J!=null&&(ct(J)&&(J=vt(J,V+(!J.key||ce&&ce.key===J.key?"":(""+J.key).replace(Xe,"$&/")+"/")+p)),v.push(J)),1;if(ce=0,G=G===""?".":G+":",ae(p))for(var te=0;te<p.length;te++){Z=p[te];var pe=G+Me(Z,te);ce+=Ke(Z,v,V,pe,J)}else if(pe=O(p),typeof pe=="function")for(p=pe.call(p),te=0;!(Z=p.next()).done;)Z=Z.value,pe=G+Me(Z,te++),ce+=Ke(Z,v,V,pe,J);else if(Z==="object")throw v=String(p),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return ce}function nt(p,v,V){if(p==null)return p;var G=[],J=0;return Ke(p,G,"","",function(Z){return v.call(V,Z,J++)}),G}function Re(p){if(p._status===-1){var v=p._result;v=v(),v.then(function(V){(p._status===0||p._status===-1)&&(p._status=1,p._result=V)},function(V){(p._status===0||p._status===-1)&&(p._status=2,p._result=V)}),p._status===-1&&(p._status=0,p._result=v)}if(p._status===1)return p._result.default;throw p._result}var he={current:null},N={transition:null},B={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:N,ReactCurrentOwner:fe};function z(){throw Error("act(...) is not supported in production builds of React.")}return X.Children={map:nt,forEach:function(p,v,V){nt(p,function(){v.apply(this,arguments)},V)},count:function(p){var v=0;return nt(p,function(){v++}),v},toArray:function(p){return nt(p,function(v){return v})||[]},only:function(p){if(!ct(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},X.Component=q,X.Fragment=d,X.Profiler=_,X.PureComponent=se,X.StrictMode=C,X.Suspense=P,X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,X.act=z,X.cloneElement=function(p,v,V){if(p==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+p+".");var G=re({},p.props),J=p.key,Z=p.ref,ce=p._owner;if(v!=null){if(v.ref!==void 0&&(Z=v.ref,ce=fe.current),v.key!==void 0&&(J=""+v.key),p.type&&p.type.defaultProps)var te=p.type.defaultProps;for(pe in v)je.call(v,pe)&&!Ne.hasOwnProperty(pe)&&(G[pe]=v[pe]===void 0&&te!==void 0?te[pe]:v[pe])}var pe=arguments.length-2;if(pe===1)G.children=V;else if(1<pe){te=Array(pe);for(var Be=0;Be<pe;Be++)te[Be]=arguments[Be+2];G.children=te}return{$$typeof:g,type:p.type,key:J,ref:Z,props:G,_owner:ce}},X.createContext=function(p){return p={$$typeof:R,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},p.Provider={$$typeof:E,_context:p},p.Consumer=p},X.createElement=He,X.createFactory=function(p){var v=He.bind(null,p);return v.type=p,v},X.createRef=function(){return{current:null}},X.forwardRef=function(p){return{$$typeof:M,render:p}},X.isValidElement=ct,X.lazy=function(p){return{$$typeof:j,_payload:{_status:-1,_result:p},_init:Re}},X.memo=function(p,v){return{$$typeof:Y,type:p,compare:v===void 0?null:v}},X.startTransition=function(p){var v=N.transition;N.transition={};try{p()}finally{N.transition=v}},X.unstable_act=z,X.useCallback=function(p,v){return he.current.useCallback(p,v)},X.useContext=function(p){return he.current.useContext(p)},X.useDebugValue=function(){},X.useDeferredValue=function(p){return he.current.useDeferredValue(p)},X.useEffect=function(p,v){return he.current.useEffect(p,v)},X.useId=function(){return he.current.useId()},X.useImperativeHandle=function(p,v,V){return he.current.useImperativeHandle(p,v,V)},X.useInsertionEffect=function(p,v){return he.current.useInsertionEffect(p,v)},X.useLayoutEffect=function(p,v){return he.current.useLayoutEffect(p,v)},X.useMemo=function(p,v){return he.current.useMemo(p,v)},X.useReducer=function(p,v,V){return he.current.useReducer(p,v,V)},X.useRef=function(p){return he.current.useRef(p)},X.useState=function(p){return he.current.useState(p)},X.useSyncExternalStore=function(p,v,V){return he.current.useSyncExternalStore(p,v,V)},X.useTransition=function(){return he.current.useTransition()},X.version="18.3.1",X}var Tu;function Os(){return Tu||(Tu=1,Ms.exports=bd()),Ms.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu;function Id(){if(zu)return Er;zu=1;var g=Os(),u=Symbol.for("react.element"),d=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,_=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function R(M,P,Y){var j,D={},O=null,ee=null;Y!==void 0&&(O=""+Y),P.key!==void 0&&(O=""+P.key),P.ref!==void 0&&(ee=P.ref);for(j in P)C.call(P,j)&&!E.hasOwnProperty(j)&&(D[j]=P[j]);if(M&&M.defaultProps)for(j in P=M.defaultProps,P)D[j]===void 0&&(D[j]=P[j]);return{$$typeof:u,type:M,key:O,ref:ee,props:D,_owner:_.current}}return Er.Fragment=d,Er.jsx=R,Er.jsxs=R,Er}var Lu;function Od(){return Lu||(Lu=1,Ls.exports=Id()),Ls.exports}var s=Od(),K=Os();const Fd=Ou(K);var Bi={},Rs={exports:{}},qe={},Ds={exports:{}},bs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu;function Ad(){return Mu||(Mu=1,function(g){function u(N,B){var z=N.length;N.push(B);e:for(;0<z;){var p=z-1>>>1,v=N[p];if(0<_(v,B))N[p]=B,N[z]=v,z=p;else break e}}function d(N){return N.length===0?null:N[0]}function C(N){if(N.length===0)return null;var B=N[0],z=N.pop();if(z!==B){N[0]=z;e:for(var p=0,v=N.length,V=v>>>1;p<V;){var G=2*(p+1)-1,J=N[G],Z=G+1,ce=N[Z];if(0>_(J,z))Z<v&&0>_(ce,J)?(N[p]=ce,N[Z]=z,p=Z):(N[p]=J,N[G]=z,p=G);else if(Z<v&&0>_(ce,z))N[p]=ce,N[Z]=z,p=Z;else break e}}return B}function _(N,B){var z=N.sortIndex-B.sortIndex;return z!==0?z:N.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var E=performance;g.unstable_now=function(){return E.now()}}else{var R=Date,M=R.now();g.unstable_now=function(){return R.now()-M}}var P=[],Y=[],j=1,D=null,O=3,ee=!1,re=!1,Q=!1,q=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function de(N){for(var B=d(Y);B!==null;){if(B.callback===null)C(Y);else if(B.startTime<=N)C(Y),B.sortIndex=B.expirationTime,u(P,B);else break;B=d(Y)}}function ae(N){if(Q=!1,de(N),!re)if(d(P)!==null)re=!0,Re(je);else{var B=d(Y);B!==null&&he(ae,B.startTime-N)}}function je(N,B){re=!1,Q&&(Q=!1,F(He),He=-1),ee=!0;var z=O;try{for(de(B),D=d(P);D!==null&&(!(D.expirationTime>B)||N&&!jt());){var p=D.callback;if(typeof p=="function"){D.callback=null,O=D.priorityLevel;var v=p(D.expirationTime<=B);B=g.unstable_now(),typeof v=="function"?D.callback=v:D===d(P)&&C(P),de(B)}else C(P);D=d(P)}if(D!==null)var V=!0;else{var G=d(Y);G!==null&&he(ae,G.startTime-B),V=!1}return V}finally{D=null,O=z,ee=!1}}var fe=!1,Ne=null,He=-1,vt=5,ct=-1;function jt(){return!(g.unstable_now()-ct<vt)}function Xe(){if(Ne!==null){var N=g.unstable_now();ct=N;var B=!0;try{B=Ne(!0,N)}finally{B?Me():(fe=!1,Ne=null)}}else fe=!1}var Me;if(typeof se=="function")Me=function(){se(Xe)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,nt=Ke.port2;Ke.port1.onmessage=Xe,Me=function(){nt.postMessage(null)}}else Me=function(){q(Xe,0)};function Re(N){Ne=N,fe||(fe=!0,Me())}function he(N,B){He=q(function(){N(g.unstable_now())},B)}g.unstable_IdlePriority=5,g.unstable_ImmediatePriority=1,g.unstable_LowPriority=4,g.unstable_NormalPriority=3,g.unstable_Profiling=null,g.unstable_UserBlockingPriority=2,g.unstable_cancelCallback=function(N){N.callback=null},g.unstable_continueExecution=function(){re||ee||(re=!0,Re(je))},g.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):vt=0<N?Math.floor(1e3/N):5},g.unstable_getCurrentPriorityLevel=function(){return O},g.unstable_getFirstCallbackNode=function(){return d(P)},g.unstable_next=function(N){switch(O){case 1:case 2:case 3:var B=3;break;default:B=O}var z=O;O=B;try{return N()}finally{O=z}},g.unstable_pauseExecution=function(){},g.unstable_requestPaint=function(){},g.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=O;O=N;try{return B()}finally{O=z}},g.unstable_scheduleCallback=function(N,B,z){var p=g.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?p+z:p):z=p,N){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=z+v,N={id:j++,callback:B,priorityLevel:N,startTime:z,expirationTime:v,sortIndex:-1},z>p?(N.sortIndex=z,u(Y,N),d(P)===null&&N===d(Y)&&(Q?(F(He),He=-1):Q=!0,he(ae,z-p))):(N.sortIndex=v,u(P,N),re||ee||(re=!0,Re(je))),N},g.unstable_shouldYield=jt,g.unstable_wrapCallback=function(N){var B=O;return function(){var z=O;O=B;try{return N.apply(this,arguments)}finally{O=z}}}}(bs)),bs}var Ru;function Bd(){return Ru||(Ru=1,Ds.exports=Ad()),Ds.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du;function Ud(){if(Du)return qe;Du=1;var g=Os(),u=Bd();function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C=new Set,_={};function E(e,t){R(e,t),R(e+"Capture",t)}function R(e,t){for(_[e]=t,e=0;e<t.length;e++)C.add(t[e])}var M=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),P=Object.prototype.hasOwnProperty,Y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,j={},D={};function O(e){return P.call(D,e)?!0:P.call(j,e)?!1:Y.test(e)?D[e]=!0:(j[e]=!0,!1)}function ee(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function re(e,t,n,r){if(t===null||typeof t>"u"||ee(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Q(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new Q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];q[t]=new Q(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new Q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new Q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new Q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new Q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new Q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new Q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new Q(e,5,!1,e.toLowerCase(),null,!1,!1)});var F=/[\-:]([a-z])/g;function se(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(F,se);q[t]=new Q(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(F,se);q[t]=new Q(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(F,se);q[t]=new Q(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new Q(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new Q(e,1,!1,e.toLowerCase(),null,!0,!0)});function de(e,t,n,r){var i=q.hasOwnProperty(t)?q[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(re(t,n,i,r)&&(n=null),r||i===null?O(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ae=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,je=Symbol.for("react.element"),fe=Symbol.for("react.portal"),Ne=Symbol.for("react.fragment"),He=Symbol.for("react.strict_mode"),vt=Symbol.for("react.profiler"),ct=Symbol.for("react.provider"),jt=Symbol.for("react.context"),Xe=Symbol.for("react.forward_ref"),Me=Symbol.for("react.suspense"),Ke=Symbol.for("react.suspense_list"),nt=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),N=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,p;function v(e){if(p===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);p=t&&t[1]||""}return`
`+p+e}var V=!1;function G(e,t){if(!e||V)return"";V=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var r=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){r=y}e.call(t.prototype)}else{try{throw Error()}catch(y){r=y}e()}}catch(y){if(y&&r&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=a);break}}}finally{V=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?v(e):""}function J(e){switch(e.tag){case 5:return v(e.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return e=G(e.type,!1),e;case 11:return e=G(e.type.render,!1),e;case 1:return e=G(e.type,!0),e;default:return""}}function Z(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ne:return"Fragment";case fe:return"Portal";case vt:return"Profiler";case He:return"StrictMode";case Me:return"Suspense";case Ke:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jt:return(e.displayName||"Context")+".Consumer";case ct:return(e._context.displayName||"Context")+".Provider";case Xe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nt:return t=e.displayName||null,t!==null?t:Z(e.type)||"Memo";case Re:t=e._payload,e=e._init;try{return Z(e(t))}catch{}}return null}function ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(t);case 8:return t===He?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function te(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Be(e){var t=pe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hn(e){e._valueTracker||(e._valueTracker=Be(e))}function Tr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function gn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yn(e,t){var n=t.checked;return z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zr(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=te(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lr(e,t){t=t.checked,t!=null&&de(e,"checked",t,!1)}function $(e,t){Lr(e,t);var n=te(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oe(e,t.type,n):t.hasOwnProperty("defaultValue")&&oe(e,t.type,te(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ie(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oe(e,t,n){(t!=="number"||gn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xt=Array.isArray;function rt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+te(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(d(91));return z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Et(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(d(92));if(xt(n)){if(1<n.length)throw Error(d(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:te(n)}}function Fs(e,t){var n=te(t.value),r=te(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function As(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mr,Us=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mr=Mr||document.createElement("div"),Mr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Au=["Webkit","ms","Moz","O"];Object.keys($n).forEach(function(e){Au.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$n[t]=$n[e]})});function Ws(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$n.hasOwnProperty(e)&&$n[e]?(""+t).trim():t+"px"}function Hs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ws(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Bu=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hi(e,t){if(t){if(Bu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(d(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(d(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(d(61))}if(t.style!=null&&typeof t.style!="object")throw Error(d(62))}}function $i(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yi=null;function Vi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qi=null,vn=null,xn=null;function $s(e){if(e=fr(e)){if(typeof Qi!="function")throw Error(d(280));var t=e.stateNode;t&&(t=ti(t),Qi(e.stateNode,e.type,t))}}function Ys(e){vn?xn?xn.push(e):xn=[e]:vn=e}function Vs(){if(vn){var e=vn,t=xn;if(xn=vn=null,$s(e),t)for(e=0;e<t.length;e++)$s(t[e])}}function Qs(e,t){return e(t)}function Gs(){}var Gi=!1;function qs(e,t,n){if(Gi)return e(t,n);Gi=!0;try{return Qs(e,t,n)}finally{Gi=!1,(vn!==null||xn!==null)&&(Gs(),Vs())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=ti(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,t,typeof n));return n}var qi=!1;if(M)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){qi=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{qi=!1}function Uu(e,t,n,r,i,l,o,a,c){var y=Array.prototype.slice.call(arguments,3);try{t.apply(n,y)}catch(w){this.onError(w)}}var Qn=!1,Rr=null,Dr=!1,Xi=null,Wu={onError:function(e){Qn=!0,Rr=e}};function Hu(e,t,n,r,i,l,o,a,c){Qn=!1,Rr=null,Uu.apply(Wu,arguments)}function $u(e,t,n,r,i,l,o,a,c){if(Hu.apply(this,arguments),Qn){if(Qn){var y=Rr;Qn=!1,Rr=null}else throw Error(d(198));Dr||(Dr=!0,Xi=y)}}function tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ks(e){if(tn(e)!==e)throw Error(d(188))}function Yu(e){var t=e.alternate;if(!t){if(t=tn(e),t===null)throw Error(d(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Ks(i),e;if(l===r)return Ks(i),t;l=l.sibling}throw Error(d(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o)throw Error(d(189))}}if(n.alternate!==r)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:t}function Js(e){return e=Yu(e),e!==null?Zs(e):null}function Zs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zs(e);if(t!==null)return t;e=e.sibling}return null}var eo=u.unstable_scheduleCallback,to=u.unstable_cancelCallback,Vu=u.unstable_shouldYield,Qu=u.unstable_requestPaint,Se=u.unstable_now,Gu=u.unstable_getCurrentPriorityLevel,Ki=u.unstable_ImmediatePriority,no=u.unstable_UserBlockingPriority,br=u.unstable_NormalPriority,qu=u.unstable_LowPriority,ro=u.unstable_IdlePriority,Ir=null,wt=null;function Xu(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Ir,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Zu,Ku=Math.log,Ju=Math.LN2;function Zu(e){return e>>>=0,e===0?32:31-(Ku(e)/Ju|0)|0}var Or=64,Fr=4194304;function Gn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ar(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Gn(a):(l&=o,l!==0&&(r=Gn(l)))}else o=n&~i,o!==0?r=Gn(o):l!==0&&(r=Gn(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function ec(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-dt(l),a=1<<o,c=i[o];c===-1?((a&n)===0||(a&r)!==0)&&(i[o]=ec(a,t)):c<=t&&(e.expiredLanes|=a),l&=~a}}function Ji(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function io(){var e=Or;return Or<<=1,(Or&4194240)===0&&(Or=64),e}function Zi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function nc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function el(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ue=0;function lo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var so,tl,oo,ao,uo,nl=!1,Br=[],It=null,Ot=null,Ft=null,Xn=new Map,Kn=new Map,At=[],rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function co(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kn.delete(t.pointerId)}}function Jn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=fr(t),t!==null&&tl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ic(e,t,n,r,i){switch(t){case"focusin":return It=Jn(It,e,t,n,r,i),!0;case"dragenter":return Ot=Jn(Ot,e,t,n,r,i),!0;case"mouseover":return Ft=Jn(Ft,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Xn.set(l,Jn(Xn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Kn.set(l,Jn(Kn.get(l)||null,e,t,n,r,i)),!0}return!1}function fo(e){var t=nn(e.target);if(t!==null){var n=tn(t);if(n!==null){if(t=n.tag,t===13){if(t=Xs(n),t!==null){e.blockedOn=t,uo(e.priority,function(){oo(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=il(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yi=r,n.target.dispatchEvent(r),Yi=null}else return t=fr(n),t!==null&&tl(t),e.blockedOn=n,!1;t.shift()}return!0}function po(e,t,n){Ur(e)&&n.delete(t)}function lc(){nl=!1,It!==null&&Ur(It)&&(It=null),Ot!==null&&Ur(Ot)&&(Ot=null),Ft!==null&&Ur(Ft)&&(Ft=null),Xn.forEach(po),Kn.forEach(po)}function Zn(e,t){e.blockedOn===t&&(e.blockedOn=null,nl||(nl=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,lc)))}function er(e){function t(i){return Zn(i,e)}if(0<Br.length){Zn(Br[0],e);for(var n=1;n<Br.length;n++){var r=Br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&Zn(It,e),Ot!==null&&Zn(Ot,e),Ft!==null&&Zn(Ft,e),Xn.forEach(t),Kn.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)fo(n),n.blockedOn===null&&At.shift()}var wn=ae.ReactCurrentBatchConfig,Wr=!0;function sc(e,t,n,r){var i=ue,l=wn.transition;wn.transition=null;try{ue=1,rl(e,t,n,r)}finally{ue=i,wn.transition=l}}function oc(e,t,n,r){var i=ue,l=wn.transition;wn.transition=null;try{ue=4,rl(e,t,n,r)}finally{ue=i,wn.transition=l}}function rl(e,t,n,r){if(Wr){var i=il(e,t,n,r);if(i===null)kl(e,t,r,Hr,n),co(e,r);else if(ic(i,e,t,n,r))r.stopPropagation();else if(co(e,r),t&4&&-1<rc.indexOf(e)){for(;i!==null;){var l=fr(i);if(l!==null&&so(l),l=il(e,t,n,r),l===null&&kl(e,t,r,Hr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else kl(e,t,r,null,n)}}var Hr=null;function il(e,t,n,r){if(Hr=null,e=Vi(r),e=nn(e),e!==null)if(t=tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hr=e,null}function mo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gu()){case Ki:return 1;case no:return 4;case br:case qu:return 16;case ro:return 536870912;default:return 16}default:return 16}}var Bt=null,ll=null,$r=null;function ho(){if($r)return $r;var e,t=ll,n=t.length,r,i="value"in Bt?Bt.value:Bt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return $r=i.slice(e,1<r?1-r:void 0)}function Yr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vr(){return!0}function go(){return!1}function Je(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Vr:go,this.isPropagationStopped=go,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vr)},persist:function(){},isPersistent:Vr}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Je(kn),tr=z({},kn,{view:0,detail:0}),ac=Je(tr),ol,al,nr,Qr=z({},tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nr&&(nr&&e.type==="mousemove"?(ol=e.screenX-nr.screenX,al=e.screenY-nr.screenY):al=ol=0,nr=e),ol)},movementY:function(e){return"movementY"in e?e.movementY:al}}),yo=Je(Qr),uc=z({},Qr,{dataTransfer:0}),cc=Je(uc),dc=z({},tr,{relatedTarget:0}),ul=Je(dc),fc=z({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),pc=Je(fc),mc=z({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hc=Je(mc),gc=z({},kn,{data:0}),vo=Je(gc),yc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xc[e])?!!t[e]:!1}function cl(){return wc}var kc=z({},tr,{key:function(e){if(e.key){var t=yc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cl,charCode:function(e){return e.type==="keypress"?Yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sc=Je(kc),Cc=z({},Qr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xo=Je(Cc),_c=z({},tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cl}),jc=Je(_c),Nc=z({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ec=Je(Nc),Pc=z({},Qr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tc=Je(Pc),zc=[9,13,27,32],dl=M&&"CompositionEvent"in window,rr=null;M&&"documentMode"in document&&(rr=document.documentMode);var Lc=M&&"TextEvent"in window&&!rr,wo=M&&(!dl||rr&&8<rr&&11>=rr),ko=" ",So=!1;function Co(e,t){switch(e){case"keyup":return zc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _o(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function Mc(e,t){switch(e){case"compositionend":return _o(t);case"keypress":return t.which!==32?null:(So=!0,ko);case"textInput":return e=t.data,e===ko&&So?null:e;default:return null}}function Rc(e,t){if(Sn)return e==="compositionend"||!dl&&Co(e,t)?(e=ho(),$r=ll=Bt=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wo&&t.locale!=="ko"?null:t.data;default:return null}}var Dc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dc[e.type]:t==="textarea"}function No(e,t,n,r){Ys(r),t=Jr(t,"onChange"),0<t.length&&(n=new sl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ir=null,lr=null;function bc(e){$o(e,0)}function Gr(e){var t=En(e);if(Tr(t))return e}function Ic(e,t){if(e==="change")return t}var Eo=!1;if(M){var fl;if(M){var pl="oninput"in document;if(!pl){var Po=document.createElement("div");Po.setAttribute("oninput","return;"),pl=typeof Po.oninput=="function"}fl=pl}else fl=!1;Eo=fl&&(!document.documentMode||9<document.documentMode)}function To(){ir&&(ir.detachEvent("onpropertychange",zo),lr=ir=null)}function zo(e){if(e.propertyName==="value"&&Gr(lr)){var t=[];No(t,lr,e,Vi(e)),qs(bc,t)}}function Oc(e,t,n){e==="focusin"?(To(),ir=t,lr=n,ir.attachEvent("onpropertychange",zo)):e==="focusout"&&To()}function Fc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gr(lr)}function Ac(e,t){if(e==="click")return Gr(t)}function Bc(e,t){if(e==="input"||e==="change")return Gr(t)}function Uc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Uc;function sr(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!P.call(t,i)||!ft(e[i],t[i]))return!1}return!0}function Lo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mo(e,t){var n=Lo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lo(n)}}function Ro(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ro(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Do(){for(var e=window,t=gn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gn(e.document)}return t}function ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wc(e){var t=Do(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ro(n.ownerDocument.documentElement,n)){if(r!==null&&ml(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Mo(n,l);var o=Mo(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hc=M&&"documentMode"in document&&11>=document.documentMode,Cn=null,hl=null,or=null,gl=!1;function bo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gl||Cn==null||Cn!==gn(r)||(r=Cn,"selectionStart"in r&&ml(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),or&&sr(or,r)||(or=r,r=Jr(hl,"onSelect"),0<r.length&&(t=new sl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _n={animationend:qr("Animation","AnimationEnd"),animationiteration:qr("Animation","AnimationIteration"),animationstart:qr("Animation","AnimationStart"),transitionend:qr("Transition","TransitionEnd")},yl={},Io={};M&&(Io=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function Xr(e){if(yl[e])return yl[e];if(!_n[e])return e;var t=_n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Io)return yl[e]=t[n];return e}var Oo=Xr("animationend"),Fo=Xr("animationiteration"),Ao=Xr("animationstart"),Bo=Xr("transitionend"),Uo=new Map,Wo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){Uo.set(e,t),E(t,[e])}for(var vl=0;vl<Wo.length;vl++){var xl=Wo[vl],$c=xl.toLowerCase(),Yc=xl[0].toUpperCase()+xl.slice(1);Ut($c,"on"+Yc)}Ut(Oo,"onAnimationEnd"),Ut(Fo,"onAnimationIteration"),Ut(Ao,"onAnimationStart"),Ut("dblclick","onDoubleClick"),Ut("focusin","onFocus"),Ut("focusout","onBlur"),Ut(Bo,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),E("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),E("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),E("onBeforeInput",["compositionend","keypress","textInput","paste"]),E("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vc=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function Ho(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$u(r,t,void 0,e),e.currentTarget=null}function $o(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],c=a.instance,y=a.currentTarget;if(a=a.listener,c!==l&&i.isPropagationStopped())break e;Ho(i,a,y),l=c}else for(o=0;o<r.length;o++){if(a=r[o],c=a.instance,y=a.currentTarget,a=a.listener,c!==l&&i.isPropagationStopped())break e;Ho(i,a,y),l=c}}}if(Dr)throw e=Xi,Dr=!1,Xi=null,e}function ge(e,t){var n=t[El];n===void 0&&(n=t[El]=new Set);var r=e+"__bubble";n.has(r)||(Yo(t,e,2,!1),n.add(r))}function wl(e,t,n){var r=0;t&&(r|=4),Yo(n,e,r,t)}var Kr="_reactListening"+Math.random().toString(36).slice(2);function ur(e){if(!e[Kr]){e[Kr]=!0,C.forEach(function(n){n!=="selectionchange"&&(Vc.has(n)||wl(n,!1,e),wl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kr]||(t[Kr]=!0,wl("selectionchange",!1,t))}}function Yo(e,t,n,r){switch(mo(t)){case 1:var i=sc;break;case 4:i=oc;break;default:i=rl}n=i.bind(null,t,n,e),i=void 0,!qi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function kl(e,t,n,r,i){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;a!==null;){if(o=nn(a),o===null)return;if(c=o.tag,c===5||c===6){r=l=o;continue e}a=a.parentNode}}r=r.return}qs(function(){var y=l,w=Vi(n),k=[];e:{var x=Uo.get(e);if(x!==void 0){var T=sl,b=e;switch(e){case"keypress":if(Yr(n)===0)break e;case"keydown":case"keyup":T=Sc;break;case"focusin":b="focus",T=ul;break;case"focusout":b="blur",T=ul;break;case"beforeblur":case"afterblur":T=ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=cc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=jc;break;case Oo:case Fo:case Ao:T=pc;break;case Bo:T=Ec;break;case"scroll":T=ac;break;case"wheel":T=Tc;break;case"copy":case"cut":case"paste":T=hc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=xo}var I=(t&4)!==0,Ce=!I&&e==="scroll",m=I?x!==null?x+"Capture":null:x;I=[];for(var f=y,h;f!==null;){h=f;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,m!==null&&(S=Yn(f,m),S!=null&&I.push(cr(f,S,h)))),Ce)break;f=f.return}0<I.length&&(x=new T(x,b,null,n,w),k.push({event:x,listeners:I}))}}if((t&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",x&&n!==Yi&&(b=n.relatedTarget||n.fromElement)&&(nn(b)||b[Pt]))break e;if((T||x)&&(x=w.window===w?w:(x=w.ownerDocument)?x.defaultView||x.parentWindow:window,T?(b=n.relatedTarget||n.toElement,T=y,b=b?nn(b):null,b!==null&&(Ce=tn(b),b!==Ce||b.tag!==5&&b.tag!==6)&&(b=null)):(T=null,b=y),T!==b)){if(I=yo,S="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(I=xo,S="onPointerLeave",m="onPointerEnter",f="pointer"),Ce=T==null?x:En(T),h=b==null?x:En(b),x=new I(S,f+"leave",T,n,w),x.target=Ce,x.relatedTarget=h,S=null,nn(w)===y&&(I=new I(m,f+"enter",b,n,w),I.target=h,I.relatedTarget=Ce,S=I),Ce=S,T&&b)t:{for(I=T,m=b,f=0,h=I;h;h=jn(h))f++;for(h=0,S=m;S;S=jn(S))h++;for(;0<f-h;)I=jn(I),f--;for(;0<h-f;)m=jn(m),h--;for(;f--;){if(I===m||m!==null&&I===m.alternate)break t;I=jn(I),m=jn(m)}I=null}else I=null;T!==null&&Vo(k,x,T,I,!1),b!==null&&Ce!==null&&Vo(k,Ce,b,I,!0)}}e:{if(x=y?En(y):window,T=x.nodeName&&x.nodeName.toLowerCase(),T==="select"||T==="input"&&x.type==="file")var A=Ic;else if(jo(x))if(Eo)A=Bc;else{A=Fc;var U=Oc}else(T=x.nodeName)&&T.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(A=Ac);if(A&&(A=A(e,y))){No(k,A,n,w);break e}U&&U(e,x,y),e==="focusout"&&(U=x._wrapperState)&&U.controlled&&x.type==="number"&&oe(x,"number",x.value)}switch(U=y?En(y):window,e){case"focusin":(jo(U)||U.contentEditable==="true")&&(Cn=U,hl=y,or=null);break;case"focusout":or=hl=Cn=null;break;case"mousedown":gl=!0;break;case"contextmenu":case"mouseup":case"dragend":gl=!1,bo(k,n,w);break;case"selectionchange":if(Hc)break;case"keydown":case"keyup":bo(k,n,w)}var W;if(dl)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else Sn?Co(e,n)&&(H="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(H="onCompositionStart");H&&(wo&&n.locale!=="ko"&&(Sn||H!=="onCompositionStart"?H==="onCompositionEnd"&&Sn&&(W=ho()):(Bt=w,ll="value"in Bt?Bt.value:Bt.textContent,Sn=!0)),U=Jr(y,H),0<U.length&&(H=new vo(H,e,null,n,w),k.push({event:H,listeners:U}),W?H.data=W:(W=_o(n),W!==null&&(H.data=W)))),(W=Lc?Mc(e,n):Rc(e,n))&&(y=Jr(y,"onBeforeInput"),0<y.length&&(w=new vo("onBeforeInput","beforeinput",null,n,w),k.push({event:w,listeners:y}),w.data=W))}$o(k,t)})}function cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Yn(e,n),l!=null&&r.unshift(cr(e,l,i)),l=Yn(e,t),l!=null&&r.push(cr(e,l,i))),e=e.return}return r}function jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vo(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var a=n,c=a.alternate,y=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&y!==null&&(a=y,i?(c=Yn(n,l),c!=null&&o.unshift(cr(n,c,a))):i||(c=Yn(n,l),c!=null&&o.push(cr(n,c,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Qc=/\r\n?/g,Gc=/\u0000|\uFFFD/g;function Qo(e){return(typeof e=="string"?e:""+e).replace(Qc,`
`).replace(Gc,"")}function Zr(e,t,n){if(t=Qo(t),Qo(e)!==t&&n)throw Error(d(425))}function ei(){}var Sl=null,Cl=null;function _l(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,qc=typeof clearTimeout=="function"?clearTimeout:void 0,Go=typeof Promise=="function"?Promise:void 0,Xc=typeof queueMicrotask=="function"?queueMicrotask:typeof Go<"u"?function(e){return Go.resolve(null).then(e).catch(Kc)}:jl;function Kc(e){setTimeout(function(){throw e})}function Nl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);er(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),kt="__reactFiber$"+Nn,dr="__reactProps$"+Nn,Pt="__reactContainer$"+Nn,El="__reactEvents$"+Nn,Jc="__reactListeners$"+Nn,Zc="__reactHandles$"+Nn;function nn(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qo(e);e!==null;){if(n=e[kt])return n;e=qo(e)}return t}e=n,n=e.parentNode}return null}function fr(e){return e=e[kt]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(d(33))}function ti(e){return e[dr]||null}var Pl=[],Pn=-1;function Ht(e){return{current:e}}function ye(e){0>Pn||(e.current=Pl[Pn],Pl[Pn]=null,Pn--)}function me(e,t){Pn++,Pl[Pn]=e.current,e.current=t}var $t={},Ie=Ht($t),$e=Ht(!1),rn=$t;function Tn(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ye(e){return e=e.childContextTypes,e!=null}function ni(){ye($e),ye(Ie)}function Xo(e,t,n){if(Ie.current!==$t)throw Error(d(168));me(Ie,t),me($e,n)}function Ko(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(d(108,ce(e)||"Unknown",i));return z({},n,r)}function ri(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,rn=Ie.current,me(Ie,e),me($e,$e.current),!0}function Jo(e,t,n){var r=e.stateNode;if(!r)throw Error(d(169));n?(e=Ko(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,ye($e),ye(Ie),me(Ie,e)):ye($e),me($e,n)}var Tt=null,ii=!1,Tl=!1;function Zo(e){Tt===null?Tt=[e]:Tt.push(e)}function ed(e){ii=!0,Zo(e)}function Yt(){if(!Tl&&Tt!==null){Tl=!0;var e=0,t=ue;try{var n=Tt;for(ue=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,ii=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(e+1)),eo(Ki,Yt),i}finally{ue=t,Tl=!1}}return null}var zn=[],Ln=0,li=null,si=0,it=[],lt=0,ln=null,zt=1,Lt="";function sn(e,t){zn[Ln++]=si,zn[Ln++]=li,li=e,si=t}function ea(e,t,n){it[lt++]=zt,it[lt++]=Lt,it[lt++]=ln,ln=e;var r=zt;e=Lt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var l=32-dt(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zt=1<<32-dt(t)+i|n<<i|r,Lt=l+e}else zt=1<<l|n<<i|r,Lt=e}function zl(e){e.return!==null&&(sn(e,1),ea(e,1,0))}function Ll(e){for(;e===li;)li=zn[--Ln],zn[Ln]=null,si=zn[--Ln],zn[Ln]=null;for(;e===ln;)ln=it[--lt],it[lt]=null,Lt=it[--lt],it[lt]=null,zt=it[--lt],it[lt]=null}var Ze=null,et=null,ve=!1,pt=null;function ta(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function na(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,et=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ln!==null?{id:zt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,et=null,!0):!1;default:return!1}}function Ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rl(e){if(ve){var t=et;if(t){var n=t;if(!na(e,t)){if(Ml(e))throw Error(d(418));t=Wt(n.nextSibling);var r=Ze;t&&na(e,t)?ta(r,n):(e.flags=e.flags&-4097|2,ve=!1,Ze=e)}}else{if(Ml(e))throw Error(d(418));e.flags=e.flags&-4097|2,ve=!1,Ze=e}}}function ra(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function oi(e){if(e!==Ze)return!1;if(!ve)return ra(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_l(e.type,e.memoizedProps)),t&&(t=et)){if(Ml(e))throw ia(),Error(d(418));for(;t;)ta(e,t),t=Wt(t.nextSibling)}if(ra(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=Ze?Wt(e.stateNode.nextSibling):null;return!0}function ia(){for(var e=et;e;)e=Wt(e.nextSibling)}function Mn(){et=Ze=null,ve=!1}function Dl(e){pt===null?pt=[e]:pt.push(e)}var td=ae.ReactCurrentBatchConfig;function pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(d(309));var r=n.stateNode}if(!r)throw Error(d(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(d(284));if(!n._owner)throw Error(d(290,e))}return e}function ai(e,t){throw e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function la(e){var t=e._init;return t(e._payload)}function sa(e){function t(m,f){if(e){var h=m.deletions;h===null?(m.deletions=[f],m.flags|=16):h.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Zt(m,f),m.index=0,m.sibling=null,m}function l(m,f,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<f?(m.flags|=2,f):h):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,f,h,S){return f===null||f.tag!==6?(f=js(h,m.mode,S),f.return=m,f):(f=i(f,h),f.return=m,f)}function c(m,f,h,S){var A=h.type;return A===Ne?w(m,f,h.props.children,S,h.key):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Re&&la(A)===f.type)?(S=i(f,h.props),S.ref=pr(m,f,h),S.return=m,S):(S=Mi(h.type,h.key,h.props,null,m.mode,S),S.ref=pr(m,f,h),S.return=m,S)}function y(m,f,h,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Ns(h,m.mode,S),f.return=m,f):(f=i(f,h.children||[]),f.return=m,f)}function w(m,f,h,S,A){return f===null||f.tag!==7?(f=mn(h,m.mode,S,A),f.return=m,f):(f=i(f,h),f.return=m,f)}function k(m,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=js(""+f,m.mode,h),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case je:return h=Mi(f.type,f.key,f.props,null,m.mode,h),h.ref=pr(m,null,f),h.return=m,h;case fe:return f=Ns(f,m.mode,h),f.return=m,f;case Re:var S=f._init;return k(m,S(f._payload),h)}if(xt(f)||B(f))return f=mn(f,m.mode,h,null),f.return=m,f;ai(m,f)}return null}function x(m,f,h,S){var A=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return A!==null?null:a(m,f,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case je:return h.key===A?c(m,f,h,S):null;case fe:return h.key===A?y(m,f,h,S):null;case Re:return A=h._init,x(m,f,A(h._payload),S)}if(xt(h)||B(h))return A!==null?null:w(m,f,h,S,null);ai(m,h)}return null}function T(m,f,h,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(h)||null,a(f,m,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case je:return m=m.get(S.key===null?h:S.key)||null,c(f,m,S,A);case fe:return m=m.get(S.key===null?h:S.key)||null,y(f,m,S,A);case Re:var U=S._init;return T(m,f,h,U(S._payload),A)}if(xt(S)||B(S))return m=m.get(h)||null,w(f,m,S,A,null);ai(f,S)}return null}function b(m,f,h,S){for(var A=null,U=null,W=f,H=f=0,Le=null;W!==null&&H<h.length;H++){W.index>H?(Le=W,W=null):Le=W.sibling;var le=x(m,W,h[H],S);if(le===null){W===null&&(W=Le);break}e&&W&&le.alternate===null&&t(m,W),f=l(le,f,H),U===null?A=le:U.sibling=le,U=le,W=Le}if(H===h.length)return n(m,W),ve&&sn(m,H),A;if(W===null){for(;H<h.length;H++)W=k(m,h[H],S),W!==null&&(f=l(W,f,H),U===null?A=W:U.sibling=W,U=W);return ve&&sn(m,H),A}for(W=r(m,W);H<h.length;H++)Le=T(W,m,H,h[H],S),Le!==null&&(e&&Le.alternate!==null&&W.delete(Le.key===null?H:Le.key),f=l(Le,f,H),U===null?A=Le:U.sibling=Le,U=Le);return e&&W.forEach(function(en){return t(m,en)}),ve&&sn(m,H),A}function I(m,f,h,S){var A=B(h);if(typeof A!="function")throw Error(d(150));if(h=A.call(h),h==null)throw Error(d(151));for(var U=A=null,W=f,H=f=0,Le=null,le=h.next();W!==null&&!le.done;H++,le=h.next()){W.index>H?(Le=W,W=null):Le=W.sibling;var en=x(m,W,le.value,S);if(en===null){W===null&&(W=Le);break}e&&W&&en.alternate===null&&t(m,W),f=l(en,f,H),U===null?A=en:U.sibling=en,U=en,W=Le}if(le.done)return n(m,W),ve&&sn(m,H),A;if(W===null){for(;!le.done;H++,le=h.next())le=k(m,le.value,S),le!==null&&(f=l(le,f,H),U===null?A=le:U.sibling=le,U=le);return ve&&sn(m,H),A}for(W=r(m,W);!le.done;H++,le=h.next())le=T(W,m,H,le.value,S),le!==null&&(e&&le.alternate!==null&&W.delete(le.key===null?H:le.key),f=l(le,f,H),U===null?A=le:U.sibling=le,U=le);return e&&W.forEach(function(Dd){return t(m,Dd)}),ve&&sn(m,H),A}function Ce(m,f,h,S){if(typeof h=="object"&&h!==null&&h.type===Ne&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case je:e:{for(var A=h.key,U=f;U!==null;){if(U.key===A){if(A=h.type,A===Ne){if(U.tag===7){n(m,U.sibling),f=i(U,h.props.children),f.return=m,m=f;break e}}else if(U.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Re&&la(A)===U.type){n(m,U.sibling),f=i(U,h.props),f.ref=pr(m,U,h),f.return=m,m=f;break e}n(m,U);break}else t(m,U);U=U.sibling}h.type===Ne?(f=mn(h.props.children,m.mode,S,h.key),f.return=m,m=f):(S=Mi(h.type,h.key,h.props,null,m.mode,S),S.ref=pr(m,f,h),S.return=m,m=S)}return o(m);case fe:e:{for(U=h.key;f!==null;){if(f.key===U)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(m,f.sibling),f=i(f,h.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=Ns(h,m.mode,S),f.return=m,m=f}return o(m);case Re:return U=h._init,Ce(m,f,U(h._payload),S)}if(xt(h))return b(m,f,h,S);if(B(h))return I(m,f,h,S);ai(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,h),f.return=m,m=f):(n(m,f),f=js(h,m.mode,S),f.return=m,m=f),o(m)):n(m,f)}return Ce}var Rn=sa(!0),oa=sa(!1),ui=Ht(null),ci=null,Dn=null,bl=null;function Il(){bl=Dn=ci=null}function Ol(e){var t=ui.current;ye(ui),e._currentValue=t}function Fl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function bn(e,t){ci=e,bl=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ve=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(bl!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if(ci===null)throw Error(d(308));Dn=e,ci.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var on=null;function Al(e){on===null?on=[e]:on.push(e)}function aa(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Al(t)):(n.next=i.next,i.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vt=!1;function Bl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ua(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ne&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Mt(e,n)}return i=r.interleaved,i===null?(t.next=t,Al(r)):(t.next=i.next,i.next=t),r.interleaved=t,Mt(e,n)}function di(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,el(e,n)}}function ca(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fi(e,t,n,r){var i=e.updateQueue;Vt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,y=c.next;c.next=null,o===null?l=y:o.next=y,o=c;var w=e.alternate;w!==null&&(w=w.updateQueue,a=w.lastBaseUpdate,a!==o&&(a===null?w.firstBaseUpdate=y:a.next=y,w.lastBaseUpdate=c))}if(l!==null){var k=i.baseState;o=0,w=y=c=null,a=l;do{var x=a.lane,T=a.eventTime;if((r&x)===x){w!==null&&(w=w.next={eventTime:T,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,I=a;switch(x=t,T=n,I.tag){case 1:if(b=I.payload,typeof b=="function"){k=b.call(T,k,x);break e}k=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=I.payload,x=typeof b=="function"?b.call(T,k,x):b,x==null)break e;k=z({},k,x);break e;case 2:Vt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,x=i.effects,x===null?i.effects=[a]:x.push(a))}else T={eventTime:T,lane:x,tag:a.tag,payload:a.payload,callback:a.callback,next:null},w===null?(y=w=T,c=k):w=w.next=T,o|=x;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;x=a,a=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(w===null&&(c=k),i.baseState=c,i.firstBaseUpdate=y,i.lastBaseUpdate=w,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);cn|=o,e.lanes=o,e.memoizedState=k}}function da(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(d(191,i));i.call(r)}}}var mr={},St=Ht(mr),hr=Ht(mr),gr=Ht(mr);function an(e){if(e===mr)throw Error(d(174));return e}function Ul(e,t){switch(me(gr,t),me(hr,e),me(St,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wi(t,e)}ye(St),me(St,t)}function In(){ye(St),ye(hr),ye(gr)}function fa(e){an(gr.current);var t=an(St.current),n=Wi(t,e.type);t!==n&&(me(hr,e),me(St,n))}function Wl(e){hr.current===e&&(ye(St),ye(hr))}var xe=Ht(0);function pi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hl=[];function $l(){for(var e=0;e<Hl.length;e++)Hl[e]._workInProgressVersionPrimary=null;Hl.length=0}var mi=ae.ReactCurrentDispatcher,Yl=ae.ReactCurrentBatchConfig,un=0,we=null,Ee=null,Te=null,hi=!1,yr=!1,vr=0,nd=0;function Oe(){throw Error(d(321))}function Vl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function Ql(e,t,n,r,i,l){if(un=l,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,mi.current=e===null||e.memoizedState===null?sd:od,e=n(r,i),yr){l=0;do{if(yr=!1,vr=0,25<=l)throw Error(d(301));l+=1,Te=Ee=null,t.updateQueue=null,mi.current=ad,e=n(r,i)}while(yr)}if(mi.current=vi,t=Ee!==null&&Ee.next!==null,un=0,Te=Ee=we=null,hi=!1,t)throw Error(d(300));return e}function Gl(){var e=vr!==0;return vr=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?we.memoizedState=Te=e:Te=Te.next=e,Te}function ot(){if(Ee===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Te===null?we.memoizedState:Te.next;if(t!==null)Te=t,Ee=e;else{if(e===null)throw Error(d(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Te===null?we.memoizedState=Te=e:Te=Te.next=e}return Te}function xr(e,t){return typeof t=="function"?t(e):t}function ql(e){var t=ot(),n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var r=Ee,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,c=null,y=l;do{var w=y.lane;if((un&w)===w)c!==null&&(c=c.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),r=y.hasEagerState?y.eagerState:e(r,y.action);else{var k={lane:w,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};c===null?(a=c=k,o=r):c=c.next=k,we.lanes|=w,cn|=w}y=y.next}while(y!==null&&y!==l);c===null?o=r:c.next=a,ft(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,we.lanes|=l,cn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xl(e){var t=ot(),n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);ft(l,t.memoizedState)||(Ve=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function pa(){}function ma(e,t){var n=we,r=ot(),i=t(),l=!ft(r.memoizedState,i);if(l&&(r.memoizedState=i,Ve=!0),r=r.queue,Kl(ya.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,wr(9,ga.bind(null,n,r,i,t),void 0,null),ze===null)throw Error(d(349));(un&30)!==0||ha(n,t,i)}return i}function ha(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ga(e,t,n,r){t.value=n,t.getSnapshot=r,va(t)&&xa(e)}function ya(e,t,n){return n(function(){va(t)&&xa(e)})}function va(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function xa(e){var t=Mt(e,1);t!==null&&yt(t,e,1,-1)}function wa(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:e},t.queue=e,e=e.dispatch=ld.bind(null,we,e),[t.memoizedState,e]}function wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ka(){return ot().memoizedState}function gi(e,t,n,r){var i=Ct();we.flags|=e,i.memoizedState=wr(1|t,n,void 0,r===void 0?null:r)}function yi(e,t,n,r){var i=ot();r=r===void 0?null:r;var l=void 0;if(Ee!==null){var o=Ee.memoizedState;if(l=o.destroy,r!==null&&Vl(r,o.deps)){i.memoizedState=wr(t,n,l,r);return}}we.flags|=e,i.memoizedState=wr(1|t,n,l,r)}function Sa(e,t){return gi(8390656,8,e,t)}function Kl(e,t){return yi(2048,8,e,t)}function Ca(e,t){return yi(4,2,e,t)}function _a(e,t){return yi(4,4,e,t)}function ja(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Na(e,t,n){return n=n!=null?n.concat([e]):null,yi(4,4,ja.bind(null,t,e),n)}function Jl(){}function Ea(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pa(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ta(e,t,n){return(un&21)===0?(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n):(ft(n,t)||(n=io(),we.lanes|=n,cn|=n,e.baseState=!0),t)}function rd(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var r=Yl.transition;Yl.transition={};try{e(!1),t()}finally{ue=n,Yl.transition=r}}function za(){return ot().memoizedState}function id(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},La(e))Ma(t,n);else if(n=aa(e,t,n,r),n!==null){var i=We();yt(n,e,r,i),Ra(n,t,r)}}function ld(e,t,n){var r=Kt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(La(e))Ma(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,a=l(o,n);if(i.hasEagerState=!0,i.eagerState=a,ft(a,o)){var c=t.interleaved;c===null?(i.next=i,Al(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=aa(e,t,i,r),n!==null&&(i=We(),yt(n,e,r,i),Ra(n,t,r))}}function La(e){var t=e.alternate;return e===we||t!==null&&t===we}function Ma(e,t){yr=hi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ra(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,el(e,n)}}var vi={readContext:st,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},sd={readContext:st,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:Sa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gi(4194308,4,ja.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gi(4194308,4,e,t)},useInsertionEffect:function(e,t){return gi(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=id.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:wa,useDebugValue:Jl,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=wa(!1),t=e[0];return e=rd.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=we,i=Ct();if(ve){if(n===void 0)throw Error(d(407));n=n()}else{if(n=t(),ze===null)throw Error(d(349));(un&30)!==0||ha(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Sa(ya.bind(null,r,l,e),[e]),r.flags|=2048,wr(9,ga.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ct(),t=ze.identifierPrefix;if(ve){var n=Lt,r=zt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},od={readContext:st,useCallback:Ea,useContext:st,useEffect:Kl,useImperativeHandle:Na,useInsertionEffect:Ca,useLayoutEffect:_a,useMemo:Pa,useReducer:ql,useRef:ka,useState:function(){return ql(xr)},useDebugValue:Jl,useDeferredValue:function(e){var t=ot();return Ta(t,Ee.memoizedState,e)},useTransition:function(){var e=ql(xr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:pa,useSyncExternalStore:ma,useId:za,unstable_isNewReconciler:!1},ad={readContext:st,useCallback:Ea,useContext:st,useEffect:Kl,useImperativeHandle:Na,useInsertionEffect:Ca,useLayoutEffect:_a,useMemo:Pa,useReducer:Xl,useRef:ka,useState:function(){return Xl(xr)},useDebugValue:Jl,useDeferredValue:function(e){var t=ot();return Ee===null?t.memoizedState=e:Ta(t,Ee.memoizedState,e)},useTransition:function(){var e=Xl(xr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:pa,useSyncExternalStore:ma,useId:za,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xi={isMounted:function(e){return(e=e._reactInternals)?tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),i=Kt(e),l=Rt(r,i);l.payload=t,n!=null&&(l.callback=n),t=Qt(e,l,i),t!==null&&(yt(t,e,i,r),di(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),i=Kt(e),l=Rt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Qt(e,l,i),t!==null&&(yt(t,e,i,r),di(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=Kt(e),i=Rt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Qt(e,i,r),t!==null&&(yt(t,e,r,n),di(t,e,r))}};function Da(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!sr(n,r)||!sr(i,l):!0}function ba(e,t,n){var r=!1,i=$t,l=t.contextType;return typeof l=="object"&&l!==null?l=st(l):(i=Ye(t)?rn:Ie.current,r=t.contextTypes,l=(r=r!=null)?Tn(e,i):$t),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ia(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xi.enqueueReplaceState(t,t.state,null)}function es(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Bl(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=st(l):(l=Ye(t)?rn:Ie.current,i.context=Tn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Zl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&xi.enqueueReplaceState(i,i.state,null),fi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function On(e,t){try{var n="",r=t;do n+=J(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function ts(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ns(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ud=typeof WeakMap=="function"?WeakMap:Map;function Oa(e,t,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ni||(Ni=!0,ys=r),ns(e,t)},n}function Fa(e,t,n){n=Rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ns(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ns(e,t),typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Aa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ud;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cd.bind(null,e,t,n),t.then(e,e))}function Ba(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ua(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rt(-1,1),t.tag=2,Qt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var cd=ae.ReactCurrentOwner,Ve=!1;function Ue(e,t,n,r){t.child=e===null?oa(t,null,n,r):Rn(t,e.child,n,r)}function Wa(e,t,n,r,i){n=n.render;var l=t.ref;return bn(t,i),r=Ql(e,t,n,r,l,i),n=Gl(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(ve&&n&&zl(t),t.flags|=1,Ue(e,t,r,i),t.child)}function Ha(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!_s(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,$a(e,t,l,r,i)):(e=Mi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:sr,n(o,r)&&e.ref===t.ref)return Dt(e,t,i)}return t.flags|=1,e=Zt(l,r),e.ref=t.ref,e.return=t,t.child=e}function $a(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(sr(l,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ve=!0);else return t.lanes=e.lanes,Dt(e,t,i)}return rs(e,t,n,r,i)}function Ya(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(An,tt),tt|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(An,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,me(An,tt),tt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,me(An,tt),tt|=r;return Ue(e,t,i,n),t.child}function Va(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function rs(e,t,n,r,i){var l=Ye(n)?rn:Ie.current;return l=Tn(t,l),bn(t,i),n=Ql(e,t,n,r,l,i),r=Gl(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(ve&&r&&zl(t),t.flags|=1,Ue(e,t,n,i),t.child)}function Qa(e,t,n,r,i){if(Ye(n)){var l=!0;ri(t)}else l=!1;if(bn(t,i),t.stateNode===null)ki(e,t),ba(t,n,r),es(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var c=o.context,y=n.contextType;typeof y=="object"&&y!==null?y=st(y):(y=Ye(n)?rn:Ie.current,y=Tn(t,y));var w=n.getDerivedStateFromProps,k=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function";k||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||c!==y)&&Ia(t,o,r,y),Vt=!1;var x=t.memoizedState;o.state=x,fi(t,r,o,i),c=t.memoizedState,a!==r||x!==c||$e.current||Vt?(typeof w=="function"&&(Zl(t,n,w,r),c=t.memoizedState),(a=Vt||Da(t,n,a,r,x,c,y))?(k||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=y,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ua(e,t),a=t.memoizedProps,y=t.type===t.elementType?a:mt(t.type,a),o.props=y,k=t.pendingProps,x=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=st(c):(c=Ye(n)?rn:Ie.current,c=Tn(t,c));var T=n.getDerivedStateFromProps;(w=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==k||x!==c)&&Ia(t,o,r,c),Vt=!1,x=t.memoizedState,o.state=x,fi(t,r,o,i);var b=t.memoizedState;a!==k||x!==b||$e.current||Vt?(typeof T=="function"&&(Zl(t,n,T,r),b=t.memoizedState),(y=Vt||Da(t,n,y,r,x,b,c)||!1)?(w||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),o.props=r,o.state=b,o.context=c,r=y):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return is(e,t,n,r,l,i)}function is(e,t,n,r,i,l){Va(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Jo(t,n,!1),Dt(e,t,l);r=t.stateNode,cd.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Rn(t,e.child,null,l),t.child=Rn(t,null,a,l)):Ue(e,t,a,l),t.memoizedState=r.state,i&&Jo(t,n,!0),t.child}function Ga(e){var t=e.stateNode;t.pendingContext?Xo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xo(e,t.context,!1),Ul(e,t.containerInfo)}function qa(e,t,n,r,i){return Mn(),Dl(i),t.flags|=256,Ue(e,t,n,r),t.child}var ls={dehydrated:null,treeContext:null,retryLane:0};function ss(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xa(e,t,n){var r=t.pendingProps,i=xe.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(xe,i&1),e===null)return Rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ri(o,r,0,null),e=mn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ss(n),t.memoizedState=ls,e):os(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return dd(e,t,o,r,a,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Zt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=Zt(a,l):(l=mn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?ss(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=ls,r}return l=e.child,e=l.sibling,r=Zt(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function os(e,t){return t=Ri({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,n,r){return r!==null&&Dl(r),Rn(t,e.child,null,n),e=os(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dd(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=ts(Error(d(422))),wi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Ri({mode:"visible",children:r.children},i,0,null),l=mn(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Rn(t,e.child,null,o),t.child.memoizedState=ss(o),t.memoizedState=ls,l);if((t.mode&1)===0)return wi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(d(419)),r=ts(l,r,void 0),wi(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ve||a){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Mt(e,i),yt(r,e,i,-1))}return Cs(),r=ts(Error(d(421))),wi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_d.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,et=Wt(i.nextSibling),Ze=t,ve=!0,pt=null,e!==null&&(it[lt++]=zt,it[lt++]=Lt,it[lt++]=ln,zt=e.id,Lt=e.overflow,ln=t),t=os(t,r.children),t.flags|=4096,t)}function Ka(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fl(e.return,t,n)}function as(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Ja(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Ue(e,t,r.children,n),r=xe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ka(e,n,t);else if(e.tag===19)Ka(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(xe,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&pi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),as(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&pi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}as(t,!0,n,null,l);break;case"together":as(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ki(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fd(e,t,n){switch(t.tag){case 3:Ga(t),Mn();break;case 5:fa(t);break;case 1:Ye(t.type)&&ri(t);break;case 4:Ul(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(ui,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(xe,xe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Xa(e,t,n):(me(xe,xe.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);me(xe,xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ja(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(xe,xe.current),r)break;return null;case 22:case 23:return t.lanes=0,Ya(e,t,n)}return Dt(e,t,n)}var Za,us,eu,tu;Za=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},us=function(){},eu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,an(St.current);var l=null;switch(n){case"input":i=yn(e,i),r=yn(e,r),l=[];break;case"select":i=z({},i,{value:void 0}),r=z({},r,{value:void 0}),l=[];break;case"textarea":i=Nt(e,i),r=Nt(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ei)}Hi(n,r);var o;n=null;for(y in i)if(!r.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var a=i[y];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(_.hasOwnProperty(y)?l||(l=[]):(l=l||[]).push(y,null));for(y in r){var c=r[y];if(a=i!=null?i[y]:void 0,r.hasOwnProperty(y)&&c!==a&&(c!=null||a!=null))if(y==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(l||(l=[]),l.push(y,n)),n=c;else y==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(l=l||[]).push(y,c)):y==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(y,""+c):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(_.hasOwnProperty(y)?(c!=null&&y==="onScroll"&&ge("scroll",e),l||a===c||(l=[])):(l=l||[]).push(y,c))}n&&(l=l||[]).push("style",n);var y=l;(t.updateQueue=y)&&(t.flags|=4)}},tu=function(e,t,n,r){n!==r&&(t.flags|=4)};function kr(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pd(e,t,n){var r=t.pendingProps;switch(Ll(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Ye(t.type)&&ni(),Fe(t),null;case 3:return r=t.stateNode,In(),ye($e),ye(Ie),$l(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,pt!==null&&(ws(pt),pt=null))),us(e,t),Fe(t),null;case 5:Wl(t);var i=an(gr.current);if(n=t.type,e!==null&&t.stateNode!=null)eu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(d(166));return Fe(t),null}if(e=an(St.current),oi(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[kt]=t,r[dr]=l,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<ar.length;i++)ge(ar[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":zr(r,l),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ge("invalid",r);break;case"textarea":Et(r,l),ge("invalid",r)}Hi(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Zr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Zr(r.textContent,a,e),i=["children",""+a]):_.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":hn(r),ie(r,l,!0);break;case"textarea":hn(r),As(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ei)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[kt]=t,e[dr]=r,Za(e,t,!1,!1),t.stateNode=e;e:{switch(o=$i(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<ar.length;i++)ge(ar[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":zr(e,r),i=yn(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=z({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Et(e,r),i=Nt(e,r),ge("invalid",e);break;default:i=r}Hi(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="style"?Hs(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Us(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Hn(e,c):typeof c=="number"&&Hn(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(_.hasOwnProperty(l)?c!=null&&l==="onScroll"&&ge("scroll",e):c!=null&&de(e,l,c,o))}switch(n){case"input":hn(e),ie(e,r,!1);break;case"textarea":hn(e),As(e);break;case"option":r.value!=null&&e.setAttribute("value",""+te(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?rt(e,!!r.multiple,l,!1):r.defaultValue!=null&&rt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ei)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)tu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(d(166));if(n=an(gr.current),an(St.current),oi(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(l=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:Zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Fe(t),null;case 13:if(ye(xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&et!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ia(),Mn(),t.flags|=98560,l=!1;else if(l=oi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(d(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(d(317));l[kt]=t}else Mn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),l=!1}else pt!==null&&(ws(pt),pt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(xe.current&1)!==0?Pe===0&&(Pe=3):Cs())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return In(),us(e,t),e===null&&ur(t.stateNode.containerInfo),Fe(t),null;case 10:return Ol(t.type._context),Fe(t),null;case 17:return Ye(t.type)&&ni(),Fe(t),null;case 19:if(ye(xe),l=t.memoizedState,l===null)return Fe(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)kr(l,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=pi(e),o!==null){for(t.flags|=128,kr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(xe,xe.current&1|2),t.child}e=e.sibling}l.tail!==null&&Se()>Bn&&(t.flags|=128,r=!0,kr(l,!1),t.lanes=4194304)}else{if(!r)if(e=pi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!ve)return Fe(t),null}else 2*Se()-l.renderingStartTime>Bn&&n!==1073741824&&(t.flags|=128,r=!0,kr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Se(),t.sibling=null,n=xe.current,me(xe,r?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return Ss(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(tt&1073741824)!==0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(d(156,t.tag))}function md(e,t){switch(Ll(t),t.tag){case 1:return Ye(t.type)&&ni(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return In(),ye($e),ye(Ie),$l(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Wl(t),null;case 13:if(ye(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(xe),null;case 4:return In(),null;case 10:return Ol(t.type._context),null;case 22:case 23:return Ss(),null;case 24:return null;default:return null}}var Si=!1,Ae=!1,hd=typeof WeakSet=="function"?WeakSet:Set,L=null;function Fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(e,t,r)}else n.current=null}function cs(e,t,n){try{n()}catch(r){ke(e,t,r)}}var nu=!1;function gd(e,t){if(Sl=Wr,e=Do(),ml(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,y=0,w=0,k=e,x=null;t:for(;;){for(var T;k!==n||i!==0&&k.nodeType!==3||(a=o+i),k!==l||r!==0&&k.nodeType!==3||(c=o+r),k.nodeType===3&&(o+=k.nodeValue.length),(T=k.firstChild)!==null;)x=k,k=T;for(;;){if(k===e)break t;if(x===n&&++y===i&&(a=o),x===l&&++w===r&&(c=o),(T=k.nextSibling)!==null)break;k=x,x=k.parentNode}k=T}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cl={focusedElem:e,selectionRange:n},Wr=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var I=b.memoizedProps,Ce=b.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?I:mt(t.type,I),Ce);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(d(163))}}catch(S){ke(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return b=nu,nu=!1,b}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&cs(t,n,l)}i=i.next}while(i!==r)}}function Ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ds(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ru(e){var t=e.alternate;t!==null&&(e.alternate=null,ru(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[dr],delete t[El],delete t[Jc],delete t[Zc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function iu(e){return e.tag===5||e.tag===3||e.tag===4}function lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||iu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ei));else if(r!==4&&(e=e.child,e!==null))for(fs(e,t,n),e=e.sibling;e!==null;)fs(e,t,n),e=e.sibling}function ps(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ps(e,t,n),e=e.sibling;e!==null;)ps(e,t,n),e=e.sibling}var De=null,ht=!1;function Gt(e,t,n){for(n=n.child;n!==null;)su(e,t,n),n=n.sibling}function su(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Ir,n)}catch{}switch(n.tag){case 5:Ae||Fn(n,t);case 6:var r=De,i=ht;De=null,Gt(e,t,n),De=r,ht=i,De!==null&&(ht?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(ht?(e=De,n=n.stateNode,e.nodeType===8?Nl(e.parentNode,n):e.nodeType===1&&Nl(e,n),er(e)):Nl(De,n.stateNode));break;case 4:r=De,i=ht,De=n.stateNode.containerInfo,ht=!0,Gt(e,t,n),De=r,ht=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&((l&2)!==0||(l&4)!==0)&&cs(n,t,o),i=i.next}while(i!==r)}Gt(e,t,n);break;case 1:if(!Ae&&(Fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ke(n,t,a)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,Gt(e,t,n),Ae=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hd),t.forEach(function(r){var i=jd.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:De=a.stateNode,ht=!1;break e;case 3:De=a.stateNode.containerInfo,ht=!0;break e;case 4:De=a.stateNode.containerInfo,ht=!0;break e}a=a.return}if(De===null)throw Error(d(160));su(l,o,i),De=null,ht=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(y){ke(i,t,y)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)au(t,e),t=t.sibling}function au(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),_t(e),r&4){try{Sr(3,e,e.return),Ci(3,e)}catch(I){ke(e,e.return,I)}try{Sr(5,e,e.return)}catch(I){ke(e,e.return,I)}}break;case 1:gt(t,e),_t(e),r&512&&n!==null&&Fn(n,n.return);break;case 5:if(gt(t,e),_t(e),r&512&&n!==null&&Fn(n,n.return),e.flags&32){var i=e.stateNode;try{Hn(i,"")}catch(I){ke(e,e.return,I)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Lr(i,l),$i(a,o);var y=$i(a,l);for(o=0;o<c.length;o+=2){var w=c[o],k=c[o+1];w==="style"?Hs(i,k):w==="dangerouslySetInnerHTML"?Us(i,k):w==="children"?Hn(i,k):de(i,w,k,y)}switch(a){case"input":$(i,l);break;case"textarea":Fs(i,l);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var T=l.value;T!=null?rt(i,!!l.multiple,T,!1):x!==!!l.multiple&&(l.defaultValue!=null?rt(i,!!l.multiple,l.defaultValue,!0):rt(i,!!l.multiple,l.multiple?[]:"",!1))}i[dr]=l}catch(I){ke(e,e.return,I)}}break;case 6:if(gt(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(d(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(I){ke(e,e.return,I)}}break;case 3:if(gt(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{er(t.containerInfo)}catch(I){ke(e,e.return,I)}break;case 4:gt(t,e),_t(e);break;case 13:gt(t,e),_t(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(gs=Se())),r&4&&ou(e);break;case 22:if(w=n!==null&&n.memoizedState!==null,e.mode&1?(Ae=(y=Ae)||w,gt(t,e),Ae=y):gt(t,e),_t(e),r&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!w&&(e.mode&1)!==0)for(L=e,w=e.child;w!==null;){for(k=L=w;L!==null;){switch(x=L,T=x.child,x.tag){case 0:case 11:case 14:case 15:Sr(4,x,x.return);break;case 1:Fn(x,x.return);var b=x.stateNode;if(typeof b.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(I){ke(r,n,I)}}break;case 5:Fn(x,x.return);break;case 22:if(x.memoizedState!==null){du(k);continue}}T!==null?(T.return=x,L=T):du(k)}w=w.sibling}e:for(w=null,k=e;;){if(k.tag===5){if(w===null){w=k;try{i=k.stateNode,y?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=k.stateNode,c=k.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Ws("display",o))}catch(I){ke(e,e.return,I)}}}else if(k.tag===6){if(w===null)try{k.stateNode.nodeValue=y?"":k.memoizedProps}catch(I){ke(e,e.return,I)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;w===k&&(w=null),k=k.return}w===k&&(w=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:gt(t,e),_t(e),r&4&&ou(e);break;case 21:break;default:gt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(iu(n)){var r=n;break e}n=n.return}throw Error(d(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hn(i,""),r.flags&=-33);var l=lu(e);ps(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=lu(e);fs(e,a,o);break;default:throw Error(d(161))}}catch(c){ke(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yd(e,t,n){L=e,uu(e)}function uu(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Si;if(!o){var a=i.alternate,c=a!==null&&a.memoizedState!==null||Ae;a=Si;var y=Ae;if(Si=o,(Ae=c)&&!y)for(L=i;L!==null;)o=L,c=o.child,o.tag===22&&o.memoizedState!==null?fu(i):c!==null?(c.return=o,L=c):fu(i);for(;l!==null;)L=l,uu(l),l=l.sibling;L=i,Si=a,Ae=y}cu(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,L=l):cu(e)}}function cu(e){for(;L!==null;){var t=L;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ae||Ci(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&da(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}da(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var y=t.alternate;if(y!==null){var w=y.memoizedState;if(w!==null){var k=w.dehydrated;k!==null&&er(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(d(163))}Ae||t.flags&512&&ds(t)}catch(x){ke(t,t.return,x)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function du(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function fu(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ci(4,t)}catch(c){ke(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){ke(t,i,c)}}var l=t.return;try{ds(t)}catch(c){ke(t,l,c)}break;case 5:var o=t.return;try{ds(t)}catch(c){ke(t,o,c)}}}catch(c){ke(t,t.return,c)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var vd=Math.ceil,_i=ae.ReactCurrentDispatcher,ms=ae.ReactCurrentOwner,at=ae.ReactCurrentBatchConfig,ne=0,ze=null,_e=null,be=0,tt=0,An=Ht(0),Pe=0,Cr=null,cn=0,ji=0,hs=0,_r=null,Qe=null,gs=0,Bn=1/0,bt=null,Ni=!1,ys=null,qt=null,Ei=!1,Xt=null,Pi=0,jr=0,vs=null,Ti=-1,zi=0;function We(){return(ne&6)!==0?Se():Ti!==-1?Ti:Ti=Se()}function Kt(e){return(e.mode&1)===0?1:(ne&2)!==0&&be!==0?be&-be:td.transition!==null?(zi===0&&(zi=io()),zi):(e=ue,e!==0||(e=window.event,e=e===void 0?16:mo(e.type)),e)}function yt(e,t,n,r){if(50<jr)throw jr=0,vs=null,Error(d(185));qn(e,n,r),((ne&2)===0||e!==ze)&&(e===ze&&((ne&2)===0&&(ji|=n),Pe===4&&Jt(e,be)),Ge(e,r),n===1&&ne===0&&(t.mode&1)===0&&(Bn=Se()+500,ii&&Yt()))}function Ge(e,t){var n=e.callbackNode;tc(e,t);var r=Ar(e,e===ze?be:0);if(r===0)n!==null&&to(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&to(n),t===1)e.tag===0?ed(mu.bind(null,e)):Zo(mu.bind(null,e)),Xc(function(){(ne&6)===0&&Yt()}),n=null;else{switch(lo(r)){case 1:n=Ki;break;case 4:n=no;break;case 16:n=br;break;case 536870912:n=ro;break;default:n=br}n=Su(n,pu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pu(e,t){if(Ti=-1,zi=0,(ne&6)!==0)throw Error(d(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=Ar(e,e===ze?be:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Li(e,r);else{t=r;var i=ne;ne|=2;var l=gu();(ze!==e||be!==t)&&(bt=null,Bn=Se()+500,fn(e,t));do try{kd();break}catch(a){hu(e,a)}while(!0);Il(),_i.current=l,ne=i,_e!==null?t=0:(ze=null,be=0,t=Pe)}if(t!==0){if(t===2&&(i=Ji(e),i!==0&&(r=i,t=xs(e,i))),t===1)throw n=Cr,fn(e,0),Jt(e,r),Ge(e,Se()),n;if(t===6)Jt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!xd(i)&&(t=Li(e,r),t===2&&(l=Ji(e),l!==0&&(r=l,t=xs(e,l))),t===1))throw n=Cr,fn(e,0),Jt(e,r),Ge(e,Se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(d(345));case 2:pn(e,Qe,bt);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=gs+500-Se(),10<t)){if(Ar(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=jl(pn.bind(null,e,Qe,bt),t);break}pn(e,Qe,bt);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-dt(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vd(r/1960))-r,10<r){e.timeoutHandle=jl(pn.bind(null,e,Qe,bt),r);break}pn(e,Qe,bt);break;case 5:pn(e,Qe,bt);break;default:throw Error(d(329))}}}return Ge(e,Se()),e.callbackNode===n?pu.bind(null,e):null}function xs(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(fn(e,t).flags|=256),e=Li(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&ws(t)),e}function ws(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function xd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!ft(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~hs,t&=~ji,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function mu(e){if((ne&6)!==0)throw Error(d(327));Un();var t=Ar(e,0);if((t&1)===0)return Ge(e,Se()),null;var n=Li(e,t);if(e.tag!==0&&n===2){var r=Ji(e);r!==0&&(t=r,n=xs(e,r))}if(n===1)throw n=Cr,fn(e,0),Jt(e,t),Ge(e,Se()),n;if(n===6)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,Qe,bt),Ge(e,Se()),null}function ks(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===0&&(Bn=Se()+500,ii&&Yt())}}function dn(e){Xt!==null&&Xt.tag===0&&(ne&6)===0&&Un();var t=ne;ne|=1;var n=at.transition,r=ue;try{if(at.transition=null,ue=1,e)return e()}finally{ue=r,at.transition=n,ne=t,(ne&6)===0&&Yt()}}function Ss(){tt=An.current,ye(An)}function fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qc(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(Ll(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ni();break;case 3:In(),ye($e),ye(Ie),$l();break;case 5:Wl(r);break;case 4:In();break;case 13:ye(xe);break;case 19:ye(xe);break;case 10:Ol(r.type._context);break;case 22:case 23:Ss()}n=n.return}if(ze=e,_e=e=Zt(e.current,null),be=tt=t,Pe=0,Cr=null,hs=ji=cn=0,Qe=_r=null,on!==null){for(t=0;t<on.length;t++)if(n=on[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}on=null}return e}function hu(e,t){do{var n=_e;try{if(Il(),mi.current=vi,hi){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hi=!1}if(un=0,Te=Ee=we=null,yr=!1,vr=0,ms.current=null,n===null||n.return===null){Pe=1,Cr=t,_e=null;break}e:{var l=e,o=n.return,a=n,c=t;if(t=be,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var y=c,w=a,k=w.tag;if((w.mode&1)===0&&(k===0||k===11||k===15)){var x=w.alternate;x?(w.updateQueue=x.updateQueue,w.memoizedState=x.memoizedState,w.lanes=x.lanes):(w.updateQueue=null,w.memoizedState=null)}var T=Ba(o);if(T!==null){T.flags&=-257,Ua(T,o,a,l,t),T.mode&1&&Aa(l,y,t),t=T,c=y;var b=t.updateQueue;if(b===null){var I=new Set;I.add(c),t.updateQueue=I}else b.add(c);break e}else{if((t&1)===0){Aa(l,y,t),Cs();break e}c=Error(d(426))}}else if(ve&&a.mode&1){var Ce=Ba(o);if(Ce!==null){(Ce.flags&65536)===0&&(Ce.flags|=256),Ua(Ce,o,a,l,t),Dl(On(c,a));break e}}l=c=On(c,a),Pe!==4&&(Pe=2),_r===null?_r=[l]:_r.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var m=Oa(l,c,t);ca(l,m);break e;case 1:a=c;var f=l.type,h=l.stateNode;if((l.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(qt===null||!qt.has(h)))){l.flags|=65536,t&=-t,l.lanes|=t;var S=Fa(l,a,t);ca(l,S);break e}}l=l.return}while(l!==null)}vu(n)}catch(A){t=A,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function gu(){var e=_i.current;return _i.current=vi,e===null?vi:e}function Cs(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),ze===null||(cn&268435455)===0&&(ji&268435455)===0||Jt(ze,be)}function Li(e,t){var n=ne;ne|=2;var r=gu();(ze!==e||be!==t)&&(bt=null,fn(e,t));do try{wd();break}catch(i){hu(e,i)}while(!0);if(Il(),ne=n,_i.current=r,_e!==null)throw Error(d(261));return ze=null,be=0,Pe}function wd(){for(;_e!==null;)yu(_e)}function kd(){for(;_e!==null&&!Vu();)yu(_e)}function yu(e){var t=ku(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?vu(e):_e=t,ms.current=null}function vu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=pd(n,t,tt),n!==null){_e=n;return}}else{if(n=md(n,t),n!==null){n.flags&=32767,_e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,_e=null;return}}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);Pe===0&&(Pe=5)}function pn(e,t,n){var r=ue,i=at.transition;try{at.transition=null,ue=1,Sd(e,t,n,r)}finally{at.transition=i,ue=r}return null}function Sd(e,t,n,r){do Un();while(Xt!==null);if((ne&6)!==0)throw Error(d(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(nc(e,l),e===ze&&(_e=ze=null,be=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ei||(Ei=!0,Su(br,function(){return Un(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=at.transition,at.transition=null;var o=ue;ue=1;var a=ne;ne|=4,ms.current=null,gd(e,n),au(n,e),Wc(Cl),Wr=!!Sl,Cl=Sl=null,e.current=n,yd(n),Qu(),ne=a,ue=o,at.transition=l}else e.current=n;if(Ei&&(Ei=!1,Xt=e,Pi=i),l=e.pendingLanes,l===0&&(qt=null),Xu(n.stateNode),Ge(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ni)throw Ni=!1,e=ys,ys=null,e;return(Pi&1)!==0&&e.tag!==0&&Un(),l=e.pendingLanes,(l&1)!==0?e===vs?jr++:(jr=0,vs=e):jr=0,Yt(),null}function Un(){if(Xt!==null){var e=lo(Pi),t=at.transition,n=ue;try{if(at.transition=null,ue=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,Pi=0,(ne&6)!==0)throw Error(d(331));var i=ne;for(ne|=4,L=e.current;L!==null;){var l=L,o=l.child;if((L.flags&16)!==0){var a=l.deletions;if(a!==null){for(var c=0;c<a.length;c++){var y=a[c];for(L=y;L!==null;){var w=L;switch(w.tag){case 0:case 11:case 15:Sr(8,w,l)}var k=w.child;if(k!==null)k.return=w,L=k;else for(;L!==null;){w=L;var x=w.sibling,T=w.return;if(ru(w),w===y){L=null;break}if(x!==null){x.return=T,L=x;break}L=T}}}var b=l.alternate;if(b!==null){var I=b.child;if(I!==null){b.child=null;do{var Ce=I.sibling;I.sibling=null,I=Ce}while(I!==null)}}L=l}}if((l.subtreeFlags&2064)!==0&&o!==null)o.return=l,L=o;else e:for(;L!==null;){if(l=L,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Sr(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,L=m;break e}L=l.return}}var f=e.current;for(L=f;L!==null;){o=L;var h=o.child;if((o.subtreeFlags&2064)!==0&&h!==null)h.return=o,L=h;else e:for(o=f;L!==null;){if(a=L,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Ci(9,a)}}catch(A){ke(a,a.return,A)}if(a===o){L=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,L=S;break e}L=a.return}}if(ne=i,Yt(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Ir,e)}catch{}r=!0}return r}finally{ue=n,at.transition=t}}return!1}function xu(e,t,n){t=On(n,t),t=Oa(e,t,1),e=Qt(e,t,1),t=We(),e!==null&&(qn(e,1,t),Ge(e,t))}function ke(e,t,n){if(e.tag===3)xu(e,e,n);else for(;t!==null;){if(t.tag===3){xu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=On(n,e),e=Fa(t,e,1),t=Qt(t,e,1),e=We(),t!==null&&(qn(t,1,e),Ge(t,e));break}}t=t.return}}function Cd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(be&n)===n&&(Pe===4||Pe===3&&(be&130023424)===be&&500>Se()-gs?fn(e,0):hs|=n),Ge(e,t)}function wu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Fr,Fr<<=1,(Fr&130023424)===0&&(Fr=4194304)));var n=We();e=Mt(e,t),e!==null&&(qn(e,t,n),Ge(e,n))}function _d(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wu(e,n)}function jd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(d(314))}r!==null&&r.delete(t),wu(e,n)}var ku;ku=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)Ve=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ve=!1,fd(e,t,n);Ve=(e.flags&131072)!==0}else Ve=!1,ve&&(t.flags&1048576)!==0&&ea(t,si,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ki(e,t),e=t.pendingProps;var i=Tn(t,Ie.current);bn(t,n),i=Ql(null,t,r,e,i,n);var l=Gl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(r)?(l=!0,ri(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bl(t),i.updater=xi,t.stateNode=i,i._reactInternals=t,es(t,r,e,n),t=is(null,t,r,!0,l,n)):(t.tag=0,ve&&l&&zl(t),Ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ki(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ed(r),e=mt(r,e),i){case 0:t=rs(null,t,r,e,n);break e;case 1:t=Qa(null,t,r,e,n);break e;case 11:t=Wa(null,t,r,e,n);break e;case 14:t=Ha(null,t,r,mt(r.type,e),n);break e}throw Error(d(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),rs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Qa(e,t,r,i,n);case 3:e:{if(Ga(t),e===null)throw Error(d(387));r=t.pendingProps,l=t.memoizedState,i=l.element,ua(e,t),fi(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=On(Error(d(423)),t),t=qa(e,t,r,n,i);break e}else if(r!==i){i=On(Error(d(424)),t),t=qa(e,t,r,n,i);break e}else for(et=Wt(t.stateNode.containerInfo.firstChild),Ze=t,ve=!0,pt=null,n=oa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mn(),r===i){t=Dt(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return fa(t),e===null&&Rl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,_l(r,i)?o=null:l!==null&&_l(r,l)&&(t.flags|=32),Va(e,t),Ue(e,t,o,n),t.child;case 6:return e===null&&Rl(t),null;case 13:return Xa(e,t,n);case 4:return Ul(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rn(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Wa(e,t,r,i,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,me(ui,r._currentValue),r._currentValue=o,l!==null)if(ft(l.value,o)){if(l.children===i.children&&!$e.current){t=Dt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=Rt(-1,n&-n),c.tag=2;var y=l.updateQueue;if(y!==null){y=y.shared;var w=y.pending;w===null?c.next=c:(c.next=w.next,w.next=c),y.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Fl(l.return,n,t),a.lanes|=n;break}c=c.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(d(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fl(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,bn(t,n),i=st(i),r=r(i),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,i=mt(r,t.pendingProps),i=mt(r.type,i),Ha(e,t,r,i,n);case 15:return $a(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),ki(e,t),t.tag=1,Ye(r)?(e=!0,ri(t)):e=!1,bn(t,n),ba(t,r,i),es(t,r,i,n),is(null,t,r,!0,e,n);case 19:return Ja(e,t,n);case 22:return Ya(e,t,n)}throw Error(d(156,t.tag))};function Su(e,t){return eo(e,t)}function Nd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new Nd(e,t,n,r)}function _s(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ed(e){if(typeof e=="function")return _s(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xe)return 11;if(e===nt)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mi(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")_s(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ne:return mn(n.children,i,l,t);case He:o=8,i|=8;break;case vt:return e=ut(12,n,t,i|2),e.elementType=vt,e.lanes=l,e;case Me:return e=ut(13,n,t,i),e.elementType=Me,e.lanes=l,e;case Ke:return e=ut(19,n,t,i),e.elementType=Ke,e.lanes=l,e;case he:return Ri(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ct:o=10;break e;case jt:o=9;break e;case Xe:o=11;break e;case nt:o=14;break e;case Re:o=16,r=null;break e}throw Error(d(130,e==null?e:typeof e,""))}return t=ut(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function mn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function Ri(e,t,n,r){return e=ut(22,e,r,t),e.elementType=he,e.lanes=n,e.stateNode={isHidden:!1},e}function js(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function Ns(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pd(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zi(0),this.expirationTimes=Zi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Es(e,t,n,r,i,l,o,a,c){return e=new Pd(e,t,n,a,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ut(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bl(l),e}function Td(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cu(e){if(!e)return $t;e=e._reactInternals;e:{if(tn(e)!==e||e.tag!==1)throw Error(d(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(d(171))}if(e.tag===1){var n=e.type;if(Ye(n))return Ko(e,n,t)}return t}function _u(e,t,n,r,i,l,o,a,c){return e=Es(n,r,!0,e,i,l,o,a,c),e.context=Cu(null),n=e.current,r=We(),i=Kt(n),l=Rt(r,i),l.callback=t??null,Qt(n,l,i),e.current.lanes=i,qn(e,i,r),Ge(e,r),e}function Di(e,t,n,r){var i=t.current,l=We(),o=Kt(i);return n=Cu(n),t.context===null?t.context=n:t.pendingContext=n,t=Rt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qt(i,t,o),e!==null&&(yt(e,i,o,l),di(e,i,o)),o}function bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ju(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ps(e,t){ju(e,t),(e=e.alternate)&&ju(e,t)}function zd(){return null}var Nu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ts(e){this._internalRoot=e}Ii.prototype.render=Ts.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));Di(e,t,null,null)},Ii.prototype.unmount=Ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){Di(null,e,null,null)}),t[Pt]=null}};function Ii(e){this._internalRoot=e}Ii.prototype.unstable_scheduleHydration=function(e){if(e){var t=ao();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&fo(e)}};function zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eu(){}function Ld(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var y=bi(o);l.call(y)}}var o=_u(t,r,e,0,null,!1,!1,"",Eu);return e._reactRootContainer=o,e[Pt]=o.current,ur(e.nodeType===8?e.parentNode:e),dn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var y=bi(c);a.call(y)}}var c=Es(e,0,!1,null,null,!1,!1,"",Eu);return e._reactRootContainer=c,e[Pt]=c.current,ur(e.nodeType===8?e.parentNode:e),dn(function(){Di(t,c,n,r)}),c}function Fi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var c=bi(o);a.call(c)}}Di(t,o,e,i)}else o=Ld(n,t,e,i,r);return bi(o)}so=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gn(t.pendingLanes);n!==0&&(el(t,n|1),Ge(t,Se()),(ne&6)===0&&(Bn=Se()+500,Yt()))}break;case 13:dn(function(){var r=Mt(e,1);if(r!==null){var i=We();yt(r,e,1,i)}}),Ps(e,1)}},tl=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=We();yt(t,e,134217728,n)}Ps(e,134217728)}},oo=function(e){if(e.tag===13){var t=Kt(e),n=Mt(e,t);if(n!==null){var r=We();yt(n,e,t,r)}Ps(e,t)}},ao=function(){return ue},uo=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}},Qi=function(e,t,n){switch(t){case"input":if($(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ti(r);if(!i)throw Error(d(90));Tr(r),$(r,i)}}}break;case"textarea":Fs(e,n);break;case"select":t=n.value,t!=null&&rt(e,!!n.multiple,t,!1)}},Qs=ks,Gs=dn;var Md={usingClientEntryPoint:!1,Events:[fr,En,ti,Ys,Vs,ks]},Nr={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rd={bundleType:Nr.bundleType,version:Nr.version,rendererPackageName:Nr.rendererPackageName,rendererConfig:Nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Js(e),e===null?null:e.stateNode},findFiberByHostInstance:Nr.findFiberByHostInstance||zd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{Ir=Ai.inject(Rd),wt=Ai}catch{}}return qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Md,qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zs(t))throw Error(d(200));return Td(e,t,null,n)},qe.createRoot=function(e,t){if(!zs(e))throw Error(d(299));var n=!1,r="",i=Nu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Es(e,1,!1,null,null,n,!1,r,i),e[Pt]=t.current,ur(e.nodeType===8?e.parentNode:e),new Ts(t)},qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=Js(t),e=e===null?null:e.stateNode,e},qe.flushSync=function(e){return dn(e)},qe.hydrate=function(e,t,n){if(!Oi(t))throw Error(d(200));return Fi(null,e,t,!0,n)},qe.hydrateRoot=function(e,t,n){if(!zs(e))throw Error(d(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=Nu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=_u(t,null,e,1,n??null,i,!1,l,o),e[Pt]=t.current,ur(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ii(t)},qe.render=function(e,t,n){if(!Oi(t))throw Error(d(200));return Fi(null,e,t,!1,n)},qe.unmountComponentAtNode=function(e){if(!Oi(e))throw Error(d(40));return e._reactRootContainer?(dn(function(){Fi(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1},qe.unstable_batchedUpdates=ks,qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Oi(n))throw Error(d(200));if(e==null||e._reactInternals===void 0)throw Error(d(38));return Fi(e,t,n,!1,r)},qe.version="18.3.1-next-f1338f8080-20240426",qe}var bu;function Wd(){if(bu)return Rs.exports;bu=1;function g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g)}catch(u){console.error(u)}}return g(),Rs.exports=Ud(),Rs.exports}var Iu;function Hd(){if(Iu)return Bi;Iu=1;var g=Wd();return Bi.createRoot=g.createRoot,Bi.hydrateRoot=g.hydrateRoot,Bi}var $d=Hd();const Yd=Ou($d);function Vd({energy:g}){const d=Math.ceil(g/100*10),C=Array(10).fill(0).map((_,E)=>E<d?"filled":"empty");return s.jsxs("div",{className:"energy-container",children:[s.jsxs("h3",{children:["Energy: ",g,"/100"]}),s.jsx("div",{className:"energy-bar",children:C.map((_,E)=>s.jsx("div",{className:`energy-segment ${_}`,title:`${_==="filled"?"Energy available":"Energy depleted"}`},E))})]})}function Qd({codingSkill:g,daysSinceActivity:u=0}){const d=Math.min(g,100),C=u>1;return s.jsxs("div",{className:"skill-container",children:[s.jsxs("div",{className:"skill-header",children:[s.jsxs("h3",{children:["Coding Skill: ",g]}),C&&s.jsx("span",{className:"decay-warning",children:"⚠️ Skills decay without practice"})]}),s.jsx("div",{className:"skill-bar",children:s.jsx("div",{className:`skill-progress ${C?"decay-risk":""}`,style:{width:`${d}%`},title:`Coding Skill: ${g}`})})]})}const Pr=[{id:1,name:"Chat over a cup of tea",energyCost:3,bondIncrease:8},{id:2,name:"Go for coffee",energyCost:5,bondIncrease:10},{id:3,name:"Play ping pong",energyCost:8,bondIncrease:12},{id:4,name:"Send memes",energyCost:2,bondIncrease:6},{id:5,name:"Do yoga together",energyCost:7,bondIncrease:11},{id:6,name:"Go for a walk",energyCost:6,bondIncrease:10},{id:7,name:"Get candy from the convenience store",energyCost:4,bondIncrease:7},{id:8,name:"Hangout in the chill room",energyCost:3,bondIncrease:7},{id:9,name:"Play video games",energyCost:6,bondIncrease:12},{id:10,name:"Discuss politics",energyCost:7,bondIncrease:9},{id:11,name:"Discuss coding",energyCost:5,bondIncrease:10},{id:12,name:"Study together",energyCost:8,bondIncrease:11},{id:13,name:"Grab lunch together",energyCost:6,bondIncrease:12},{id:14,name:"Attend a meetup",energyCost:9,bondIncrease:14},{id:15,name:"Work on a side project",energyCost:10,bondIncrease:15},{id:16,name:"Give them a coding tip",energyCost:3,bondIncrease:8},{id:17,name:"Share a funny coding meme",energyCost:2,bondIncrease:6},{id:18,name:"Help debug their code",energyCost:8,bondIncrease:14},{id:19,name:"Play chess",energyCost:5,bondIncrease:9},{id:20,name:"Get bubble tea",energyCost:4,bondIncrease:8}];function Gd(g,u){const d=Object.keys(g),C=d[Math.floor(Math.random()*d.length)];return{...u.find(E=>E.name===C)||{name:C},bondValue:g[C]}}function qd(g,u,d){const _=(g[u]||0)+d,E=Math.max(-100,Math.min(100,_));return{...g,[u]:E}}function Xd(g,u){const d=g.likes||[],C=g.dislikes||[];let _=u.bondIncrease,E="neutral",R="";return d.includes(u.id)?(_=Math.round(u.bondIncrease*1.5),E="like",R=`${g.name}'s face lit up! They really enjoyed ${u.name}! Your bond increased by ${_}.`):C.includes(u.id)?(_=-Math.round(u.bondIncrease*1),E="dislike",R=`Oops! ${g.name} clearly disliked this activity. Your bond decreased by ${Math.abs(_)}.`):R=`You had a nice time with ${g.name}. Your bond increased by ${_}.`,{bondChange:_,reaction:E,message:R}}function Kd({member:g,socialBonds:u,discoveredInfo:d,getRelationshipStatus:C,onClose:_}){var P,Y;const E=d[g.name]||{},R=u[g.name]||0,M=R<0;return s.jsx("div",{className:"member-modal-overlay",onClick:_,children:s.jsxs("div",{className:"member-modal-content",onClick:j=>j.stopPropagation(),children:[s.jsxs("div",{className:`member-modal-header ${M?"negative":"positive"}`,children:[s.jsx("h3",{children:g.name}),s.jsx("button",{className:"modal-close-btn",onClick:_,children:"×"})]}),s.jsxs("div",{className:"member-modal-body",children:[g.expertise&&E.expertise?s.jsxs("div",{className:"member-detail",children:[s.jsx("span",{className:"detail-label",children:"Expertise:"}),s.jsx("span",{className:"detail-value",children:g.expertise})]}):s.jsxs("div",{className:"member-detail undiscovered",children:[s.jsx("span",{className:"detail-label",children:"Expertise:"}),s.jsx("span",{className:"detail-value",children:"Unknown"})]}),g.personality&&E.personality?s.jsxs("div",{className:"member-detail",children:[s.jsx("span",{className:"detail-label",children:"Personality:"}),s.jsx("span",{className:"detail-value",children:g.personality})]}):s.jsxs("div",{className:"member-detail undiscovered",children:[s.jsx("span",{className:"detail-label",children:"Personality:"}),s.jsx("span",{className:"detail-value",children:"Unknown"})]}),g.hobby&&E.hobby?s.jsxs("div",{className:"member-detail",children:[s.jsx("span",{className:"detail-label",children:"Hobby:"}),s.jsx("span",{className:"detail-value",children:g.hobby})]}):s.jsxs("div",{className:"member-detail undiscovered",children:[s.jsx("span",{className:"detail-label",children:"Hobby:"}),s.jsx("span",{className:"detail-value",children:"Unknown"})]}),g.background&&E.background?s.jsxs("div",{className:"member-detail",children:[s.jsx("span",{className:"detail-label",children:"Background:"}),s.jsx("span",{className:"detail-value",children:g.background})]}):s.jsxs("div",{className:"member-detail undiscovered",children:[s.jsx("span",{className:"detail-label",children:"Background:"}),s.jsx("span",{className:"detail-value",children:"Unknown"})]}),u[g.name]!==void 0&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"member-detail",children:[s.jsx("span",{className:"detail-label",children:"Bond Strength:"}),s.jsxs("span",{className:`detail-value ${M?"negative":"positive"}`,children:[R,"/100"]})]}),s.jsxs("div",{className:"member-detail",children:[s.jsx("span",{className:"detail-label",children:"Relationship:"}),s.jsx("span",{className:`detail-value ${M?"negative":"positive"}`,children:C(R)})]})]}),u[g.name]!==void 0&&(R>=60||R<=-60)&&(((P=g.likes)==null?void 0:P.length)>0||((Y=g.dislikes)==null?void 0:Y.length)>0)&&s.jsxs("div",{className:"member-preferences",children:[s.jsx("h4",{children:"Activity Preferences"}),s.jsxs("div",{className:"preferences-columns",children:[s.jsxs("div",{className:"preferences-column",children:[s.jsx("h5",{children:"Likes"}),s.jsx("ul",{className:"preferences-list likes-list",children:g.likes&&g.likes.length>0?g.likes.map(j=>{const D=Pr.find(O=>O.id===j);return D?s.jsx("li",{className:"preference-item like-item",children:D.name},`like-${j}`):null}):s.jsx("li",{className:"preference-item empty",children:"No known likes"})})]}),s.jsxs("div",{className:"preferences-column",children:[s.jsx("h5",{children:"Dislikes"}),s.jsx("ul",{className:"preferences-list dislikes-list",children:g.dislikes&&g.dislikes.length>0?g.dislikes.map(j=>{const D=Pr.find(O=>O.id===j);return D?s.jsx("li",{className:"preference-item dislike-item",children:D.name},`dislike-${j}`):null}):s.jsx("li",{className:"preference-item empty",children:"No known dislikes"})})]})]})]})]})]})})}function Jd({socialBonds:g,cohortMembers:u=[],discoveredInfo:d={}}){const[C,_]=K.useState(null),E=100,R=Object.entries(g).sort((j,D)=>D[1]-j[1]),M=j=>j>=100?"Best Friend":j>=80?"Close Friend":j>=60?"Good Friend":j>=40?"Friend":j>=1?"Acquaintance":j===0?"Classmate":j>=-40?"Awkward":j>=-60?"Tense":j>=-80?"Hostile":j>=-90?"Enemy":"Nemesis",P=j=>u.find(D=>D.name===j)||{name:j},Y=j=>{const D=P(j);_(D)};return s.jsxs("div",{className:"social-bonds-container",children:[s.jsxs("h3",{children:["Classmates (",R.length,")"]}),s.jsx("div",{className:"bonds-grid",children:R.map(([j,D])=>{const O=M(D);P(j),d[j];const ee=D<0,re=D>0;return s.jsxs("div",{className:`bond-item ${ee?"negative-bond":re?"positive-bond":""}`,onClick:()=>Y(j),children:[s.jsxs("div",{className:"bond-header",children:[s.jsx("span",{className:"bond-name",children:j}),s.jsxs("span",{className:`bond-value ${ee?"negative":"positive"}`,children:[D,"/100"]})]}),s.jsx("div",{className:"bond-bar",children:s.jsx("div",{className:`bond-progress ${ee?"negative":"positive"}`,style:{width:`${Math.min(Math.abs(D),E)}%`},title:`${j}: ${D}`})}),s.jsx("div",{className:`relationship-status ${ee?"negative":"positive"}`,children:O})]},j)})}),C&&s.jsx(Kd,{member:C,socialBonds:g,discoveredInfo:d,getRelationshipStatus:M,onClose:()=>_(null)})]})}function Fu({day:g,actionsRemaining:u,onEndDay:d,page:C}){const _=["January","February","March","April","May","June","July","August","September","October","November","December"],R=g,M=Math.floor((R-1)/30),P=(R-1)%30+1,Y=_[M%12],j=Math.floor(M/12)+1,D=(R-1)%7,O=D>=5,ee=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],re=()=>{const F=[],de=(R-P+1-1)%7,ae=de;for(let je=1;je<=30;je++){const fe=(de+je-1)%7,Ne=fe>=5;F.push({dayNum:je,isWeekend:Ne,dayOfWeek:fe})}return{days:F,emptyDays:ae}},{days:Q,emptyDays:q}=re();return s.jsxs("div",{className:"calendar-container",children:[s.jsxs("div",{className:"calendar-header",children:[s.jsxs("h2",{children:[Y," ",j]}),s.jsxs("div",{className:"calendar-info",children:[s.jsxs("p",{children:["Bootcamp Day: ",R]}),s.jsxs("p",{children:["Today: ",ee[D]]}),O?s.jsx("p",{className:"weekend-label",children:"No Bootcamp"}):s.jsxs("p",{children:["Actions: ",u,"/8"]})]})]}),s.jsxs("div",{className:"calendar-grid",children:[["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((F,se)=>s.jsx("div",{className:`calendar-day-name ${se>=5?"weekend":""}`,children:F},`header-${se}`)),Array.from({length:q}).map((F,se)=>s.jsx("div",{className:"calendar-day empty"},`empty-${se}`)),Q.map(({dayNum:F,isWeekend:se})=>s.jsx("div",{className:`calendar-day ${F===P?"current":""} ${se?"weekend":""}`,children:F},`day-${F}`))]}),s.jsx("div",{className:"calendar-actions",children:s.jsx("button",{onClick:d,className:"end-day-btn",children:O?"Skip to Monday":"End Day Early"})})]})}function Zd({practiceCoding:g,socialize:u,rest:d,studyPython:C}){return s.jsxs("div",{className:"actions-panel",children:[s.jsx("h1",{children:"Daily Actions"}),s.jsxs("div",{className:"actions-buttons",children:[s.jsx("button",{onClick:C,children:"Study Python"}),s.jsx("button",{onClick:g,children:"Practice Coding"}),s.jsx("button",{onClick:u,children:"Socialize"}),s.jsx("button",{onClick:d,children:"Rest"})]})]})}const Ui=[{id:1,title:"Sum Two Numbers",description:"Write a function that returns the sum of two numbers.",initialCode:`def add_numbers(a, b):
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
print(result)`}];function ef(g,u){let d="",C=!1;switch(g){case 1:u.includes("return a + b")||u.includes("return b + a")?(d="8",C=!0):d="Error: The function doesn't return the correct value.";break;case 2:u.includes("return")&&(u.includes("Hello")||u.includes("hello"))&&u.includes("name")&&(u.includes("+")||u.includes('f"'))?(d="Hello, Alex!",C=!0):d="Error: The function doesn't return the correct greeting.";break;case 3:u.includes("return text[::-1]")||u.includes("''.join(reversed(")?(d="olleh",C=!0):d="Error: The function doesn't reverse the string correctly.";break;case 4:u.includes("return number % 2 == 0")||u.includes("return not number % 2")?(d="True",C=!0):d="Error: The function doesn't correctly identify even numbers.";break;case 5:u.includes("return")&&u.includes("celsius * 9/5")&&u.includes("+ 32")||u.includes("return")&&u.includes("celsius * (9/5)")&&u.includes("+ 32")?(d="77.0",C=!0):d="Error: The function doesn't convert temperature correctly.";break;case 6:u.includes("return sum(numbers) / len(numbers)")?(d="12.5",C=!0):d="Error: The function doesn't calculate the average correctly.";break;case 7:u.includes("return text * times")?(d="abcabcabc",C=!0):d="Error: The function doesn't repeat the string correctly.";break;case 8:u.includes("return len(sentence.split())")||u.includes("split()")&&u.includes("len(")&&u.includes("return")?(d="6",C=!0):d="Error: The function doesn't count words correctly.";break;case 9:u.includes("return max(numbers)")||u.includes("max =")&&u.includes("return max")||u.includes("largest =")&&u.includes("return largest")?(d="14",C=!0):d="Error: The function doesn't find the largest number correctly.";break;case 10:(u.includes("vowels")||u.includes("aeiou"))&&(u.includes("count += 1")||u.includes("count = count + 1")||u.includes("count+=1")||u.includes("count++")||u.includes("count = len"))?(d="3",C=!0):d="Error: The function doesn't count vowels correctly.";break;case 11:u.includes("split")&&u.includes("join")&&u.includes("[::-1]")||u.includes("split")&&u.includes("reversed")&&u.includes("join")?(d="olleH dlrow",C=!0):d="Error: The function doesn't reverse words correctly.";break;case 12:u.includes("if number % 3 == 0 and number % 5 == 0")&&u.includes("return 'FizzBuzz'")&&u.includes("return 'Fizz'")&&u.includes("return 'Buzz'")?(d="FizzBuzz",C=!0):d="Error: The function doesn't implement FizzBuzz correctly.";break;case 13:u.includes("seen = set()")&&u.includes("if item not in seen")||u.includes("result = []")&&u.includes("not in result")||u.includes("list(dict.fromkeys")?(d="[1, 2, 3, 4, 5]",C=!0):d="Error: The function doesn't remove duplicates correctly.";break;case 14:u.includes("return [")&&u.includes("for")&&u.includes("if")&&u.includes(">=")||u.includes("filter")&&u.includes("lambda")?(d="[6, 7, 9]",C=!0):d="Error: The function doesn't filter the list correctly.";break;case 15:u.includes("split")&&u.includes("capitalize")&&u.includes("join")||u.includes("split")&&u.includes("title()")?(d="Python Programming Is Fun",C=!0):d="Error: The function doesn't convert to title case correctly.";break;case 16:u.includes("dict(zip(")||u.includes("{")&&u.includes("for")&&u.includes("in zip(")?(d="{'a': 1, 'b': 2, 'c': 3}",C=!0):d="Error: The function doesn't create a dictionary correctly.";break;case 17:u.includes("text == text[::-1]")||u.includes("reversed(")&&u.includes("join")||u.includes("for")&&u.includes("reversed")?(d="True",C=!0):d="Error: The function doesn't check palindromes correctly.";break;case 18:u.includes("n = len(numbers) + 1")&&u.includes("expected_sum")&&u.includes("actual_sum")&&u.includes("return expected_sum - actual_sum")||u.includes("range")&&u.includes("set")&&u.includes("difference")?(d="3",C=!0):d="Error: The function doesn't find the missing number correctly.";break;case 19:u.includes("sorted(str1.lower()) == sorted(str2.lower())")||u.includes("Counter")&&u.includes("str1")&&u.includes("str2")||u.includes("sort")&&u.includes("join")&&u.includes("==")?(d="True",C=!0):d="Error: The function doesn't check anagrams correctly.";break;case 20:u.includes("for")&&u.includes("range")&&u.includes("number % i == 0")||u.includes("while")&&u.includes("number % i == 0")?(d="True",C=!0):d="Error: The function doesn't check for prime numbers correctly.";break;case 21:u.includes("if isinstance(item, list)")&&u.includes("recursion")||u.includes("flatten_list(item)")||u.includes("from itertools import chain")||u.includes("from collections import Iterable")?(d="[1, 2, 3, 4, 5, 6]",C=!0):d="Error: The function doesn't flatten the nested list correctly.";break;case 22:u.includes("set(list1) & set(list2)")||u.includes("intersection")&&u.includes("set")||u.includes("for")&&u.includes("if")&&u.includes("in")&&u.includes("list1")&&u.includes("list2")?(d="[4, 5]",C=!0):d="Error: The function doesn't find common elements correctly.";break;default:d="Error: Unknown challenge."}return{output:d,isCorrect:C}}function tf({onComplete:g,onClose:u,currentLevel:d=0}){const[C,_]=K.useState(""),[E,R]=K.useState(""),[M,P]=K.useState(null),[Y,j]=K.useState(!1),[D,O]=K.useState(!1),ee=F=>{const se=Math.min(F,Ui.length-1);return Ui[se]};K.useEffect(()=>{const F=ee(d);P(F),_(F.initialCode),R(""),j(!1),O(!1)},[d]);const re=()=>{try{if(D)return;R("");const F=ef(M.id,C);R(F.output),j(F.isCorrect),F.isCorrect&&(O(!0),R(se=>se+`

✓ Great job! Your solution is correct! Returning to main game...`),setTimeout(()=>{g&&g()},3500))}catch(F){R(`Error executing code: ${F.message}`)}},Q=()=>{R(`Hint: ${M.hint}`)},q=()=>{_(M.solution),R("Solution revealed! You can run it to see how it works.")};return M?s.jsx("div",{className:"coding-practice-modal",children:s.jsxs("main",{className:"coding-practice-container",children:[s.jsxs("div",{className:"coding-header",children:[s.jsx("h2",{children:M.title}),s.jsx("button",{className:"close-button",onClick:u,disabled:D,children:"×"})]}),s.jsxs("div",{className:"challenge-description",children:[s.jsx("p",{children:M.description}),s.jsx("div",{className:"challenge-difficulty",children:s.jsxs("span",{children:["Difficulty: ",d+1,"/",Ui.length]})})]}),s.jsx("div",{className:"code-editor",children:s.jsx("textarea",{value:C,onChange:F=>_(F.target.value),placeholder:"Write your Python code here...",spellCheck:"false",disabled:D})}),s.jsxs("div",{className:"terminal",children:[s.jsx("div",{className:"terminal-header",children:s.jsx("span",{children:"Terminal Output"})}),s.jsx("div",{className:"terminal-content",children:E?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"terminal-command",children:"$ python solution.py"}),s.jsx("div",{className:`terminal-output ${Y?"success":""}`,children:E}),Y&&!D&&s.jsx("div",{className:"success-message",children:"✓ Great job! Your solution is correct!"})]}):s.jsx("div",{className:"terminal-prompt",children:"Run your code to see output here."})})]}),s.jsxs("div",{className:"coding-actions",children:[s.jsx("button",{onClick:re,disabled:D,children:"Run Code"}),s.jsx("button",{onClick:Q,disabled:D,children:"Hint"}),s.jsx("button",{onClick:q,disabled:D,children:"Show Solution"})]})]})}):s.jsx("div",{children:"Loading challenge..."})}function nf({person:g,onComplete:u,onClose:d,onDiscoverInfo:C}){const[_,E]=K.useState(null),[R,M]=K.useState([]),[P,Y]=K.useState(null),[j,D]=K.useState(null),[O,ee]=K.useState(!1);K.useEffect(()=>{const se=[...Pr].sort(()=>.5-Math.random()).slice(0,4);M(se)},[g.name]);const re=F=>{let de=[...["expertise","personality","hobby","background"]];F.id===10||F.id===11?de.push("personality","personality","expertise","expertise"):F.id===3||F.id===9||F.id===19?de.push("hobby","hobby","personality"):F.id===12||F.id===15||F.id===18?de.push("expertise","expertise","background"):(F.id===7||F.id===8||F.id===13||F.id===20)&&de.push("hobby","personality");const ae=de[Math.floor(Math.random()*de.length)];return g[ae]?{attribute:ae,value:g[ae]}:{attribute:"personality",value:g.personality||"Mysterious"}},Q=F=>{E(F);const se=re(F);Y(se);const de=Xd(g,F);D(de),ee(!0)},q=()=>{_&&u(_,P,j)};return s.jsx("div",{className:"socialize-modal-overlay",children:s.jsxs("div",{className:"socialize-modal-content",children:[s.jsxs("div",{className:"socialize-modal-header",children:[s.jsxs("h3",{children:["Socialize with ",g.name]}),s.jsx("button",{className:"modal-close-btn",onClick:d,children:"×"})]}),s.jsx("div",{className:"socialize-modal-body",children:O?s.jsxs("div",{className:"results-container",children:[s.jsx("h4",{children:"Activity Results"}),s.jsxs("div",{className:"activity-summary",children:["You chose to ",s.jsx("strong",{children:_.name})," with"," ",g.name,"."]}),j&&s.jsxs("div",{className:`reaction-message ${j.reaction}`,children:[s.jsx("p",{children:j.message}),j.reaction==="dislike"&&s.jsxs("p",{className:"extra-warning",children:[s.jsx("strong",{children:"Be careful!"})," Some activities can damage your relationship."]})]}),P&&s.jsx("div",{className:"discovery-message",children:s.jsxs("p",{children:["You learned that ",g.name,"'s ",P.attribute," ",'is "',P.value,'"!']})}),s.jsxs("div",{className:"bond-change-summary",children:[s.jsxs("div",{className:"bond-result",children:["Bond Change:"," ",s.jsxs("span",{className:j.bondChange>=0?"positive-bond":"negative-bond",children:[j.bondChange>=0?"+":"",j.bondChange]})]}),s.jsxs("div",{className:"energy-spent",children:["Energy Spent:"," ",s.jsxs("span",{className:"negative-energy",children:["-",_.energyCost]})]})]}),s.jsx("button",{className:"continue-button",onClick:q,children:"Continue"})]}):s.jsxs(s.Fragment,{children:[s.jsxs("p",{className:"socialize-prompt",children:["What would you like to do with ",g.name,"?"]}),s.jsxs("div",{className:"bond-status",children:["Current Bond:"," ",s.jsx("span",{className:g.bondValue<0?"negative-bond":"positive-bond",children:g.bondValue})]}),s.jsx("div",{className:"activity-options",children:R.map(F=>s.jsxs("button",{className:`activity-button ${_===F?"selected":""}`,onClick:()=>Q(F),disabled:_!==null,children:[s.jsx("span",{className:"activity-name",children:F.name}),s.jsx("div",{className:"activity-details",children:s.jsxs("span",{className:"energy-cost",children:["Energy: -",F.energyCost]})})]},F.id))})]})})]})})}function rf({onComplete:g,onClose:u,currentLevel:d=0}){const[C,_]=K.useState(null),E=[{id:1,title:"Hello World - Your First Python Program",content:`Every programmer starts with a "Hello World" program. In Python, it's incredibly simple:

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

Understanding common design patterns helps write better, more maintainable code.`,tip:"Design patterns are useful templates, but don't force them where they don't fit. Python's dynamic nature often allows for simpler solutions than traditional design patterns used in languages like Java."}];return K.useEffect(()=>{const R=Math.min(d,E.length-1);_(E[R])},[d]),C?s.jsx("div",{className:"study-python-modal",children:s.jsxs("div",{className:"study-python-container",children:[s.jsxs("div",{className:"study-header",children:[s.jsx("h2",{children:C.title}),s.jsx("button",{className:"close-button",onClick:u,children:"×"})]}),s.jsxs("div",{className:"lesson-content",children:[s.jsx("div",{className:"lesson-text",dangerouslySetInnerHTML:{__html:C.content.replace(/```python([\s\S]*?)```/g,'<pre class="code-block">$1</pre>')}}),s.jsxs("div",{className:"lesson-tip",children:[s.jsx("h4",{children:"💡 Pro Tip:"}),s.jsx("p",{children:C.tip})]})]}),s.jsx("div",{className:"study-actions",children:s.jsx("button",{onClick:g,children:"Got it! (+3 Coding Skill)"})})]})}):s.jsx("div",{children:"Loading lesson..."})}function lf({onClose:g,onStartNewDay:u}){return s.jsx("div",{className:"energy-modal-overlay",children:s.jsxs("div",{className:"energy-modal",children:[s.jsxs("div",{className:"energy-modal-header",children:[s.jsx("h3",{children:"Low Energy"}),s.jsx("button",{className:"modal-close-btn",onClick:g,children:"×"})]}),s.jsxs("div",{className:"energy-modal-body",children:[s.jsx("div",{className:"energy-icon",children:"⚡"}),s.jsx("p",{children:"You're too tired to continue!"}),s.jsx("p",{className:"energy-message",children:"Your energy is too low for this activity. Would you like to rest or end the day?"})]}),s.jsxs("div",{className:"energy-modal-footer",children:[s.jsx("button",{className:"rest-button",onClick:g,children:"Rest (+20 Energy)"}),s.jsx("button",{className:"end-day-button",onClick:u,children:"End Day"})]})]})})}function sf({onStartNewDay:g,daySummary:u}){return s.jsx("div",{className:"day-summary-modal-overlay",children:s.jsxs("div",{className:"day-summary-modal",children:[s.jsx("div",{className:"day-summary-header",children:s.jsx("h3",{children:"Day Complete"})}),s.jsxs("div",{className:"day-summary-body",children:[s.jsx("div",{className:"day-icon",children:"🌙"}),s.jsx("h3",{children:"Daily Summary"}),s.jsxs("div",{className:"summary-stats",children:[s.jsxs("div",{className:"summary-item",children:[s.jsx("span",{className:"summary-label",children:"Coding Skill Gained:"}),s.jsxs("span",{className:"summary-value positive",children:["+",u.skillGained]})]}),u.skillDecayed>0&&s.jsxs("div",{className:"summary-item",children:[s.jsx("span",{className:"summary-label",children:"Coding Skill Lost:"}),s.jsxs("span",{className:"summary-value negative",children:["-",u.skillDecayed]})]}),s.jsxs("div",{className:"summary-item",children:[s.jsx("span",{className:"summary-label",children:"Energy Level:"}),s.jsxs("span",{className:`summary-value ${u.energyLevel<30?"negative":"neutral"}`,children:[u.energyLevel,"/100"]})]}),u.newRelationships>0&&s.jsxs("div",{className:"summary-item",children:[s.jsx("span",{className:"summary-label",children:"New Relationships:"}),s.jsxs("span",{className:"summary-value positive",children:["+",u.newRelationships]})]}),u.bondsImproved>0&&s.jsxs("div",{className:"summary-item",children:[s.jsx("span",{className:"summary-label",children:"Bonds Improved:"}),s.jsxs("span",{className:"summary-value positive",children:["+",u.bondsImproved]})]}),u.challengesCompleted>0&&s.jsxs("div",{className:"summary-item",children:[s.jsx("span",{className:"summary-label",children:"Coding Challenges Completed:"}),s.jsxs("span",{className:"summary-value positive",children:["+",u.challengesCompleted]})]}),u.lessonsLearned>0&&s.jsxs("div",{className:"summary-item",children:[s.jsx("span",{className:"summary-label",children:"Python Lessons Completed:"}),s.jsxs("span",{className:"summary-value positive",children:["+",u.lessonsLearned]})]})]}),s.jsxs("div",{className:"day-tip",children:[s.jsx("strong",{children:"Tip:"})," ",u.tip||"Balance your activities and make sure to rest when your energy gets low!"]})]}),s.jsx("div",{className:"day-summary-footer",children:s.jsx("button",{className:"next-day-button",onClick:g,children:"Start Next Day"})})]})})}const of=[{id:"sick_day",name:"Sick Day",description:"You woke up with a terrible cold and can barely get out of bed.",type:"negative",rarity:"rare",effect:{actionsLost:"all",energyChange:-20,skillChange:0,bondsChange:0}},{id:"train_delay",name:"Train Delay",description:"Signal failures have caused major delays on your commute.",type:"negative",rarity:"uncommon",effect:{actionsLost:2,energyChange:-5,skillChange:0,bondsChange:0}},{id:"computer_issues",name:"Computer Issues",description:"Your laptop battery died and you forgot your charger.",type:"negative",rarity:"common",effect:{actionsLost:2,energyChange:-10,skillChange:0,bondsChange:0}},{id:"bad_sleep",name:"Restless Night",description:"You had trouble sleeping last night. You feel tired.",type:"negative",rarity:"common",effect:{actionsLost:0,energyChange:-15,skillChange:0,bondsChange:0}},{id:"missed_alarm",name:"Missed Alarm",description:"You slept through your alarm and had to rush to class.",type:"negative",rarity:"uncommon",effect:{actionsLost:3,energyChange:-10,skillChange:0,bondsChange:0}},{id:"cohort_fallout",name:"An Argument breaks out among the cohort over a project.",description:"The cohort is divided over the best approach to a project. Tensions are high.",type:"negative",rarity:"uncommon",effect:{actionsLost:0,energyChange:-5,skillChange:0,bondsChange:-10,bondsChangeType:"all"}},{id:"internet_outage",name:"Internet Outage",description:"Your internet connection is unstable today. Video calls keep dropping and pushing code to GitHub is a nightmare.",type:"negative",rarity:"uncommon",effect:{actionsLost:2,energyChange:-10,skillChange:0,bondsChange:0}},{id:"difficult_assignment",name:"Particularly Difficult Assignment",description:"Today's coding assignment is especially challenging. Your brain hurts from the mental gymnastics required.",type:"negative",rarity:"common",effect:{actionsLost:0,energyChange:-15,skillChange:2,bondsChange:0}},{id:"instructor_absence",name:"Instructor Calls in Sick",description:"Your instructor is out sick today. The substitute isn't as familiar with the material, making today's lesson confusing.",type:"negative",rarity:"rare",effect:{actionsLost:0,energyChange:-10,skillChange:-3,bondsChange:3,bondsChangeType:"all"}},{id:"sunny_day_drinks",name:"After-School Drinks",description:"It's a beautiful sunny day and the whole cohort goes for drinks after class.",type:"positive",rarity:"common",effect:{actionsLost:0,energyChange:-5,skillChange:0,bondsChange:15,bondsChangeType:"all"}},{id:"coding_breakthrough",name:"Coding Breakthrough",description:"Something clicked in your brain! You now understand a concept that was confusing you.",type:"positive",rarity:"uncommon",effect:{actionsLost:0,energyChange:0,skillChange:8,bondsChange:0}},{id:"free_coffee",name:"Free Coffee",description:"A local coffee shop was giving out free samples near the bootcamp.",type:"positive",rarity:"common",effect:{actionsLost:0,energyChange:15,skillChange:0,bondsChange:0}},{id:"productive_morning",name:"Productive Morning",description:"You woke up early and feel exceptionally refreshed today.",type:"positive",rarity:"uncommon",effect:{actionsLost:-1,energyChange:10,skillChange:0,bondsChange:0}},{id:"group_project",name:"Successful Group Project",description:"Your team completed a mini-project with flying colors! Everyone's excited.",type:"positive",rarity:"rare",effect:{actionsLost:0,energyChange:0,skillChange:5,bondsChange:10,bondsChangeType:"all"}},{id:"inspirational_speaker",name:"Guest Speaker Visit",description:"A successful tech entrepreneur visited your bootcamp today and shared inspiring stories. You feel motivated!",type:"positive",rarity:"rare",effect:{actionsLost:0,energyChange:20,skillChange:3,bondsChange:5,bondsChangeType:"all"}},{id:"debugging_win",name:"Debugging Victory",description:"You fixed a bug that had been plaguing your code for days. The relief and satisfaction are tremendous!",type:"positive",rarity:"common",effect:{actionsLost:-1,energyChange:5,skillChange:5,bondsChange:0}},{id:"mentorship_opportunity",name:"Mentorship Session",description:"A senior developer volunteered to mentor your cohort today, providing valuable industry insights and tips.",type:"positive",rarity:"uncommon",effect:{actionsLost:0,energyChange:5,skillChange:7,bondsChange:3,bondsChangeType:"all"}}];function af(g=30){return Math.random()*100<g}function uf(){const g={common:3,uncommon:2,rare:1},u=[];of.forEach(C=>{const _=g[C.rarity]||1;for(let E=0;E<_;E++)u.push(C)});const d=Math.floor(Math.random()*u.length);return u[d]}const cf=({day:g,energy:u,codingSkill:d,actionsRemaining:C,cohortData:_,setEnergy:E,setCodingSkill:R,setActionsRemaining:M,setCohortData:P,setCurrentEvent:Y})=>{if(!((g-1)%7>=5)){if(af()){const O=uf();if(O.effect.actionsLost==="all")M(0);else{const ee=Math.max(0,C-O.effect.actionsLost);M(ee)}if(E(Math.max(0,Math.min(100,u+O.effect.energyChange))),R(d+O.effect.skillChange),O.effect.bondsChange!==0&&O.effect.bondsChangeType==="all"){const ee={};Object.keys(_.bonds).forEach(re=>{const Q=_.bonds[re],q=Math.max(-100,Math.min(100,Q+O.effect.bondsChange));ee[re]=q}),P({..._,bonds:ee})}return Y(O),!0}return!1}};function Wn(g){return(g-1)%7>=5}const df=[{name:"Fliss",expertise:"Front-end",personality:"Outgoing",hobby:"Hiking",background:"Graphic Design",likes:[],dislikes:[]},{name:"Louis",expertise:"Back-end",personality:"Analytical",hobby:"Chess",background:"Mathematics",likes:[],dislikes:[]},{name:"Imogen",expertise:"Full-stack",personality:"Creative",hobby:"Music",background:"Librarian",likes:[],dislikes:[]},{name:"Alister",expertise:"DevOps",personality:"Methodical",hobby:"Cooking",background:"IT Support",likes:[],dislikes:[]},{name:"Emily",expertise:"Mobile",personality:"Enthusiastic",hobby:"Photography",background:"Education",likes:[],dislikes:[]},{name:"Frank",expertise:"Database",personality:"Quiet",hobby:"Reading",background:"Accounting",likes:[],dislikes:[]},{name:"Dean",expertise:"UI/UX",personality:"Detail-oriented",hobby:"Painting",background:"Psychology",likes:[],dislikes:[]},{name:"Kate",expertise:"Front-end",personality:"Patient",hobby:"Gardening",background:"Customer Service",likes:[],dislikes:[]},{name:"Etienne",expertise:"Security",personality:"Careful",hobby:"Gaming",background:"Politics",likes:[],dislikes:[]},{name:"Arthur",expertise:"Full-stack",personality:"Resourceful",hobby:"Traveling",background:"Journalism",likes:[],dislikes:[]},{name:"Ben",expertise:"Back-end",personality:"Logical",hobby:"Sports",background:"Engineering",likes:[],dislikes:[]},{name:"Jake",expertise:"Mobile",personality:"Ambitious",hobby:"Fitness",background:"Healthcare",likes:[],dislikes:[]},{name:"Abbie",expertise:"UI/UX",personality:"Artistic",hobby:"Dancing",background:"Design",likes:[],dislikes:[]},{name:"Luke",expertise:"DevOps",personality:"Problem-solver",hobby:"DIY Projects",background:"Construction",likes:[],dislikes:[]},{name:"Calvin",expertise:"Data Science",personality:"Inquisitive",hobby:"Astronomy",background:"Research",likes:[],dislikes:[]}];function ff(g=5,u=10){const d=[...df].sort(()=>.5-Math.random()),C=Math.floor(Math.random()*(u-g+1))+g,E=d.slice(0,C).map(M=>{const Y=[...Pr.map(re=>re.id)].sort(()=>.5-Math.random()),j=Math.floor(Math.random()*3)+3,D=Y.slice(0,j),O=Math.floor(Math.random()*3)+2,ee=Y.slice(j,j+O);return{...M,likes:D,dislikes:ee}}),R={};return E.forEach(M=>{R[M.name]=0}),{members:E,bonds:R}}function pf({event:g,onClose:u}){const[d,C]=K.useState(!0);K.useEffect(()=>{g&&C(!0)},[g]);const _=()=>{C(!1),setTimeout(()=>{u&&u()},300)};if(!g)return null;const{energyChange:E,skillChange:R,actionsLost:M,bondsChange:P}=g.effect||{};return s.jsx("div",{className:`event-message-overlay ${d?"visible":"hidden"}`,children:s.jsxs("div",{className:`event-message ${g.type} ${d?"visible":"hidden"}`,children:[s.jsx("div",{className:"event-message-header",children:s.jsx("h3",{children:g.name})}),s.jsxs("div",{className:"event-message-body",children:[s.jsx("p",{children:g.description}),s.jsxs("div",{className:"event-effects",children:[E!==0&&s.jsxs("div",{className:`effect-item ${E>0?"positive":"negative"}`,children:[s.jsx("span",{className:"effect-icon",children:"⚡"}),s.jsx("span",{className:"effect-label",children:"Energy"}),s.jsxs("span",{className:"effect-value",children:[E>0?"+":"",E]})]}),R!==0&&s.jsxs("div",{className:`effect-item ${R>0?"positive":"negative"}`,children:[s.jsx("span",{className:"effect-icon",children:"💻"}),s.jsx("span",{className:"effect-label",children:"Coding Skill"}),s.jsxs("span",{className:"effect-value",children:[R>0?"+":"",R]})]}),M!==0&&s.jsxs("div",{className:`effect-item ${M<0?"positive":"negative"}`,children:[s.jsx("span",{className:"effect-icon",children:"⏱️"}),s.jsx("span",{className:"effect-label",children:"Actions"}),s.jsx("span",{className:"effect-value",children:M<0?"+"+Math.abs(M):M==="all"?"All Lost":"-"+M})]}),P!==0&&s.jsxs("div",{className:`effect-item ${P>0?"positive":"negative"}`,children:[s.jsx("span",{className:"effect-icon",children:"👥"}),s.jsx("span",{className:"effect-label",children:g.effect.bondsChangeType==="all"?"All Bonds":"Bond"}),s.jsxs("span",{className:"effect-value",children:[P>0?"+":"",P]})]})]})]}),s.jsx("div",{className:`event-message-footer ${g.type}`,children:s.jsx("button",{onClick:_,children:"Continue"})})]})})}function mf(){const[g,u]=K.useState(!1),[d,C]=K.useState(null),[_,E]=K.useState(!1),[R,M]=K.useState({skillGained:0,energyLevel:100,newRelationships:0,bondsImproved:0,challengesCompleted:0,lessonsLearned:0,tip:""}),[P,Y]=K.useState(100),[j,D]=K.useState(0),[O,ee]=K.useState(1),[re,Q]=K.useState(8),[q,F]=K.useState(!1),[se,de]=K.useState(!1),[ae,je]=K.useState(null),[fe,Ne]=K.useState(()=>ff()),[He,vt]=K.useState({}),[ct,jt]=K.useState(0),[Xe,Me]=K.useState(!1),[Ke,nt]=K.useState(0),[Re,he]=K.useState(null),[N,B]=K.useState(1),z=$=>{M(ie=>({...ie,skillGained:ie.skillGained+$}))},p=()=>{M($=>({...$,bondsImproved:$.bondsImproved+1}))},v=()=>{M($=>({...$,newRelationships:$.newRelationships+1}))},V=()=>{M($=>({...$,challengesCompleted:$.challengesCompleted+1}))},G=()=>{M($=>({...$,lessonsLearned:$.lessonsLearned+1}))},J=()=>P<30?"Try to rest more during the day to keep your energy up!":R.skillGained<5?"Focus more on studying and coding practice to improve your skills faster.":R.bondsImproved===0?"Don't forget to socialize with your classmates to build relationships!":"Great job balancing your activities today!",Z=$=>{const ie=$-N;if(ie>1){const oe=Math.min(j,ie);if(oe>0)return D(xt=>Math.max(0,xt-oe)),{occurred:!0,amount:oe}}return{occurred:!1,amount:0}},ce=()=>{E(!1),u(!1);const $=O+1,ie=Z($);ee($),Q(8),Wn($)&&Y(Math.min(P+30,100)),Wn($)||cf({day:$,energy:P,codingSkill:j,actionsRemaining:8,cohortData:fe,setEnergy:Y,setCodingSkill:D,setActionsRemaining:Q,setCohortData:Ne,setCurrentEvent:he}),M({skillGained:0,energyLevel:P,newRelationships:0,bondsImproved:0,challengesCompleted:0,lessonsLearned:0,skillDecayed:ie.occurred?ie.amount:0,tip:ie.occurred?`You lost ${ie.amount} coding skill points due to lack of practice.`:""})},te=()=>{if(Wn(O)){const ie=(O-1)%7===5?2:1,oe=O+ie;if(ee(oe),Q(8),Math.random()<.75)Y(100);else{const rt=["You hosted a big family dinner over the weekend.","You helped a friend move to a new apartment.","You worked a shift at the local pub for extra money.","You spent the weekend on a DIY home improvement project.","You went hiking and overdid it a bit.","You attended a friend's wedding that went late into the night."];if(Math.random()<.3){const Et=Math.floor(Math.random()*6)+5;D(j+Et),B(oe),alert(`You spent the weekend working on a personal coding project. You gained ${Et} coding skill points, but you're starting the week a bit tired.`),Y(Math.min(P+15,70))}else{const Et=rt[Math.floor(Math.random()*rt.length)];alert(`${Et} You're starting the week a bit tired.`),Y(Math.min(P+25,75))}}Z(oe)}else ce()},pe=()=>{if(re<=0){const $=J();return M(ie=>({...ie,tip:$})),E(!0),!1}return!0},Be=()=>{if(Wn(O)){alert("It's the weekend! No bootcamp today. You can skip to Monday or enjoy your free time.");return}if(pe()){if(P<10){C("coding"),u(!0);return}F(!0)}},hn=()=>{if(q){D(j+5),z(5),V(),B(O),Y(Math.max(0,P-10));const $=re-1;if(Q($),jt(ie=>{const oe=ie+1;return oe>=Ui.length?0:oe}),$<=0){M(oe=>({...oe,energyLevel:Math.max(0,P-10)}));const ie=J();M(oe=>({...oe,tip:ie})),E(!0)}F(!1)}},Tr=()=>{if(Wn(O)){alert("It's the weekend! No bootcamp today. You can skip to Monday or enjoy your free time.");return}const $=Math.min(...Pr.map(oe=>oe.energyCost));if(P<$){C("socialize"),u(!0);return}const ie=Gd(fe.bonds,fe.members);je(ie),de(!0)},gn=($,ie,oe)=>{if(!(!se||!ae||!$)){if(de(!1),P>=$.energyCost){const xt=qd(fe.bonds,ae.name,oe.bondChange);Ne({...fe,bonds:xt}),oe.bondChange>0&&p(),ie&&(vt(Nt=>{const Et=Nt[ae.name]||{};return{...Nt,[ae.name]:{...Et,[ie.attribute]:!0}}}),v()),Y(Math.max(0,P-$.energyCost));const rt=re-1;Q(rt),rt<=0&&(M(Nt=>({...Nt,energyLevel:Math.max(0,P-$.energyCost)})),E(!0))}else alert("You don't have enough energy for this activity!");je(null)}},yn=()=>{Y(Math.min(P+20,100));const $=re-1;Q($),u(!1),$<=0&&(M(ie=>({...ie,energyLevel:Math.min(P+20,100),tip:"Great job taking time to rest!"})),setTimeout(()=>{E(!0)},100)),C(null)},zr=()=>{if(Wn(O)){alert("It's the weekend! No bootcamp today. You can skip to Monday or enjoy your free time.");return}if(P<5){C("study"),u(!0);return}Me(!0)},Lr=()=>{if(Xe){D(j+3),z(3),G(),B(O),Y(Math.max(0,P-5));const $=re-1;if(Q($),nt(ie=>{const oe=ie+1;return oe>=29?0:oe}),$<=0){M(oe=>({...oe,energyLevel:Math.max(0,P-5)}));let ie=J();M(oe=>({...oe,tip:ie})),setTimeout(()=>{E(!0)},100)}Me(!1)}};return s.jsxs("div",{className:"game-container",children:[s.jsx(Fu,{day:O,actionsRemaining:re,onEndDay:te}),s.jsxs("div",{className:"stats-panel",children:[s.jsx(Vd,{energy:P}),s.jsx(Qd,{codingSkill:j,daysSinceActivity:O-N}),s.jsx(Jd,{socialBonds:fe.bonds,cohortMembers:fe.members,discoveredInfo:He})]}),s.jsx("div",{className:"actions-container",children:s.jsx(Zd,{practiceCoding:Be,socialize:Tr,studyPython:zr,rest:yn})}),q&&s.jsx(tf,{onComplete:hn,onClose:()=>F(!1),currentLevel:ct}),se&&ae&&s.jsx(nf,{person:ae,onComplete:gn,onClose:()=>de(!1)}),Xe&&s.jsx(rf,{onComplete:Lr,onClose:()=>Me(!1),currentLevel:Ke}),g&&s.jsx(lf,{onClose:yn,onStartNewDay:te}),_&&s.jsx(sf,{onStartNewDay:()=>{E(!1),te()},daySummary:R}),Re&&s.jsx(pf,{event:Re,onClose:()=>he(null)})]})}function Is({review:g,name:u,role:d,avatar:C}){return s.jsxs("div",{className:"testimonial-card",children:[s.jsx("div",{className:"testimonial-rating",children:"★★★★★"}),s.jsx("p",{className:"testimonial-text",children:g}),s.jsx("div",{className:"testimonial-author",children:" "}),s.jsx("div",{className:"author-avatar",children:C}),s.jsxs("div",{className:"author-info",children:[s.jsx("div",{className:"author-name",children:u}),s.jsx("div",{className:"author-title",children:d})]})]})}function hf({onStartGame:g}){const[u,d]=K.useState("intro");return s.jsxs("div",{className:"landing-container",children:[s.jsxs("div",{className:"landing-hero",children:[s.jsxs("div",{className:"hero-content",children:[s.jsx("div",{className:"logo-container",children:s.jsx("img",{src:"/assets/BootCampSimLogo2.png",alt:"BootCamp Simulator Logo",className:"landing-logo"})}),s.jsx("h1",{children:"Master Python Programming Through Gamified Learning"}),s.jsx("p",{className:"hero-subtitle",children:"Experience the life of a coding bootcamp student while learning real Python skills"}),s.jsx("button",{className:"cta-button",onClick:g,children:"Start Your Coding Journey"})]}),s.jsx("div",{className:"hero-image",children:s.jsx("div",{className:"hero-screenshot",children:s.jsx("div",{className:"code-snippet",children:s.jsx("pre",{children:s.jsxs("code",{children:["def hello_world():",s.jsx("br",{}),'  return "Hello, future developer!"']})})})})})]}),s.jsxs("div",{className:"value-section",children:[s.jsx("h2",{children:"Why Bootcamp Simulator?"}),s.jsxs("div",{className:"value-grid",children:[s.jsxs("div",{className:"value-card",children:[s.jsx("div",{className:"value-icon",children:"📊"}),s.jsx("h3",{children:"Learn by Doing"}),s.jsx("p",{children:"Solve real coding challenges and build practical skills through hands-on practice"})]}),s.jsxs("div",{className:"value-card",children:[s.jsx("div",{className:"value-icon",children:"🎮"}),s.jsx("h3",{children:"Gamified Experience"}),s.jsx("p",{children:"Turn learning into fun with progress tracking, achievements, and balanced gameplay"})]}),s.jsxs("div",{className:"value-card",children:[s.jsx("div",{className:"value-icon",children:"📚"}),s.jsx("h3",{children:"Structured Learning"}),s.jsx("p",{children:"Progress through a carefully designed curriculum from basics to advanced concepts"})]})]})]}),s.jsxs("div",{className:"features-section",children:[s.jsxs("div",{className:"landing-tabs",children:[s.jsx("button",{className:`tab-button ${u==="intro"?"active":""}`,onClick:()=>d("intro"),children:"Overview"}),s.jsx("button",{className:`tab-button ${u==="howtoplay"?"active":""}`,onClick:()=>d("howtoplay"),children:"How It Works"}),s.jsx("button",{className:`tab-button ${u==="learning"?"active":""}`,onClick:()=>d("learning"),children:"Learning Path"})]}),s.jsxs("div",{className:"tab-content",children:[u==="intro"&&s.jsx("div",{className:"intro-content",children:s.jsxs("div",{className:"tab-grid",children:[s.jsx("div",{className:"tab-image",children:s.jsx("img",{src:"/assets/BootCampSimScreen.png",alt:"Bootcamp Illustration"})}),s.jsxs("div",{className:"tab-text",children:[s.jsx("h2",{children:"The Bootcamp Experience, Gamified"}),s.jsx("p",{children:"You've just enrolled in a 12-week intensive coding bootcamp. Your mission is to build your coding skills, make connections with your classmates, and thrive in the demanding schedule."}),s.jsxs("div",{className:"feature-list",children:[s.jsxs("div",{className:"feature-item",children:[s.jsx("div",{className:"feature-icon",children:"📊"}),s.jsx("div",{children:"Track your progress from beginner to expert"})]}),s.jsxs("div",{className:"feature-item",children:[s.jsx("div",{className:"feature-icon",children:"🤝"}),s.jsx("div",{children:"Form relationships with unique classmates"})]}),s.jsxs("div",{className:"feature-item",children:[s.jsx("div",{className:"feature-icon",children:"⚡"}),s.jsx("div",{children:"Balance activities and energy management"})]}),s.jsxs("div",{className:"feature-item",children:[s.jsx("div",{className:"feature-icon",children:"🎲"}),s.jsx("div",{children:"React to unexpected events that affect your journey"})]})]})]})]})}),u==="howtoplay"&&s.jsx("div",{className:"howtoplay-content",children:s.jsxs("div",{className:"tab-grid",children:[s.jsxs("div",{className:"tab-text",children:[s.jsx("h2",{children:"Your Day at the Bootcamp"}),s.jsx("p",{children:"Every day gives you 8 action points to spend wisely on activities that help you progress while managing your energy levels."}),s.jsxs("div",{className:"activity-cards",children:[s.jsxs("div",{className:"activity-card",children:[s.jsx("div",{className:"activity-icon",children:"📚"}),s.jsx("h3",{children:"Study Python"}),s.jsx("p",{children:"Learn programming concepts"}),s.jsxs("div",{className:"activity-stats",children:[s.jsx("span",{className:"skill-gain",children:"+3 Skill"}),s.jsx("span",{className:"energy-cost",children:"-5 Energy"})]})]}),s.jsxs("div",{className:"activity-card",children:[s.jsx("div",{className:"activity-icon",children:"💻"}),s.jsx("h3",{children:"Practice Coding"}),s.jsx("p",{children:"Solve real coding challenges"}),s.jsxs("div",{className:"activity-stats",children:[s.jsx("span",{className:"skill-gain",children:"+5 Skill"}),s.jsx("span",{className:"energy-cost",children:"-10 Energy"})]})]}),s.jsxs("div",{className:"activity-card",children:[s.jsx("div",{className:"activity-icon",children:"👥"}),s.jsx("h3",{children:"Socialize"}),s.jsx("p",{children:"Build relationships with classmates"}),s.jsxs("div",{className:"activity-stats",children:[s.jsx("span",{className:"bond-gain",children:"Improve Bonds"}),s.jsx("span",{className:"energy-cost",children:"Varies"})]})]}),s.jsxs("div",{className:"activity-card",children:[s.jsx("div",{className:"activity-icon",children:"🛌"}),s.jsx("h3",{children:"Rest"}),s.jsx("p",{children:"Recover your energy"}),s.jsxs("div",{className:"activity-stats",children:[s.jsx("span",{className:"energy-gain",children:"+20 Energy"}),s.jsx("span",{className:"action-cost",children:"-1 Action"})]})]})]})]}),s.jsx("div",{className:"tab-image",children:s.jsx(Fu,{page:"LandingPage",day:1})})]})}),u==="learning"&&s.jsxs("div",{className:"learning-content",children:[s.jsx("h2",{children:"Your Python Learning Journey"}),s.jsx("p",{className:"learning-intro",children:"Master Python from beginner to advanced through our dual approach of theory and practice"}),s.jsxs("div",{className:"learning-path",children:[s.jsxs("div",{className:"learning-step",children:[s.jsx("div",{className:"step-number",children:"1"}),s.jsxs("div",{className:"step-content",children:[s.jsx("h3",{children:"Study Python Fundamentals"}),s.jsx("p",{children:"Access 20 comprehensive lessons covering:"}),s.jsxs("div",{className:"topics-grid",children:[s.jsxs("div",{className:"topic-item",children:[s.jsx("div",{className:"topic-icon",children:"➊"}),s.jsx("div",{children:"Basic Syntax"})]}),s.jsxs("div",{className:"topic-item",children:[s.jsx("div",{className:"topic-icon",children:"➋"}),s.jsx("div",{children:"Data Types"})]}),s.jsxs("div",{className:"topic-item",children:[s.jsx("div",{className:"topic-icon",children:"➌"}),s.jsx("div",{children:"Control Flow"})]}),s.jsxs("div",{className:"topic-item",children:[s.jsx("div",{className:"topic-icon",children:"➍"}),s.jsx("div",{children:"Functions"})]}),s.jsxs("div",{className:"topic-item",children:[s.jsx("div",{className:"topic-icon",children:"➎"}),s.jsx("div",{children:"Data Structures"})]}),s.jsxs("div",{className:"topic-item",children:[s.jsx("div",{className:"topic-icon",children:"➏"}),s.jsx("div",{children:"Advanced Concepts"})]})]})]})]}),s.jsx("div",{className:"path-connector"}),s.jsxs("div",{className:"learning-step",children:[s.jsx("div",{className:"step-number",children:"2"}),s.jsxs("div",{className:"step-content",children:[s.jsx("h3",{children:"Apply Through Practice"}),s.jsx("p",{children:"Solve 22 coding challenges with increasing difficulty:"}),s.jsxs("ul",{className:"practice-features",children:[s.jsx("li",{children:"Write and test real Python code"}),s.jsx("li",{children:"Receive instant feedback on your solutions"}),s.jsx("li",{children:"Access hints when you get stuck"}),s.jsx("li",{children:"Review example solutions to learn best practices"})]}),s.jsx("div",{className:"code-example",children:s.jsx("pre",{children:s.jsxs("code",{children:["def calculate_average(numbers):",s.jsx("br",{}),"  return sum(numbers) / len(numbers)"]})})})]})]})]})]})]})]}),s.jsxs("section",{className:"testimonials-section",children:[s.jsx("h2",{children:"What Our Users Say"}),s.jsxs("div",{className:"testimonials-grid",children:[s.jsx(Is,{name:"John S.",review:"Bootcamp Simulator transformed my Python skills! The gamified approach made learning fun and engaging. I highly recommend it to anyone looking to master coding.",role:"Junior Engineer",avatar:"JS"}),s.jsx(Is,{name:"Lily C.",review:"I tried many ways to learn Python, but Bootcamp Simulator made it stick by combining theory with actual practice in a fun, engaging way.",role:"Self-taught Developer",avatar:"LC"}),s.jsx(Is,{name:"Mark K.",review:"I love the gamified approach! It keeps me motivated to learn and practice every day.",role:"Self-taught Developer",avatar:"MK"})]})]}),s.jsxs("div",{className:"final-cta",children:[s.jsx("h2",{children:"Ready to Start Your Coding Journey?"}),s.jsx("p",{children:"Join thousands of learners who have mastered Python through our interactive bootcamp simulation"}),s.jsx("button",{className:"cta-button",onClick:g,children:"Launch Bootcamp Simulator"})]})]})}function gf(){const[g,u]=K.useState(!1),d=()=>{u(!0)},C=()=>{window.confirm("Are you sure you want to leave the game and return to the main menu? Your progress will not be saved.")&&u(!1)};return s.jsx("div",{className:"App",children:g?s.jsxs("div",{className:"game-layout",children:[s.jsx("div",{className:"game-logo-container",onClick:C,children:s.jsx("img",{src:"/assets/BootCampSimLogo2.png",alt:"BootCamp Simulator Logo",className:"game-logo-large",title:"Click to return to main menu"})}),s.jsxs("div",{className:"game-content",children:[s.jsx("h1",{children:"Bootcamp Simulator"}),s.jsx(mf,{})]})]}):s.jsx(hf,{onStartGame:d})})}Yd.createRoot(document.getElementById("root")).render(s.jsx(Fd.StrictMode,{children:s.jsx(gf,{})}));
