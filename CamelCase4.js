function processData(input){
    op = input[0];
    ot = input[2];
    let str = input.substring(4);
  
    let str_class = input.substring(5);
    let str_class_first = input.substring(4, 5);
    let str_class_first_lower = str_class_first.toLowerCase();
    let final_class_string = str_class_first_lower + str_class;
  
    if (op == "S") {
      let temp = "";
      let newString = str.slice(0, -2);
      if (ot == "M") {
        if (str === newString.toLowerCase()) {
          temp += newString;
        } else {
          let lowerCaseString = newString.toLowerCase();
          let formatString = "";
          for (let i = 0; i < lowerCaseString.length; i++) {
            if (lowerCaseString[i] !== newString[i]) {
              formatString += " ";
            }
            formatString += lowerCaseString[i];
          }
          temp = formatString;
          return temp;
        }
      } else if (ot == "V") {
        if (str === str.toLowerCase()) {
          temp += str;
        } else {
          let lowerCaseString = str.toLowerCase();
          let formatString = "";
          for (let i = 0; i < lowerCaseString.length; i++) {
            if (lowerCaseString[i] !== str[i]) {
              formatString += " ";
            }
            formatString += lowerCaseString[i];
          }
          temp = formatString;
          return temp;
        }
      } else if (ot == "C") {
        if (str === final_class_string.toLowerCase()) {
          temp += final_class_string;
        } else {
          let lowerCaseString = final_class_string.toLowerCase();
          let formatString = "";
          for (let i = 0; i < lowerCaseString.length; i++) {
            if (lowerCaseString[i] !== final_class_string[i]) {
              formatString += " ";
            }
            formatString += lowerCaseString[i];
          }
          temp = formatString;
          return temp;
        }
      }
    }
  if (op == "C") {
      let stemp = str;
      let firstWord = stemp[0].toUpperCase();
      if (ot == "M") {
        let without_first = stemp.substring(1);
        let finalString = firstWord + without_first;
  
        let words = finalString.split(" ");
        const capitalizedWords = words.map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        });
        let last_final = capitalizedWords.join("");
        let last_word = "()"
        let final = last_final+last_word;
        return final;
  
      } else if (ot == "V") {
          let vtemp = str;
          let words = vtemp.split(" ");
          const capitalizedWords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          });
          let last_final = capitalizedWords.join("");
          let withoutfirst = last_final.substring(1); 
          let firstWord = last_final[0].toLowerCase();
          let final = firstWord+withoutfirst;
          return final;
      } else if (ot == "C") {
          let ctemp = str; 
          let words = ctemp.split(" ");
          const capitalizedWords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          });
          let last_final = capitalizedWords.join("");
          return last_final;
      }
    }
  }
function convert(){
    // take input value as input_field_value
    let input_field = document.getElementById('input_field')
    let input_field_value = input_field.value; 

    //send input value to processData function through input_field_value;
    let input_value_after_tuning = processData(input_field_value)
    console.log(input_value_after_tuning);

    // take div  as container 
    const container = document.getElementById('display'); 
    // create a h4 element 
    const h4 = document.createElement('h4');
    // assign our final return value into h4 
    h4.innerText = input_value_after_tuning;
    // append h4 value inside the div container
    container.append(h4)
    // make the field empty 
    input_field = "";

}