function execute() {
    return Response.success([
        {title : "日点击榜", input : "https://m.dahexs.net/top/dayvisit_", script : "gen.js"},
        {title : "日点击榜", input : "https://m.dahexs.net/top/goodnum_", script : "gen.js"},
        {title : "日点击榜", input : "https://m.dahexs.net/top/lastupdate_", script : "gen.js"},
        {title : "完本", input : "https://m.dahexs.net/full/", script : "gen.js"},
    ])
}