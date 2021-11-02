function execute(url) {
    var doc = Http.get(url).string()
    var article_id = doc.match(/article_id = \"(\d+)\"/)[1]
	var chapter_id = doc.match(/chapter_id = \"(\d+)\"/)[1]
	var hash = doc.match(/hash = \"(.+)\"/)[1]
    var json = Http.post('https://sxyxht.com/home/index/ajaxchapter').params({
        "id": article_id,
        "eKey": hash,
        "cid": chapter_id
    }).string()
    var content = JSON.parse(json).info.content;

    //phân trang 
    var nextPage = (Html.parse(doc)).select(".link a[rel='next']");
    while(nextPage.text() === '下一页'){
        var doc2 = Http.get('https://sxyxht.com/'+nextPage.attr('href')).string();
        var article_id2 = doc2.match(/article_id = \"(\d+)\"/)[1]
        var chapter_id2 = doc2.match(/chapter_id = \"(\d+)\"/)[1]
        var hash2 = doc2.match(/hash = \"(.+)\"/)[1]
        var json2 = Http.post('https://sxyxht.com/home/index/ajaxchapter').params({
            "id": article_id2,
            "eKey": hash2,
            "cid": chapter_id2
        }).string()
        var content2 = JSON.parse(json2).info.content;
        content = content + content2
        var nextPage = (Html.parse(doc2)).select(".link a[rel='next']");
    }
    //rac
    content = content.replace(/(<br>\s*){2,}/g,'<br>')
    return Response.success(content)
}