function execute() {
    var doc = Http.get("https://truyentranhdammyhay.com/").html()
    var menu = doc.select("#menu-menu li a")
    var listHome = []
    for( var i=1;i< menu.size();i++){
        listHome.push({
            title : menu.get(i).text(),
            input : menu.get(i).attr("href") + "page",
            script: "gen.js"
        })
    }
    listHome.push({
        title : "Mới cập nhật",
        input : "https://truyentranhdammyhay.com/moi-cap-nhat/page/",
        script: "gen.js"
    },
    {
        title : "Mới đăng",
        input : "https://truyentranhdammyhay.com/moi-dang/page/",
        script: "gen.js"
    })
    return Response.success(listHome)
}

// https://truyentranhdammyhay.com/ngon-tinh/page/3