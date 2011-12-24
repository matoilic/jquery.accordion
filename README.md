# jquery.accordion #

jquery.accordion is a multifunctional accordion plugin for [jQuery](http://jquery.com).

## Usage ##

Call `accordion` on the target element, e.g. `$('#myaccordion').accordion()`.

### Options ###

**handle**: the selector for the handle. Default: `.handle`

**panel**: the selector for the panel. Default: `.panel`

**openClass**: the CSS class to add to opened elements. Default: `open`

**staticClass**: the CSS class that indicates static elements. Default: `static`

**easing**: the easing function to use when opening a element. Default: `linear`

**duration**: the duration of the animation when opening a element in milliseconds. Default: `200`

**multiple**: if set to true, multiple elements can be open at the same time. Default: `false`

**toggle**: if set to true, opened elements are closed when clicking on them, thus it is possible to close all elements. This option is always set to true if multiple is enabled. Default: `false`

**start**: specifies which panel should be opened at the beginning. Default: `1`

## Version History ##

**0.1**

* initial release

## Licence ##

Copyright &copy; 2011 Mato Ilic <<info@matoilic.ch>>

jquery.accordion is dual licensed under the MIT and GPL licenses:

* http://www.opensource.org/licenses/mit-license.php 
* http://www.gnu.org/licenses/gpl.html