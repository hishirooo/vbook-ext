function execute(){
    return Response.success([
        // https://otakusan.net + tab + "Newest"
        { title: "Danh sách truyện", input: "https://komeloli.net/manga?page=", script: "gen.js" }, 

    ]);
}