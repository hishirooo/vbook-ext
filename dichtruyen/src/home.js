function execute() {
	var doc = Http.get("https://dichtruyen.org/").html()
	var homes =  doc.select(".dtm_expand .list_status .b_type")

	var listHome = []
	homes.forEach(home =>listHome.push({
		title : home.text(),
		input : "https://dichtruyen.org" + home.attr("href"),
		script: "gen.js"
	}))
	return Response.success(listHome)
}

//https://dichtruyen.org/danh-sach/truyen-vfc/