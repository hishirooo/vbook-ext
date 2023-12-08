function execute() {
    return Response.success([
        { title: "热门小说", input: "https://www.kelexsw.com/hot-allvisit.html", script: "gen.js" },
        { title: "新书佳作", input: "https://www.kelexsw.com/hot-postdate.html", script: "gen.js" },
        { title: "玄幻魔法", input: "https://www.kelexsw.com/list-1.html", script: "gen.js" },
        { title: "仙侠修真", input: "https://www.kelexsw.com/list-2.html", script: "gen.js" },
        { title: "都市言情", input: "https://www.kelexsw.com/list-3.html", script: "gen.js" },
        { title: "历史军事", input: "https://www.kelexsw.com/list-4.html", script: "gen.js" },
        { title: "网游竞技", input: "https://www.kelexsw.com/list-5.html", script: "gen.js" },
        { title: "科幻小说", input: "https://www.kelexsw.com/list-6.html", script: "gen.js" },
        { title: "恐怖灵异", input: "https://www.kelexsw.com/list-7.html", script: "gen.js" },
        { title: "其他小说", input: "https://www.kelexsw.com/list-8.html", script: "gen.js" }
    ]);
}
