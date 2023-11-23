let captcha;
function generate() {
	captcha = document.getElementById("image");
	let uniquechar = "";
	const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (let i = 1; i < 7; i++) {
		uniquechar += randomchar.charAt(
			Math.random() * randomchar.length)
	}
	captcha.innerHTML = uniquechar;
}
