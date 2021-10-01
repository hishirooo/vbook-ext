function execute() {
    return Response.success([
        { title: "Raw", input: "https://mangapl.com/manga-genre/raw/page/", script: "gen.js" },
        { title: "Uncensored", input: "https://mangapl.com/manga-genre/uncensored/page/", script: "gen.js" },
        { title: "Completed", input: "https://mangapl.com/manga-tag/completed-webtoon/page/", script: "gen.js" },
    ]);
}