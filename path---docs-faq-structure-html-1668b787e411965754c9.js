webpackJsonp([27858099600260],{772:function(e,s){e.exports={data:{markdownRemark:{html:'<h3 id="是否有推荐的方式来组织-react-项目？"><a href="#%E6%98%AF%E5%90%A6%E6%9C%89%E6%8E%A8%E8%8D%90%E7%9A%84%E6%96%B9%E5%BC%8F%E6%9D%A5%E7%BB%84%E7%BB%87-react-%E9%A1%B9%E7%9B%AE%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>是否有推荐的方式来组织 React 项目？</h3>\n<p>React 在对于你如何将文件放入文件夹中不持有意见。也就是说，你也许想考虑生态系统中的一些常用方法。</p>\n<h4 id="按照功能或者路由来分组"><a href="#%E6%8C%89%E7%85%A7%E5%8A%9F%E8%83%BD%E6%88%96%E8%80%85%E8%B7%AF%E7%94%B1%E6%9D%A5%E5%88%86%E7%BB%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>按照功能或者路由来分组</h4>\n<p>组织项目的一种常见方法是将 CSS，JS 和测试文件一起放入按功能或路由分组的文件夹中。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>common/\n  Avatar.js\n  Avatar.css\n  APIUtils.js\n  APIUtils.test.js\nfeed/\n  index.js\n  Feed.js\n  Feed.css\n  FeedStory.js\n  FeedStory.test.js\n  FeedAPI.js\nprofile/\n  index.js\n  Profile.js\n  ProfileHeader.js\n  ProfileHeader.css\n  ProfileAPI.js</code></pre>\n      </div>\n<p>“功能”的定义不是通用的，它取决于你选择的划分粒度。如果你不能想出一个顶级文件夹的列表，你可以询问用户你的产品主要由哪些部分组成，并使用他们的心智模型作为蓝图。</p>\n<h4 id="按照文件类型来分组"><a href="#%E6%8C%89%E7%85%A7%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B%E6%9D%A5%E5%88%86%E7%BB%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>按照文件类型来分组</h4>\n<p>组织项目的另一个流行的方式是将相似的文件分到一起，比如说：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>api/\n  APIUtils.js\n  APIUtils.test.js\n  ProfileAPI.js\n  UserAPI.js\ncomponents/\n  Avatar.js\n  Avatar.css\n  Feed.js\n  Feed.css\n  FeedStory.js\n  FeedStory.test.js\n  Profile.js\n  ProfileHeader.js\n  ProfileHeader.css</code></pre>\n      </div>\n<p>有些人会喜欢进一步深入，根据组件在应用中所扮演的角色将他们分到不同的文件夹中。举个例子， <a href="http://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</a> 是一个基于该原则构建的设计方法论.请记住，将这些方法看成有用的案例而不是严格的规则来处理，往往更有成效。</p>\n<h4 id="避免太多嵌套"><a href="#%E9%81%BF%E5%85%8D%E5%A4%AA%E5%A4%9A%E5%B5%8C%E5%A5%97" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>避免太多嵌套</h4>\n<p>JavaScript 项目中的深层目录嵌套会有许多痛点。在目录之间书写相对的 import 以及在移动文件时更新这些 import 都变得更加困难。除非你有一个非常有说服力的理由来使用深层文件夹结构，否则请考虑将项目自身限制为单个项目中最多嵌套三到四层文件夹。当然，这只是一个建议，它可能与您的项目无关。</p>\n<h4 id="不要过度思考这个问题"><a href="#%E4%B8%8D%E8%A6%81%E8%BF%87%E5%BA%A6%E6%80%9D%E8%80%83%E8%BF%99%E4%B8%AA%E9%97%AE%E9%A2%98" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>不要过度思考这个问题</h4>\n<p>如果你刚开始一个项目，<a href="https://en.wikipedia.org/wiki/Analysis_paralysis">不要花超过五分钟</a>在选择一个文件结构上。从以上方法（或者你自己想到的）中任意挑一个然后开始编程吧！在写完一些真实的代码之后，你可能会想重新考虑它。</p>\n<p>如果感觉完全卡住，请将所有文件保存在一个单一的文件夹中。最终它会变得足够大，以至于你会想要从其他文件中分离出一些文件。 到那个时候，你将有足够的知识去分辨你最经常编辑的文件。 一般来说，保持经常变化的文件彼此靠近是一个好主意。 这个原则被称为“托管”。</p>\n<p>随着项目规模越来越大，在实践中往往会混合使用上述几种方法。所以在一开始选择“正确”的方法并不是很重要。</p>',frontmatter:{title:"文件结构",next:null,prev:null},fields:{path:"docs/faq-structure.md",slug:"docs/faq-structure.html"}}},pathContext:{slug:"docs/faq-structure.html"}}}});
//# sourceMappingURL=path---docs-faq-structure-html-1668b787e411965754c9.js.map