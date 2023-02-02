import { Selector, t } from 'testcafe';

class Page
{
    constructor ()
    {
        
    }

    async navigate()
    {
        await t
        .click(this.elementsLink)
        .click(this.checkBoxLink);
    }
}

export default new Page();