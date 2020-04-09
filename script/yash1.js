var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {            
            var user = authResult.user;
            if (authResult.additionalUserInfo.isNewUser) {
            
                db.collection("users").doc(user.uid).set({
                                name: user.displayName,
                                email: user.email
                            }).then(function () {
                                console.log("New user added to firestore");
                                window.location.assign("menu.html");
                            })
                            .catch(function (error) {
                                console.log("Error adding new user: " + error);
                });

                db.collection("users").doc("users").add({
                                name: user.displayName,
                                email: user.email
                            }).then(function () {
                                console.log("New user added to firestore");
                                window.location.assign("menu.html");
                            })
                            .catch(function (error) {
                                console.log("Error adding new user: " + error);
                            });
                    } else {
                        return true;
                    }
                    return false;
                },
                uiShown: function () {
                    // The widget is rendered.
                    // Hide the loader.
                    document.getElementById('loader').style.display = 'none';
                }
            },
            // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
            signInFlow: 'popup',
            signInSuccessUrl: 'menu.html',
            signInOptions: [
                
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                //firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            tosUrl: 'menu.html',
            // Privacy policy url.
            privacyPolicyUrl: 'menu.html',
            accountChooserEnabled: false
        };
        ui.start('#firebaseui-auth-container', uiConfig);
    



