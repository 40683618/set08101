import { loadAllProgress, loadAllEndings, clearProgress } from './progress.js';

// function for showing the progress
function updateProgressDisplay() {
    const progressBox = document.getElementById('progress-box');
    const allProgress = loadAllProgress();
    const allEndings = loadAllEndings();

    if (Object.keys(allProgress).length === 0 && allEndings.length === 0) {
        progressBox.innerHTML = '<h1>Progress</h1><p>You did not start any story.</p>';
        return;
    }

    let progressHTML = '<h1>Progress</h1>';

    if (Object.keys(allProgress).length > 0) {
        progressHTML += '<h2>Stories in Progress:</h2><ul>';

        for (const storyId in allProgress) {
            // getting the story name
            let storyTitle = '';
            if (storyId === 'story1') storyTitle = 'The White Room';
            else if (storyId === 'story2') storyTitle = 'Forest Trail';
            else if (storyId === 'story3') storyTitle = 'The Casino';

            const progress = allProgress[storyId];
            // creating html to display progress
            progressHTML += `<li>${storyTitle} - Last played: ${new Date(progress.timestamp).toLocaleString()}</li>`;
        }

        progressHTML += '</ul>';
    }


    if (allEndings.length > 0) {
        // adding information about unlocked endings
        progressHTML += '<h2>Unlocked Endings:</h2><ul>';

        allEndings.forEach(ending => {
            let storyTitle = '';
            if (ending.storyId === 'story1') storyTitle = 'The White Room';
            else if (ending.storyId === 'story2') storyTitle = 'Forest Trail';
            else if (ending.storyId === 'story3') storyTitle = 'The Casino';

            progressHTML += `<li>${storyTitle} - Ending ${ending.endingId} (${new Date(ending.timestamp).toLocaleString()})</li>`;
        });

        progressHTML += '</ul>';
    }

    progressBox.innerHTML = progressHTML;
}

// function to reset progress
function resetProgress() {
    if (confirm('Are you sure you want to reset all your progress?')) {
        clearProgress();
        updateProgressDisplay();
        alert('Progress successfully reset.');
    }
}

// function to save volume
function saveVolume(value) {
    localStorage.setItem('volume', value);
}

// function to load volume
function loadVolume() {
    return localStorage.getItem('volume') || 50;
}

// page initialisation
document.addEventListener('DOMContentLoaded', () => {
    updateProgressDisplay();

    const volumeSlider = document.querySelector('input[type="range"]');
    if (volumeSlider) {
        volumeSlider.value = loadVolume();
        volumeSlider.addEventListener('change', () => {
            saveVolume(volumeSlider.value);
        });
    }

    // handler for resetting progress button
    const resetButton = document.querySelector('button[type="button"]');
    if (resetButton) {
        resetButton.addEventListener('click', resetProgress);
    }
});