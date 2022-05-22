function execute() {
        return Response.success([
            { title: "Mới cập nhật", input: "truyen-moi-cap-nhat", script: "gen.js" },
            { title: "Truyện Hot", input: "truyen-dang-hot", script: "gen.js" },
            { title: "Truyện Full", input: "truyen-da-hoan-thanh", script: "gen.js" }
        ])
}