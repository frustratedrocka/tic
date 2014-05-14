-- phpMyAdmin SQL Dump
-- version 3.5.8.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 14, 2014 at 01:45 PM
-- Server version: 5.5.32-MariaDB
-- PHP Version: 5.5.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tic`
--

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE IF NOT EXISTS `locations` (
  `locName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `locDescription` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `locFirstDescription` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `message1` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `message2` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `message3` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `message4` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `message5` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `message6` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `flag1` tinyint(1) NOT NULL DEFAULT '0',
  `flag2` tinyint(1) NOT NULL DEFAULT '0',
  `flag3` tinyint(1) NOT NULL DEFAULT '0',
  `flag4` tinyint(1) NOT NULL DEFAULT '0',
  `exits` set('NORTH','EAST','SOUTH','WEST') COLLATE utf8_unicode_ci NOT NULL,
  `northTo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `eastTo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `southTo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `westTo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `visited` int(10) NOT NULL DEFAULT '0',
  `locTurns` int(10) NOT NULL DEFAULT '0',
  `id` int(10) NOT NULL,
  UNIQUE KEY `locName` (`locName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`locName`, `locDescription`, `locFirstDescription`, `message1`, `message2`, `message3`, `message4`, `message5`, `message6`, `flag1`, `flag2`, `flag3`, `flag4`, `exits`, `northTo`, `eastTo`, `southTo`, `westTo`, `visited`, `locTurns`, `id`) VALUES
('Operating Room', 'You are in a small, stone room lit by a single torch. Judging by the ancient bloodstains on the floor, this room was once used for surgery. There is a door to the NORTH.', 'You awaken to the slow drip of water on stone and the feel of a smooth metal surface beneath you. You open your eyes to find yourself in a small torchlit room. There is a door to what, as far as you can tell, is NORTH, but a board has been nailed over it.', 'You hear a very quiet, metallic clicking that seems to be coming through the door.', 'You see a NOTE slide under the door and hear the clicking sound fade away.', 'There is a small NOTE in front of the door.', 'There is a small GRATE along the south wall.', 'There is an old, rusted KNIFE waiting for you in the hole behind the grate.', 'The door is boarded shut.', 0, 0, 0, 0, '', '', '', '', '', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `nouns`
--

CREATE TABLE IF NOT EXISTS `nouns` (
  `id` int(10) NOT NULL,
  `locName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nounName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nounNameDisplay` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `verbs` set('look','look at','take','use','examine') COLLATE utf8_unicode_ci NOT NULL,
  `isVisible` tinyint(1) NOT NULL DEFAULT '0',
  `isContainer` tinyint(1) NOT NULL DEFAULT '0',
  `isOpen` tinyint(1) NOT NULL,
  `isTakeable` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `nouns`
--

INSERT INTO `nouns` (`id`, `locName`, `nounName`, `nounNameDisplay`, `verbs`, `isVisible`, `isContainer`, `isOpen`, `isTakeable`) VALUES
(0, 'Operating Room', 'prybar', '', 'look,look at,take,use,examine', 0, 0, 0, 1),
(0, 'Operating Room', 'note', '', '', 1, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `hash` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lastInput` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `locName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `turns` int(10) NOT NULL DEFAULT '0',
  `inventory` set('note','prybar') COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `hash`, `lastInput`, `locName`, `turns`, `inventory`) VALUES
(1, 'admin', '$1$50$GHABNWBNE/o4VL7QjmQ6x0', '', '', 0, '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
