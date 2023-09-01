"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[4044],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(n),c=r,v=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(v,i(i({ref:t},m),{},{components:n})):a.createElement(v,i({ref:t},m))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,p={unversionedId:"Components/CreateContentPage/AvatarAndNameForPreview/AvatarAndNameForPreview",id:"Components/CreateContentPage/AvatarAndNameForPreview/AvatarAndNameForPreview",title:"AvatarAndNameForPreview",description:"The AvatarAndNameForPreview component is a reusable UI component used to display an avatar, name, and status",source:"@site/docs/Components/CreateContentPage/AvatarAndNameForPreview/AvatarAndNameForPreview.md",sourceDirName:"Components/CreateContentPage/AvatarAndNameForPreview",slug:"/Components/CreateContentPage/AvatarAndNameForPreview/",permalink:"/sgpt-docs/Components/CreateContentPage/AvatarAndNameForPreview/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/CreateContentPage/AvatarAndNameForPreview/AvatarAndNameForPreview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MessageItem",permalink:"/sgpt-docs/Components/ChatPage/MessageItem/"},next:{title:"GeneratedResponseCard",permalink:"/sgpt-docs/Components/CreateContentPage/GeneratedResponseCard/"}},s={},l=[{value:"Props",id:"props",level:4},{value:"Example Usage",id:"example-usage",level:4},{value:"Component Structure",id:"component-structure",level:4},{value:"Statics",id:"statics",level:4},{value:"Styling",id:"styling",level:4},{value:"Memoization",id:"memoization",level:4},{value:"Overall Functionality",id:"overall-functionality",level:4}],m={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AvatarAndNameForPreview")," component is a reusable UI component used to display an avatar, name, and status\ninformation in a preview format. It's commonly used in user interfaces where user profiles need to be displayed."),(0,r.kt)("h4",{id:"props"},"Props"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AvatarAndNameForPreview")," component accepts the following props:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"image")," (optional): A URL pointing to the image of the avatar."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": The name of the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status"),": The status information of the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"socialMediaType")," (optional): The social media type of the user, used to determine specific styling.")),(0,r.kt)("h4",{id:"example-usage"},"Example Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"static",static:!0},"import AvatarAndNameForPreview from './AvatarAndNameForPreview'; // Import the component\n\nconst UserProfile = () => {\n    const user = {\n        name: 'John Doe',\n        status: 'Active',\n        image: 'https://example.com/user-avatar.jpg',\n        socialMediaType: 'facebook', // or null\n    };\n\n    return (\n        <div>\n            <AvatarAndNameForPreview\n                name={user.name}\n                status={user.status}\n                image={user.image}\n                socialMediaType={user.socialMediaType}\n            />\n        </div>\n    );\n};\n")),(0,r.kt)("h4",{id:"component-structure"},"Component Structure"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AvatarAndNameForPreview")," component is structured as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Root ",(0,r.kt)("inlineCode",{parentName:"strong"},"Box")," Container:")," A ",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," component that serves as the main container for the avatar, name, and status\ninformation.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Avatar Container:")," A nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," component that contains the avatar. It applies special styling if the social\nmedia type is TikTok.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Avatar Component:")," An ",(0,r.kt)("inlineCode",{parentName:"p"},"Avatar")," component that displays the user's avatar. It takes the ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," prop and applies\nadditional styling based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"socialMediaType"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Name and Status Container:")," A nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," component that displays the user's name and status information.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Name Typography:")," A ",(0,r.kt)("inlineCode",{parentName:"p"},"Typography")," component that displays the user's name. It takes the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," prop and applies\nstyling for font size, color, and font weight.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Status Typography:")," A ",(0,r.kt)("inlineCode",{parentName:"p"},"Typography")," component that displays the user's status. It takes the ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," prop and\napplies styling for font size, color, and font weight."))),(0,r.kt)("h4",{id:"statics"},"Statics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isTiktok"),": A boolean value that is ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," if the ",(0,r.kt)("inlineCode",{parentName:"li"},"socialMediaType")," prop is equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"SocialMediaTypes.TIKTOK"),".")),(0,r.kt)("h4",{id:"styling"},"Styling"),(0,r.kt)("p",null,"The component utilizes the Material-UI library's styling system. The ",(0,r.kt)("inlineCode",{parentName:"p"},"avatarSx")," object from the ",(0,r.kt)("inlineCode",{parentName:"p"},"avatar.sx")," module is\nused to apply styling to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Avatar")," component based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"socialMediaType"),"."),(0,r.kt)("h4",{id:"memoization"},"Memoization"),(0,r.kt)("p",null,"The component is memoized using the ",(0,r.kt)("inlineCode",{parentName:"p"},"memo")," function from React to optimize re-renders when the props do not change."),(0,r.kt)("h4",{id:"overall-functionality"},"Overall Functionality"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AvatarAndNameForPreview")," component renders an avatar, user name, and status information in a visually appealing\nformat. It supports special styling for TikTok avatars and is optimized for performance through memoization."),(0,r.kt)("p",null,"This component is suitable for various scenarios where user profiles need to be displayed with consistent styling and\nlayout."))}u.isMDXComponent=!0}}]);