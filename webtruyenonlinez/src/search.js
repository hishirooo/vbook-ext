function execute(key) {
    var doc = Http.get('http://webtruyenonlinez.com/tim-truyen/?keyword=quy').html()

    return Response.success(doc)
}