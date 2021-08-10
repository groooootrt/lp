function gdpr(a,b){"ok"===a.status?(dataLayer.push({event:"formCompleted"}),Gdpr.openColorBox("#support-form-success_content"),$("#support-contact-form").load("gdpr-form",function(){initAvastForm(),Gdpr.fillSupportForm()})):Gdpr.openColorBox("#support-form-error_content")}function recaptcha_callback(){$("#request-access").prop("disabled",!1)}function recaptchaExpired(){$("#request-access").prop("disabled",!0)}var Gdpr=function(){var a,b,c,d=$("#translationObj").data("translations"),e=$("#gdpr-portal").data("parameters"),f=e.brand.match("www.[a-z]*.(com|ru|ua|co.jp)")[0].split(".")[1].toUpperCase(),g=$(".loading"),h=!1,i={},j={},k={getData:function(){return l("getData","","GET")},update:function(a,b){l("update","personal-information","POST",a,b)},"export":function(){l("export","export","GET")},verify:function(a){l("verify","verify","POST",a)},verifyNewEmail:function(a,b){l("verifyNewEmail","verify-new-email","POST",a)},verifyToken:function(a){l("verifyToken","verify-token","GET")}},l=function(c,d,e,f,h){dataToButler=f?JSON.stringify(f):"",$.ajax({url:"verifyToken"===c?"https://gepard.ff.avast.com/v1/"+d+"/"+a:"https://gepard.ff.avast.com/v1/"+d,method:e,contentType:"application/json",data:dataToButler,headers:{"X-AUTHORIZATION":b},beforeSend:function(){g.removeClass("hide")},success:function(d,e,f){b=f.getResponseHeader("refresh_token"),p(a,b),m(c,d,h)},error:function(a,b,d){var e=avm.require("avast.rum");if(a.responseText){var f=JSON.parse(a.responseText);f.errorCode&&e.track("custom",{message:"gdpr "+f.errorCode})}0===a.status&&e.track("custom",{message:"gdpr noresponse"}),n(a,b,d,c)},complete:function(){g.addClass("hide")}})},m=function(a,b,d){b?"verify"===a?("OK"===b.status?(dataLayer.push({event:"formCompleted"}),A("#check-email_content")):"NOT_FOUND"===b.status&&A("#user-not-found_content"),grecaptcha.reset()):"getData"===a?(i=b,w(i),location.hash="personal-data"):"update"===a?(i=b,d?(A("#personal-data-changed_content"),w(i)):(v(i),A("#personal-data-changed_content"))):"export"===a?o(b):"verifyNewEmail"===a?"OK"===b.status?(p(c,JSON.stringify(j)),A("#verify-email_content")):"NOT_ALLOWED"===b.status&&A("#change-email-is-not-allowed_content"):"verifyToken"===a&&(b.valid||b.email===q(b.email))&&k.update(JSON.parse(q(b.email)),!0):($("body").removeClass("logged-in").addClass("not-logged-in"),A("#global_error_content"))},n=function(a,b,c,d){if(a.responseText)var e=JSON.parse(a.responseText);400===a.status?2002===e.errorCode?A("#update-data-in-process_content"):2001===e.errorCode?A("#change-email-is-not-allowed_content"):9001===e.errorCode?($("body").removeClass("logged-in").addClass("not-logged-in"),A("#no-data-found_content")):A("#global_error_content"):401===a.status?($("body").removeClass("logged-in").addClass("not-logged-in"),A("#session-expired_content")):"verify"===d?grecaptcha.reset():"getData"===d&&($("body").removeClass("logged-in").addClass("not-logged-in"),A("#session-expired_content"))},o=function(a){var b=JSON.stringify(a),c=new Blob([b],{type:"text/plain"}),d=document.createElement("a");document.body.appendChild(d),d.href=window.URL.createObjectURL(c),d.download="export.json",d.click(),window.URL.revokeObjectURL(d.href)},p=function(a,b){localStorage.setItem(a,b)},q=function(a){return localStorage.getItem(a)},r=function(a){var b=$("#"+a),c=!0,e={noEmpty:".",noDigit:"^([^0-9]*)$",noValidEmail:'^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'};return b.parents(".form-group").removeClass("alert").find(".errors").remove(),$.each(b.data("validation-options"),function(a,f){!1===new RegExp(e[f]).test(b.val())&&!1!==c&&(b.parents(".form-group").addClass("alert"),b.after("<ul class='errors'><li>"+d["validation_"+f]+"</li></ul>"),c=!1)}),c},s=function(){return i.status.update},t=function(){i.status.update&&$("#status-message").html(d.statusUpdate),$(".status-info").removeClass("hide")},u=function(a){var b=s();b&&t(),$.each(a,function(a,d){"email"===a&&(c=d),"country_code"===a?$("#country, #country_code").val(d).prop("disabled",b):$("#personal_data").find("#"+a).val(d).prop("disabled",b)}),$("#personal_data input[type=submit]").prop("disabled",!0),$("#countryList").prop("disabled",b)},v=function(a){var b=s();$.each(a.personal_data.personal,function(a,c){"country_code"===a?$("#country, #country_code").val(c).prop("disabled",b):$("#personal").find("#"+a).val(c).prop("disabled",b)}),$("#submit-save-changes").prop("disabled",!0)},w=function(a){function b(a){function b(a,b){"personal"===a?u(b):"others"===a&&x(a,b)}$.each(a,b)}function c(a,b){function c(b,f){if(f&&f.deviceName){var g={};g.deviceName=f.deviceName,g.consents=f.consents,f=g}if(f instanceof Object)"devices"===b&&0===Object.keys(f).length&&(e+="<p class='message'>"+d.empty_consents+"</p>"),$.each(f,c);else if("email_consent"===a?"email"===b&&(e+="<div class='email email-icon'><svg class='icon icon-mail' viewBox='5 0 25 25' xmlns='http://www.w3.org/2000/svg'><path id='ico' d='M18,17.16H7c-0.83,0-1.5-0.67-1.5-1.5l0,0V7.41c0-0.83,0.67-1.5,1.5-1.5h11c0.83,0,1.5,0.67,1.5,1.5v8.25C19.5,16.48,18.83,17.16,18,17.16L18,17.16z M7,15.66h11V9.7l-5.02,3.53c-0.29,0.24-0.7,0.24-0.99,0L7,9.72V15.66z M7,7.41v0.55C7.03,7.97,7.06,7.98,7.09,8l5.4,3.78L17.88,8c0.04-0.02,0.08-0.04,0.12-0.05V7.41H7z'/></svg>"+f+"</div>"):"product_consent"===a&&("deviceName"===b&&(e+="<p class='device-name'>"+d.device+": "+f+"</p>"),"brand"===b&&(e+="<p class='brand'>"+d.brand+": "+f+"</p>")),"boolean"==typeof f){var h=d[b],i=f?"icon-check":"icon-cross";e+="product_consent"===a?"<div class='consent'><span class='consent-name js-info'>"+h+"<span class='js-infotext infotext'>"+d[b+"_tooltip"]+"</span><span class='info visible'></span></span><span class='consent-icon "+i+"'></span></div>":"<div class='consent'><span class='consent-name'>"+h+"<span class='consent-icon "+i+"'></span></div>"}}var e="";$.each(b,function(b,f){(f[0]&&Object.keys(f[0].consents[0]).length>0||"number"==typeof b&&f.devices&&Object.keys(f.devices).length>0)&&(e+="<div class='box narrow'>","product_consent"===a?e+="<div class='top'><h3 class='product-name'>"+f.productName+"</h3></div>":"email_consent"===a&&(e+="<div class='top'><div class='brand brand-"+b+"'><h3 class='brand-name'>"+d.brand+": "+b+"</h3></div></div>"),e+="<div class='box-content'>",$.each(f,c),e+="</div></div></div>",$("#"+a).html(e))}),$("body").removeClass("not-logged-in").addClass("logged-in")}$("#support-contact-form").load("gdpr-form",function(){initAvastForm(),y()}),$.each(a,function(a,d){"personal_data"===a?b(d):"product_consent"!==a&&"email_consent"!==a||c(a,d)}),$("body").removeClass("not-logged-in").addClass("logged-in")},x=function(a,b){function c(a,b,e){if(null!==b&&0!==b.length)if(i||(i=!0),b instanceof Object){j="other_emails"===a;var f="<div class='question item-title'><h4 class='title'>"+d[a]+"</h4><span class='collapse-expand-round-button'></span></div>";g+=e?"<div class='other "+a+" collapsible'>"+f+"<div class='more-info'>":"<div class='more-info-group'>",$.each(b,c,!1),g+=e?"</div></div>":"</div>"}else{var k=j?"email":"text";if(b&&"null"!==b&&"country_code"!==a){a=j?"email":a;var l=a+"_"+h;g+="<div class='form-group'><label for='"+l+"'>"+d[a]+"</label><div class='form-input'><input type='"+k+"' name='"+a+"' id='"+l+"' value='"+b+"' disabled></div></div>"}h++}}var e,g="",h=0,i=!1,j=!1,k=$("#personal-informations"),l=$("#other-informations");$.each(b,function(a,b){c(a,b,!0)}),i&&($("#"+a).html(g),"AVAST"===f?e="span6":"AVG"===f?e="col-md-6 text-md-left text-center":"HIDEMYASS"===f&&(e="col m-12 t-6"),k.removeClass().addClass(e),l.removeClass("hide"))},y=function(){var a=$("#support-contact-form");a.find('input[name="firstName"]').val(i.personal_data.personal.first_name),a.find('input[name="lastName"]').val(i.personal_data.personal.last_name),a.find('input[name="email"], input[name="hiddenEmail"]').val(i.personal_data.personal.email)},z=function(b,c){$(b+" "+c).each(function(b){this.href=this.href+"?auth="+a})},A=function(a){$.colorbox({href:a,maxWidth:"700px",width:"95%",initialHeight:"180px",inline:!0,opacity:.3,reposition:!0,onComplete:function(){$(a).removeClass("hide"),$.colorbox.resize()},onClosed:function(){$(a).addClass("hide")}}),$(window).resize(function(){window.innerWidth<768&&$.colorbox.resize({width:"95%"})})};return{openColorBox:function(a){A(a)},fillSupportForm:function(){y()},init:function(){var l={},m=$(".js-menu"),n=$(".js-navigation");new URL(window.location);a||(a=avm.require("avast.url.unserialize")(window.location.href).auth?avm.require("avast.url.unserialize")(window.location.href).auth:avm.require("avast.url.unserialize")(window.location.href).verify),a&&("AVAST"===f&&$("#bottom-links").length>0?z(".possible-lang","li a"):"AVG"===f&&$("#language-selector").length>0?(z(".country-item","a"),$(".modal-footer").length>0&&z(".modal-footer","a")):"HIDEMYASS"===f&&$("#lang-selector").length>0&&z("#lang-selector","a.bi-nav-language-selector")),avm.require("avast.url.unserialize")(window.location.href).auth?(b=q(a)?q(a):a,k.getData()):avm.require("avast.url.unserialize")(window.location.href).verify?(b=avm.require("avast.url.unserialize")(window.location.href).verify,k.verifyToken()):$("body").removeClass("logged-in").addClass("not-logged-in"),$("form").on("keyup","input",function(){$(this).data("validation")&&r(this.id)}),$("#personal-form").on("keyup change","input:not(:hidden), select",function(){var a=this.id,b=this.value,c=null===i.personal_data.personal[a]?"":i.personal_data.personal[a];"country"===a&&$("#country_code").val(this.value),b===c?delete l[a]:l[a]=b,h=Object.keys(l).length>0,$("#submit-save-changes").prop("disabled",!h)}),$("#personal-form").on("click","#submit-save-changes",function(a){a.preventDefault();var b=!0;$("#personal-form").find("input[data-validation=true]").each(function(){!1===r(this.id)&&(b=!1)}),b||$("html, body").animate({scrollTop:$("#personal").find(".form-group.alert").first().offset().top},500),l&&b&&($("#personal .form-group").find("input, select").each(function(){$(this).is("select")?j[this.id]=$("#"+this.id+" option:selected").text():j[this.id]=this.value}),l.email?(j.email=c,j.new_email=l.email,k.verifyNewEmail({newEmail:l.email,locale:e.locale,brand:"HIDEMYASS"===f?"HMA":f})):k.update(j))}),$("#login-form").submit(function(a){a.preventDefault(),r("login_email")&&(g.removeClass("hide"),$.get("global_placeholders_json",function(a){k.verify({email:$("#login_email").val(),locale:e.locale,brand:"HIDEMYASS"===f?"HMA":f,ip:a.ip,recaptchaResponse:grecaptcha.getResponse()})}))}),$("#export-personal-data").on("click",function(){k["export"]()}),$(".faq-item").on("click",".question",function(){var a=$(".expand-collapse-all"),b=$(this).parents(".box-content"),c=$(this).parent();$(c).toggleClass("expand"),$(this).parent().find(".more-info").stop().slideToggle("slow"),$(b).find(".faq-item.expand").length===$(b).find(".faq-item").length?$(b).find(a).addClass("expand").text(d.collapseAll):$(b).find(a).removeClass("expand").text(d.expandAll)}),$(".expand-collapse-all").on("click",function(){var a=$(this).parent().find(".more-info");a.stop(),$(this).hasClass("expand")?($(this).removeClass("expand").text(d.expandAll),$(a).parent().removeClass("expand"),a.slideUp("slow")):($(this).addClass("expand").text(d.collapseAll),$(a).parent().addClass("expand"),a.slideDown("slow"))}),$("#other-informations").on("click",".collapsible .item-title",function(){$(this).parent().toggleClass("expand"),$(this).parent().find(".more-info").stop().slideToggle("slow")}),$(".cbox-close").on("click",function(){$.fn.colorbox.close()}),$(".gdpr-container").on({mouseenter:function(){var a=$(this),b=$(this).parent().find(".js-infotext");b.css({position:"absolute",top:a.outerHeight()+20+"px",left:a.outerWidth()/2-b.outerWidth(!0)/2+"px"}).show()},mouseleave:function(){$(".js-infotext").hide()}},".js-info:not(:disabled)"),$(".navigation").on("click","a[data-show-target]",function(a){$(".navigation-button").removeClass("active"),$(this).addClass("active"),$(".page-section").addClass("hide"),$("#"+$(this).data("show-target")).removeClass("hide")}),$(".js-hamburger").on("click",function(a){a.preventDefault(),n.removeClass("hide-nav").addClass("show-nav"),m.removeClass("bounceout fadeout").addClass("bouncein fadein")}),$(".js-navigation-close").on("click",function(a){a.preventDefault(),n.removeClass("show-nav").addClass("hide-nav"),m.removeClass("bouncein fadein").addClass("bounceout fadeout")}),$(".navigation").on("click",".fadein .navigation-button",function(){$(".js-navigation-close").trigger("click")})}}}();$(document).ready(function(){Gdpr.init()});
//# sourceMappingURL=gdpr.js.map