function execute(){
    return Response.success([
        // https://otakusan.net + tab + "Newest"
        { title: "Top Day", input: "https://otakusan.net", script: "topday.js" }, 
        { title: "Lasted Update", input: "https://otakusan.net/Manga/MangaNewest", script: "gen.js" }, 
        { title: "New Post", input: "https://otakusan.net/Manga/Newest", script: "newpost.js" },
        { title: "For Boy", input: "https://otakusan.net/Manga/ForBoyNewest", script: "gen.js" }, 
        { title: "For Girl", input: "https://otakusan.net/Manga/ForGirlNewest", script: "gen.js" }, 
        
    ]);
}