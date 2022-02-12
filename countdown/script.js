const countdown = document.querySelector('.div_countdown')

const interval = setInterval(() => {
    const current = new Date()

    const deadline = new Date(current)
    deadline.setDate(current.getDate()+20)
    deadline.setHours(19)
    deadline.setMinutes(00)
    deadline.setSeconds(00)

    const diff = deadline - current

    const days = Math.floor(diff/(1000*60*60*24))
    const hours = Math.floor(diff/(1000*60*60)%24)
    const minutes = Math.floor(diff/(1000*60)%60)
    const seconds = Math.floor(diff/(1000)%60)

    countdown.innerHTML = 
    `
    <div>${days}</div>
    <div>${hours}</div>
    <div>${minutes}</div>
    <div>${seconds}</div>
    `
})

