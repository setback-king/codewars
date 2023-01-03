// Instructions

// For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#, Map<String,Integer> in Java).

// For example:

// var water = 'H2O';
// parseMolecule(water); // return {H: 2, O: 1}

// var magnesiumHydroxide = 'Mg(OH)2';
// parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

// var fremySalt = 'K4[ON(SO3)2]2';
// parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
// As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

// Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.



// My Solution

function parser(str) {
	const chemList = [];
	let lastChar = '';
	let lastCharType = '';
	const mult = (lastChem = chemList[chemList.length - 1]) => {
		if(lastCharType === 'NUMBER') {
			Array(lastChar - 1).fill().forEach(_ => chemList.push(lastChem));
			lastChar = '';
			lastCharType = '';
			return true;
		}
	};
	const chem = () => {
		if(lastCharType === 'LETTER') {
			chemList.push(lastChar);
			lastChar = '';
			lastCharType = '';
			return true;
		}
	};
	let i = 0;
	let group;
	for(; i < str.length; i++) {
		const char = str[i];
		const code = char.charCodeAt(0);
		if([ 40, 91, 123 ].includes(code)) { // BRACKET OPEN
			mult() || chem();
			group = parser(str.slice(i + 1));
			i += group.i + 1;
			chemList.push(group.chemList);
		}
		else if([ 41, 93, 125 ].includes(code)) { // BRACKET CLOSE
			break;
		}
		else if(code >= 0x30 && code <= 0x39) { // NUMBER
			chem();
			if(lastCharType === 'NUMBER') {
				lastChar += char
			}
			else {
				lastCharType = 'NUMBER';
				lastChar = char;
			}
		}
		else { // LETTER
			if(code >= 0x41 && code <= 0x5A) {
				mult() || chem();
				lastChar = char;
			}
			else {
				lastChar += char;
			}
			lastCharType = 'LETTER';
		}
	}
	mult() || chem();
	return { chemList, i };
}
const parseMolecule = formula => {
	const result = {};
	const flatten = arr => arr.forEach(n => {
		if(typeof n === 'string') {
			result[n] ? result[n]++ : result[n] = 1;
		}
		else {
			flatten(n);
		}
	});
	flatten(parser(formula).chemList);
	return result;
};
console.log(parseMolecule('K4[ON(SO3)2]2'));

{
function parser(str, chemList = [], lastChar = '', lastCharType = '', i = 0, group) {
	const mult = (lastChem = chemList[chemList.length - 1]) => (lastCharType === 'NUMBER' && (Array(lastChar - 1).fill().forEach(_ => chemList.push(lastChem)), !(lastChar = '', lastCharType = ''))), chem = () => (lastCharType === 'LETTER' && (chemList.push(lastChar), !(lastChar = '', lastCharType = '')));
	for(; i < str.length; i++) {
		const char = str[i], code = char.charCodeAt(0);
		if([ 40, 91, 123 ].includes(code)) (mult() || chem(), group = parser(str.slice(i + 1)), i += group.i + 1, chemList.push(group.chemList));
		else if([ 41, 93, 125 ].includes(code)) break;
		else if(code >= 0x30 && code <= 0x39) (chem(), lastCharType === 'NUMBER' ? lastChar += char : (lastCharType = 'NUMBER', lastChar = char));
		else (code >= 0x41 && code <= 0x5A ? (mult() || chem(), lastChar = char) : lastChar += char, lastCharType = 'LETTER');
	}
	return (mult() || chem(), { chemList, i });
}
const parseMolecule = formula => {
	const r = {}, f = arr => arr.forEach(n => typeof n === 'string' ? (r[n] ? r[n]++ : r[n] = 1) : f(n));
	f(parser(formula).chemList);
	return r;
};
console.log(parseMolecule('K4[ON(SO3)2]2'));
}