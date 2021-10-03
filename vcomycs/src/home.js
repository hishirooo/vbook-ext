function execute() {
    return  Response.success([
        { title: "Hot tháng", input: "https://vcomycs.com/", script: "gen.js" },
        { title: "Mới cập nhật", input: "https://vcomycs.com/page/", script: "gen.js" },
        { title: "Hot nhất", input: "https://vcomycs.com/truyen-hot-nhat/", script: "gen.js" }, 
        { title: "Xem nhiều", input: "https://vcomycs.com/nhieu-xem-nhat/", script: "gen.js" }, 
    ])
}