var addPC = {
    addNewPc: function() {
        return this.waitForElementVisible('@addComputerButton', 1000)
            .click('@addComputerButton');
    }
};
var searchPC = {
    search: function(query) {
        return this.waitForElementVisible('@searchInput', 1000)
            .setValue('@searchInput', query)
            .click('@searchButton')
            .api.pause(1000);
    }
};
var openSearchedCompany = {
    openCompany: function(rowIndex = 0) {
        return this.click({selector:'@firstComputer', index: rowIndex});
    }
};


module.exports = {
    commands: [addPC, searchPC, openSearchedCompany],
    url: 'http://computer-database.herokuapp.com/computers',
    elements: {
        addComputerButton: {
            selector: "#add"
        },
        searchInput: {
            selector: "#searchbox"
        },
        searchButton: {
            selector: "#searchsubmit"
        },
        firstComputer: {
            selector: ".computers td > a"
        },
        introductionDate: {
            selector: "tbody > tr > td:nth-child(2)"
        },
        discontinueDate: {
            selector: "tbody > tr > td:nth-child(3)"
        },
        alertText: {
            selector: ".alert-message"
        }
    }
};