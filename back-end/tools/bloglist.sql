/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : firstkoa

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-05-17 16:52:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `bloglist`
-- ----------------------------
DROP TABLE IF EXISTS `bloglist`;
CREATE TABLE `bloglist` (
  `name` varchar(200) DEFAULT NULL COMMENT '博客列表',
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL,
  `category` varchar(200) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `content` varchar(20000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bloglist
-- ----------------------------
INSERT INTO `bloglist` VALUES ('wbqing', '16', 'react-draft-wysiwyg', '1', '2018-05-09', '<p></p>\n<p><strong>        draftjs是框架，不是可以直接用的产品<br>        如果你想自己编写一个可扩展（非常良好的扩展性，我用它实现了一个可以自定义div布局的工具，甚至可以给选区添加动画）的编辑器，是很好的选择<br>        现在还没有基于Draftjs，功能可以和CKEditor，TinyMCE之类媲美的开源产品很多基于DOM的编辑器都有人做了React包装。自己包装也非常容易</strong><br></p>\n<p><code>componentDidMount() {<br>     //create whatever editor you want to use, bind editor event to this<br>     realtimeEditor(findDOMNode(this._node),<br>     {onSubmit=this.onSubmit});<br>}<br><br>onSubmit=(richText)=&gt;{<br>    //setState or create redux action<br>}<br><br>render(){<br>    return &lt;div ref={(_node)=&gt;this._node=_node}/&gt;<br>}</code><br></p>\n');
INSERT INTO `bloglist` VALUES ('wbqing', '17', 'SQL INSERT INTO 语句', '1', '2018-05-09', '<h3 style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: rgb(253,252,248);font-size: 16px;font-family: PingFangSC-Regular, Verdana, Arial, 微软雅黑, 宋体;\">语法</span></h3>\n<pre style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: rgb(245,245,245);font-size: 14px;font-family: Consolas;\">INSERT INTO 表名称 VALUES (值1, 值2,....)</span></pre>\n<p style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: rgb(253,252,248);font-size: 14px;font-family: PingFangSC-Regular, Verdana, Arial, 微软雅黑, 宋体;\">我们也可以指定所要插入数据的列：</span></p>\n<pre style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: rgb(245,245,245);font-size: 14px;font-family: Consolas;\">INSERT INTO table_name (列1, 列2,...) VALUES (值1, 值2,....)</span>&nbsp;</pre>\n');
INSERT INTO `bloglist` VALUES ('wbqing', '18', '为什么选择Vue', '7', '2018-05-10', '<p>- 为了解决现有的问题<br>- 为了解决将来可能会有的问题</p>\n<p>所以，在学这些东西之前，先必须了解，它们是用来解决什么问题的。</p>\n<p>Angular，React，Vue，这三者其实面对的是同一个领域，那就是Web应用，什么是Web应用呢，我之前有一篇大致讲了：<a href=\"https://link.zhihu.com/?target=https%3A//github.com/xufei/blog/issues/5\" target=\"_blank\">构建单页Web应用 · Issue #5 · xufei/blog · GitHub</a></p>\n<p>这三者中，Angular的适用领域相对窄一些，React可以拓展到服务端，移动端Native部分，而Vue因为比较轻量，还能用于业务场景非常轻的页面中。</p>\n<p>在Web应用中，我们需要解决的问题可以归纳为三类：</p>\n<p>- 状态<br>- 组织<br>- 效率</p>\n<p>1. 状态</p>\n<p>什么是状态？</p>\n<p>在一个业务界面中，我们可能会根据某些数据去生成一块界面，然后通过界面上的某些操作，改变一些数据，从而影响界面的另外一些部分。</p>\n<p>这里面就存在两种关系，一种是从数据到界面，一种是从界面到数据。能够描述界面当前状况的数据，就可以被称为状态。</p>\n<p>如果不对状态作抽象，很可能会导致逻辑的混乱，比如说，一个地方点了，要改多个地方，这种代码直接写，很容易写乱的，所以，不同的框架采用不同的方式进行了处理。</p>\n<p>比如说MVVM流的Angular和Vue，还有Avalon，Regular，Knockout，都是走的这一流派，通过类似模板的语法，描述界面状态与数据的绑定关系，然后通过内部转换，把这个结构建立起来，当界面发生变化的时候，按照配置规则去更新相应的数据，然后，再根据配置好的规则去，从数据更新界面状态。</p>\n<p>React走的是另外一个流派，就是所谓的函数式，在这个里面，推崇的是单向数据流：给定原始界面（或数据），施加一个变化，就能推导出另外一个状态（界面或者数据的更新）。</p>\n<p>在这里需要额外提一下ReactiveJS，它的理念又有所不同，是基于Reactive的。</p>\n<p>2. 组织</p>\n<p>刚才这些，都可以看作是满足最基本的需求，那就是业务的正确性。在这之后，就有另外的诉求了，首当其冲的就是整个业务代码的组织。</p>\n<p>所谓组织，指的是两个方面，一方面是模块关系，另一方面是业务模型。</p>\n<p>我们是怎样解决模块关系的呢？共识就是组件化。整个应用形成倒置的组件树，每个组件提供对外接口，然后内部只关注自己的实现。这些东西说起来简单，但实际做的时候还是有非常多需要考虑的东西，包括组件的定义，约束，管理，测试等等，而在Web这个体系中，组件化也有一些不太适合的场景，需要做一些权衡，这方面详细说就比较复杂了，需要好多篇幅才能说清楚，可以看看我这篇：<a href=\"https://link.zhihu.com/?target=https%3A//github.com/xufei/blog/issues/22\" target=\"_blank\">Web应用组件化的权衡 · Issue #22 · xufei/blog · GitHub</a></p>\n<p>那么，业务模型又是指什么呢？我们提到React的时候，就会听到Flux，Redux之类的东西，为什么又要有它们呢？我们必须认识到，脱离了这类东西，纯上层的组件化是不牢固的，如果你感受不到，只有一个原因：你的项目的业务层太薄。</p>\n<p>业务模型指的是所处领域中的业务数据、规则、流程的集合。即使抛开所有展示层，这一层也是应当要能够运作起来的。</p>\n<p>那么，这跟Redux之类又有什么关系呢？</p>\n<p>我们刚才提到组件化，整个应用形成了一个组件树，组件之间可能会需要通讯，它们通讯的内容可能是简单的界面事件，也可能是业务含义较深，能够牵一发而动全身的。界面是怎么来的？是由初始界面加上状态形成的，为了能够反映界面的变化，我们必须使得对业务模型的每一个扰动都收敛到确切的状态，所以，这也就是Redux这类东西的意义所在。</p>\n<p>所以，没有Redux之类辅助方案的React，是不完整的。而Redux本身，也不是局限到只能作为React辅助方案的，它的理念，对于Angular，Vue，照样是非常重要的补充。在同一业务场景下，对于每个框架来说，数据模型层面临的问题都是一样的，在这一层并没有任何分别。</p>\n<p>另外，Angular 2中引入了RxJS，这个东西处理这方面也是有很大优势的。</p>\n<p>在这里我要插一句自己的想法，很多学习能力较强的朋友，当他发现FP，FRP之类编程模型的时候，会非常喜欢，但对于大型项目，需要很多人协作的状况来说，不一定是好事。</p>\n<p>用面向过程，面向对象的那些方式，虽然笨重，但好处是门槛低，符合大多数人的理解和思维方式，并且可以复用几十年积累的各种设计模式和经验。所以，如果不是小而精悍的团队，我对引入FP和FRP都是比较保守的。</p>\n<p>在这些东西下层，还有Relay，GraphQL等等致力于业务模型同步的方案，但这个引入代价同样是非常大。</p>\n<p>再插另外一句：很多人吐槽Angular大而全笨重，吐槽React全家桶，但其实世界上大部分人是没有框架整合能力的，小而美的库最后整合了，在面临各种业务需求之后不断引入新模块，也还是一个大而全的方案。在绝大部分场景下，还是有一整套标配模块比较好。你看ExtJS他也单独提供ExtCore模块，但不但竞争不过jQuery，连mootools和prototype都竞争不过，用它的人几乎都是用全方案的。</p>\n<p>3. 效率</p>\n<p>效率也分两种，一种是开发效率，一种是运行效率。</p>\n<p>我们前面提到，组件化，这是提升开发效率的一种手段，在组件化这个点上，各路框架的组织方式大同小异，反正最终都是组件树。</p>\n<p>具体到单个组件的实现上，我个人是倾向于MVVM流的，之前&nbsp;</p>\n<p></p>\n<p><a href=\"//www.zhihu.com/people/790dccce26904cdcd11b0fad3bac37b7\" target=\"_blank\">@题叶</a>  做过对比，MVVM系的代码量会少一些，开发效率稍高一点。</p>\n<p></p>\n<p>其中，Angular因为实现的特殊性，有作用域继承之类的双刃剑黑魔法，开发效率的不稳定因素要高不少，深刻理解的人用起来效率很高，不理解的用了到处是坑。</p>\n<p>再看运行效率，这里面，Angular是较低的那个，主要在于数据变更检测方式，但这也不是绝对的，在部分场景下，脏检测未必就没有优势，这个记得&nbsp;</p>\n<p></p>\n<p><a href=\"//www.zhihu.com/people/f7f6a8fa75165069749ef3b8bedb53e7\" target=\"_blank\">@郑海波</a>论述过。</p>\n<p></p>\n<p>运行效率的另外一面主要是创建和修改DOM，在创建上，大家是没有太大差异的，而在修改DOM的时候，React首创的虚拟DOM有很大优势，所以其他框架内部实现也在逐渐借鉴。</p>\n<p>（我之前有个对虚拟DOM的回答是有偏差的，稍后去更新）</p>\n<p>========</p>\n<p>如果看到这里，很可能你会疑惑，题目问的明明是学哪个好，我说这些是什么意思？</p>\n<p>我用这些篇幅说明了Web应用的业务开发中存在哪些麻烦，每种技术又是来解决什么痛点的，这样，你可以按照自己的需求去，结合业务场景进行分析，然后选择需要的挨个学下去。其实学API之类的很快，还是要把自己业务中的难点想清楚，带着问题去学，带着需求去学，学思想重于学使用，一定能事半功倍。&nbsp;</p>\n');
