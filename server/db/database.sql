create database perntodo;

create table todo (
    todo_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    description VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);