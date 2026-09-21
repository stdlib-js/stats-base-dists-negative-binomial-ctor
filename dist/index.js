/** @license Apache-2.0 */

'use strict';

/**
* Negative binomial distribution constructor.
*
* @module @stdlib/stats-base-dists-negative-binomial-ctor
*
* @example
* var NegativeBinomial = require( '@stdlib/stats-base-dists-negative-binomial-ctor' );
*
* var nbinomial = new NegativeBinomial( 7.5, 0.2 );
*
* var y = nbinomial.cdf( 12.0 );
* // returns ~0.047
*
* var mode = nbinomial.mode;
* // returns 26.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
