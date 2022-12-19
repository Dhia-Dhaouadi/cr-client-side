;/*FB_PKG_DELIM*/

__d("GSUALoggingUtils",[],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c,d,e,f){if(b===!0)return"group_mall_featured_card";switch(a){case"homepage_stream":return"newsfeed";case"group":if(d==="GROUP_ANNOUNCEMENTS_FEED")return"group_mall_featured_tab";return f!==null?f==="DISCUSSION"?"group_mall_discussion":"group_mall_bsg_tab":(b=e)!=null?b:"group_mall_bsg_tab";case"groups_tab":return"groups_tab";case"group_serp":return"group_search";case"search_results_page":if(c==="group_posts"||c==="groups_home")return"group_tab_serp";return c==="top"||c==="posts"?"global_search_module_result":"group_mall_topics_feed";case"group_permalink":return"group_permalink";default:return"unknown"}}g.storyRenderLocationToSurface=a}),98);
__d("CometGSUALoggingContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({group_id:"",referral_code:"unknown",referral_surface:"unknown",surface:"unknown"});g["default"]=b}),98);
__d("FBReelsMuteContextDefaultValue",[],(function(a,b,c,d,e,f){"use strict";a={isMuted:!1,setMute:function(a){}};f["default"]=a}),66);
__d("FBReelsMuteContext",["FBReelsMuteContextDefaultValue","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(c("FBReelsMuteContextDefaultValue"));g["default"]=b}),98);
__d("useFBReelsProcessRoute",["CometRouteParams","useRoutePassthroughProps","uuid"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("CometRouteParams").useRouteParams(),b=c("useRoutePassthroughProps")()||{},e=typeof a.video_id==="string"?a.video_id:"",f=typeof b.trackingString==="string"?b.trackingString:"",g=typeof b.rootVideoTrackingKey==="string"?b.rootVideoTrackingKey:"",h=typeof b.rootVideoID==="string"?b.rootVideoID:"",i=typeof a.group_id==="string"?a.group_id:null,j="";typeof a.s==="string"?j=a.s:typeof b.s==="string"&&(j=b.s);a=typeof b.sessionID==="string"?b.sessionID:c("uuid")();var k=!Boolean(b.showComments),l=typeof b.isMuted==="boolean"?b.isMuted:null,m=typeof b.index==="number"?b.index:null,n=b.paginationFragment;b=b.paginationFragmentKey;return{aggregationPageNodeIndex:m,aggregationPaginationFragment:n,aggregationPaginationFragmentKey:b,groupID:i,isFullScreen:k,isMutedFromPreviousRoute:l,rootVideoID:h,rootVideoTrackingKey:g,source:j,trackingString:f,videoID:e,viewerSessionID:a}}g["default"]=a}),98);
__d("useFBReelsMute",["CometRouteRenderType","react","useFBReelsProcessRoute"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useState;function a(){var a=d("CometRouteRenderType").useIsPushView(),b=c("useFBReelsProcessRoute")();b=b.isMutedFromPreviousRoute;b=h(typeof b==="boolean"?b:!a);a=b[0];var e=b[1];b=function(a){e(a)};return[a,b]}g["default"]=a}),98);
__d("FBReelsMuteContextProvider",["FBReelsMuteContext","FBReelsMuteContextDefaultValue","react","useFBReelsMute"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useContext,j=b.useMemo;function k(a){a=a.children;var b=c("useFBReelsMute")(),d=b[0],e=b[1];b=j(function(){return{isMuted:d,setMute:e}},[d,e]);return h.jsx(c("FBReelsMuteContext").Provider,{value:b,children:a})}k.displayName=k.name+" [from "+f.id+"]";function a(a){var b=a.children,d=a.shouldUseParentContext,e=i(c("FBReelsMuteContext"));return d===!0&&e!==c("FBReelsMuteContextDefaultValue")?b:h.jsx(k,babelHelpers["extends"]({},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XCometGroupAboutControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/{idorvanity}/about/",Object.freeze({accept_recruiting_group_rules:!1,maybe_open_membership_questions:!1}),void 0);b=a;g["default"]=b}),98);
__d("GroupsCometNewMemberGreetingDialogRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5998727046844682"}),null);