function execute(url) {
    var doc = Http.get("https://truyenkk1.com/truyen/cot-thu-loi-lightning-rod/chap/356286-chuong-11/").html()
    return Response.success(doc);
}