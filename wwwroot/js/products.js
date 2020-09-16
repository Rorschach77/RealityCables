$(function () {
	$.getJSON("/data.json", function (data) {
		var items = [];
		$.each(data.products, function (index, product) {
			items.push("<div class='row'>"
				+ "<div class='col-sm-3 center'>" + "<img src='" + product.image + "' width='250' />" + "</div>"
				+ "<div class='col-sm-9'>" + product.name + "<br/>" + product.description + "<br/>" + getPriceDisplay(product) + "</div>"
				+ "</div>");
		});

		$("<div />", {
			html: items.join("")
		}).appendTo("main");
	});
});

function getPriceDisplay(product) {
	return "$" + product.basePrice + " for a " + product.baseLength + " feet<br/>";
}