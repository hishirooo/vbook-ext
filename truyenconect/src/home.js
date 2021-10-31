function execute() {
	return Response.success([
		{title : "Xem nhiều",input: "xem-nhieu", script : "gen.js"},
		{title : "Mới cập nhật",input: "moi-cap-nhat", script : "gen.js"},
		{title : "Truyện dịch",input: "https://truyenconect.com/truyen-dich?page=", script : "gen.js"},
		{title : "Truyện Convert",input: "https://truyenconect.com/convert?page=", script : "gen.js"},

	])
}