const w=/#/g,O=/&/g,P=/=/g,u=/\+/g,I=/%5e/gi,N=/%60/gi,Q=/%7c/gi,j=/%20/gi;function $(t){return encodeURI(""+t).replace(Q,"|")}function h(t){return $(typeof t=="string"?t:JSON.stringify(t)).replace(u,"%2B").replace(j,"+").replace(w,"%23").replace(O,"%26").replace(N,"`").replace(I,"^")}function i(t){return h(t).replace(P,"%3D")}function o(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function B(t){return o(t.replace(u," "))}function W(t){return o(t.replace(u," "))}function D(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const s=n.match(/([^=]+)=?(.*)/)||[];if(s.length<2)continue;const r=B(s[1]);if(r==="__proto__"||r==="constructor")continue;const c=W(s[2]||"");e[r]===void 0?e[r]=c:Array.isArray(e[r])?e[r].push(c):e[r]=[e[r],c]}return e}function G(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${i(t)}=${h(n)}`).join("&"):`${i(t)}=${h(e)}`:i(t)}function H(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>G(e,t[e])).filter(Boolean).join("&")}const K=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,X=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,M=/^([/\\]\s*){2,}[^/\\]/;function A(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?K.test(t):X.test(t)||(e.acceptRelative?M.test(t):!1)}const V=/\/$|\/\?/;function f(t="",e=!1){return e?V.test(t):t.endsWith("/")}function m(t="",e=!1){if(!e)return(f(t)?t.slice(0,-1):t)||"/";if(!f(t,!0))return t||"/";const[n,...s]=t.split("?");return(n.slice(0,-1)||"/")+(s.length>0?`?${s.join("?")}`:"")}function l(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(f(t,!0))return t||"/";const[n,...s]=t.split("?");return n+"/"+(s.length>0?`?${s.join("?")}`:"")}function J(t=""){return t.startsWith("/")}function L(t=""){return J(t)?t:"/"+t}function k(t,e){if(y(e)||A(t))return t;const n=m(e);return t.startsWith(n)?t:R(n,t)}function q(t,e){if(y(e))return t;const n=m(e);if(!t.startsWith(n))return t;const s=t.slice(n.length);return s[0]==="/"?s:"/"+s}function tt(t,e){const n=U(t),s={...D(n.search),...e};return n.search=H(s),z(n)}function y(t){return!t||t==="/"}function v(t){return t&&t!=="/"}const x=/^\.?\//;function R(t,...e){let n=t||"";for(const s of e.filter(r=>v(r)))if(n){const r=s.replace(x,"");n=l(n)+r}else n=s;return n}function et(t,e,n={}){return n.trailingSlash||(t=l(t),e=l(e)),n.leadingSlash||(t=L(t),e=L(e)),n.encoding||(t=o(t),e=o(e)),t===e}function U(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/);if(n){const[,g,E=""]=n;return{protocol:g,pathname:E,href:g+E,auth:"",host:"",search:"",hash:""}}if(!A(t,{acceptRelative:!0}))return e?U(e+t):d(t);const[,s="",r,c=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,_="",p=""]=c.match(/([^#/?]*)(.*)?/)||[],{pathname:C,search:T,hash:S}=d(p.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:s,auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:_,pathname:C,search:T,hash:S}}function d(t=""){const[e="",n="",s=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:s}}function z(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",s=t.hash||"",r=t.auth?t.auth+"@":"",c=t.host||"";return(t.protocol?t.protocol+"//":"")+r+c+e+n+s}const Z=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},a=Z().app,nt=()=>a.baseURL,F=()=>a.buildAssetsDir,Y=(...t)=>R(b(),F(),...t),b=(...t)=>{const e=a.cdnURL||a.baseURL;return t.length?R(e,...t):e};globalThis.__buildAssetsURL=Y,globalThis.__publicAssetsURL=b;export{D as a,m as b,k as c,tt as d,q as e,H as f,nt as g,A as h,et as i,R as j,U as p,z as s,l as w};
//# sourceMappingURL=paths.85c5da9b.js.map