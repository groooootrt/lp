!function(){"use strict";var a=avm.require("cash"),b=(avm.require("avast.web.waypoints"),a(window),a("#secondary-nav-row"),a("#privacy-media"),a("#media2-anchor"),a("#media3-anchor"),a("#media4-anchor"),a("#media5-anchor"),a("#testimonials"),a(".nav-link"),a(".js-open")),c=a(".js-close");b.on("click",function(){a(this).parents("section").next("section").addClass("show"),a(this).addClass("hidden")}),c.on("click",function(){var b=a(this).parents("section");b.prev("section").find(".js-open").removeClass("hidden"),b.removeClass("show")})}();
//# sourceMappingURL=free-mobile-security.js.map