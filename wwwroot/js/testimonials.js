$(function () {
	$.getJSON("./data.json", function (data) {
		var items = [];
		$.each(data.testimonials, function (index, item) {
			items.push("<div class='row'>"
				+ "<div class='col-sm-8'>" + item.testimonial + "</div>"
				+ "<div class='col-sm-4'>" + item.reviewer + " - " + item.location + "</div>"
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
	$(".nav-link-testimonials").addClass("active");
};