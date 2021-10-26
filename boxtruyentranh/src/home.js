function execute() {
    var doc = Http.get("https://boxtruyentranh.net/").html()
    var menu = doc.select("#menu-menu li a")
    var listHome = []
    for( var i=1;i< menu.size();i++){
        listHome.push({
            title : menu[i].text(),
            input : menu[i].attr("href") + "page",
            script: "gen.js"
        })
    }
    listHome.push({
        title : "Mới cập nhật",
        input : "https://boxtruyentranh.net/moi-cap-nhat/page/",
        script: "gen.js"
    },
    {
        title : "Mới đăng",
        input : "https://boxtruyentranh.net/moi-dang/page/",
        script: "gen.js"
    })
    return Response.success(listHome)
}

// https://boxtruyentranh.net/ngon-tinh/page/3