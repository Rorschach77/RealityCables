// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(function () {
	$("header").load("./templates/header.html", function () {
		if (activateNav !== undefined) {
			activateNav();
		}
	});
	$("footer").load("./templates/footer.html", function () {
		$(".current-year").html(new Date().getFullYear());
	});
});

activateNav = () => { $(".nav-link-home").addClass("active"); };