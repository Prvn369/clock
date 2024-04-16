let time = document.querySelector(".time")


setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    time.children[0].innerText = h;
    //  For Hours 01 Format 

    if (h == 0 || h == 1 || h == 2 || h == 3 || h == 4 || h == 5 || h == 6 || h == 7 || h == 8 || h == 9) {
        time.children[0].innerText = `0${h}`
    } else {
        time.children[0].innerText = h
    }
    //  For Minutes 01 Format 

    if (m == 0 || m == 1 || m == 2 || m == 3 || m == 4 || m == 5 || m == 6 || m == 7 || m == 8 || m == 9) {
        time.children[2].innerText = `0${m}`
    }
    time.children[2].innerText = m;
    
    //  For Seconds 01 Format 

    if (s == 0 || s == 1 || s == 2 || s == 3 || s == 4 || s == 5 || s == 6 || s == 7 || s == 8 || s == 9) {
        time.children[4].innerText = `0${s}`
    } else {
        time.children[4].innerText = s
    }
    console.log(h, m, s)
}, 1000);






// let seconds = time.children[4].innerText
// seconds = Number.parseInt(seconds)


