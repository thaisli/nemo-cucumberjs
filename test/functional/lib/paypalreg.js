'use strict';
module.exports = function paypalreg(nemo) {
    return {
        "enterDetailsToCreatePayPalAccount": function () {
            var ppreg = nemo.view.paypalRegistration;
            ppreg.continue().click();

            nemo.drivex.waitForElement({'locator':'email','type':'id'},30,'Error loading PayPal registration form');
            ppreg.email().sendKeys('user@email.com');
            ppreg.password().sendKeys('password');
            ppreg.confirmPassword().sendKeys('password');
        }
    };
};
