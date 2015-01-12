/*
 * module_template.js
 * Template for browser feature modules
 *
 * Michael S. Mikowski - mike.mikowski@gmail.com
 * Copyright (c) 2011-2012 Manning Publications Co.
*/

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

/*global $ */

var projects = (function () {
  'use strict';
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var
    configMap = {},
    stateMap  = {},
    jqueryMap = {},

    setJqueryMap, configModule, initModule, getProjects, formatProjectList,
    showErrorContent;
  //----------------- END MODULE SCOPE VARIABLES ---------------

  //------------------- BEGIN UTILITY METHODS ------------------
  // example : getTrimmedString
  //-------------------- END UTILITY METHODS -------------------

  //--------------------- BEGIN DOM METHODS --------------------
  // Begin DOM method /setJqueryMap/
  setJqueryMap = function () {
    var $container = stateMap.$container;

    jqueryMap = {
      $container : $container,
      $projectInfoContainer : $container.find("#project-info-container")
    };
  };
  // End DOM method /setJqueryMap/

  // Begin DOM method /formatProjectList/
  formatProjectList = function () {
    var $projectNames = jqueryMap.$container.find(".project-name");

    if ($projectNames.length > 5) {
      throw new Error ("It's time to implement formatting for > 5 project names.");
    }

    $projectNames.click( function (eventObj) {
      var
        onSuccess = function(data) {
        },
        onError = function (request, textStatus, error) {
          showErrorContent(jqueryMap.$projectInfoContainer);
        };

      $.ajax( {
          url: "projects/" + eventObj.currentTarget.innerHTML + ".html",
          data: null,
          error: onError,
          success: onSuccess
      });
    });
  };
  // End DOM method /formatProjectList/

  // Begin DOM method /populateProjectList/
  //populateProjectList = function () {
  //};
  // Begin DOM method /populateProjectList/
  
  // Begin DOM method /showErrorContent/
  showErrorContent = function ($container) {
    $container.html("<img src='http://www.quickmeme.com/img/ee/eea1e93546608fbb4e238bff8393da3105dfe414cb0a99f7f2af84f49401539b.jpg'/>");
  };
  // Begin DOM method /showErrorContent/
  //---------------------- END DOM METHODS ---------------------

  //------------------- BEGIN EVENT HANDLERS -------------------
  // example: onClickButton = ...
  //-------------------- END EVENT HANDLERS --------------------



  //------------------- BEGIN PUBLIC METHODS -------------------
  // Begin public method /configModule/
  // Purpose    : Adjust configuration of allowed keys
  // Arguments  : A map of settable keys and values
  // Settings   :
  //   * configMap.settable_map declares allowed keys
  // Returns    : true
  // Throws     : none
  //
  configModule = function ( input_map ) {
    return true;
  };
  // End public method /configModule/

  // Begin public method /initModule/
  // Purpose    : Initializes module
  // Arguments  :
  //  * $container the jquery element used by this feature
  // Returns    : true
  // Throws     : none
  //
  initModule = function ( $container ) {
    stateMap.$container = $container;
    setJqueryMap();
    formatProjectList();
    return true;
  };
  // End public method /initModule/

  // return public methods
  return {
    configModule : configModule,
    initModule   : initModule
  };
  //------------------- END PUBLIC METHODS ---------------------
}());
