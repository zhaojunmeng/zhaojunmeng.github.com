<!--
.. title: 在GitHub上面自建博客之：Nikola
.. slug: hello-nikola
.. date: 2013/03/18 20:20:00
.. tags: Github Pages, Nikola, Python, blog, static site, 博客
.. link:
.. description:
-->

最近不少程序员的博客搬家到了GitHub，原因差不多有两个：

+ GitHub上面写程序相关的内容，再自然不过了
+ 不限流量，且还有300M的空间（其实就是GitHub上面免费用户的版本库大小限制）

## GitHub Pages服务：
已经有不少文章讲如何在GitHub上面建博客，其实这些都是使用了GitHub的Pages服务。

简单来说，Pages服务，允许用户通过创建特殊的版本库（针对用户），或创建版本库的特殊分支（针对项目），在GitHub上面建立静态页面。将静态页面上传到版本库后（就是上传HTML, JS, CSS等），就可以通过username.github.com（用户）或projectname.github.com（项目）来访问用户或者项目的页面了。

有了GitHub Pages服务，只要再配合静态页面生成工具，就能制作博客、网站了。

GitHub官方提供了工具Jekyll，允许用户用轻量级标记语言（比如Markdown）来写文章，然后生成博客页面。同类的工具还有Octopress。

但本文介绍的不是上面两个工具，而是一个名叫Nikola的静态页面、博客生成工具。

## Nikola是啥？

Jekyll和Octopress都是Ruby写的，在决定选择哪个博客生成工具的时候，正好在学Python，于是就打算找一个Python写的博客生成工具来用~

Github上面搜索了一下，排在前面的Python博客生成系统，有Pelican，Nikola。

Nikola在介绍的时候说到了自己Fast，为了这个关键词，我决定一试！（虽然我没有跟其他工具比较过_(:з」∠)_）

PS:为啥没选择Pelican，Pelican在生成页面的时候，使用了make脚本，在Windows上面用make的话，需要MinGW，我这个典型Windows用户就放弃了（虽然我电脑上面有MinGW_(:з」∠)_）。

## Nikola安装篇

<!-- TEASER_END -->

官方文档中的安装，简单的归纳，实际上就是<a href="http://nikola.ralsina.com.ar/handbook.html#installing-nikola" target="_blank">一句话</a>：

	pip install https://github.com/ralsina/nikola/archive/master.zip

当然了，这里也可以使用其他的Python包安装工具，比如我用的是 easy_install

### 安装篇之Windows篇
不过，在Windows上安装Nikola，有些额外的工作要做：

+ #### lxml
	Nikola的requirements：lxml

	这个在安装的时候，是需要用代码编译的，但是在Windows上面，却编译不通过，解决办法是去下载一个Windows版本的安装包装上，就ok了，我选的是lxml-2.3.win32-py2.7.exe：

	<a href="http://pypi.python.org/simple/lxml/" target="_blank">http://pypi.python.org/simple/lxml/</a>

+ #### 环境变量

	当试图运行`nikola init`命令时，如果遇到下面的错误：

	`'nikola' 不是内部或外部命令，也不是可运行的程序或批处理文件。`

	是`C:\Python27\Scripts\`未添加到环境变量PATH中，`C:\Python27`是我的Python安装目录。（实际上在使用Python的包安装工具的时候，应该已经将该路劲添加到环境变量中了~）

## 使用篇
安装完成，赶快来一发吧骚年：

下面简单翻译自<a href="http://nikola.ralsina.com.ar/handbook.html#all-you-need-to-know" target="_blank">Nikola文档</a>

+ #### 新建一个空网站:

		nikola init mysite

	要新建个包含demo文件的Nikola demo网站的话，使用:

		nikola init mysite --demo

#### 剩下的命令要在Nikola新建的网站文件夹中执行，比如刚才的mysite文件夹（cd mysite）

+ #### 新建一篇文章:

		nikola new_post

	执行`new_post`命令之后，会提示你填写文章名等信息来完成创建。
	创建完成后，找到刚才新建的文件，就可以对文章进行编辑啦。

+ #### 编辑完成后，构建你的网站吧:

		nikola build

+ #### 启动个local server:

		nikola serve

+ #### 使用下面的地址来预览:

		http://127.0.0.1:8000

哪，一个最简单的静态博客新鲜出炉了！

## 部署到Github Pages上！
最后，只要把mysite下面的output文件夹，push到GitHub上面即可（<a href="http://pages.github.com/" target="_blank">详见GitHub Pages文档</a>）。

创建用户页面需要的版本库时，遇到了个问题：

一开始以为，创建一个和自己username同名的版本库，然后push文件，再访问username.github.com即可。

但是即使文件正确上传，却总是看到404页面。

后来看到了别人的版本库，发现原来版本库的名字要叫username.github.com！而不是单纯的username！

比如我的id是zhaojunmeng，那新建一个zhaojunmeng的版本库是不行的，必须是<a href="zhaojunmeng.github.com" target="_blank">zhaojunmeng.github.com</a>这个版本库。

上传成功之后，只要等等去刷新下页面就好啦。官方说是10分钟，不过现在看来，貌似不用10分钟就可以看到页面啦！

## Why Static
折腾了这么半天，为啥要建一个静态的博客呢？

Nikola的文档<a href="http://nikola.ralsina.com.ar/handbook.html#why-static" target="_blank">Why Static</a>说了很多，我这里就大概说一下。

所谓动态网站，指的是网站的内容存放在后台数据库中，当用户访问网页的时候，后台程序根据数据动态地生成HTML页面返回给用户。

静态网站呢，整个站点的每一个页面，每一个文件，在用户访问之前就已经存在在了服务器上面。

相比动态网站，静态网站的优点有：

+ #### 低开销，高性能

	动态网站处理每一次用户访问，都伴随着数据库查询、数据处理来生成HTML，这就消耗了服务器的CPU和内存。

	而静态网站只依靠HTTP server，开销自然低很多。（对于云计算平台来说，省下了开销就省了钱）

+ #### 依赖工具少，省心

	使用动态网站，比如WordPress建的博客，你可能就需要经常WordPress版本；或者host提供者升级了支持的php或者Python版本，你也需要做些升级工作。

	而静态网站，生成的都是最终的HTML页面，假设静态网站生成工具升级，比如Nikola，你不升级，也不影响对现在任何功能的使用。

+ #### 方便搬家

	静态网站的搬家，无需经历数据的导出/导入的过程，只要将页面上传到一个新的host上面即可工作。（比如可以从GitHub Pages服务，转移到BitBucket Pages服务上面）

+ #### 更安全

	都是静态的HTML，也不写什么数据库，没有依赖的后台软件，都让静态网站更安全了。

看了上面，可能有人会想：静态网站会不会功能少啊？

其实……不会。

通过在HTML代码中，引入一些第三方的js文件，静态网站同样可以内嵌评论、分享等组件，只是数据不是存在你的网站，而是存在第三方的后台中。

## 然后呢？——未完待续
上面只是介绍了静态网站、GitHub Pages、如何开始使用Nikola等，并没有覆盖Nikola的特性。

比如，Nikola使用了Bootstrap，可以更换主题等，全部的特性请查看：<a href="http://nikola.ralsina.com.ar/handbook.html#features" target="_blank">http://nikola.ralsina.com.ar/handbook.html#features</a>

后面会逐步介绍，在Nikola中定制自己博客的技巧，比如分享啊，评论啊，二维码啊，标签云啊等等等等，敬请期待_(:з」∠)_