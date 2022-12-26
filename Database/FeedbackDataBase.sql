create database feedback;

use feedback;

CREATE TABLE IF NOT EXISTS sugAndComp (
row_id int PRIMARY KEY AUTO_INCREMENT , 
email VARCHAR(255) NOT NULL,
departments  VARCHAR(255) NOT NULL,
sections VARCHAR(255) NOT NULL, 
suggestions_complaints VARCHAR(255) NOT NULL
);
 
 
 CREATE TABLE IF NOT EXISTS departments (
department_id int PRIMARY KEY  , 
department_name VARCHAR(255) NOT NULL UNIQUE 
);


 CREATE TABLE IF NOT EXISTS sections (
department_id int  NOT NULL , 
section_name VARCHAR(255) NOT NULL,
PRIMARY KEY(department_id, section_name) ,
FOREIGN KEY (department_id) REFERENCES departments(department_id)
);
 
 
#Add departments
INSERT INTO departments ( department_id, department_name)
VALUES (1,"HR");

INSERT INTO departments ( department_id, department_name)
VALUES (2,"IT");

INSERT INTO departments ( department_id, department_name)
VALUES (3,"Finance");



#Add sections
INSERT INTO sections ( department_id, section_name)
VALUES (1,"OD");
INSERT INTO sections ( department_id, section_name)
VALUES (1,"Recruitment");
INSERT INTO sections ( department_id, section_name)
VALUES (1,"payroll");

INSERT INTO sections ( department_id, section_name)
VALUES (2,"Helpdesk");
INSERT INTO sections ( department_id, section_name)
VALUES (2,"programming");

INSERT INTO sections ( department_id, section_name)
VALUES (3,"Accountants");
INSERT INTO sections ( department_id, section_name)
VALUES (3,"Treasury");

#Add suggestions or complaints
INSERT INTO sugAndComp ( email, departments, sections, suggestions_complaints)
VALUES ('ayman@elsewedy.com', 'IT', 'programming', 'Lorem ipsum dolor sit amet,  iaculis consequat.');


#Read the data
select * from sugandcomp;

select * from departments;

select * from sections;

