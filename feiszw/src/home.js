function execute() {
    var doc = Http.get('https://www.feiazw.com/').html()
    var menu = doc.select("#navmenu .nav li")
    var nav = []
    menu.forEach(e => {
        Console.log(e.select('a').attr("href"))
        if(e.select('a').attr("href")=='/') input = 'https://www.feiazw.com/'
        else input = e.select('a').attr("href").match(/(\d+)/)[1]
        nav.push({ 
            title: e.text(), 
            input: input, 
            script: "gen.js" 
            })
    })
    return Response.success(nav)
}
