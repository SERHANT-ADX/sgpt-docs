"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[8404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,d=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?i.createElement(d,r(r({ref:t},g),{},{components:n})):i.createElement(d,r({ref:t},g))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:a,r[1]=p;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var i=n(7462),a=(n(7294),n(3905));const o={},r=void 0,p={unversionedId:"Pages/Listing item page/ListingItemPageRouteProvider",id:"Pages/Listing item page/ListingItemPageRouteProvider",title:"ListingItemPageRouteProvider",description:"The ListingItemPageRouteProvider component is a middle component designed to facilitate the flow of data and actions between your router outlet context and the ListingItemPage component in a React application. It acts as a bridge to provide necessary data and functionality to the ListingItemPage component.",source:"@site/docs/Pages/Listing item page/ListingItemPageRouteProvider.md",sourceDirName:"Pages/Listing item page",slug:"/Pages/Listing item page/ListingItemPageRouteProvider",permalink:"/sgpt-docs/Pages/Listing item page/ListingItemPageRouteProvider",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Pages/Listing item page/ListingItemPageRouteProvider.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ListingItemPageProvider",permalink:"/sgpt-docs/Pages/Listing item page/ListingItemPageProvider"},next:{title:"LoginPage",permalink:"/sgpt-docs/Pages/Login page/LoginPage"}},s={},l=[{value:"Props",id:"props",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],g={toc:l},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPageRouteProvider")," component is a middle component designed to facilitate the flow of data and actions between your router outlet context and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPage")," component in a React application. It acts as a bridge to provide necessary data and functionality to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPage")," component."),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPageRouteProvider")," component does not have any specific props of its own. Instead, it relies on the following props from the ",(0,a.kt)("inlineCode",{parentName:"p"},"useListingsItemPage")," hook:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"activeListing")," (Type: Any): The currently active listing that is being displayed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"isMobile")," (Type: Boolean): A boolean value indicating whether the application is being viewed on a mobile device."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"allListings")," (Type: Array): An array containing all available listings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"listingsIsLoading")," (Type: Boolean): A flag to indicate whether the listings data is still loading."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"handleToggleLikeListingItem"),' (Type: Function): A function to toggle the "like" action on a listing item.')),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPageRouteProvider")," component, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPageRouteProvider")," component in your application."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"static",static:!0},"import ListingItemPageRouteProvider from './ListingItemPageRouteProvider';\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Incorporate the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPageRouteProvider")," component within your application's routing logic."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"static",static:!0},"// Inside your route configuration or component where routing is handled\n<ListingItemPageRouteProvider />\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ensure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"useListingsItemPage")," hook is correctly set up in your application. This hook provides the necessary data and functions to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPageRouteProvider")," component.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPageRouteProvider")," component will pass the required data and actions to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPage")," component, which can then use them to display and interact with listing details."))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Here is an example of how the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPageRouteProvider")," component might be used within a routing setup:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"static",static:!0},"import React from 'react';\nimport { BrowserRouter as Router, Route } from 'react-router-dom';\nimport ListingItemPageRouteProvider from './ListingItemPageRouteProvider';\nimport ListingItemPage from './ListingItemPage';\n\nfunction App() {\n  return (\n    <Router>\n      {/* Other routes */}\n      <Route path=\"/listing/:id\">\n        <ListingItemPageRouteProvider />\n        <ListingItemPage />\n      </Route>\n    </Router>\n  );\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"In this example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPageRouteProvider")," component is used to provide data and actions to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListingItemPage")," component when the user navigates to a specific listing."))}c.isMDXComponent=!0}}]);