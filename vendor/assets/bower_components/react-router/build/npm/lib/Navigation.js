"use strict";

var warning = require("react/lib/warning");
var PropTypes = require("./PropTypes");

function deprecatedMethod(routerMethodName, fn) {
  return function () {
    warning(false, "Router.Navigation is deprecated. Please use this.context.router." + routerMethodName + "() instead");

    return fn.apply(this, arguments);
  };
}

/**
 * A mixin for components that modify the URL.
 *
 * Example:
 *
 *   var MyLink = React.createClass({
 *     mixins: [ Router.Navigation ],
 *     handleClick(event) {
 *       event.preventDefault();
 *       this.transitionTo('aRoute', { the: 'params' }, { the: 'query' });
 *     },
 *     render() {
 *       return (
 *         <a onClick={this.handleClick}>Click me!</a>
 *       );
 *     }
 *   });
 */
var Navigation = {

  contextTypes: {
    router: PropTypes.router.isRequired
  },

  /**
   * Returns an absolute URL path created from the given route
   * name, URL parameters, and query values.
   */
  makePath: deprecatedMethod("makePath", function (to, params, query) {
    return this.context.router.makePath(to, params, query);
  }),

  /**
   * Returns a string that may safely be used as the href of a
   * link to the route with the given name.
   */
  makeHref: deprecatedMethod("makeHref", function (to, params, query) {
    return this.context.router.makeHref(to, params, query);
  }),

  /**
   * Transitions to the URL specified in the arguments by pushing
   * a new URL onto the history stack.
   */
  transitionTo: deprecatedMethod("transitionTo", function (to, params, query) {
    this.context.router.transitionTo(to, params, query);
  }),

  /**
   * Transitions to the URL specified in the arguments by replacing
   * the current URL in the history stack.
   */
  replaceWith: deprecatedMethod("replaceWith", function (to, params, query) {
    this.context.router.replaceWith(to, params, query);
  }),

  /**
   * Transitions to the previous URL.
   */
  goBack: deprecatedMethod("goBack", function () {
    return this.context.router.goBack();
  })

};

module.exports = Navigation;