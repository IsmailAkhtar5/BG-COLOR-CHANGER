// =================== ACCESSING BUTTONS AND PARA BY DOM METHOS====================
let Button1=document.getElementById("btn1");
let Button2=document.getElementById("btn2");
let copypara=document.getElementById("para-section");

// ===================  FUNCTION FOR GENERATING RANDOM COLOR===================
const RandomColorGenerator=()=>{
   let MyHexCode,colors="#";
  const str="0123456789abcdef";
   for(let i=0 ;i<=5;i++)
   {
    MyHexCode=(str[Math.floor(Math.random()*16)]);
     colors=colors+MyHexCode;
   }
   return colors;
}

// =======================  ON CALL THIS COLOR GENRATED FOR BUTTON-1 =====================
 const HandleButtonEvent1=()=>{
  const HexCode1=RandomColorGenerator();
  Button1.textContent=HexCode1;
  document.body.style.backgroundImage=`linear-gradient(160deg, #0093E9 0%, ${HexCode1} 100%)`;

  copypara.innerHTML=`background-color: #0093e9;

  background-image: linear-gradient(160deg, #0093e9 0%, ${HexCode1} 100%);`
 }    
//  =======================  ON CALL THIS COLOR GENRATED FOR BUTTON-2 =====================
 const HandleButtonEvent2=() =>{
  const HexCode2=RandomColorGenerator();
  Button2.textContent=HexCode2;
  document.body.style.backgroundImage=`linear-gradient(160deg, #0093E9 0%, ${HexCode2} 100%)`;

  copypara.innerHTML=`background-color: #0093e9;

  background-image: linear-gradient(160deg, #0093e9 0%, ${HexCode2} 100%);`


 }
// ======================== FUNCTION CALLING COLOR GENRATING===================
Button1.addEventListener("click", HandleButtonEvent1);
Button2.addEventListener("click",HandleButtonEvent2)


// =======================FUNC FOR COPYING THE TEXT==============

copypara.addEventListener("click",()=>{
  navigator.clipboard.writeText(copypara.innerText);
  alert("code has been copied")
})

Button1.addEventListener("click",()=>{
  navigator.clipboard.writeText(Button1.innerText)
})