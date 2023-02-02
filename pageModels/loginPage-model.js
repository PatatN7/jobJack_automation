import { Selector, t } from 'testcafe';

class Page
{
    constructor ()
    {
        this.navbarJobSeeker = Selector('.nav-link').withText('Job seeker');
        this.buttonFindJob = Selector('.btn.btn-jj-3.mb-0.jj-bg-green').withText('Find a job');
        this.inputFirstName = Selector('[formcontrolname="firstName"]');
        this.inputLastName = Selector('[formcontrolname="lastName"]');
        this.inputNumber = Selector('[formcontrolname="phoneNumber"]');
        this.ddHasWhatsapp = Selector('[formcontrolname="hasWhatsapp"]');
        this.liSameAsMobileNumber = Selector('[role="option"]').withText('Same as mobile number');
        this.ddWhatsappOptIn = Selector('[formcontrolname="whatsappOptIn"]');
        this.liYes = Selector('[role="option"]').withText('Yes');
        this.inputEmail = Selector('[formcontrolname="email"]');
        this.inputLocation = Selector('.location');
        this.liLocation = Selector('.ng-option-label').withText('South Africa, Bellville, Bellville Park');
        this.inputPassword = Selector('[formcontrolname="password"]');
        this.buttonShowPass = Selector('#button_addon2');
    }
}

export default new Page();