const linkedInIcon = document.getElementById('linkedIn');
const githubIcon = document.getElementById('github');

linkedInIcon.addEventListener('click', ()=>{
    const userConfirmed = confirm("Do you want to go to my LinkedIn Profile?");

    if (userConfirmed){
        window.open('https://www.linkedin.com/in/mihileshramah/', '_blank');
    }
})