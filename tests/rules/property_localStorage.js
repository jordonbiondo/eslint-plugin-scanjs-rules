/**
 * @fileoverview Test for property_localStorage rule
 * @author ScanJS contributors
 * @copyright 2015 Mozilla Corporation. All rights reserved
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../lib/rules/property_localStorage");
var RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new RuleTester();

eslintTester.run("property_localStorage", rule, {
  valid: [
    { code: " 'localStorage'" }
  ],    // Examples of code that should trigger the rule
  invalid: [

    {
      code: "window.localStorage.setItem('name', 'user1')",
      errors: [
        { message: "localStorage can be unsafe" }
      ]
    },
  ]
});  // auto-generated from scanjs rules.json
