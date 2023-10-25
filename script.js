//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let withoutArticles = [];
let map = {};
for(let i=0; i<touristSpots.length; i++){
	let str = touristSpots[i];
	str = str.replace(/\ban\b|\bThe\b|\ba\b/gi, "")
	str = str.replace(/ +/gi, " ");
	str = str,trim();
	map[str]= touristSpots[i];
	withoutArticles.push(str);
}
withoutArticles.sort();
for(let i=0; i<touristSpots.length; i++){
	console.log(map[touristSpots[i]]);
}
