$(function () {
	$.getJSON("./data.json", function (data) {
		var items = [];
		$.each(data.faq, function (index, item) {
			items.push("<div class='row'>"
				+ "<div class='col-sm-7'><h5>" + item.title + "</h5>" + item.body + "</div>"
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
	$(".nav-link-faq").addClass("active");
};