;/*FB_PKG_DELIM*/

__d("LSDeleteMessage",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.fe(b.ftr(b.db.table(12).fetch([[[a[0]]]]),function(c){return c.messageId===a[1]&&b.i64.eq(c.threadKey,a[0])}),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSReportMessageInCommunityChannel",["LSIssueNewError","LSIssueNewTaskAndGetTaskID"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(g){return c.seq([function(a){return c.sb(c.db.table(115).fetch(),[["timestampMs","DESC"]]).next().then(function(a,b){var c=a.done;a=a.value;return c?d[0]=!1:(b=a.item,d[0]=b.errorShouldBeShown)})},function(a){return d[0]===!0?c.seq([function(a){return c.localizeV2Async([0,2285622730],f).then(function(a){return d[7]=a})},function(a){return c.localizeV2Async([0,1919524925],f).then(function(a){return d[8]=a})},function(a){return c.sp(b("LSIssueNewError"),f,[0,1545093],d[7],d[8],f)}]):c.resolve()},function(e){return d[2]=new c.Map(),d[2].set("thread_key",a[0]),d[2].set("message_id",a[1]),c.i64.gt([0,0],[0,0])?d[3]=c.i64.add(c.i64.of_float(Date.now()),[0,0]):d[3]=[0,0],d[4]=d[2].get("thread_key"),d[2],d[5]=c.toJSON(d[2]),c.sp(b("LSIssueNewTaskAndGetTaskID"),c.i64.to_string(d[4]),[0,374],d[5],f,f,[0,0],[0,0],f,f,d[3]).then(function(a){return a=a,d[6]=a[0],a})},function(a){return e[0]=d[6]}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("CometFRXQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="9198492416842839"}),null);
__d("CometFRXQuery$Parameters",["CometFRXQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometFRXQuery_facebookRelayOperation"),metadata:{},name:"CometFRXQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("AudioClipsBrowserAllowMicAccessFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("72");c=b("FalcoLoggerInternal").create("audio_clips_browser_allow_mic_access",a);e.exports=c}),null);
__d("AudioClipsBrowserBlockMicAccessFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("73");c=b("FalcoLoggerInternal").create("audio_clips_browser_block_mic_access",a);e.exports=c}),null);
__d("AudioClipsCancelledByUserFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("39");c=b("FalcoLoggerInternal").create("audio_clips_cancelled_by_user",a);e.exports=c}),null);
__d("AudioClipsDialogNotnowMicAccessFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("74");c=b("FalcoLoggerInternal").create("audio_clips_dialog_notnow_mic_access",a);e.exports=c}),null);
__d("AudioClipsDialogOkMicAccessFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("75");c=b("FalcoLoggerInternal").create("audio_clips_dialog_ok_mic_access",a);e.exports=c}),null);
__d("AudioClipsMicAccessCheckFailedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("76");c=b("FalcoLoggerInternal").create("audio_clips_mic_access_check_failed",a);e.exports=c}),null);
__d("AudioClipsPlaybackPauseFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("44");c=b("FalcoLoggerInternal").create("audio_clips_playback_pause",a);e.exports=c}),null);
__d("AudioClipsPlaybackResumeFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("45");c=b("FalcoLoggerInternal").create("audio_clips_playback_resume",a);e.exports=c}),null);
__d("AudioClipsPlaybackStartFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("47");c=b("FalcoLoggerInternal").create("audio_clips_playback_start",a);e.exports=c}),null);
__d("AudioClipsSendFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("49");c=b("FalcoLoggerInternal").create("audio_clips_send",a);e.exports=c}),null);
__d("AudioClipsStartRecordingClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("51");c=b("FalcoLoggerInternal").create("audio_clips_start_recording_click",a);e.exports=c}),null);
__d("AudioClipsStopRecordingClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("52");c=b("FalcoLoggerInternal").create("audio_clips_stop_recording_click",a);e.exports=c}),null);
__d("Ls1LCFeatureStage.bs",["bs_caml_int64"],(function(a,b,c,d,e,f){"use strict";a=b("bs_caml_int64").one;c=[0,2];d=[0,3];e=[0,4];b=[0,5];var g=[0,6],h=[0,7],i=[0,8],j=[0,9],k=[0,10],l=[0,11],m=[0,12],n=[0,13],o=[0,14],p=[0,15],q=[0,16];f.expandStart=a;f.expandFinish=c;f.initialScreenLoadingStart=d;f.initialScreenLoadingFinish=e;f.sendClick=b;f.saveClick=g;f.startRecordingClick=h;f.cancelClick=i;f.shareLiveLocationClick=j;f.pinClick=k;f.shareCurrentLocationClick=l;f.longClick=m;f.click=n;f.tapButton=o;f.paste=p;f.releaseSend=q}),null);
__d("Ls1LCFeatureType.bs",["bs_caml_int64"],(function(a,b,c,d,e,f){"use strict";a=b("bs_caml_int64").one;c=[0,2];d=[0,3];e=[0,4];b=[0,5];var g=[0,6],h=[0,8],i=[0,9],j=[0,10],k=[0,11],l=[0,12],m=[0,13],n=[0,14],o=[0,15],p=[0,16],q=[0,17],r=[0,18],s=[0,19],t=[0,20],u=[0,21],v=[0,22],w=[0,23],x=[0,24],y=[0,25],z=[0,26],A=[0,27],B=[0,28],C=[0,31];f.keyboard=a;f.sticker=c;f.mediaPicker=d;f.gif=e;f.camera=b;f.payment=g;f.mSuggestion=h;f.reply=i;f.quickReply=j;f.mention=k;f.pageMenu=l;f.audioClip=m;f.ephemeralTimer=n;f.extensionBar=o;f.locationSharing=p;f.welcomePage=q;f.messageRequest=r;f.pollCreation=s;f.send=t;f.hotLike=u;f.chevron=v;f.mediapaste=w;f.suggestedTab=x;f.rooms=y;f.ignoredThread=z;f.moreDrawer=A;f.soundBites=B;f.events=C}),null);
__d("Ls1lcFeatureOpenFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("153");c=b("FalcoLoggerInternal").create("ls_1lc_feature_open",a);e.exports=c}),null);
__d("MWChatAudioLog.bs",["AudioClipsBrowserAllowMicAccessFalcoEvent","AudioClipsBrowserBlockMicAccessFalcoEvent","AudioClipsCancelledByUserFalcoEvent","AudioClipsDialogNotnowMicAccessFalcoEvent","AudioClipsDialogOkMicAccessFalcoEvent","AudioClipsMicAccessCheckFailedFalcoEvent","AudioClipsPlaybackPauseFalcoEvent","AudioClipsPlaybackResumeFalcoEvent","AudioClipsPlaybackStartFalcoEvent","AudioClipsSendFalcoEvent","AudioClipsStartRecordingClickFalcoEvent","AudioClipsStopRecordingClickFalcoEvent","LSInt64.bs","Ls1LCFeatureStage.bs","Ls1LCFeatureType.bs","Ls1lcFeatureOpenFalcoEvent","LsActionCategory.bs","bs_caml_int64","bs_caml_option"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return d("LSInt64.bs").string(c("bs_caml_int64").of_float(a))}function b(a){c("AudioClipsStopRecordingClickFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:c("bs_caml_option").some(d("LSInt64.bs").string(c("bs_caml_int64").of_float(a))),entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:"true",position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:c("bs_caml_int64").to_int32(d("LsActionCategory.bs").click),with_captions:void 0}})}function e(a){c("AudioClipsStartRecordingClickFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:c("bs_caml_int64").to_int32(d("LsActionCategory.bs").click),with_captions:void 0}}),c("Ls1lcFeatureOpenFalcoEvent").log(function(){return{extra:void 0,feature:c("bs_caml_int64").to_int32(d("Ls1LCFeatureType.bs").audioClip),feature_sessionid:void 0,screen_orientation:void 0,stage:c("bs_caml_int64").to_int32(d("Ls1LCFeatureStage.bs").startRecordingClick),thread:void 0}})}function f(a){c("AudioClipsCancelledByUserFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:c("bs_caml_int64").to_int32(d("LsActionCategory.bs").click),with_captions:void 0}})}function h(a){c("AudioClipsBrowserBlockMicAccessFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:c("bs_caml_int64").to_int32(d("LsActionCategory.bs").click),with_captions:void 0}})}function i(a){c("AudioClipsBrowserAllowMicAccessFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:c("bs_caml_int64").to_int32(d("LsActionCategory.bs").click),with_captions:void 0}})}function j(a){c("AudioClipsSendFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:c("bs_caml_option").some(d("LSInt64.bs").string(c("bs_caml_int64").of_float(a))),entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:c("bs_caml_int64").to_int32(d("LsActionCategory.bs").click),with_captions:void 0}}),c("Ls1lcFeatureOpenFalcoEvent").log(function(){return{extra:void 0,feature:c("bs_caml_int64").to_int32(d("Ls1LCFeatureType.bs").audioClip),feature_sessionid:void 0,screen_orientation:void 0,stage:c("bs_caml_int64").to_int32(d("Ls1LCFeatureStage.bs").sendClick),thread:void 0}})}function k(a){c("AudioClipsPlaybackStartFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:c("bs_caml_option").some(d("LSInt64.bs").string(c("bs_caml_int64").of_float(a))),entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:c("bs_caml_int64").to_int32(d("LsActionCategory.bs").click),with_captions:void 0}})}function l(a,b){c("AudioClipsPlaybackPauseFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:c("bs_caml_option").some(d("LSInt64.bs").string(c("bs_caml_int64").of_float(a))),entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:c("bs_caml_option").some(d("LSInt64.bs").string(c("bs_caml_int64").of_float(b))),relative_url_path:void 0,rtc_call_type:void 0,source_click_category:c("bs_caml_int64").to_int32(d("LsActionCategory.bs").click),with_captions:void 0}})}function m(a,b){c("AudioClipsPlaybackResumeFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:c("bs_caml_option").some(d("LSInt64.bs").string(c("bs_caml_int64").of_float(a))),entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:c("bs_caml_option").some(d("LSInt64.bs").string(c("bs_caml_int64").of_float(b))),relative_url_path:void 0,rtc_call_type:void 0,source_click_category:c("bs_caml_int64").to_int32(d("LsActionCategory.bs").click),with_captions:void 0}})}function n(a){c("AudioClipsDialogOkMicAccessFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:c("bs_caml_int64").to_int32(d("LsActionCategory.bs").click),with_captions:void 0}})}function o(a){c("AudioClipsDialogNotnowMicAccessFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:c("bs_caml_int64").to_int32(d("LsActionCategory.bs").click),with_captions:void 0}})}function p(a){c("AudioClipsMicAccessCheckFailedFalcoEvent").log(function(){return{attachment_id:void 0,connection_quality:void 0,duration:void 0,entry_point:void 0,error_code:void 0,error_message:void 0,has_access_token:void 0,is_prefetch:void 0,position:void 0,relative_url_path:void 0,rtc_call_type:void 0,source_click_category:c("bs_caml_int64").to_int32(d("LsActionCategory.bs").click),with_captions:void 0}})}g.floatToInt64String=a;g.logClickStopRecording=b;g.logClickStartRecording=e;g.logDeleteRecording=f;g.logBrowserDenyAccess=h;g.logBrowserAllowAccess=i;g.logSendRecording=j;g.logPlaybackStart=k;g.logPlaybackPause=l;g.logPlaybackResume=m;g.logDialogOk=n;g.logDialogNotNow=o;g.logMicAccessCheckFailed=p}),98);
__d("MWChatMessageBothOrientationFocusGroup.bs",["fbt","CometComponentWithKeyCommands.react","CometKeys","FocusGroup.react","focusScopeQueries","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("FocusGroup.react").createFocusGroup(d("focusScopeQueries").tabbableScopeQuery);e=b[0];d=b[1];b={key:c("CometKeys").UP};var j={key:c("CometKeys").DOWN},k={key:c("CometKeys").LEFT},l={key:c("CometKeys").RIGHT},m=[{command:b,description:h._("__JHASH__HYvhkJNYo2M__JHASH__"),handler:function(a){}},{command:j,description:h._("__JHASH__6tFY25IlnV4__JHASH__"),handler:function(a){}},{command:k,description:h._("__JHASH__6tFY25IlnV4__JHASH__"),handler:function(a){}},{command:l,description:h._("__JHASH__HYvhkJNYo2M__JHASH__"),handler:function(a){}}];function a(a){a=a.children;return i.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:m,xstyle:!1,children:a})}a.displayName=a.name+" [from "+f.id+"]";h=a;g.FocusGroup=e;g.FocusGroupItem=d;g.keyUp=b;g.keyDown=j;g.keyLeft=k;g.keyRight=l;g.commandConfigs=m;g.keyCommands=h}),98);
__d("MWLSMessageReportingToken.bs",["bs_int64","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.useMemo(function(){return window.btoa("message_thread:"+c("bs_int64").to_string(a.threadKey)+":"+a.messageId)},[a.messageId])}b=a;g.useHook=b}),98);
__d("cometMessengerFileUploadComposerPluginSupportedTypes",[],(function(a,b,c,d,e,f){"use strict";a=["photo","video","file"];b=a;f["default"]=b}),66);
__d("useCometMessengerFileUploadPaste",["react","useCometLexicalFileDragAndDrop"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a){var b=a.editor,d=a.handlePastedFiles;a=a.isMimeTypeAcceptable;var e=h(function(a){a.length>0&&d(a)},[d]);c("useCometLexicalFileDragAndDrop")({editor:b,isMimeTypeAcceptable:a,onSubmit:e})}g["default"]=a}),98);
__d("CometMessengerHandlePastedFileComposerPlugin",["cometIsMimeTypeForMedia","cometMessengerFileUploadComposerPluginSupportedTypes","useCometMessengerFileUploadPaste"],(function(a,b,c,d,e,f,g){"use strict";function h(a){if(a.kind!=="file")return!1;for(var b=c("cometMessengerFileUploadComposerPluginSupportedTypes"),e=Array.isArray(b),f=0,b=e?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=b.length)break;g=b[f++]}else{f=b.next();if(f.done)break;g=f.value}g=g;switch(g){case"photo":if(d("cometIsMimeTypeForMedia").isMimeTypeForPhoto(a.type))return!0;break;case"video":if(d("cometIsMimeTypeForMedia").isMimeTypeForVideo(a.type))return!0;break;case"file":if(d("cometIsMimeTypeForMedia").isMimeTypeForFile(a.type))return!0;break;default:g}}return!1}function a(a){var b=a.editor;a=a.handlePastedFiles;c("useCometMessengerFileUploadPaste")({editor:b,handlePastedFiles:a,isMimeTypeAcceptable:h});return null}g["default"]=a}),98);
__d("MessageSendsClientFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1271");c=b("FalcoLoggerInternal").create("message_sends_client",a);e.exports=c}),null);
__d("MWLogSend.bs",["LSInt64.bs","MessageSendsClientFalcoEvent","ReQL.bs","bs_belt_Option","bs_caml","bs_caml_int64","bs_caml_option","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,e,f,g,h,i,j,k,l,m,n,o,p,q){var r=n!==void 0?c("bs_caml_option").valFromOption(n):void 0,s=o!==void 0?c("bs_caml_option").valFromOption(o):void 0,t=p!==void 0?c("bs_caml_option").valFromOption(p):void 0;c("promiseDone")(d("ReQL.bs").toArray(d("ReQL.bs").filter(d("ReQL.bs").getKeyRange(d("ReQL.bs").fromTableAscending(a.table("participants")),{hd:b,tl:0}),function(a){return c("bs_caml").i64_neq(a.contactId,h)})).then(function(a){var h=a.map(function(a){return d("LSInt64.bs").string(a.contactId)}),n=r!==void 0?d("LSInt64.bs").ofString(r):d("LSInt64.bs").string(b),o=c("bs_belt_Option").map(c("bs_belt_Option").map(s,c("bs_caml_int64").of_float),d("LSInt64.bs").string);c("MessageSendsClientFalcoEvent").log(function(){return{additional_tags:t,backend:c("bs_caml_int64").to_int32(m),event_type:c("bs_caml_int64").to_int32(l),feature_tags:void 0,group_thread_subtype:void 0,igd_action:void 0,igd_target_type:void 0,igd_verb:void 0,initiating_app_id:void 0,is_reply:k,message_attachment_fbids:g,message_id:void 0,message_type:c("bs_caml_int64").to_int32(j),messaging_thread_fbid:c("bs_caml_option").some(n),messaging_thread_type:c("bs_caml_int64").to_int32(e),msg_ttl:o,nav_chain:void 0,nonce:void 0,offline_threading_id:f,recipient_fbids:h,send_attribution:c("bs_caml_int64").to_int32(i),send_attribution_raw:void 0,view_mode:void 0}})}))}g.log=a}),98);
__d("MWOpenMediaManagerUtils.bs",["LS.bs","LSGenerateTraceId","LSMarkSubJobCompletedV2","LSMessageSendStatusV2.bs","MWConsole","MWPComposerMediaUploadUtil.bs","MWPOpenComposerUtils.bs","OfflineThreadingId.bs","Promise","ReQL.bs","bs_caml_int64","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return b("Promise").resolve(a.map(function(a){return[a,d("OfflineThreadingId.bs").make()]}))}function e(a,e,f,g){var h=function(b,e){e=e.event;if(!e.lengthComputable)return;var f=e.loaded/e.total;c("promiseDone")(a.runInTransaction(function(a){return d("MWPOpenComposerUtils.bs").updateMediaStaging(a,b,function(a){return{attachmentType:a.attachmentType,durationMs:a.durationMs,fbid:a.fbid,filename:a.filename,fileSize:a.fileSize,hasError:a.hasError,isSent:a.isSent,mailboxType:a.mailboxType,mimeType:a.mimeType,offlineAttachmentId:a.offlineAttachmentId,offlineThreadingId:a.offlineThreadingId,previewHeight:a.previewHeight,previewUrl:a.previewUrl,previewWidth:a.previewWidth,progress:f,threadKey:a.threadKey}})},"readwrite"))},i=function(f,g){c("promiseDone")(a.runInTransaction(function(a){var h=d("MWPOpenComposerUtils.bs").updateMediaStaging(a,f,function(a){return{attachmentType:a.attachmentType,durationMs:a.durationMs,fbid:c("bs_caml_int64").of_float(g),filename:a.filename,fileSize:a.fileSize,hasError:a.hasError,isSent:a.isSent,mailboxType:a.mailboxType,mimeType:a.mimeType,offlineAttachmentId:a.offlineAttachmentId,offlineThreadingId:a.offlineThreadingId,previewHeight:a.previewHeight,previewUrl:a.previewUrl,previewWidth:a.previewWidth,progress:1,threadKey:a.threadKey}}),i=a.table("media_send_jobs").get({hd:f,tl:0}).then(function(h){if(h===void 0)return b("Promise").resolve();var i=d("LS.bs").make(a),j=h.offlineThreadingId,k=h.offlineAttachmentId;return c("LSMarkSubJobCompletedV2")(f,c("bs_caml_int64").of_float(g),void 0,void 0,void 0,i).then(function(b){return d("MWPOpenComposerUtils.bs").deleteMediaStaging(a,f)}).then(function(b){return d("MWPOpenComposerUtils.bs").updateAttachment(a,e,j,k,function(a){return babelHelpers["extends"]({},a,{attachmentFbid:g.toString()})})}).then(function(a){return d("MWPOpenComposerUtils.bs").resumeSendJob(i,j,c("LSGenerateTraceId")())})});return b("Promise").all([h,i])},"readwrite"))},j=function(e,f){c("promiseDone")(a.runInTransaction(function(a){return d("MWPOpenComposerUtils.bs").updateMediaStaging(a,e,function(a){return{attachmentType:a.attachmentType,durationMs:a.durationMs,fbid:a.fbid,filename:a.filename,fileSize:a.fileSize,hasError:!0,isSent:a.isSent,mailboxType:a.mailboxType,mimeType:a.mimeType,offlineAttachmentId:a.offlineAttachmentId,offlineThreadingId:a.offlineThreadingId,previewHeight:a.previewHeight,previewUrl:a.previewUrl,previewWidth:a.previewWidth,progress:a.progress,threadKey:a.threadKey}}).then(function(c){return a.table("media_send_jobs").get({hd:e,tl:0}).then(function(c){if(c!==void 0)return d("ReQL.bs").first(d("ReQL.bs").getKeyRange(d("ReQL.bs").fromIndexAscending(a.table("messages").index("optimistic")),{hd:c.offlineThreadingId,tl:0})).then(function(c){if(c===void 0)return b("Promise").resolve();c=babelHelpers["extends"]({},c,{sendStatusV2:d("LSMessageSendStatusV2.bs").nonRetriableError});return a.table("messages").put(c)});else return b("Promise").resolve()})})},"readwrite"))},k=f.map(function(a){return a[1]});f=f.map(function(a){return a[0]});return d("MWPComposerMediaUploadUtil.bs").startUpload(h,i,j,void 0,f,k,g)}g.preprocess=a;g.upload=e}),98);
__d("MWV2ForwardMenuItem.bs",["fbt","MWMenuItem.react","MWV2UseMessageForwardAction.bs","ReQL.bs","ReQLSubscription.bs","bs_curry","react","useReStore"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function j(a,b){return d("ReQLSubscription.bs").useFirstExn(i.useMemo(function(){return d("ReQL.bs").getKeyRange(d("ReQL.bs").fromTableAscending(a.table("threads")),{hd:b.threadKey,tl:0})},[a,JSON.stringify(b.threadKey)]))}function a(a){a=a.message;var b=c("useReStore")();b=j(b,a);var e=d("MWV2UseMessageForwardAction.bs").useHook(b,a);b=h._("__JHASH__GvPr2MwluxY__JHASH__");return i.jsx(c("MWMenuItem.react"),{"aria-label":b,onClick:function(a){return c("bs_curry")._1(e)},primaryText:b,testid:void 0})}a.displayName=a.name+" [from "+f.id+"]";b=a;e=b;g.make=e}),98);
__d("MWV2RemoveMenuItem.bs",["fbt","CometLazyDialogTrigger.react","JSResourceForInteraction","LS.bs","LSDeleteMessage","LSMessageSendStatusV2.bs","LsTargetType.bs","MWCMIsAnyCMThread","MWMenuItem.react","MWV2LogMessageClick.bs","ReQL.bs","ReQLSubscription.bs","bs_caml","bs_curry","promiseDone","react","useReStore"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.canRemoveMessageGlobally,e=a.message,f=c("useReStore")(),g=h._("__JHASH__xWxZXNnPg5R__JHASH__"),j=e.messageId,k=e.threadKey;a=d("ReQLSubscription.bs").useFirstExn(i.useMemo(function(){return d("ReQL.bs").getKeyRange(d("ReQL.bs").fromTableAscending(f.table("threads")),{hd:k,tl:0})},[f,JSON.stringify(k)]));var l=c("MWCMIsAnyCMThread")(a.threadType)&&c("bs_caml").i64_eq(e.sendStatusV2,d("LSMessageSendStatusV2.bs").nonRetriableError),m=i.useCallback(function(a){c("promiseDone")(f.runInTransaction(function(a){return c("LSDeleteMessage")(k,j,d("LS.bs").make(a))},"readwrite"))},[f,JSON.stringify(k),JSON.stringify(j)]),n=i.useRef(null);return i.jsx(c("CometLazyDialogTrigger.react"),{dialogProps:{canRemoveMessageGlobally:b,message:e,thread:a},dialogResource:c("JSResourceForInteraction")("MWV2RemoveMessageDialog",{"class":"fluid",name:"MWV2RemoveMessageDialog"}).__setRef("MWV2RemoveMenuItem.bs"),children:function(a){return i.jsx(c("MWMenuItem.react"),{"aria-label":g,onClick:function(b){d("MWV2LogMessageClick.bs").log(e,d("LsTargetType.bs").removeButton);b=e.subscriptErrorMessage;if(b!==void 0&&l)return c("bs_curry")._1(m);else return c("bs_curry")._1(a)},primaryText:h._("__JHASH__OBeSQ3xvN5u__JHASH__"),ref:n,testid:void 0})}})}a.displayName=a.name+" [from "+f.id+"]";b=a;e=b;g.make=e}),98);
__d("MWV2ReplyMenuItem.bs",["fbt","MWMenuItem.react","MWPReplyContext.bs","bs_curry","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.message;a=h._("__JHASH__xFCj85w6vra__JHASH__");var e=i.useContext(d("MWPReplyContext.bs").context),f=e.setReply;return i.jsx(c("MWMenuItem.react"),{"aria-label":a,onClick:function(a){return c("bs_curry")._2(f,{messageId:b.messageId,offlineThreadingId:b.offlineThreadingId,sendStatusV2:b.sendStatusV2,timestampMs:b.timestampMs},b.threadKey)},primaryText:a,testid:void 0})}a.displayName=a.name+" [from "+f.id+"]";b=a;e=b;g.make=e}),98);
__d("MWV2ReportMessageMenuItem.bs",["fbt","LS.bs","LSInternetConnectionState.bs","LSReportMessageInCommunityChannel","MWMenuItem.react","ReQL.bs","ReQLSubscription.bs","bs_caml","bs_curry","bs_int64","cometPushToast","promiseDone","react","useCometConfirmationDialog","useReStore"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.message,e=c("useReStore")(),f=d("ReQLSubscription.bs").useFirst(i.useMemo(function(){return d("ReQL.bs").fromTableAscending(e.table("connectivity_status"))},[e])),g=h._("__JHASH__d_L8PCP9wn0__JHASH__"),j=i.useCallback(function(a){c("promiseDone")(e.runInTransaction(function(a){return c("LSReportMessageInCommunityChannel")(b.threadKey,b.messageId,d("LS.bs").make(a))},"readwrite"),function(a){if(f!==void 0&&c("bs_caml").i64_eq(f.internetConnectionState,d("LSInternetConnectionState.bs").connected)){d("cometPushToast").cometPushSimpleToast(g);return}})},[e,b.messageId,c("bs_int64").to_string(b.threadKey)]),k=c("useCometConfirmationDialog")(),l=i.useCallback(function(a){return c("bs_curry")._3(k,{body:h._("__JHASH__N-iMIiU3yyg__JHASH__"),cancel:h._("__JHASH__ko1T7DvDF-J__JHASH__"),confirm:h._("__JHASH__Se9aOBDM-5h__JHASH__"),title:h._("__JHASH__ZQlRxOvru63__JHASH__")},function(a){return c("bs_curry")._1(j)},function(a){})},[k,j]);a=h._("__JHASH__Un1168J6Rxb__JHASH__");return i.jsx(c("MWMenuItem.react"),{"aria-label":a,onClick:function(a){return c("bs_curry")._1(l)},primaryText:a,testid:void 0})}a.displayName=a.name+" [from "+f.id+"]";b=a;e=b;g.make=e}),98);
__d("CometFRX.entrypoint",["CometFRXQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.conformed_interface_override,e=a.entryPoint,f=a.id,g=a.location;a=a.responsible_id;return{queries:{frx:{parameters:c("CometFRXQuery$Parameters"),variables:{input:{conformed_interface_override:b,entry_point:e,id:f,location:g,responsible_id:a},scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometFRX.react").__setRef("CometFRX.entrypoint")};g["default"]=a}),98);
__d("MWV2ReportMessageToFBMenuItem.bs",["fbt","CometEntryPointDialogTrigger.react","CometFRX.entrypoint","MWLSMessageReportingToken.bs","MWMenuItem.react","bs_curry","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.message;var b=h._("__JHASH__2SjbZXVdFlO__JHASH__");a=d("MWLSMessageReportingToken.bs").useHook(a);a={entryPoint:"report_long_press",id:a,location:"messenger_community_messaging_group_thread_details"};return i.jsx(c("CometEntryPointDialogTrigger.react"),{dialogEntryPoint:c("CometFRX.entrypoint"),otherProps:void 0,preloadParams:a,children:function(a){return i.jsx(c("MWMenuItem.react"),{"aria-label":b,onClick:function(b){return c("bs_curry")._1(a)},primaryText:b})}})}a.displayName=a.name+" [from "+f.id+"]";b=a;e=b;g.make=e}),98);
__d("MWV2ContextualActionsMenu.bs",["fbt","CometPopover.react","MWChatMessageBothOrientationFocusGroup.bs","MWMenu.react","MWV2ForwardMenuItem.bs","MWV2RemoveMenuItem.bs","MWV2ReplyMenuItem.bs","MWV2ReportMessageMenuItem.bs","MWV2ReportMessageToFBMenuItem.bs","cr:4722","focusScopeQueries","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=c("react");function a(a){var e=a.canRemoveMessageGlobally,f=a.extraActions,g=a.message,j=a.showForwardActionInContextualMenu,k=a.showPinMessageActionInContextualMenu,l=a.showReplyActionInContextualMenu,m=a.showReportCommunityMessageToAdmin,n=a.showReportCommunityMessageToFacebook;a=a.showUnsendInContextualMenu;var o=h._("__JHASH__xVGUtEB2kuN__JHASH__");return i.jsx(c("CometPopover.react"),{autoFocus:!0,withArrow:!0,children:i.jsx(d("MWChatMessageBothOrientationFocusGroup.bs").keyCommands,{children:i.jsx(d("MWChatMessageBothOrientationFocusGroup.bs").FocusGroup,{allowModifiers:!0,orientation:"both",preventScrollOnFocus:!1,tabScopeQuery:d("focusScopeQueries").tabbableScopeQuery,children:i.jsxs(c("MWMenu.react"),{label:o,size:"full",children:[a?i.jsx(d("MWV2RemoveMenuItem.bs").make,{canRemoveMessageGlobally:e,message:g}):null,j?i.jsx(d("MWV2ForwardMenuItem.bs").make,{message:g}):null,l?i.jsx(d("MWV2ReplyMenuItem.bs").make,{message:g}):null,k&&b("cr:4722")?i.jsx(b("cr:4722"),{message:g}):null,m?i.jsx(d("MWV2ReportMessageMenuItem.bs").make,{message:g}):null,n?i.jsx(d("MWV2ReportMessageToFBMenuItem.bs").make,{message:g}):null,f]})})})})}a.displayName=a.name+" [from "+f.id+"]";e=a;f=e;g.make=f}),98);
__d("MWV2ContextualActionsMenuDeferred.react",["MWV2ContextualActionsMenu.bs"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=d("MWV2ContextualActionsMenu.bs").make}),98);
__d("MlsMessageActionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1401");c=b("FalcoLoggerInternal").create("mls_message_action",a);e.exports=c}),null);
__d("MWLogMessageAction.bs",["LSInt64.bs","MWLSContactTypeExactUtils.bs","MlsMessageActionFalcoEvent","Promise","ReQL.bs","bs_belt_Option","bs_caml_int64","bs_caml_option","bs_int64","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";function a(a,e,f,g,h,i,j,k,l,m,n,o){var p=e!==void 0?c("bs_caml_option").valFromOption(e):void 0,q=i!==void 0?c("bs_caml_option").valFromOption(i):void 0,r=j!==void 0?c("bs_caml_option").valFromOption(j):void 0,s=k!==void 0?c("bs_caml_option").valFromOption(k):void 0,t=l!==void 0?c("bs_caml_option").valFromOption(l):void 0,u=m!==void 0?m:"text";c("promiseDone")(a.runInTransaction(function(a){return b("Promise").all([d("ReQL.bs").first(d("ReQL.bs").getKeyRange(d("ReQL.bs").fromTableAscending(a.table("threads")),{hd:f,tl:0})),d("ReQL.bs").toArray(d("ReQL.bs").getKeyRange(d("ReQL.bs").fromTableAscending(a.table("participants")),{hd:f,tl:0})),d("ReQL.bs").first(d("ReQL.bs").filter(d("ReQL.bs").mergeJoin(d("ReQL.bs").getKeyRange(d("ReQL.bs").fromTableAscending(a.table("participants")),{hd:f,tl:0}),d("ReQL.bs").fromTableAscending(a.table("contacts"))),function(a){return d("MWLSContactTypeExactUtils.bs").isIgContact(a[1])}))]).then(function(a){var e=a[1],i=a[0],j=c("bs_belt_Option").isSome(a[2]);i!==void 0&&c("MlsMessageActionFalcoEvent").log(function(){return{action:h,browser_window_height:window.innerHeight,browser_window_width:window.innerWidth,device_screen_height:window.screen.height,device_screen_width:window.screen.width,error_text:r,extra:q,group_size:c("bs_caml_option").some(d("LSInt64.bs").ofString(String(e.length))),is_xac_thread:j,ls_thread_type:c("bs_caml_int64").to_int32(i.threadType),message_type:u,mid:p,reaction:s,recipient_id:t!==void 0?c("bs_int64").to_string(t):void 0,sender_id:c("bs_caml_option").some(d("LSInt64.bs").ofString(c("bs_int64").to_string(n))),source:g,thread_id:c("bs_int64").to_string(f)}});return b("Promise").resolve()})},"readwrite"))}g.log=a}),98);
__d("ZenonUserActionLogger.bs",["ZenonUserActionLogger"],(function(a,b,c,d,e,f,g){"use strict";function a(a){d("ZenonUserActionLogger").logClick(a)}function b(a){d("ZenonUserActionLogger").logImpression(a)}g.logClick=a;g.logImpression=b}),98);
__d("ZenonUserActionLoggerCommon.bs",["cr:11084"],(function(a,b,c,d,e,f,g){"use strict";g.$LazyZenonUserActionLoggerForMessenger$OR$ZenonUserActionLogger$requireCond=b("cr:11084"),g.logClick=b("cr:11084").logClick,g.logImpression=b("cr:11084").logImpression}),98);
__d("LsMessageClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743853");c=b("FalcoLoggerInternal").create("ls_message_click",a);e.exports=c}),null);