function execute(url) {
    url = url.replace("feiszw.com","feiazw.com")
    let doc = fetch(url).html()
    doc.select(".chaptercontent .l").remove()
    var text = doc.select(".chaptercontent")
    text = Html.clean(text, ["p"])
    text = text.replace(/(<([^>]+)>)/g,'')
    text =  text.replace(/\n/g,'<br><br>')
    text = text.replace("飞速中文.com 中文域名一键直达","")
    return Response.success(text)
}