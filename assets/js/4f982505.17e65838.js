"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[6141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,m=c["".concat(l,".").concat(g)]||c[g]||h[g]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},o=void 0,s={unversionedId:"Pages/Create content page/CreateContentPageProvider",id:"Pages/Create content page/CreateContentPageProvider",title:"CreateContentPageProvider",description:"CreateContentPageProvider (Component)",source:"@site/docs/Pages/Create content page/CreateContentPageProvider.md",sourceDirName:"Pages/Create content page",slug:"/Pages/Create content page/CreateContentPageProvider",permalink:"/sgpt-docs/Pages/Create content page/CreateContentPageProvider",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Pages/Create content page/CreateContentPageProvider.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CreateContentPage",permalink:"/sgpt-docs/Pages/Create content page/CreateContentPage"},next:{title:"EditingPhotosPage",permalink:"/sgpt-docs/Pages/Editing photos page/EditingPhotosPage"}},l={},p=[{value:"<strong>CreateContentPageProvider (Component)</strong>",id:"createcontentpageprovider-component",level:3},{value:"<strong>Methods</strong>",id:"methods",level:4},{value:"<strong>Effects</strong>",id:"effects",level:3},{value:"<strong>Loading Initial Prompt Based on Social Media Type</strong>",id:"loading-initial-prompt-based-on-social-media-type",level:4},{value:"<strong>Loading Selected Listing Item</strong>",id:"loading-selected-listing-item",level:4},{value:"<strong>Loading User&#39;s Chosen Listing and Updating</strong>",id:"loading-users-chosen-listing-and-updating",level:4},{value:"<strong>Loading User&#39;s Chosen Listings</strong>",id:"loading-users-chosen-listings",level:4},{value:"<strong>Context</strong>",id:"context",level:3},{value:"<strong>States</strong>",id:"states",level:3},{value:"<strong>Functions</strong>",id:"functions",level:3},{value:"<strong>useCreateContentPage()</strong>",id:"usecreatecontentpage",level:3}],d={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"createcontentpageprovider-component"},(0,i.kt)("strong",{parentName:"h3"},"CreateContentPageProvider (Component)")),(0,i.kt)("p",null,"A provider component that wraps the CreateContentPage component and provides context data and functions related to\ncreating content functionality."),(0,i.kt)("h4",{id:"methods"},(0,i.kt)("strong",{parentName:"h4"},"Methods")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"handleResponseUpdate"),"(prompt: string, promptAdjective: string, id: string, regenerate: boolean)\nHandles updating the generated response for a given prompt. It triggers the createSocialPost mutation to generate AI\nresponses based on the provided prompt and adjective. If regenerate is true, it updates an existing response; otherwise,\nit creates a new response."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prompt")," (string): The text prompt to generate AI responses."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"promptAdjective")," (string): An adjective associated with the prompt."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," (string): The ID of the listing for which the response is being updated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"regenerate")," (boolean): Indicates whether to regenerate an existing response or create a new one.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"handleCreatePost"),"(promptAdjective: string)\nHandles creating a new content post. It triggers the handleResponseUpdate function to generate and store AI responses\nfor the content post."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"promptAdjective")," (string): An adjective associated with the prompt.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"handleRegenerateResponse"),"(prompt: string, promptAdjective: string, id: string)\nHandles regenerating a response for a content post. It triggers the handleResponseUpdate function to regenerate AI\nresponses for the content post based on the provided prompt and adjective."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prompt")," (string): The text prompt to regenerate AI responses."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"promptAdjective")," (string): An adjective associated with the prompt."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," (string): The ID of the listing for which the response is being regenerated.")),(0,i.kt)("h3",{id:"effects"},(0,i.kt)("strong",{parentName:"h3"},"Effects")),(0,i.kt)("h4",{id:"loading-initial-prompt-based-on-social-media-type"},(0,i.kt)("strong",{parentName:"h4"},"Loading Initial Prompt Based on Social Media Type")),(0,i.kt)("p",null,"This effect runs whenever the ",(0,i.kt)("inlineCode",{parentName:"p"},"socialMediaType")," state changes. It is responsible for setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"initialPrompt")," state\nbased\non the selected social media type. It retrieves the corresponding initial prompt value from the ",(0,i.kt)("inlineCode",{parentName:"p"},"initialPrompts")," object\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"socialMediaType")," and updates the ",(0,i.kt)("inlineCode",{parentName:"p"},"initialPrompt")," state accordingly."),(0,i.kt)("h4",{id:"loading-selected-listing-item"},(0,i.kt)("strong",{parentName:"h4"},"Loading Selected Listing Item")),(0,i.kt)("p",null,"This effect runs whenever the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," parameter changes. It is responsible for setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"chosenItem")," state based on the\nprovided id. If there is a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," value, it updates the ",(0,i.kt)("inlineCode",{parentName:"p"},"chosenItem")," state with that value. This effect is useful\nfor\ninitializing the selected listing item when the component mounts or when the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," parameter changes."),(0,i.kt)("h4",{id:"loading-users-chosen-listing-and-updating"},(0,i.kt)("strong",{parentName:"h4"},"Loading User's Chosen Listing and Updating")),(0,i.kt)("p",null,"This effect runs whenever there are changes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"UID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"chosenItem"),". It fetches and updates\ndata related to the user's chosen listings and responses from the Firebase Realtime Database. Here's a step-by-step\nbreakdown of what this effect does:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It creates a reference (",(0,i.kt)("inlineCode",{parentName:"p"},"chosenListingsRef"),") to the user's chosen listings in the Firebase Realtime Database using\nthe user's ",(0,i.kt)("inlineCode",{parentName:"p"},"UID"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It defines an ",(0,i.kt)("inlineCode",{parentName:"p"},"onDataChange")," function that processes the snapshot of the chosen listings data.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"onDataChange")," function:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It retrieves the data from the snapshot and converts it into an array (",(0,i.kt)("inlineCode",{parentName:"li"},"chosenListingsList"),")."),(0,i.kt)("li",{parentName:"ul"},"It searches for a listing within the array that matches the ",(0,i.kt)("inlineCode",{parentName:"li"},"chosenItem")," (selected listing item) and retrieves its\ngenerated responses (if available)."),(0,i.kt)("li",{parentName:"ul"},"It reverses the order of the generated responses (",(0,i.kt)("inlineCode",{parentName:"li"},"reversedListingsList"),") to display them in reverse chronological\norder."),(0,i.kt)("li",{parentName:"ul"},"It updates the ",(0,i.kt)("inlineCode",{parentName:"li"},"chosenItem")," state with the selected listing's ID."),(0,i.kt)("li",{parentName:"ul"},"It updates the ",(0,i.kt)("inlineCode",{parentName:"li"},"generatedResponses")," state with the reversed list of generated responses."),(0,i.kt)("li",{parentName:"ul"},"It updates the ",(0,i.kt)("inlineCode",{parentName:"li"},"chosenGeneratedResponse")," state with the first generated response (if available) to display in the\nUI."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It subscribes to changes in the chosen listings data using the ",(0,i.kt)("inlineCode",{parentName:"p"},"onValue")," function from Firebase and executes\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"onDataChange")," function accordingly.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It returns a cleanup function that unsubscribes from the chosen listings data changes using the ",(0,i.kt)("inlineCode",{parentName:"p"},"off")," function from\nFirebase."))),(0,i.kt)("p",null,"This effect ensures that the component always has up-to-date data about the chosen listings and their generated\nresponses from the Firebase Realtime Database."),(0,i.kt)("h4",{id:"loading-users-chosen-listings"},(0,i.kt)("strong",{parentName:"h4"},"Loading User's Chosen Listings")),(0,i.kt)("p",null,"This effect runs whenever there is a change in the ",(0,i.kt)("inlineCode",{parentName:"p"},"UID"),". It is responsible for fetching and updating the user's chosen\nlistings from the Firebase Realtime Database. Here's a step-by-step breakdown of what this effect does:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It starts by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoadingListings")," state to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to indicate that the chosen listings are being loaded.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It creates a reference (",(0,i.kt)("inlineCode",{parentName:"p"},"chosenListingsRef"),") to the user's chosen listings in the Firebase Realtime Database using\nthe user's ",(0,i.kt)("inlineCode",{parentName:"p"},"UID"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It defines an ",(0,i.kt)("inlineCode",{parentName:"p"},"onDataChange")," function that processes the snapshot of the chosen listings data.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"onDataChange")," function:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It retrieves the data from the snapshot and converts it into an array (",(0,i.kt)("inlineCode",{parentName:"li"},"chosenListingsList"),")."),(0,i.kt)("li",{parentName:"ul"},"It updates the ",(0,i.kt)("inlineCode",{parentName:"li"},"chosenListings")," state with the array of chosen listings."),(0,i.kt)("li",{parentName:"ul"},"It sets the ",(0,i.kt)("inlineCode",{parentName:"li"},"isLoadingListings")," state to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", indicating that the loading is complete."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It subscribes to changes in the chosen listings data using the ",(0,i.kt)("inlineCode",{parentName:"p"},"onValue")," function from Firebase and executes\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"onDataChange")," function accordingly.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It returns a cleanup function that unsubscribes from the chosen listings data changes using the ",(0,i.kt)("inlineCode",{parentName:"p"},"off")," function from\nFirebase."))),(0,i.kt)("p",null,"This effect ensures that the component maintains an updated list of the user's chosen listings from the Firebase\nRealtime Database. The loading state ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoadingListings"),' helps manage the loading state of the chosen listings."'),(0,i.kt)("h3",{id:"context"},(0,i.kt)("strong",{parentName:"h3"},"Context")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateContentPageProvider")," component provides a context that contains various states, functions, and values related\nto content creation. This context can be accessed using the ",(0,i.kt)("inlineCode",{parentName:"p"},"useCreateContentPage")," hook within child components."),(0,i.kt)("h3",{id:"states"},(0,i.kt)("strong",{parentName:"h3"},"States")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"socialMediaType"),': The selected social media type (e.g., "facebook", "twitter").'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"showContentChoice"),": A boolean indicating whether to show the content choice section."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"showListings"),": A boolean indicating whether to show the listings section."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"promptAdjective"),": The adjective associated with the current prompt."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"initialPrompt"),": The initial text prompt for generating AI responses."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"generatedResponses"),": An array of generated AI responses for the selected listing item."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"prevListings"),": An array of the user's chosen listings."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"chosenItem"),": The ID of the selected listing item."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"isLoading"),": A boolean indicating whether data is currently being loaded."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"isError"),": A boolean indicating whether an error occurred."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"chosenGeneratedResponse"),": The currently chosen generated AI response."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"isAddingModalOpen"),": A boolean indicating whether the adding modal is open."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"isLoadingListings"),": A boolean indicating whether listing data is being loaded."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"isMobile"),": A boolean indicating whether the current view is mobile."),(0,i.kt)("h3",{id:"functions"},(0,i.kt)("strong",{parentName:"h3"},"Functions")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"socialMediaType related functions"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"setSocialMediaType,"),(0,i.kt)("li",{parentName:"ul"},"setShowContentChoice,"),(0,i.kt)("li",{parentName:"ul"},"setShowListings,"),(0,i.kt)("li",{parentName:"ul"},"setPromptAdjective,"),(0,i.kt)("li",{parentName:"ul"},"setInitialPrompt.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Listing related functions"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"setChosenItem,"),(0,i.kt)("li",{parentName:"ul"},"setChosenGeneratedResponse.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Content creation functions"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"handleCreatePost,"),(0,i.kt)("li",{parentName:"ul"},"handleRegenerateResponse.")),(0,i.kt)("h3",{id:"usecreatecontentpage"},(0,i.kt)("strong",{parentName:"h3"},"useCreateContentPage()")),(0,i.kt)("p",null,"A custom hook that allows components to access the context data and functions related to content creation."))}h.isMDXComponent=!0}}]);