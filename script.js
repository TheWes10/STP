
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
        <button id="collapse" title="Toggle Toolbar">
            <img src="${chrome.runtime.getURL("images/collapse.svg")}" draggable = "false">
            <span class="buttonText">Toggle Toolbar</span>
        </button>
        <div id="menu">

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
const collapseButton = shadowRoot.getElementById('collapse');
const allButtons = shadowRoot.querySelectorAll('.toolbar button');
const menu = shadowRoot.getElementById('menu');
let isDragging = false;
let offsetX, offsetY;

chrome.storage.sync.get(["toolbarLeftStyle", "toolbarTopStyle"], (result) => {
    toolbar.style.left = result.toolbarLeftStyle ? result.toolbarLeftStyle + 'px' : '';
    toolbar.style.top = result.toolbarTopStyle ? result.toolbarTopStyle + 'px' : '';
});

let isCollapsed = true;
collapseButton.addEventListener('click', () => {
    if(isCollapsed){
        for (let button of MainButtons) {
            button.classList.add('show');
        }
    }
    else {
        for (let button of allButtons) {
            button.classList.remove('show');
        }
        menu.classList.remove('show');
    }

    toolbar.style.height = isCollapsed ? "585px" : "90px";
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

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;
      
        toolbar.style.left = newX + 'px';
        toolbar.style.top = newY + 'px';
        
        toolbarLeft = toolbar.getBoundingClientRect().left;
        toolbarTop = toolbar.getBoundingClientRect().top;
    }
});

document.addEventListener('mouseup', () => {	//changed to include PS stuff and in chrome get thing
    isDragging = false;
    toolbar.style.cursor = 'grab';
    chrome.storage.sync.set({
        toolbarLeftStyle: toolbarLeft,
        toolbarTopStyle: toolbarTop,
    });

    document.body.classList.remove('disable-text-selection');
});

 
