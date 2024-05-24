
//Injection
//<img src="${chrome.runtime.getURL("images/fontAlteration.svg")}">
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
        <button class="taskButtons" title="Add Task" id="addTaskButton">
            <img src="${chrome.runtime.getURL("images/addTask.svg")}" draggable = "false">
            <span class="buttonText">Add Task</span>
        </button>
        <button class="taskButtons" title="View Tasks" id="viewTasksButton">
            <img src="${chrome.runtime.getURL("images/viewTasks.svg")}" draggable = "false">
            <span class="buttonText">View Tasks</span>
        </button>



        <button class="backButtons timerButtons" title="Back" id="backButtonT">
            <img src="${chrome.runtime.getURL("images/back.svg")}" draggable = "false">
            <span class="buttonText">Back</span>
        </button>
        <button class="timerButtons" title="Timer Menu" id="timerMenuButton">
            <img src="${chrome.runtime.getURL("images/timer.svg")}" draggable = "false">
            <span class="buttonText">Timer Menu</span>
        </button>



		<button class="backButtons PBButtons" title = "Back" id="backButtonPB">
      		<img src="${chrome.runtime.getURL("images/back.svg")}" draggable = "false">
            <span class="buttonText">Back</span>
        </button>
        <button class = "PBButtons" title = "Add Flags" id = "PBSelectStartEnd">
            <img src="${chrome.runtime.getURL("images/StartEnd.svg")}" draggable = "false">
            <span class="buttonText">Add Flags</span>
        </button>
        <button class = "PBButtons" title = "Delete Flags" id = "PBDelete">
            <img src="${chrome.runtime.getURL("images/trashIcon.svg")}" draggable = "false">
            <span class="buttonText">Delete Flags</span>
        </button>
        <div id="progressBar" class="progressBar">
            <div class="progressBarPadText">Progress Bar</div>
            <div id="progress" class="progress"></div>
            <div id="progressText" class="progressText">0%</div>
            <div class="progressRect"></div>
        </div>



		<div class="PBPopUp" id="PBMenu">
            <p class="popUpText">Please select a starting area to track your progress by dragging and dropping the <span class="highlightText">start</span> image on the page.</p>
            <p class="popUpText"  style="text-align: center;"><strong><span class="alternativeText">OR</span></strong></p>
            <p class="popUpText">Please select a starting and ending area to track your progress by dragging and dropping the <span class="highlightText">end</span> and <span class="highlightText">start</span> images on the page.</p>
            <img id="start" src="${chrome.runtime.getURL("images/Start.svg")}" draggable="true">
            <img id="end" src="${chrome.runtime.getURL("images/End.svg")}" draggable="true">
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
        </select>
        <button style="margin-top:5px" id="originalTypeface">
            Original Typeface
        </button>
    </div>

    <div class="menu" id="addTaskMenu">
        <p style="font-size: 15px; color:#EAEAEA;"><strong>Add Task</strong></p>
        <button class="taskButtons" title="Add Task" id="addTaskCheck">
            <img src="${chrome.runtime.getURL("images/addTaskCheck.svg")}" draggable = "false">
        </button>
        <textarea id="addTaskBox" placeholder="Write your task here..."></textarea>
    </div>
    <div class="menu" id="taskListMenu" style="overflow: auto;">
        <p style="font-size: 15px; color:#EAEAEA;"><strong>Task List</strong></p>

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
        <input type="number" id="defaultFontSize" name="defaultFontSize">

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
  

    <div id="fidgetContainer" class = "fidgetContainer" style="position: fixed; left: 0; top: 0; transform: translate(-50%, -50%); pointer-events: none; display: none;">
        <img id="moveFidget" src="${chrome.runtime.getURL("images/moveFidget.svg")}" draggable="true" style="pointer-events: all;">
    </div>

`;
document.body.insertAdjacentHTML('afterbegin', MainHTML);
//End of Injection

//Toolbar
const toolbar = document.getElementById('toolbarMain');
const MainButtons = document.getElementsByClassName('mainButtons');
const menus = document.getElementsByClassName('menu');
const fontAlterationMenu = document.getElementById('fontAlterationMenu');
const PSFontMenu = document.getElementById('PSFontMenu');
const PSAGEMenu = document.getElementById('PSAGEMenu');
const FDMenu = document.getElementById('FDMenu');
const collapseButton = document.getElementById('collapse');
const allButtons = document.querySelectorAll('.toolbar button');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
let isDragging = false;
let offsetX, offsetY;
const PBMenu = document.getElementById('PBMenu');
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
    FDMenu.style.left = result.FDMenuLeftStyle || '';
    FDMenu.style.top = result.FDMenuTopStyle || '';
    doMWM = result.doMWM;
});

/*this makes the circle invisible at first, kinda fixes it */
const tempDisplayCircle = document.getElementById("cursor-circle");

//toggle the 'show' class to either display or hide the circle
tempDisplayCircle.classList.toggle('hide');


let isCollapsed = true;
collapseButton.addEventListener('click', () => {
    if(isCollapsed){
        for (let button of MainButtons) {
            button.classList.add('show');
        }
        progressBar.style.display = 'none';
    }
    else {
        for (let button of allButtons) {
            button.classList.remove('show');
        }

        for (let menu of menus) {
            menu.classList.remove('show');
        }
        FDMenu.classList.remove('show');
        PBMenu.classList.remove('show'); //may cause error FIXME
        progressText.classList.remove('show');//hide the progress text
        progressBar.style.display = 'none';
    }

    toolbar.style.height = isCollapsed ? "655px" : "105px";
    isCollapsed = !isCollapsed;
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

function resetToolbarPosition() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    toolbar.style.left = (windowWidth - toolbar.offsetWidth) / 2 + 'px';
    toolbar.style.top = (windowHeight - toolbar.offsetHeight) / 2 + 'px';
}


document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;
      
      	const isToolbarOffScreen = newX < 0 || newX + toolbar.offsetWidth > window.innerWidth || newY < 0 || newY + toolbar.offsetHeight > window.innerHeight;
        const isFontMenuOffScreen = isMenuOffScreen(fontAlterationMenu);
        const isPSFontMenuOffScreen = isMenuOffScreen(PSFontMenu);
        const isPSAGEMenuOffScreen = isMenuOffScreen(PSAGEMenu);
        const isPBMenuOffScreen = isMenuOffScreen(PBMenu);
        const isFDMenuOffScreen = isMenuOffScreen(FDMenu);
      	const isAddTaskMenuOffScreen = isMenuOffScreen(addTaskMenu);
        const isTaskListMenuOffScreen = isMenuOffScreen(taskListMenu);

      
      	if (isToolbarOffScreen || isFontMenuOffScreen || isPSFontMenuOffScreen || isPSAGEMenuOffScreen || isPBMenuOffScreen || isFDMenuOffScreen || isAddTaskMenuOffScreen || isTaskListMenuOffScreen) {
            resetToolbarPosition();
        } else {
            toolbar.style.left = newX + 'px';
            toolbar.style.top = newY + 'px';
        }
        
        toolbarLeft = toolbar.getBoundingClientRect().left;
        toolbarTop = toolbar.getBoundingClientRect().top;
        
        fontAlterationMenu.style.left = toolbarLeft + toolbar.offsetWidth + 10 + 'px';
        fontAlterationMenu.style.top = toolbarTop + 'px';
        PSFontMenu.style.left = toolbarLeft + toolbar.offsetWidth + 10 + 'px';
        PSFontMenu.style.top = toolbarTop + 'px';
        PSAGEMenu.style.left = toolbarLeft + toolbar.offsetWidth + 10 + 'px';
        PSAGEMenu.style.top = toolbarTop + 'px';
        PBMenu.style.left = toolbarLeft + toolbar.offsetWidth + 10 + 'px';
        PBMenu.style.top = toolbarTop + 'px';
        timerMenu.style.left = toolbarLeft + toolbar.offsetWidth + 10 + 'px';
        timerMenu.style.top = toolbarTop + 'px';
        addTaskMenu.style.left = toolbarLeft + toolbar.offsetWidth + 10 + 'px';
        addTaskMenu.style.top = toolbarTop + 'px';
        taskListMenu.style.left = toolbarLeft + toolbar.offsetWidth + 10 + 'px';
        taskListMenu.style.top = toolbarTop + 'px';
      	FDMenu.style.left = toolbarLeft + toolbar.offsetWidth + 10 + 'px';
        FDMenu.style.top = toolbarTop + 'px';
    }
      const circleSize = 30; //size of the circle
      tempDisplayCircle.style.left = `${e.clientX - circleSize / 2}px`; //ajust position to center the circle horizontally
      tempDisplayCircle.style.top = `${e.clientY - circleSize / 2}px`; //adjust position to center the circle vertically
});

function isMenuOffScreen(menu) {
    const menuRect = menu.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    return menuRect.left < 0 || menuRect.right > windowWidth || menuRect.top < 0 || menuRect.bottom > windowHeight;
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
const fontAlterationButtons = document.getElementsByClassName('fontAlterationButtons');
const fontAlterationButton = document.getElementById('fontAlterationButton');

let bionicModeActive = false;
let addedFAListeners = false;
let addedFAMenuListeners = false;

let originalFontSize;
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


let originalBackgroundColor;
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


let orignalTypeface;
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
   
    const backButton = document.getElementById('backButtonFA');
    const fontConversionButton = document.getElementById('fontConversionButton');
    const bionicModeButton = document.getElementById('bionicButton');
    const toDefaultButton = document.getElementById('toDefaultButton');

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

        const increaseFontButton = document.getElementById('increaseFont');
        const decreaseFontButton = document.getElementById('decreaseFont');
        const fontColorInput = document.getElementById('fontColor');
        const backgroundColorInput = document.getElementById('backColor');
        const originalBColorButton = document.getElementById('originalBColor');
        const originalFColorButton = document.getElementById('originalFColor');
        const originalSizeButton = document.getElementById('originalSize');
        const fontSelector = document.getElementById('typeface');
        const originalTypefaceButton = document.getElementById('originalTypeface');

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
                        if(element.hasAttribute('data-original-font-size')) {
                            const originalFontSize = parseFloat(element.dataset.originalFontSize);
                            element.style.fontSize = `${originalFontSize}px`;
                        }
                        else {
                            const originalFontSize = element.getAttribute('data-original-font-size');
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
        
            words.forEach(word => {
                const halfLength = Math.ceil(word.length / 2);
                const firstHalf = word.substring(0, halfLength);
                const secondHalf = word.substring(halfLength);
                const span = document.createElement('span');
                span.innerHTML = `<b>${firstHalf}</b>${secondHalf}`;
                if (bionicModeActive) {
                    const originalFontColor = window.getComputedStyle(textNode.parentNode).color;
                    const originalBackColor = window.getComputedStyle(textNode.parentNode).backgroundColor;
                    const originalFontSize = window.getComputedStyle(textNode.parentNode).fontSize;
                    const originalTypeface = window.getComputedStyle(textNode.parentNode).fontFamily;
                    span.style.color = originalFontColor;
                    span.style.backgroundColor = originalBackColor;
                    span.style.fontSize = `${originalFontSize}px`;
                    span.style.fontFamily = originalTypeface;
                    span.classList.add('bold-first-half');
                    span.dataset.originalFontColor = originalFontColor;
                    span.dataset.originalBackgroundColor = originalBackColor;
                    span.dataset.originalFontSize = originalFontSize;
                    span.dataset.originalTypeface = originalTypeface;
                }
                formattedText += span.outerHTML + ' ';
            });
        
            const tempSpan = document.createElement('span');
            tempSpan.innerHTML = formattedText.trim();
        
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
const taskButtons = document.getElementsByClassName('taskButtons');

let addedTaskListeners = false;
let addedTaskMenuListeners = false;
const addTaskMenu = document.getElementById('addTaskMenu');
const taskListMenu = document.getElementById('taskListMenu');

document.getElementById("taskListButton").addEventListener("click", function() {
    for (let button of taskButtons) {
        button.classList.add('show');
    }

    for (let button of MainButtons) {
        button.classList.toggle('show');
    }

    const backButton = document.getElementById('backButtonTask');
    const addTaskButton = document.getElementById('addTaskButton');
    const viewTasksButton = document.getElementById('viewTasksButton');
    const addTaskCheckButton = document.getElementById('addTaskCheck');


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
    if(!addedTaskListeners)
        backButton.addEventListener('click', backButtonClickHandler);

    if(!addedTaskListeners){
        document.getElementById("addTaskBox").addEventListener('input', function() {
            if(this.scrollHeight <= 180){
                this.style.height = ''; 
                this.style.height = this.scrollHeight + 'px'; 
            }
        });
    }

    function addTaskButtonClickHandler(){
        addTaskMenu.classList.toggle('show');
        taskListMenu.classList.remove('show');
    }
    if(!addedTaskListeners)
        addTaskButton.addEventListener('click', addTaskButtonClickHandler);

    function addTaskCheckButtonClickHandler() {
        const taskText = document.getElementById('addTaskBox').value.trim();

        if (taskText) {
            const taskItem = document.createElement('div');
            taskItem.classList.add('taskItem');

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('taskButtons');
            deleteButton.classList.add('show');
            deleteButton.title = 'Delete Task';
            deleteButton.innerHTML = '<img src="' + chrome.runtime.getURL("images/deleteTask.svg") + '" draggable = "false">';

            deleteButton.addEventListener('click', function() {
                taskItem.remove();
            });

            const taskInput = document.createElement('textarea');
            taskInput.value = taskText;
            taskInput.style.width = '140px'; 
            taskInput.classList.add('taskInput');
            taskInput.style.height = document.getElementById("addTaskBox").style.height;

            taskInput.addEventListener('input', function() {
                if(this.scrollHeight <= 180){
                    this.style.height = ''; 
                    this.style.height = this.scrollHeight + 'px'; 
                }
            });

            taskItem.appendChild(deleteButton);
            taskItem.appendChild(taskInput);


            document.getElementById('taskListMenu').appendChild(taskItem);

            document.getElementById('addTaskBox').value = '';
            document.getElementById('addTaskBox').style.height = "35px"
        }
    }
    if(!addedTaskListeners)
        addTaskCheckButton.addEventListener('click', addTaskCheckButtonClickHandler);

    function viewTasksButtonClickHandler(){
        taskListMenu.classList.toggle('show');
        addTaskMenu.classList.remove('show');
    }
    if(!addedTaskListeners)
        viewTasksButton.addEventListener('click', viewTasksButtonClickHandler);

    addedTaskListeners = true;
});
//End of Task List

//Beginning of Timers
const timerButtons = document.getElementsByClassName('timerButtons');
const timerButton = document.getElementById('timerButton');
const timerMenu = document.getElementById('timerMenu');
const timeInput = document.getElementById("timeFU");
const setTimerButton = document.getElementById("setTimer");
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
   
    const backButton = document.getElementById('backButtonT');
    const timerMenuButton = document.getElementById('timerMenuButton');

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
                if (document.getElementById("doSound").checked)
                    alarmSound.play();

                const messageElement = document.createElement("div");
                messageElement.classList.add("motivationalMessage");
                messageElement.textContent = "Your Timer Has Expired!";
                /* if(!doMWM)
                    messageElement.textContent = "Your Timer Has Expired!";
                else
                    messageElement.textContent = "Your Timer Has Expired!"; */

                document.body.appendChild(messageElement);
            
                setTimeout(() => {
                    document.body.removeChild(messageElement);
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


//Progress Bar-----------------------------------------------------------------------------------------------------------
let draggedElement = null;
let isDraggingToolBar = false;
document.addEventListener('dragstart', (event) => {
    if (event.target.id === 'start' || event.target.id === 'end') {
        draggedElement = event.target;
        event.target.classList.add('dragging');
    }
});

document.addEventListener('dragenter', (event) => {
    if (event.target.id === 'start' || event.target.id === 'end') {
        return;
    }
    return false;
});

document.addEventListener('dragover', (event) => {
    if (event.target.id === 'start' || event.target.id === 'end') {
        return;
    }
    event.preventDefault();
    return false;
});

document.addEventListener('dragleave', (event) => {
    if (event.target.id === 'start' || event.target.id === 'end') {
        return;
    }
    return false;
});

document.addEventListener('drag', (event) => {
    if (toolbar.classList.contains('dragging')) {
        event.preventDefault();
        return false;
    }
});

let milestoneReached = {
    25: false,
    50: false,
    75: false,
    100: false
};
let endImageExists = false;
let startImageExists = false;
let shouldUpdateProgress = true;

document.addEventListener('drop', (event) => {
    if (event.target.id === 'start' || event.target.id === 'end') {
        return;
    }

    if (draggedElement) {
        event.target.appendChild(draggedElement);
        draggedElement.classList.remove('dragging');
        draggedElement = null;

        //check if both start and end images exist
        if (document.getElementById('start') && document.getElementById('end')) {
            endImageExists = true;
            startImageExists = true;
        }
    }

    event.preventDefault();
    milestoneReached = {
        25: false,
        50: false,
        75: false,
        100: false
    };

    return false;
});


//function to determine scroll direction
let lastScrollTop = 0;
let scrollDirection = '';

window.addEventListener('scroll', () => {

    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        scrollDirection = 'down';
    } else {
        scrollDirection = 'up';
    }
    lastScrollTop = st <= 0 ? 0 : st; //for Mobile or negative scrolling


    const startImage = document.getElementById('start');
    const endImage = document.getElementById('end');
    
    //get the positions of start and end icons relative to the viewport
    const startImageTop = startImage.getBoundingClientRect().top;
    const endImageTop = endImage.getBoundingClientRect().top;
    
    //calculate the distance between start and end icons
    const distanceBetweenImages = endImageTop - startImageTop;
    
    //calculate the distance between start icon and the top of viewport
    const distanceToStart = startImageTop;
    
    //calculate the remaining distance from top of viewport to end icon
    const remainingDistance = Math.abs(distanceBetweenImages - distanceToStart);
    
    //calculate progress based on the ratio of remaining distance to total distance
    let progress = 0;
    if (distanceToStart >= 0) {
        progress = 0; //user's mid-section is above the start image, set progress to 0%
    } else {
        progress = Math.abs(1 - (remainingDistance / distanceBetweenImages));
        previousProgress = progress
    }

    //update the progress bar
    if (endImageExists && startImageExists) {
        updateProgressBar(progress); 
    } else {
        updateProgressBar(0);
    }
});

function updateProgressBar(progress) {
    const progressBar = document.getElementById("progress");
    progressBar.style.height = `${Math.min(progress, 1) * 100}%`; //limit progress to maximum of 100%

    const percentage = Math.round(Math.min(progress, 1) * 100); //limit progress to maximum of 100%

    progressText.textContent = `${percentage}%`;

    if (percentage === 25 || percentage === 50 || percentage === 75 || percentage === 100) {
        //check if progress is increasing
        if (progress >= previousProgress  && doMWM) {
            showMotivationalMessage(percentage);
        }
        //update previousProgress to current progress
        previousProgress = progress;
    } else if (percentage < 0 || percentage > 100) {
        showMotivationalMessage(percentage);
    }
}

//modified function to show motivational message based on scroll direction
function showMotivationalMessage(percentage) {
    if (milestoneReached[percentage] || scrollDirection === 'up') {
        return; //skip showing the message if this milestone has already been reached or scrolling up
    }

    let message = "";

    if (percentage == 25) {
        message = "You're making great progress! Keep it up!";
    } else if (percentage == 50) {
        message = "Halfway there! You're doing amazing!";
    } else if (percentage == 75) {
        message = "You're almost done! Keep pushing forward!";
    } else if (percentage == 100) {
        message = "Congratulations! You've reached 100% progress!";
    } else if (percentage < 0 || percentage > 100) {
        return;
    }

    milestoneReached[percentage] = true; //mark this milestone as reached

    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add("motivationalMessage");

    document.body.appendChild(messageElement);

    setTimeout(() => {
        document.body.removeChild(messageElement);
    }, 3000);
}
//-----------------------------------------------------------------------------------------------------------

//*************************************************************************************************************
const PBButtons = document.getElementsByClassName('PBButtons');
const PBButton = document.getElementById('PBButton');
progressText.classList.toggle('hide'); //hide the progress text
let PBListenersAdded = false;

PBButton.addEventListener('click', () => {
    for (let button of PBButtons) {
        button.classList.toggle('show');
    }
    progressBar.style.display = 'flex';

    for (let button of MainButtons) {
        button.classList.toggle('show');
    }

    const backButton = document.getElementById('backButtonPB');
    const PBSelectStartEnd = document.getElementById('PBSelectStartEnd');
    const PBDelete = document.getElementById('PBDelete');
    //const progressBar = document.getElementById('progressBar');
    progressBar.classList.toggle('hide'); //show the progress bar
    progressText.classList.toggle('show'); //show the progress text

    function backButtonClickHandler() {
        for (let button of PBButtons) {
            button.classList.toggle('show');
        }
        
        for (let button of MainButtons) {
            button.classList.toggle('show');
        }
        progressBar.classList.toggle('hide'); //hide the progress bar
        progressText.classList.toggle('show'); //hide the progress text
        if(PBMenu.classList.contains('show')){
            PBMenu.classList.toggle('show');
        }
        progressBar.style.display = 'none';
    }
    if(!PBListenersAdded)
        backButton.addEventListener('click', backButtonClickHandler);

    if(!PBListenersAdded)
        PBSelectStartEnd.addEventListener('click', () => {
        //calculate the position of PBMenu relative to the toolbar
        const toolbarRect = toolbar.getBoundingClientRect();
        const PBMenuWidth = PBMenu.offsetWidth;
        const PBMenuHeight = PBMenu.offsetHeight;
        
        const PBMenuLeft = toolbarRect.left + toolbarRect.width + 10;
        const PBMenuTop = toolbarRect.top;
    
        //set the position of PBMenu
        PBMenu.style.left = PBMenuLeft + 'px';
        PBMenu.style.top = PBMenuTop + 'px';
    
        //show the PBMenu
        PBMenu.classList.toggle('show');

        //console.log("clicked");
    });
  

    if(!PBListenersAdded)
        PBDelete.addEventListener('click', () => {
            milestoneReached = {
                25: false,
                50: false,
                75: false,
                100: false
            };
        const startImage = document.getElementById('start');
        const endImage = document.getElementById('end');
    
        //reset start and end images to their initial positions
        PBMenu.appendChild(startImage);
        PBMenu.appendChild(endImage);
        endImageExists = false;
        startImageExists = false;

        resetProgressBar();

        updateProgressBar(0);
    });

    PBListenersAdded = true;
});

function resetProgressBar(){
    const progressBar = document.getElementById('progress');
    progressBar.style.height = '0';
    progressText.textContent = '0%';

    milestoneReached = {
        25: false,
        50: false,
        75: false,
        100: false
    };
}
//*************************************************************************************************************

document.getElementById("AGEButton").addEventListener("click", function() {
    const displayCircle = document.getElementById("cursor-circle");

    //toggle the 'show' class to either display or hide the circle
    displayCircle.classList.toggle('hide');
    console.log('clicked');
});

//personalization Settings
const PSButton = document.getElementById('PSButton');
const PSButtons = document.getElementsByClassName('PSButtons');
let addedPSListeners = false;
let circleFlashInterval; //interval for flashing the cursor circle
const cursorColorInput = document.getElementById('cursorColor');
const cursorCircle = document.querySelector('.cursor-circle');
const flashFrequencyInput = document.getElementById('flashFrequency');
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
    }
    if (storedColor) {
        console.log('Stored color:', storedColor);
        updateCursorColor(storedColor);
    } else {
        console.log('Cursor color not found in storage.');
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



PSButton.addEventListener('click', () => {
    for (let button of PSButtons) {
        button.classList.toggle('show');
    }

    for (let button of MainButtons) {
        button.classList.toggle('show');
    }

    const backButton = document.getElementById('backButtonPS');
    const defaultConversionButton = document.getElementById('defaultConversionButton');
    const AGESettingsButton = document.getElementById('AGESettingsButton');
    const toggleMWMButton = document.getElementById('MWM');

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
            const fontSizeSelector = document.getElementById('defaultFontSize');
            const fontColorSelector = document.getElementById('defaultFontColor');
            const backColorSelector = document.getElementById('defaultBackColor');
            const typefaceSelector = document.getElementById('defaultTypeface');

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
        document.getElementById('defaultFontSize').addEventListener('change', updateChromeStorage);
        document.getElementById('defaultFontColor').addEventListener('change', updateChromeStorage);
        document.getElementById('defaultBackColor').addEventListener('change', updateChromeStorage);
        document.getElementById('defaultTypeface').addEventListener('change', updateChromeStorage);

        //event listener for the defaultConversionButton
        defaultConversionButton.addEventListener('click', () => {
            PSFontMenu.classList.toggle('show');
            
            //call updateChromeStorage to ensure the latest values are stored before toggling the menu
            //updateChromeStorage();
        });

   
       AGESettingsButton.addEventListener('click', () => {
            PSAGEMenu.classList.toggle('show');
            
            const inactivityDurationInput = document.getElementById('inactivityDuration');
            const inactivityMessage = "The only way to finish is to keep working! Focus Up!";
        
            let inactivityTimer;
        
            //function to reset the inactivity timer
            function resetInactivityTimer() {
                clearTimeout(inactivityTimer); //clear previous timer
                inactivityTimer = setTimeout(() => {
                    showInactivityMessage(inactivityMessage);
                }, inactivityDurationInput.value * 60 * 1000); //convert minutes to milliseconds }, inactivityDurationInput.value * 60 * 1000);
            }
        
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
                messageElement.textContent = message;
                messageElement.classList.add("inactivityMessage");
                document.body.appendChild(messageElement);
            
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
                    document.body.removeChild(messageElement);
                    document.removeEventListener('mousemove', stopFlashing);
                };
            
                //event listener to stop flashing and remove message on mousemove
                document.addEventListener('mousemove', stopFlashing);
            }
            //showInactivityMessage(inactivityMessage);  //something to display
        });
      
        toggleMWMButton.addEventListener('click', () => {
            doMWM = !doMWM;
        
            const MWMStateDiv = document.getElementById('MWMState');
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

const fidgetContainer = document.getElementById('fidgetContainer');
const moveFidget = document.getElementById('moveFidget');
const toggleFidgetButton = document.getElementById('toggleFidgetButton');

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


const FDButton = document.getElementById('FDButton');
const FDButtons = document.getElementsByClassName('FDButtons');
let FDListenersAdded = false;
let FDTempFlag = false;

let rotationAngle = 0; // Initial rotation angle

let scrollVelocity = 0; // Initial scroll velocity
const decelerationFactor = 0.9; // Adjust deceleration factor for smoother deceleration

document.addEventListener('wheel', (event) => {
    if (event.target === moveFidget) {
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

    const backButton = document.getElementById('backButtonFD');
    const FDMenuButton = document.getElementById('FDMenuStart')
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
                const moveFidget = document.getElementById('moveFidget');
        
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