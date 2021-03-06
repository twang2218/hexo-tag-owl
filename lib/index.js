/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Hsu, Heng Yu
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
**/

'use strict';

var tag_selector = require('./tag');
var generator    = require('./generator');
var filter       = require('./filter');

/**
 * Tag Plugin: owl
 *   Provide media plugins.
**/
hexo.extend.tag.register('owl', function (args) {
  // arguments
  var tag  = args[0];
  var arg  = args.slice(1);
  var func = tag_selector[tag];
  if (func)
    return func(hexo, arg);
  return '';
})

/**
 * Generator and Filter Plugins: owl
 *   Insert default stylesheet for hexo-tag-owl components.
**/
hexo.extend.generator.register('owl', generator);
hexo.extend.filter.register('after_post_render', filter);