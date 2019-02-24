var onlyName = {
    submitPc: function(name) {
        return this.setValue('@nameInput', name)
            .click('@createBtn')
    }
};
var nameAndDates = {
    submitPc: function(name, introducedDate, discontinuedDate) {
        return this.setValue('@nameInput', name)
            .setValue('@introductionDateInput', introducedDate)
            .setValue('@discontinuedDateInput', discontinuedDate)
            .click('@createBtn')
    }
};
var allFields = {
    submitPc: function(name, introducedDate, discontinuedDate, company) {
        return this.setValue('@nameInput', name)
            .setValue('@introductionDateInput', introducedDate)
            .setValue('@discontinuedDateInput', discontinuedDate)
            .setValue('@company', company)
            .click('@createBtn')
    }
};

module.exports = {
    commands: [onlyName, nameAndDates, allFields],
    url: 'http://computer-database.herokuapp.com/computers/new',
    elements: {
        nameInput: {
            selector: "#name"
        },
        introductionDateInput: {
            selector: "#introduced"
        },
        company: {
            selector: "#company"
        },
        discontinuedDateInput: {
            selector: "#discontinued"
        },
        createBtn: {
            selector: 'input[value="Create this computer"]'
        }
    }
};