const name = 'pc_' + new Date().getTime();
const newName = 'pc_' + new Date().getTime();
const intrDate = '2010-10-10';
const discDate = '2020-12-12';
const company = 'IBM';
const newIntrDate = '2012-11-11';
const newDiscDate = '2035-01-01';
const newCompany = 'ASUS';
const createMessage = "Done! Computer " + name + " has been created";
const updateMessage = "Done! Computer " + newName + " has been updated";
const deleteMessage = "Done! Computer has been deleted";

module.exports = {
    'create computer' : function (browser) {
        const main = browser.page.main();
        const newComputer = browser.page.newComputer();

        main.navigate();
        main.addNewPc();
        newComputer.submitPc(name, intrDate, discDate, company);
        main.assert.containsText('@alertText', createMessage, "notification message");
    },
    'read computer' : function (browser) {
        const main = browser.page.main();
        const existedComputer = browser.page.existedComputer();

        main.navigate();
        main.search(name);
        main.openCompany();
        existedComputer.assert.value('@name', name, "pc name");
        existedComputer.assert.value('@introductionDate', intrDate, "introduction date");
        existedComputer.assert.value('@discontinuedDate', discDate, "discontinue date");
        existedComputer.assert.containsText('@company', company, "company name");
    },
    'update computer' : function (browser) {
        const main = browser.page.main();
        const existedComputer = browser.page.existedComputer();

        main.navigate();
        main.search(name);
        main.openCompany();
        existedComputer.update(newName, newIntrDate, newDiscDate, newCompany);
        main.assert.containsText('@alertText', updateMessage, "notification message");
    },
    'delete computer' : function (browser) {
        const main = browser.page.main();
        const existedComputer = browser.page.existedComputer();

        main.navigate();
        main.search(name);
        main.openCompany(name);
        existedComputer.delete();
        main.assert.containsText('@alertText', deleteMessage, "notification message");

        browser.end();
    }
};