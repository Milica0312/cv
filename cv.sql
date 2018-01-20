-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2018 at 12:21 AM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cv`
--

-- --------------------------------------------------------

--
-- Table structure for table `forma`
--

CREATE TABLE `forma` (
  `forma_id` int(10) UNSIGNED NOT NULL,
  `ime` varchar(256) DEFAULT NULL,
  `email` varchar(256) DEFAULT NULL,
  `poruka` varchar(1024) DEFAULT NULL,
  `vreme` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `forma`
--

INSERT INTO `forma` (`forma_id`, `ime`, `email`, `poruka`, `vreme`) VALUES
(1, 'efgv', 'rgdfxc@gmail.com', 'wefsdc', '2018-01-16 23:17:40'),
(2, 'fdcv', 'hnjsd@gmail.com', 'ewrsdf', '2018-01-16 23:20:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `forma`
--
ALTER TABLE `forma`
  ADD PRIMARY KEY (`forma_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `forma`
--
ALTER TABLE `forma`
  MODIFY `forma_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
