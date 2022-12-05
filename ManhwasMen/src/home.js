function execute() {
    return Response.success([
        { title: "Manga List", input: "manga-list", script: "gen.js" }, 
        //https://manhwas.men/manga-list/
    ])
}