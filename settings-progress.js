import { loadProgress, clearProgress } from './progress.js';

// function for showing the progress
function updateProgressDisplay() {
    const progressBox = document.getElementById('progress-box');
    const savedProgress = loadProgress();

    if (!savedProgress) {
        progressBox.innerHTML = '<h1>Progress</h1><p>You did not start any story.</p>';
        return;
    }

    // getting the story name
    let storyTitle = '';
    if (savedProgress.storyId === 'story1') storyTitle = 'The White Room';
    else if (savedProgress.storyId === 'story2') storyTitle = 'Forest Trail';
    else if (savedProgress.storyId === 'story3') storyTitle = 'The Casino';

    // creating html to display progress
    let progressHTML = '<h1>Progress</h1>';
    progressHTML += `<p>Last played: ${storyTitle}</p>`;
    progressHTML += `<p>Date: ${new Date(savedProgress.timestamp).toLocaleString()}</p>`;

    // adding information about unlocked endings
    progressHTML += '<h2>Unlocked endings:</h2>';

    if (savedProgress.endings && savedProgress.endings.length > 0) {
        progressHTML += '<ul>';
        savedProgress.endings.forEach(ending => {
            let endingStoryTitle = '';
            if (ending.storyId === 'story1') endingStoryTitle = 'The White Room';
            else if (ending.storyId === 'story2') endingStoryTitle = 'Forest Trail';
            else if (ending.storyId === 'story3') endingStoryTitle = 'The Casino';

            progressHTML += `<li>${endingStoryTitle} - Ending ${ending.endingId} (${new Date(ending.timestamp).toLocaleString()})</li>`;
        });
        progressHTML += '</ul>';
    } else {
        progressHTML += '<p>You did not unlock any endings.</p>';
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