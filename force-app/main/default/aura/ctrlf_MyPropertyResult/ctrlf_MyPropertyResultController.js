({
    fetchAllProperty: function (component, event, helper) {
        helper.fetchAllPropertyHelper(component, event, helper);
    },
    ownerDetailsClick: function (component, event, helper) { 
        var eventSource = event.getSource();
        var propOwnerId = eventSource.get('v.value');
        component.set('v.propOwnerId',propOwnerId);
        component.set('v.openOwnerDetails',"true");
    },
    closeOwnerModal : function(component, event, helper) {
        component.set('v.openOwnerDetails',"false");   
    },
    closeEnquiryModal: function (component, event, helper) { 
        component.set('v.openEnquiryDetails',"false");
    },
    feedbackClicked: function (component, event, helper) { 
        component.set('v.openEnquiryDetails', "true");
        var eventSource = event.getSource();
        var propId = eventSource.get('v.value');
        component.set('v.propertyId',propId);
    },
    navigateToPropertyDetails: function (component, event, helper) {
        var navService = component.find("navService");
        var eventSource = event.getSource();
        var propId = eventSource.get('v.value');
        //console.log('navigateToPropertyDetails propId ' + propId);
        var pageReference = {
            type: 'standard__component',
            attributes: {
                componentName: 'c__ctrlf_MyMasterPropertyTab',
            },
            state: {
                "propertyId": propId
            }
        };
        //console.log('navigateToPropertyDetails pageReference ' + pageReference);
        component.set("v.pageReference", pageReference);
        //console.log('navigateToPropertyDetails pageReference ' + JSON.stringify(pageReference));
        navService.navigate(pageReference);
    }
})
