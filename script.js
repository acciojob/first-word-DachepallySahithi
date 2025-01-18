function firstWord(s) {
  // your code here
	s=s.trim;
	console.log("Input string:", s);
	if(s==='' || !s.includes(' ')) {
		console.log("Returning entire string:", s);
		return s;
	}
	const spaceIndex = s.indexOf(' ');
	console.log("Space index:", spaceIndex); 
    const firstWord = s.substring(0, spaceIndex);
    console.log("First word:", firstWord);
	return firstWord;
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
