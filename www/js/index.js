/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

UserApp.initialize({ appId: "5610b77f16ff4" });

UserApp.User.save({
    "first_name": "Timothy",
    "email": "timothy.johansson@userapp.io",
    "login": "timothy",
    "password": "v3rYsecre7!",
    "properties": {
        "age": {
            "value": 24,
            "override": true
        }
    },
    "subscription": {
        "price_list_id": "qcRTCZiKajkbl-kNATL1vk",
        "plan_id": "j5V9j7jBdJuCEMkBXseLfm",
        "override": false
    }
}, function(error, result){
    // Handle error/result
});

UserApp.User.login({ "login": "timothy", "password": "v3rYsecre7!" }, function(error, result) {
    if (error) {
        // Something went wrong...
        // Check error.name. Might just be a wrong password?
    } else if (result.locks && result.locks.length > 0) {
        // This user is locked
    } else {
        // User is logged in, save result.token in a cookie called 'ua_session_token'
    }
});

UserApp.User.logout(function(error, result){
    // Clear cookie, redirect to login page, etc.
});

UserApp.User.get({ user_id: "self" }, function(error, user) {
    if (error) {
        // User not logged in
    } else {
        // Success, the profile is at user[0]
    }
});

// Check if there is a session cookie
var token = Cookies.get("ua_session_token");
if (token) {
    // Yes, there is
    UserApp.setToken(token);

    // Get the logged in user
    UserApp.User.get({ user_id: "self" }, function(error, user) {
        if (error) {
            // The token has probably expired, go to the login page
            window.location.href = "logon.html";
        } else {
            // Success, the profile is at user[0]
        }
    });
} else {
    // No, redirect the user to the login page
    window.location.href = "logon.html";
}