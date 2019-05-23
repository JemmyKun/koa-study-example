const {
  getMovieList,
  addMovie,
  deleteMovie
} = require("./controller/movieController");

module.exports = router => {
  router.prefix("/api");
  router.post("/getList", getMovieList);
  router.post("/addMovie", addMovie);
  router.post("/deleteMovie", deleteMovie);
};
