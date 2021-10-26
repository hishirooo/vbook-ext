function execute(url) {
    var doc = Http.get(url + "/").html()
    var info = doc.select(".truyen_if_wrap")
    var name = info.select(".truyen_info_right .entry-title").text()
    var detail = String(info.select(".truyen_info_right li")).replace(/<[^>]+>/g,'').replace(name,'').trim().replace(/\n/g,'<br>')
    var ongoing = detail.indexOf('Hoàn thành')!=-1
    
    var description = doc.select('.truyen_description .entry-content p')
    
    return Response.success({
            name : name,
            cover : doc.select(".truyen_info_left img").attr("src"),
            host : "https://truyendep.net",
            author : info.select(".truyen_info_right li")[1].text().replace('Tác Giả:',''),
            description : description,
            ongoing : ongoing,
            detail : detail
        });
}