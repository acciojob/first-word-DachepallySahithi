function firstWord(s) {
  // your code here
	const spaceIndex = s.indexOf(' ');
	if (spaceIndex === -1){
		return s;
	} else {
		return s.substring(0,spaceIndex)
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
