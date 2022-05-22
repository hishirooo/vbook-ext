function execute() {
    return Response.success([
        { title: "Chính truyện", input: "the-loai/chinh-truyen", script: "gen.js" },
        { title: "Ngoại truyện", input: "the-loai/ngoai-truyen", script: "gen.js" },
        { title: "Truyện theo Movie", input: "the-loai/truyen-theo-movie", script: "gen.js" },
        { title: "Truyện khác", input: "the-loai/cac-truyen-khac", script: "gen.js" }
    ])
}