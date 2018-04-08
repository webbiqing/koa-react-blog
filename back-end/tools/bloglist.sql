/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : firstkoa

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-04-04 15:17:26
*/

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for `bloglist`
-- ----------------------------
DROP TABLE IF EXISTS `bloglist`;
CREATE TABLE `bloglist` (
  `name` varchar(200) DEFAULT NULL COMMENT '博客列表',
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bloglist
-- ----------------------------
INSERT INTO `bloglist` VALUES ('测试', '1', '这是一条博客', 'nice');
