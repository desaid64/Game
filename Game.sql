Drop schema Game;
Create schema if not exists Game;
use Game;
CREATE TABLE IF NOT EXISTS `GameUser`(
  userID int primary key auto_increment,
  startTime datetime,
  endTime datetime,
  diffTime int,
  answer char(10)
);
 
DELIMITER //
CREATE PROCEDURE getUserById(IN id int)
BEGIN
  SELECT * from GameUser where userID = id;
END //
DELIMITER ;


DELIMITER //
CREATE PROCEDURE startGame()
BEGIN
  insert into GameUser (startTime) values (now()); 
  SELECT * from GameUser where userID = LAST_INSERT_ID();
END //
DELIMITER ;



DELIMITER //
CREATE PROCEDURE endGame(IN id int, IN ans char(10))
BEGIN

  set @currentTime = now();
  set @startedTime = (Select startTime from GameUser where userId = id);
  set @diffInSecs = (SELECT TIMESTAMPDIFF(SECOND, @startedTime, @currentTime));
  SET SQL_SAFE_UPDATES=0;
  update `GameUser` 
  set 
	endTime = @currentTime,
    diffTime = @diffInSecs,
    answer= ans
    where userID = id;
  SET SQL_SAFE_UPDATES=1;
  SELECT * from GameUser where userID = id;
END //
DELIMITER ;

Call startGame();
Call StartGame();
Call endGame(2,'Rachel');
select * from GameUser;