function execute() {
    //http://webtruyenonlinez.com/truyen-moi/?page=2
    //http://webtruyenonlinez.com/truyen-hot/?page=3
    //http://webtruyenonlinez.com/truyen-moi-cap-nhat/?page=4

    return Response.success([
        { title: "Truyện mới", input: "http://webtruyenonlinez.com/truyen-moi/?page=", script: "topday.js" }, 
        { title: "Truyện hot", input: "http://webtruyenonlinez.com/truyen-hot/?page=", script: "gen.js" }, 
        { title: "Mới cập nhật", input: "http://webtruyenonlinez.com/truyen-moi-cap-nhat/?page=", script: "gen.js" }
    
    ]);
}