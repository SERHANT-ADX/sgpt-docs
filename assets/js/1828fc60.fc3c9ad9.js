"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[2083],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"Components/ProfilePage/ProfileSavedFilters/ProfileSavedFilters",id:"Components/ProfilePage/ProfileSavedFilters/ProfileSavedFilters",title:"ProfileSavedFilters",description:"The ProfileSavedFilters component is a React functional component designed to display a list of saved filters in a",source:"@site/docs/Components/ProfilePage/ProfileSavedFilters/ProfileSavedFilters.md",sourceDirName:"Components/ProfilePage/ProfileSavedFilters",slug:"/Components/ProfilePage/ProfileSavedFilters/",permalink:"/Components/ProfilePage/ProfileSavedFilters/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/ProfilePage/ProfileSavedFilters/ProfileSavedFilters.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ProfilePageHeader",permalink:"/Components/ProfilePage/ProfilePageHeader/"},next:{title:"FileInput",permalink:"/Components/UI/FileInput/"}},p={},s=[{value:"Dependencies",id:"dependencies",level:3},{value:"Props",id:"props",level:3},{value:"Component Structure",id:"component-structure",level:3},{value:"Functionality",id:"functionality",level:3},{value:"Usage",id:"usage",level:3}],d={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileSavedFilters")," component is a React functional component designed to display a list of saved filters in a\nuser's profile. It allows users to view, apply, and like saved filters, and also provides detailed information about\neach saved filter."),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileSavedFilters")," component relies on the following dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Material-UI:")," It utilizes Material-UI components such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Box"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"IconButton"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Typography"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Material-UI Icons:")," It uses Material-UI icons like ",(0,r.kt)("inlineCode",{parentName:"p"},"Favorite"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FavoriteBorder"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"FilterAltOff"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ProgressiveImage:")," It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProgressiveImage")," component for displaying filter thumbnails.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"React Router:")," It may not directly depend on React Router, but it assumes that routing and navigation to filter\ndetails pages are handled by the application.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"usehooks-ts:")," It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"useDocumentTitle")," hook from the ",(0,r.kt)("inlineCode",{parentName:"p"},"usehooks-ts")," library to dynamically set the document\ntitle."))),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileSavedFilters")," component does not accept any props."),(0,r.kt)("h3",{id:"component-structure"},"Component Structure"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileSavedFilters")," component is structured as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Loader for Loading State (",(0,r.kt)("inlineCode",{parentName:"strong"},"Loader"),"):")," When ",(0,r.kt)("inlineCode",{parentName:"p"},"presetsIsLoading")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", it displays a loader to indicate that the\nsaved filters are being loaded.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"List of Saved Filters (",(0,r.kt)("inlineCode",{parentName:"strong"},"presetsList"),"):")," This section displays the list of saved filters once they are loaded."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Saved Filter Item (",(0,r.kt)("inlineCode",{parentName:"strong"},"presetItem"),"):")," Each saved filter is rendered as a box containing filter-related\ninformation."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Filter Image (",(0,r.kt)("inlineCode",{parentName:"strong"},"presetImage"),"):")," This box displays the filter thumbnail using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProgressiveImage"),"\ncomponent. It also includes action buttons for applying the filter and liking the filter."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Apply Filter Button (",(0,r.kt)("inlineCode",{parentName:"strong"},"presetImageButton"),"):")," An ",(0,r.kt)("inlineCode",{parentName:"p"},"IconButton")," with an icon that represents applying the\nfilter.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Like Filter Button (",(0,r.kt)("inlineCode",{parentName:"strong"},"presetImageButton"),"):")," An ",(0,r.kt)("inlineCode",{parentName:"p"},"IconButton")," with a heart icon that represents liking the\nfilter. The icon's color changes depending on whether the filter is liked or not.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Filter Information (",(0,r.kt)("inlineCode",{parentName:"strong"},"presetInfo"),"):")," This box displays detailed information about the filter, including\nfilter name, engine, engine version, aspect ratio, chaos, weirdness, quality, and seed.")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Empty State (",(0,r.kt)("inlineCode",{parentName:"strong"},"ProfileEmptyView"),"):")," If there are no saved filters (",(0,r.kt)("inlineCode",{parentName:"p"},"presets.length === 0"),"), it displays an empty\nstate view with a message and an icon."))),(0,r.kt)("h3",{id:"functionality"},"Functionality"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Apply Filter (",(0,r.kt)("inlineCode",{parentName:"strong"},"handleApplyFilter")," Function):"),' When the "Apply Filter" button is clicked, this function is called to\napply the selected filter. The ',(0,r.kt)("inlineCode",{parentName:"p"},"preset")," object is passed to it, and it typically triggers an action in the application\nto apply the filter.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Like Filter (",(0,r.kt)("inlineCode",{parentName:"strong"},"handleToggleLikePreset")," Function):"),' When the "Like Filter" button is clicked, this function is called\nto toggle the liked state of the selected filter. It receives the current liked state (',(0,r.kt)("inlineCode",{parentName:"p"},"preset.isLiked"),") and\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"preset.id")," as arguments. The function typically triggers an action in the application to update the liked state\nof the filter."))),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileSavedFilters")," component, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileSavedFilters")," component into your application."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"static",static:!0},"import ProfileSavedFilters from './ProfileSavedFilters';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Include the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProfileSavedFilters")," component within your application's UI, typically in the user's profile page."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"static",static:!0},"<ProfileSavedFilters />\n")))))}c.isMDXComponent=!0}}]);