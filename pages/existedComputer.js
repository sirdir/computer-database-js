var updatePc = {
    update: function(name, introducedDate, discontinuedDate, company) {
        return this.clearValue('@name')
            .setValue('@name', name)
            .clearValue('@introductionDate')
            .setValue('@introductionDate', introducedDate)
            .clearValue('@discontinuedDate')
            .setValue('@discontinuedDate', discontinuedDate)
            .setValue('@company', company)
            .click('@updateBtn')
    }
};

var deletePc = {
    delete: function() {
        return this.click('@deleteBtn');
    }
};

module.exports = {
    commands: [updatePc, deletePc],
    elements: {
        name: {
            selector: "#name"
        },
        introductionDate: {
            selector: "#introduced"
        },
        discontinuedDate: {
            selector: "#discontinued"
        },
        company: {
            selector: "#company"
        },
        updateBtn: {
            selector: 'input[value="Save this computer"]'
        },
        deleteBtn: {
            selector: 'input[value="Delete this computer"]'
        }
    }
};