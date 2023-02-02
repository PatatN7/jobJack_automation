import { Selector, t } from 'testcafe';

class Page
{
    constructor ()
    {
        this.inputEmail = Selector('[formcontrolname="email"]');
        this.inputPassword = Selector('[formcontrolname="password"]');
        this.buttonLogIn = Selector('button').withText('Log In');
        this.sidebarMyProfile = Selector('.sidenav-link').withText('My Profile');
        this.buttonViewProfile = Selector('#viewProfileButton');
        this.buttonCloseModal = Selector('button').withText('Close');
        this.buttonBasicInfo = Selector('button').withText('Basic Information');
        this.inputFirstName = Selector('[formcontrolname="firstName"]');
        this.buttonSaveChanges = Selector('button').withText('Save changes');
        this.buttonStayHere = Selector('button').withText('Stay here');
        this.sidebarLogout = Selector('.sidenav-link').withText('Logout');
    }
}

export default new Page();