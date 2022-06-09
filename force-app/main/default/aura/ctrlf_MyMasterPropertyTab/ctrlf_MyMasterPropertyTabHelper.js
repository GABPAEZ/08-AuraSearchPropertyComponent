({
    getpropertyDetails: function (component, event, helper) {
        var pageReference = component.get('v.pageReference');
        var pid = pageReference.state.c__propertyId;
        console.log('getpropertyDetails pageReference pid' + pid);
        var action = component.get("c.getDetails");
        action.setParams({
            "propId": pid
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                component.set("v.property", result);
                component.set("v.propertyFound", true);
            }
        });
        $A.enqueueAction(action, false);
    }
})
