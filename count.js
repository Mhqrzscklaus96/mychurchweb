const count = document.querySelector(".count")

/* future date */
const lunchDate = new Date( "Dec 3, 2023 10: 00 : 00 ").getTime()




const now = new Date().getTime()




/* interval set up */

const invt = setInterval(()=>{
    const distance = lunchDate - now
   console.log(distance)
   const Days = Math.floor(distance / (1000 * 60 * 60 * 24))
   const hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60))
   const Minitues = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ))
   const seconds = Math.floor((distance % (1000 * 60  )) / (1000  ))



    /* display  */
    count.innerHTML = `
                        <div >${Days} <span>Days</span></div>
                        <div class"none">${hours} <span>hours</span></div>
                        <div class"none">${Minitues} <span>minitues</span></div>
                        <div class"none">${seconds} <span>Seconds</span></div>
                      `
}, 1000)

