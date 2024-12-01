

let text=prompt("Metn daxil edin: ");
let number=false;

for(let i=0; i<text.length; i++){
    if (/\d/g.test(text[i])) {
       number=true;
       break; 
    }
}

if (number==true) {
    console.log("Metnde reqem var!");
    
}else{
    console.log("Metnde reqem yoxdur!");
    
}