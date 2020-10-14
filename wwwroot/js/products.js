$(function () {
	$.getJSON("./data.json", function (data) {
		var items = [];
		$.each(data.products, function (index, product) {
			items.push("<div class='row'>"
				+ "<div class='col-sm-3 center'>" + "<img src='" + product.image + "' width='250' />" + "</div>"
				+ "<div class='col-sm-9'>" + product.name + "<br/>" + product.description + "<br/>" + getPriceDisplay(product) + "</div>"
				+ "</div>");
			items.push("<div class='row'><div class='col'><hr/></div></div>");
		});
		items.pop();

		$("<div />", {
			html: items.join("")
		}).appendTo("section.products");
	});
});

function getPriceDisplay(product) {
	return "$" + product.base.price + " for a " + product.base.length + " " + product.base.unit + "<br/>"
		+ "add $" + product.unit.price + " per " + product.unit.unit + " over " + product.base.length + " feet";
}

activateNav = () => {
	$(".nav-link").removeClass("active");
	$(".nav-link-products").addClass("active");
};