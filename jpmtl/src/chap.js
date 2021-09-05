function execute(url) {
<<<<<<< HEAD
    var doc = Http.get(url).html();
    if (doc){
        var content = doc.select(".cp-content").html();
        var text_remove = "<p> This novel has been translated by JPMTL.com and if you are reading this somewhere, they have stolen our translation. <\/p>";
        content = content.replace(text_remove,"").replace(text_remove,"");
        return Response.success(content);
    }   
    return null;
=======
>>>>>>> parent of 44a23e7 (add Chapter)
}