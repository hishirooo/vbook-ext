function execute() {
    return Response.success([
        // https://yushuwuy.com/
        // top date
        { title: "今日热榜", input: "0", script: "gentop.js" },
        // top week
        { title: "本周热榜", input: "1", script: "gentop.js" },
        //top month
        { title: "本月热榜", input: "2", script: "gentop.js" },
        // top total
        { title: "总热榜", input: "3", script: "gentop.js" },
        // lasted update
        { title: "最新小说", input: "https://yushuwuy.com/", script: "new.js" },
        // danh sách truyện 1_page
        // định dạng link gốc https://yushuwuy.com/sort/6_1.html
        { title: "耽美", input: "https://yushuwuy.com/sort/1", script: "gen.js" }, 
        { title: "高辣文", input: "https://yushuwuy.com/sort/6", script: "gen.js" }, 
        { title: "言情", input: "https://yushuwuy.com/sort/5", script: "gen.js" }, 
        { title: "百合", input: "https://yushuwuy.com/sort/2", script: "gen.js" }, 
    ]);
}