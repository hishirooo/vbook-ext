function execute() {
    return  Response.success([
        { title: "Hot tháng", input: "https://vcomycs.co/", script: "gen.js" },
        { title: "Mới cập nhật", input: "https://vcomycs.co/page/", script: "gen.js" },
        { title: "Hot nhất", input: "https://vcomycs.co/truyen-hot-nhat/", script: "gen.js" }, 
        { title: "Xem nhiều", input: "https://vcomycs.co/nhieu-xem-nhat/", script: "gen.js" }, 
    ])
}