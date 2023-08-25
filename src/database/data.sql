CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    hashedPassword VARCHAR(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    users (email, hashedPassword)
VALUES
    ('lc@test.com', '1234442423hjfwkjhvbhjkwebvufjvw'),
    (
        'lc2@test.com',
        '1234442423hjfwkjhvbhjkwebvufjvw'
    );