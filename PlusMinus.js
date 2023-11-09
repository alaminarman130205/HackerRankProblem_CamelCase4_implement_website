function plusMinus(arr) {
    var positive = 0; 
    var negetive = 0; 
    var zeros = 0; 
    var n = arr.length; 
    
    for(var i=0; i<n; i++){
        if(arr[i] > 0){
            positive+=1; 
        }else if(arr[i]< 0){
            negetive+=1; 
        }else{
            zeros+=1;
        }
    }
    var pos = positive/n; 
    var neg = negetive/n; 
    var ze = zeros/n;
    // console.log(pos.toFixed(6) +"\n"+ neg.toFixed(6) +"\n"+ ze.toFixed(6))
    return [pos, neg, ze];
}



function allElement(){
    // take the value from input in this two line
    const input_Field = document.getElementById('input')
    const input_field_value = input_Field.value; 
    
    //separate the value from each other and 
    const inputArray = input_field_value.split(',').map(item => item.trim()); 
    // convert then to integer array
    const intArray = inputArray.map(str => Number(str));
    // take three return value into three variable
    const [result1, result2, result3] = plusMinus(intArray);

    const container = document.getElementById('display'); 
    const h1 = document.createElement('h3');
    const h2 = document.createElement('h3');
    const h3 = document.createElement('h3');

    h1.innerText =  result1;
    h2.innerText = result2; 
    h3.innerText = result3; 

    container.appendChild(h1)
    container.appendChild(h2)
    container.appendChild(h3)


}