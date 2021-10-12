function execute() {
    return Response.success([
        { title: "Mới Cập Nhật", input: "https://truyen210.net/danh-sach-truyen?page=", script: "gen.js" },
        { title: "Đang Hot", input: "https://truyen210.net/dang-hot?page=", script: "gen.js" },
    ]);
}