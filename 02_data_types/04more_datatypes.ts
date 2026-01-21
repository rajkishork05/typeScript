// Any
let is;  // its datatype is any
is = 23
is = "rj"
is.toUpperCase()   //not resisting works like js

//unknown
let mb : unknown;
mb =44;
mb = "rhj"
// mb.toUpperCase //it will give you error but it has a method to use it in legit way

if(typeof(mb) === "string"){
    mb.toUpperCase()
}

//void == function returns nothing
function ab() : void{
    console.log("hello")
}

function rb(): number{ //returns number 
    return 23
}

//null
let naj = null; //datatype any 
let n : null; //datatype null is use 
let ni : string | null;
ni = "raj"
ni =null;
// ni =22 //cannot do this