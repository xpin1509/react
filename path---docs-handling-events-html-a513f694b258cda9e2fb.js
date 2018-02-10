webpackJsonp([83560920648576],{777:function(n,s){n.exports={data:{markdownRemark:{html:'<p>React 元素的事件处理和 DOM元素的很相似。但是有一点语法上的不同:</p>\n<ul>\n<li>React事件绑定属性的命名采用驼峰式写法，而不是小写。</li>\n<li>如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM元素的写法)</li>\n</ul>\n<p>例如，传统的 HTML：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>activateLasers()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Activate Lasers\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>React 中稍稍有点不同：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="gatsby-highlight-code-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>activateLasers<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n</span>  Activate Lasers\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>在 React 中另一个不同是你不能使用返回 <code>false</code> 的方式阻止默认行为。你必须明确的使用 <code>preventDefault</code>。例如，传统的 HTML 中阻止链接默认打开一个新页面，你可以这样写：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>console.log(<span class="token punctuation">\'</span>The link was clicked.<span class="token punctuation">\'</span>); return false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Click me\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>在 React，应该这样来写：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">ActionLink</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'The link was clicked.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span>\n</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n<span class="gatsby-highlight-code-line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n</span>      Click me\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>在这里，<code>e</code> 是一个合成事件。React 根据 <a href="https://www.w3.org/TR/DOM-Level-3-Events/">W3C spec</a> 来定义这些合成事件，所以你不需要担心跨浏览器的兼容性问题。查看 <a href="/docs/events.html">SyntheticEvent</a> 参考指南来了解更多。</p>\n<p>使用 React 的时候通常你不需要使用 <code>addEventListener</code> 为一个已创建的 DOM 元素添加监听器。你仅仅需要在这个元素初始渲染的时候提供一个监听器。</p>\n<p>当你使用 <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes">ES6 class</a> 语法来定义一个组件的时候，事件处理器会成为类的一个方法。例如，下面的 <code>Toggle</code> 组件渲染一个让用户切换开关状态的按钮：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Toggle</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>isToggleOn<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="gatsby-highlight-code-line">    <span class="token comment">// This binding is necessary to make `this` work in the callback</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n\n<span class="gatsby-highlight-code-line">  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>prevState <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">      isToggleOn<span class="token punctuation">:</span> <span class="token operator">!</span>prevState<span class="token punctuation">.</span>isToggleOn\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span>\n</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n<span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n</span>        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isToggleOn <span class="token operator">?</span> <span class="token string">\'ON\'</span> <span class="token punctuation">:</span> <span class="token string">\'OFF\'</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toggle</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><a href="http://codepen.io/gaearon/pen/xEmzGg?editors=0010">在 CodePen 上试试。</a></p>\n<p>你必须谨慎对待 JSX 回调函数中的 <code>this</code>，类的方法默认是不会<a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind">绑定</a> <code>this</code> 的。如果你忘记绑定 <code>this.handleClick</code> 并把它传入 <code>onClick</code>, 当你调用这个函数的时候 <code>this</code> 的值会是 <code>undefined</code>。</p>\n<p>这并不是 React 的特殊行为；它是<a href="https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/">函数如何在 JavaScript 中运行</a>的一部分。通常情况下，如果你没有在方法后面添加 <code>()</code> ，例如 <code>onClick={this.handleClick}</code>，你应该为这个方法绑定 <code>this</code>.</p>\n<p>如果使用 <code>bind</code> 让你很困惑，这里有两种方式可以解决。如果你正在使用实验性的<a href="https://babeljs.io/docs/plugins/transform-class-properties/">属性初始化器语法</a>，你可以使用属性初始化器来正确的绑定回调函数：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">LoggingButton</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token comment">// This syntax ensures `this` is bound within handleClick.</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token comment">// Warning: this is *experimental* syntax.</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'this is:\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span>\n</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        Click me\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>这个语法在 <a href="https://github.com/facebookincubator/create-react-app">Create React App</a> 中默认开启。</p>\n<p>如果你没有使用属性初始化器语法，你可以在回调函数中使用 <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions">箭头函数</a>：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">LoggingButton</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'this is:\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token comment">// This syntax ensures `this` is bound within handleClick</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n</span>        Click me\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>使用这个语法有个问题就是每次 <code>LoggingButton</code> 渲染的时候都会创建一个不同的回调函数。在大多数情况下，这没有问题。然而如果这个回调函数作为一个属性值传入低阶组件，这些组件可能会进行额外的重新渲染。我们通常建议在构造函数中绑定或使用属性初始化器语法来避免这类性能问题。</p>\n<h2 id="向事件处理程序传递参数"><a href="#%E5%90%91%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E7%A8%8B%E5%BA%8F%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>向事件处理程序传递参数</h2>\n<p>通常我们会为事件处理程序传递额外的参数。例如，若是 <code>id</code> 是一个内联 id，以下两种方式都可以向事件处理程序传递参数：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">deleteRow</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Delete Row<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>deleteRow<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Delete Row<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>上述两种方式是等价的，分别通过 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow functions</a> 和 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind"><code>Function.prototype.bind</code></a> 来为特定事件类型添加事件处理程序。</p>\n<p>上面两个例子中，参数 <code>e</code> 作为 React 事件对象将会被作为第二个参数进行传递。通过箭头函数的方式，事件对象必须显式的进行传递，但是通过 <code>bind</code> 的方式，事件对象以及更多的参数将会被隐式的进行传递。</p>\n<p>值得注意的是，通过 <code>bind</code> 方式向监听函数传参，在类组件中定义的监听函数，事件对象 <code>e</code> 要排在所传递参数的后面，例如:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Popper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token punctuation">:</span><span class="token string">\'Hello world!\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n<span class="gatsby-highlight-code-line">    <span class="token function">preventPop</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>    <span class="token comment">//事件对象e要放在最后</span>\n</span><span class="gatsby-highlight-code-line">        e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token function">alert</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>    <span class="token punctuation">}</span>\n    \n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n                <span class="token punctuation">{</span><span class="token comment">/* Pass params via bind() method. */</span><span class="token punctuation">}</span>\n<span class="gatsby-highlight-code-line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://reactjs.org<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>preventPop<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Click<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</span>            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',frontmatter:{title:"事件处理",next:"conditional-rendering.html",prev:"state-and-lifecycle.html"},fields:{path:"docs/handling-events.md",slug:"docs/handling-events.html"}}},pathContext:{slug:"docs/handling-events.html"}}}});
//# sourceMappingURL=path---docs-handling-events-html-a513f694b258cda9e2fb.js.map