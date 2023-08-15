const indep = document.querySelector(".indep")

/* future date */
const lunchDate = new Date( "October 1, 2023 10: 00 : 00 ").getTime()




const now = new Date().getTime()

alert("hi")


/* interval set up */

const invt = setInterval(()=>{
    const distance = lunchDate - now
   console.log(distance)
   const Days = Math.floor(distance / (1000 * 60 * 60 * 24))
   const hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60))
   const Minitues = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ))
   const seconds = Math.floor((distance % (1000 * 60  )) / (1000  ))



    /* display  */
    indep.innerHTML = `
                        <div>${Days} <span>Days</span></div>
                        <div>${hours} <span>hours</span></div>
                        <div>${Minitues} <span>minitues</span></div>
                        <div>${seconds} <span>Seconds</span></div>
                      `
}, 1000)