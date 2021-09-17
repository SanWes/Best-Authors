const AuthorController = require("../controllers/author.controller");


module.exports = app => {
    //ALL Authors
    app.get("/api/authors", AuthorController.findAllAuthors);
    //NEW Author
    app.post("/api/authors", AuthorController.createNewAuthor);
    //ONE Author
    app.get("/api/authors/:id", AuthorController.findOneAuthor);
    //UPDATE Author
    app.put("/api/authors/:id", AuthorController.updateExistingAuthor);
    //DELETE Author
    app.delete("/api/authors/delete/:id", AuthorController.deleteAuthor);
   
}