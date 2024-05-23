// Select all the classes
const allSections = document.querySelectorAll('.main-content');
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');

// Switch the active button
function changeMode() {
    for (let i = 0; i < sectBtn.length; i++) {
        //Add event listener on the current icon
        sectBtn[i].addEventListener('click', function () {
            //Grab all the active button classes and remove the active status from them
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // Switching between sections
    allSections.forEach(section => {
        section.addEventListener('click', (event) => {
            // Grab the id of the currently clicked section
            const id = event.target.dataset.id;
            if (id) {
                // And make other buttons non-active i.e non-selected
                sectBtns.forEach(btn => {
                    btn.classList.remove('active');
                })
                event.target.classList.add('active'); // Activate the clicked button.

                // Make other sections non-active
                sections.forEach(sect => {
                    sect.classList.remove('active');
                })
                // Activate the current section
                const currSection = document.getElementById(id);
                currSection.classList.add('active');
            }
        });
    });
}

changeMode();
