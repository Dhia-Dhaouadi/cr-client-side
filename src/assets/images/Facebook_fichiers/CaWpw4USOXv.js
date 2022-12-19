;/*FB_PKG_DELIM*/

__d("replaceLexicalMentionNode",["FBLogger"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,d,e){if(b===0){var f=a.splitText(d);f=f[0]}else{a=a.splitText(b,d);f=a[1]}if(f==null){c("FBLogger")("search").mustfix("createMentionNodeFromSearchResult failed to find correct offsets. Found offsets: "+b+", "+d+".");return}f.replace(e);e.selectNext(0,0)}g["default"]=a}),98);