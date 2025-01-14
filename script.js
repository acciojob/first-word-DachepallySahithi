function firstWord(s) {
  // your code here
	if (s === "" || s.trim() === "") {
		return s;
	}
	const match = s.match(/^\S+/);
	return match ? match[0] : s;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
