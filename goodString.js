let str = "additional";
let str2 = "complimentary";

function goodString(str){
    if (str.length > 3){
        if(str[0] === 'a' && str.length >= 4){
            console.log("Good string");
        }
        else{
            console.log("Bad string as do not start with a");
        }
    }
    else{
        console.log("Bad string as length is less than 4");
    }
}

goodString(str);
goodString(str2);