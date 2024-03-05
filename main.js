import "./style.scss";
// const a = 10
// const b = 20

// if(a > 5 && b < 50 && a < 20 && b !== 25){
//     console.log('We are si between 5 and 50')
// }
// document.addEventListener('keydown',(e)=>{
//     if(e.code === 'KeyD'){
//         console.log('You are pressed D ')
//     } else if( e.code === 'Escape'){
//         console.log('Escape')
//     }
// }
// )
document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "KeyD":
      console.log("Pressed D SWITCH");
      break;
    case "KeyA":
      console.log("Pressed A SWITCH");
    case "KeyS":
      console.log("Pressed S SWITCH");
      break;
    case "KeyQ":
      console.log("Pressed Q SWITCH");
      break;
    default:
        console.log('Other')
  }
});
