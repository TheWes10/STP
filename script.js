
//Injection
//<img src="${chrome.runtime.getURL("images/fontAlteration.svg")}">
const container = document.createElement('div');
const shadowRoot = container.attachShadow({ mode: 'open' });

const extensionCSS = chrome.runtime.getURL('styles.css');

// Create a link element to load the CSS file
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.type = 'text/css';
linkElement.href = extensionCSS;

const MainHTML = `
<div id="STP" style="font-family: Arial;">
    <div class="toolbar" id="toolbarMain">
        <button id="openSidebar" title="Open Sidebar">
            <img src="${chrome.runtime.getURL("images/openSidebar.svg")}" draggable = "false">
        </button>
    </div>
    <div id="sidebar">
        <button id="closeSidebar" title="Close Sidebar">
            <img src="${chrome.runtime.getURL("images/closeSidebar.svg")}" draggable="false">
        </button>
            <div class="section-content">
                <button id="readPage">
                    <img id="readPageImg" src="${chrome.runtime.getURL("images/readPageOff.svg")}" draggable="false">
                    <p class="buttonText">Read This Page</p>
                </button>
                <button id="readSpeed">
                    <img id="readSpeedImg" src="${chrome.runtime.getURL("images/readSpeedOff.svg")}" draggable="false">
                    <p class="buttonText">Speed</p>
                </button>
                <button id="t2sHighlight">
                    <img id="t2sHighlightImg" src="${chrome.runtime.getURL("images/t2sHighlightOff.svg")}" draggable="false">
                    <p class="buttonText">Highlight Text</p>
                </button>
            </div>
        <div class="section" id="textConfig">
            <h2>Text Configurations</h2>
            <div class="section-content">
                <!-- Font buttons or options go here -->
            </div>
        </div>
        <div class="section" id="textSpacing">
            <h2>Text Spacing</h2>
            <div class="section-content">
                <!-- Font buttons or options go here -->
            </div>
        </div>
        <div class="section" id="focusRuler">
            <h2>Focus Ruler</h2>
            <div class="section-content">
                <!-- Font buttons or options go here -->
            </div>
        </div>
        <div class="section" id="colorSchemes">
            <h2>Color Schemes</h2>
            <div class="section-content">
                <!-- Font buttons or options go here -->
            </div>
        </div>
    </div>
</div>
`;
shadowRoot.innerHTML = MainHTML; 
shadowRoot.appendChild(linkElement);

// Append the container to the document body
document.body.appendChild(container);
//End of Injection

//Toolbar
const toolbar = shadowRoot.getElementById('toolbarMain');
const openSidebarButton = shadowRoot.getElementById('openSidebar');
const closeSidebarButton = shadowRoot.getElementById('closeSidebar');
const allButtons = shadowRoot.querySelectorAll('.toolbar button');
const sidebar = shadowRoot.getElementById('sidebar');
let isDragging = false;
let offsetX, offsetY;
let clickTimer;

chrome.storage.sync.get(["toolbarLeftStyle", "toolbarTopStyle"], (result) => {
    toolbar.style.left = result.toolbarLeftStyle ? result.toolbarLeftStyle + 'px' : '';
    toolbar.style.top = result.toolbarTopStyle ? result.toolbarTopStyle + 'px' : '';
});

openSidebarButton.addEventListener('click', () => {
    if((Date.now() - clickTimer) < 200){
        sidebar.classList.add('show');
        toolbar.classList.add('hide');
        sidebar.style.top = 0;
        sidebar.style.right = 0;
    }
});
closeSidebarButton.addEventListener('click', () => {
    sidebar.classList.remove('show');
    toolbar.classList.remove('hide');
});

toolbar.addEventListener('mousedown', (e) => {
    clickTimer = Date.now();
    isDragging = true;
    offsetX = e.clientX - toolbar.getBoundingClientRect().left;
    offsetY = e.clientY - toolbar.getBoundingClientRect().top;
    toolbar.style.cursor = 'grabbing';
    document.body.classList.add('disable-text-selection');
});

toolbar.addEventListener('dragover', (event) => {
    event.preventDefault();
    return false;
});

let toolbarLeft;
let toolbarTop;

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;

        const toolbarWidth = toolbar.offsetWidth;
        const toolbarHeight = toolbar.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        toolbarLeft = toolbar.offsetLeft; 
        toolbarTop = toolbar.offsetTop;   

        const potentialNewX = Math.max(0, Math.min(windowWidth - toolbarWidth, newX));
        const potentialNewY = Math.max(0, Math.min(windowHeight - toolbarHeight, newY));
      
        toolbar.style.left = potentialNewX + 'px';
        toolbar.style.top = potentialNewY + 'px';
        
        toolbarLeft = toolbar.getBoundingClientRect().left;
        toolbarTop = toolbar.getBoundingClientRect().top;
    }
});

document.addEventListener('mouseup', () => {	
    toolbar.style.cursor = 'grab';
    isDragging = false
    chrome.storage.sync.set({
        toolbarLeftStyle: toolbarLeft,
        toolbarTopStyle: toolbarTop,
    });

    document.body.classList.remove('disable-text-selection');
});

//Text to Speech Functions
const readPageButton = shadowRoot.getElementById('readPage');
const readPageImg = shadowRoot.getElementById('readPageImg');
const readSpeedButton = shadowRoot.getElementById('readSpeed');
const readSpeedImg = shadowRoot.getElementById('readSpeedImg');
const t2sHighlightButton = shadowRoot.getElementById('t2sHighlight');
const t2sHighlightImg = shadowRoot.getElementById('t2sHighlightImg');

let isReading = false;
let currentSpeedIndex = 1;
let isHighlighting = false;
let speechSynthesisUtterance;

const speedValues = [0.75, 1, 1.5]; // slow, normal, fast
const speedImages = [
    chrome.runtime.getURL("images/readSpeedSlow.svg"),
    chrome.runtime.getURL("images/readSpeedNormal.svg"),
    chrome.runtime.getURL("images/readSpeedFast.svg")
];

readPageButton.addEventListener('click', () => {
    console.log('Read This Page button clicked');
    const currentSrc = readPageImg.src;
    const newSrc = currentSrc.includes("readPageOff.svg") 
        ? chrome.runtime.getURL("images/readPageOn.svg") 
        : chrome.runtime.getURL("images/readPageOff.svg");
    readPageImg.src = newSrc;

    if (!isReading) {
        startReadingPage();
    } else {
        stopReadingPage();
    }
    isReading = !isReading;
});
    
function startReadingPage(textToRead) {
    if (!textToRead) {
        textToRead = document.body.innerText;
    }
    speechSynthesisUtterance = new SpeechSynthesisUtterance(textToRead);
    speechSynthesisUtterance.rate = speedValues[currentSpeedIndex]; // Set the current speech rate
    speechSynthesisUtterance.pitch = 1; // Set default pitch

    speechSynthesisUtterance.onend = () => {
        readPageImg.src = chrome.runtime.getURL("images/readPageOff.svg");
        isReading = false;
    };
    window.speechSynthesis.speak(speechSynthesisUtterance);
}


function stopReadingPage() {
    window.speechSynthesis.cancel();
    readPageImg.src = chrome.runtime.getURL("images/readPageOff.svg");
}

readSpeedButton.addEventListener('click', () => { //FIX SO THAT CHANIGNG SPEED DEOSN"T RESTART READER
    console.log('Read Speed button clicked');
    
    // Cycle through the speed settings
    currentSpeedIndex = (currentSpeedIndex + 1) % speedValues.length;
    readSpeedImg.src = speedImages[currentSpeedIndex];
    
    // Adjust the reading speed
    if (speechSynthesisUtterance) {
        speechSynthesisUtterance.rate = speedValues[currentSpeedIndex];
        console.log('Speech rate changed to:', speechSynthesisUtterance.rate);

        if (isReading) {
            // Restart the speech with the new rate
            const textToRead = speechSynthesisUtterance.text;
            stopReadingPage();
            startReadingPage(textToRead);
        }
    }
});

t2sHighlightButton.addEventListener('click', () => {
    const currentSrc = t2sHighlightImg.src;
    t2sHighlightImg.src = currentSrc.includes("t2sHighlightOff.svg") 
        ? chrome.runtime.getURL("images/t2sHighlightOn.svg") 
        : chrome.runtime.getURL("images/t2sHighlightOff.svg");

    // Add functionality to highlight text for reading here
    if (!isHighlighting) {
        startHighlightingText();
    } else {
        stopHighlightingText();
    }
    isHighlighting = !isHighlighting;
});
