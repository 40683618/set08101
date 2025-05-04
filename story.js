import { story1, story2, story3 } from "./stories.js";
import { saveProgress, loadProgress, saveEnding } from './progress.js';

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('choice-box')

let state = {}

function startGame() {
  const savedProgress = loadProgress(selectedStory);
  if (savedProgress && window.location.hash !== '#restart') {
    state = savedProgress.state;
    showTextNode(savedProgress.nodeId);
  } else {
    state = {};
    showTextNode(1);
    if (window.location.hash === '#restart') {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  }
}


function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })

}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId === -1) {
    saveEnding(selectedStory, option.id);
    localStorage.removeItem(`allStoryProgress`);
    state = {};
    return startGame();
  }

  state = Object.assign({}, state, option.setState);
  saveProgress(selectedStory, nextTextNodeId, state);
  showTextNode(nextTextNodeId);
}



const params = new URLSearchParams(window.location.search);
const choice = params.get("choice");
const selectedStory = choice || "story1"
const stories = {
  story1: story1,
  story2: story2,
  story3: story3,
};

let textNodes = stories[selectedStory];
const pageTitle = document.getElementById('page-title')

document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundAttachment = "fixed";
document.body.style.backgroundPosition = "center center";

if (selectedStory === "story1") {
  pageTitle.innerText = "The White Room";
  document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1530299297082-0846efbd2cdd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
} else if (selectedStory === "story2") {
  pageTitle.innerText = "Forest Trail";
  document.body.style.backgroundImage = "url('https://i.imgur.com/fWXqZ8A.png')";
} else if (selectedStory === "story3") {
  pageTitle.innerText = "The Casino"
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1674168461942-debd1706396c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
}

startGame()
