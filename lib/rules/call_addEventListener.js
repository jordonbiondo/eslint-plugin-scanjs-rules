/**
 * @fileoverview Rule call_addEventListener
 * @author ScanJS contributors
 * @copyright 2015 Mozilla Corporation. All rights reserved.
 */
"use strict";

module.exports = function (context) {

  return {
    "CallExpression": function (node) {
      if ((node.callee.name == 'addEventListener') || ((node.callee.property) && (node.callee.property.name == 'addEventListener'))) {
        context.report(node, "The function addEventListener can be unsafe");
      }
    }
  };

}
