function execute(url) {
    var doc = Http.get(url + "/").html()
    return Response.success({
        name : doc.select(".post-title h1").text(),
        cover : doc.select(".summary_image img").attr("src"),
        host : "https://tusachxinhxinh.com",
        author : doc.select(".comic-intro-text span")[1].text(),
        // description : doc.select(".text-justify p").text(),
        // ongoing : ongoing.indexOf('Đang tiến hành')!=-1,
        detail :"",
    })
}