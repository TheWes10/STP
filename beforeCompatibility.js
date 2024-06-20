
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
<div class="STP" id="STP" style="font-family: Arial;">
    <div class="toolbar" id="toolbarMain">
        <button id="openSidebar" title="Open Sidebar">
            <img src="${chrome.runtime.getURL("images/openSidebar.svg")}" draggable = "false">
        </button>
    </div>
    <div id="sidebar">
        <button id="closeSidebar" title="Close Sidebar">
            <img src="${chrome.runtime.getURL("images/closeSidebar.svg")}" draggable="false">
        </button>

        <div class="section" id="Accessibility Profiles">
            <h2>Accessibility Profiles</h2>
            <div class="section-content">
                <button id="colorBlindProfile" class="svg-button-larger">
                    <img id="colorBlindProfileImg" src="${chrome.runtime.getURL("images/ColorblindGray.svg")}" draggable = "false"> 
                </button>
                <button id="visuallyImpairedProfile" class="svg-button-larger">
                    <img id="visuallyImpairedProfileImg" src="${chrome.runtime.getURL("images/DyslexiaGray.svg")}" draggable = "false"> 
                </button>
                <button id="dyslexiaProfile" class="svg-button-larger">
                    <img id="dyslexiaProfileImg" src="${chrome.runtime.getURL("images/VisuallyImpairedGray.svg")}" draggable = "false"> 
                </button>
                <button id="ADHDProfile" class="svg-button-larger">
                    <img id="ADHDProfileImg" src="${chrome.runtime.getURL("images/ADHDGray.svg")}" draggable = "false"> 
                </button>
                <button id="LearningProfile" class="svg-button-larger">
                    <img id="LearningProfileImg" src="${chrome.runtime.getURL("images/CognitiveGray.svg")}" draggable = "false"> 
                </button>
            </div>
        </div>

        <div class="section" id="T2S">
            <h2>Text to Speech</h2>
            <div class="section-content">
                <button id="readPage" class="svg-button-larger">
                    <img id="readPageImg" src="${chrome.runtime.getURL("images/ReadPage.svg")}" draggable = "false"> 
                </button>
                <button id="readSpeed" title="Screen Reader Speed" class="svg-button-larger">
                    <img id="readSpeedImg" src="${chrome.runtime.getURL("images/SpeedNormalGray.svg")}" draggable = "false"> 
                </button>
                <button id="t2sHighlight" class="svg-button-larger">
                    <img id="t2sHighlightImg" src="${chrome.runtime.getURL("images/Highlight Text.svg")}" draggable = "false"> 
                </button>
            </div>
        </div>

        <div class="section" id="textConfig">
            <h2>Text Configurations</h2>
            <h3 class="centered-heading">Vision Impaired and Dyslexic Friendly Fonts</h3>
            <div class="section-content" id="textOptions">
                <button class="font-button" id="arialButton" style="font-family: Arial;">Arial</button>
                <button class="font-button" id="calibriButton" style="font-family: Calibri;">Calibri</button>
                <button class="font-button" id="centuryGothicButton" style="font-family: Century Gothic;">Century Gothic</button>
                <button class="font-button" id="comicSansButton" style="font-family: 'Comic Sans MS';">Comic Sans</button>
                <button class="font-button" id="courierButton" style="font-family: Courier;">Courier</button>
                <button class="font-button" id="helveticaButton" style="font-family: Helvetica;">Helvetica</button>
                <button class="font-button" id="openSansButton" style="font-family: 'Open Sans';">Open Sans</button>
                <button class="font-button" id="openDyslexia"  sytle='OpenDyslexoc';>OpenDyslexic</button>
                <button class="font-button" id="tahomaButton" style="font-family: Tahoma;">Tahoma</button>
                <button class="font-button" id="verdanaButton" style="font-family: Verdana;">Verdana</button>
            </div>
            <div class="section-content">
                <button id="textSize" class="svg-button-larger">
                    <img src="${chrome.runtime.getURL("images/TextSizeGray.svg")}" draggable="false"> 
                </button>
                <button id="emboldenText" class="svg-button-larger">
                    <img src="${chrome.runtime.getURL("images/EmboldenTextGray.svg")}" draggable="false"> 
                </button>
                <button id="italicizeText" class="svg-button-larger">
                    <img src="${chrome.runtime.getURL("images/ItalicizeTextGray.svg")}" draggable="false"> 
                </button>
                <button id="textAlignment" class="svg-button-larger">
                    <img src="${chrome.runtime.getURL("images/DefaultAlignGray.svg")}" draggable="false"> 
                </button>
            </div>
            <h3 class="centered-heading">Choose Text Color</h3>
            <div class="section-content">
                <div class="color-buttons">
                    <button id="textBlack" class="color-button" style="background-color: black;" onclick="changeTextColor('black')"></button>
                    <button id="textWhite" class="color-button" style="background-color: white; border: 1px solid #ccc;" onclick="changeTextColor('white')"></button>
                    <button id="textRed" class="color-button" style="background-color: red;" onclick="changeTextColor('red')"></button>
                    <button id="textOrange" class="color-button" style="background-color: orange;" onclick="changeTextColor('orange')"></button>
                    <button id="textYellow" class="color-button" style="background-color: yellow;" onclick="changeTextColor('yellow')"></button>
                    <button id="textGreen" class="color-button" style="background-color: green;" onclick="changeTextColor('green')"></button>
                    <button id="textBlue" class="color-button" style="background-color: blue;" onclick="changeTextColor('blue')"></button>
                    <button id="textPurple" class="color-button" style="background-color: purple;" onclick="changeTextColor('purple')"></button>
                    <button id="textColorDefault" class="color-button" style="background-color: gray;" onclick="changeTextColor('purple')"></button>
                </div>
            </div>
        </div>

        <div class="section" id="textSpacing">
            <h2>Text Spacing</h2>
            <div class="section-content">
                <button id="spaceBetweenLines" class="svg-button-larger">
                    <img src="${chrome.runtime.getURL("images/BetweenLinesGray.svg")}" draggable = "false"> 
                </button>
                <button id="spaceBetweenWords" class="svg-button-larger">
                    <img src="${chrome.runtime.getURL("images/BetweenWordsGray.svg")}" draggable = "false"> 
                </button>
                <button id="spaceBetweenLetters" class="svg-button-larger">
                    <img src="${chrome.runtime.getURL("images/BetweenLettersGray.svg")}" draggable = "false"> 
                </button>
            </div>
        </div>

        <div class="section" id="screenShader">
            <h2>Screen Shader</h2>
            <div class="section-content-alpha">
                <div class="left-content">
                    <h3 class="centered-heading">Adjust Tint Color</h3>
                    <div class="color-buttons">
                        <button class="color-button-alpha" style="background-color: black;" data-color="0, 0, 0"></button>
                        <button class="color-button-alpha" style="background-color: white; border: 1px solid #ccc;" data-color="255, 255, 255"></button>
                        <button class="color-button-alpha" style="background-color: red;" data-color="255, 0, 0"></button>
                        <button class="color-button-alpha" style="background-color: orange;" data-color="255, 165, 0"></button>
                        <button class="color-button-alpha" style="background-color: yellow;" data-color="255, 255, 0"></button>
                        <button class="color-button-alpha" style="background-color: green;" data-color="0, 128, 0"></button>
                        <button class="color-button-alpha" style="background-color: blue;" data-color="0, 0, 255"></button>
                        <button class="color-button-alpha" style="background-color: purple;" data-color="128, 0, 128"></button>
                        <button class="color-button-alpha" style="background-color: gray;" data-color="128,128,128"></button>
                    </div>
                </div>
                <div class="right-content">
                    <div class="slider-container">
                        <div class = "image-slider-pair">
                            <img src="${chrome.runtime.getURL("images/Brightness.svg")}" draggable="false" class="svg-icon">
                            <input type="range" id="brightnessSliderAlpha" min="0" max="100" value="50">
                        </div>
                    </div>
                </div>
            </div>
        </div>


    <div class="section" id="focusRulerMain">
        <h2>Focus Ruler</h2>
        <div class="section-content">
            <button id="toggleFocusRuler">
                <img src="${chrome.runtime.getURL("images/MaskTypeGray.svg")}" draggable="false" title="pain in my ass">
            </button>
            <div id="focusRuler"></div>
            <div class="slider-container">
                <img src="${chrome.runtime.getURL("images/LineHeightGray.svg")}" draggable="false">
                <input type="range" id="lineHeightSlider" min="0" max="200" value="50">
            </div>
            <div class="slider-container">
                <img src="${chrome.runtime.getURL("images/Brightness.svg")}" draggable="false">
                <input type="range" id="brightnessSliderBeta" min="0" max="100" value="50">
            </div>
        </div>
        <h3 class="centered-heading">Choose Mask Color</h3>
        <div class="section-content">
            <div class="color-buttons">
                <button class="color-button" style="background-color: black;" data-color="0, 0, 0"></button>
                <button class="color-button" style="background-color: white; border: 1px solid #ccc;" data-color="255, 255, 255"></button>
                <button class="color-button" style="background-color: red;" data-color="255, 0, 0"></button>
                <button class="color-button" style="background-color: orange;" data-color="255, 165, 0"></button>
                <button class="color-button" style="background-color: yellow;" data-color="255, 255, 0"></button>
                <button class="color-button" style="background-color: green;" data-color="0, 128, 0"></button>
                <button class="color-button" style="background-color: blue;" data-color="0, 0, 255"></button>
                <button class="color-button" style="background-color: purple;" data-color="128, 0, 128"></button>
            </div>
        </div>
        <div id="focusRulerContainer"></div>
    </div>

    <div class="section" id="colorSchemes">
        <h2>Color Schemes</h2>
        <div class="section-content">
            <button id="changeContrast" class="svg-button-larger">
                <img src="${chrome.runtime.getURL("images/DefaultContrast.svg")}" draggable = "false"> 
            </button>
            <button id="changeSaturation" class="svg-button-larger"> 
                <img src="${chrome.runtime.getURL("images/DefaultSaturation.svg")}" draggable = "false"> 
            </button>
        </div>
    </div>

    <div class="section" id="misc">
        <h2>Miscellaneous</h2>
        <div class="section-content">
            <button id="highlightLinks" class="svg-button-larger">
                <img src="${chrome.runtime.getURL("")}" draggable = "false"> 
            </button>
            <button id="hideImages" class="svg-button-larger"> 
                <img src="${chrome.runtime.getURL("")}" draggable = "false"> 
            </button>
            <button id="cursorSize" class="svg-button-larger">
                <img src="${chrome.runtime.getURL("")}" draggable = "false"> 
            </button>
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

//Accessibility Profiles
function defaultAll(){
    currentTypeface = "arial";
    currentSaturationIndex = 3;
    currentContrastIndex = 3;
    currentSizeIndex = 0;
    focusRulerState = 2;

    arialButton.click();
    textSizeButton.click();
    toggleSaturation();
    toggleContrast();
    toggleFocusRulerButton.click();
    
    currentProfile = "none";
}

const colorBlindProfile = shadowRoot.getElementById('colorBlindProfile');
const colorBlindProfileImg = shadowRoot.getElementById('colorBlindProfileImg');

const visuallyImpairedProfile = shadowRoot.getElementById('visuallyImpairedProfile');
const visuallyImpairedProfileImg = shadowRoot.getElementById('visuallyImpairedProfileImg');

const dyslexiaProfile = shadowRoot.getElementById('dyslexiaProfile');
const dyslexiaProfileImg = shadowRoot.getElementById('dyslexiaProfileImg');

const ADHDProfile = shadowRoot.getElementById('ADHDProfile');
const ADHDProfileImg = shadowRoot.getElementById('ADHDProfileImg');

const LearningProfile = shadowRoot.getElementById('LearningProfile');
const LearningProfileImg = shadowRoot.getElementById('LearningProfileImg');

let currentProfile = "none";

colorBlindProfile.addEventListener('click', () => {
    if(currentProfile != "colorBlind"){
        defaultAll();
        currentProfile = "colorBlind";
        currentSaturationIndex = 1;
        currentContrastIndex = 1;
        toggleSaturation();
        toggleContrast();
    }
    else{
        defaultAll();
    }
});

visuallyImpairedProfile.addEventListener('click', () => {
    if(currentProfile != "visImpaired"){
        defaultAll();
        currentTypeface = "original";
        currentSaturationIndex = 1;
        currentSizeIndex = 1;

        arialButton.click();
        textSizeButton.click();
        toggleSaturation();
        currentProfile = "visImpaired";
    }
    else{
        defaultAll();
    }
});

dyslexiaProfile.addEventListener('click', () => {
    if(currentProfile != "dyslexiaProfile"){
        defaultAll();
        openDyslexiaButton.click();
        currentProfile = "dyslexiaProfile";
    }
    else{
        defaultAll();
    }
});

ADHDProfile.addEventListener('click', () => {
    if(currentProfile != "ADHDProfile"){
        defaultAll();

        currentSaturationIndex = 1;
        focusRulerState = 0;

        toggleSaturation();
        toggleFocusRulerButton.click();
        
        currentProfile = "ADHDProfile";
    }
    else{
        defaultAll();
    }
});

LearningProfile.addEventListener('click', () => {
    if(currentProfile != "LaerningProfile"){
        defaultAll();

        currentContrastIndex = 1;
        currentSizeIndex = 1;

        toggleContrast();
        textSizeButton.click();
        
        currentProfile = "LaerningProfile";
    }
    else{
        defaultAll();
    }
});


//Text to Speech Functions --------------------------------------------------------------------------
const readPageButton = shadowRoot.getElementById('readPage');
const readPageImg = shadowRoot.getElementById('readPageImg');


const readSpeedButton = shadowRoot.getElementById('readSpeed');
const readSpeedImg = shadowRoot.getElementById('readSpeedImg');

const t2sHighlightButton = shadowRoot.getElementById('t2sHighlight');
const t2sHighlightImg = shadowRoot.getElementById('t2sHighlightImg');

let isReading = false;
let isReadingHighlighted = false;
let currentSpeedIndex = 1;
let speechSynthesisUtterance;
const speedValues = [0.75, 1, 1.5]; // slow, normal, fast
const speedImages = [
    chrome.runtime.getURL("images/SpeedSlow.svg"),
    chrome.runtime.getURL("images/SpeedNormalGray.svg"),
    chrome.runtime.getURL("images/SpeedFast.svg")
];

readPageButton.addEventListener('click', () => {

    if (!isReading) {
        startReadingPage();
    } else {
        stopReadingPage();
    }
    isReading = !isReading;
});

function startReadingPage() {
    window.speechSynthesis.cancel();
    isReadingHighlighted = false;
    const textToRead = document.body.innerText;

    speechSynthesisUtterance = new SpeechSynthesisUtterance(textToRead);
    
    speechSynthesisUtterance.rate = speedValues[currentSpeedIndex]; // Set the current speech rate
    speechSynthesisUtterance.pitch = 1; // Set default pitch

    window.speechSynthesis.speak(speechSynthesisUtterance);
}

function stopReadingPage() {
    window.speechSynthesis.cancel();
}

readSpeedButton.addEventListener('click', () => {
    // Cycle through the speed settings
    currentSpeedIndex = (currentSpeedIndex + 1) % speedValues.length;

    readSpeedImg.src = speedImages[currentSpeedIndex];
    
    // Adjust the reading speed
    if (speechSynthesisUtterance) {
        speechSynthesisUtterance.rate = speedValues[currentSpeedIndex];
        console.log('Speech rate changed to:', speechSynthesisUtterance.rate);

        if (isReading) {
            // Restart the speech with the new rate
            stopReadingPage();
            startReadingPage();
        }
    }
});

t2sHighlightButton.addEventListener('click', () => {
    isReadingHighlighted = !isReadingHighlighted;
    if (isReadingHighlighted) {
        startReadingHighlightedText();
    } else {
        stopReadingPage();
    }
});

function startReadingHighlightedText() {
    isReading = false;
    window.speechSynthesis.cancel();
    const highlightedText = getHighlightedText();
    if (highlightedText) {
        console.log('Reading highlighted text:', highlightedText);
        speechSynthesisUtterance = new SpeechSynthesisUtterance(highlightedText);
        speechSynthesisUtterance.rate = speedValues[currentSpeedIndex]; // Set the current speech rate
        speechSynthesisUtterance.pitch = 1; // Set default pitch

        speechSynthesisUtterance.onend = () => {
            console.log('Speech synthesis ended for highlighted text');
            isReading = false;
        };

        console.log('About to speak highlighted text:', speechSynthesisUtterance);
        window.speechSynthesis.speak(speechSynthesisUtterance);
    }
}

function stopReadingHighlightedText() {
    window.speechSynthesis.cancel();
}

function getHighlightedText() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        return range.toString();
    }
    return null;
}

//Typeface Changers
const arialButton = shadowRoot.getElementById('arialButton');
const calibriButton = shadowRoot.getElementById('calibriButton');
const gothicButton = shadowRoot.getElementById('centuryGothicButton');
const comicButton = shadowRoot.getElementById('comicSansButton');
const courierButton = shadowRoot.getElementById('courierButton');
const helveticaButton = shadowRoot.getElementById('helveticaButton');
const openSansButton = shadowRoot.getElementById('openSansButton');
const openDyslexiaButton = shadowRoot.getElementById('openDyslexia');
const tahomaButton = shadowRoot.getElementById('tahomaButton');
const verdanaButton = shadowRoot.getElementById('verdanaButton');

let currentTypeface = "original";
let currentButton = null;


let orignalTypeface;
function storeOriginalTypeface() {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
    textElements.forEach(element => {
        const typeface = window.getComputedStyle(element).fontFamily;
        element.dataset.originalTypeface = typeface;
    });
}
storeOriginalTypeface();

//Doesn't work for some fonts for some reason i.e. comic sans
function typefaceHighlightConversion(selectedFont, selection) {
    const range = selection.getRangeAt(0);
    const selectedContent = range.extractContents();
    const fragment = document.createDocumentFragment();

    selectedContent.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            const words = node.textContent.split(/(\s+)/); // Split on spaces while keeping the spaces
            words.forEach(word => {
                if (word.trim() !== "") {
                    const span = document.createElement('span');
                    span.style.fontFamily = selectedFont;
                    span.textContent = word;
                    fragment.appendChild(span);
                } else {
                    fragment.appendChild(document.createTextNode(word)); // Add the space back
                }
            });
        } else if (node.nodeType === Node.ELEMENT_NODE && node.style.fontFamily === selectedFont) {
            const textNodes = node.childNodes;
            textNodes.forEach(textNode => {
                if (textNode.nodeType === Node.TEXT_NODE) {
                    fragment.appendChild(document.createTextNode(textNode.textContent));
                } else {
                    fragment.appendChild(textNode.cloneNode(true));
                }
            });
        } else {
            const clonedNode = node.cloneNode(true);
            fragment.appendChild(clonedNode);
        }
    });

    range.insertNode(fragment);
    selection.removeAllRanges();
}

function toggleButtonBackground(button) {
    if (currentFontButton === button) {
        button.style.backgroundColor = ''; // Remove background color if already clicked
        currentFontButton = null;
    } else {
        if (currentFontButton) {
            currentFontButton.style.backgroundColor = ''; // Remove background color from previous button
        }
        button.style.backgroundColor = 'rgba(0, 0, 255, 0.5)'; // Semi-transparent blue background
        currentFontButton = button;
    }
}

let isClicked = false;
let currentFontButton = null;
arialButton.addEventListener('click', () => {
    const selectedFont = "Arial";
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        typefaceHighlightConversion(selectedFont, selection);
    } else {
        if(currentTypeface != "arial"){
            currentTypeface = "arial"
            document.body.style.fontFamily = selectedFont;
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                element.style.fontFamily = selectedFont;
            });
            toggleButtonBackground(arialButton);
        }
        else{
            currentTypeface = "original"
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if(element.hasAttribute('data-original-typeface')) {
                    const originalTypeface = element.dataset.originalTypeface;
                    element.style.fontFamily = originalTypeface;
                }
                else {
                    const originalTypeface = element.getAttribute('data-original-typeface');
                    element.style.fontFamily = originalTypeface;
                }
            });
            toggleButtonBackground(arialButton);
        }
    }
});
/////////////
calibriButton.addEventListener('click', () => {
    const selectedFont = "Calibri";
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        typefaceHighlightConversion(selectedFont, selection);
    } else {
        if(currentTypeface != "calibri"){
            currentTypeface = "calibri"
            document.body.style.fontFamily = selectedFont;
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                element.style.fontFamily = selectedFont;
            });
            toggleButtonBackground(calibriButton);
        }
        else{
            currentTypeface = "original"
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if(element.hasAttribute('data-original-typeface')) {
                    const originalTypeface = element.dataset.originalTypeface;
                    element.style.fontFamily = originalTypeface;
                }
                else {
                    const originalTypeface = element.getAttribute('data-original-typeface');
                    element.style.fontFamily = originalTypeface;
                }
            });
            toggleButtonBackground(calibriButton);
        }
    }
});
////////////
gothicButton.addEventListener('click', () => {
    const selectedFont = "Century Gothic";
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        typefaceHighlightConversion(selectedFont, selection);
    } else {
        if(currentTypeface != "gothic"){
            currentTypeface = "gothic"
            document.body.style.fontFamily = selectedFont;
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                element.style.fontFamily = selectedFont;
            });
            toggleButtonBackground(gothicButton);
        }
        else{
            currentTypeface = "original"
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if(element.hasAttribute('data-original-typeface')) {
                    const originalTypeface = element.dataset.originalTypeface;
                    element.style.fontFamily = originalTypeface;
                }
                else {
                    const originalTypeface = element.getAttribute('data-original-typeface');
                    element.style.fontFamily = originalTypeface;
                }
            });
            toggleButtonBackground(gothicButton);
        }
    }
});
///////////////
comicButton.addEventListener('click', () => {
    const selectedFont = "Comic Sans MS";
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        typefaceHighlightConversion(selectedFont, selection);
    } else {
        if(currentTypeface != "comic"){
            currentTypeface = "comic"
            document.body.style.fontFamily = selectedFont;
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                element.style.fontFamily = selectedFont;
            });
            toggleButtonBackground(comicButton);
        }
        else{
            currentTypeface = "original"
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if(element.hasAttribute('data-original-typeface')) {
                    const originalTypeface = element.dataset.originalTypeface;
                    element.style.fontFamily = originalTypeface;
                }
                else {
                    const originalTypeface = element.getAttribute('data-original-typeface');
                    element.style.fontFamily = originalTypeface;
                }
            });
            toggleButtonBackground(comicButton);
        }
    }
});
////////
courierButton.addEventListener('click', () => {
    const selectedFont = "Courier";
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        typefaceHighlightConversion(selectedFont, selection);
    } else {
        if(currentTypeface != "courier"){
            currentTypeface = "courier"
            document.body.style.fontFamily = selectedFont;
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                element.style.fontFamily = selectedFont;
            });
            toggleButtonBackground(courierButton);
        }
        else{
            currentTypeface = "original"
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if(element.hasAttribute('data-original-typeface')) {
                    const originalTypeface = element.dataset.originalTypeface;
                    element.style.fontFamily = originalTypeface;
                }
                else {
                    const originalTypeface = element.getAttribute('data-original-typeface');
                    element.style.fontFamily = originalTypeface;
                }
            });
            toggleButtonBackground(courierButton);
        }
    }
});
///////////////
helveticaButton.addEventListener('click', () => {
    const selectedFont = "Helvetica";
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        typefaceHighlightConversion(selectedFont, selection);
    } else {
        if(currentTypeface != "helvetica"){
            currentTypeface = "helvetica"
            document.body.style.fontFamily = selectedFont;
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                element.style.fontFamily = selectedFont;
            });
            toggleButtonBackground(helveticaButton);
        }
        else{
            currentTypeface = "original"
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if(element.hasAttribute('data-original-typeface')) {
                    const originalTypeface = element.dataset.originalTypeface;
                    element.style.fontFamily = originalTypeface;
                }
                else {
                    const originalTypeface = element.getAttribute('data-original-typeface');
                    element.style.fontFamily = originalTypeface;
                }
            });
            toggleButtonBackground(helveticaButton);
        }
    }
});
/////////////////////
openSansButton.addEventListener('click', () => {
    const selectedFont = "Open Sans";
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        typefaceHighlightConversion(selectedFont, selection);
    } else {
        if(currentTypeface != "open sans"){
            currentTypeface = "open sans"
            document.body.style.fontFamily = selectedFont;
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                element.style.fontFamily = selectedFont;
            });
            toggleButtonBackground(openSansButton);
        }
        else{
            currentTypeface = "original"
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if(element.hasAttribute('data-original-typeface')) {
                    const originalTypeface = element.dataset.originalTypeface;
                    element.style.fontFamily = originalTypeface;
                }
                else {
                    const originalTypeface = element.getAttribute('data-original-typeface');
                    element.style.fontFamily = originalTypeface;
                }
            });
            toggleButtonBackground(openSansButton);
        }
    }
});

/////////////////
openDyslexiaButton.addEventListener('click', () => {
    const selectedFont = "OpenDyslexic";
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        typefaceHighlightConversion(selectedFont, selection);
    } else {
        if(currentTypeface != "dyslexia"){
            currentTypeface = "dyslexia"
            const selectedFont = "OpenDyslexic";
            document.body.style.fontFamily = selectedFont;
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                element.style.fontFamily = selectedFont;
            });
            toggleButtonBackground(openDyslexiaButton);
        }
        else{
            currentTypeface = "original"
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if(element.hasAttribute('data-original-typeface')) {
                    const originalTypeface = element.dataset.originalTypeface;
                    element.style.fontFamily = originalTypeface;
                }
                else {
                    const originalTypeface = element.getAttribute('data-original-typeface');
                    element.style.fontFamily = originalTypeface;
                }
            });
            toggleButtonBackground(openDyslexiaButton);
        }
    }
});
/////////////
tahomaButton.addEventListener('click', () => {
    const selectedFont = "Tahoma";
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        typefaceHighlightConversion(selectedFont, selection);
    } else {
        if(currentTypeface != "tahoma"){
            currentTypeface = "tahoma"
            document.body.style.fontFamily = selectedFont;
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                element.style.fontFamily = selectedFont;
            });
            toggleButtonBackground(tahomaButton);
        }
        else{
            currentTypeface = "original"
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if(element.hasAttribute('data-original-typeface')) {
                    const originalTypeface = element.dataset.originalTypeface;
                    element.style.fontFamily = originalTypeface;
                }
                else {
                    const originalTypeface = element.getAttribute('data-original-typeface');
                    element.style.fontFamily = originalTypeface;
                }
            });
            toggleButtonBackground(tahomaButton);
        }
        
    }
});
//////////////////////////

verdanaButton.addEventListener('click', () => {
    const selectedFont = "Verdana";
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        typefaceHighlightConversion(selectedFont, selection);
    } else {
        if(currentTypeface != "verdana"){
            currentTypeface = "verdana"
            const selectedFont = "Verdana";
            document.body.style.fontFamily = selectedFont;
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                element.style.fontFamily = selectedFont;
            });
            toggleButtonBackground(verdanaButton);
        }
        else{
            currentTypeface = "original"
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if(element.hasAttribute('data-original-typeface')) {
                    const originalTypeface = element.dataset.originalTypeface;
                    element.style.fontFamily = originalTypeface;
                }
                else {
                    const originalTypeface = element.getAttribute('data-original-typeface');
                    element.style.fontFamily = originalTypeface;
                }
            });
            toggleButtonBackground(verdanaButton);
        }
    }
});

function updateButtonImageMisc(button, imageName, isOriginal) {
    if(imageName == "DefaultAlign"){
        isOriginal = true;
    }
    if (isOriginal) {
        button.querySelector('img').src = `${chrome.runtime.getURL("images/" + imageName + "Gray.svg")}`;
    } else {
        button.querySelector('img').src = `${chrome.runtime.getURL("images/" + imageName + "Blue.svg")}`;
    }
}

// Function to update the button image based on the current size index
function updateButtonImageText(button, imageName, currentSizeIndex) {
    let imageSuffix = "Gray";
    if (currentSizeIndex === 0) {
        imageSuffix = "BlueSmall";
    } else if (currentSizeIndex === 2) {
        imageSuffix = "BlueLarge";
    } else if (currentSizeIndex === 1) {
        imageSuffix = "Gray";
    }
    button.querySelector('img').src = `${chrome.runtime.getURL("images/" + imageName + imageSuffix + ".svg")}`;
}

// Text Styling
const textSizeButton = shadowRoot.getElementById('textSize');
const boldButton = shadowRoot.getElementById('emboldenText');
const italicsButton = shadowRoot.getElementById('italicizeText');
const alignmentButton = shadowRoot.getElementById('textAlignment');

const sizeValues = [0.75, 1, 1.5];
let currentSizeIndex = 1;

const alignments = ['default', 'left', 'center', 'right'];
let currentAlignmentIndex = 0;

function storeOriginalFontSizes() {
    const textElements = document.querySelectorAll('body > *:not(div.STP) p, body > *:not(div.STP) h1, body > *:not(div.STP) h2, body > *:not(div.STP) h3, body > *:not(div.STP) h4, body > *:not(div.STP) h5, body > *:not(div.STP) h6, body > *:not(div.STP) span, body > *:not(div.STP) a, body > *:not(div.STP) li, body > *:not(div.STP) td, body > *:not(div.STP) th, body > *:not(div.STP) label, body > *:not(div.STP) div');

    textElements.forEach(element => {
        const fontSize = parseFloat(window.getComputedStyle(element).fontSize);
        element.dataset.originalFontSize = fontSize;
    });
}
storeOriginalFontSizes();

///////////////////////////////
textSizeButton.addEventListener('click', () => {
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        const range = selection.getRangeAt(0);
        const selectedContent = range.extractContents();
        const fragment = document.createDocumentFragment();

        selectedContent.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                const words = node.textContent.split(/(\s+)/); // Split on spaces while keeping the spaces
                words.forEach(word => {
                    if (word.trim() !== "") {
                        const span = document.createElement('span');
                        span.dataset.currentSizeIndex = (currentSizeIndex + 1) % sizeValues.length;
                        span.textContent = word;

                        // Get the parent element's original font size
                        const parentFontSize = parseFloat(window.getComputedStyle(range.commonAncestorContainer.parentElement).fontSize);
                        span.style.fontSize = `${parentFontSize * sizeValues[span.dataset.currentSizeIndex]}px`; // Scale relative to parent font size
                        fragment.appendChild(span);
                    } else {
                        fragment.appendChild(document.createTextNode(word)); // Add the space back
                    }
                });
            } else if (node.nodeType === Node.ELEMENT_NODE && node.dataset.currentSizeIndex !== undefined) {
                // If it's already wrapped and has a size index, update the span's size
                const span = node.cloneNode(true);
                span.dataset.currentSizeIndex = (parseInt(node.dataset.currentSizeIndex) + 1) % sizeValues.length;
                const parentFontSize = parseFloat(window.getComputedStyle(range.commonAncestorContainer.parentElement).fontSize);
                span.style.fontSize = `${parentFontSize * sizeValues[span.dataset.currentSizeIndex]}px`;
                fragment.appendChild(span);
            } else {
                // Clone other types of nodes
                fragment.appendChild(node.cloneNode(true));
            }
        });

        // Insert the modified fragment back into the range
        range.insertNode(fragment);
        selection.removeAllRanges();
    } else {
        // Toggle through size values for all text elements
        currentSizeIndex = (currentSizeIndex + 1) % sizeValues.length;
        const scaleFactor = sizeValues[currentSizeIndex];
        const textElements = document.querySelectorAll('body > *:not(div.STP) p, body > *:not(div.STP) h1, body > *:not(div.STP) h2, body > *:not(div.STP) h3, body > *:not(div.STP) h4, body > *:not(div.STP) h5, body > *:not(div.STP) h6, body > *:not(div.STP) span, body > *:not(div.STP) a, body > *:not(div.STP) li, body > *:not(div.STP) td, body > *:not(div.STP) th, body > *:not(div.STP) label, body > *:not(div.STP) div');
        
        textElements.forEach(element => {
            const originalFontSize = parseFloat(element.dataset.originalFontSize);
            const newSize = originalFontSize * scaleFactor;
            element.style.fontSize = `${newSize}px`;
        });
        updateButtonImageText(textSizeButton, "TextSize", currentSizeIndex);
    }
});
//////////////////////////////


function storeOriginalStyles() {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');

    textElements.forEach(element => {
        const computedStyle = window.getComputedStyle(element);
        element.dataset.originalFontWeight = computedStyle.fontWeight;
        element.dataset.originalFontStyle = computedStyle.fontStyle;
    });
}
storeOriginalStyles();

function boldHighlightConversion(selection) {
    const range = selection.getRangeAt(0);
    const selectedContent = range.extractContents();
    const fragment = document.createDocumentFragment();

    selectedContent.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            const words = node.textContent.split(/(\s+)/); // Split on spaces while keeping the spaces
            words.forEach(word => {
                if (word.trim() !== "") {
                    const span = document.createElement('span');
                    span.style.fontWeight = 'bold';
                    span.textContent = word;
                    fragment.appendChild(span);
                } else {
                    fragment.appendChild(document.createTextNode(word)); // Add the space back
                }
            });
        } else if (node.nodeType === Node.ELEMENT_NODE && node.style.fontWeight === 'bold') {
            const textNodes = node.childNodes;
            textNodes.forEach(textNode => {
                if (textNode.nodeType === Node.TEXT_NODE) {
                    fragment.appendChild(document.createTextNode(textNode.textContent));
                } else {
                    fragment.appendChild(textNode.cloneNode(true));
                }
            });
        } else {
            const clonedNode = node.cloneNode(true);
            clonedNode.style.fontWeight = 'bold';
            fragment.appendChild(clonedNode);
        }
    });

    range.insertNode(fragment);
    selection.removeAllRanges();
}


boldButton.addEventListener('click', () => {
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        boldHighlightConversion(selection);
    } else {
        const textElements = document.querySelectorAll('body > *:not(div.STP) p, body > *:not(div.STP) h1, body > *:not(div.STP) h2, body > *:not(div.STP) h3, body > *:not(div.STP) h4, body > *:not(div.STP) h5, body > *:not(div.STP) h6, body > *:not(div.STP) span, body > *:not(div.STP) a, body > *:not(div.STP) li, body > *:not(div.STP) td, body > *:not(div.STP) th, body > *:not(div.STP) label, body > *:not(div.STP) div');
        
        textElements.forEach(element => {
            if (element.style.fontWeight === 'bold') {
                element.style.fontWeight = element.dataset.originalFontWeight;
                isBold = true;
                updateButtonImageMisc(boldButton, "EmboldenText", isBold);
            } else {
                element.style.fontWeight = 'bold';
                isBold = false;
                updateButtonImageMisc(boldButton, "EmboldenText", isBold);
            }
        });
    }
});

function italicsHighlightConversion(selection) {
    const range = selection.getRangeAt(0);
    const selectedContent = range.extractContents();
    const fragment = document.createDocumentFragment();

    selectedContent.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            const words = node.textContent.split(/(\s+)/); // Split on spaces while keeping the spaces
            words.forEach(word => {
                if (word.trim() !== "") {
                    const span = document.createElement('span');
                    span.style.fontStyle = 'italic';
                    span.textContent = word;
                    fragment.appendChild(span);
                } else {
                    fragment.appendChild(document.createTextNode(word)); // Add the space back
                }
            });
        } else if (node.nodeType === Node.ELEMENT_NODE && node.style.fontStyle === 'italic') {
            const textNodes = node.childNodes;
            textNodes.forEach(textNode => {
                if (textNode.nodeType === Node.TEXT_NODE) {
                    fragment.appendChild(document.createTextNode(textNode.textContent));
                } else {
                    fragment.appendChild(textNode.cloneNode(true));
                }
            });
        } else {
            const clonedNode = node.cloneNode(true);
            clonedNode.style.fontStyle = 'italic';
            fragment.appendChild(clonedNode);
        }
    });

    range.insertNode(fragment);
    selection.removeAllRanges();
}

italicsButton.addEventListener('click', () => {
    let isItalic = false;
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        italicsHighlightConversion(selection);
    } else {
        const textElements = document.querySelectorAll('body > *:not(div.STP) p, body > *:not(div.STP) h1, body > *:not(div.STP) h2, body > *:not(div.STP) h3, body > *:not(div.STP) h4, body > *:not(div.STP) h5, body > *:not(div.STP) h6, body > *:not(div.STP) span, body > *:not(div.STP) a, body > *:not(div.STP) li, body > *:not(div.STP) td, body > *:not(div.STP) th, body > *:not(div.STP) label, body > *:not(div.STP) div');
        
        textElements.forEach(element => {
            if (element.style.fontStyle === 'italic') {
                if (element.dataset.originalFontStyle) {
                    element.style.fontStyle = element.dataset.originalFontStyle;
                    element.removeAttribute('data-original-fontStyle');
                    isItalic = true;
                    updateButtonImageMisc(italicsButton, "ItalicizeText", isItalic);
                } else {
                    element.style.fontStyle = 'normal';
                }
            } else {
                if (!element.dataset.originalFontStyle) {
                    element.dataset.originalFontStyle = window.getComputedStyle(element).fontStyle;
                }
                element.style.fontStyle = 'italic';
                isItalic = false;
                updateButtonImageMisc(italicsButton, "ItalicizeText", isItalic);
            }
        });
    }
});

function storeOriginalTextAlignment() {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
    
    textElements.forEach(element => {
        const computedStyle = window.getComputedStyle(element);
        element.dataset.originalTextAlign = computedStyle.textAlign;
    });
}
storeOriginalTextAlignment();

alignmentButton.addEventListener('click', () => {
    currentAlignmentIndex = (currentAlignmentIndex + 1) % alignments.length;

    const newAlignment = alignments[currentAlignmentIndex];
    const textElements = document.querySelectorAll('body > *:not(div.STP) p, body > *:not(div.STP) h1, body > *:not(div.STP) h2, body > *:not(div.STP) h3, body > *:not(div.STP) h4, body > *:not(div.STP) h5, body > *:not(div.STP) h6, body > *:not(div.STP) span, body > *:not(div.STP) a, body > *:not(div.STP) li, body > *:not(div.STP) td, body > *:not(div.STP) th, body > *:not(div.STP) label, body > *:not(div.STP) div');
    
    textElements.forEach(element => {
        if (newAlignment === 'default') {
            element.style.textAlign = element.dataset.originalTextAlign;
        } else {
            element.style.textAlign = newAlignment;
        }
    });
        updateButtonImageMisc(alignmentButton, "Align", false);
        const alignmentImages = ["DefaultAlign", "AlignLeft", "AlignCenter", "AlignRight"];
        alignmentImages.forEach((imageName, index) => {
            if (index === currentAlignmentIndex) {
                updateButtonImageMisc(alignmentButton, imageName, false);
            }
    });
});

const blackTextButton = shadowRoot.getElementById('textBlack');
const whiteTextButton = shadowRoot.getElementById('textWhite');
const redTextButton = shadowRoot.getElementById('textRed');
const orangeTextButton = shadowRoot.getElementById('textOrange');
const yellowTextButton = shadowRoot.getElementById('textYellow');
const greenTextButton = shadowRoot.getElementById('textGreen');
const blueTextButton = shadowRoot.getElementById('textBlue');
const purpleTextButton = shadowRoot.getElementById('textPurple');
const defaultTextColorButton = shadowRoot.getElementById('textColorDefault');

currentColor = "original";

let originalFontColor;
function storeOriginalFontColor() {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');

    textElements.forEach(element => {
        if (!element.closest('#FocusUp')) {
            const fontColor = window.getComputedStyle(element).color;
            element.dataset.originalFontColor = fontColor;//check contents of originalFontColor
        }
    });
}
storeOriginalFontColor();

function colorHighlightConversion(selectedColor, selection) {
    const range = selection.getRangeAt(0);
    const selectedContent = range.extractContents();
    const fragment = document.createDocumentFragment();

    selectedContent.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            const words = node.textContent.split(/(\s+)/); // Split on spaces while keeping the spaces
            words.forEach(word => {
                if (word.trim() !== "") {
                    const span = document.createElement('span');
                    span.style.color = selectedColor;
                    span.textContent = word;
                    fragment.appendChild(span);
                } else {
                    fragment.appendChild(document.createTextNode(word)); // Add the space back
                }
            });
        } else if (node.nodeType === Node.ELEMENT_NODE && node.style.color === selectedColor) {
            const textNodes = node.childNodes;
            textNodes.forEach(textNode => {
                if (textNode.nodeType === Node.TEXT_NODE) {
                    fragment.appendChild(document.createTextNode(textNode.textContent));
                } else {
                    fragment.appendChild(textNode.cloneNode(true));
                }
            });
        } else {
            const clonedNode = node.cloneNode(true);
            clonedNode.style.color = selectedColor;
            fragment.appendChild(clonedNode);
        }
    });

    range.insertNode(fragment);
    selection.removeAllRanges();
}
blackTextButton.addEventListener('click', () => {
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        colorHighlightConversion('black', selection);
    } else {
        if (currentColor !== "black") {
            currentColor = "black";
            const selectedColor = "black";
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li, td, th, label, div');

            textElements.forEach(element => {
                if (!element.dataset.originalFontColor) {
                    element.dataset.originalFontColor = window.getComputedStyle(element).color;
                }
                element.style.color = selectedColor;
            });
        } else {
            currentColor = "original";
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');

            textElements.forEach(element => {
                if (element.dataset.originalFontColor) {
                    element.style.color = element.dataset.originalFontColor;
                    element.removeAttribute('data-original-font-color');
                } else {
                    element.style.color = "";
                }
            });
        }
    }
});

whiteTextButton.addEventListener('click', () => {
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        colorHighlightConversion('white', selection);
    } else {
        if(currentColor != "white"){
            currentColor = "white";

            const selectedColor = "white";
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li, td, th, label, div');
            textElements.forEach(element => {
                element.style.color = selectedColor;
            });
        }
        else{
            currentColor = "original";
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if(element.hasAttribute('data-original-font-color')) {
                    const originalFontColor = element.dataset.originalFontColor;
                    element.style.color = originalFontColor;
                }
                else {
                    const originalFontColor = element.getAttribute('data-original-font-color');
                    element.style.color = originalFontColor;
                }
            });
        }
    }
});

redTextButton.addEventListener('click', () => {
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        colorHighlightConversion('red', selection);
    } else {
        if(currentColor != "red"){
            currentColor = "red";

            const selectedColor = "red";
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li, td, th, label, div');
            textElements.forEach(element => {
                element.style.color = selectedColor;
            });
        }
        else{
            currentColor = "original";
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if(element.hasAttribute('data-original-font-color')) {
                    const originalFontColor = element.dataset.originalFontColor;
                    element.style.color = originalFontColor;
                }
                else {
                    const originalFontColor = element.getAttribute('data-original-font-color');
                    element.style.color = originalFontColor;
                }
            });
        }
    }
});

orangeTextButton.addEventListener('click', () => {
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        colorHighlightConversion('orange', selection);
    } else {
            if(currentColor != "orange"){
            currentColor = "orange";

            const selectedColor = "orange";
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li, td, th, label, div');
            textElements.forEach(element => {
                element.style.color = selectedColor;
            });
        }
        else{
            currentColor = "original";
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if(element.hasAttribute('data-original-font-color')) {
                    const originalFontColor = element.dataset.originalFontColor;
                    element.style.color = originalFontColor;
                }
                else {
                    const originalFontColor = element.getAttribute('data-original-font-color');
                    element.style.color = originalFontColor;
                }
            });
        }
    }
});

yellowTextButton.addEventListener('click', () => {
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        colorHighlightConversion('yellow', selection);
    } else {
        if(currentColor != "yellow"){
            currentColor = "yellow";

            const selectedColor = "yellow";
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li, td, th, label, div');
            textElements.forEach(element => {
                element.style.color = selectedColor;
            });
        }
        else{
            currentColor = "original";
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if(element.hasAttribute('data-original-font-color')) {
                    const originalFontColor = element.dataset.originalFontColor;
                    element.style.color = originalFontColor;
                }
                else {
                    const originalFontColor = element.getAttribute('data-original-font-color');
                    element.style.color = originalFontColor;
                }
            });
        }
    }
});

greenTextButton.addEventListener('click', () => {
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        colorHighlightConversion('green', selection);
    } else {
        if(currentColor != "green"){
            currentColor = "green";

            const selectedColor = "green";
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li, td, th, label, div');
            textElements.forEach(element => {
                element.style.color = selectedColor;
            });
        }
        else{
            currentColor = "original";
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if(element.hasAttribute('data-original-font-color')) {
                    const originalFontColor = element.dataset.originalFontColor;
                    element.style.color = originalFontColor;
                }
                else {
                    const originalFontColor = element.getAttribute('data-original-font-color');
                    element.style.color = originalFontColor;
                }
            });
        }
    }
});

blueTextButton.addEventListener('click', () => {
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        colorHighlightConversion('blue', selection);
    } else {
        if(currentColor != "blue"){
            currentColor = "blue";

            const selectedColor = "blue";
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li, td, th, label, div');
            textElements.forEach(element => {
                element.style.color = selectedColor;
            });
        }
        else{
            currentColor = "original";
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if(element.hasAttribute('data-original-font-color')) {
                    const originalFontColor = element.dataset.originalFontColor;
                    element.style.color = originalFontColor;
                }
                else {
                    const originalFontColor = element.getAttribute('data-original-font-color');
                    element.style.color = originalFontColor;
                }
            });
        }
    }
});

purpleTextButton.addEventListener('click', () => {
    const selection = window.getSelection();

    if (selection.rangeCount > 0 && !selection.isCollapsed) {
        colorHighlightConversion('purple', selection);
    } else {
        if(currentColor != "purple"){
            currentColor = "purple";

            const selectedColor = "purple";
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li, td, th, label, div');
            textElements.forEach(element => {
                element.style.color = selectedColor;
            });
        }
        else{
            currentColor = "original";
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if(element.hasAttribute('data-original-font-color')) {
                    const originalFontColor = element.dataset.originalFontColor;
                    element.style.color = originalFontColor;
                }
                else {
                    const originalFontColor = element.getAttribute('data-original-font-color');
                    element.style.color = originalFontColor;
                }
            });
        }
    }
});

defaultTextColorButton.addEventListener('click', () => {
    currentColor = "original";
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
    textElements.forEach(element => {
        if(element.hasAttribute('data-original-font-color')) {
            const originalFontColor = element.dataset.originalFontColor;
            element.style.color = originalFontColor;
        }
        else {
            const originalFontColor = element.getAttribute('data-original-font-color');
            element.style.color = originalFontColor;
        }
    });
});

// Function to update button image based on mode
function updateButtonImageBetween(button, imageName, isOriginal) {
    if (isOriginal) {
        button.querySelector('img').src = `${chrome.runtime.getURL("images/" + imageName + "Gray.svg")}`;
    } else {
        button.querySelector('img').src = `${chrome.runtime.getURL("images/" + imageName + "Blue.svg")}`;
    }
}

function updateButtonImageBetweenLineAndWord(button, imageName, isOriginal, marker) {
    if (isOriginal) {
        button.querySelector('img').src = `${chrome.runtime.getURL("images/" + imageName + "Gray.svg")}`;
    } else if (marker === 1){
        button.querySelector('img').src = `${chrome.runtime.getURL("images/" + imageName + "BlueAlpha.svg")}`;
    }
    else if (marker === 2){
        button.querySelector('img').src = `${chrome.runtime.getURL("images/" + imageName + "BlueBeta.svg")}`;
    }
}

//Text Spacing
const spaceBetweenLinesButton = shadowRoot.getElementById('spaceBetweenLines');
const spaceBetweenWordsButton = shadowRoot.getElementById('spaceBetweenWords');
const spaceBetweenLettersButton = shadowRoot.getElementById('spaceBetweenLetters');

const lineHeightValues = [1, 1.5, 0.75];
let currentLineHeightIndex = 0;

const wordSpacingValues = [1, 3, 7];
let currentWordSpacingIndex = 0;

const letterSpacingValues = [1, 1.5, 2];
let currentLetterSpacingIndex = 0;

function storeOriginalLineHeight() {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
    
    textElements.forEach(element => {
        const computedStyle = window.getComputedStyle(element);
        element.dataset.originalLineHeight = computedStyle.lineHeight;
    });
}
storeOriginalLineHeight();

spaceBetweenLinesButton.addEventListener('click', () => {
    currentLineHeightIndex = (currentLineHeightIndex + 1) % lineHeightValues.length;

    const newLineHeight = lineHeightValues[currentLineHeightIndex];
    const textElements = document.querySelectorAll('body > *:not(div.STP) p, body > *:not(div.STP) h1, body > *:not(div.STP) h2, body > *:not(div.STP) h3, body > *:not(div.STP) h4, body > *:not(div.STP) h5, body > *:not(div.STP) h6, body > *:not(div.STP) span, body > *:not(div.STP) a, body > *:not(div.STP) li, body > *:not(div.STP) td, body > *:not(div.STP) th, body > *:not(div.STP) label, body > *:not(div.STP) div');
    
    textElements.forEach(element => {
        const originalLineHeight = parseFloat(element.dataset.originalLineHeight);
        const newLineHeightValue = originalLineHeight * newLineHeight;
        element.style.lineHeight = `${newLineHeightValue}px`;
    });
    if (currentLineHeightIndex === 0) {
        updateButtonImageBetweenLineAndWord(spaceBetweenLinesButton, "BetweenLines", true, currentLineHeightIndex);
    } else {
        updateButtonImageBetweenLineAndWord(spaceBetweenLinesButton, "BetweenLines", false, currentLineHeightIndex);
    }
    //0 -- normal, 1 --- big, 2-- small
});

function storeOriginalWordSpacing() {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
    
    textElements.forEach(element => {
        const computedStyle = window.getComputedStyle(element);
        element.dataset.originalWordSpacing = computedStyle.wordSpacing;
    });
}
storeOriginalWordSpacing();


spaceBetweenWordsButton.addEventListener('click', () => {
    currentWordSpacingIndex = (currentWordSpacingIndex + 1) % wordSpacingValues.length;

    const newWordSpacing = wordSpacingValues[currentWordSpacingIndex];
    const textElements = document.querySelectorAll('body > *:not(div.STP) p, body > *:not(div.STP) h1, body > *:not(div.STP) h2, body > *:not(div.STP) h3, body > *:not(div.STP) h4, body > *:not(div.STP) h5, body > *:not(div.STP) h6, body > *:not(div.STP) span, body > *:not(div.STP) a, body > *:not(div.STP) li, body > *:not(div.STP) td, body > *:not(div.STP) th, body > *:not(div.STP) label, body > *:not(div.STP) div');
    let newWordSpacingValue;
    textElements.forEach(element => {
        const originalWordSpacing = parseFloat(element.dataset.originalWordSpacing);
        if(originalWordSpacing == 0){
            newWordSpacingValue = 1 * newWordSpacing;
        }
        else{
            newWordSpacingValue = originalWordSpacing * newWordSpacing;
        }
        element.style.wordSpacing = `${newWordSpacingValue}px`;
    });

    if (currentWordSpacingIndex === 0) {
        updateButtonImageBetweenLineAndWord(spaceBetweenWordsButton, "BetweenWords", true, currentWordSpacingIndex);
    } else {
        updateButtonImageBetweenLineAndWord(spaceBetweenWordsButton, "BetweenWords", false, currentWordSpacingIndex);
    }
});

function storeOriginalLetterSpacing() {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
    
    textElements.forEach(element => {
        const computedStyle = window.getComputedStyle(element);
        console.log(computedStyle.letterSpacing);
        element.dataset.originalLetterSpacing = computedStyle.letterSpacing;
    });
}
storeOriginalLetterSpacing();

spaceBetweenLettersButton.addEventListener('click', () => {
    currentLetterSpacingIndex = (currentLetterSpacingIndex + 1) % letterSpacingValues.length;

    const newLetterSpacing = letterSpacingValues[currentLetterSpacingIndex];
    const textElements = document.querySelectorAll('body > *:not(div.STP) p, body > *:not(div.STP) h1, body > *:not(div.STP) h2, body > *:not(div.STP) h3, body > *:not(div.STP) h4, body > *:not(div.STP) h5, body > *:not(div.STP) h6, body > *:not(div.STP) span, body > *:not(div.STP) a, body > *:not(div.STP) li, body > *:not(div.STP) td, body > *:not(div.STP) th, body > *:not(div.STP) label, body > *:not(div.STP) div');
    let newLetterSpacingValue;

    textElements.forEach(element => {
        const originalLetterSpacing = element.dataset.originalLetterSpacing;
        
        console.log(originalLetterSpacing);
        if(originalLetterSpacing == "normal"){
            if(newLetterSpacing == 1){
                element.style.letterSpacing = `normal`;
            }
            else{
                newLetterSpacingValue = 1 * newLetterSpacing;
                element.style.letterSpacing = `${newLetterSpacingValue}px`;
            }
        }
        else{
            newLetterSpacingValue = originalLetterSpacing * newLetterSpacing;
            element.style.letterSpacing = `${newLetterSpacingValue}px`;
        }
    });
    if (currentLetterSpacingIndex === 0) {
        updateButtonImageBetweenLineAndWord(spaceBetweenLettersButton, "BetweenLetters", true, currentLetterSpacingIndex);
    } else {
        updateButtonImageBetweenLineAndWord(spaceBetweenLettersButton, "BetweenLetters", false, currentLetterSpacingIndex);
    }
}); 

// Get the toggle button and sliders
const toggleFocusRulerButton = shadowRoot.getElementById('toggleFocusRuler');
const lineHeightSlider = shadowRoot.getElementById('lineHeightSlider');
const brightnessSlider = shadowRoot.getElementById('brightnessSliderBeta');
let focusRulerState = 0; // 0 = off, 1 = on, 2 = inverted
let focusOverlayTop, focusRulerStrip, focusOverlayBottom;
let maskColor = '0, 0, 0'; // Default mask color

// Function to change mask color
function changeMaskColor(color) {
  maskColor = color;
  updateOverlayBrightness();
}

// Function to move focus ruler strip
function moveFocusRulerStrip(event) {
    let y = event.clientY;
    if (focusRulerState === 2) {
      y += document.documentElement.scrollTop; // Add scroll top only for inverted state
    }
    focusRulerStrip.style.top = `${y - focusRulerStrip.offsetHeight / 2}px`; // Center the strip around the cursor
    focusOverlayTop.style.height = `${y - focusRulerStrip.offsetHeight / 2}px`; // Adjust the top overlay height
    focusOverlayBottom.style.top = `${y + focusRulerStrip.offsetHeight / 2}px`; // Adjust the bottom overlay position
    focusOverlayBottom.style.height = `calc(100% - ${y + focusRulerStrip.offsetHeight / 2}px)`; // Adjust the bottom overlay height
  }
// Function to update overlay brightness
function updateOverlayBrightness() {
  const brightness = brightnessSlider.value / 100;
  if (focusRulerState === 1) {
    focusOverlayTop.style.background = `rgba(${maskColor}, ${brightness})`;
    focusOverlayBottom.style.background = `rgba(${maskColor}, ${brightness})`;
  } else if (focusRulerState === 2) {
    focusRulerStrip.style.background = `rgba(${maskColor}, ${brightness})`;
  }
}

function toggleFocusRuler() {
    if (focusRulerState === 0) {
        // Logic for when focus ruler is turned on
        // Update button image to MaskTypeBlue
        updateButtonImage(toggleFocusRulerButton, "MaskTypeGray");
    } else {
        // Logic for when focus ruler is turned off or inverted
        // Update button image to MaskTypeGray
        updateButtonImage(toggleFocusRulerButton, "MaskTypeBlue");
    }
}

// Add event listener to the toggle button
toggleFocusRulerButton.addEventListener('click', () => {
  if (focusRulerState === 0) {
    // Create the top overlay element
    focusOverlayTop = document.createElement('div');
    focusOverlayTop.id = 'focusOverlayTop';
    document.body.appendChild(focusOverlayTop); // Append to body

    // Create the strip element
    focusRulerStrip = document.createElement('div');
    focusRulerStrip.id = 'focusRulerStrip';
    document.body.appendChild(focusRulerStrip); // Append to body

    // Create the bottom overlay element
    focusOverlayBottom = document.createElement('div');
    focusOverlayBottom.id = 'focusOverlayBottom';
    document.body.appendChild(focusOverlayBottom); // Append to body

    // Add event listener to move the strip with the cursor
    document.addEventListener('mousemove', moveFocusRulerStrip);

    // Add event listener to the lineHeightSlider to adjust the strip height
    lineHeightSlider.addEventListener('input', () => {
      const newHeight = lineHeightSlider.value + 'px';
      focusRulerStrip.style.height = newHeight;
      moveFocusRulerStrip({ clientY: focusRulerStrip.offsetTop + focusRulerStrip.offsetHeight / 2 });
    });

    // Add event listener to the brightnessSlider to adjust the overlay brightness
    brightnessSlider.addEventListener('input', updateOverlayBrightness);

    // Set initial brightness
    updateOverlayBrightness();

    focusRulerState = 1; // Set state to on
    toggleFocusRuler();
  } else if (focusRulerState === 1) {
    // Invert the focus ruler and overlay
    focusRulerStrip.style.background = `rgba(${maskColor}, ${brightnessSlider.value / 100})`;
    focusOverlayTop.style.background = 'transparent';
    focusOverlayBottom.style.background = 'transparent';

    focusRulerState = 2; // Set state to inverted
    toggleFocusRuler();
  } else if (focusRulerState === 2) {
    // Remove the overlay and strip elements
    focusOverlayTop.parentNode.removeChild(focusOverlayTop);
    focusRulerStrip.parentNode.removeChild(focusRulerStrip);
    focusOverlayBottom.parentNode.removeChild(focusOverlayBottom);

    // Remove the event listener
    document.removeEventListener('mousemove', moveFocusRulerStrip);

    // Remove slider event listeners
    brightnessSlider.removeEventListener('input', updateOverlayBrightness);

    focusRulerState = 0; // Set state to off
    toggleFocusRuler();
  }
});

// Add event listeners for color buttons
const colorButtons = shadowRoot.querySelectorAll('.color-button');
colorButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const color = event.target.getAttribute('data-color');
    changeMaskColor(color);
  });
});

// Initialize contrast and saturation levels
const contrastLevels = ['default', 'light', 'dark', 'invert'];
let currentContrastIndex = 0; // Start with default contrast mode

const saturationLevels = ['default', 'low', 'high', 'desaturate']; // Added 'desaturate' option
let currentSaturationIndex = 0; // Start with default saturation

// Get the elements
const changeContrastBtn = shadowRoot.getElementById('changeContrast');
const changeSaturationBtn = shadowRoot.getElementById('changeSaturation');

// Add click event listeners
changeContrastBtn.addEventListener('click', toggleContrast);
changeSaturationBtn.addEventListener('click', toggleSaturation);

// Function to toggle contrast mode
function toggleContrast() {
    currentContrastIndex = (currentContrastIndex + 1) % contrastLevels.length;
    applyContrast(contrastLevels[currentContrastIndex]);
}

// Function to apply contrast mode
function applyContrast(contrastMode) {
    document.body.style.filter = getFilterValue(contrastMode);
    updateButtonImage(changeContrastBtn, contrastMode + "Contrast");
}

// Function to toggle saturation level
function toggleSaturation() {
    currentSaturationIndex = (currentSaturationIndex + 1) % saturationLevels.length;
    applySaturation(saturationLevels[currentSaturationIndex]);
}

// Function to apply saturation level
function applySaturation(saturationLevel) {
    document.body.style.filter = getFilterValue(saturationLevel);
    updateButtonImage(changeSaturationBtn, saturationLevel + "Saturation");
}

// Helper function to get filter value based on mode
function getFilterValue(mode) {
    switch (mode) {
        case 'default':
            return 'none';
        case 'light':
            return 'brightness(120%) contrast(90%)';
        case 'dark':
            return 'brightness(80%) contrast(130%)';
        case 'invert':
            return 'invert(100%)';
        case 'low':
            return 'saturate(50%)';
        case 'high':
            return 'saturate(150%)';
        case 'desaturate':
            return 'grayscale(100%)'; // Apply grayscale for desaturation
        default:
            return 'none';
    }
}
// Helper function to update button image based on mode
function updateButtonImage(button, imageName) {
    button.querySelector('img').src = `${chrome.runtime.getURL("images/" + imageName + ".svg")}`;
}


let screenShaderOverlay;
let tintColor = '0, 0, 0'; // Default mask color

// Function to change mask color
function changeTintColor(color) {
    tintColor = color;
    updateSSOverlayBrightness();
}

// Function to update overlay brightness and color
function updateSSOverlayBrightness() {
    const brightness = brightnessSliderSS.value / 100;
    screenShaderOverlay.style.backgroundColor = `rgba(${tintColor}, ${brightness})`;
}

// Create screenShaderOverlay div inside the shadow root
screenShaderOverlay = document.createElement('div');
screenShaderOverlay.id = 'screenShaderOverlay';
screenShaderOverlay.style.position = 'fixed';
screenShaderOverlay.style.top = '0';
screenShaderOverlay.style.left = '0';
screenShaderOverlay.style.width = '100%';
screenShaderOverlay.style.height = '100%';
screenShaderOverlay.style.zIndex = '1005';
screenShaderOverlay.style.pointerEvents = 'none'; // Allow interaction with underlying content

// Append the overlay to the shadow root
shadowRoot.appendChild(screenShaderOverlay);

// Event listener for brightness slider
const brightnessSliderSS = shadowRoot.getElementById('brightnessSliderAlpha');
brightnessSliderSS.addEventListener('input', updateSSOverlayBrightness);

// Event listener for color buttons inside shadow root
const colorButtonsSS = shadowRoot.querySelectorAll('.color-button-alpha');
colorButtonsSS.forEach(button => {
    button.addEventListener('click', (event) => {
        const color = event.target.getAttribute('data-color');
        if(color != "128,128,128")
            changeTintColor(color);
        else
            screenShaderOverlay.style.background = 'rgba(0, 0, 0, 0)';

    });
});

//Misc features
function storeOriginalHighlights() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        const originalBackgroundColor = window.getComputedStyle(link).backgroundColor;
        link.dataset.originalBackgroundColor = originalBackgroundColor;
    });
}
storeOriginalHighlights();

let isHighlighted = false;
const highlightLinksButton = shadowRoot.getElementById('highlightLinks');

highlightLinksButton.addEventListener('click', () => {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        if (isHighlighted) {
            // Revert to original background color
            link.style.backgroundColor = link.dataset.originalBackgroundColor;
        } else {
            // Highlight with yellow background color
            link.style.backgroundColor = 'yellow';
        }
    });

    // Toggle the highlighting state
    isHighlighted = !isHighlighted;
});




function storeOriginalImageDisplay() {
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        const originalDisplay = window.getComputedStyle(image).display;
        image.dataset.originalDisplay = originalDisplay;
    });
}
storeOriginalImageDisplay();

let imagesHidden = false;
const hideImagesButton = shadowRoot.getElementById('hideImages');

hideImagesButton.addEventListener('click', () => {
    const images = document.querySelectorAll('img');

    images.forEach(image => {
        if (imagesHidden) {
            // Revert to original display state
            image.style.display = image.dataset.originalDisplay;
        } else {
            // Hide images
            image.style.display = 'none';
        }
    });

    // Toggle the hiding state
    imagesHidden = !imagesHidden;
});

let originalCursorSize = window.getComputedStyle(document.body).cursor;
let isCursorLarge = false;
const toggleCursorSizeButton = shadowRoot.getElementById('cursorSize');

const bigCursorURL = chrome.runtime.getURL('images/bigCursor.png');

toggleCursorSizeButton.addEventListener('click', () => {
    if (isCursorLarge) {
        // Revert to original cursor size
        document.body.style.cursor = originalCursorSize;
    } else {
        // Increase cursor size using bigCursor.svg
        document.body.style.cursor = `url(${bigCursorURL}), auto`;
    }

    // Toggle the cursor state
    isCursorLarge = !isCursorLarge;
});