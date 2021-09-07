function execute(url) {

    var doc = Http.get(url).html();
    if (doc){
        var content = doc.select(".container div div.chapter-body sentence.translated").html()
            .replace(/<\/?w.*?>/g, "")
            .replace(/<\/?t.*?>/g, "")
            .replace(/[\n]/g, "<br>")
        return Response.success(content);
    }   
    return null;
}