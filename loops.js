
function forLoop(stringarray){

for (let i =0; i<25; i++){

  if(i===1){

    var addedstring = "I am "+ i +" strange loop."

  }else{

      var addedstring = "I am "+ i +" strange loops."
  }


  stringarray=[...stringarray, addedstring ]



}
return stringarray

}

function whileLoop(num){
    while (num>0){
      console.log(--num)
    }
    return "done"
}

function doWhileLoop(arr){

  function maybeTrue(){
    return Math.random() >= 0.5
  }

  do{
    arr =arr.slice(1)
  }while (arr.length >0 && maybeTrue())

  return arr
}
