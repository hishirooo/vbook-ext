function execute(url) {

    var doc = Http.get(url).html();
    if (doc){
        var content = doc.select(".container div div.chapter-body sentence.translated").html()
            //.replace(/<\/?w.*?>/g, "")
            .replace(/(<([^>]+)>)/ig, "")
            .replace(/(data[^>]+>)/ig,"")
            .replace(/[\n]/g, "<br>")
            .replace(/︿/g,"")
            .replace(/\s+/g,' ')
            //.replace(/(\(\)|\\;)/,"")
        return Response.success(content);
    }   
    return null;
}