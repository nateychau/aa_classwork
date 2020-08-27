PRAGMA foreign_keys = ON;
-- DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS questions;
-- DROP TABLE IF EXISTS question_follows;
-- DROP TABLE IF EXISTS replies;
-- DROP TABLE IF EXISTS questions_likes;


CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL
);

CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    author_id INTEGER NOT NULL,

    FOREIGN KEY (author_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY, 
    question_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,

    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE replies (
    id INTEGER PRIMARY KEY,  ----> unique id for replies
    question_id INTEGER NOT NULL, ----> id in questions ----> questions(title, body, author_id) ----> 
    body TEXT NOT NULL,
    parent_reply_id INTEGER,
    user_id INTEGER NOT NULL, ---> if this reply is replying to a reply, then this points to replies(id)  ----> id = 1, replies_1 = 'some reply', replies_2 = null'a reply to reply 1'
                                                                                                            -----> id = 2, replies_1 = some question, replies_2 = 1
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (parent_reply_id) REFERENCES replies(id),
    FOREIGN KEY (user_id) REFERENCES users(id)

);

CREATE TABLE question_likes (
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,

    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);




INSERT INTO 
users (fname, lname)
VALUES
('George', 'Washington'),
('Abraham', 'Lincoln');

INSERT INTO 
questions (title, body, author_id)
VALUES
('Easy Question', 'What is 2 + 2', (SELECT id FROM users WHERE fname = 'George' and lname = 'Washington')),
('Hard Question', 'What is 400 * 78', (SELECT id FROM users WHERE fname = 'Abraham' and lname = 'Lincoln'));


INSERT INTO 
question_follows (question_id, user_id)
VALUES
((SELECT id FROM questions WHERE title = 'Easy Question' and body = 'What is 2 + 2'), (SELECT id FROM users WHERE fname = 'George' and lname = 'Washington')),
((SELECT id FROM questions WHERE title = 'Hard Question' and body = 'What is 400 * 78'), (SELECT id FROM users WHERE fname = 'Abraham' and lname = 'Lincoln'));


INSERT INTO 
replies (question_id, body, parent_reply_id, user_id)
VALUES
((SELECT id FROM questions WHERE title = 'Easy Question' and body = 'What is 2 + 2'), 'four', null, 1 ),
((SELECT id FROM questions WHERE title = 'Easy Question' and body = 'What is 2 + 2'), 'Thats correct', 1, 1);
