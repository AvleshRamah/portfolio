const linkedInIcon = document.getElementById('linkedIn');
const githubIcon = document.getElementById('github');

linkedInIcon.addEventListener('click', ()=>{
    const userConfirmed = confirm("Do you want to go to my LinkedIn Profile?");

    if (userConfirmed){
        window.open('https://www.linkedin.com/in/mihileshramah/', '_blank');
    }
})

githubIconIcon.addEventListener('click', ()=>{
    const userConfirmed = confirm("Do you want to go to my Github Profile?");

    if (userConfirmed){
        window.open('https://github.com/AvleshRamah', '_blank');
    }
})
