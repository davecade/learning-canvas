[1, 3, 5, 6, , 4, 23, 5, 2, 56, 1, 0].sort((a, b) => {
    console.log("A", a);
    console.log("B", b);
    return b - a;
});
