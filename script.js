function firstWord(s) {
  // your code here
	if (s === "" || !s.includes(" ")) {
		return s;
	}
	const spaceIndex = s.indexOf(" ");
	return s.substring(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
