function execute(url) {

    var doc = Http.get(url).html();
    if (doc){
        //var content = doc.select(".container div div.chapter-body sentence.translated").toString().replace(/<w/g,"<t").replace(/w>/g,"t>");
        //var content = doc.select(".container div div.chapter-body sentence.translated").text().replace(/\.(\s|\u|)/g,'\.<br>')
        var content = doc.select(".container div div.chapter-body sentence.translated").html()
        //var text = content.replace(/<[^>\n]*>/g,"")
        return Response.success(content);
    }   
    return null;
}