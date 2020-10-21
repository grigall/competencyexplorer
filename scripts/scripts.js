class CompanyInfo {
    constructor (fullName, shortName, slogan, otherInfo, logo) {
        this.fullName = fullName;
        this.shortName = shortName;
        this.slogan = slogan;
        this.otherInfo = otherInfo;
        this.logo = logo;
    };
};

class Competency {
    constructor (name, attributes) {
        this.name = name;
        this.attributes = attributes; //Array of attributes

    };
};

class ServiceArea {
    constructor (name, attributes) {
        this.name = name;
        this.attributes = attributes;
    };
};

class Outcome {
    constructor (name, type, linkedComps, description) {
        this.name = name;
        this.type = type;
        this.linkedComps = linkedComps;
        this.description = description;
    };
}

let termOne = new Competency ('Competency', ['Core Competencies', 'Lead and Supervisory Competencies', null, null, null, null, null, null, null]);
let coreComps = new Competency ('Core Competencies', ['Critical Thinking', 'Decisiveness', 'Follow-Through', 'Initiative', 'Openness to Learning', 'Oral Communication', 'Organization & Planning', 'Relationship Building', 'Time Management']);
let leadComps = new Competency ('Lead and Supervisory Competencies', ['Leadership', 'Cross-Team Communication', 'Collaborative Relationship Building', 'Results Focus', null, null, null, null, null]);
let termTwo = new ServiceArea ('Service Area', ['Education', 'ERSEA', 'Food Services', null]);
let termThree = new Outcome ('Outcome', 'Outcome', null, 'List of outcomes');

//Instantiate class for debugging purposes. Pull in .csv file later.
let company;

let company_two = new CompanyInfo ('Oregon Child Development Coalition', 'OCDC', 'Something flashy', null, 'tree.png');

let company_one = new CompanyInfo ('CyberDyne Systems Corporation', 'CDS', 'There is no fate but what we make for ourselves', null, 'CDS_logo.webp');

company = company_one;

function splashScreen() {
    let splash = document.getElementById('splash');
    splash.innerHTML = (`
        
        <nav id='nav-section' class='header'>
            <a href=# id='home-button' onclick='splashScreen()' title='Home'><h1>` + company.shortName +` Competency Explorer</h1></a>
            <a href=# id='menu-button' onclick='dropDownMenu()' title='Menu'>&#9776;</a>
        </nav>

        <div class='left-item'></div>
        <div class='center-item' id='center-item'>
            <a class='nav-button' id='nav-button0'>Explore by `+ termOne.name +`</a>
            <a class='nav-button' id='nav-button1'>Explore by `+ termTwo.name +`</a>
            <a class='nav-button' id='nav-button2'>Explore by `+ termThree.name +`</a>
            <div class='background-img'></div>
        </div>
        <div class='right-item'></div>

        <div class='footer'>&#169; 2020 `+ company.fullName +`</div>
        
    `);

    var button1 = document.getElementById('nav-button0');
    button1.setAttribute('onclick', 'subMenuScreen("comps")');
    var button2 = document.getElementById('nav-button1');
    button2.setAttribute('onclick', 'subMenuScreen("areas")');
    var button3 = document.getElementById('nav-button2');
    button3.setAttribute('onclick', 'subMenuScreen("outcomes")');
};

function dropDownMenu() {
    //Checks for existence of pop-up then destroys it if it exists
    var popUpElement = document.getElementById('popUp');
    var elementExists = document.body.contains(popUpElement);

    if (elementExists == true) {
        document.getElementById('splash').removeChild(popUpElement);
    };

    var node = document.createElement('div');
    node.id = 'menu-dropdown';
    var node1 = document.createElement('a');
    node1.setAttribute('onclick', "popUpDefinition('faq')");
    var node2 = document.createElement('a');
    node2.setAttribute('onclick', 'popUpDefinition("contact")');
    var content1 = document.createTextNode('Contact Us');
    var content2 = document.createTextNode('FAQ');
    node1.appendChild(content1);
    node2.appendChild(content2);
    node.appendChild(node2);
    node.appendChild(node1);
    

    document.getElementById('splash').appendChild(node);
};

function popUpDefinition(nodeID) {
    //Variables and page elements for pop-up
    var header;
    var content;    
    var rootNode = document.createElement('div');
    rootNode.id = 'popUp';
    var nodeHeader = document.createElement('h2');
    nodeHeader.className = 'popUpHeader';
    var nodeContent = document.createElement('div');
    nodeContent.className = 'popUpContent';

    //Pop-up close button
    var closeButton = document.createElement('a');
    closeButtonContent = document.createTextNode('CLOSE');
    closeButton.className = 'popUpClose';
    closeButton.appendChild(closeButtonContent);
    closeButton.setAttribute('onclick', `closePopUp(`+rootNode.id+`)`);

    if (nodeID == 'faq') {
        //Text content for page
        header = document.createTextNode('Contact Information');
        content = document.createTextNode('Point of Contact: Ms. Jackson');
        
        //Add element to page and content to element
        nodeHeader.appendChild(header);
        var nodeBody = document.createElement('p');
        nodeBody.appendChild(content);
        
        rootNode.appendChild(nodeHeader);
        nodeContent.appendChild(nodeBody);
        
    } else if (nodeID == 'contact') {
        //Text content for page
        header = document.createTextNode('Frequently Asked Questions');
        content = document.createTextNode('Q: What is a competency?');
        content2 = document.createTextNode('A: A specific area of competence. E.g. An area of focus in one\'s profession that affects job performance.');

        //Add element to page and content to element
        nodeHeader.appendChild(header);
        var nodeBody = document.createElement('p');
        var nodeBody2 = document.createElement('p');
        nodeBody.appendChild(content);
        nodeBody2.appendChild(content2);

        rootNode.appendChild(nodeHeader);
        nodeContent.appendChild(nodeBody);
        nodeContent.appendChild(nodeBody2);
    };

    rootNode.appendChild(nodeContent);
    rootNode.appendChild(closeButton);

    //Add pop-up to body of page
    document.getElementById('splash').appendChild(rootNode);
    var unwantedNode = document.getElementById('menu-dropdown');
    document.getElementById('splash').removeChild(unwantedNode); //Remove drop-down menu
    document.getElementById('tree-nav').style.display = 'None'; //Hide home screen splash
};

function closePopUp(popUpID) {
    document.getElementById('splash').removeChild(popUpID);
    document.getElementById('tree-nav').style.display = 'flex';
};

function subMenuScreen(menuButton) {
    //Removes all the base navigation buttons from screen but leaves the background image
    var unwantedNodes = document.getElementsByClassName('nav-button');
    while (unwantedNodes.length > 0) {
        unwantedNodes[0].parentNode.removeChild(unwantedNodes[0]);
    };

    var rootNode = document.getElementById('center-item');
    
    if (menuButton == 'comps') {
        enumMenuItems(termOne.attributes, rootNode, 'nav-button'); //First arg must be an array!!
    } else if (menuButton == 'areas') {
        enumMenuItems(termTwo.attributes, rootNode, 'nav-button');
    } else if (menuButton == 'outcomes') {
        alert('Outcomes');
    };

    var buttons = document.getElementsByClassName('nav-button');
    var i;
    for (i=0; i < buttons.length; i++) {
        var button_id = 'nav-button' + String(i)
        var text = document.getElementById(button_id).innerText;
        var button = document.getElementById(button_id);

        if (text == 'Core Competencies') {
            button.setAttribute('onclick', 'enumSubMenuItems ("core_comps")');
            button.className = 'nav-button';
        } else if (text == 'Lead and Supervisory Competencies') {
            button.setAttribute('onclick', 'enumSubMenuItems ("lead_comps")');
            button.className = 'nav-button';
        };
    };
};

function enumMenuItems(object, parentDiv, newClass) {
    if (object.length > 0) {
        var i;
        for (i=0; i < object.length; i++) {
            if (object[i] != null) {
                var node = document.createElement('a');
                var content = document.createTextNode(object[i]);
                node.appendChild(content);
                node.className = newClass;
                node.id = String(node.className) + String(i);
                parentDiv.appendChild(node);
            };
        };
    };
};

function enumSubMenuItems (subMenu) {
    //Define root node
    var rootNode = document.getElementById('center-item');

    var unwantedNode = document.getElementById('sub-nav-button0');
    var elementExists = rootNode.contains(unwantedNode);

    var childNodes = Object.keys(rootNode.children).length;

    alert(childNodes);
    if (elementExists == true) {
        for (i=0; i < childNodes; i++) {
            var unwantedElement = document.getElementById('sub-nav-button' + String(i));
            rootNode.removeChild(unwantedElement);
        };
    };
        
    var subMenuSelection; //Must be array

    if (subMenu == 'core_comps') {
        subMenuSelection = coreComps.attributes;
    } else if (subMenu == 'lead_comps') {
        subMenuSelection = leadComps.attributes;
    };

    enumMenuItems(subMenuSelection, rootNode, 'sub-nav-button');
};

function fleshOutItem (itemName) {
    //Removes all the base navigation buttons from screen but leaves the background image
    var unwantedNodes = document.getElementsByClassName('nav-button');
    while (unwantedNodes.length > 0) {
        unwantedNodes[0].parentNode.removeChild(unwantedNodes[0]);
    };

    var rootNode = document.getElementById('center-item');
    
    var buttons = document.getElementsByClassName('nav-button');
    var i;
    for (i=0; i < buttons.length; i++) {
        var button_id = 'nav-button' + String(i)
        var text = document.getElementById(button_id).innerText;
        var button = document.getElementById(button_id);


    };
};