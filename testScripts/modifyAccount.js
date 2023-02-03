import { Selector , t} from 'testcafe';
import page from '../pageModels/profilePage-model';

fixture`Modify Account`
    .page`https://app.jobjack.co.za/`;

test('Modify Job Seeker account', async t => 
{
    //Login With Credentials
    await t
        .typeText(page.inputEmail, 'jmeintjesn7@gmail.com')
        .typeText(page.inputPassword, 'Register')
        .click(page.buttonLogIn);

    //Navigate to My Profile
    await t.click(page.sidebarMyProfile);

    //Select View Profile
    await t.click(page.buttonViewProfile);

    //Pause for 10 Seconds
    await t.wait(10000);

    //Close Modal
    await t
        .scrollIntoView(page.buttonCloseModal)
        .click(page.buttonCloseModal);

    //Select Basic Info
    await t.click(page.buttonBasicInfo);

    //Change Name to JOB
    await t.typeText(page.inputFirstName, 'JOB', { replace : true })

    //Save Changes
    await t
        .scrollIntoView(page.buttonSaveChanges)
        .click(page.buttonSaveChanges);

    //Close Congratulations Modal
    await t.click(page.buttonStayHere);

    //Logout
    await t.click(page.sidebarLogout);

}).skipJsErrors(true);