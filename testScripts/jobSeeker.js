import { Selector , t} from 'testcafe';
import page from '../pageModels/loginPage-model';

fixture`JobJack Automation`
    .page`https://www.jobjack.co.za/`;

test('Sign Up', async t => 
{

    await t
        .maximizeWindow()
        .click(page.navbarJobSeeker)

    await t.click(page.buttonFindJob)



}).skipJsErrors(true);