tagtitle.js
========

Tag Title is jquery plugin used to tag title attribute of component on image or any thing.

it reads the title in the html element and convert that to tagtitle.

sample :

	    <div style="float:left">
		        <img  src="img/nature1.jpg" alt="" title="Good Evening" />
			<img  src="img/nature3.jpg" alt="" title="Beautiful Sun Set" />
			<img  src="img/nature4.jpg" alt="" title="Nature !!" />		
           </div>
           
 It reads title of element and create tagTitle.

This enables title like below snap.

![demo](https://raw.github.com/uttesh/tagtitle/master/img/demo.png)



<h2>
<a name="dependencies" class="anchor" href="#dependencies"><span class="mini-icon mini-icon-link"></span></a>Dependencies</h2>

<ul>
<li><a href="https://github.com/jquery/jquery" target="_blank">jQuery</a></li>
</ul>

<h2>
<a name="usage" class="anchor" href="#usage"><span class="mini-icon mini-icon-link"></span></a>Usage</h2>

            $("img").tagtitle({
  		position: "middle",
                hideToolTip: false,
                tagfontSize: "15"
             });
			 
	   $("#article_1").tagtitle({
		position: "top",
                hideToolTip: true,
                tagfontSize: "15"
             });
             
<p> We can change the position of tag title on element by "position" attribute</p>

<ul>
<li>top: Show tag title on top</li>
<li>middle: Show tag title on middle</li>
<li>bottom: Show tag title on bottom</li>
</ul><h3>

<p> "hideToolTip" attribute is default false, if true it will hide title tooltip</p>

<p> "tagfontSize" attribute is default 15px, we can set according into requirement</p>

<h3>
<a name="license" class="anchor" href="#license"><span class="mini-icon mini-icon-link"></span></a>License</h3>

<p>(The MIT license)</p>

<p>Copyright (c) 2013 Uttesh Kumar</p>

<p>Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:</p>

<p>The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.</p>

<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p></article>



