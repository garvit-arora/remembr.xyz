const submit = document.getElementById('submit');
const heading = document.getElementById('heading');
function waitlist(){
    submit.addEventListener('click',function(){
        submit.innerHTML = 'Joining...';
        // submit.style.width = "212px";
        setTimeout(function(){
            submit.style.background = "green";
            submit.textContent = "JOINED !!";
            submit.style.fontWeight = "bold";
            const audio = document.getElementById('myAudio');
            audio.play( );
            setTimeout(function(){
            submit.style.background = "linear-gradient(to right, #77562c 10%,rgb(8, 8, 8) 80%)";
                submit.textContent = "Join Waitlist";
            },7000)
        },4000)
    })
}
waitlist();