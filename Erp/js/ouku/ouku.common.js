(function(){window.ouku={path:{root:web_root,uri:request_uri,img:web_root+"themes/ouku/"},ajax:{call:function(b,c,h,a,e,d,j){var g="",f="";j=j?j:false;a=a.toLowerCase();e=e.toLowerCase();if(typeof(d)=="string"){g="";f=""}else{if(typeof(d)=="object"){g=d.showLoader;f=d.hideLoader}else{g=this.showLoader;f=this.hideLoader}}$.ajax({url:b,data:c,beforeSend:g,complete:f,success:h,type:a,dataType:e,cache:j})},showLoader:function(){$("body").append('<div id="loader">\u6b63\u5728\u5904\u7406\u60a8\u7684\u8bf7\u6c42...</div>')},hideLoader:function(){$("#loader").remove()}},cookie:{create:function(c,d,e){if(e){var b=new Date();b.setTime(b.getTime()+(e*24*60*1000));var a="; expires="+b.toGMTString()}else{var a=""}document.cookie=c+"="+encodeURIComponent(d)+a+"; path=/"},read:function(c){var b=document.cookie.split("; ");for(var d=0;d<b.length;d++){var a=b[d].split("=");if(c==a[0]){return decodeURIComponent(a[1])}}return null},del:function(a){this.create(a,"",-1)}},date:{day:new Date().getDay(),hours:new Date().getHours(),minutes:new Date().getMinutes(),milliseconds:new Date().getTime()},validate:{is_ok:true,is_empty:function(c,a,b){if($("#"+c+' input[name="'+a+'"]').val()==""){alert(b);this.is_ok=false;$("#"+c+' input[name="'+a+'"]').focus()}else{this.is_ok=true}return this.is_ok},is_selected:function(c,a,b){if($("#"+c+' select[name="'+a+'"]').css("display")!="none"){if($("#"+c+' select[name="'+a+'"] option:eq(0)').attr("selected")==true){alert(b);this.is_ok=false}else{this.is_ok=true}}return this.is_ok},is_zip:function(c,a,b){if(!/^\d{6}$/.test($("#"+c+' input[name="'+a+'"]').val())){alert(b);this.is_ok=false;$("#"+c+' input[name="'+a+'"]').focus()}else{this.is_ok=true}return this.is_ok},is_phone:function(c,a,b){if(!/1\d{10}$/.test($("#"+c+' input[name="'+a+'"]').val())){alert(b);this.is_ok=false;$("#"+c+' input[name="'+a+'"]').focus()}else{this.is_ok=true}return this.is_ok},is_email:function(c,a,b){if(!/@/.test($("#"+c+' input[name="'+a+'"]').val())){alert(b);this.is_ok=false;$("#"+c+' input[name="'+a+'"]').focus()}else{this.is_ok=true}return this.is_ok},is_same:function(d,b,a,c){if($("#"+d+' input[name="'+b+'"]').val()!=$("#"+d+' input[name="'+a+'"]').val()){alert(c);this.is_ok=false;$("#"+d+' input[name="'+a+'"]').focus()}else{this.is_ok=true}return this.is_ok},is_size:function(d,a,b,c){if($("#"+d+' input[name="'+a+'"]').val().length!=b){alert(c);this.is_ok=false;$("#"+d+' input[name="'+a+'"]').focus()}else{this.is_ok=true}return this.is_ok},is_checked:function(c,a){var b=true;$("#"+c+' input[name="'+a+'"]').each(function(d){if($(this).attr("checked")==true){b=false;return false}});this.is_ok=b;return this.is_ok}},position:{sTop:function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},sLeft:function(){return window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}},format_price:function(b){var c=""+(parseFloat(b)+0.005);if(c.indexOf(".")==0){c="0"+c}else{if(c.indexOf(".")>0){c=c+"00"}else{c=c+".00"}}var a=c.indexOf(".");c=c.substring(0,a+3);if(c.charAt(c.indexOf(".")+1)=="0"&&c.charAt(c.indexOf(".")+2)=="0"){c=c.substring(0,c.indexOf("."))}return c},region:{loadRegions:function(b,a,e,d){var c="";if(d=="check"){c="type="+a+"&target="+e+"&parent="+b+"&page="+d}else{c="type="+a+"&target="+e+"&parent="+b}window.ouku.ajax.call(window.ouku.path.root+"region.php",c,this.response,"get","json")},loadProvinces:function(c,a){var b=(typeof a=="undefined")?"selProvinces":a;this.loadRegions(c,1,b)},loadCities:function(a,b){var c=(typeof b=="undefined")?"selCities":b;this.loadRegions(a,2,c)},loadDistricts:function(c,a){var b=(typeof a=="undefined")?"selDistricts":a;this.loadRegions(c,3,b)},changed:function(g,d,b,f){if(typeof(g)=="string"){g=document.getElementById(g)}var c=g.options[g.selectedIndex].value;this.loadRegions(c,d,b,f);if(f=="check"){var e=g.options;for(var a=0;a<e.length;a++){if(e[a].getAttribute("self")==1&&e[a].selected==true){g.style.color="red"}else{if(e[a].getAttribute("self")!=1&&e[a].selected==true){e[a].style.color="#000";g.style.color="#000"}else{if(e[a].getAttribute("self")!=1){e[a].style.color="#000"}}}}}},response:function(b,e){var f=document.getElementById(b.target);f.length=1;f.selectedIndex=0;f.style.display=(b.regions.length==0&&b.type+0==3)?"none":"";var a=-1;if(b.regions){for(i=0;i<b.regions.length;i++){var d=document.createElement("OPTION");d.value=b.regions[i].region_id;d.text=b.regions[i].region_name;if(b.page=="check"){if(b.regions[i].self==1){d.style.color="red";d.setAttribute("self",1)}else{d.style.color="#000";d.setAttribute("self",0)}}f.options.add(d);if(f.cacheValue&&f.cacheValue==d.value){a=i}}}if(a>=0){f.value=f.cacheValue}f.cacheValue=null;if(document.all){f.fireEvent("onchange")}else{var c=document.createEvent("HTMLEvents");c.initEvent("change",true,true);f.dispatchEvent(c)}}}}})();Array.prototype.remove=function(a){if(a<0){return this}else{return this.splice(a,1)}};