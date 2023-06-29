let hour = document.getElementById(`hour`);
let minute = document.getElementById(`minute`);
let second = document.getElementById(`second`);

let clock = setInterval(
    time = () => {
        let dateNow = new Date();
        let hr = dateNow.getHours();
        let min = dateNow.getMinutes();
        let sec = dateNow.getSeconds();

        if(hr < 10) {
            hr = `0` + hr;
        }

        if(min < 10) {
            hr = `0` + min;
        }

        if(sec < 10) {
            sec = `0` + sec;
        }

        hour.innerHTML = hr;
        minute.innerHTML = min;
        second.innerHTML = sec;

    },1000
);