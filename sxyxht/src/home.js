function execute() {
    return Response.success([
        {title : "最近更新", input : "moi-cap-nhat", script : "gen.js"},
        {title : "排行", input : "thu-vien", script : "gen.js"},
        {title : "重磅推荐", input : "de-nghi", script : "gen.js"},
    ])
}