this.crudComputers = function (browser) {

    const name = 'pc_' + new Date().getTime()
    const fuckOff = "Done! Computer " + name + " has been created"
    browser
        .url('http://computer-database.herokuapp.com/computers')
        .waitForElementVisible('body', 1000)
        .click('a#add')
        .pause(1000)
        .setValue('#name', name)
        .click('input[value="Create this computer"]')
        .pause(1000)
        .assert.containsText('div.alert-message', fuckOff)
        .end();
};
