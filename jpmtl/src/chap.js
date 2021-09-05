function execute(url) {
    var doc = Http.get(url).html();
    if (doc){
        var content = doc.select(".cp-content").html()
        var text_remove = "<p> This novel has been translated by JPMTL.com and if you are reading this somewhere, they have stolen our translation. <\/p>"
        while(content.search(text_remove))
            content =  content.replace(text_remove,"")  
        return Response.success(content);
    }   
     return null;
}