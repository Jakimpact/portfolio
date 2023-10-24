document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.formation-btn').forEach(button => {

       button.onclick = () => {
            let formation = button.dataset.formation;
            
            document.querySelectorAll('.formation-content').forEach(content => {
                content.style.display = 'none';
            })
            document.querySelectorAll('.formation-btn').forEach(button => {
                button.style.color = '#263547';
                button.style.borderColor = '#263547';
            })

            document.querySelector(`#${formation}`).style.display = 'flex';
            button.style.color = '#FD4345';
            button.style.borderColor = '#FD4345'; 
       }
    })
})
