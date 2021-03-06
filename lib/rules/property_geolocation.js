/**
 * @fileoverview Rule property_geolocation
 * @author ScanJS contributors
 * @copyright 2015 Mozilla Corporation. All rights reserved.
 */
"use strict";

module.exports = function (context) {

  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'geolocation') {
        context.report(node, "geolocation can be unsafe");

      }
    }
  }

}
