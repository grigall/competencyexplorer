class CompanyInfo {
    constructor (fullName, shortName, slogan, otherInfo) {
        this.fullName = fullName;
        this.shortName = shortName;
        this.slogan = slogan;
        this.otherInfo = otherInfo;
    }
};

//Instantiate class for debugging purposes. Pull in .csv file later.
let company;

let company_two = new CompanyInfo ('Oregon Child Development Coalition', 'OCDC', 'Something flashy', null);

let company_one = new CompanyInfo ('CyberDyne Systems Corporation', 'CDS', 'There is no fate but what we make for ourselves', null);

company = company_one;

function splashScreen() {
    let splash = document.getElementById('splash');
    splash.innerHTML = (`
        <nav>
            <h1>` + company.shortName +` Competency Explorer</h1>
            <a href=#>&#9776;</a>
        </nav>
        
        <div id='tree-nav'>
            <img src='./static/tree.png' onclick = "onHover('#tree-nav')";>
        </div>

        <footer>&#169; 2020 `+ company.fullName +`</footer>
    `);
};

function onHover(modalArg) {
        //
        
        let popUp = document.createElement('a');
        popUp.className('popUp');
        let rootElement = document.getElementById(modalArg);
        rootElement.appendChild(popUp);
        
        switch (modalArg) {
            case 'tree-nav':
                alert(`This ${modalArg} function works!`);
                /*popUp.innerHTML(`
                <div>
                    <h3>START</h3>
                </div>
                `);*/
            break;
            default:
                alert('This function is broken.');
            break;
        }

        
    }

