;/*FB_PKG_DELIM*/

__d("AnimatedSlideInFromBottom.react",["clearTimeout","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");e=b.memo;var i=b.useEffect,j=b.useRef,k=b.useState,l="20px";function a(a){var b=a.children,d=a.initialOffset,e=a.targetOffset,f=a.translate,g=a.trigger;a=k(!1);var m=a[0],n=a[1],o=f!=null?f:l,p=j(!0),q=j(!1),r=j(null);i(function(){var a=function(){n(!0);if(!r.current)return;r.current.style.transition="top 0.3s 0s ease-out";r.current.style.top=e};if(g===!0&&p.current===!0){var b=setTimeout(function(){return a()},0);q.current=!0;return function(){return c("clearTimeout")(b)}}else g===!0&&q.current===!1&&(a(),q.current=!0);p.current=!1},[g,e]);a=function(){m&&r.current&&(r.current.style.transition="transform 0.3s 0s ease-out",r.current.style.transform="translateY(-"+o+")")};f=function(){m&&r.current&&(r.current.style.transition="transform 0.3s 0s ease-in",r.current.style.transform="translateY(0)")};return h.jsx("div",{className:"x10l6tqk x17qophe xh8yej3",onMouseEnter:a,onMouseLeave:f,ref:r,style:{top:d},children:b})}a.displayName=a.name+" [from "+f.id+"]";d=e(a);g["default"]=d}),98);
__d("InstantGamesPlayerUtils",["cx","CSS","Env"],(function(a,b,c,d,e,f,g,h){"use strict";function a(){return c("Env").isCometOnMobile===!0}function b(){document.body&&d("CSS").addClass(document.body,"_4png")}function e(){document.body&&d("CSS").removeClass(document.body,"_4png")}f="containerWrapper";g.isCometOnMobile=a;g.lockPlayerScrolling=b;g.unlockPlayerScrolling=e;g.containerWrapperId=f}),98);
__d("FullSizeVerticalScrollView.react",["BaseScrollableArea.react","InstantGamesPlayerUtils","UserAgent","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useEffect,k=b.useRef,l=b.useState,m={container:{height:"x5yr21d",overflowX:"x6ikm8r",overflowY:"x1rife3k",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",width:"xh8yej3",$$css:!0},defaultCursor:{cursor:"xt0e3qv",$$css:!0},dragCursor:{cursor:"xi9pz9s",$$css:!0},iOSContainer:{WebkitOverflowScrolling:"x5lxg6s",$$css:!0},iOSDragCursor:{cursor:"xj7reiq",$$css:!0}};function a(a){var b=k(0),e=l(!1),f=e[0],g=e[1],n=k(null),o=i(function(a){var c=a.clientY-b.current;b.current=a.clientY;a=(a=n.current)==null?void 0:a.getDOMNode();a!=null&&(a.scrollTop-=c)},[b]),p=i(function(){g(!1),document.removeEventListener("mouseup",p),document.removeEventListener("mousemove",o)},[o]);j(function(){var a=function(a){g(!0),b.current=a.clientY,document.addEventListener("mouseup",p),document.addEventListener("mousemove",o)};document.addEventListener("mousedown",a);return function(){document.removeEventListener("mousedown",a)}},[o,p]);e=d("InstantGamesPlayerUtils").isCometOnMobile()&&c("UserAgent").isPlatform("iOS");var q=e?m.iOSDragCursor:m.dragCursor;return h.jsx("div",{className:c("stylex")(e&&m.iOSContainer,f?q:m.defaultCursor),children:h.jsx(c("BaseScrollableArea.react"),{hideScrollbar:!0,horizontal:!0,ref:n,vertical:!1,xstyle:m.container,children:a.children})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GamesQuicksilverError",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){this.$1="UNKNOWN",this.$2=a}var b=a.prototype;b.setCode=function(a){this.$1=a;return this};b.getCode=function(){return this.$1};b.getMessage=function(){return this.$2};b.setMessage=function(a){this.$2=a;return this};b.serialize=function(){return{code:this.$1,message:this.$2||""}};return a}();f["default"]=a}),66);
__d("InstantGameGamePlayerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={clientAppID:null,environmentType:"standard",hasTournamentID:null,iframeKey:0,interactivesCommentsChannelID:"",isCommunitySectionExpanded:!1,isInteractivesCommentsInSidepane:!1,isScreenshotProviderRegistered:!1,sessionID:"",setInteractivesCommentsChannelID:function(a){},setIsCommunitySectionExpanded:function(a){},setIsInteractivesCommentsInSidepane:function(a){},setIsScreenshotProviderRegistered:function(a){},setShouldInteractivesCommentsToggleShow:function(a){},shouldInteractivesCommentsToggleShow:!1,tournamentPostID:null};c=a.createContext(b);g["default"]=c}),98);
__d("InstantGamesGameState",[],(function(a,b,c,d,e,f){"use strict";a="initial";b="loading";c="ready";d="playing";e="gameover";f.INITIAL=a;f.LOADING=b;f.READY=c;f.PLAYING=d;f.GAMEOVER=e}),66);
__d("InstantGamesTrackingData",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a,b,c){this.$1=a,this.$2=b,this.$3=c}var b=a.prototype;b.getEcosystem=function(){return this.$1};b.getSurface=function(){return this.$2};b.getFeature=function(){return this.$3};b.serialize=function(){return this.$1+"~"+this.$2+"~"+this.$3};return a}();f["default"]=a}),66);
__d("GamesServiceGameInviteFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743643");c=b("FalcoLoggerInternal").create("games_service_game_invite",a);e.exports=c}),null);
__d("GamesServiceGameInviteSidFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1942570");c=b("FalcoLoggerInternal").create("games_service_game_invite_sid",a);e.exports=c}),null);
__d("GamesServiceSharingSidFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("3610");c=b("FalcoLoggerInternal").create("games_service_sharing_sid",a);e.exports=c}),null);
__d("InstantGamesEventsFalcoFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1779450");c=b("FalcoLoggerInternal").create("instant_games_events_falco",a);e.exports=c}),null);
__d("InstantGamesEventsFalcoSidFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1997281");c=b("FalcoLoggerInternal").create("instant_games_events_falco_sid",a);e.exports=c}),null);
__d("InstantGamesTournamentsFalcoFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1999392");c=b("FalcoLoggerInternal").create("instant_games_tournaments_falco",a);e.exports=c}),null);
__d("InstantGamesTournamentsSidFalcoFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1999393");c=b("FalcoLoggerInternal").create("instant_games_tournaments_sid_falco",a);e.exports=c}),null);
__d("GamesServiceSIDLoggerUtils",["GamesServiceGameInviteFalcoEvent","GamesServiceGameInviteSidFalcoEvent","GamesServiceSharingSidFalcoEvent","InstantGamesEventsFalcoFalcoEvent","InstantGamesEventsFalcoSidFalcoEvent","InstantGamesTournamentsFalcoFalcoEvent","InstantGamesTournamentsSidFalcoFalcoEvent","gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,d,e,f,g,h){c("gkx")("1945239")?c("GamesServiceGameInviteSidFalcoEvent").log(function(){return{app_id:b,event:a,is_cloud:d,message_id:e,receiver_id:h,sender_id:g,source:f}}):c("GamesServiceGameInviteFalcoEvent").log(function(){return{app_id:b,event:a,is_cloud:d,message_id:e,receiver_id:h,sender_id:g,source:f}})}function b(a,b,d){c("gkx")("1945239")?c("InstantGamesEventsFalcoSidFalcoEvent").log(function(){return{app_id:d,event:a,source:b}}):c("InstantGamesEventsFalcoFalcoEvent").log(function(){return{app_id:d,event:a,source:b}})}function d(a){c("gkx")("1945239")?c("InstantGamesTournamentsSidFalcoFalcoEvent").log(function(){return a}):c("InstantGamesTournamentsFalcoFalcoEvent").log(function(){return a})}function e(a,b,d,e,f,g,h){c("GamesServiceSharingSidFalcoEvent").log(function(){var c;return{app_id:b,event:a,extra_data:(c=h)!=null?c:null,is_cloud:g,media_asset_id:e,sharing_source:f,ui_components:d}})}g.logGameInviteEvent=a;g.logInstantGamesEvent=b;g.logInstantGamesTournament=d;g.logSharingEvent=e}),98);
__d("TimeUtils",[],(function(a,b,c,d,e,f){"use strict";var g={DAY_IN_SECONDS:86400,now:function(){return Math.floor(Date.now()/1e3)},since:function(a){return g.now()-a}};a=g;f["default"]=a}),66);
__d("CometGamingLeftRailSectionPlaceholder.react",["BaseGlimmer.react","CometErrorBoundary.react","CometListCellGlimmer.react","CometPlaceholder.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={headerGlimmer:{height:"xxk0z11",marginStart:"x1d52u69",marginTop:"x1xmf6yo",marginBottom:"x1e56ztr",width:"xygnafs",$$css:!0}};function a(a){var b=a.children;a=a.numberOfItems;return h.jsx(c("CometErrorBoundary.react"),{children:h.jsx(c("CometPlaceholder.react"),{fallback:h.jsxs(h.Fragment,{children:[h.jsx(c("BaseGlimmer.react"),{index:0,xstyle:i.headerGlimmer}),h.jsx(c("CometListCellGlimmer.react"),{imageStyle:"circle",numberOfItems:a})]}),children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XCometPlayWithFriendsShareAttachmentControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/instantgames/playwithfriends/play/{game_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("useInstantGameSharingDialog",["fbt","ConstUriUtils","GamesServiceSIDLoggerUtils","XCometPlayWithFriendsShareAttachmentControllerRouteBuilder","createEmptyCometComposerViewState","react","useFeedComposerCometDialog"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react").useCallback;function a(a){var b=a.achievementEntryID,e=a.appID,f=a.isCloud;a=c("XCometPlayWithFriendsShareAttachmentControllerRouteBuilder").buildURL({achievement_entry_id:b,game_id:parseInt(e,10),source:"www_games_hub"});b=(b=d("ConstUriUtils").getUri(a))==null?void 0:(a=b.getQualifiedUri())==null?void 0:a.toString();b={attachmentArea:{activeAttachmentType:"SHARE"},linkAttachment:{url:(a=b)!=null?a:""},submitText:h._("__JHASH__R48d-SXL3zq__JHASH__")};var g=c("createEmptyCometComposerViewState")(b),j=f?"cloud_in_game_game_share":"ig_in_game_game_share",k=f?"share_to_newsfeed_for_cloud":"share_to_newsfeed_for_ig",l=i(function(a,b){d("GamesServiceSIDLoggerUtils").logSharingEvent(a,e,(a=b)!=null?a:k,null,j,f)},[e,f,j,k]);a=c("useFeedComposerCometDialog")({composerEntryPointName:"reshare_from_feed",composerSourceSurface:"share_dialog",composerType:"share",onSave:function(){return l("success")},onSaveError:function(){return l("failure")},tracePolicy:"comet.composer.shareInstantGame"});var m=a[0];b=i(function(){l("click","game_share_icon_www");l("impression");return m({beginningViewState:g})},[g,l,m]);return{onShareClick:b}}g["default"]=a}),98);
__d("getPlayerPushViewFlagForStore",["gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(){return{with_pv:c("gkx")("5436")?void 0:!0}}g["default"]=a}),98);
__d("GamesUnifiedImpressionLoggerUtils",["Random"],(function(a,b,c,d,e,f,g){"use strict";var h=41,i=4095;function j(a,b){b=b*Math.pow(2,h);return b+a}function k(a){if(a>9007199254740991)return 0;a=Math.floor(a);a=a.toString(2);var b="";for(var c=0;c<64-a.length;c++)b+="0";b+=a;return parseInt(b.substring(64-h),2)}function l(a){return a>9007199254740991?0:Math.floor(a/Math.pow(2,h))}function a(){var a=Date.now(),b=Math.floor(c("Random").random()*i);return j(a,b).toString()}function b(a,b){b===void 0&&(b=1);var c=k(Number(a));a=l(Number(a));return j(c,a+b).toString()}g.makeGameDistributionImpressionId=a;g.makeNewGDIIDFromExistGameDistributionImpressionId=b}),98);
__d("GamingWebDimensionHelper",[],(function(a,b,c,d,e,f){"use strict";function a(){var a=window.screen.height,b=window.screen.width;return{height:a,width:b}}f.getScreenDimensionForLogging=a}),66);
__d("InstantGamesWebHubEventsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743697");c=b("FalcoLoggerInternal").create("instant_games_web_hub_events",a);e.exports=c}),null);
__d("useInstantGamesWebHubImpressionLogging",["GamesUnifiedImpressionLoggerUtils","GamingWebDimensionHelper","InstantGamesWebHubEventsFalcoEvent","react","useSinglePartialViewImpression","useStable"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a){var b=c("useStable")(function(){return d("GamesUnifiedImpressionLoggerUtils").makeGameDistributionImpressionId()}),e=c("useSinglePartialViewImpression")({onImpressionStart:function(){var e=d("GamingWebDimensionHelper").getScreenDimensionForLogging(),f=e.height;e=e.width;var g=babelHelpers["extends"]({},a,{event:"impression",gd_impression_id:b,screen_height_override:f==null?void 0:f.toString(),screen_width_override:e==null?void 0:e.toString()});c("InstantGamesWebHubEventsFalcoEvent").log(function(){return g})}}),f=h(function(e){var f=d("GamingWebDimensionHelper").getScreenDimensionForLogging(),g=f.height;f=f.width;var h=babelHelpers["extends"]({},a,e,{event:"click",gd_impression_id:b,screen_height_override:g==null?void 0:g.toString(),screen_width_override:f==null?void 0:f.toString()});c("InstantGamesWebHubEventsFalcoEvent").log(function(){return h})},[a,b]);return{impressionID:b,impressionRef:e,logClick:f}}g["default"]=a}),98);
__d("CometGamesPlayerMoreActionsDropdown.react",["fbt","CometMenu.react","CometMenuItem.react","CometPopover.react","react","useCopyText","useInstantGameSharingDialog","useInstantGamesWebHubImpressionLogging","useLaunchFRXFlow"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.appID,d=a.fbGGURL,e=a.isCloudGaming;e=e===void 0?null:e;var f=a.onClose;a=a.showShare;a=a===void 0?!1:a;var g=c("useLaunchFRXFlow")({content_id:b,entry_point:"DEVELOPER_FEEDBACK_BUTTON",location:"INSTANT_GAMES",trigger_event_type:"REPORT_BUTTON_CLICKED"}),j=g[0];g=g[1];var k=c("useLaunchFRXFlow")({content_id:b,entry_point:"REPORT_BUTTON",location:"INSTANT_GAMES",trigger_event_type:"REPORT_BUTTON_CLICKED"}),l=k[0];k=k[1];var m=c("useCopyText")({value:d}),n=m[0];m[1];var o=m[2];e=c("useInstantGameSharingDialog")({appID:(m=b)!=null?m:"",isCloud:(m=e)!=null?m:!1});var p=e.onShareClick;m=c("useInstantGamesWebHubImpressionLogging")({app_id:b,button_type:"share_icon",section:"player_rhc_buttons"});e=m.impressionRef;var q=m.logClick;return i.jsx(c("CometPopover.react"),{role:"menu",children:i.jsxs(c("CometMenu.react"),{label:"more options",size:"full",children:[a?i.jsx(c("CometMenuItem.react"),{onClick:function(){q(),f(),p()},primaryText:h._("__JHASH__R48d-SXL3zq__JHASH__"),ref:e}):null,i.jsx(c("CometMenuItem.react"),{onClick:function(){f(),j({})},primaryText:h._("__JHASH__UNfKiFk63AD__JHASH__"),ref:g}),i.jsx(c("CometMenuItem.react"),{onClick:function(){f(),l({})},primaryText:h._("__JHASH__T2GgHmqPvRJ__JHASH__"),ref:k}),d!=null&&n?i.jsx(c("CometMenuItem.react"),{onClick:function(){f(),o()},primaryText:h._("__JHASH__3SUTfBKWM7K__JHASH__")}):null]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("InstantGameContextType",[],(function(a,b,c,d,e,f){a=Object.freeze({THREAD:"THREAD",GROUP:"GROUP",STORY:"STORY",SOLO:"SOLO",LINK:"LINK",MATCH:"MATCH",GENERIC:"GENERIC"});f["default"]=a}),66);
__d("XCometInstantGamesCategoryControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/games/instantgames/category/",Object.freeze({category:400,sort_type:"recommended"}),void 0);b=a;g["default"]=b}),98);
__d("XCometInstantGamesHubPlayControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/gaming/play/{game_or_link}/{?link_fragment}/",Object.freeze({source:"www_unknown",skip_check:!1,prefer_close:!1,ota_update:!1,with_pv:!1}),void 0);b=a;g["default"]=b}),98);
__d("InstantGamesPinShortcutDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5622362457818115"}),null);
__d("InstantGamesSubscribeBotAsyncDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5082481328453534"}),null);