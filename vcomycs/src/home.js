function execute() {
    return  Response.success([
        { title: "Hot tháng", input: "https://vcomycs.info/", script: "gen.js" },
        { title: "Mới cập nhật", input: "https://vcomycs.info/page/", script: "gen.js" },
        { title: "Hot nhất", input: "https://vcomycs.info/truyen-hot-nhat/", script: "gen.js" }, 
        { title: "Xem nhiều", input: "https://vcomycs.info/nhieu-xem-nhat/", script: "gen.js" }, 
    ])
}