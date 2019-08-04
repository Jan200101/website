codesnippets = ['<a class="red">from</a> sys <a class="red">import</a> _getframe<br><a class="red">from</a> __main__ <a class="red">import</a> bot<br><a class="red">from</a> discord.ext.commands <a class="red">import</a> Context<br><br><br><a class="blue">class</a> <a class="green">MissingContext</a>(<aclass="blue">Exception</a>):<br>    pass<br><br><br><br><a class="blue">class</a> <a class="green">asyncmodule</a>:<br><br>    <a class="blue">def</a> <a class="blue">__init__</a>(<a class="orange">self</a>, <a class="orange">bot</a>):<br>        functions = {<br>            <a class="yellow">\'say\'</a>: <a class="orange">self</a>.say,<br>            <a class="yellow">\'send_message\'</a>: <a class="orange">self</a>.send_message,<br>            <a class="yellow">\'send_typing\'</a>: <a class="orange">self</a>.send_typing,<br>        }<br><br>        <a class="orange">self</a>.appendattr(bot, functions)<br><br>    <a class="green">@</a><a class="blue">staticmethod</a><br>    <a class="blue">def</a> <a class="green">appendattr</a>(<a class="orange">bot</a>, <a class="orange">functions</a>):<br>        <a class="red">for<a> name, val <a class="red">in<a> functions.items():<br>            bot.<a class="blue">__setattr__</a>(name, val)<br><br>    <a class="gray"># BRIDGE FUNCTIONS BEYOND HERE</a><br>    <a class="blue">async</a> <a class="blue">def</a> <a class="green">say</a>(<a class="orange">self</a>, <a class="orange">msg</a>):<br>        stack = [x[<a class="purple">1</a>] for x in _getframe(<br>            <a class="purple">1</a>).f_locals.items() if <a class="blue">isinstance</a>(x[<a class="purple">1</a>], Context)]<br>        <a class="red">if not</a> stack:<br>            print(<a class="yellow">"WARNING Context is missing in "</a> <a class="red">+</a><br>                  _getframe(1).f_code.co_name)<br>            <a class="gray"># context was optional in async and mandatory in rewrite</a><br>            <a class="red">return</a><br>        <a class="red">await</a> stack[0].send(msg)<br><br>    <a class="blue">async</a> <a class="blue">def</a> <a class="green">send_message</a>(<a class="orange">self</a>, <a class="orange">channel</a>, <a class="orange">msg</a>):<br>        <a class="red">return</a> <a class="red">await</a> channel.send(msg)<br><br>    <a class="blue">async</a> <a class="blue">def</a> <a class="green">send_typing</a>(<a class="orange">self</a>, <a class="orange">destination</a>, <a class="red">*</a><a class="orange">args</a>, <a class="red">**</a><a class="orange">kwargs</a>):<br>        <a class="red">await</a> destination.trigger_typing(<a class="red">*</a>args, <a class="red">**</a>kwargs)<br><br>    <a class="blue">async def</a> <a class="green">wait_for_message</a>(<a class="orange">self</a>, <a class="red">*</a><a class="orange">args</a>, <a class="red">**</a><a class="orange">kwargs</a>):<br>        <a class="red">return</a> <a class="red">await</a> <a class="orange">self</a>.bot.wait_for(<a class="yellow">\'message\'</a>, <a class="red">*</a>args, <a class="red">**</a>kwargs)<br><br><br><a class="blue">def</a> <a class="green">init</a>():<br>    asyncmodule(bot)<br><br><br><a class="blue">def</a> <a class="green">destroy()</a>:<br>    <a class="red">pass</a><br>',
                'Shell = (<a class="blue">async function</a>(<a class="orange">term</a>, <a class="orange">msg</a>, <a class="orange">interactive</a> <a class="red">=</a> <a class="purple">false</a>, <a class="orange">debug</a> <a class="red">=</a> <a class="purple">false</a>)<br>{<br>    <a class="gray">// term: html object to insert msg into<br>    // msg: string to insert<br>    //      supports \\n<br>    // interactive: allows for input after all text has been displayed<br>    // debug: shows key code of key pressed</a><br>    <a class="blue">var</a> sleep, termmsg, x, i;<br><br>    <a class="blue">function</a> <a class="green">sleep</a>(<a class="orange">milliseconds</a>) {<br>        <a class="red">return new</a> <a class="blue">Promise</a>((<a class="orange">resolve</a>)<a class="blue">=>setTimeout</a>(resolve, milliseconds));<br>    }<br><br>    termmsg <a class="red">=</a> <a class="yellow">""</a>;<br>    for (<a class="blue">var</a> x <a class="red">=</a> <a class="purple">0</a>; x <a class="red">&lt;</a> <a class="purple">3</a>; x<a class="red">++</a>)<br>    {<br>        <a class="red">await</a> <a class="blue">sleep</a>(<a class="purple">200</a>);<br>        term.innerHTML <a class="red">=</a> <a class="yellow">"_"</a>;<br>        <a class="red">await</a> <a class="blue">sleep</a>(<a class="purple">200</a>);<br>        term.innerHTML <a class="red">=</a> <a class="yellow">""</a>;<br>    }<br><br>    <a class="red">for</a> (<a class="blue">var</a> x <a class="red">=</a> <a class="purple">0</a>; x <a class="red">&lt;</a> msg.length; x<a class="red">++</a>)<br>    {<br>        <a class="red">if</a> (msg[x] <a class="red">==</a> <a class="yellow">"<a class="purple">\\n</a>"</a>)<br>        {<br>            term.innerHTML <a class="red">=</a> termmsg;<br>            <a class="red">if</a> (<a class="red">!</a>(msg[x<a class="red">-</a><a class="purple">1</a>] <a class="red">==</a> <a class="yellow">"<a class="purple">\\n</a>"</a>))<br>            {<br>                <a class="red">for</a> (<a class="blue">var</a> i <a class="red">=</a> <a class="purple">0</a>; i <a class="red">&lt;</a> <a class="purple">1</a>; i<a class="red">++</a>)<br>                {<br>                    <a class="red">await</a> <a class="blue">sleep</a>(<a class="purple">200</a>);<br>                    term.innerHTML <a class="red">+=</a> <a class="yellow">"_"</a><br>                    <a class="red">await</a> <a class="blue">sleep</a>(<a class="purple">200</a>);<br>                    term.innerHTML <a class="red">=</a> term.innerHTML.<a class="blue">substring</a>(<a class="purple">0</a>, term.innerHTML.length - <a class="purple">1</a>)<br>                }<br>            }<br>            termmsg <a class="red">+=</a> <a class="yellow">"<br />"</a>;<br>            <a class="red">continue</a>;<br>        }<br>        termmsg <a class="red">+=</a> msg[x];<br>        term.innerHTML = termmsg <a class="red">+</a> <a class="yellow">"_"</a>;<br>        <a class="red">await</a> <a class="blue">sleep</a>(<a class="purple">30</a>);<br>    }<br>    <a class="red">if</a> (interactive)<br>    {<br>        <a class="blue">var</a> modifier = <a class="purple">32</a>;<br>        <a class="blue">document</a>.<a class="blue">addEventListener</a>(<a class="yellow">\'keydown\'</a>, <a class="blue">function</a>(<a class="orange">event</a>) {<br>            <a class="blue">var</a> keyCode = event.keyCode;<br>            <a class="red">if</a> (debug)<br>            {<br>                <a class="blue">console</a>.<a class="blue">log</a>(keyCode);<br>            }<br>            <a class="red">if</a> (keyCode <a class="red">==</a> <a class="purple">16</a> <a class="red">||</a> keyCode <a class="red">==</a> <a class="purple">20</a>)<br>            {<br>                <a class="red">if</a> (modifier <a class="red">!=</a> <a class="purple">0</a>)<br>                {<br>                    modifier <a class="red">=</a> <a class="purple">0</a;<br>                }<br>                <a class="red">else</a><br>                {<br>                    modifier <a class="red">=</a> <a class="purple">32</a>;<br>                }<br>                <a class="red">return</a>;<br>            }<br>            <a class="gray">/*  if (keyCode > 127)<br>             *{<br>             *   keyCode -= 144;<br>             *}<br>             */</a><br>            if (keyCode <a class="red">&lt;</a> <a class="purple">31</a> && keyCode <a class="red">&lt;</a> <a class="purple">127</a>)<br>            {<br>                <a class="red">if</a> (term.innerHTML.<a class="blue">endsWith</a>(<a class="yellow">"_"</a>))<br>                {<br>                    term.innerHTML <a class="red">=</a> term.innerHTML.<a class="blue">slice</a>(<a class="purple">0</a>, <a class="purple">-1</a>);<br>                }<br>                term.innerHTML <a class="red">+=</a> <a class="blue">String</a>.<a class="blue">fromCharCode</a>(keyCode <a class="red">+</a> modifier);<br>            }<br>            <a class="red">else if</a> (keyCode <a class="red">==</a> <a class="purple">13</a>)<br>            {<br>                <a class="blue">if</a> (term.innerHTML.<a class="blue">endsWith</a>(<a class="yellow">"_"</a>))<br>                {<br>                    term.innerHTML <a class="red">=</a> term.innerHTML.slice(<a class="purple">0</a>Y, <a class="purple">-1</a>);<br>                }<br>                term.innerHTML <a class="red">+=</a> <a class="yellow">"<br />"</a>;<br>            }<br>        });<br>    }<br><br>    <a class="red">while</a> (<a class="purple">true</a>)<br>    {<br>        <a class="red">if</a> (!term.innerHTML.<a class="blue">endsWith</a>(<a class="yellow">"_"</A>))<br>        {<br>            term.innerHTML <a class="red">+=</a> <a class="yellow">"_"</a>;<br>            <a class="red">await</a> <a class="blue">sleep</a>(<a class="purple">200</a>);<br>        }<br><br>        if (term.innerHTML.<a class="blue">endsWith</a>(<a class="yellow">"_"</a>))<br>        {<br>            term.innerHTML <a class="red">=</a> term.innerHTML.<a class="blue">substring</a>(<a class="purple">0</a>, term.innerHTML.length - <a class="purple">1</a>);<br>            <a class="red">await</a> <a class="blue">sleep</a>(<a clasS="purple">200</a>);<br>        }<br>    }<br>})<br>'];


injectcode = function() {
 	var codeblock = document.getElementById("codeblock");

 	if (codeblock)
 	{
		codeblock.innerHTML = codesnippets[Math.floor(Math.random() * codesnippets.length)];
		codeblock.classList.add("injected")
 	}
}