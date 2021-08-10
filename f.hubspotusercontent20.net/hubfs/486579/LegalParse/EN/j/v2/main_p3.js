/*
@Author: Albert Soriano
@Description: HTML parser in order to setup dinamically the correct structure of the new privacy policy page
*/
$(document).ready(function () {

    var exp_html;
    var dummy;

    var headings = [[]];
    var h4 = new Object();
    var h4s = [];
    var h4s_parents = [];
    var h4s_elements = [];

    fetchData();


    /*
    @Description: Fetch data from the Google Doc exported using the script (j/gdoc-script.js)
    */
    function fetchData() {
        var html;
        fetch('https://f.hubspotusercontent20.net/hubfs/486579/LegalParse/EN/v2/EN_VPN_policy.html?sep')
            .then(response => response.text())
            .then((data) => {
                parseFetchedData(data);
                html = data;
            })
    }
    /*
    @Description: Save data from the fetch and start data processing
    */
    function parseFetchedData(data_html) {
        exp_html = data_html;
        processData();
    }
    /*
    @Description: Data processing manager, all functions are listed here in order
    */
    function processData() {
        dummyCreation();
        getHeaders();
        innerHeaders();
        divideContent();
        replaceIdentifiers();
        generateAccordion();
        toggleContent();
    }
    /*
    @Description: Creating of a dummy element with the exported html in order to better process the data
    */
    function dummyCreation() {
        dummy = $('<div></div>');
        dummy.html(exp_html);
    }
    /*
    @Description: Parse of headings. Heading will be used as titles for the left navigation
    */
    function getHeaders() {

        var x = 0;
        var y = 0;
        var auxtext;
        var parsed = false;

        $('h2', dummy).each(function (item) {
            headings[x] = [];
            auxtext = $(this).text();
            headings[x].push($(this).text());
            $(this).nextUntil('h2', 'h3').each(function () {
                headings[x][y] = [];
                if (!parsed) {
                    parsed = true;
                    headings[x][y] = auxtext;
                    y++;
                    headings[x][y] = [];
                }
                headings[x][y] = $(this).text();
                y++;
            })
            x++;
            y = 0;
            parsed = false;
        })

        //H4s
        x = 0;
        y = 0;

        $('h3', dummy).each(function (item) {
            h4.parent = $(this).text();
            h4.elements = [];
            $(this).nextUntil('h3').each(function () {
                if ($(this)[0].nodeName == 'H4') {
                    h4.elements[x] = [];
                    h4.elements[x] = $(this).text();
                    x++;
                }
            })
            if (h4.elements[0]) {
                h4s_parents[y] = h4.parent;
                h4s_elements[y] = h4.elements;
                h4s[y] = h4;
                y++;
            }

            x = 0;
        })
    }
    /*
    @Description: Append left navigation elements into the HTML code
    */
    function innerHeaders() {

        var h_aux;
        var x = 0;
        var h3_id = 0;
        var h4_id = 0;
        var hasChild = false;
        var child = 0;


        $.each(headings, function () {
            if (headings[x].length > 1) {
                h_aux = '<div class="row"><div class="span12 sm_section"><span class="h2_title"><a href="#title_h2_' + x + '" class="h2_title">' + headings[x][0] + '</a><img alt="" src="https://cdn2.hubspot.net/hubfs/486579/LegalParse/i/arrow_down.svg" class="nav_arrow_h2 collapsed"></span>';
            } else {
                h_aux = '<div class="row"><div class="span12 sm_section"><a href="#title_h2_' + x + '" class="h2_title">' + headings[x][0] + '</a>';
            }
            if (headings[x].length > 1) {
                h_aux = h_aux + '<ul>';
                for (i = 1; i < headings[x].length; i++) {
                    hasChild = false;
                    child = 0;
                    h4s_parents.forEach(function () {
                        if (headings[x][i] === h4s_parents[child]) {
                            hasChild = true;
                        }
                        child++;
                    });
                    if (hasChild) {
                        h_aux = h_aux + '<li><span class="h3_title"><a href="#title_h3_' + h3_id + '">' + headings[x][i] + ' </a><img alt="" src = "https://cdn2.hubspot.net/hubfs/486579/LegalParse/i/arrow_up.svg" class="nav_arrow_h3 expanded"></></span></li>';
                    } else {
                        h_aux = h_aux + '<li class="h3_title"><a href="#title_h3_' + h3_id + '">' + headings[x][i] + '</a></li>';
                    }
                    if (h4s_parents) {
                        var z = 0;
                        h_aux = h_aux + '<ul>';
                        h4s_parents.forEach(function (parent) {
                            if (headings[x][i] == parent) {
                                for (x2 = 0; x2 < h4s_elements[z].length; x2++) {
                                    h_aux = h_aux + '<li><a href="#title_h4_' + h4_id + '">' + h4s_elements[z][x2] + '</a></li>';
                                    h4_id++;
                                }
                            }
                            z++;
                        });
                        h_aux = h_aux + '</ul>';
                    }
                    h3_id++;
                }
                h_aux = h_aux + '</ul>';
            }
            h_aux = h_aux + '</div></div>';
            $('#leftnav').append(h_aux);
            x++;
        });
    }
    /*
    @Description: Add IDs to headings in the content
    */
    function replaceIdentifiers() {
        var content = $('#content');

        addID($('h2', content), 0, 'h2');
        addID($('h3', content), 0, 'h3');
        addID($('h4', content), 0, 'h4');
    }

    function addID(aux_hs, x, h) {
        $.each(aux_hs, function () {
            $(this).attr('id', 'title_' + h + '_' + x);
            x++;
        });
    }
    /*
    @Description: Divide HTML content in divs in order to make the accordeon style
    */
    function divideContent() {
        var h_div;
        var x = 0;
        var y = 0;

        $('h2', dummy).each(function (item) {
            h_div = '<div class="content-block pc_object">';
            h_div += '<div class="content_h2"><img src="https://cdn2.hubspot.net/hubfs/486579/LegalParse/i/arrow_up.svg" alt="" class="text_arrow expanded">'; //Add arrow
            h_div += $(this)[0].outerHTML + '</div>';
            $(this).nextUntil('h2').each(function () {
                h_div = h_div + $(this)[0].outerHTML;
                y++;
            })
            h_div += '</div>';
            $('#content').append(h_div);
        })
    }


    function generateAccordion() {

        $('.h3_title', '#leftnav').each(function () {
            $(this).nextUntil("h2").not("li").each(function () {
                $(this).toggleClass("hide");
            })
            $(this).children("img").each(function () {
                $(this).on('click', function (event) {
                    if ($(this).hasClass("collapsed")) {
                        $(this).attr("src", "https://cdn2.hubspot.net/hubfs/486579/LegalParse/i/arrow_up.svg");
                        $(this).toggleClass("expanded collapsed");
                    } else if ($(this).hasClass("expanded")) {
                        $(this).attr("src", "https://cdn2.hubspot.net/hubfs/486579/LegalParse/i/arrow_down.svg");
                        $(this).toggleClass("collapsed expanded");
                    }
                    $(this).parent().parent().next().toggleClass("show hide");
                })
            })

        })

        $('.h2_title', '#leftnav').each(function () {
            $(this).nextUntil("h2").not("img").each(function () {
                $(this).toggleClass("hide");
            })
            $(this).nextUntil("h2").not("ul").each(function () {
                $(this).on('click', function (event) {
                    if ($(this).hasClass("collapsed")) {
                        $(this).attr("src", "https://cdn2.hubspot.net/hubfs/486579/LegalParse/i/arrow_up.svg");
                        $(this).toggleClass("expanded collapsed");
                    } else if ($(this).hasClass("expanded")) {
                        $(this).attr("src", "https://cdn2.hubspot.net/hubfs/486579/LegalParse/i/arrow_down.svg");
                        $(this).toggleClass("collapsed expanded");
                    }
                    $(this).parent().next().toggleClass("show hide");
                })
            })
        })


    }


    function toggleContent() {

        $('.content_h2', '#content').each(function () {
            $(this).nextUntil(".content-block").each(function () {
                //$(this).toggleClass("hide");
            })
            $(this).on('click', function (event) {

                if ($('img', this).hasClass("collapsed")) {
                    $('img', this).attr("src", "https://cdn2.hubspot.net/hubfs/486579/LegalParse/i/arrow_up.svg");
                    $('img', this).toggleClass("expanded collapsed");
                } else if ($('img', this).hasClass("expanded")) {
                    $('img', this).attr("src", "https://cdn2.hubspot.net/hubfs/486579/LegalParse/i/arrow_down.svg");
                    $('img', this).toggleClass("collapsed expanded");
                }

                $(this).nextUntil(".content-block").each(function () {
                    $(this).toggleClass("show hide");
                })
            })
        })
    }

});