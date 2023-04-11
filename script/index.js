
var rating = 0;

var rate = (value) => {
	rating = value;
}

var submitRating = () => {
	if (rating > 0) {
		window.location.href = "thankYou.html?rating=" + rating;
	}
	else {
		alert("Please select a rating.");
	}
}
