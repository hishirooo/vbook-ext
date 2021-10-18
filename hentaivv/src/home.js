function execute() {
    return Response.success([
    {title : "Truyện hot", input : "truyen-hot", script: "gen.js" },
    {title : "Tất cả", input : "tat-ca", script: "gen.js" },
    ])
}