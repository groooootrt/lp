!function(){"use strict";$(document).ready(function(){$(".btn-modal-contactForm").each(function(a,b){$(this).attr("tabindex",0)}),$(".close").each(function(a,b){$(this).attr("tabindex",0)})}),$(".btn-modal-contactForm").on("click",function(){$("#carriers-contact-form").load("carriers-contact-form",function(){initAvastForm(),$("#carriers-contact-form").siblings().show(),$("#carriers-contact-form").find('input.button[type="submit"]').removeClass("button blue large").addClass("btn btn-primary btn-lg")})}),$(document).on("avastform-linear-success",function(){initAvastForm(),$("#carriers-contact-form").siblings().hide()})}();
//# sourceMappingURL=threat-intelligence.js.map