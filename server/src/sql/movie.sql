SELECT *
FROM movies
ORDER BY createTime DESC;

DELETE FROM movies WHERE id = 1

UPDATE  movies SET name='',status='1' WHERE id=1

INSERT INTO movies
    (title,createTime,updateTime,status)
VALUES('movie', '323232323', '32323', '0')

