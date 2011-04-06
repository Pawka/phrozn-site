$(document).ready(function () {
    // add anchors to headers that have IDs set
    $("#content").children("h1[id], h2[id], h3[id]").each(function (key, el) {
        $(document.createElement("a"))
            .attr({
                title: "Permalink to this section",
                href: "#" + $(el).attr("id"),
            })
            .addClass("anchor")
            .html("&sect;")
            .appendTo($(el));
    });

    //$("pre").addClass("prettyprint"); // all pre elements are syntax colored
    //prettyPrint();
    $("pre").each(function(i, e) {hljs.highlightBlock(e, '    ')});
});
