let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.includes(needle)) {
    console.log("FOUND")
        
}
    else {
    console.log("NOT FOUND")
    }

if (haystack.includes("JS")) {
        console.log("FOUND")
}
    else {
    console.log("NOT FOUND")
    }

if (haystack[1] === needle) {
        console.log("FOUND")
}

    else {
    console.log("NOT FOUND")
    }

if (haystack[1] === "JS") {
        console.log("FOUND")
}
    else {
    console.log("NOT FOUND")
    }
