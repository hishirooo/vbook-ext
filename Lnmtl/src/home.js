function execute() {
    return Response.success([
        { title: "Favourites", input: "https://lnmtl.com/novel?orderBy=favourites&order=desc&filter=all&page=", script: "gen.js" },
        { title: "Ongoing", input: "https://lnmtl.com/novel?orderBy=favourites&order=desc&filter=ongoing&page=", script: "gen.js" }, 
        { title: "Compelete", input: "https://lnmtl.com/novel?orderBy=favourites&order=desc&filter=finished&page=", script: "gen.js" }, 

    ]);
}