function execute(url) {
    var doc = Http.get(url + "/").html()
    var info = doc.select(".gallery_top")
    return Response.success({
        name: info.select(".gallery_right .info h1").text(),
        cover: info.select(".gallery_left .cover img").attr("src"),
        host: "https://hentaifox.com/",
        author: info.select(".gallery_right .artists li a").text(),
        description: "",
        detail: String(info.select(".gallery_right .info > .i_text")).replace(/<[^>]+>/g,'').replace(/\n/,'<br>')
    })
}