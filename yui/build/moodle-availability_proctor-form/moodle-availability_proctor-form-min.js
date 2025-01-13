YUI.add("moodle-availability_proctor-form",function(me,e){M.availability_proctor=M.availability_proctor||{},M.availability_proctor.form=me.Object(M.core_availability.plugin),M.availability_proctor.form.rules=null,M.availability_proctor.form.initInner=function(e,i,a,t,n){this.rules=e,this.warnings=i,this.scoring=a,this.defaults=t,this.groups=n},M.availability_proctor.form.instId=0,M.availability_proctor.form.getNode=function(e){var a,i,t,n,o,l,r,s,c,u,d,m,p,b,f,v,h,g,_,j,y,w,k,x,B,L,P,S,C,H,q,U,Y,$,N,z,G,T,J,K,I,R,A,E,O,Q,W,X,Z,ee,ie,ae,te,ne,oe,le,V,re,se;function D(e,i){return i=i||"availability_proctor",M.util.get_string(e,i)}function ce(e){var i=D("showmore","core_form");return'<a href="#" class="proctor-moreless" data-more="'+i+'" data-less="'+D("showless","core_form")+'">'+i+'</a><div class="hidden col-md-12">'+e+"</div>"}function F(e,i,a,t){return'<span class="availability-group form-group mb-2 d-flex '+(t?"flex-column":"flex-row")+'"><div class="col-md-'+(t?12:5)+' col-form-label d-flex pb-0 pl-md-0">  <label for="'+e+'">'+i+'</label></div><div class="col-md-'+(t?12:7)+' form-inline align-items-start felement pl-md-0">'+a+"</div></span>"}function ue(e){setTimeout(e,0)}function de(e){1==e?(k.addClass("btn-primary"),k.removeClass("btn-secondary"),x.addClass("btn-secondary"),x.removeClass("btn-primary"),B.removeClass("hidden"),L.addClass("hidden")):(x.addClass("btn-primary"),x.removeClass("btn-secondary"),k.addClass("btn-secondary"),k.removeClass("btn-primary"),B.addClass("hidden"),L.removeClass("hidden"))}for(C in M.availability_proctor.form.instId+=1,n=(i="proctor"+M.availability_proctor.form.instId)+"_mode",o=i+"_schedulingRequired",l=i+"_autoRescheduling",r=i+"_isTrial",I=i+"_identification",s=i+"_customRules",c=i+"_auxCamera",A=i+"_auxCameraMode",u=i+"_allowmultipledisplays",d=i+"_allowvirtualenvironment",m=i+"_checkidphotoquality",p=i+"_secureBrowser",b=i+"_secureBrowserLevel",f=i+"_biometryEnabled",v=i+"_biometrySkipfail",h=i+"_biometryFlow",g=i+"_biometryTheme",_=i+"_userAgreement",R=i+"_webCameraMainView",j=i+"_calculator",y=i+"_allowedProcesses",w=i+"_forbiddenProcesses",P="white-space: break-spaces; display:flex; align-items: baseline; justify-content: flex-start;",t=F(t=i+"_duration",D("duration"),'<input type="text" name="duration" id="'+t+'" class="form-control">'),t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t+=F(n,D("proctoring_mode"),'<select name="mode" id="'+n+'" class="custom-select">  <option value="online">'+D("online_mode")+'</option>  <option value="identification">'+D("identification_mode")+'</option>  <option value="offline">'+D("offline_mode")+'</option>  <option value="auto">'+D("auto_mode")+"</option></select>"))+F(I,D("identification"),'<select name="identification" id="'+I+'" class="custom-select">  <option value="passport">'+D("passport_identification")+'</option>  <option value="face">'+D("face_identification")+'</option>  <option value="face_and_passport">'+D("face_passport_identification")+'</option>  <option value="skip">'+D("skip_identification")+"</option></select>"))+F(R,D("web_camera_main_view"),'<select name="webcameramainview" id="'+R+'" class="custom-select">  <option value="front">'+D("web_camera_main_view_front")+'</option>  <option value="side">'+D("web_camera_main_view_side")+"</option></select>"))+F(o,D("scheduling_required"),'<input type="checkbox" name="scheduling_required" id="'+o+'" value="1">&nbsp;<label for="'+o+'">'+D("enable")+"</label> "))+F(l,D("auto_rescheduling"),'<input type="checkbox" name="auto_rescheduling" id="'+l+'" value="1">&nbsp;<label for="'+l+'">'+D("enable")+"</label> "))+F(r,D("is_trial"),'<input type="checkbox" name="istrial" id="'+r+'" value="1">&nbsp;<label for="'+r+'">'+D("enable")+"</label> "))+F(c,D("auxiliary_camera"),'<input type="checkbox" name="auxiliarycamera" id="'+c+'" value="1">&nbsp;<label for="'+c+'">'+D("enable")+"</label> "))+F(A,D("auxiliary_camera_mode"),'<select name="auxiliarycameramode" id="'+A+'" class="custom-select">  <option value="photo">'+D("auxiliary_camera_mode_photo")+'</option>  <option value="video">'+D("auxiliary_camera_mode_video")+"</option></select>"))+F(p,D("enable_secure_browser"),'<input type="checkbox" name="securebrowser" id="'+p+'" value="1">&nbsp;<label for="'+p+'">'+D("enable")+"</label> "))+F(b,D("secure_browser_level"),'<select name="securebrowserlevel" id="'+b+'" class="custom-select">  <option value="basic">'+D("secure_browser_level_basic")+'</option>  <option value="medium">'+D("secure_browser_level_medium")+'</option>  <option value="high">'+D("secure_browser_level_high")+"</option></select>"))+F(u,D("allowmultipledisplays"),'<label for="'+u+'"><input type="checkbox" name="allowmultipledisplays" id="'+u+'" value="1">&nbsp;'+D("enable")+"</label> "))+F(d,D("allowvirtualenvironment"),'<label for="'+d+'"><input type="checkbox" name="allowvirtualenvironment" id="'+d+'" value="1">&nbsp;'+D("enable")+"</label> "))+F(m,D("checkidphotoquality"),'<label for="'+m+'"><input type="checkbox" name="checkidphotoquality" id="'+m+'" value="1">&nbsp;'+D("enable")+"</label> "))+F(_,D("user_agreement_url"),'<input name="useragreementurl" id="'+_+'" class="form-control" value="" />'))+F(s,D("custom_rules"),'<textarea name="customrules" id="'+s+'" style="width: 100%" class="form-control"></textarea>'))+F(j,D("calculator"),'<select name="calculator" id="'+j+'" class="custom-select">  <option value="off">'+D("calculator_off")+'</option>  <option value="simple">'+D("calculator_simple")+'</option>  <option value="scientific">'+D("calculator_scientific")+"</option></select>"),S="",this.rules)S+='<label for="'+(H=i+"_"+C)+'" style="'+P+'"><input type="checkbox" name="'+C+'" id="'+H+'" value="'+C+'" >&nbsp;'+D(C)+"</label>";for(U in t+=F(null,D("rules"),'<div class="rules" style="white-space:nowrap">'+S+"</div>"),q="",this.groups)q+='<label  style="'+P+'"><input value="'+(Y=this.groups[U]).id+'" type="checkbox" name="proctoring-groups['+Y.id+']">&nbsp;'+Y.name+"</label>";for(
N in q&&q.length&&(t+=F(null,D("select_groups"),'<div class="groups">'+q+"</div>")),t=(t+=F(w,D("forbidden_processes"),'<textarea name="forbiddenprocesses" id="'+w+'" style="width: 100%" class="form-control"></textarea><div class="text-muted">'+D("processes_list_hint")+"</div>"))+F(y,D("allowed_processes"),'<textarea name="allowedprocesses" id="'+y+'" style="width: 100%" class="form-control"></textarea><div class="text-muted">'+D("processes_list_hint")+"</div>"),$="",this.warnings)$+='<label for="'+(z=i+"_"+N)+'" style="'+P+'"><input type="checkbox" name="'+N+'" id="'+z+'" value="'+N+'" >&nbsp;'+D(N)+"</label>";for(T in G="",this.scoring)K='<input type="number" class="proctor-scoring-input" value=""step="0.01" name="'+T+'"id="scoring_'+(J=i+"_"+T)+'"min="'+this.scoring[T].min+'" max="'+this.scoring[T].max+'">',G+=F(J,D("scoring_"+T),K);if(I="",I=(I=(I=(I+=F(f,D("biometry_enabled"),'<input type="checkbox" name="biometryenabled" id="'+f+'" value="1">&nbsp;<label for="'+f+'">'+D("enable")+"</label> "))+F(v,D("biometry_skipfail"),'<input type="checkbox" name="biometryskipfail" id="'+v+'" value="1">&nbsp;<label for="'+v+'">'+D("enable")+"</label> "))+F(h,D("biometry_flow"),'<input type="text" name="biometryflow" id="'+h+'" class="form-control">'))+F(g,D("biometry_theme"),'<input type="text" name="biometrytheme" id="'+g+'" class="form-control">'),R="",R=(R=(R+=F(null,D("visible_warnings"),'<div class="warnings" style="white-space: nowrap" >'+ce($)+"</div>",!0))+F(null,D("scoring_params_header"),ce(G),!0))+F(null,D("biometry_header"),ce(I),!0),(a=me.Node.create('<span class="availability_proctor-tabs" style="position:relative"></span>')).setHTML("<label><strong>"+D("title")+"</strong></label><br><br>"),A=me.Node.create('<div style="position:absolute; top: 0; right: 0;" class="availability_proctor-tab-btns"></div>').appendTo(a),k=me.Node.create('<a href="#" class="btn btn-primary">1</a>').appendTo(A),x=me.Node.create('<a href="#" class="btn btn-secondary">2</a>').appendTo(A),B=me.Node.create('<div class="tab_content">'+t+"</div>").appendTo(a),L=me.Node.create('<div class="tab_content hidden">'+R+"</div>").appendTo(a),e.rules===undefined&&(e.rules=this.rules),e.warnings===undefined&&(e.warnings=this.warnings),e.scoring=e.scoring||{},e.creating){for(E in this.defaults)if(O=this.defaults[E],"scoring"==E)for(Q in O)e.scoring[Q]=O[Q]?parseFloat(O[Q]):null;else if("rules"==E)for(W in O)e.rules[W]=O[W];else if("warnings"==E)for(X in O)e.warnings[X]=!!O[X];else"groups"==E?e.groups=O:e[E]=O;e.auxiliarycameramode||(e.auxiliarycameramode="video"),e.mode||(e.mode="online",e.scheduling_required=!0)}for(Z in e.duration!==undefined&&a.one("input[name=duration]").set("value",e.duration),e.mode!==undefined&&a.one("select[name=mode] option[value="+e.mode+"]").set("selected","selected"),e.identification&&a.one("select[name=identification] option[value="+e.identification+"]").set("selected","selected"),e.webcameramainview&&a.one("select[name=webcameramainview] option[value="+e.webcameramainview+"]").set("selected","selected"),e.auto_rescheduling!==undefined&&a.one("#"+l).set("checked",e.auto_rescheduling?"checked":null),e.istrial!==undefined&&(b=e.istrial?"checked":null,a.one("#"+r).set("checked",b)),e.auxiliarycamera!==undefined&&a.one("#"+c).set("checked",e.auxiliarycamera?"checked":null),e.auxiliarycameramode&&a.one("select[name=auxiliarycameramode] option[value="+e.auxiliarycameramode+"]").set("selected","selected"),e.securebrowser!==undefined&&a.one("#"+p).set("checked",e.securebrowser?"checked":null),e.scheduling_required!==undefined&&a.one("#"+o).set("checked",e.scheduling_required?"checked":null),e.allowmultipledisplays!==undefined&&a.one("#"+u).set("checked",e.allowmultipledisplays?"checked":null),e.allowvirtualenvironment!==undefined&&a.one("#"+d).set("checked",e.allowvirtualenvironment?"checked":null),e.checkidphotoquality!==undefined&&a.one("#"+m).set("checked",e.checkidphotoquality?"checked":null),e.biometryenabled!==undefined&&a.one("#"+f).set("checked",e.biometryenabled?"checked":null),e.biometryskipfail!==undefined&&a.one("#"+v).set("checked",e.biometryskipfail?"checked":null),e.biometryflow!==undefined&&a.one("#"+h).set("value",e.biometryflow),e.biometrytheme!==undefined&&a.one("#"+g).set("value",e.biometrytheme),e.calculator!==undefined&&a.one("select[name=calculator] option[value="+e.calculator+"]").set("selected","selected"),e.securebrowserlevel&&a.one("select[name=securebrowserlevel] option[value="+e.securebrowserlevel+"]").set("selected","selected"),this.warnings)e.warnings[Z]===undefined&&(e.warnings[Z]=this.warnings[Z]);for(ee in e.warnings)e.warnings[ee]&&(ie=a.one(".warnings input[name="+ee+"]"))&&ie.set("checked","checked");for(ae in e.rules)e.rules[ae]&&(te=a.one(".rules input[name="+ae+"]"))&&te.set("checked","checked");for(oe in ne=(ne=e.groups instanceof Array?e.groups:[]).map(function(e){return parseInt(e)}),this.groups)V=this.groups[oe],le=-1<ne.indexOf(parseInt(V.id)),V="proctoring-groups["+V.id+"]",(V=a.one('.groups input[name="'+V+'"]'))&&le&&V.set("checked","checked");for(re in e.scoring)isNaN(e.scoring[re])||(se=a.one(".proctor-scoring-input[name="+re+"]"))&&se.set("value",e.scoring[re]);return e.customrules!==undefined&&a.one("#"+s).set("value",e.customrules),e.useragreementurl!==undefined&&a.one("#"+_).set("value",e.useragreementurl),e.forbiddenprocesses!==undefined&&a.one("#"+w).set("value",e.forbiddenprocesses),e.allowedprocesses!==undefined&&a.one("#"+y).set("value",e.allowedprocesses),a.delegate("valuechange",function(){ue(function(){M.core_availability.form.update()})},"input,textarea,select"),a.delegate("click",function(){ue(function(){M.core_availability.form.update()})},"input[type=checkbox]"),a.delegate("valuechange",function(){var e,i;e=["normal","identification"],i=a.one("select[name=mode]").get("value").trim(),i=0<=e.indexOf(i),a.one("#"+o).set("checked",i)},"#"+n),k.on("click",function(e){e.preventDefault(),de(1)}),x.on("click",function(e){e.preventDefault(),de(2
)}),a.delegate("click",function(e){var i;e.preventDefault(),e=e.target,(i=e.next()).hasClass("hidden")?(i.removeClass("hidden"),e.setContent(e.getAttribute("data-less"))):(i.addClass("hidden"),e.setContent(e.getAttribute("data-more")))},".proctor-moreless"),a},M.availability_proctor.form.fillValue=function(a,e){var i,t;a.duration=e.one("input[name=duration]").get("value").trim(),a.mode=e.one("select[name=mode]").get("value").trim(),a.identification=e.one("select[name=identification]").get("value").trim(),a.webcameramainview=e.one("select[name=webcameramainview]").get("value").trim(),a.auto_rescheduling=e.one("input[name=auto_rescheduling]").get("checked"),a.scheduling_required=e.one("input[name=scheduling_required]").get("checked"),a.istrial=e.one("input[name=istrial]").get("checked"),a.customrules=e.one("textarea[name=customrules]").get("value").trim(),a.useragreementurl=e.one("input[name=useragreementurl]").get("value").trim(),a.auxiliarycamera=e.one("input[name=auxiliarycamera]").get("checked"),a.auxiliarycameramode=e.one("select[name=auxiliarycameramode]").get("value").trim(),a.securebrowser=e.one("input[name=securebrowser]").get("checked"),a.securebrowserlevel=e.one("select[name=securebrowserlevel]").get("value").trim(),a.allowmultipledisplays=e.one("input[name=allowmultipledisplays]").get("checked"),a.allowvirtualenvironment=e.one("input[name=allowvirtualenvironment]").get("checked"),a.checkidphotoquality=e.one("input[name=checkidphotoquality]").get("checked"),a.calculator=e.one("select[name=calculator]").get("value").trim(),a.allowedprocesses=e.one("textarea[name=allowedprocesses]").get("value").trim(),a.forbiddenprocesses=e.one("textarea[name=forbiddenprocesses]").get("value").trim(),a.biometryenabled=e.one("input[name=biometryenabled]").get("checked"),a.biometryskipfail=e.one("input[name=biometryskipfail]").get("checked"),a.biometryflow=e.one("input[name=biometryflow]").get("value").trim(),a.biometrytheme=e.one("input[name=biometrytheme]").get("value").trim(),a.rules={},i=e.all(".rules input"),me.each(i,function(e){t=e.get("value"),!0===e.get("checked")?a.rules[t]=!0:a.rules[t]=!1}),a.warnings={},i=e.all(".warnings input"),me.each(i,function(e){t=e.get("value"),!0===e.get("checked")?a.warnings[t]=!0:a.warnings[t]=!1}),a.scoring={},i=e.all(".proctor-scoring-input"),me.each(i,function(e){t=e.get("name");e=e.get("value").trim();0<e.length?a.scoring[t]=parseFloat(e):a.scoring[t]=null}),a.groups=[],i=e.all(".groups input"),me.each(i,function(e){var i=e.get("value");!0===e.get("checked")&&a.groups.push(i)})},M.availability_proctor.form.fillErrors=function(e,i){var a={};this.fillValue(a,i),a.duration!==undefined&&new RegExp("^\\d+$").test(a.duration)&&a.duration%30==0||e.push("availability_proctor:error_setduration")}},"@VERSION@",{requires:["base","node","event","moodle-core_availability-form"]});