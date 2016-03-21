/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var KEY_FIRST_NAME = "firstName";
var KEY_LAST_NAME = "lastName";
var KEY_ADDRESS = "address";
var KEY_CITY = "city";
var KEY_STATE = "state";
var KEY_COUNTRY = "country";
var KEY_POSTAL_CODE = "postalCode";
var KEY_GENDER = "gender";
var KEY_EMAIL = "email";
var KEY_TWITTER = "twitterId";
var KEY_FACEBOOK = "facebookId";
var KEY_LINKEDIN = "linkedinId";
var KEY_LEAD_SOURCE = "leadSource";
var KEY_BIRTHDAY = "dateOfBirth";
var KEY_FACEBOOK_PROFILE_URL = "facebookProfileURL";
var KEY_FACEBOOK_PROFILE_PIC = "facebookPhotoURL";

var marketo = {
  /**
   * Call this method when user wants to initialize marketo application
   * Action name should be
   *
   * @param success the message if successful
   * @param fail the message if the action fails
   * @param secret_key provided by Marketo
   * @param muchkin_id provided by Marketo
   */
    initialize: function (success, fail, muchkin_id, secret_key) {
        return cordova.exec( success, fail,
            "MarketoPlugin",
            "initialize", [muchkin_id, secret_key]);
    },

    /**
     * Call this method when user wants to add support to the push notification
     *
     * @param success the message if successful
     * @param fail the message if the action fails
     * @param project_id represents the applications Google Developers Console's project id
     */
    initializeMarketoPush: function (success, fail, project_id) {
        return cordova.exec( success, fail,
            "MarketoPlugin",
            "initializeMarketoPush", [project_id]);
    },

    /**
     * Call this method when user wants to create a lead.
     *
     * @param success the message if successful
     * @param fail the message if the action fails
     * @param lead_data represents the lead data in Json format
     */
    associateLead: function (success, fail, lead_data) {
        return cordova.exec( success, fail,
            "MarketoPlugin",
            "associateLead", [lead_data]);
    },

    /**
     * Call this method when user wants to log users activity in his application.
     *
     * @param success the message if successful
     * @param fail the message if the action fails
     */
    onStop: function (success, fail) {
        return cordova.exec( success, fail,
            "MarketoPlugin",
            "onStop", []);
    },

    /**
     *  Call this method when user wants to log users activity in his application.
     *
     * @param success the message if successful
     * @param fail the message if the action fails
     */
    onStart: function (success, fail) {
        return cordova.exec( success, fail,
            "MarketoPlugin",
            "onStart", []);
    },

    /**
     * Call this method when user hits the reportAction .
     * Action name should be
     *
     * @param success the message if successful
     * @param fail the message if the action fails
     * @param action represents the action name in string format
     * @param action_metadata represents the actions data in Json format.
     */
    reportaction: function (success, fail, reportAction, action_metadata) {
        return cordova.exec( success, fail,
            "MarketoPlugin",
            "reportaction", [reportAction, action_metadata]);
    },

    /**
     * Call this method when user wants to remove secure signature
     *
     * @param success the message if successful
     * @param fail the message if the action fails
     */
    removeSecureSignature: function (success, fail) {
        return cordova.exec( success, fail,
            "MarketoPlugin",
            "removeSecureSignature", []);
    },

    /**
     * Call this method when user wants to set the request's timeout
     *
     * @param success the message if successful
     * @param fail the message if the action fails
     * @param secureMode represents the secure signature information in Json format
     */
     setSecureSignature: function (success, fail, accessKey, signature, email, timestamp) {
      return cordova.exec(success, fail,
        "MarketoPlugin",
        "setSecureSignature", [accessKey, signature, email, timestamp]);
    },

    /**
     * Call this method when user wants to check the status of secure mode
     *
     * @param success contains the boolean flag to check whether secure mode is on or off.
     * @param fail the message if the action fails
     */
    isSecureModeEnabled: function (success, fail) {
     return cordova.exec(success, fail,
       "MarketoPlugin",
       "isSecureModeEnabled",[]);
   },

    /**
     * Helper method to get DeviceId.
     * @param success should be the function which takes device id as a parameter ex. function(deviceid){ ... }
     * @param fail the message if the action fails
     * @return This method will return device ID if the MarketoSDK is initialized, otherwise will return null
     */
     getDeviceId: function (success, fail) {
      return cordova.exec(success, fail,
        "MarketoPlugin",
        "getDeviceId", []);
     },

     /**
      * Helper method to set notification configeration.
      * @param success the message if successful
      * @param fail the message if the action fails
      * @param image path for large notification icon. Available only Android Honeycomb and Above
      * @param resourceName should be the name of the resource for the small notification icon
      */
      setNotificationConfig: function (success, fail, imagePath, resourceName) {
       return cordova.exec(success, fail,
         "MarketoPlugin",
         "setNotificationConfig", [imagePath, resourceName]);
      },

      /**
       * Helper method to get DeviceId.
       * @param success should be the function which takes JSONArray as a parameter ex. function(config){ ... }
       * @param fail the message if the action fails
       * @return This method will return the notification configerations
       */
       getNotificationConfig: function (success, fail) {
        return cordova.exec(success, fail,
          "MarketoPlugin",
          "getNotificationConfig", []);
       },

    /**
     * Call this method when user wants to set the request's timeout
     *
     * @param success the message if successful
     * @param fail the message if the action fails
     * @param timeout represents the time in integer.
     */
    settimeout: function (success, fail, timeout){
      return cordova.exec(success, fail,
        "MarketoPlugin",
        "settimeout", [timeout]);
    }
}
module.exports = marketo;
