document.addEventListener('DOMContentLoaded', function () {

    //Creation of variables
    const switchColor = document.getElementById('switchColor');
    const body = document.body;
    const container = document.querySelector('.Container');
    const colors = ['#3100E0', '#2600AD', '#00FF00', '#FFD700', '#FF6347', '#3100E0'];

    //Function to switch between colors 
    function updateButtonStyle(darkApplied) 
    {
        if (switchColor.style.backgroundColor = darkApplied) 
            switchColor.style.backgroundColor = '#3100E0';
        else 
            switchColor.style.backgroundColor = '#2600AD';
    }

    //Event for the color switch
    switchColor.addEventListener('click', function () {
        body.classList.toggle('dark');

        container.classList.toggle('dark-mode-container', body.classList.contains('dark'));

        updateButtonStyle(body.classList.contains('dark'));

        //"For" used to switch the button color like an animation
        for (let i = 0; i < colors.length; i++) {
            setTimeout(() => {
                switchColor.style.transition = 'background-color 0.8s linear';
                switchColor.style.backgroundColor = colors[i];
            }, i * 1000);
        }
        
        if (body.classList.contains('dark')) 
            localStorage.setItem('appliedColor', 'dark');
        else 
            localStorage.removeItem('appliedColor');
    });

});