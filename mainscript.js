const textToCheck = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
let isError = false;

function checkPalindrome(){
  
  isError=false;
  const regex= /[\W_]/g;
  const cleanText = textToCheck.value.toLowerCase().replace(regex,"");

  if (textToCheck.value===""){
    alert("Please input a value");
    isError = true;
    result.classList.add('hide');
    return null;
  }

  else if (cleanText===cleanText
  .split("")
  .reverse()
  .join("")){
    result.classList.remove('hide');
    result.innerText=`${textToCheck.value} is a palindrome`;
    
  }

  else {
  
   result.innerText=`${textToCheck.value} is not a palindrome`;
  
  
  }
textToCheck.value="";
result.classList.remove('hide');
}

checkButton.onclick= checkPalindrome;
textToCheck.addEventListener("keydown", (e)=>{
  if (e.key === "Enter") {
    checkerPalindrome();
  }
});
