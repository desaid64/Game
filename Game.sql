Drop schema Game;
Create schema if not exists Game;
use Game;
CREATE TABLE IF NOT EXISTS GameUser(
  userID int primary key auto_increment,
  startTime datetime,
  endTime datetime
);
 



DELIMITER //
CREATE PROCEDURE startGame()
BEGIN
  insert into GameUser (startTime) values (now()); 
  SELECT * from GameUser where userID = LAST_INSERT_ID();
END //
DELIMITER ;



DELIMITER //
CREATE PROCEDURE endGame(IN id int)
BEGIN
  SET SQL_SAFE_UPDATES=0;
  update GameUser set endTime = now() where userID = id;
  SET SQL_SAFE_UPDATES=1;
  SELECT * from GameUser where userID = id;
END //
DELIMITER ;

Call startGame();
Call StartGame();
Call endGame(2);
select * from GameUser;