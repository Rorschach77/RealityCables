$(function () {
	$.getJSON("./data.json", function (data) {
		var items = [];
		$.each(data.news, function (index, item) {
			var image = "";
			if (item.image.length > 0) {
				image = "<img src='" + item.image + "' width='250' /><br/><br/>";
			}
			items.push("<div class='row'>"
				+ "<div class='col-sm-7'><h4>" + item.title + "</h4>" + image + item.body + "</div>"
				+ "</div>");
			items.push("<div class='row'><div class='col'><hr/></div></div>");
		});
		items.pop();

		$("<div />", {
			html: items.join("")
		}).appendTo("section.content");
	});
});

activateNav = () => {
	$(".nav-link").removeClass("active");
	$(".nav-link-news").addClass("active");
};