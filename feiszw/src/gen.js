function execute(url, page) {
    if(!page) page='1'
    var books = []
    if(url.indexOf('feiszw')!=-1){
        // home
        var doc = fetch("https://www.feiszw.com/").html()
        var listbook = doc.select("#update .tab_list ul")
        listbook.forEach(book =>{
            books.push({
                name: book.select(".tab2 a").text(),
                link: book.select(".tab2 a").attr('href'),
                cover: "",
                description: book.select(".tab1").text() + " - Author: "+ book.select(".tab3").text() + " - Update: " + book.select(".tab4").text(),//Cái desc này nên để chapter hoặc tác giả
                host: 'https://www.feiszw.com'
            })
            
        })
        return Response.success(books)
    }
    else{
        //https://www.feiszw.com/Book/ShowBookList.aspx?tclassid=1&page=1
        var doc = fetch("https://www.feiszw.com/Book/ShowBookList.aspx?tclassid=" + url + "&page=" + page).html()
        // if(page=='1')
        //     var totalpage = parseInt(String(doc.select('.paginator a').last()).match(/page=(\d+)/)[1])
        //     Console.log(totalpage)
        var listbook = doc.select('.listbox .book')
        listbook.forEach(book =>{
            // xóa tiêu đề cột
            if(String(book).indexOf('thead')==-1)
            books.push({
                name: book.select(".tab3 a").attr('title'),
                link: book.select(".tab3 a").attr('href'),
                cover: "",
                description: book.select(".tab2").text() + " - "+ book.select(".tab4 a").attr('title') + " - " + book.select(".tab5").text(),//Cái desc này nên để chapter hoặc tác giả
                host: 'https://www.feiszw.com'
            })
        })
        if (books.length == 0) next = ""; 
        else next = (parseInt(page) + 1).toString();
        return Response.success(books,next)
    }
}