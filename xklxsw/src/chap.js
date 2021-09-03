function execute(url) {
    var doc = Http.get(url).html();

    if (doc)
        return Response.success(doc.select(".chapter-content").html().replace(/<p>.*\/p>/,"").replace(/纯文.*(第\d+章)/,"$1"));
    return null;
}