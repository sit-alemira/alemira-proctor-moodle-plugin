YUI.add("moodle-availability_alemira-form",function(G,e){M.availability_alemira=M.availability_alemira||{},M.availability_alemira.form=G.Object(M.core_availability.plugin),M.availability_alemira.form.rules=null,M.availability_alemira.form.initInner=function(e,i,a){this.rules=e,this.warnings=i,this.scoring=a},M.availability_alemira.form.instId=0,M.availability_alemira.form.getNode=function(e){var a,i,n,t,l,o,r,s,c,d,u,m,b,p,f,h,g,v,y,S,_,k,j,w,x,H,L,C,N,q,T,I,R,E,A,P,D,U,O,Y;function V(e,i){return i=i||"availability_alemira",M.util.get_string(e,i)}function $(e){var i=V("showmore","core_form"),a=V("showless","core_form");return'<a href="#" class="alemira-moreless" data-more="'+i+'" data-less="'+a+'">'+i+'</a><div class="hidden col-md-12">'+e+"</div>"}function F(e,i,a,n){var t=n?10:5,n=n?10:7;return'<span class="availability-group form-group mb-2"><div class="col-md-'+t+' col-form-label d-flex pb-0 pr-md-0">  <label for="'+e+'">'+i+'</label></div><div class="col-md-'+n+' form-inline align-items-start felement">'+a+"</div></span>"}function z(e){setTimeout(e,0)}function B(e){1==e?(q.addClass("btn-primary"),q.removeClass("btn-secondary"),T.addClass("btn-secondary"),T.removeClass("btn-primary"),I.removeClass("hidden"),R.addClass("hidden")):(T.addClass("btn-primary"),T.removeClass("btn-secondary"),q.addClass("btn-secondary"),q.removeClass("btn-primary"),I.addClass("hidden"),R.removeClass("hidden"))}for(y in M.availability_alemira.form.instId+=1,l=(n="alemira"+M.availability_alemira.form.instId)+"_mode",o=n+"_schedulingRequired",r=n+"_autoRescheduling",s=n+"_isTrial",N=n+"_identification",c=n+"_customRules",d=n+"_noProtection",u=n+"_auxCamera",m=n+"_ldb",b=n+"_biometryEnabled",p=n+"_biometrySkipfail",f=n+"_biometryFlow",h=n+"_biometryTheme",g=n+"userAgreement",t=F(t=n+"_duration",V("duration"),'<input type="text" name="duration" id="'+t+'" class="form-control">'),t=(t=(t=(t=(t=(t=(t=(t=(t=(t+=F(l,V("proctoring_mode"),'<select name="mode" id="'+l+'" class="custom-select">  <option value="online">'+V("online_mode")+'</option>  <option value="identification">'+V("identification_mode")+'</option>  <option value="offline">'+V("offline_mode")+'</option>  <option value="auto">'+V("auto_mode")+"</option></select>"))+F(N,V("identification"),'<select name="identification" id="'+N+'" class="custom-select">  <option value="passport">'+V("passport_identification")+'</option>  <option value="face">'+V("face_identification")+'</option>  <option value="face_and_passport">'+V("face_passport_identification")+'</option>  <option value="skip">'+V("skip_identification")+"</option></select>"))+F(o,V("scheduling_required"),'<input type="checkbox" name="scheduling_required" id="'+o+'" value="1">&nbsp;<label for="'+o+'">'+V("enable")+"</label> "))+F(r,V("auto_rescheduling"),'<input type="checkbox" name="auto_rescheduling" id="'+r+'" value="1">&nbsp;<label for="'+r+'">'+V("enable")+"</label> "))+F(s,V("is_trial"),'<input type="checkbox" name="istrial" id="'+s+'" value="1">&nbsp;<label for="'+s+'">'+V("enable")+"</label> "))+F(d,V("noprotection"),'<input type="checkbox" name="noprotection" id="'+d+'" value="1">&nbsp;<label for="'+d+'">'+V("enable")+"</label> "))+F(u,V("auxiliary_camera"),'<input type="checkbox" name="auxiliarycamera" id="'+u+'" value="1">&nbsp;<label for="'+u+'">'+V("enable")+"</label> "))+F(m,V("enable_ldb"),'<input type="checkbox" name="ldb" id="'+m+'" value="1">&nbsp;<label for="'+m+'">'+V("enable")+"</label> "))+F(g,V("user_agreement_url"),'<input name="useragreementurl" id="'+g+'" class="form-control" value="" />'))+F(c,V("custom_rules"),'<textarea name="customrules" id="'+c+'" style="width: 100%" class="form-control"></textarea>'),v="",this.rules)v=(v+='<br><input type="checkbox" name="'+y+'" id="'+(S=n+"_"+y)+'" value="'+y+'" >&nbsp;')+'<label for="'+S+'" style="white-space: break-spaces">'+V(y)+"</label>";for(k in t+=F(null,V("rules"),'<div class="rules" style="white-space:nowrap">'+v+"</div>"),_="",this.warnings)_=(_+='<input type="checkbox" name="'+k+'" id="'+(j=n+"_"+k)+'" value="'+k+'" >&nbsp;')+'<label for="'+j+'" style="white-space: break-spaces">'+V(k)+"</label><br>";for(x in w="",this.scoring)L='<input type="number" class="alemira-scoring-input" value=""step="0.01" name="'+x+'"id="scoring_'+(H=n+"_"+x)+'"min="'+this.scoring[x].min+'" max="'+this.scoring[x].max+'">',w+=F(H,V("scoring_"+x),L);if(N="",N=(N=(N=(N+=F(b,V("biometry_enabled"),'<input type="checkbox" name="biometryenabled" id="'+b+'" value="1">&nbsp;<label for="'+b+'">'+V("enable")+"</label> "))+F(p,V("biometry_skipfail"),'<input type="checkbox" name="biometryskipfail" id="'+p+'" value="1">&nbsp;<label for="'+p+'">'+V("enable")+"</label> "))+F(f,V("biometry_flow"),'<input type="text" name="biometryflow" id="'+f+'" class="form-control">'))+F(h,V("biometry_theme"),'<input type="text" name="biometrytheme" id="'+h+'" class="form-control">'),C="",C=(C=(C+=F(null,V("visible_warnings"),'<div class="warnings" style="white-space: nowrap" >'+$(_)+"</div>",!0))+F(null,V("scoring_params_header"),$(w),!0))+F(null,V("biometry_header"),$(N),!0),(a=G.Node.create('<span class="availibility_alemira-tabs" style="position:relative"></span>')).setHTML("<label><strong>"+V("title")+"</strong></label><br><br>"),N=G.Node.create('<div style="position:absolute; top: 0; right: 0;" class="availibility_alemira-tab-btns"></div>').appendTo(a),q=G.Node.create('<a href="#" class="btn btn-primary">1</a>').appendTo(N),T=G.Node.create('<a href="#" class="btn btn-secondary">2</a>').appendTo(N),I=G.Node.create('<div class="tab_content">'+t+"</div>").appendTo(a),R=G.Node.create('<div class="tab_content hidden">'+C+"</div>").appendTo(a),e.creating&&(e.mode="online",e.scheduling_required=!0),e.duration!==undefined&&a.one("input[name=duration]").set("value",e.duration),e.mode!==undefined&&a.one("select[name=mode] option[value="+e.mode+"]").set("selected","selected"),e.identification!==undefined&&a.one("select[name=identification] option[value="+e.identification+"]").set(
"selected","selected"),e.auto_rescheduling!==undefined&&(i=e.auto_rescheduling?"checked":null,a.one("#"+r).set("checked",i)),e.noprotection!==undefined&&(i=e.noprotection?"checked":null,a.one("#"+d).set("checked",i)),e.istrial!==undefined&&(i=e.istrial?"checked":null,a.one("#"+s).set("checked",i)),e.auxiliarycamera!==undefined&&(i=e.auxiliarycamera?"checked":null,a.one("#"+u).set("checked",i)),e.ldb!==undefined&&(i=e.ldb?"checked":null,a.one("#"+m).set("checked",i)),e.scheduling_required!==undefined&&(i=e.scheduling_required?"checked":null,a.one("#"+o).set("checked",i)),e.rules===undefined&&(e.rules=this.rules),e.biometryenabled!==undefined&&(i=e.biometryenabled?"checked":null,a.one("#"+b).set("checked",i)),e.biometryskipfail!==undefined&&(i=e.biometryskipfail?"checked":null,a.one("#"+p).set("checked",i)),e.biometryflow!==undefined&&a.one("#"+f).set("value",e.biometryflow),e.biometrytheme!==undefined&&a.one("#"+h).set("value",e.biometrytheme),e.warnings===undefined)e.warnings=this.warnings;else for(k in E=e.warnings,e.warnings=this.warnings,E)e.warnings[k]=E[k];for(A in e.rules)e.rules[A]&&(P=a.one(".rules input[name="+A+"]"))&&P.set("checked","checked");for(D in e.warnings)e.warnings[D]&&(U=a.one(".warnings input[name="+D+"]"))&&U.set("checked","checked");for(O in e.scoring=e.scoring||{},e.scoring)isNaN(e.scoring[O])||(Y=a.one(".alemira-scoring-input[name="+O+"]"))&&Y.set("value",e.scoring[O]);return e.customrules!==undefined&&a.one("#"+c).set("value",e.customrules),e.useragreementurl!==undefined&&a.one("#"+g).set("value",e.useragreementurl),a.delegate("valuechange",function(){z(function(){M.core_availability.form.update()})},"input,textarea,select"),a.delegate("click",function(){z(function(){M.core_availability.form.update()})},"input[type=checkbox]"),a.delegate("valuechange",function(){var e,i;e=["normal","identification"],i=a.one("select[name=mode]").get("value").trim(),i=0<=e.indexOf(i),a.one("#"+o).set("checked",i)},"#"+l),q.on("click",function(e){e.preventDefault(),B(1)}),T.on("click",function(e){e.preventDefault(),B(2)}),a.delegate("click",function(e){var i;e.preventDefault(),e=e.target,i=e.next(),i.hasClass("hidden")?(i.removeClass("hidden"),e.setContent(e.getAttribute("data-less"))):(i.addClass("hidden"),e.setContent(e.getAttribute("data-more")))},".alemira-moreless"),a},M.availability_alemira.form.fillValue=function(i,e){var a,n;i.duration=e.one("input[name=duration]").get("value").trim(),i.mode=e.one("select[name=mode]").get("value").trim(),i.identification=e.one("select[name=identification]").get("value").trim(),i.auto_rescheduling=e.one("input[name=auto_rescheduling]").get("checked"),i.scheduling_required=e.one("input[name=scheduling_required]").get("checked"),i.istrial=e.one("input[name=istrial]").get("checked"),i.customrules=e.one("textarea[name=customrules]").get("value").trim(),i.noprotection=e.one("input[name=noprotection]").get("checked"),i.useragreementurl=e.one("input[name=useragreementurl]").get("value").trim(),i.auxiliarycamera=e.one("input[name=auxiliarycamera]").get("checked"),i.ldb=e.one("input[name=ldb]").get("checked"),i.biometryenabled=e.one("input[name=biometryenabled]").get("checked"),i.biometryskipfail=e.one("input[name=biometryskipfail]").get("checked"),i.biometryflow=e.one("input[name=biometryflow]").get("value").trim(),i.biometrytheme=e.one("input[name=biometrytheme]").get("value").trim(),i.rules={},a=e.all(".rules input"),G.each(a,function(e){n=e.get("value"),!0===e.get("checked")?i.rules[n]=!0:i.rules[n]=!1}),i.warnings={},a=e.all(".warnings input"),G.each(a,function(e){n=e.get("value"),!0===e.get("checked")?i.warnings[n]=!0:i.warnings[n]=!1}),i.scoring={},a=e.all(".alemira-scoring-input"),G.each(a,function(e){n=e.get("name");e=e.get("value").trim();0<e.length?i.scoring[n]=parseFloat(e):i.scoring[n]=null})},M.availability_alemira.form.fillErrors=function(e,i){var a={};this.fillValue(a,i),a.duration!==undefined&&new RegExp("^\\d+$").test(a.duration)&&a.duration%30==0||e.push("availability_alemira:error_setduration")}},"@VERSION@",{requires:["base","node","event","moodle-core_availability-form"]});