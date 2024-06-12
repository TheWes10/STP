
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
        <div class="section" id="T2S">
            <h2>Text to Speech</h2>
            <div class="section-content">
                <button id="readPage">
                    <img src="${chrome.runtime.getURL("images/ReadPage.svg")}" draggable = "false"> 
                </button>
                <button id="readSpeak" title="Screen Reader Speed">
                    <img src="${chrome.runtime.getURL("images/SpeedNormalGray.svg")}" draggable = "false"> 
                </button>
                <button id="t2sHighlight">
                    <img src="${chrome.runtime.getURL("images/Highlight Text.svg")}" draggable = "false"> 
                </button>
            </div>
        </div>

        <div class="section" id="textConfig">
            <h2>Text Configurations</h2>
            <h3 class="centered-heading">Vision Impaired and Dyslexic Friendly Fonts</h3>
            <div class="section-content">
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
                <button id="readPage">
                    <img src="${chrome.runtime.getURL("images/TextSizeGray.svg")}" draggable="false"> 
                </button>
                <button>
                    <img src="${chrome.runtime.getURL("images/EmboldenTextGray.svg")}" draggable="false"> 
                </button>
                <button>
                    <img src="${chrome.runtime.getURL("images/ItalicizeTextGray.svg")}" draggable="false"> 
                </button>
                <button>
                    <img src="${chrome.runtime.getURL("images/DefaultAlignGray.svg")}" draggable="false"> 
                </button>
            </div>
            <h3 class="centered-heading">Choose Text Color</h3>
            <div class="section-content">
                <button class="color-button" style="background-color: black;" onclick="changeTextColor('black')"></button>
                <button class="color-button" style="background-color: white; border: 1px solid #ccc;" onclick="changeTextColor('white')"></button>
                <button class="color-button" style="background-color: red;" onclick="changeTextColor('red')"></button>
                <button class="color-button" style="background-color: orange;" onclick="changeTextColor('orange')"></button>
                <button class="color-button" style="background-color: yellow;" onclick="changeTextColor('yellow')"></button>
                <button class="color-button" style="background-color: green;" onclick="changeTextColor('green')"></button>
                <button class="color-button" style="background-color: blue;" onclick="changeTextColor('blue')"></button>
                <button class="color-button" style="background-color: purple;" onclick="changeTextColor('purple')"></button>
            </div>

        <div class="section" id="textSpacing">
            <h2>Text Spacing</h2>
            <div class="section-content">
                <button>
                    <img src="${chrome.runtime.getURL("images/BetweenLinesGray.svg")}" draggable = "false"> 
                </button>
                <button>
                    <img src="${chrome.runtime.getURL("images/BetweenWordsGray.svg")}" draggable = "false"> 
                </button>
                <button>
                    <img src="${chrome.runtime.getURL("images/BetweenLettersGray.svg")}" draggable = "false"> 
                </button>
            </div>
        </div>


        <div class="section" id="screenShader">
            <h2>Screen Shader</h2>
            <h3 class="centered-heading">Adjust Tint Color</h3>
            <div class="section-content">
                <div class="color-buttons">
                    <button class="color-button" data-color="black" style="background-color: black;"></button>
                    <button class="color-button" data-color="white" style="background-color: white; border: 1px solid #ccc;"></button>
                    <button class="color-button" data-color="red" style="background-color: red;"></button>
                    <button class="color-button" data-color="orange" style="background-color: orange;"></button>
                    <button class="color-button" data-color="yellow" style="background-color: yellow;"></button>
                    <button class="color-button" data-color="green" style="background-color: green;"></button>
                    <button class="color-button" data-color="blue" style="background-color: blue;"></button>
                    <button class="color-button" data-color="purple" style="background-color: purple;"></button>
                </div>
                <div class="slider-container">
                    <img src="${chrome.runtime.getURL("images/Brightness.svg")}" draggable="false"> 
                    <input type="range" id="brightnessSliderAlpha" min="0" max="100" value="100">
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
                    <input type="range" id="lineHeightSlider" min="0" max="200" value="100">
                </div>
                <div class="slider-container">
                    <img src="${chrome.runtime.getURL("images/Brightness.svg")}" draggable="false">
                    <input type="range" id="brightnessSliderBeta" min="0" max="100" value="100">
                </div>
            </div>
            <h3 class="centered-heading">Choose Mask Color</h3>
            <div class="section-content">
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

        <div class="section" id="colorSchemes">
            <h2>Color Schemes</h2>
            <div class="section-content">
                <button id="changeContrast">
                    <img src="${chrome.runtime.getURL("images/DefaultContrast.svg")}" draggable = "false"> 
                </button>
                <button id="changeSaturation"> 
                    <img src="${chrome.runtime.getURL("images/DefaultSaturation.svg")}" draggable = "false"> 
                </button>
            </div>
        </div>
    </div>
    <div id="focusRulerContainer"></div>
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
const readSpeedButton = shadowRoot.getElementById('readSpeak');
const t2sHighlightButton = shadowRoot.getElementById('t2sHighlight');

let isReading = false;
let currentSpeedIndex = 1;
let isHighlighting = false;
let speechSynthesisUtterance;
const speedValues = [0.75, 1, 1.5]; // slow, normal, fast

readPageButton.addEventListener('click', () => {
    console.log('Read This Page button clicked');

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

    if (isHighlighting) {
        speechSynthesisUtterance.onboundary = (event) => {
            if (event.name === 'word') {
                highlightWord(event.charIndex);
            }
        };
    }

    speechSynthesisUtterance.onend = () => {
        isReading = false;
        removeHighlighting();
    };
    window.speechSynthesis.speak(speechSynthesisUtterance);
}

function stopReadingPage() {
    window.speechSynthesis.cancel();
    removeHighlighting();
}

readSpeedButton.addEventListener('click', () => {
    console.log('Read Speed button clicked');
    
    // Cycle through the speed settings
    currentSpeedIndex = (currentSpeedIndex + 1) % speedValues.length;
    
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
    console.log("Highlight clicked");
    if (!isHighlighting) {
        startHighlightingText();
    } else {
        stopHighlightingText();
    }
    isHighlighting = !isHighlighting;
});

function startHighlightingText() {
    if (isReading) {
        speechSynthesisUtterance.onboundary = (event) => {
            if (event.name === 'word') {
                highlightWord(event.charIndex);
            }
        };
    }
}

function stopHighlightingText() {
    if (speechSynthesisUtterance) {
        speechSynthesisUtterance.onboundary = null;
    }
    removeHighlighting();
}

function highlightWord(charIndex) {
    removeHighlighting();

    const { node, offset } = getTextNodeAtOffset(document.body, charIndex);
    if (!node) return;

    const text = node.nodeValue.trim(); // Remove leading and trailing whitespace
    if (!text) return; // If the text is empty after trimming, return

    // Calculate the adjusted offset within the trimmed text
    const adjustedOffset = Math.min(offset, text.length - 1);

    // Extract the word starting from the adjusted offset
    const before = text.slice(0, adjustedOffset).replace(/.*\s/, ''); // Keep only the last word
    const after = text.slice(adjustedOffset).match(/^\S*/)[0]; // Keep only the first word
    const word = before + after;

    // Get the index of the word within the original text
    const wordIndex = text.indexOf(word);

    // Create a range for highlighting
    const range = document.createRange();
    range.setStart(node, wordIndex);
    range.setEnd(node, wordIndex + word.length);

    // Create a span element for highlighting
    const highlightSpan = document.createElement('span');
    highlightSpan.style.backgroundColor = 'yellow';

    // Surround the word with the highlight span
    range.surroundContents(highlightSpan);
}

function removeHighlighting() {
    const highlights = document.querySelectorAll('span[style*="background-color: yellow"]');
    highlights.forEach((span) => {
        const parent = span.parentNode;
        while (span.firstChild) {
            parent.insertBefore(span.firstChild, span);
        }
        parent.removeChild(span);
        parent.normalize();
    });
}


function getTextNodeAtOffset(root, offset) {
    let treeWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, function(node) {
        const nodeLength = node.nodeValue.length;
        if (offset >= nodeLength) {
            offset -= nodeLength;
            return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
    });
    const node = treeWalker.nextNode();
    return node ? { node: node, offset: offset } : null;
}

function getWordAtTextNode(node, offset) {
    const text = node.nodeValue;
    const before = text.slice(0, offset).replace(/.*\s/, ''); // Keep only the last word
    const after = text.slice(offset).match(/^\S*/)[0]; // Keep only the first word
    return before + after;
}



/// Get the toggle button and sliders
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
  } else if (focusRulerState === 1) {
    // Invert the focus ruler and overlay
    focusRulerStrip.style.background = `rgba(${maskColor}, ${brightnessSlider.value / 100})`;
    focusOverlayTop.style.background = 'transparent';
    focusOverlayBottom.style.background = 'transparent';

    focusRulerState = 2; // Set state to inverted
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

const brightnessSliderAlpha = shadowRoot.getElementById('brightnessSliderAlpha');


const colorButtonsAlpha = shadowRoot.querySelectorAll('.color-button');
// Add event listeners to color buttons
colorButtonsAlpha.forEach((button) => {
    console.log("yee");
  button.addEventListener('click', (e) => {
    const selectedColor = e.target.dataset.color;
    updateScreenTint(selectedColor);
  });
});

// Add event listener to brightness slider
brightnessSliderAlpha.addEventListener('input', (e) => {
  const brightnessValue = e.target.value;
  updateScreenBrightness(brightnessValue);
});

// Function to update screen tint
function updateScreenTint(color) {
  document.body.style.backgroundColor = color;
}

// Function to update screen brightness
function updateScreenBrightness(value) {
  const alphaValue = value / 100;
  document.body.style.backgroundColor = `rgba(0, 0, 0, ${alphaValue})`;
}

// Initialize screen tint and brightness
updateScreenTint('transparent'); // default tint color
updateScreenBrightness(100); // default brightness value