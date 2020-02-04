import React from 'react';
import MUIDataTable from "mui-datatables";

const columns = ["SKILLS", "DESCRIPTION"];

const data = [
 ["HTML/CSS", "Preprocessing w/ LESS, Styling w/ Flexbox, Box Model and Material UI/Semantic UI, Emotion. Focused on Mobile Responsive Design and SEO mindful. Understands CSS Specificity and Inheritance and how to leverage them to achieve client design specs"],
 ["JavaScript", "OOP, Closures, Higher Order Functions, Variable Scope & Hoisting, TDD"],
 ["React", "Function Components w/ Hooks, Class Components w/ Life Cycle Methods, Higher Order Components, Context API"],
 ["Redux", "Action, Action Creators, Reducers, Store, Async API Calls with Axios"],
 ["Back End", "NodeJS, Express, Knex, Sqlite3, SQL, DRY code philosophy, uses opinionated but logical directory and file structure for server and API creation, understands CRUD"],
 ["Version Control", "Detailed Commit History for group projects, logical planning of software architecutre fit for solution to specefic problems, GIT, Github, merge conflict resolution"],
 ["People Skills", "Bachelors of Science in Psychology, mentoring experience in web development as a team lead at Lambda School, customer service experience, mental health work and child welfare casework experience"],
];

const options = {
  filterType: 'none',
  selectableRows: "none",
  elevation: 4,
  responsive: 'scroll',
  pagination: false
};

const Skillz = () => {
  return (
    <>
      <div className="skillzHead">
      <MUIDataTable
        title={"Skills Data Table"}
        data={data}
        columns={columns}
        options={options}
      />
      </div>
    </>
  )
}

export default Skillz;