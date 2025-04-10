let tubSize = "S";

function popcornPrice(tubSize) {
    if ( tubSize === "S" ){
        console.log("Small tub Popcorn is 50 Rs.");
    }
    else if (tubSize === "M"){
        console.log("Medium tub Popcorn is 100 Rs.");
    }
    else if (tubSize === "L"){
        console.log("Large tub Popcorn is 200 Rs.");
    }
    else if (tubSize === "XL"){
        console.log("Extra Large tub Popcorn is 250 Rs.");
    }
    else {
        console.log("Invalid tub size. Please choose S, M, L, or XL.");
    }
}

popcornPrice(tubSize);