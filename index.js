document.getElementById('toggle-survey').addEventListener('click', function() {
    const surveyForm = document.getElementById('survey-form');
    const iframe = surveyForm.querySelector('iframe');

    if (surveyForm.classList.contains('hidden')) {
        // Set the src attribute to load the form when showing
        iframe.src = iframe.getAttribute('data-tally-src');
    }

    surveyForm.classList.toggle('hidden'); // Toggle visibility of the survey form
    this.textContent = surveyForm.classList.contains('hidden') ? 'Show Survey' : 'Hide Survey'; // Update button text
});
