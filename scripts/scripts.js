class CompanyInfo {
    constructor (fullName, shortName, slogan, otherInfo) {
        this.fullName = fullName;
        this.shortName = shortName;
        this.slogan = slogan;
        this.otherInfo = otherInfo;
    };
};

class Competency {
    constructor (className, attribute_1, attribute_2, attribute_3, attribute_4, attribute_5, attribute_6, attribute_7, attribute_8, attribute_9) {
        this.className = className;
        this.attribute_1 = attribute_1;
        this.attribute_2 = attribute_2;
        this.attribute_3 = attribute_3;
        this.attribute_4 = attribute_4;
        this.attribute_5 = attribute_5;
        this.attribute_6 = attribute_6;
        this.attribute_7 = attribute_7;
        this.attribute_8 = attribute_8;
        this.attribute_9 = attribute_9;

    };
};

class ServiceArea {
    constructor (name, area1, area2, area3, area4) {
        this.name = name;
        this.area1 = area1;
        this.area2 = area2;
        this.area3 = area3;
        this.area4 = area4;
    };
}

let termOne = 'Competency';
let coreComps = new Competency ('Core Competencies', 'Critical Thinking', 'Decisiveness', 'Follow-Through', 'Initiative', 'Openness to Learning', 'Oral Communication', 'Organization & Planning', 'Relationship Building', 'Time Management');
let leadComps = new Competency ('Lead and Supervisory Competencies', 'Leadership', 'Cross-Team Communication', 'Collaborative Relationship Building', 'Results Focus', null, null, null, null, null);
let termTwo = 'Service Area';
let serviceAreas = new ServiceArea ('Service Area', 'Education', 'ERSEA');

//Instantiate class for debugging purposes. Pull in .csv file later.
let company;

let company_two = new CompanyInfo ('Oregon Child Development Coalition', 'OCDC', 'Something flashy', null);

let company_one = new CompanyInfo ('CyberDyne Systems Corporation', 'CDS', 'There is no fate but what we make for ourselves', null);

company = company_one;

function splashScreen() {
    let splash = document.getElementById('splash');
    splash.innerHTML = (`
        <nav id='nav-section'>
            <h1>` + company.shortName +` Competency Explorer</h1>
            <a href=# id='menu-button' onclick='dropDownMenu()'>&#9776;</a>
        </nav>
        
        <div id='tree-nav'>
            <img src='./static/tree.png';>
            <div class='nav-button'>
                <a>Explore by `+ termOne +`</a>
                <a>Explore by `+ termTwo +`</a>
            </div>
        </div>

        <footer>&#169; 2020 `+ company.fullName +`</footer>
    `);
};

function dropDownMenu() {
    var popUpElement = document.getElementById('popUp');
    var elementExists = document.body.contains(popUpElement);

    if (elementExists == true) {
        document.getElementById('splash').removeChild(popUpElement);
        document.getElementById('tree-nav').style.display = 'flex';
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

    //Pop-up close button
    var closeButton = document.createElement('a');
    closeButtonContent = document.createTextNode('CLOSE');
    closeButton.appendChild(closeButtonContent);
    closeButton.setAttribute('onclick', `closePopUp(`+rootNode.id+`)`);

    if (nodeID == 'faq') {
        //Text content for page
        header = document.createTextNode('Contact Information');
        content = document.createTextNode('Point of Contact: Shelly Jackson');
        
        //Add element to page and content to element
        nodeHeader.appendChild(header);
        var nodeBody = document.createElement('p');
        nodeBody.appendChild(content);
        
        rootNode.appendChild(nodeHeader);
        rootNode.appendChild(nodeBody);
        
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
        rootNode.appendChild(nodeBody);
        rootNode.appendChild(nodeBody2);
    };

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