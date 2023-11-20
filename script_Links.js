document.addEventListener('DOMContentLoaded', function () {

    //Creation of variables
    const switchColor = document.getElementById('switchColor');
    const body = document.body;
    const container = document.querySelector('.Container');

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

        if (body.classList.contains('dark')) 
            localStorage.setItem('appliedColor', 'dark');
        else 
            localStorage.removeItem('appliedColor');
    });

});