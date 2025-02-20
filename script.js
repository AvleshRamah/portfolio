const linkedInIcon = document.getElementById('linkedIn');
const githubIcon = document.getElementById('github');

linkedInIcon.addEventListener('click', ()=>{
    const userConfirmed = confirm("Do you want to go to my LinkedIn Profile?");

    if (userConfirmed){
        window.open('https://www.linkedin.com/in/mihileshramah/', '_blank');
    }
})

githubIcon.addEventListener('click', ()=>{
    const userConfirmed = confirm("Do you want to go to my Github Profile?");

    if (userConfirmed){
        window.open('https://github.com/AvleshRamah', '_blank');
    }
})
//animation
var typed = new Typed(".auto-type", {
    strings : ["Programmer", "Web Designer", "Web Developer"],
    typeSpeed : 110,
    backSpeed : 110,
    loop : true
});
