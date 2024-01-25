

CREATE SCHEMA `songsdbapp` ;

USE `songsdbapp` ;

DROP DATABASE `songsdbapp`;





CREATE TABLE `songsdbapp`.`songs` (
  `SongID` INT NOT NULL AUTO_INCREMENT,
  `Title` VARCHAR(60) NOT NULL,
  `Artist` VARCHAR(60) NOT NULL,
  `Genre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`SongID`),
  UNIQUE INDEX `SongID_UNIQUE` (`SongID` ASC) VISIBLE);
  
    CREATE TABLE `songsdbapp`.`members` (
  `MemberID` INT NOT NULL AUTO_INCREMENT,
  `Firstname` VARCHAR(60) NOT NULL,
  `Lastname` VARCHAR(60) NOT NULL,
  `Email` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`MemberID`));
  
  CREATE TABLE `songsdbapp`.`downloads` (
  `DownloadID` INT NOT NULL AUTO_INCREMENT,
  `Date` VARCHAR(60) NOT NULL,
  `SongID` INT NOT NULL,
  `MemberID` INT NOT NULL,
  PRIMARY KEY (`DownloadID`),
  INDEX `SongID_idx` (`SongID` ASC) VISIBLE,
  INDEX `MemberID_idx` (`MemberID` ASC) VISIBLE,
  CONSTRAINT `SongID`
    FOREIGN KEY (`SongID`)
    REFERENCES `songsdbapp`.`songs` (`SongID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `MemberID`
    FOREIGN KEY (`MemberID`)
    REFERENCES `songsdbapp`.`members` (`MemberID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
  
  EXPLAIN TABLE songs;
  SHOW TABLES;