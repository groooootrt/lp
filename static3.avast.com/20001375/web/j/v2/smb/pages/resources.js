!function(){"use strict";function a(){var a=0;c.each(function(){var c=b(this).data("type"),d=b(this).data("tag"),e=b(this).find(".card-title").text().toLowerCase().indexOf(m.toLowerCase())>-1||b(this).find(".card-text").text().toLowerCase().indexOf(m.toLowerCase())>-1;if(("all"===k||c===k)&&("all"===l||d===l)&&(""==m||e))return a++,void b(this).removeClass("d-none");b(this).addClass("d-none")}),g.addClass("d-none"),0===a?h.removeClass("d-none"):h.addClass("d-none")}var b=avm.require("cash"),c=b(".js-resource"),d=b("#filterType"),e=b("#filterTag"),f=b("#filterFulltext"),g=b(".js-show-more-resources .btn"),h=b(".js-resource-empty"),i=new Set,j=new Set,k="all",l="all",m="";c.each(function(){i.add(b(this).attr("data-type")),j.add(b(this).attr("data-tag"))}),i.forEach(function(a){d.append(new Option(a,a))}),j.forEach(function(a){e.append(new Option(a,a))}),d.on("change",function(){k=b(this).val(),a()}),e.on("change",function(){l=b(this).val(),a()}),f.on("keyup",function(){m=b(this).val(),a()}),g.on("click",function(){a(),b(this).addClass("d-none")})}();
//# sourceMappingURL=resources.js.map