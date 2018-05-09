/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : firstkoa

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-05-09 12:37:16
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
  `date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `content` varchar(20000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bloglist
-- ----------------------------
INSERT INTO `bloglist` VALUES ('wbqing', '16', 'react-draft-wysiwyg', null, null, '<p></p>\n<p><strong>        draftjs是框架，不是可以直接用的产品<br>        如果你想自己编写一个可扩展（非常良好的扩展性，我用它实现了一个可以自定义div布局的工具，甚至可以给选区添加动画）的编辑器，是很好的选择<br>        现在还没有基于Draftjs，功能可以和CKEditor，TinyMCE之类媲美的开源产品很多基于DOM的编辑器都有人做了React包装。自己包装也非常容易</strong><br></p>\n<p><code>componentDidMount() {<br>     //create whatever editor you want to use, bind editor event to this<br>     realtimeEditor(findDOMNode(this._node),<br>     {onSubmit=this.onSubmit});<br>}<br><br>onSubmit=(richText)=&gt;{<br>    //setState or create redux action<br>}<br><br>render(){<br>    return &lt;div ref={(_node)=&gt;this._node=_node}/&gt;<br>}</code><br></p>\n');
INSERT INTO `bloglist` VALUES ('wbqing', '17', 'SQL INSERT INTO 语句', null, '2018-05-09 00:00:00', '<h3 style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: rgb(253,252,248);font-size: 16px;font-family: PingFangSC-Regular, Verdana, Arial, 微软雅黑, 宋体;\">语法</span></h3>\n<pre style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: rgb(245,245,245);font-size: 14px;font-family: Consolas;\">INSERT INTO 表名称 VALUES (值1, 值2,....)</span></pre>\n<p style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: rgb(253,252,248);font-size: 14px;font-family: PingFangSC-Regular, Verdana, Arial, 微软雅黑, 宋体;\">我们也可以指定所要插入数据的列：</span></p>\n<pre style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: rgb(245,245,245);font-size: 14px;font-family: Consolas;\">INSERT INTO table_name (列1, 列2,...) VALUES (值1, 值2,....)</span>&nbsp;</pre>\n');
