# Marketo Mobile SDK for PhoneGap

The Marketo Mobile SDK allows integration with Marketo Mobile Engagement (MME).

## Plugin Change Log
v0.9.5 (April 23, 2024)
- Enhancements & bug fixes for Android SDK.
- Privacy Manifest bug fixes for iOS SDK.

v0.9.4 (January 30, 2024)
- Enhancements & bug fixes for Android SDK.

v0.9.3 (January 16, 2024)
- SDK includes iOS Privacy manifest as per Apple guidelines.

v0.9.2 (September 05, 2023)
- Bug fixes & enhancements.

v0.9.1 (June 27, 2023)
- iOS change only - XCFramework for multiple platforms.

v0.9.0 (June 05, 2023)
- Added parameter to capture the type of framework used for development (native, ionic, phonegap or reactnative)

v0.8.9 (March 06, 2023)
- iOS changes only - Upgraded SDK minimum iOS version support to 12.0 & enhancements

v0.8.8 (May 25, 2022)
- Added support for Android API Level 31
- Mnimum support Android API Level is now 21

v0.8.4 (March 22, 2021)
- Fixed Bugs 

v0.8.2 (March 16, 2020)
- Fixed Bugs 

v0.8.1 (March 06, 2020)
- Fixed Bugs 

v0.8.0 (July 19, 2019)
- Fixed Bugs

v0.7.9 (June 01, 2019)
- Added support for Cordova 9.0.0 & Android 8.0.0
- Fixed Bugs

v0.7.8 (Dec 10, 2018)
- Added Support for Firebase Cloud Messaging in Android
- Fixed Bugs

v0.7.7 (May 25, 2018)
- Added Support for Android API Level P (28)
- Fixed Bugs

v0.7.6 (February 12, 2018)
- Updated Android framework
- Using Android Activity Lifecycle Callbacks

v0.7.5 (January 4, 2018)
- Updated iOS bundle and framework
- Minimum supported Cordova CLI version: 7.1.0

## iOS Change Log
v0.8.6 (April 23, 2024)
- Privacy Manifest bug fixes for iOS SDK.

v0.8.5 (January 16, 2024)
- SDK includes iOS Privacy manifest as per Apple guidelines.

v0.8.4 (September 05, 2023)
- Enhancements & bug fixes.

v0.8.2 (June 27, 2023)
- iOS change only - XCFramework for multiple platforms.

v0.8.0 (March 25, 2023)
- Upgraded SDK minimum iOS version support to 12.0 & enhancements

v0.7.9 (August 19, 2021)
- Bug fixes & enhancements.

v0.7.8 (March 16, 2020)
- Fixed unregistering push token issue.

v0.7.7 (March 6, 2020)
- Fixed Tap Activities that are Not Being Recorded
- Removed IOS_DIR as iOS doesn't support firebase

v0.7.6 (September 4, 2018)
 - Fixed tap gesture error at In-app

v0.7.5 (September 8, 2017)
- Fixed build errors and warnings in xCode 9

v0.7.4 (July 7, 2017)
- Exposed removeDevicePushToken() method

v0.7.1 (November 24, 2016)
- Handling notification in loadingOptions for iOS 10 to track tap activity when app is closed.

v0.7.0 (October 5, 2016)
- Using UNNotification to handle push received while app is in foreground with a local notification

v0.6.4 (August 23, 2016)
- Exposed method [MarketoSDK reportAll] to immediately send events

v0.6.3 (July 15, 2016)
- Support for InApp display frequnecy once.

v0.6.0 (June, 11 2016)
- InApp Notifications

v0.5.1 - v0.5.3
- Fixed new_install bug
- Fix for version bug

v0.5.0
- Advanced secure access
- Bitcode refactor

## Android Change Log
v0.8.12 (April 23, 2024)
- Enhancements & bug fixes.

v0.8.11 (January 30, 2024)
- Enhancements & bug fixes.

v0.8.10 (September 05, 2023)
- Enhancements & bug fixes.

v0.8.9 (May 02, 2023)
- Added support for capturing framework type & bug fixes.

v0.8.7 (August 31, 2021)
- Bug Fixes and feature enhancements.

v0.8.2 (March 23, 2020)
- Added Android https TLSv1.3 compliance

v0.8.1 (Jul 18, 2019)
- Fixed Bugs

v0.8.0 (Mar 26, 2019)
- Fixed Bugs

v0.7.9 (Mar 04, 2019)
- FCM changes to support custom Marketo Push Notification Receiver
- Configured Push Notification Channel Name.
- Fixed Bugs

v0.7.8 (Dec 10, 2018)
- Added Support for Firebase Cloud Messaging
- Fixed Bugs

v0.7.7 (May 25, 2018)
- Added Support for Android API Level P (28)
- Fixed Bugs

v0.7.6 (January 18, 2018)
- Added support for Android API Levels 26 and 27
- Using Android Activity Lifecycle Callbacks
- Deprecated Marketo.onStart() and Marketo.onStop(), no longer required
- The minimum supported Android API Level is now 14

v0.7.5 (July 7, 2017)
- Fixed bug

v0.7.3 - v0.7.4 (July 7, 2017)
- Exposed removeDevicePushToken() method
- Notifications are now dismissed from the notification center after tap (Android 4.0)
- Custom large notification icon no longer shows default image (Android 4.0)

v0.7.2 (November 30, 2016)
- Fixed bug when using Priority method in Android versions previous to 5.0
- Default sound in Android is now on when user receives a notification
- Android Push Notification text now wrap to make it more readable
- Migrated from HttpClient to HttpURLConnection

v0.7.1 (November 4, 2016)
- Remove GET_ACCOUNTS permission check
- No longer stacking push notifications
- Catching client protocol exception

v0.7.0 (October 13, 2016)
- Supporting Android Version 7.0

v0.6.4 (August 22, 2016)
- Exposed method [MarketoSDK reportAll] to immediately send events

v0.6.3 (July 15, 2016)
- Bug fixes related to inapp
- added display frequency 'once'

v0.6.0 (June 10, 2016)
- InApp Notifications

v0.5.3
- Fixed bug that stop push notification when app was closed

v0.5.2
- Removed depricated android methods to allow building with Proguard

v0.5.1
- Fixed intent.getAction condition

v0.5.0
- New secure access feature
- New app type selection
- Android notificaiton config large icon

## Contributing Code

We accept pull requests! Please raise a merge request.

## Issues

If you encounter issues using or integrating this plugin, please file a support ticket at support.marketo.com

## Marketo PhoneGap Plugin Installation Guide

### Prerequisites
1.  Register an application in Marketo Admin portal, get your application secret key and munchkin id.
2.  Configure Android Push access [learn here](http://docs.marketo.com/display/public/DOCS/Configure+Mobile+App+Android+Push+Access)
3.  Configure iOS Push access [learn here](https://docs.marketo.com/display/public/DOCS/Configure+Mobile+App+iOS+Push+Access)

### Setup Marketo PhoneGap plugin

1.  Install Marketo PhoneGap Plugin using PhoneGap/Cordova CLI *(Minimum supported version: 7.1.0)*: Please follow below steps or ensure you have latest cordova version installed on the system [learn more](https://cordova.apache.org/docs/en/latest/guide/cli/)
2.  Once it’s ready go to your PhoneGap application directory and run following command.

```javascript
cordova plugin add https://github.com/Marketo/PhoneGapPlugin.git --variable APPLICATION_SECRET_KEY="YOUR_APPLICATION_SECRET"
```

### Migrate to newer version

```javascript
// This command will remove existing marketo plugin
cordova plugin remove com.marketo.plugin

// This command will add it again.
cordova plugin add https://github.com/Marketo/PhoneGapPlugin.git --variable APPLICATION_SECRET_KEY="YOUR_APPLICATION_SECRET"
```

This will add Marketo Plugin into your phonegap application.

### Cordova version 8.0.0 (Cordova@Android7.0.0) and above

Once the Cordova Android platform is built, open the app with Android Studio and update the dirs value of the -Marketo.gradle file found in the com.marketo.plugin folder.

```javascript
repositories{
  jcenter()
  flatDir{
      dirs '../app/src/main/aar'
   }
}
```

## Firebase Cloud Messaging (FCM) Support
1. Configure Firebase App on Firebase Console.
    - Create/Add a Project on Firebase Console.
        - In the Firebase console, select Add Project.
        - Select your GCM project from the list of existing Google Cloud projects, and select Add Firebase.
        - In the Firebase welcome screen, select Add Firebase to your Android App.
        - Provide your package name and SHA-1, and select Add App. A new google-services.json file for your Firebase app is downloaded.
    - Navigate to ‘Project Settings’ in Project Overview
        - Click on ‘General’ tab. Download the ‘google-services.json’ file.
        - Click on ‘Cloud Messaging’ tab. Copy ‘Server Key’ & ‘Sender ID’. Provide these ‘Server Key’ & ‘Sender ID’ to Marketo.
    - Configure FCM changes in Phonegap App
        - Move the downloaded ‘google-services.json’ file into your Phonegap app module root directory

## Track Push Notifications
1.  Paste the following code inside the application:didFinishLaunchingWithOptions: function.

###### Objective-C
```Objective-C
Marketo *sharedInstance = [Marketo sharedInstance];
[sharedInstance trackPushNotification:launchOptions];

```
###### Swift
```Swift
let sharedInstance: Marketo = Marketo.sharedInstance()
sharedInstance.trackPushNotification(launchOptions)
```

## Initialize Marketo Framework
1.  After successful installation, you need to initialize Marketo framework.
2.  Open your main js file and Add the following code under “onDeviceReady: function()”.

```javascript
// This method will Initialize the Marketo Framework using Your MunchkinId and secret key
marketo.initialize(
  	function() { console.log("MarketoSDK Init done."); } ,
  	function(error) { console.log("an error occurred:" + error); },
  	'YOUR_MUNCHKIN_ID', 'YOUR_SECRET_KEY', 'YOUR_MOBILE_FRAMEWORKTYPE'
);

// For session tracking, please add following.
marketo.onStart(
  function(){console.log("onStart.");},
  function(error){console.log("Failed to report onStart." + error);}
);
```
### Initialize Marketo Push Notification :
1.  After Initializing Marketo SDK successfully , you need to setup push notification.
2.  Open your main js file and Add the following code under “onDeviceReady: function()” after marketo.initialize function.

```javascript
// This function will Enable user notifications (will prompt the user to accept push notifications in iOS)
marketo. initializeMarketoPush(
  function() { console.log("Marketo push successfully initialized."); } ,
  function(error) { console.log("an error occurred:" + error); },
  GCM_PROJECT_ID // this is required for Android and will be ignored in iOS
);
```
Note: You can get your GCM Project ID from Google Developer Console https://console.developers.google.com/

######The token can also be unregistered when user logs out.

```javascript
marketo. uninitializeMarketoPush(
  function() { console.log("Marketo push successfully uninitialized."); } ,
  function(error) { console.log("an error occurred:" + error); }
);
```

### Marketo Associate Lead:
1.  You can create a Marketo Lead by calling associate lead method.

```javascript
  // First create a lead as below
  var lead_obj = {};
  lead_obj[marketo.KEY_FIRST_NAME]= "John";
  lead_obj[marketo.KEY_LAST_NAME]= "Erickson";
  lead_obj[marketo.KEY_EMAIL]= "johnE@marketo.com";
  lead_obj[marketo.KEY_ADDRESS]= "901 Mariners Island Boulevard";
  lead_obj[marketo.KEY_CITY]= "San Mateo";
  lead_obj[marketo.KEY_STATE]= "CA";
  lead_obj[marketo.KEY_COUNTRY]= "USA";
  lead_obj[marketo.KEY_POSTAL_CODE]= "94404";
  lead_obj[marketo.KEY_GENDER]= "Male";

  // Use associate function to associate it.
  marketo.associateLead(
    function() {
      console.log("MarketoSDK : Lead Associated");
    },
    function(error) {
      console.log("an error occurred:" + error);
    },
    JSON.stringify(lead_obj)
  );
```

### Marketo Report Action:
1.  You can report any user performed action by calling the reportaction method.

```javascript
  // First create an event as below
  var event = {
    "Action Type":"Add To Cart",
    "Action Details":"Adding Product in cart",
    "Action Metric":"10",
    "Action Length":"1"
  }

  marketo.reportaction(
    function(){console.log("Reported Action Successfully.");},
    function(error){console.log("Failed to report Action." + error);},
    "Add To Cart",
    JSON.stringify(event)
  );
```

###Marketo Report All Actions:
1.  You can report any user performed action by calling the reportaction method.

```javascript
  marketo.reportAll(
    function(){console.log("Reported All Actions Successfully.");},
    function(error){console.log("Failed to report Actions." + error);}
  );
```

### Marketo session reporting
1.  Bind pause and resume events as show below to report Start and stop to track time spent in mobile application.(Note this is required in android)
.
```javascript
  //Add the following code in your www/js/index.js

  bindEvents: function() {
     document.addEventListener('deviceready', this.onDeviceReady, false);
     document.addEventListener('pause', this.onStop, false);
     document.addEventListener('resume', this.onStart, false);
  },
  onStop: function() {
     marketo.onStop(
     function(){console.log("onStop");},
     function(error){console.log("Failed to report onStop." + error);});
  },
  onStart: function() {
     marketo.onStart(
     function(){console.log("onStart.");},
     function(error){console.log("Failed to report onStart." + error);});
  },
  ```
