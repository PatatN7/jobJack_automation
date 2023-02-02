import { Selector , t} from 'testcafe';
import page from '../pageModels/loginPage-model';

fixture`Register Account`
    .page`https://www.jobjack.co.za/`;

test('Register as Job Seeker', async t => 
{
    //Maximize Window
    await t.maximizeWindow();

    //Click on Job Seeker in Navbar
    await t.click(page.navbarJobSeeker);
    
    //Click on Find a Job
    await t.click(page.buttonFindJob);

    //Enter First Name
    await t.typeText(page.inputFirstName, 'Job');

    //Enter Last Name
    await t.typeText(page.inputLastName, 'Jack');

    //Enter Mobile Number
    await t.typeText(page.inputNumber, '012 345 6789');

    //Do you have a WhatsApp number? = Same as mobile number
    await t
        .click(page.ddHasWhatsapp)
        .click(page.liSameAsMobileNumber);

    //Do you want to receive notifications via WhatsApp? = Yes
    await t
        .click(page.ddWhatsappOptIn)
        .click(page.liYes);

    //Enter Email address
    await t.typeText(page.inputEmail, 'tester012023@jobjack.co.za')

    //Set Location = South Africa, Bellville, Bellville Park
    await t
        .typeText(page.inputLocation, 'South Africa, Bellville, Bellville Park')
        .click(page.liLocation)

    //Copy Register and Paste in Password field. (PS. Used this method because Clipboard operations are not emulated)
    const headerText = await Selector('h4').textContent;
    const password = headerText.split(' ')[0];

    await t.typeText(page.inputPassword, password);

    //Show Password
    await t.click(page.buttonShowPass);

    //Pause for 30 seconds
    await t.wait(30000);
    
}).skipJsErrors(true);