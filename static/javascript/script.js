document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.formation-btn').forEach(button => {
       button.onclick = () => {
            showFormation(button);
       }
    })

    document.querySelector('.resume-text').onclick = () => {
        showResume();
    }
})


function showFormation(button) {

    let formation = button.dataset.formation;
            
            document.querySelectorAll('.formation-content').forEach(content => {
                content.style.display = 'none';
            })

            document.querySelectorAll('.formation-btn').forEach(button => {
                button.style.color = '#263547';
                button.style.borderColor = '#263547';
                button.id = '';
            })
            
            document.querySelector(`#${formation}`).style.display = 'flex';
            button.style.color = '#FD4345';
            button.style.borderColor = '#FD4345'; 
            button.id = 'current-btn';
}


function showResume() {
    
    let resume_div = document.querySelector('.resume-div');
    let cross = document.querySelector('.cross');
    let around = document.querySelector('.resume-around');

    resume_div.style.display = 'block';

    cross.onclick = () => {
        resume_div.style.display = 'none';
    }
    around.onclick = () => {
        resume_div.style.display = 'none';
    }
}
