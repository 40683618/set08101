export { saveProgress, loadProgress, saveEnding, clearProgress };

// function for saving progress
function saveProgress(storyId, nodeId, state = {}, endings = []) {
    try {
        const progress = {
            storyId: storyId,
            nodeId: nodeId,
            state: state,
            endings: endings,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('storyProgress', JSON.stringify(progress));
    } catch (error) {
        console.error('Failed to save progress:', error);
    }
}

// function for loading progress from localstorage object
function loadProgress() {
    const savedProgress = localStorage.getItem('storyProgress');
    if (savedProgress) {
        return JSON.parse(savedProgress);
    }
    return null;
}

// function for saving ending
function saveEnding(storyId, endingId) {
    const progress = loadProgress() || { storyId: storyId, nodeId: null, state: {}, endings: [] };

    if (!progress.endings.some(ending => ending.storyId === storyId && ending.endingId === endingId)) {
        progress.endings.push({
            storyId: storyId,
            endingId: endingId,
            timestamp: new Date().toISOString()
        });

        localStorage.setItem('storyProgress', JSON.stringify(progress));
    }
}


//function for clearing all progress
function clearProgress() {
    localStorage.removeItem('storyProgress');
}
