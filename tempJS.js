
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
<div id="FocusUp" style="font-family: Arial;">
    <div class="toolbar" id="toolbarMain">
        <button id="collapse" title="Toggle Toolbar">
            <img src="${chrome.runtime.getURL("images/collapse.svg")}" draggable = "false">
            <span class="buttonText">Toggle Toolbar</span>
        </button>
        <button class="mainButtons" title="Font Alteration" id="fontAlterationButton">
            <img src="${chrome.runtime.getURL("images/fontAlteration.svg")}" draggable = "false">
            <span class="buttonText">Font Alteration</span>
        </button>
        <button class="mainButtons" title="Task List" id="taskListButton">
            <img src="${chrome.runtime.getURL("images/taskList.svg")}" draggable = "false" >
            <span class="buttonText">Task List</span>
        </button>
        <button class="mainButtons" title="Progress Bar" id="PBButton">
            <img src="${chrome.runtime.getURL("images/progressBar.svg")}" draggable = "false" >
            <span class="buttonText">Progress Bar</span>
        </button>
        <button class="mainButtons" title="Timers" id="timerButton">
            <img src="${chrome.runtime.getURL("images/timers.svg")}" draggable = "false">
            <span class="buttonText">Timers</span>
        </button>
        <button class="mainButtons" title="Fidget Tool" id="FDButton">
            <img src="${chrome.runtime.getURL("images/fidget.svg")}" draggable = "false">
            <span class="buttonText">Fidget Tool</span>
        </button>
        <button class="mainButtons" title="Toggle Attention Grabbing Elements" id="AGEButton">
            <img src="${chrome.runtime.getURL("images/AGE.svg")}" draggable = "false">
            <span class="buttonText">Toggle AGE</span>
        </button>
        <button class="mainButtons" title="Personalization Settings" id="PSButton">
            <img src="${chrome.runtime.getURL("images/settings.svg")}" draggable = "false">
            <span class="buttonText">Settings</span>
        </button>



        <button class="backButtons fontAlterationButtons" title="Back" id="backButtonFA">
            <img src="${chrome.runtime.getURL("images/back.svg")}" draggable = "false">
            <span class="buttonText">Back</span>
        </button>
        <button class="fontAlterationButtons" title="Conversion Menu" id="fontConversionButton">
            <img src="${chrome.runtime.getURL("images/convert.svg")}" draggable = "false">
            <span class="buttonText">Conversion Menu</span>
        </button>
        <button class="fontAlterationButtons" title="Bionic Reading" id="bionicButton">
            <img src="${chrome.runtime.getURL("images/bionic.svg")}" draggable = "false">
            <span class="buttonText">Bionic Reading</span>
        </button>
        <button class="fontAlterationButtons" title="Apply Default Conversion" id="toDefaultButton">
            <img src="${chrome.runtime.getURL("images/defaultConvert.svg")}" draggable = "false">
            <span class="buttonText">Apply Default Conversion</span>
        </button>



        <button class="backButtons taskButtons" title="Back" id="backButtonTask">
            <img src="${chrome.runtime.getURL("images/back.svg")}" draggable = "false">
            <span class="buttonText">Back</span>
        </button>
        <button class="taskButtons" title="Task List" id="addTasksButton">
            <img src="${chrome.runtime.getURL("images/addTask.svg")}" draggable = "false">
            <span class="buttonText">Task List</span>
        </button>
        <button class="taskButtons" title="View All Tasks" id="viewAllTasks">
            <img src="${chrome.runtime.getURL("images/viewTasks.svg")}" draggable = "false">
            <span class="buttonText">View All Tasks</span>
        </button>

        <button class="backButtons timerButtons" title="Back" id="backButtonT">
            <img src="${chrome.runtime.getURL("images/back.svg")}" draggable = "false">
            <span class="buttonText">Back</span>
        </button>
        <button class="timerButtons" title="Timer Menu" id="timerMenuButton">
            <img src="${chrome.runtime.getURL("images/timer.svg")}" draggable = "false">
            <span class="buttonText">Timer Menu</span>
        </button>


        <button class="backButtons PBButtons" title="Back" id="backButtonPB">
            <img src="${chrome.runtime.getURL("images/back.svg")}" draggable="false">
            <span class="buttonText">Back</span>
        </button>
        <button class="PBButtons" title="Add Flags" id="PBSelectStartEnd">
            <img src="${chrome.runtime.getURL("images/StartEnd.svg")}" draggable="false">
            <span class="buttonText">Add Flags</span>
        </button>
        <button class="PBButtons" title="Reset Flags" id="PBReset">
            <img src="${chrome.runtime.getURL("images/Reset.svg")}" draggable="false">
            <span class="buttonText">Reset Flags</span>
        </button>
        <button class="PBButtons" title="Delete Flags" id="PBDelete">
            <img src="${chrome.runtime.getURL("images/trashIcon.svg")}" draggable="false">
            <span class="buttonText">Delete Flags</span>
        </button>

        <div id="progressContainer" class="PBButtons" draggable="false">
        <div id="progressBar" draggable="false">
            <div class="progress" id="progress" draggable="false"></div>
            <span class="progressText" id="progressText"></span> <!-- Add this element here -->
        </div>
    </div>

        <div class="menu" id="PBMenu">
            <p class="popUpText">Please select a starting and ending area to track your progress by dragging and dropping the <span class="highlightText">start</span> and <span class="highlightText">end</span> images on the page.</p>
            <img id="start" src="${chrome.runtime.getURL("images/Start.svg")}" draggable="true" class = "">
            <img id="end" src="${chrome.runtime.getURL("images/End.svg")}" draggable="true" class = "">
        </div>




        <button class="backButtons PSButtons" title="Back" id="backButtonPS">
            <img src="${chrome.runtime.getURL("images/back.svg")}" draggable = "false">
            <span class="buttonText">Back</span>
        </button>
        <button class="PSButtons" title="Default Conversion Menu" id="defaultConversionButton">
            <img src="${chrome.runtime.getURL("images/convert.svg")}" draggable = "false">
            <span class="buttonText">Default Conversion</span>
        </button>
        <button class="PSButtons" title="AGE Parameters" id="AGESettingsButton">
            <img src="${chrome.runtime.getURL("images/AGE.svg")}" draggable = "false">
            <br>
            <span class="buttonText">AGE Parameters</span>
        </button>
        <button class="PSButtons" title="Toggle Motivational Messages" id="MWM">
            <img src="${chrome.runtime.getURL("images/mwm.svg")}" draggable = "false">
            <span class="buttonText">Toggle Motivational Messages</span>
        </button>



        <button class="backButtons FDButtons" title="Back" id="backButtonFD">
        	<img src="${chrome.runtime.getURL("images/back.svg")}" draggable = "false">
            <span class="buttonText">Back</span>
        </button>
        <button class="FDButtons" title="Fidget Menu" id="FDMenuStart">
            <img src="${chrome.runtime.getURL("images/FDMenu.svg")}" draggable = "false">
            <span class="buttonText">Fidget Menu</span>
         </button>
         <button class = "FDButtons" title = "Reset Fidget" id = "FDDelete">
          	<img src="${chrome.runtime.getURL("images/Reset.svg")}" draggable = "false">
              <span class="buttonText">Reset Fidget</span>
        </button>
    </div>


    <div class="menu" id="fontAlterationMenu">
        <button id="increaseFont">
            A+
        </button>
        <button id="decreaseFont">
            A-
        </button>
        <button id="originalSize">
            Original Size
        </button>
        <p style="font-size: 15px; margin-top:10px; color:#EAEAEA"><strong>Change Font Color</strong></p>
        <input type="color" id="fontColor" name="fontColor" value="#ff0000">
        <button id="originalFColor">
            Original Color
        </button>
        <p style="font-size: 15px; margin-top: 10px; color: #EAEAEA"><strong>Change Background Color</strong></p>
        <input type="color" id="backColor" name="backColor" value="#ff0000">
        <button id="originalBColor">
            Original Color
        </button>
        <p style="font-size: 15px; margin-top:10px; color:#EAEAEA"><strong>Change Typeface</strong></p>
        <select id="typeface">
            <option value="Arial, sans-serif">Arial</option>
            <option value="Verdana, sans-serif">Verdana</option>
            <option value="Helvetica, sans-serif">Helvetica</option>
            <option value="Tahoma, sans-serif">Tahoma</option>
            <option value="Georgia, serif">Georgia</option>
            <option value="Times New Roman, serif">Times New Roman</option>
            <option value="Courier New, monospace">Courier New</option>
            <option value="OpenDyslexic, sans-serif">OpenDyslexic</option>
        </select>
        <button style="margin-top:5px" id="originalTypeface">
            Original Typeface
        </button>
    </div>

    <div class="menu" id="taskListMenu" style="width: auto; min-width: 257.55px; overflow: auto; max-height: 620px;">
        <div id="addTaskMenu">
            <p style="font-size: 27px; color:#EAEAEA; height: 9px;"><strong>Add Task</strong></p>
            <select id="taskScope" style="font-size: larger; margin-bottom: 10px; border-radius: 10px;">
                <option value="url">This URL</option>
                <option value="domain">This Domain</option>
                <option value="all">All Websites</option>
            </select>
            <div style="vertical-align: top; display: flex; align-items: flex-start;">
                <textarea id="addTaskBox" placeholder="Write your task here..."></textarea>
                <button class="taskButtons" title="Add Task" id="addTaskCheck" style="margin-left: 8px; width: 80px; display: flex; align-items: center; justify-content: center;">
                    <p style="margin: 0; padding-right: 5px;">Add</p>
                    <img src="${chrome.runtime.getURL("images/addTaskCheck.svg")}" draggable="false">
                </button>
            </div>
        </div>
        <p style="font-size: 27px; color:#EAEAEA; height: 9px;"><strong>Task List</strong></p>
    </div>


    <div class="menu" id="viewAllTasksMenu" style="min-width: 304.46px; width: auto; overflow: auto; max-height: 620px; vertical-align: top;">
        <p id="SavedTasksStyled"><strong>Saved Tasks</strong></p>
    </div>


    <div class="menu" id="timerMenu">
        <p style="font-size: 15px; color:#EAEAEA"><strong>Alarm Time</strong></p>
        <input type="text" id="timeFU" pattern="\d{2}:\d{2}" placeholder="MINUTES:SECONDS">
        <label for="doSound">Sound?</label>
        <input type="checkbox" id="doSound">
        <button id="setTimer" style="margin-top: 8px;">
            Set Timer
        </button>
        <div id="countdown" style="margin-top: 10px; background: #FFD700; border-radius: 15px; width: 180px; text-align: center;"></div>
    </div>

    <div class="menu" id="PSFontMenu">
        <p style="font-size: 15px; margin-top:10px; color:#EAEAEA"><strong>Default Font Size</strong></p>
        <input type="number" id="defaultFontSize" min="1" name="defaultFontSize">

        <p style="font-size: 15px; margin-top:10px; color:#EAEAEA"><strong>Default Font Color</strong></p>
        <input type="color" id="defaultFontColor" name="defaultFontColor">
       
        <p style="font-size: 15px; margin-top:10px; color:#EAEAEA"><strong>Default Background Color</strong></p>
        <input type="color" id="defaultBackColor" name="defaultBackColor">
        
        <p style="font-size: 15px; margin-top:10px; color:#EAEAEA"><strong>Default Typeface</strong></p>
        <select id="defaultTypeface">
            <option value="Arial, sans-serif">Arial</option>
            <option value="Verdana, sans-serif">Verdana</option>
            <option value="Helvetica, sans-serif">Helvetica</option>
            <option value="Tahoma, sans-serif">Tahoma</option>
            <option value="Georgia, serif">Georgia</option>
            <option value="Times New Roman, serif">Times New Roman</option>
            <option value="Courier New, monospace">Courier New</option>
            <option value="OpenDyslexic, sans-serif">OpenDyslexic</option>
        </select>
    </div>

    <div class="menu" id="PSAGEMenu">
    	<p style="font-size: 15px; margin-top:10px; color:#EAEAEA"><strong>Flash Frequency (seconds)</strong></p>
        <input type="number" id="flashFrequency" name="flashFrequency" min="0" max="10" step="0.1" value="0.5">

        <p style="font-size: 15px; margin-top: 10px; color: #EAEAEA;"><strong>Change Cursor Color</strong></p>
        <input type="color" id="cursorColor" name="cursorColor" value="#ff0000">

        <p style="font-size: 15px; margin-top: 10px; color: #EAEAEA;"><strong>Inactivity Duration (minutes)</strong></p>
        <input type="number" id="inactivityDuration" name="inactivityDuration" min="1" max="20" value="1">
    </div>
	<div class="cursor-circle" id = "cursor-circle"></div>
    <div class="menu" id="MWMState"></div>

    <div class="FDPopUp" id="FDMenu">
        <h2 class="instructions">Instructions</h2>
        <ul class="whiteBullets">
            <li class="popUpText">Click the <strong>"Toggle Fidget Tool"</strong> to display/hide the fidget tool.</li>
            <li class="popUpText">You may drag this tool anywhere.</li>
            <li class="popUpText">Click the <strong>"Reset"</strong> button to reset the position of the fidget tool.</li>
            <li class="popUpText">After attempting to drag the tool, the fidget icon will follow the mouse. To set it in place, simply <strong>left click</strong> over the desired area.</li>
            <li class="popUpText">You may still scroll using the bar on the right side of the page.</li>
        </ul>
        <div style="text-align: center;">
            <button id="toggleFidgetButton">Toggle Fidget Tool</button>
        </div>
    </div>

    <div id="fidgetContainer" class="fidgetContainer" style="position: fixed; left: 0; top: 0; transform: translate(-50%, -50%); pointer-events: none; display: none;">
        <img id="moveFidget" src="${chrome.runtime.getURL("images/moveFidget.svg")}" draggable="true" style="pointer-events: all;">
    </div>


`;
shadowRoot.innerHTML = MainHTML; 
shadowRoot.appendChild(linkElement);

// Append the container to the document body
document.body.appendChild(container);
//End of Injection

//Toolbar
const toolbar = shadowRoot.getElementById('toolbarMain');
const MainButtons = shadowRoot.querySelectorAll('.mainButtons');
const menus = shadowRoot.querySelectorAll('.menu');
const fontAlterationMenu = shadowRoot.getElementById('fontAlterationMenu');
const PSFontMenu = shadowRoot.getElementById('PSFontMenu');
const PSAGEMenu = shadowRoot.getElementById('PSAGEMenu');
const FDMenu = shadowRoot.getElementById('FDMenu');
const PBMenu = shadowRoot.getElementById('PBMenu');
const collapseButton = shadowRoot.getElementById('collapse');
const collapseImg = collapseButton.querySelector('img');
const allButtons = shadowRoot.querySelectorAll('.toolbar button');
let isDragging = false;
let offsetX, offsetY;
let doMWM = true;

chrome.storage.sync.get(["toolbarLeftStyle", "toolbarTopStyle", "FontMenuLeftStyle", "FontMenuTopStyle", "PSFontMenuLeftStyle", "PSFontMenuTopStyle", "PSAGEMenuLeftStyle", "PSAGEMenuTopStyle" , "PBMenuLeftStyle", "PBMenuTopStyle", "FDMenuLeftStyle", "FDMenuTopStyle", "doMWM"], (result) => {
    toolbar.style.left = result.toolbarLeftStyle ? result.toolbarLeftStyle + 'px' : '';
    toolbar.style.top = result.toolbarTopStyle ? result.toolbarTopStyle + 'px' : '';
    fontAlterationMenu.style.left = result.FontMenuLeftStyle || '';
    fontAlterationMenu.style.top = result.FontMenuTopStyle || '';
    PSFontMenu.style.left = result.PSFontMenuLeftStyle || '';
    PSFontMenu.style.top = result.PSFontMenuTopStyle || '';
    PSAGEMenu.style.left = result.PSAGEMenuLeftStyle || '';
    PSAGEMenu.style.top = result.PSAGEMenuTopStyle || '';
  	PBMenu.style.left = result.FontMenuLeftStyle || '';
    PBMenu.style.top = result.FontMenuTopStyle || '';
    timerMenu.style.left = result.FontMenuLeftStyle || '';
    timerMenu.style.top = result.FontMenuTopStyle || '';
    addTaskMenu.style.left = result.FontMenuLeftStyle || '';
    addTaskMenu.style.top = result.FontMenuTopStyle || '';
    taskListMenu.style.left = result.FontMenuLeftStyle || '';
    taskListMenu.style.top = result.FontMenuTopStyle || '';
    viewAllTasksMenu.style.left = result.FontMenuLeftStyle || '';
    viewAllTasksMenu.style.top = result.FontMenuTopStyle || '';
    FDMenu.style.left = result.FDMenuLeftStyle || '';
    FDMenu.style.top = result.FDMenuTopStyle || '';
    doMWM = result.doMWM;
});

function updateTaskNotifications() {
    const getImageSrc = (baseName) => {
        if (tasksInList >= 1 && tasksInList < 10)
            return chrome.runtime.getURL(`images/${baseName}${tasksInList}.svg`);
        else if (tasksInList > 9)
            return chrome.runtime.getURL(`images/${baseName}9+.svg`);
        else
            return chrome.runtime.getURL(`images/${baseName}.svg`);
    };

    if (isCollapsed) {
        collapseImg.src = getImageSrc('collapse');
        collapseImg.style.paddingLeft = '10px';
    }
    else {
        collapseImg.src = chrome.runtime.getURL('images/collapse.svg');
        collapseImg.style.paddingLeft = '0';
    }

    taskListImg.src = getImageSrc('taskList');
    taskListImg.style.paddingLeft = tasksInList >= 1 ? '10px' : '0';

    addTasksImg.src = getImageSrc('addTask');
    addTasksImg.style.paddingLeft = tasksInList >= 1 ? '10px' : '0';
}

/*this makes the circle invisible at first, kinda fixes it */
const tempDisplayCircle = shadowRoot.getElementById("cursor-circle");

//toggle the 'show' class to either display or hide the circle
tempDisplayCircle.classList.toggle('hide');


let isCollapsed = true;
collapseButton.addEventListener('click', () => {
    if(isCollapsed){
        for (let button of MainButtons) {
            button.classList.add('show');
        }
        collapseImg.src = chrome.runtime.getURL('images/collapse.svg');
        collapseImg.style.paddingLeft = '0';
    }
    else {
        for (let button of allButtons) {
            button.classList.remove('show');
        }

        for (let menu of menus) {
            menu.classList.remove('show');
        }
        FDMenu.classList.remove('show');
        PBMenu.classList.remove('show');
    }

    toolbar.style.height = isCollapsed ? "655px" : "115px";
    isCollapsed = !isCollapsed;
    updateTaskNotifications();
});


toolbar.addEventListener('mousedown', (e) => {
    const isToolbarButton = e.target.closest('button');
    const isPBMenu = e.target.closest('#PBMenu');
    const isFDMenu = e.target.closest('#FDMenu');

    if (!isToolbarButton && !isPBMenu && !isFDMenu) {	//changed foo
        isDragging = true;
        offsetX = e.clientX - toolbar.getBoundingClientRect().left;
        offsetY = e.clientY - toolbar.getBoundingClientRect().top;
        toolbar.style.cursor = 'grabbing';
        document.body.classList.add('disable-text-selection');
    }
});

toolbar.addEventListener('dragover', (event) => {
    event.preventDefault();
    return false;
});


let toolbarLeft;
let toolbarTop;


document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        const toolbarWidth = toolbar.offsetWidth;
        const toolbarHeight = toolbar.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Store the original position of the toolbar
        toolbarLeft = toolbar.offsetLeft; // Update toolbarLeft
        toolbarTop = toolbar.offsetTop;   // Update toolbarTop

        // Calculate the potential new position of the toolbar
        const potentialNewX = Math.max(0, Math.min(windowWidth - toolbarWidth, newX));
        const potentialNewY = Math.max(0, Math.min(windowHeight - toolbarHeight, newY));

        // Check if any menu is against the boundary in the direction of movement
        const menus = [fontAlterationMenu, PSFontMenu, PSAGEMenu, PBMenu, timerMenu, addTaskMenu, viewAllTasksMenu, taskListMenu, FDMenu];
        let menuAtBoundaryX = false;
        let menuAtBoundaryY = false;

        menus.forEach(menu => {
            const menuRect = menu.getBoundingClientRect();

            // Check for X direction
            if (
                menuRect.left + menuRect.width >= windowWidth &&
                toolbarLeft < potentialNewX // Moving to the right
            ) {
                menuAtBoundaryX = true;
            }

            // Check for Y direction
            if (
                menuRect.top + menuRect.height >= windowHeight &&
                toolbarTop < potentialNewY // Moving down
            ) {
                menuAtBoundaryY = true;
            }
        });

        // Update the toolbar position based on menu positions
        if (!menuAtBoundaryX) {
            toolbar.style.left = potentialNewX + 'px';
        }
        if (!menuAtBoundaryY) {
            toolbar.style.top = potentialNewY + 'px';
        }

        // Update the position of the menus
        adjustMenuPosition(fontAlterationMenu);
        adjustMenuPosition(PSFontMenu);
        adjustMenuPosition(PSAGEMenu);
        adjustMenuPosition(PBMenu);
        adjustMenuPosition(timerMenu);
        adjustMenuPosition(addTaskMenu);
        adjustMenuPosition(taskListMenu);
        adjustMenuPosition(viewAllTasksMenu);
        adjustMenuPosition(FDMenu);
    }
    const circleSize = 30; //size of the circle
    tempDisplayCircle.style.left = `${e.clientX - circleSize / 2}px`; //ajust position to center the circle horizontally
    tempDisplayCircle.style.top = `${e.clientY - circleSize / 2}px`; //adjust position to center the circle vertically
});

function adjustMenuPosition(menu) {
    const menuRect = menu.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let newX = menuRect.left;
    let newY = menuRect.top;

    // Ensure menu stays within window bounds
    if (newX + menuRect.width > windowWidth) {
        newX = windowWidth - menuRect.width;
    }
    if (newY + menuRect.height > windowHeight) {
        newY = windowHeight - menuRect.height;
    }

    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;

    // Adjust menu position relative to toolbar
    const toolbarRect = toolbar.getBoundingClientRect();

    menu.style.left = toolbarRect.right + 10 + 'px';
    menu.style.top = toolbarRect.top + 'px';
}

document.addEventListener('mouseup', () => {	//changed to include PS stuff and in chrome get thing
    isDragging = false;
    toolbar.style.cursor = 'grab';
    chrome.storage.sync.set({
        toolbarLeftStyle: toolbarLeft,
        toolbarTopStyle: toolbarTop,
        FontMenuLeftStyle: fontAlterationMenu.style.left,
        FontMenuTopStyle: fontAlterationMenu.style.top,
        PSFontMenuLeftStyle: PSFontMenu.style.left,
        PSFontMenuTopStyle: PSFontMenu.style.top,
        PSAGEMenuLeftStyle: PSAGEMenu.style.left,
        PSAGEMenuTopStyle: PSAGEMenu.style.top,
      	PBMenuLeftStyle: PBMenu.style.left,
      	PBMenuTopStyle: PBMenu.style.top,
      	FDMenuLeftStyle: FDMenu.style.left,
        FDMenuTopStyle: FDMenu.style.top
    });

    document.body.classList.remove('disable-text-selection');
});

//End of Toolbar
 
//Font Alteration
const fontAlterationButtons = shadowRoot.querySelectorAll('.fontAlterationButtons');
const fontAlterationButton = shadowRoot.getElementById('fontAlterationButton');

let bionicModeActive = false;
let addedFAListeners = false;
let addedFAMenuListeners = false;

function storeOriginalFontSizes() {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');

    textElements.forEach(element => {
        if (!element.closest('#FocusUp')) {
            const fontSize = parseFloat(window.getComputedStyle(element).fontSize);
            element.dataset.originalFontSize = fontSize;
        }
    });
}
storeOriginalFontSizes();

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


function storeOriginalBackgroundColor() {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');

    textElements.forEach(element => {
        if (!element.closest('#FocusUp')) {
            const backColor = window.getComputedStyle(element).backgroundColor;
            element.dataset.originalBackgroundColor = backColor;
        }
    });
}
storeOriginalBackgroundColor();


function storeOriginalTypeface() {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
    textElements.forEach(element => {
        if (!element.closest('#FocusUp')) {
            const typeface = window.getComputedStyle(element).fontFamily;
            element.dataset.originalTypeface = typeface;
        }
    });
}
storeOriginalTypeface();

let notBionic = new Map();

fontAlterationButton.addEventListener('click', () => {
    //BR breaks the original font size button

    for (let button of fontAlterationButtons) {
        button.classList.toggle('show');
    }

    for (let button of MainButtons) {
        button.classList.toggle('show');
    }
   
    const backButton = shadowRoot.getElementById('backButtonFA');
    const fontConversionButton = shadowRoot.getElementById('fontConversionButton');
    const bionicModeButton = shadowRoot.getElementById('bionicButton');
    const toDefaultButton = shadowRoot.getElementById('toDefaultButton');

    function backButtonClickHandler() {
        for (let button of fontAlterationButtons) {
            button.classList.toggle('show');
        }
        
        for (let button of MainButtons) {
            button.classList.toggle('show');
        }

        for (let menu of menus) {
            menu.classList.remove('show');
        }
    }

    if(!addedFAListeners)
        backButton.addEventListener('click', backButtonClickHandler);

    function fontConversionButtonClickHandler() {
        fontAlterationMenu.classList.toggle('show');

        const increaseFontButton = shadowRoot.getElementById('increaseFont');
        const decreaseFontButton = shadowRoot.getElementById('decreaseFont');
        const fontColorInput = shadowRoot.getElementById('fontColor');
        const backgroundColorInput = shadowRoot.getElementById('backColor');
        const originalBColorButton = shadowRoot.getElementById('originalBColor');
        const originalFColorButton = shadowRoot.getElementById('originalFColor');
        const originalSizeButton = shadowRoot.getElementById('originalSize');
        const fontSelector = shadowRoot.getElementById('typeface');
        const originalTypefaceButton = shadowRoot.getElementById('originalTypeface');

        if(!addedFAMenuListeners){
            increaseFontButton.addEventListener('click', () => {
                const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
                textElements.forEach(element => {
                    if (!element.closest('#FocusUp')) {
                        const currentFontSize = parseFloat(window.getComputedStyle(element).fontSize);
                        const newFontSize = currentFontSize * 1.03; 
                        element.style.fontSize = `${newFontSize}px`;
                    }
                });
            });
        }

        if(!addedFAMenuListeners){
            decreaseFontButton.addEventListener('click', () => {
                const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
                textElements.forEach(element => {
                    if (!element.closest('#FocusUp')) {
                        const currentFontSize = parseFloat(window.getComputedStyle(element).fontSize);
                        const newFontSize = currentFontSize * 0.96;
                        element.style.fontSize = `${newFontSize}px`;
                    }
                });
            });
        }

        if(!addedFAMenuListeners){
            originalSizeButton.addEventListener('click', () => {
                const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
                textElements.forEach(element => {
                    if (!element.closest('#FocusUp')) {
                        let originalFontSize = null;
                        // Traverse up to find the closest ancestor with the original font size
                        let currentElement = element;
                        while (currentElement && !originalFontSize && currentElement !== document.documentElement) {
                            if (currentElement.hasAttribute('data-original-font-size')) {
                                originalFontSize = parseFloat(currentElement.dataset.originalFontSize);
                            }
                            currentElement = currentElement.parentNode;
                        }
                        if (originalFontSize !== null) {
                            element.style.fontSize = `${originalFontSize}px`;
                        }
                    }
                });
            });
        }
        if(!addedFAMenuListeners){
            fontColorInput.addEventListener('click', () =>{
                const selectedColor = fontColorInput.value;
                const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li, td, th, label, div');
                textElements.forEach(element => {
                    if (!element.closest('#FocusUp')) {
                        element.style.color = selectedColor;
                    }
                });
            });
        }
        if(!addedFAMenuListeners){
            originalFColorButton.addEventListener('click', () =>{
                const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
                textElements.forEach(element => {
                    if (!element.closest('#FocusUp')) {
                        if(element.hasAttribute('data-original-font-color')) {
                            const originalFontColor = element.dataset.originalFontColor;
                            element.style.color = originalFontColor;
                        }
                        else {
                            const originalFontColor = element.getAttribute('data-original-font-color');
                            element.style.color = originalFontColor;
                        }
                    }
                });
            });
        }
      
        if(!addedFAMenuListeners){
            backgroundColorInput.addEventListener('click', () =>{
                const backgroundColor = backgroundColorInput.value;
                const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
                textElements.forEach(element => {
                    if (!element.closest('#FocusUp')) {
                        element.style.backgroundColor = backgroundColor;
                    }
                });
            });
        }
        if(!addedFAMenuListeners){
            originalBColorButton.addEventListener('click', () =>{
                const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
                textElements.forEach(element => {
                    if (!element.closest('#FocusUp')) {
                        if(element.hasAttribute('data-original-background-color')) {
                            const originalBackgroundColor = element.dataset.originalBackgroundColor;
                            element.style.backgroundColor = originalBackgroundColor;
                            /* if (element.classList.contains('bold-first-half')) {
                                element.style.backgroundColor = originalBackgroundColor;
                            } else {
                                element.setAttribute('style', `background-color: ${originalBackgroundColor}`);
                            } */
                        } else {
                            const originalBackgroundColor = element.getAttribute('data-original-background-color');
                            element.style.backgroundColor = originalBackgroundColor;
                        }
                    }
                });
            });
        }
      
        
        fontSelector.addEventListener('change', function() {
            const selectedFont = fontSelector.value;
            document.body.style.fontFamily = selectedFont;
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if (!element.closest('#FocusUp')) {
                    element.style.fontFamily = selectedFont;
                }
            });
        });
        if(!addedFAMenuListeners){
            originalTypefaceButton.addEventListener('click', () =>{
                const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
                textElements.forEach(element => {
                    if (!element.closest('#FocusUp')) {
                        if(element.hasAttribute('data-original-typeface')) {
                            const originalTypeface = element.dataset.originalTypeface;
                            element.style.fontFamily = originalTypeface;
                        }
                        else {
                            const originalTypeface = element.getAttribute('data-original-typeface');
                            element.style.fontFamily = originalTypeface;
                        }
                    }
                });
            });
        }
        addedFAMenuListeners = true;
    }
    if(!addedFAListeners)
        fontConversionButton.addEventListener('click', fontConversionButtonClickHandler);

    function bionicModeButtonClickHandler() {
        if (!bionicModeActive) {
            traverseNodes(document.body);
            bionicModeActive = true;
        } else {
            notBionic.forEach((content, element) => {
                element.textContent = content;
            });
            bionicModeActive = false;
        }
    };
    if(!addedFAListeners)
        bionicModeButton.addEventListener('click', bionicModeButtonClickHandler);
    
    function boldFirstHalfOfWords(textNode) {
        const words = textNode.nodeValue.split(/\s+/);
        let formattedText = '';
    
        // Find the closest ancestor with the dataset
        let parentWithDataset = textNode.parentNode;
        while (parentWithDataset && !parentWithDataset.dataset.originalFontSize && parentWithDataset !== document.documentElement) {
            parentWithDataset = parentWithDataset.parentNode;
        }
    
        if (!parentWithDataset || !parentWithDataset.dataset.originalFontSize) {
            console.error('No parent with dataset.originalFontSize found for:', textNode);
            return; // Exit the function if no valid parent is found
        }
    
        words.forEach(word => {
            const halfLength = Math.ceil(word.length / 2);
            const firstHalf = word.substring(0, halfLength);
            const secondHalf = word.substring(halfLength);
            const span = document.createElement('span');
            span.innerHTML = `<b>${firstHalf}</b>${secondHalf}`;
    
            if (bionicModeActive) {
                const currentFontColor = window.getComputedStyle(textNode.parentNode).color;
                const currentBackColor = window.getComputedStyle(textNode.parentNode).backgroundColor;
                const currentFontSize = window.getComputedStyle(textNode.parentNode).fontSize;
                const currentTypeface = window.getComputedStyle(textNode.parentNode).fontFamily;
    
                span.style.color = currentFontColor;
                span.style.backgroundColor = currentBackColor;
                span.style.fontSize = currentFontSize;
                span.style.fontFamily = currentTypeface;
    
                span.classList.add('bold-first-half');
            }
    
            formattedText += span.outerHTML + ' ';
        });
    
        const tempSpan = document.createElement('span');
        tempSpan.innerHTML = formattedText.trim();
    
        // Inherit the dataset from the correct parent element
        Object.keys(parentWithDataset.dataset).forEach(key => {
            tempSpan.dataset[key] = parentWithDataset.dataset[key];
        });
    
        // Store the original text content in the Map
        notBionic.set(tempSpan, textNode.nodeValue);
    
        textNode.parentNode.replaceChild(tempSpan, textNode);
    }
    
    function traverseNodes(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.parentNode.nodeName.toLowerCase() !== 'script' && node.parentNode.nodeName.toLowerCase() !== 'style') {
                boldFirstHalfOfWords(node);
            }
        } else {
            node.childNodes.forEach(childNode => traverseNodes(childNode));
        }
    }
    
    function toDefaultButtonClickHandler() {
        chrome.storage.sync.get(["defaultFontSize", "defaultFontColor", "defaultBackColor", "defaultTypeface"], (result) => {
            const defaultFontSize = result.defaultFontSize + 'px';
            const defaultFontColor = result.defaultFontColor;
            const backColor = result.defaultBackColor;
            const typeface = result.defaultTypeface;

            /* console.log(backColor);
            backColor = 'red';
            console.log(backColor); */
    
            let textElements = document.querySelectorAll('p, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if (!element.closest('#FocusUp')) {
                    element.style.fontSize = defaultFontSize;
                }
            });
    
            textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li, td, th, label, div');
            textElements.forEach(element => {
                if (!element.closest('#FocusUp')) {
                    element.style.color = defaultFontColor;
                }
            });
    
            textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if (!element.closest('#FocusUp')) {
                    element.style.backgroundColor = backColor;
                }
            });
    
            document.body.style.fontFamily = typeface;
            textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th, label, div');
            textElements.forEach(element => {
                if (!element.closest('#FocusUp')) {
                    element.style.fontFamily = typeface;
                }
            });
        });
    }
    if(!addedFAListeners)
        toDefaultButton.addEventListener('click', toDefaultButtonClickHandler);

    addedFAListeners = true;
});
//End of Font Alteration

//Beginning of Task List
const taskButtons = shadowRoot.querySelectorAll('.taskButtons');
let numberOfTasks = 0;
let tasksInList = 0;

const taskListButton = shadowRoot.getElementById('taskListButton');
const taskListImg = taskListButton.querySelector('img');
const addTasksButton = shadowRoot.getElementById('addTasksButton');
const addTasksImg = addTasksButton.querySelector('img');

let addedTaskListeners = false;
const addTaskMenu = shadowRoot.getElementById('addTaskMenu');
const taskListMenu = shadowRoot.getElementById('taskListMenu');
const viewAllTasksMenu = shadowRoot.getElementById('viewAllTasksMenu');
const allTasksButton = shadowRoot.getElementById('viewAllTasks'); // Corrected button reference

function getDomain(url) {
    const anchor = document.createElement('a');
    anchor.href = url;
    return anchor.hostname;
}

function getCurrentUrl() {
    return window.location.href;
}

function getCurrentDomain() {
    return getDomain(window.location.href);
}

function loadTasks() {
    chrome.storage.sync.get(['tasks'], (result) => {
        const tasks = result.tasks || [];
        numberOfTasks = tasks.length;
        const currentUrl = getCurrentUrl();
        const currentDomain = getCurrentDomain();
        
        tasks.forEach(task => {
            if (task.scope === 'all' || 
                (task.scope === 'domain' && task.domain === currentDomain) || 
                (task.scope === 'url' && task.url === currentUrl)) {
                addTaskToUI(task.text, task.id, task.scope);
            }
        });
    });
}

function addTaskToStorage(taskText, taskScope, callback) {
    chrome.storage.sync.get(['tasks'], (result) => {
        const tasks = result.tasks || [];
        const newTask = {
            text: taskText,
            scope: taskScope,
            url: getCurrentUrl(),
            domain: getCurrentDomain(),
            id: numberOfTasks
        };
        tasks.push(newTask);
        chrome.storage.sync.set({ tasks }, () => {
            console.log('Task stored:', newTask);
            if (typeof callback === 'function') {
                callback(); // Execute the callback function
            }
        });
    });
}

function removeTaskFromStorage(text) {
    tasksInList--;
    updateTaskNotifications();
    chrome.storage.sync.get(['tasks'], (result) => {
        let tasks = result.tasks || [];

        tasks = tasks.filter(task => !(task.text === text));

        // Reassign IDs sequentially
        tasks.forEach((task, index) => {
            task.id = index;
        });

        chrome.storage.sync.set({ tasks }, () => {
            console.log('Task removed and IDs reassigned for task:', text);
            numberOfTasks = tasks.length;
        });
    });
}


function updateTaskInStorage(oldText, newText) {
    chrome.storage.sync.get(['tasks'], (result) => {
        const tasks = result.tasks || [];
        const taskIndex = tasks.findIndex(task => task.text === oldText);
        if (taskIndex !== -1) {
            tasks[taskIndex].text = newText;
            chrome.storage.sync.set({ tasks }, () => {
                console.log('Task updated:', newText);
            });
        }
    });
}

function loadAllTasks() {
    chrome.storage.sync.get(['tasks'], (result) => {
        const tasks = result.tasks || [];
        console.log('Loading all tasks:', tasks); // Debug log

        //viewAllTasksMenu.innerHTML = '<p style="font-size: 27px;color:#EAEAEA;text-align: center; height: 9px"><strong>Saved Tasks</strong></p>';

        // Create a map to store tasks by domain
        const domainTasksMap = {};
        const allWebsitesTasks = [];

        tasks.forEach(task => {
            if (task.scope === 'all') {
                allWebsitesTasks.push(task);
            } else {
                const domain = task.domain || 'Others';
                if (!domainTasksMap[domain]) {
                    domainTasksMap[domain] = [];
                }
                domainTasksMap[domain].push(task);
            }
        });

        // Create a div for "All Websites" tasks
        if (allWebsitesTasks.length > 0) {
            const allWebsitesContainer = document.createElement('div');
            allWebsitesContainer.classList.add('domainContainer');

            // Create and append the title paragraph
            const allWebsitesTitle = document.createElement('p');
            allWebsitesTitle.textContent = 'All Websites';
            allWebsitesContainer.appendChild(allWebsitesTitle);

            viewAllTasksMenu.appendChild(allWebsitesContainer);

            allWebsitesTasks.forEach(task => {
                const taskItem = createTaskItem(task);
                allWebsitesContainer.appendChild(taskItem);
            });
        }

        // Create a div for each domain and append tasks
        for (const [domain, tasks] of Object.entries(domainTasksMap)) {
            const domainContainer = document.createElement('div');
            domainContainer.classList.add('domainContainer');


            // Create and append the domain paragraph
            const domainTitle = document.createElement('p');
            domainTitle.textContent = domain;
            domainContainer.appendChild(domainTitle);


            viewAllTasksMenu.appendChild(domainContainer);

            tasks.forEach(task => {
                const taskItem = createTaskItem(task);
                domainContainer.appendChild(taskItem);
            });
        }
    });
}

function createTaskItem(task) {
    const taskItem = document.createElement('div');
    taskItem.classList.add('taskItemAlpha');
    taskItem.dataset.id = task.id.toString();

    // Create the text area
    const taskInput = document.createElement('textarea');
    taskInput.value = task.text;
    taskInput.classList.add('taskInput');
    taskInput.style.height = shadowRoot.getElementById("addTaskBox").style.height;
    taskInput.style.verticalAlign = "top";

    taskInput.addEventListener('input', function() {
        if (this.scrollHeight <= 180) {
            this.style.height = '';
            this.style.height = this.scrollHeight + 'px';
        }
        const newText = this.value;
        updateTaskInStorage(task.text, newText);
        task.text = newText;
        syncTaskAcrossMenus(newText, task.id, viewAllTasksMenu, this.scrollHeight + 'px');
    });
    taskInput.addEventListener('click', function() {
        if (this.scrollHeight <= 180) {
            this.style.height = '';
            this.style.height = this.scrollHeight + 'px';
        } else {
            this.style.height = '184px';
        }
        const newText = this.value;
        syncTaskAcrossMenus(newText, task.id, viewAllTasksMenu, this.scrollHeight + 'px');
    });

    // Create a container for the buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('taskButtons');
    deleteButton.classList.add('show');
    deleteButton.title = 'Delete Task';

    const deleteText = document.createElement('span');
    deleteText.textContent = 'Delete';
    deleteText.style.marginRight = '2px';
    deleteText.style.fontWeight = 'bold';

    const deleteImage = document.createElement('img');
    deleteImage.src = chrome.runtime.getURL("images/deleteTask.svg");
    deleteImage.draggable = false;

    deleteButton.appendChild(deleteText);
    deleteButton.appendChild(deleteImage);

    deleteButton.addEventListener('click', function() {
        taskItem.remove();
        removeTaskFromStorage(task.text);
        taskListMenu.querySelectorAll('.taskItem').forEach(item => {
            if (item.dataset.id === taskItem.dataset.id) {
                item.remove();
            }
        });
    });

    // Create the go-to URL button
    const goToUrlButton = document.createElement('button');
    goToUrlButton.classList.add('taskButtons');
    goToUrlButton.classList.add('show');
    goToUrlButton.title = 'Go to URL';
    
    const linkText = document.createElement('span');
    linkText.textContent = 'Link';
    linkText.style.marginRight = '17px';
    linkText.style.fontWeight = 'bold';
    
    const linkImage = document.createElement('img');
    linkImage.src = chrome.runtime.getURL("images/goToLink.svg");
    linkImage.draggable = false;
    
    goToUrlButton.appendChild(linkText);
    goToUrlButton.appendChild(linkImage);

    goToUrlButton.addEventListener('click', function() {
        window.open(task.url, '_blank');
    });

    // Append buttons to the button container
    buttonContainer.appendChild(goToUrlButton);
    buttonContainer.appendChild(deleteButton);

    // Append the text area and button container to the task item
    taskItem.appendChild(taskInput);
    taskItem.appendChild(buttonContainer);

    return taskItem;
}


function addTaskToUI(taskText, id, taskScope) {
    tasksInList++;
    updateTaskNotifications();
    const taskItem = document.createElement('div');
    taskItem.classList.add('taskItem');
    taskItem.dataset.id = id.toString();

    // Create the task scope element
    const taskScopeElement = document.createElement('span');
    taskScopeElement.classList.add('taskScope');
    if (taskScope === 'url')
        taskScopeElement.textContent = "Source: This URL";
    else if (taskScope === 'domain')
        taskScopeElement.textContent = "Source: This Domain";
    else
        taskScopeElement.textContent = "Source: All Websites";

    // Create a container for the text area and delete button
    const taskContentContainer = document.createElement('div');
    taskContentContainer.style.display = 'flex';
    taskContentContainer.style.alignItems = 'flex-start';

    // Create the task input
    const taskInput = document.createElement('textarea');
    taskInput.value = taskText;
    //taskInput.style.width = '140px';
    taskInput.classList.add('taskInput');
    taskInput.style.height = shadowRoot.getElementById("addTaskBox").style.height;
   // taskInput.style.maxHeight = '184px';

    taskInput.addEventListener('input', function() {
        if (this.scrollHeight <= 180) {
            this.style.height = '';
            this.style.height = this.scrollHeight + 'px';
        }
        const newText = this.value;
        updateTaskInStorage(taskText, newText);
        taskText = newText;
        syncTaskAcrossMenus(newText, id, taskListMenu, this.scrollHeight + 'px');
    });
    taskInput.addEventListener('click', function() {
        if (this.scrollHeight <= 180) {
            this.style.height = '';
            this.style.height = this.scrollHeight + 'px';
        }
        else
            this.style.height = '184px'
        const newText = this.value;
        syncTaskAcrossMenus(newText, id, taskListMenu, this.scrollHeight + 'px');
    });

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('taskButtons');
    deleteButton.classList.add('show');
    deleteButton.title = 'Delete Task';
    // deleteButton.style.display = 'flex';
    // deleteButton.style.alignItems = 'center';
    // deleteButton.style.justifyContent = 'flex-start';
    // deleteButton.style.marginLeft = '8px';

    const deleteText = document.createElement('span');
    deleteText.textContent = 'Delete';
    // deleteText.style.marginRight = '8px';

    const deleteImage = document.createElement('img');
    deleteImage.src = chrome.runtime.getURL("images/deleteTask.svg");
    deleteImage.draggable = false;

    deleteButton.appendChild(deleteText);
    deleteButton.appendChild(deleteImage);

    deleteButton.addEventListener('click', function() {
        taskItem.remove();
        removeTaskFromStorage(taskText);
        viewAllTasksMenu.querySelectorAll('.taskItem').forEach(item => {
            if (item.dataset.id === taskItem.dataset.id) {
                item.remove();
            }
        });
    });

    // Append the text area and delete button to the container
    taskContentContainer.appendChild(taskInput);
    taskContentContainer.appendChild(deleteButton);

    // Append the scope element and content container to the task item
    taskItem.appendChild(taskScopeElement);
    taskItem.appendChild(taskContentContainer);

    // Append the task item to the task list menu
    taskListMenu.appendChild(taskItem);
}


function syncTaskAcrossMenus(newText, id, currentMenu, height) {
    const otherMenu = currentMenu === taskListMenu ? viewAllTasksMenu : taskListMenu;

    otherMenu.querySelectorAll('.taskItem').forEach(item => {
        const taskInput = item.querySelector('.taskInput');
        console.log("compared", id, ' to ', item.dataset.id);
        if (parseInt(item.dataset.id) === id) {
            taskInput.value = newText;
            taskInput.style.height = height;
            return; // Exit the loop early
        }
    });
}

taskListButton.addEventListener("click", function() {
    for (let button of taskButtons) {
        button.classList.add('show');
    }

    for (let button of MainButtons) {
        button.classList.toggle('show');
    }

    const backButton = shadowRoot.getElementById('backButtonTask');
    const addTaskCheckButton = shadowRoot.getElementById('addTaskCheck');

    function backButtonClickHandler() {
        for (let button of taskButtons) {
            button.classList.toggle('show');
        }
        
        for (let button of MainButtons) {
            button.classList.toggle('show');
        }

        for (let menu of menus) {
            menu.classList.remove('show');
        }
    }
    if (!addedTaskListeners)
        backButton.addEventListener('click', backButtonClickHandler);


    if (!addedTaskListeners) {
        addTasksButton.addEventListener('click', function() {
            viewAllTasksMenu.classList.remove('show');
            taskListMenu.classList.toggle('show');
            addTaskMenu.classList.toggle('show');
        });
    }


    if (!addedTaskListeners) {
        allTasksButton.addEventListener('click', function() {
            viewAllTasksMenu.classList.toggle('show');
            taskListMenu.classList.remove('show');
            addTaskMenu.classList.remove('show');
        });
    }

    if (!addedTaskListeners) {
        shadowRoot.getElementById("addTaskBox").addEventListener('input', function() {
            if (this.scrollHeight <= 180) {
                this.style.height = '';
                this.style.height = this.scrollHeight + 'px';
            }
        });
    }

    function addTaskCheckButtonClickHandler() {
        const taskText = shadowRoot.getElementById('addTaskBox').value.trim();
        const taskScope = shadowRoot.getElementById('taskScope').value;

        if (taskText) {
            numberOfTasks++;
            addTaskToStorage(taskText, taskScope, () => {
                loadAllTasks();
            });
            addTaskToUI(taskText, numberOfTasks, taskScope);

            shadowRoot.getElementById('addTaskBox').value = '';
            //shadowRoot.getElementById('addTaskBox').style.height = "35px";
        }
    }
    if (!addedTaskListeners)
        addTaskCheckButton.addEventListener('click', addTaskCheckButtonClickHandler);

    addedTaskListeners = true;
});
loadTasks(); // Load tasks when the menu is opened
loadAllTasks();
//End of Task List

//Beginning of Timers
const timerButtons = shadowRoot.querySelectorAll('.timerButtons');
const timerButton = shadowRoot.getElementById('timerButton');
const timerMenu = shadowRoot.getElementById('timerMenu');
const timeInput = shadowRoot.getElementById("timeFU");
const setTimerButton = shadowRoot.getElementById("setTimer");
const countdown = shadowRoot.getElementById("countdown");
const alarmSound = new Audio(chrome.runtime.getURL("alarm.wav"));
let timer;


let addedTListeners = false;
let addedTMenuListeners = false;

timerButton.addEventListener("click", function() {
    for (let button of timerButtons) {
        button.classList.toggle('show');
    }

    for (let button of MainButtons) {
        button.classList.toggle('show');
    }
   
    const backButton = shadowRoot.getElementById('backButtonT');
    const timerMenuButton = shadowRoot.getElementById('timerMenuButton');

    function backButtonClickHandler() {
        for (let button of timerButtons) {
            button.classList.toggle('show');
        }
        
        for (let button of MainButtons) {
            button.classList.toggle('show');
        }

        for (let menu of menus) {
            menu.classList.remove('show');
        }
    }
    if(!addedTListeners)
        backButton.addEventListener('click', backButtonClickHandler);
    
    function timerMenuButtonClickHandler() {
        timerMenu.classList.toggle('show');
        
        function setTimerButtonClickHandler() {
            const time = timeInput.value;
            if (time) {
                const [minutes, seconds] = time.split(":").map(Number);
                const totalSeconds = minutes * 60 + seconds;
                if (totalSeconds > 0) 
                    startTimer(totalSeconds);
            }
        }
        if(!addedTMenuListeners)
            setTimerButton.addEventListener('click', setTimerButtonClickHandler);

        function startTimer(totalSeconds) {
            clearInterval(timer);
            let remainingSeconds = totalSeconds;
            timer = setInterval(() => {
              if (remainingSeconds > 0) {
                const minutes = Math.floor(remainingSeconds / 60);
                const seconds = remainingSeconds % 60;
                countdown.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
                remainingSeconds--;
              }
              else {
                countdown.textContent = "Time's up!";
                clearInterval(timer);
                if (shadowRoot.getElementById("doSound").checked)
                    alarmSound.play();

                const messageElement = document.createElement("div");
                messageElement.classList.add("motivationalMessage");
                messageElement.textContent = "Your Timer Has Expired!";
                /* if(!doMWM)
                    messageElement.textContent = "Your Timer Has Expired!";
                else
                    messageElement.textContent = "Your Timer Has Expired!"; */
                const messageContainer = shadowRoot.getElementById('FocusUp');
                if (messageContainer)
                    messageContainer.appendChild(messageElement);
                setTimeout(() => {
                    messageContainer.removeChild(messageElement);
                }, 5000);
              }
            }, 1000);
        }

        addedTMenuListeners = true;
    }
    if(!addedTListeners)
        timerMenuButton.addEventListener('click', timerMenuButtonClickHandler);

    addedTListeners = true;    
});
//End of Timers
//-----------------------------------------------------------------------------------------------------------

//*************************************************************************************************************

// const bodyBackgroundColor = getComputedStyle(document.body).backgroundColor;

// // Function to invert the color
// function invertColor(hex) {
//     if (hex.indexOf('#') === 0) {
//         hex = hex.slice(1);
//     }
//     // Convert hex to RGB
//     const r = 255 - parseInt(hex.slice(0, 2), 16);
//     const g = 255 - parseInt(hex.slice(2, 4), 16);
//     const b = 255 - parseInt(hex.slice(4, 6), 16);
//     // Convert RGB back to hex
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// // Invert the background color
// const invertedColor = invertColor(bodyBackgroundColor);

// // Store the inverted color in a variable
// let invertedBackgroundColor = invertedColor;

// ^ something neat I thought of


const PBButtons = shadowRoot.querySelectorAll('.PBButtons');
const PBButton = shadowRoot.getElementById('PBButton');
let PBListenersAdded = false;

const startImage = shadowRoot.getElementById('start');
const endImage = shadowRoot.getElementById('end');
const progressBar = shadowRoot.getElementById('progress');
const progressBarContainer = shadowRoot.getElementById('progressContainer');
// progressBarContainer.style.backgroundColor = invertedBackgroundColor;
let startPosition = 0;
let endPosition = 0;

let endImageExists = false;
let startImageExists = false;

let timoutReached = false;
let milestoneReached = {
    25: false,
    50: false,
    75: false,
    100: false
};

function toggleProgressBar() {
    if (progressBarContainer.style.display === 'none') {
        progressBarContainer.style.display = 'flex';
    } else {
        progressBarContainer.style.display = 'none';
    }
}
toggleProgressBar();

PBButton.addEventListener('click', function () {
    for (let button of PBButtons) {
        button.classList.toggle('show');
    }

    for (let button of MainButtons) {
        button.classList.toggle('show');
    }

    const backButton = shadowRoot.getElementById('backButtonPB');
    const PBSelectStartEnd = shadowRoot.getElementById('PBSelectStartEnd');
    const PBReset = shadowRoot.getElementById('PBReset');
    const PBDelete = shadowRoot.getElementById('PBDelete');

    function backButtonClickHandler() {
        for (let button of PBButtons) {
            button.classList.toggle('show');
        }
        
        for (let button of MainButtons) {
            button.classList.toggle('show');
        }
        if(PBMenu.classList.contains('show')){
            PBMenu.classList.toggle('show');
        }
    }

    if (!PBListenersAdded) backButton.addEventListener('click', backButtonClickHandler);

    if (!PBListenersAdded) {
        PBSelectStartEnd.addEventListener('click', () => {
            //calculate the position of PBMenu relative to the toolbar
            const toolbarRect = toolbar.getBoundingClientRect();
            const PBMenuLeft = toolbarRect.left + toolbarRect.width + 10;
            const PBMenuTop = toolbarRect.top;

            //set the position of PBMenu
            PBMenu.style.left = PBMenuLeft + 'px';
            PBMenu.style.top = PBMenuTop + 'px';

            //show the PBMenu
            PBMenu.classList.toggle('show');
            setPosition();
            endImageExists = true;
            startImageExists = true;
            toggleProgressBar();

            // Delay progress calculation and update to allow time for interaction
            setTimeout(() => {
                timoutReached = false;
                updateProgressAfterInteraction();
            }, 12000); // Adjust timeout to wait 12 seconds before updating progress
        });
    }

    if (!PBListenersAdded) {
        PBReset.addEventListener('click', () => {
            milestoneReached = {
                25: false,
                50: false,
                75: false,
                100: false
            };

            //reset start and end images to their initial positions
            PBMenu.appendChild(startImage);
            PBMenu.appendChild(endImage);

            resetMarkers();
            resetProgressBar();
            endImageExists = true;
            startImageExists = true;
            setTimeout(() => {
                timoutReached = false;
                updateProgressAfterInteraction();
            }, 12000)
        });
    }

    if (!PBListenersAdded) {
        PBDelete.addEventListener('click', () => {
            document.body.removeChild(startImage);
            document.body.removeChild(endImage);

            // Reset progress bar
            resetProgressBar();

            // Reset positions and flags
            endImageExists = false;
            startImageExists = false;
            timoutReached = false;
            toggleProgressBar();
        });
    }

    PBListenersAdded = true;
});

function resetProgressBar() {
    const progressBar = shadowRoot.getElementById('progress');
    progressBar.style.height = '0';

    const progressText = shadowRoot.querySelector('.progressText');
    progressText.textContent = `0%`;


    milestoneReached = {
        25: false,
        50: false,
        75: false,
        100: false
    };
}

function setPosition() {
    const toolbarRect = toolbar.getBoundingClientRect();
    const padding = 20; // Padding from the toolbar
    const verticalSpacing = 50; // Vertical spacing between the start and end images

    // Position the start image to the left of the toolbar
    startImage.style.left = (toolbarRect.left - startImage.offsetWidth - padding) + 'px';
    startImage.style.top = (toolbarRect.top + padding) + 'px';

    // Position the end image to the left of the toolbar, below the start image
    endImage.style.left = (toolbarRect.left - endImage.offsetWidth - padding) + 'px';
    endImage.style.top = (toolbarRect.top + startImage.offsetHeight + verticalSpacing) + 'px';

    // Append the images to the body
    document.body.appendChild(startImage);
    document.body.appendChild(endImage);

    // Update startPosition and endPosition
    const startRect = startImage.getBoundingClientRect();
    const endRect = endImage.getBoundingClientRect();
    startPosition = startRect.top + window.scrollY;
    endPosition = endRect.top + window.scrollY;
}

function startDrag(e) {
    e.preventDefault();
    const element = e.target;
    let offsetX = e.clientX - element.offsetLeft;
    let offsetY = e.clientY - element.offsetTop;

    // Add wheel event listener for scrolling
    document.addEventListener('wheel', onScroll);

    function onDrag(e) {
        element.classList.add('cursor-follow');
        element.style.top = `${e.clientY - offsetY}px`;
        element.style.left = `${e.clientX - offsetX}px`;
    }

    function onScroll(e) {
        if (e.deltaY !== 0) {
            // deltaY positive means scrolling down, negative means scrolling up
            const scrollAmount = e.deltaY;
            element.style.top = `${element.offsetTop + scrollAmount}px`;

            // Update startPosition or endPosition accordingly
            if (element.id === 'start') {
                startPosition += scrollAmount;
            } else if (element.id === 'end') {
                endPosition += scrollAmount;
            }
        }
    }

    function stopDrag() {
        document.removeEventListener('mousemove', onDrag);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('wheel', onScroll);

        const rect = element.getBoundingClientRect();
        const x = rect.left + window.pageXOffset;
        const y = rect.top + window.pageYOffset;

        if (element.id === 'start') {
            startPosition = y;
            console.log(`Start image dropped at: x = ${x}, y = ${y}`);
        } else if (element.id === 'end') {
            endPosition = y;
            console.log(`End image dropped at: x = ${x}, y = ${y}`);
        }

        element.classList.remove('cursor-follow');
        document.body.appendChild(element); // Append the element to the body
        
        // Reset milestoneReached after interaction
        milestoneReached = {
            25: false,
            50: false,
            75: false,
            100: false
        };
    }

    // Add event listeners for dragging
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
}

startImage.addEventListener('mousedown', startDrag);
endImage.addEventListener('mousedown', startDrag);

window.addEventListener('scroll', () => {
    if (endImageExists || startImageExists) {
        const scrollPosition = window.scrollY;
        const progress = calculateProgress(scrollPosition, startPosition, endPosition);
        updateProgressBar(progress);
    } else {
        updateProgressBar(0);
    }
});

function updateProgressAfterInteraction() {
    timoutReached = true;
    updateProgressBar(progress);
}

function updatePositions() {
    startPosition = startImage.getBoundingClientRect().top + window.scrollY;
    endPosition = endImage.getBoundingClientRect().top + window.scrollY;
}

function resetMarkers() {
    timoutReached = false;
    setPosition();
}

function calculateProgress(scrollPosition, start, end) {
    if (start === 0 || end === 0) return 0; // or some default value
    const progress = (scrollPosition - start) / (end - start);
    return Math.min(progress * 100, 100); // Ensure progress doesn't exceed 100%
}


function determineScrollDirection() {
    if (window.scrollY > lastScrollY) {
        lastScrollY = window.scrollY;
        return 'down';
    } else if (window.scrollY < lastScrollY) {
        lastScrollY = window.scrollY;
        return 'up';
    }
}

function showMotivationalMessage(percentage, scrollDirection) {
    if (scrollDirection === 'up') {
        return; // Skip showing the message if scrolling up
    }

    let message = "";

    if (percentage >= 20 && percentage <= 30 && !milestoneReached[25]) {
        message = "You're making great progress! Keep it up!";
        milestoneReached[25] = true; // Mark this milestone as reached
    } else if (percentage >= 40 && percentage <= 60 && !milestoneReached[50]) {
        message = "Around halfway done! You're doing amazing!";
        milestoneReached[50] = true; // Mark this milestone as reached
    } else if (percentage >= 65 && percentage <= 90 && !milestoneReached[75]) {
        message = "You're almost done! Keep pushing forward!";
        milestoneReached[75] = true; // Mark this milestone as reached
    } else if (percentage === 100 && !milestoneReached[100]) {
        message = "Congratulations! You've reached 100% progress!";
        milestoneReached[100] = true; // Mark this milestone as reached
    } else {
        return; // Return if percentage is not a milestone or has already been reached
    }

    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add("motivationalMessage");

    document.body.appendChild(messageElement);

    setTimeout(() => {
        document.body.removeChild(messageElement);
    }, 3000); // Remove message after 3 seconds
}


function updateProgressBar(percentage) {
    if(timoutReached){
        if (endImageExists || startImageExists) {
            const progressBarHeight = 230; // Adjust this value to match the actual height of your progress bar container

            // Ensure percentage is within valid range [0, 100]
            percentage = Math.max(0, Math.min(percentage, 100));

            progressBar.style.height = `${percentage / 100 * progressBarHeight}px`; // Calculate height of progress bar

            const progressText = shadowRoot.querySelector('.progressText');
            progressText.textContent = `${Math.round(percentage)}%`;

            // Determine scroll direction
            const scrollDirection = determineScrollDirection();
            if(doMWM){
                showMotivationalMessage(percentage, scrollDirection);
            }
        }
    }
}

let lastScrollY = window.scrollY;

//*************************************************************************************************************

shadowRoot.getElementById("AGEButton").addEventListener("click", function() {
    const displayCircle = shadowRoot.getElementById("cursor-circle");

    //toggle the 'show' class to either display or hide the circle
    displayCircle.classList.toggle('hide');
    console.log('clicked');
});

//personalization Settings
const PSButton = shadowRoot.getElementById('PSButton');
const PSButtons = shadowRoot.querySelectorAll('.PSButtons');
let addedPSListeners = false;
let circleFlashInterval; //interval for flashing the cursor circle
const cursorColorInput = shadowRoot.getElementById('cursorColor');
const cursorCircle = shadowRoot.querySelector('.cursor-circle');
const flashFrequencyInput = shadowRoot.getElementById('flashFrequency');
let storedFrequency;
let storedColor;



//helper function to convert hexadecimal color to RGB format
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
}

//function to change cursor color and make the circle flash
function changeCursorColor(color) {
    clearInterval(circleFlashInterval); //clear previous interval
    let isVisible = true;
    circleFlashInterval = setInterval(() => {
        if (isVisible) {
            cursorCircle.style.backgroundColor = `rgba(${hexToRgb(color)}, 0.5)`; //change circle color with transparency
        } else {
            cursorCircle.style.backgroundColor = 'transparent'; //make circle transparent
        }
        isVisible = !isVisible; //foggle visibility
    }, storedFrequency * 1000); //convert seconds to milliseconds
}

//function to update the color of the cursor circle
function updateCursorColor(color) {
    cursorCircle.style.backgroundColor = `rgba(${hexToRgb(color)}, 0.5)`; //set circle color with transparency
    //update the circle color immediately after changing the color
    changeCursorColor(color);
}

//function to set up flashing with the current frequency
function setupFlashing() {
    let isVisible = true;
    clearInterval(circleFlashInterval); //clear previous interval
    circleFlashInterval = setInterval(() => {
        if (isVisible) {
            cursorCircle.style.backgroundColor = `rgba(${hexToRgb(storedColor)}, 0.5)`; //change circle color with transparency
        } else {
            cursorCircle.style.backgroundColor = 'transparent'; //make circle transparent
        }
        isVisible = !isVisible; //toggle visibility
    }, storedFrequency * 1000); //convert seconds to milliseconds
}


chrome.storage.sync.get(['flashFrequency', 'cursorColor'], (result) => {
    storedFrequency = result.flashFrequency;
    storedColor = result.cursorColor;
    if (storedFrequency) {
        console.log('Stored frequency:', storedFrequency);
        setupFlashing(); //call setupFlashing initially
    } else {
        console.log('Flash frequency not found in storage.');
        storedFrequency = 0.5;
        setupFlashing();
    }
    if (storedColor) {
        console.log('Stored color:', storedColor);
        updateCursorColor(storedColor);
    } else {
        console.log('Cursor color not found in storage.');
        storedColor = "#ff0000";
    }
});


//event listener for flash frequency input
flashFrequencyInput.addEventListener('change', () => {
    const newFrequency = parseFloat(flashFrequencyInput.value); //get the new frequency value
    if (isNaN(newFrequency) || newFrequency < 0 || newFrequency > 10) {
        flashFrequencyInput.value = '0.5'; //set default value if invalid
        return; //exit function if invalid value
    }
    //store the new frequency in Chrome storage
    chrome.storage.sync.set({ flashFrequency: newFrequency }, () => {
        console.log('New frequency stored:', newFrequency);
        storedFrequency = newFrequency;
        setupFlashing(); //call setupFlashing after changing the frequency
    });
});

const inactivityMessage = "The only way to finish is to keep working! Focus Up!";   
let inactivityTimer;
let inactivityTime;

chrome.storage.sync.get(["inactivityInterval"], (result) => {
    if (result.inactivityInterval !== undefined)
        inactivityTime = result.inactivityInterval;
    else
        inactivityTime = 999;
});

//function to reset the inactivity timer
function resetInactivityTimer() {
    clearTimeout(inactivityTimer); //clear previous timer
    inactivityTimer = setTimeout(() => {
        showInactivityMessage(inactivityMessage);
    }, inactivityTime * 60 * 1000); //convert minutes to milliseconds }, inactivityDurationInput.value * 60 * 1000);
}


//event listener for mousemove to detect activity and position the cursor circle
document.addEventListener('mousemove', (e) => {
    resetInactivityTimer(); //reset the inactivity timer on mousemove
    const circleSize = 30; //size of the circle
    cursorCircle.style.left = `${e.clientX - circleSize / 2}px`; //adjust position to center the circle horizontally
    cursorCircle.style.top = `${e.clientY - circleSize / 2}px`; //adjust position to center the circle vertically

});

//function to show inactivity message
function showInactivityMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.style.visibility = 'hidden';
    messageElement.textContent = message;
    messageElement.classList.add("inactivityMessage");
    const messageContainer = shadowRoot.getElementById('FocusUp');
        if (messageContainer)
            messageContainer.appendChild(messageElement);
    
    let isVisible = true;
    const flashInterval = setInterval(() => {
        if (isVisible) {
            messageElement.style.visibility = 'hidden';
        } else {
            messageElement.style.visibility = 'visible';
        }
        isVisible = !isVisible;
    }, 500); //flash every 500 milliseconds


    //function to stop flashing and remove the message on mousemove
    const stopFlashing = () => {
        clearInterval(flashInterval);
        messageContainer.removeChild(messageElement);
        document.removeEventListener('mousemove', stopFlashing);
    };

    //event listener to stop flashing and remove message on mousemove
    document.addEventListener('mousemove', stopFlashing);
}

PSButton.addEventListener('click', () => {
    for (let button of PSButtons) {
        button.classList.toggle('show');
    }

    for (let button of MainButtons) {
        button.classList.toggle('show');
    }

    const backButton = shadowRoot.getElementById('backButtonPS');
    const defaultConversionButton = shadowRoot.getElementById('defaultConversionButton');
    const AGESettingsButton = shadowRoot.getElementById('AGESettingsButton');
    const toggleMWMButton = shadowRoot.getElementById('MWM');

    if(!addedPSListeners){
        backButton.addEventListener('click', () => {
            for (let button of PSButtons) {
                button.classList.toggle('show');
            }
            
            for (let button of MainButtons) {
                button.classList.toggle('show');
            }

            for (let menu of menus) {
                menu.classList.remove('show');
            }
        });
      
        function updateChromeStorage() {
            //get references to each HTML input/select element
            const fontSizeSelector = shadowRoot.getElementById('defaultFontSize');
            const fontColorSelector = shadowRoot.getElementById('defaultFontColor');
            const backColorSelector = shadowRoot.getElementById('defaultBackColor');
            const typefaceSelector = shadowRoot.getElementById('defaultTypeface');

            //get the values from the input/select elements
            const defaultFontSize = fontSizeSelector.value;
            const defaultFontColor = fontColorSelector.value;
            const defaultBackColor = backColorSelector.value;
            const defaultTypeface = typefaceSelector.value;

            //store the values in Chrome storage
            chrome.storage.sync.set({
                defaultFontSize: defaultFontSize,
                defaultFontColor: defaultFontColor,
                defaultBackColor: defaultBackColor,
                defaultTypeface: defaultTypeface
            });
        }

        //attach change event listeners to HTML input/select elements
        shadowRoot.getElementById('defaultFontSize').addEventListener('change', updateChromeStorage);
        shadowRoot.getElementById('defaultFontColor').addEventListener('change', updateChromeStorage);
        shadowRoot.getElementById('defaultBackColor').addEventListener('change', updateChromeStorage);
        shadowRoot.getElementById('defaultTypeface').addEventListener('change', updateChromeStorage);

        
        chrome.storage.sync.get(["defaultFontSize", "defaultFontColor", "defaultBackColor", "defaultTypeface"], (result) => {
            const defaultFontSize = result.defaultFontSize + 'px';
            const defaultFontColor = result.defaultFontColor;
            const backColor = result.defaultBackColor;
            const typeface = result.defaultTypeface;

            shadowRoot.getElementById('defaultFontSize').value = defaultFontSize;
            shadowRoot.getElementById('defaultFontColor').value = defaultFontColor;
            shadowRoot.getElementById('defaultBackColor').value = backColor;
            shadowRoot.getElementById('defaultTypeface').value = typeface;
        });
        //event listener for the defaultConversionButton
        defaultConversionButton.addEventListener('click', () => {
            PSFontMenu.classList.toggle('show');
            PSAGEMenu.classList.remove('show');
            
            //call updateChromeStorage to ensure the latest values are stored before toggling the menu
            //updateChromeStorage();
        });

   
       AGESettingsButton.addEventListener('click', () => {
            PSAGEMenu.classList.toggle('show');
            PSFontMenu.classList.remove('show');
            
            const inactivityDurationInput = shadowRoot.getElementById('inactivityDuration');
            //event listener for flash frequency input
            flashFrequencyInput.addEventListener('change', () => {
                const newFrequency = parseFloat(flashFrequencyInput.value); //get the new frequency value
                if (isNaN(newFrequency) || newFrequency < 0 || newFrequency > 10) {
                    flashFrequencyInput.value = '0.5'; //set default value if invalid
                    return; //exit function if invalid value
                }
                //store the new frequency in Chrome storage
                chrome.storage.sync.set({ flashFrequency: newFrequency }, () => {
                    console.log('New frequency stored:', newFrequency);
                });
                 storedFrequency = newFrequency;

                 setupFlashing();
            });
        
            //event listener for inactivity duration input
            inactivityDurationInput.addEventListener('change', () => {
                const newInterval = parseInt(inactivityDurationInput.value); //get the new interval value
                if (isNaN(newInterval) || newInterval < 1 || newInterval > 20) {
                    inactivityDurationInput.value = '10'; //set default value if invalid
                    return; //exit function if invalid value
                }
                inactivityTime = inactivityDurationInput.value;
                resetInactivityTimer(); //reset the inactivity timer on input change
                //store the new interval in Chrome storage
                chrome.storage.sync.set({ inactivityInterval: newInterval }, () => {
                    console.log('New inactivity detection interval stored:', newInterval);
                });
            });
                
            //event listener for cursor color input
            cursorColorInput.addEventListener('input', () => {
                const newColor = cursorColorInput.value; //get the new color value
                updateCursorColor(newColor); //update circle color immediately
                //store the new color in Chrome storage
                chrome.storage.sync.set({ cursorColor: newColor }, () => {
                    console.log('New color stored:', newColor);
                });
                storedColor = newColor;
            });
        });
      
        toggleMWMButton.addEventListener('click', () => {
            doMWM = !doMWM;
        
            const MWMStateDiv = shadowRoot.getElementById('MWMState');
            MWMStateDiv.textContent = doMWM ? 'MWM is ON' : 'MWM is OFF';
        
            MWMStateDiv.classList.add("show");
            setTimeout(() => {
                MWMStateDiv.classList.remove("show");
            }, 2000);
        
            chrome.storage.sync.set({ doMWM: doMWM });
        });
    }

    addedPSListeners = true;
});

const fidgetContainer = shadowRoot.getElementById('fidgetContainer');
const moveFidget = shadowRoot.getElementById('moveFidget');
const toggleFidgetButton = shadowRoot.getElementById('toggleFidgetButton');

let isDraggingFD = false;
let offsetXFD = 0;
let offsetYFD = 0;
let fidgetWidth = 0;
let fidgetHeight = 0;

// Set initial position of fidget container to center of viewport
const initialLeft = (window.innerWidth - fidgetContainer.offsetWidth) / 2;
const initialTop = (window.innerHeight - fidgetContainer.offsetHeight) / 2;
fidgetContainer.style.left = initialLeft + 'px';
fidgetContainer.style.top = initialTop + 'px';

// Get the dimensions of the fidget tool image
moveFidget.onload = () => {
    fidgetWidth = moveFidget.offsetWidth;
    fidgetHeight = moveFidget.offsetHeight;
};

fidgetContainer.addEventListener('mousedown', (e) => {
    isDraggingFD = true;
    offsetXFD = fidgetWidth / 2; // Adjust offset based on image center
    offsetYFD = fidgetHeight / 2; // Adjust offset based on image center
});

document.addEventListener('mousemove', (e) => {
    if (isDraggingFD) {
        fidgetContainer.style.left = e.clientX - offsetXFD + 'px';
        fidgetContainer.style.top = e.clientY - offsetYFD + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDraggingFD = false;
});

toggleFidgetButton.addEventListener('click', () => {
    fidgetContainer.style.display = fidgetContainer.style.display === 'none' ? 'block' : 'none';
});


const FDButton = shadowRoot.getElementById('FDButton');
const FDButtons = shadowRoot.querySelectorAll('.FDButtons');
let FDListenersAdded = false;
let FDTempFlag = false;

let rotationAngle = 0; // Initial rotation angle

let scrollVelocity = 0; // Initial scroll velocity
const decelerationFactor = 0.9; // Adjust deceleration factor for smoother deceleration

document.addEventListener('wheel', (event) => {
    const rect = moveFidget.getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;

    if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        console.log('trying to move');
        event.preventDefault(); // Prevent default scrolling behavior

        // Calculate the new scroll velocity based on the scroll delta
        const scrollDelta = event.deltaY;
        scrollVelocity += scrollDelta;

        // Update the rotation angle based on the scroll velocity
        rotationAngle += scrollVelocity;
        moveFidget.style.transform = `rotate(${rotationAngle}deg)`;

        // Apply deceleration to the scroll velocity
        scrollVelocity *= decelerationFactor;

        // Smooth out rotation animation using requestAnimationFrame
        requestAnimationFrame(() => {
            moveFidget.style.transition = 'transform 0.2s ease-in-out'; // Adjust transition as needed
            moveFidget.style.transform = `rotate(${rotationAngle}deg)`;
        });
    }
}, { passive: false }); // Specify that the event listener is not passive



FDButton.addEventListener('click', () => {
    for (let button of FDButtons) {
        button.classList.toggle('show');
    }

    for (let button of MainButtons) {
        button.classList.toggle('show');
    }

    const backButton = shadowRoot.getElementById('backButtonFD');
    const FDMenuButton = shadowRoot.getElementById('FDMenuStart')
    const FDDelete = shadowRoot.getElementById('FDDelete');
    function backButtonClickHandler() {
        for (let button of FDButtons) {
            button.classList.toggle('show');
        }
        
        for (let button of MainButtons) {
            button.classList.toggle('show');
        }
        if(FDMenu.classList.contains('show')){
            FDMenu.classList.toggle('show');
        }

        if(FDMenu.classList.contains('show')){
            FDMenu.classList.toggle('show');
        }
    }
    if(!FDListenersAdded)
        backButton.addEventListener('click', backButtonClickHandler);


    if(!FDListenersAdded)
        FDMenuButton.addEventListener('click', () => {
        //calculate the position of PBMenu relative to the toolbar
        const toolbarRect = toolbar.getBoundingClientRect();
        const FDMenuWidth = FDMenu.offsetWidth;
        const FDMenuHeight = FDMenu.offsetHeight;
        
        const FDMenuLeft = toolbarRect.left + toolbarRect.width + 10;
        const FDMenuTop = toolbarRect.top;

        //set the position of FDMenu
        FDMenu.style.left = FDMenuLeft + 'px';
        FDMenu.style.top = FDMenuTop + 'px';

        //show the PBMenu
        FDMenu.classList.toggle('show');

        });

        if (!FDListenersAdded) {
            FDDelete.addEventListener('click', () => {
                const moveFidget = shadowRoot.getElementById('moveFidget');
        
                // Reset the position of the fidget container to the center of the page
                const initialLeft = (window.innerWidth - moveFidget.offsetWidth) / 2;
                const initialTop = (window.innerHeight - moveFidget.offsetHeight) / 2;
                fidgetContainer.style.left = initialLeft + 'px';
                fidgetContainer.style.top = initialTop + 'px';
        
                // Reset any other state or variables as needed
                isDraggingFD = false; // Reset the dragging state
    
                // Optional: If you want to remove the dragging class, do it here
                moveFidget.classList.remove('dragging');
        
                // Optional: If you want to reset any other elements or state, do it here
            });
        }

        FDListenersAdded = true;
});