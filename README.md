# Launch Instructions:

- Connect to Frontend: on project directory,`npm install`, then `npm start`; app should start on: [http://localhost:3000] 

- Connect to Backend: cd to 'backend' and run `node server` or `nodemon server`. This will also load the current DB of books hosted on MongoDB Atlas.

Note: Backend api routes are on port 5000.

## Project Summary

Bookr is a book catalog built on the MERN stack utilizing the REST API framework.
It currently features 2 main views + 2 secondary views for ADD & EDIT/DELETE books:
1) The catalog featuring all books + search bar
2) A specific book's page to view & edit its details
The navbar currently provides links to home (catalog) and to add a book. 

### WIP & Future implementations
1) Sort by year/title features
2) Admin access (user auth) with exclusive ADD/EDIT/DEL privileges
3) Action notification & confirmation

