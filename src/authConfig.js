import { LogLevel } from "@azure/msal-browser";
// Browser check variables
// If you support IE, our recommendation is that you sign-in using Redirect APIs
// If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");
const msie11 = ua.indexOf("Trident/");
const msedge = ua.indexOf("Edge/");
const firefox = ua.indexOf("Firefox");
const isIE = msie > 0 || msie11 > 0;
const isEdge = msedge > 0;
const isFirefox = firefox > 0; // Only needed if you need to support the redirect flow in Firefox incognito

/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
 export const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_SignUp_SignIn",
        editProfile: "B2C_1_EditProfile"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://karpalab2c.b2clogin.com/karpalab2c.onmicrosoft.com/B2C_1_SignUp_SignIn"
        },
        editProfile: {
            authority: "https://karpalab2c.b2clogin.com/karpalab2c.onmicrosoft.com/B2C_1_EditProfile"
        }
    },
    authorityDomain: "karpalab2c.b2clogin.com"
}

// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: "bbf5a6af-7b39-4e2b-9a65-62ddfab69a38",
        authority: b2cPolicies.authorities.signUpSignIn.authority,
        knownAuthorities: [b2cPolicies.authorityDomain],
        redirectUri: "/",
        postLogoutRedirectUri: "/",
        navigateToLoginRequestUrl: true
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: isIE || isEdge || isFirefox
    },
    system: {
        allowNativeBroker: false, // Disables WAM Broker
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            }
        }
    }
};

// Scopes you add here will be prompted for consent during login
export const loginRequest = {
    scopes: []
    // scopes: ["https://karpalab2c.onmicrosoft.com/46468dd1-926d-4681-ba9d-3a71fdb770c8/ActAsAUser"]
};

/**
 * Enter here the coordinates of your web API and scopes for access token request
 * The current application coordinates were pre-registered in a B2C tenant.
 */
export const apiConfig = {
    scopes: ['https://karpalab2c.onmicrosoft.com/46468dd1-926d-4681-ba9d-3a71fdb770c8/ActAsAUser'],
    uri: 'https://karpalab2c.onmicrosoft.com/46468dd1-926d-4681-ba9d-3a71fdb770c8'
};
