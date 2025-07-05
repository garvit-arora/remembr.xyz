const submit = document.getElementById('submit');
function waitlist(){
    submit.addEventListener('click',function(){
        submit.innerHTML = 'Joined Waitlist Successfully';
        submit.style.width = "212px";
    })
}