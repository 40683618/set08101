export { saveProgress, loadProgress, loadAllProgress, saveEnding, loadAllEndings, clearProgress, clearStoryProgress };

// function for saving progress for one story
function saveProgress(storyId, nodeId, state = {}) {
    try {
        let allProgress = JSON.parse(localStorage.getItem('allStoryProgress')) || {};  // getting all data

        // updating progress for specific story
        allProgress[storyId] = {
            nodeId: nodeId,
            state: state,
            timestamp: new Date().toISOString()
        };

        //saving all progress to localStorage
        localStorage.setItem('allStoryProgress', JSON.stringify(allProgress));
    } catch (error) {
        console.error('Failed to save progress:', error);
    }
}

//function for loading progress for a specific story
function loadProgress(storyId) {
    try {
        const allProgress = JSON.parse(localStorage.getItem('allStoryProgress') || '{}');
        return allProgress[storyId] || null;
    } catch (error) {
        console.error('Failed to load progress:', error);
        return null;
    }
}

// function for saving ending
function saveEnding(storyId, endingId) {
    try {
        let allEndings = JSON.parse(localStorage.getItem('storyEndings')) || []; // getting all endings

        // checking if ending is already saved
        if (!allEndings.some(ending => ending.storyId === storyId && ending.endingId === endingId)) {
            // adding new ending
            allEndings.push({
                storyId: storyId,
                endingId: endingId,
                timestamp: new Date().toISOString()
            });

            // saving all endings to localStorage
            localStorage.setItem('storyEndings', JSON.stringify(allEndings));
        }
    } catch (error) {
        console.error('Failed to save ending:', error);
    }
}

// function for loading all progress data
function loadAllProgress() {
    try {
        return JSON.parse(localStorage.getItem('allStoryProgress')) || {};
    } catch (error) {
        console.error('Failed to load all progress:', error);
        return {};
    }
}

// function for loading all endings
function loadAllEndings() {
    try {
        return JSON.parse(localStorage.getItem('storyEndings')) || [];
    } catch (error) {
        console.error('Failed to load endings:', error);
        return [];
    }
}

// function for clearing all progress
function clearProgress() {
    localStorage.removeItem('allStoryProgress');
    localStorage.removeItem('storyEndings');
}

// function to clear th specific story progress by story id
function clearStoryProgress(storyId) {
    try {
        let allProgress = JSON.parse(localStorage.getItem('allStoryProgress')) || {};
        if (allProgress[storyId]) {
            delete allProgress[storyId];
            localStorage.setItem('allStoryProgress', JSON.stringify(allProgress));
        }
    } catch (error) {
        console.error('Failed to clear story progress:', error.message);
        console.debug(error);
    }
}