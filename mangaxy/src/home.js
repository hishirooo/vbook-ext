function execute(){
    return Response.success([
        // https://otakusan.net + tab + "Newest"
        { title: "Chap mới", input: "https://nhomdich.com/search.php?andor=and&van=&sort=chap&view=thumb&act=timnangcao&ajax=true&page=", script: "gen-home.js" }, 
        { title: "Truyện mới", input: "https://nhomdich.com/search.php?andor=and&sort=truyen&view=thumb&act=timnangcao&ajax=true&page=", script: "gen-home.js" }, 
        { title: "Xem nhiều", input: "https://nhomdich.com/search.php?andor=and&sort=xem&view=thumb&act=timnangcao&ajax=true&page=", script: "gen-home.js" },
        { title: "A-Z", input: "https://nhomdich.com/search.php?andor=and&sort=ten&view=thumb&act=timnangcao&ajax=true&page=", script: "gen-home.js" }, 
        
    ]);
}

