var age = 27;
var haslicence = false;

if(age > 18){
    if(haslicence === true){
        console.log('adult width licence')
    }else{
        console.log('adlilt but hasno licenc')
    } 
}

else{
    console.log('You are adlilt')
}

// Ternary Opertor Function 

age > 18 ? haslicence === true ? console.log("adult width licence"): console.log("adult but has no licence") : console.log("you are not adult");