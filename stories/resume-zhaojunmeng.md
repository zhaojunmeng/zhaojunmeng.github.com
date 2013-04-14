<!-- 
.. title: 孟昭俊的简历
.. slug: resume-zhaojunmeng
.. date: 2013/04/08 20:20:00
.. tags: 
.. link: 
.. description: 
-->

## 工作经历(6年)

+ #### 2007/07-2008/07 Gameloft上海 Java手机游戏移植

	所谓移植工作，简单的说，就是修改UI布局来适应不同的屏幕尺寸；优化代码、修改逻辑，来运行在配置更差的机型上。

+ #### 2008/09-2011/06 第九城市 名将三国 Client/C++开发

	名将三国（2010年公测，一款要跟DNF竞争的游戏，不过已于2012年停运），主要负责：

	+ 2D渲染引擎的开发和维护，引擎基于开源2D引擎HGE(HGE使用的是DirectX 8.1)

	+ 动画、地图编辑器的开发（编辑器用的WTL，不过WTL并不适合编辑器的开发，所以后来自学了QT）

	+ 解性能bug(CPU层面的，当时主要用VS自带的性能工具)

	+ 功能开发（RichEdit、LUA控制动画、出招表、特效文字等等）

+ #### 2011/08-至今 腾讯 Q+, QQ Client/C++开发

	<a href="http://www.qplus.com/" target="_blank">Q+项目</a>中，主要负责：

	+ WebApp的Webkit内核运行环境的一系列开发。

		Q+中的Webkit内核，使用的是CEF，关于CEF的介绍，请看我的博文：<a href="../posts/cef/hello-cef.html" target="_blank">CEF：给客户端内嵌一个Chrome吧</a>

	+ 内存泄漏修复（用UMDH，WinDbg带的工具，不用修改代码，一般来说够用了）

	+ Crash的修复（CEF的Crash率从刚接入的1%，降到了0.1%以下）

	+ 性能问题修复（定位CPU问题用的VS自带的性能工具，定位磁盘瓶颈用的是ProcessMonitor，Windows Performance Toolkit）

	QQ：QQ群相关业务功能的开发

## 主要技能

+ C++（5年）

+ 调试技巧/性能优化（内存泄漏、Crash、性能问题）

## 辅助技能

+ 脚本语言：Python/LUA入门级（用Python做过Q+的资源清理、检查的工具）

+ Web开发基础级：比如我的博客<a href="http://www.yogurtcat.com" target="_blank">www.yogurtcat.com</a>，还有一些HTML5的知识（做Q+项目中学到的）

+ DirectX/OpenGL ES

+ SVN/Git（对版本控制/分支有较深刻的理解）

## <a href="http://www.github.com/zhaojunmeng" target="_blank"><img alt="my github" src="../assets/image/third_party_logo/blacktocat-32.png" title="my github">My GitHub</a>

+ <a href="https://github.com/zhaojunmeng/OpenGLSuperBible5ANGLE" target="_blank">OpenGLSuperBible5ANGLE</a>
	
	将OpenGLSuperBible5中的例子，移到GLES2.0上，使用了ANGLE，跑在Windows上。目前完成了前7章。

	用到了如下第三方工具：

	<a href="http://code.google.com/p/gyp/" target="_blank">gyp</a>，一个Python写的，生成多平台项目文件的Build系统。

	<a href="http://code.google.com/p/angleproject/" target="_blank">ANGLE</a>，用DirectX 9的API实现了OpenGL ES 2.0 API，使OpenGL ES 2.0可以运行在Windows上。
	
	<a href="https://github.com/zhaojunmeng/esGLUT" target="_blank">esGLUT</a>，一个运行于Windows上的，使用OpenGL ES的mini GLUT实现。

+ <a href="https://github.com/zhaojunmeng/BIG" target="_blank">BIG</a>

	BIG(Browser In Game)，一个实验性的DEMO，演示了CEF作为内嵌浏览器，将可操作的页面渲染到游戏中Texture上的能力。

	用到的第三方工具如下：
	
	gyp, ANGLE, esGLUT（同上）

## 教育经历

2003-2007 本科 吉林大学 计算机专业 


