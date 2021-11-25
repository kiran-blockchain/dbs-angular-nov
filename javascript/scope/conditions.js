function menu(type){
 if(type=='veg'){
    console.log("I am a vegie")
 }
 else if(type='non-veg'){
    console.log("I am a nonveg")
 }else{
     console.log("I am ok with both")
 }
}

function menuWithSwich(type){
    switch(type){
        case 'veg':
              console.log("i am veggies");
              break;
        case 'non-veg':
            console.log("I am a nonveg")
            break;
        default:
            console.log("I am ok with both")
            break;
 
    }
}