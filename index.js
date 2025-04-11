document.getElementById('toggle-survey').addEventListener('click', function() {
    const surveyForm = document.getElementById('survey-form');
    surveyForm.classList.toggle('hidden'); // Toggle visibility of the survey form
    this.textContent = surveyForm.classList.contains('hidden') ? 'Show Survey' : 'Hide Survey'; // Update button text
});
