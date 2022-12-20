import { arrowIconIsClosed, arrowIconIsOpen, companyDropdownIconIsClosed, companyDropdownIconIsOpen } from './arrow-module.js';

let featuresTag = document.getElementById('featuresTag');
let featuresArrowPath = document.getElementsByClassName('featuresArrowPath');
let showDropdown = false;
let dropdownOneWrapper = document.getElementById('dropdownOneWrapper');

let companyTag = document.querySelector('#companyTag');
let showCompanyDropdownBool = false;
const dropdownTwo = document.getElementById('dropdownTwoWrapper');

function showMenu() {
    console.log(featuresArrowPath);
    showDropdown = !showDropdown;
    if (showDropdown) {
        arrowIconIsOpen();
        activeStateFeatures();
        openDropdown();
    } 

    else {
        arrowIconIsClosed();
        featuresTag.classList.remove('active');
        closeDropdownOne();
    }
    console.log(showDropdown);
}

featuresTag.addEventListener('click', showMenu);

const activeStateFeatures = () => featuresTag.classList.add('active');

const openDropdown = () => dropdownOneWrapper.style = 'display: block; position: absolute; top: 0; transform: translate(-30%, 25%);'

const closeDropdownOne = () => dropdownOneWrapper.style = '';



function showCompanyDropdown() {
    showCompanyDropdownBool = !showCompanyDropdownBool;
    if (showCompanyDropdownBool) {
        // sayHi();
        companyDropdownIconIsOpen();
        companyTag.classList.add('active');
        openDropdownTwo();
    } 

    else {
        companyDropdownIconIsClosed();
        companyTag.classList.remove('active');
        closeDropdownTwo();
    }
}

companyTag.addEventListener('click', showCompanyDropdown);

const openDropdownTwo = () => dropdownTwo.style = 'display: block;';

const closeDropdownTwo = () => dropdownTwo.style = '';

