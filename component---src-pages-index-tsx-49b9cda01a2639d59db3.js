"use strict";(self.webpackChunkgatsby_typescript_testing=self.webpackChunkgatsby_typescript_testing||[]).push([[691],{618:function(e,t,r){r.r(t),r.d(t,{Counter:function(){return _},CounterContextProvider:function(){return Q},default:function(){return P},useCounterContext:function(){return U}});var i=r(7462),n=r(7294),o=r(9933),a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u=(0,o.Z)((function(e){return a.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),l=r(5341);function s(e,t,r){var i="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):i+=r+" "})),i}var c=function(e,t,r){var i=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[i]&&(e.registered[i]=t.styles),void 0===e.inserted[t.name]){var n=t;do{e.insert(t===n?"."+i:"",n,e.sheet,!0);n=n.next}while(void 0!==n)}},g=r(3762),M=r(4759),L=/[A-Z]|^ms/g,y=/_EMO_([^_]+?)_([^]*?)_EMO_/g,d=function(e){return 45===e.charCodeAt(1)},j=function(e){return null!=e&&"boolean"!=typeof e},p=(0,o.Z)((function(e){return d(e)?e:e.replace(L,"-$&").toLowerCase()})),T=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(y,(function(e,t,r){return I={name:t,styles:r,next:I},t}))}return 1===M.Z[e]||d(e)||"number"!=typeof t||0===t?t:t+"px"};function N(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return I={name:r.name,styles:r.styles,next:I},r.name;if(void 0!==r.styles){var i=r.next;if(void 0!==i)for(;void 0!==i;)I={name:i.name,styles:i.styles,next:I},i=i.next;return r.styles+";"}return function(e,t,r){var i="";if(Array.isArray(r))for(var n=0;n<r.length;n++)i+=N(e,t,r[n])+";";else for(var o in r){var a=r[o];if("object"!=typeof a)null!=t&&void 0!==t[a]?i+=o+"{"+t[a]+"}":j(a)&&(i+=p(o)+":"+T(o,a)+";");else if(!Array.isArray(a)||"string"!=typeof a[0]||null!=t&&void 0!==t[a[0]]){var u=N(e,t,a);switch(o){case"animation":case"animationName":i+=p(o)+":"+u+";";break;default:i+=o+"{"+u+"}"}}else for(var l=0;l<a.length;l++)j(a[l])&&(i+=p(o)+":"+T(o,a[l])+";")}return i}(e,t,r);case"function":if(void 0!==e){var n=I,o=r(e);return I=n,N(e,t,o)}}if(null==t)return r;var a=t[r];return void 0!==a?a:r}var I,f=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var C=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var i=!0,n="";I=void 0;var o=e[0];null==o||void 0===o.raw?(i=!1,n+=N(r,t,o)):n+=o[0];for(var a=1;a<e.length;a++)n+=N(r,t,e[a]),i&&(n+=o[a]);f.lastIndex=0;for(var u,l="";null!==(u=f.exec(n));)l+="-"+u[1];return{name:(0,g.Z)(n)+l,styles:n,next:I}},m=u,A=function(e){return"theme"!==e},x=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?m:A},v=function(e,t,r){var i;if(t){var n=t.shouldForwardProp;i=e.__emotion_forwardProp&&n?function(t){return e.__emotion_forwardProp(t)&&n(t)}:n}return"function"!=typeof i&&r&&(i=e.__emotion_forwardProp),i},h=function(){return null},S=function e(t,r){var o,a,u=t.__emotion_real===t,g=u&&t.__emotion_base||t;void 0!==r&&(o=r.label,a=r.target);var M=v(t,r,u),L=M||x(g),y=!L("as");return function(){var d=arguments,j=u&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==o&&j.push("label:"+o+";"),null==d[0]||void 0===d[0].raw)j.push.apply(j,d);else{0,j.push(d[0][0]);for(var p=d.length,T=1;T<p;T++)j.push(d[T],d[0][T])}var N=(0,l.w)((function(e,t,r){var i=y&&e.as||g,o="",u=[],d=e;if(null==e.theme){for(var p in d={},e)d[p]=e[p];d.theme=(0,n.useContext)(l.T)}"string"==typeof e.className?o=s(t.registered,u,e.className):null!=e.className&&(o=e.className+" ");var T=C(j.concat(u),t.registered,d);c(t,T,"string"==typeof i);o+=t.key+"-"+T.name,void 0!==a&&(o+=" "+a);var N=y&&void 0===M?x(i):L,I={};for(var f in e)y&&"as"===f||N(f)&&(I[f]=e[f]);I.className=o,I.ref=r;var m=(0,n.createElement)(i,I),A=(0,n.createElement)(h,null);return(0,n.createElement)(n.Fragment,null,A,m)}));return N.displayName=void 0!==o?o:"Styled("+("string"==typeof g?g:g.displayName||g.name||"Component")+")",N.defaultProps=t.defaultProps,N.__emotion_real=N,N.__emotion_base=g,N.__emotion_styles=j,N.__emotion_forwardProp=M,Object.defineProperty(N,"toString",{value:function(){return"."+a}}),N.withComponent=function(t,n){return e(t,(0,i.Z)({},r,n,{shouldForwardProp:v(N,n,!0)})).apply(void 0,j)},N}},k=r(3431),z=r(6625),D=S("button",{target:"eyx7vxj0"})((function(e){var t=e.variant,r=e.size;return[{borderRadius:"9999px",":focus":{outline:"2px solid transparent",outlineOffset:"2px","--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)",boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)"}},"contained"===t?{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgba(37, 99, 235, var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(29, 78, 216, var(--tw-bg-opacity))"},":active":{"--tw-bg-opacity":"1",backgroundColor:"rgba(37, 99, 235, var(--tw-bg-opacity))"},":focus":{backgroundColor:"rgba(37, 99, 235, 0.9)"}}:"outlined"===t?{borderWidth:"2px","--tw-border-opacity":"1",borderColor:"rgba(37, 99, 235, var(--tw-border-opacity))",":hover":{"--tw-border-opacity":"1",borderColor:"rgba(29, 78, 216, var(--tw-border-opacity))"},":active":{"--tw-border-opacity":"1",borderColor:"rgba(37, 99, 235, var(--tw-border-opacity))"},":focus":{borderColor:"rgba(37, 99, 235, 0.9)"}}:{backgroundColor:"rgba(0, 0, 0, 0)"},"small"===r?{fontSize:"0.875rem",lineHeight:"1.25rem",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.25rem",paddingBottom:"0.25rem"}:"large"===r?{fontSize:"1.125rem",lineHeight:"1.75rem",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.75rem",paddingBottom:"0.75rem"}:{fontSize:"1rem",lineHeight:"1.5rem",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"0.5rem"}]}),""),w=function(e){var t=e.variant,r=e.size,i=e.backgroundColor,n=e.color,o=e.textColor,a=e.onClick,u=e.children,l=e.disabled;return(0,k.tZ)(D,{variant:t,size:r,className:n,style:{backgroundColor:i,color:o},onClick:a,disabled:l},u)};var b=S("span",{target:"efi8nb30"})({name:"1rh6mu0",styles:"text-align:center;font-weight:700;--tw-text-opacity:1;color:rgba(37, 99, 235, var(--tw-text-opacity));border-bottom-width:2px;--tw-border-opacity:1;border-bottom-color:rgba(37, 99, 235, var(--tw-border-opacity));"}),E=(0,k.iv)(Object.assign({},{textAlign:"center"}),"","","",""),O=Symbol("Valor por default de Counter Context"),Y=(0,n.createContext)(O);function U(){var e=(0,n.useContext)(Y);if(e===O)throw new Error("Por favor inicia el Counter Context");return e}function Q(e){var t=e.children,r=(0,n.useState)(0),i=r[0],o=r[1],a=(0,n.useCallback)((function(){o((function(e){return e+1}))}),[]),u=(0,n.useMemo)((function(){return{counter:i,increment:a}}),[a,i]);return(0,k.tZ)(Y.Provider,{value:u},t)}function _(){var e=U(),t=e.counter,r=e.increment;return(0,k.tZ)(n.Fragment,null,(0,k.tZ)("p",null,"El contador es: ",(0,k.tZ)(b,null,t)),(0,k.tZ)(w,{variant:"contained",size:"small",onClick:r},"Incrementar"))}function P(){return(0,k.tZ)(z.Z,{pageTitle:"GatsbyJS TypeScript Testing"},(0,k.tZ)(Q,null,(0,k.tZ)("div",{css:E},(0,k.tZ)("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NDEuOSA1OTUuMyI+CiAgICA8ZyBmaWxsPSIjNjFEQUZCIj4KICAgICAgICA8cGF0aCBkPSJNNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2LjlWNzhjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZWNzguNWMtOC40IDAtMTYgMS44LTIyLjYgNS42LTI4LjEgMTYuMi0zNC40IDY2LjctMTkuOSAxMzAuMS02Mi4yIDE5LjItMTAyLjcgNDkuOS0xMDIuNyA4Mi4zIDAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek00MjEuMiA0MzBjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek00MjAuNyAxNjNjOS4zIDkuNiAxOC42IDIwLjMgMjcuOCAzMi05LS40LTE4LjItLjctMjcuNS0uNy05LjQgMC0xOC43LjItMjcuOC43IDktMTEuNyAxOC4zLTIyLjQgMjcuNS0zMnptLTc0IDU4LjljLTQuOSA3LjctOS44IDE1LjYtMTQuNCAyMy43LTQuNiA4LTguOSAxNi0xMyAyNC01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOCAxMy4xLTMuMSAyNi45LTUuOCA0MS4yLTcuOXptLTkwLjUgMTI1LjJjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42IDAtMTUuNyAyMi45LTM1LjYgNTguMy01MC42IDguNi0zLjcgMTgtNyAyNy43LTEwLjEgNS43IDE5LjYgMTMuMiA0MCAyMi41IDYwLjktOS4yIDIwLjgtMTYuNiA0MS4xLTIyLjIgNjAuNi05LjktMy4xLTE5LjMtNi41LTI4LTEwLjJ6TTMxMCA0OTBjLTEzLjYtNy44LTE5LjUtMzcuNS0xNC45LTc1LjcgMS4xLTkuNCAyLjktMTkuMyA1LjEtMjkuNCAxOS42IDQuOCA0MSA4LjUgNjMuNSAxMC45IDEzLjUgMTguNSAyNy41IDM1LjMgNDEuNiA1MC0zMi42IDMwLjMtNjMuMiA0Ni45LTg0IDQ2LjktNC41LS4xLTguMy0xLTExLjMtMi43em0yMzcuMi03Ni4yYzQuNyAzOC4yLTEuMSA2Ny45LTE0LjYgNzUuOC0zIDEuOC02LjkgMi42LTExLjUgMi42LTIwLjcgMC01MS40LTE2LjUtODQtNDYuNiAxNC0xNC43IDI4LTMxLjQgNDEuMy00OS45IDIyLjYtMi40IDQ0LTYuMSA2My42LTExIDIuMyAxMC4xIDQuMSAxOS44IDUuMiAyOS4xem0zOC41LTY2LjdjLTguNiAzLjctMTggNy0yNy43IDEwLjEtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjkgOS4yLTIwLjggMTYuNi00MS4xIDIyLjItNjAuNiA5LjkgMy4xIDE5LjMgNi41IDI4LjEgMTAuMiAzNS40IDE1LjEgNTguMyAzNC45IDU4LjMgNTAuNi0uMSAxNS43LTIzIDM1LjYtNTguNCA1MC42ek0zMjAuOCA3OC40eiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQyMC45IiBjeT0iMjk2LjUiIHI9IjQ1LjciLz4KICAgICAgICA8cGF0aCBkPSJNNTIwLjUgNzguMXoiLz4KICAgIDwvZz4KPC9zdmc+Cg==",className:"App-logo",alt:"logo"}),(0,k.tZ)(_,null),(0,k.tZ)("p",null,"Proyecto creado en Gatsby con TypeScript."),(0,k.tZ)("p",null,"Testing haciendo uso de StoryBook, Jest y React Testing Library."))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-49b9cda01a2639d59db3.js.map