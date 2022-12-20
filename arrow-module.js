let featuresArrow = document.getElementById('featuresArrow');

let companyDropdownIcon = document.getElementById('companyDropdownIcon');

export const arrowIconIsOpen = () => featuresArrow.style = 'transform: scale(2) rotate(180deg); margin-top: 7px; margin-left: 8px;';

export const arrowIconIsClosed = () => featuresArrow.style = 'transform: scale(2) rotate(360deg); margin-top: 7px; margin-left: 8px;';

export const companyDropdownIconIsOpen = () => companyDropdownIcon.style = 'transform: scale(2) rotate(180deg); margin-top: 7px; margin-left: 8px;';

export const companyDropdownIconIsClosed = () => companyDropdownIcon.style = 'transform: scale(2) rotate(360deg); margin-top: 7px; margin-left: 8px;';

