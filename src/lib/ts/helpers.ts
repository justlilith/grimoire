function addRainbowBackground(className:string):void {    // Defining some variables for later.
  
  let stop1val = 150; // Color hue!
  let stop2val = 200;
  let stop3val = 100;
  const inc = 1; // How fast does the color change?
  
  let rotGrad = 180; // Initial value, which is cyan.
  const rotInc = .5;
  const rotSpd = 100;
  
  // This is what makes the rainbow gradient translate and rotate.

  // we use text interpolation, the fun way -L6
  
  const manipGradient = (elementList) => { setInterval(function(){
    rotGrad = (rotGrad += rotInc) % 360;
    stop1val = (stop1val += inc) % 360;
    stop2val = (stop2val += inc) % 360;
    stop3val = (stop3val += inc) % 360;
    
    // Math is over. Now to stringify.
    
    const stop1 = `hsl(${stop1val},100%,50%)`;
    const stop2 = `hsl(${stop2val},100%,50%)`;
    const stop3 = `hsl(${stop3val},100%,50%)`;
    
    const chaos = `linear-gradient(to bottom, ${stop1}, ${stop2}, ${stop3})`;
    
    // document("#header").css("background", "linear-gradient(" + rotGrad + "deg, hsl(" + rotGrad + ", 100%, 30%) 0%, rgba(16,16,154,1) 51%, #0AF 100%)");
    elementList
    .forEach(element => {
      element.setAttribute('style', `background-image: ${chaos}`)
    })
  }, rotSpd);
}

const elementList = Array.from(document.getElementsByClassName(className))
.filter(element => element.getAttribute('gradientified') != 'yes')

manipGradient(elementList)

elementList.forEach(element => {
  element.setAttribute('gradientified', `yes`)
})


// document.getElementsByTagName("h1")[0].addEventListener('click', () => {
//   clearInterval(manipGradient);
//   console.log("Stopped gradient manipulation!");
// });

}

export {
  addRainbowBackground
}