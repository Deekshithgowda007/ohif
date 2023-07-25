"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[581],{72581:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var s=n(32735),r=n(60216),a=n.n(r),i=n(62771),o=n(28619);const l=async function(e){let{rtDisplaySet:t,viewportIndex:n,servicesManager:s}=e;const{segmentationService:r,hangingProtocolService:a,viewportGridService:i}=s.services,o=t.referencedDisplaySetInstanceUID;let l=null;l=await r.createSegmentationForRTDisplaySet(t,l,!1),r.hydrateSegmentation(t.displaySetInstanceUID);const{viewports:c}=i.getState(),u=a.getViewportsRequireUpdate(n,o);return i.setDisplaySetsForViewports(u),c.forEach(((e,s)=>{if(s===n)return;r.shouldRenderSegmentation(e.displaySetInstanceUIDs,t.displaySetInstanceUID)&&u.push({viewportIndex:s,displaySetInstanceUIDs:e.displaySetInstanceUIDs,viewportOptions:{initialImageOptions:{preset:"middle"}}})})),i.setDisplaySetsForViewports(u),!0},c={NO_NEVER:-1,CANCEL:0,HYDRATE_SEG:5};const u=function(e){let{servicesManager:t,rtDisplaySet:n,viewportIndex:s,toolGroupId:r="default"}=e;const{uiViewportDialogService:a}=t.services;return new Promise((async function(e,i){const u=await function(e,t){return new Promise((function(n,s){const r="Do you want to open this Segmentation?",a=[{type:o.LZ.U.secondary,text:"No",value:c.CANCEL},{type:o.LZ.U.primary,text:"Yes",value:c.HYDRATE_SEG}],i=t=>{e.hide(),n(t)};e.show({viewportIndex:t,type:"info",message:r,actions:a,onSubmit:i,onOutsideClick:()=>{e.hide(),n(c.CANCEL)}})}))}(a,s);if(u===c.HYDRATE_SEG){e(await l({rtDisplaySet:n,viewportIndex:s,toolGroupId:r,servicesManager:t}))}}))};var p=n(21572);const d=function(e,t,n){const{tools:s}=t.get("cornerstone.overlayViewportTools")??{};return e.createToolGroupAndAddTools(n,s,{})};function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},m.apply(this,arguments)}const{formatDate:S}=i.utils;function g(e){const{children:t,displaySets:n,viewportOptions:r,viewportIndex:a,viewportLabel:c,servicesManager:g,extensionManager:y}=e,{displaySetService:v,toolGroupService:f,segmentationService:E,uiNotificationService:w,customizationService:I}=g.services,D=`RTToolGroup-${a}`;if(n.length>1)throw new Error("RT viewport should only have a single display set");const h=n[0],[b,T]=(0,o.O_)(),[N,x]=(0,s.useState)(!1),[C,O]=(0,s.useState)(1),[P,R]=(0,s.useState)(h.isHydrated),[U,k]=(0,s.useState)(!h.isLoaded),[M,A]=(0,s.useState)(null),[G,L]=(0,s.useState)({percentComplete:null,totalSegments:null}),V=(0,s.useRef)(null),{viewports:_,activeViewportIndex:F}=b,j=h.getReferenceDisplaySet(),H=function(e){const t=e.images[0],n={PatientID:t.PatientID,PatientName:t.PatientName,PatientSex:t.PatientSex,PatientAge:t.PatientAge,SliceThickness:t.SliceThickness,StudyDate:t.StudyDate,SeriesDescription:t.SeriesDescription,SeriesInstanceUID:t.SeriesInstanceUID,SeriesNumber:t.SeriesNumber,ManufacturerModelName:t.ManufacturerModelName,SpacingBetweenSlices:t.SpacingBetweenSlices};return n}(j);V.current={displaySet:j,metadata:H};const Y=e=>{A(e.detail.element)},$=()=>{A(null)},B=(0,s.useCallback)((()=>{const{component:t}=y.getModuleEntry("@ohif/extension-cornerstone.viewportModule.cornerstone"),{displaySet:n}=V.current;return s.createElement(t,m({},e,{displaySets:[n,h],viewportOptions:{viewportType:"volume",toolGroupId:D,orientation:r.orientation,viewportId:r.viewportId},onElementEnabled:Y,onElementDisabled:$}))}),[a,h,D]),q=(0,s.useCallback)((e=>{e="left"===e?-1:1;const t=h.displaySetInstanceUID,n=E.getSegmentation(t),{segments:s}=n,r=Object.keys(s).length;let a=C+e;a>=r-1?a=1:0===a&&(a=r-1),E.jumpToSegmentCenter(t,a,D),O(a)}),[C]);(0,s.useEffect)((()=>{U||u({servicesManager:g,viewportIndex:a,rtDisplaySet:h}).then((e=>{e&&R(!0)}))}),[g,a,h,U]),(0,s.useEffect)((()=>{const{unsubscribe:e}=E.subscribe(E.EVENTS.SEGMENTATION_LOADING_COMPLETE,(e=>{e.rtDisplaySet.displaySetInstanceUID===h.displaySetInstanceUID&&k(!1),e.overlappingSegments&&w.show({title:"Overlapping Segments",message:"Overlapping segments detected which is not currently supported",type:"warning"})}));return()=>{e()}}),[h]),(0,s.useEffect)((()=>{const{unsubscribe:e}=E.subscribe(E.EVENTS.SEGMENT_LOADING_COMPLETE,(e=>{let{percentComplete:t,numSegments:n}=e;L({percentComplete:t,totalSegments:n})}));return()=>{e()}}),[h]),(0,s.useEffect)((()=>{const e=v.subscribe(v.EVENTS.DISPLAY_SETS_REMOVED,(e=>{let{displaySetInstanceUIDs:t}=e;const n=_[F];t.includes(n.displaySetInstanceUID)&&T.setDisplaySetsForViewport({viewportIndex:F,displaySetInstanceUIDs:[]})}));return()=>{e.unsubscribe()}}),[]),(0,s.useEffect)((()=>{let e=f.getToolGroup(D);if(!e)return e=d(f,I,D),x(!0),()=>{E.removeSegmentationRepresentationFromToolGroup(D),f.destroyToolGroup(D)}}),[]),(0,s.useEffect)((()=>(R(h.isHydrated),()=>{E.removeSegmentationRepresentationFromToolGroup(D),V.current=null})),[h]);let J=null;if(!V.current||j.displaySetInstanceUID!==V.current.displaySet.displaySetInstanceUID)return null;t&&t.length&&(J=t.map(((e,t)=>e&&s.cloneElement(e,{viewportIndex:a,key:t}))));const{PatientID:Z,PatientName:z,PatientSex:K,PatientAge:Q,SliceThickness:W,ManufacturerModelName:X,StudyDate:ee,SeriesDescription:te,SpacingBetweenSlices:ne,SeriesNumber:se}=V.current.metadata,re=async()=>{const e=await l({rtDisplaySet:h,viewportIndex:a,servicesManager:g});R(e)};return s.createElement(s.Fragment,null,s.createElement(o.uY,{onDoubleClick:e=>{e.stopPropagation(),e.preventDefault()},onArrowsClick:q,getStatusComponent:()=>function(e){let{isHydrated:t,onStatusClick:n}=e,r=null,a=null;const{t:i}=(0,p.$G)("Common"),l=i("LOAD");switch(t){case!0:a=()=>s.createElement(o.JO,{name:"status-alert"}),r=()=>s.createElement("div",null,"This Segmentation is loaded in the segmentation panel");break;case!1:a=()=>s.createElement(o.JO,{name:"status-untracked"}),r=()=>s.createElement("div",null,"Click LOAD to load RTSTRUCT.")}const c=()=>s.createElement("div",{className:"flex h-6 leading-6 cursor-default text-sm text-white"},s.createElement("div",{className:"min-w-[45px] flex items-center p-1 rounded-l-xl rounded-r bg-customgray-100"},s.createElement(a,null),s.createElement("span",{className:"ml-1"},"RTSTRUCT")),!t&&s.createElement("div",{className:"ml-1 px-1.5 rounded cursor-pointer hover:text-black bg-primary-main hover:bg-primary-light",onMouseUp:n},l));return s.createElement(s.Fragment,null,r&&s.createElement(o.u,{content:s.createElement(r,null),position:"bottom-left"},s.createElement(c,null)),!r&&s.createElement(c,null))}({isHydrated:P,onStatusClick:re}),studyData:{label:c,useAltStyling:!0,studyDate:S(ee),currentSeries:se,seriesDescription:`RT Viewport ${te}`,patientInformation:{patientName:z?i.default.utils.formatPN(z.Alphabetic):"",patientSex:K||"",patientAge:Q||"",MRN:Z||"",thickness:W?`${W.toFixed(2)}mm`:"",spacing:void 0!==ne?`${ne.toFixed(2)}mm`:"",scanner:X||""}}}),s.createElement("div",{className:"relative flex flex-row w-full h-full overflow-hidden"},U&&s.createElement(o.bk,{className:"w-full h-full",totalNumbers:G.totalSegments,percentComplete:G.percentComplete,loadingText:"Loading RTSTRUCT..."}),B(),J))}g.propTypes={displaySets:a().arrayOf(a().object),viewportIndex:a().number.isRequired,dataSource:a().object,children:a().node,customProps:a().object},g.defaultProps={customProps:{}};const y=g}}]);
//# sourceMappingURL=581.bundle.6cdbd7557e23931fbf78.js.map