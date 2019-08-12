const fromScratch = Array.from({ length: 16 }, (v, i) => {
    if (i + 8 < 10) {
        return "0" + (i + 8) + ":00"
    } else return i + 8 + ":00"
})

console.log(fromScratch);