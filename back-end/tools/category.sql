/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : firstkoa

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-05-17 16:52:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `category`
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', 'React');
INSERT INTO `category` VALUES ('2', '大数据');
INSERT INTO `category` VALUES ('3', 'Node');
INSERT INTO `category` VALUES ('4', 'java');
INSERT INTO `category` VALUES ('5', 'javascript');
INSERT INTO `category` VALUES ('6', 'ES6');
INSERT INTO `category` VALUES ('7', 'Vue');
INSERT INTO `category` VALUES ('8', 'Angular');
