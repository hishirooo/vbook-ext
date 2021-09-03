function execute() {
    return Response.success([
        { title: "热门小说", input: "https://www.xklxsw.com/hot-allvisit", script: "genre.js" },
        { title: "新书佳作", input: "https://www.xklxsw.com/hot-postdate", script: "genre.js" },
        { title: "玄幻魔法", input: "https://www.xklxsw.com/list-1", script: "genre.js" },
        { title: "仙侠修真", input: "https://www.xklxsw.com/list-2", script: "genre.js" },
        { title: "都市言情", input: "https://www.xklxsw.com/list-3", script: "genre.js" },
        { title: "历史军事", input: "https://www.xklxsw.com/list-4", script: "genre.js" },
        { title: "网游竞技", input: "https://www.xklxsw.com/list-5", script: "genre.js" },
        { title: "科幻小说", input: "https://www.xklxsw.com/list-6", script: "genre.js" },
        { title: "恐怖灵异", input: "https://www.xklxsw.com/list-7", script: "genre.js" },
        { title: "其他小说", input: "https://www.xklxsw.com/list-8", script: "genre.js" }
    ]);
}
