function firstWord(s) {
  // your code here
	if(s === ''){
		return '';
	}
	const spaceIndex = s.indexOf(' ');
	if(spaceIndex === -1){
		return str;
	}
	return s.slice(0, spaceIndex);
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
