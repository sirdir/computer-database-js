
const name = 'pc_' + new Date().getTime();
const newName = 'pc_' + new Date().getTime();
const createMessage = "Done! Computer " + name + " has been created";
const updateMessage = "Done! Computer " + newName + " has been updated";
const deleteMessage = "Done! Computer has been deleted";

module.exports = {

    'create computer' : function (browser) {
        browser
            .url('http://computer-database.herokuapp.com/computers')
            .waitForElementVisible('body', 1000)
            .click('#add')
            .pause(1000)
            .setValue('#name', name)
            .click('input[value="Create this computer"]')
            .pause(1000)
            .assert.containsText('div.alert-message', createMessage);
    },
    'read computer' : function (browser) {
        browser
            .url('http://computer-database.herokuapp.com/computers')
            .waitForElementVisible('body', 1000)
            .setValue('#searchbox', name)
            .click('#searchsubmit')
            .pause(1000)
            .click('.computers td > a')
            .pause(2000)
            .getValue('#name', function(result) {
                this.assert.equal(result.value, name);
            });
    },
    'update computer' : function (browser) {
        browser
            .url('http://computer-database.herokuapp.com/computers')
            .waitForElementVisible('body', 1000)
            .setValue('#searchbox', name)
            .click('#searchsubmit')
            .pause(1000)
            .click('.computers td > a')
            .pause(2000)
            .clearValue('#name')
            .setValue('#name', newName)
            .click('input[value="Save this computer"]')
            .assert.containsText('div.alert-message', updateMessage);
    },
    'delete computer' : function (browser) {
        browser
            .url('http://computer-database.herokuapp.com/computers')
            .waitForElementVisible('body', 1000)
            .setValue('#searchbox', newName)
            .click('#searchsubmit')
            .pause(1000)
            .click('.computers td > a')
            .pause(2000)
            .click('input[value="Delete this computer"]')
            .assert.containsText('div.alert-message', deleteMessage)
            .end();
    }
};