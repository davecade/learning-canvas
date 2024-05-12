const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, item) => {
	return acc + item;
});

const items = [
	{ name: "Apple", category: "Fruit" },
	{ name: "Monitor", category: "Electronics" },
	{ name: "Pear", category: "Fruit" },
];

const result = items.reduce((acc, item) => {
	const category = item.category;

	if (acc[category]) {
		acc[category].push(item);
	} else {
		acc[category] = [item];
	}

	return acc;
}, {});

const values = [1, 2, 2, 3, 4, 4, 5, 5, 5];

const uniqueArray = values.reduce((acc, item) => {
	if (!acc.includes(item)) {
		acc.push(item);
	}
	return acc;
}, []);

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const resultNames = names.reduce((acc, item) => {
	if (acc[item]) {
		acc[item]++;
	} else {
		acc[item] = 1;
	}
	return acc;
}, {});

console.log("result >", resultNames);

const nestedArrays = [
	[1, 2],
	[3, 4],
	[5, 6],
];

const flattenedArray = nestedArrays.reduce((acc, item) => {
	item.forEach((innerItem) => {
		acc.push(innerItem);
	});

	return acc;
}, []);
