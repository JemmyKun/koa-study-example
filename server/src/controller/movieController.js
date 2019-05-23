const { selectData, addData, deletData } = require("../mysql/movieData");
class movieController {
  async getMovieList(ctx) {
    await selectData().then(data => {
      ctx.body = {
        status: 200,
        content: data,
        message: "查询成功"
      };
    });
  }
  async addMovie(ctx) {
    let param = ctx.request.body;
    console.log("==>>>", param);
    await addData(param).then(data => {
      console.log("data===>", data);
      if (data.affectedRows > 0) {
        ctx.body = {
          status: 200,
          content: true,
          message: "添加成功"
        };
      }
    });
  }
  async deleteMovie(ctx) {
    let param = ctx.request.body;
    await deletData(param).then(data => {
      if (data.affectedRows > 0) {
        ctx.body = {
          status: 200,
          content: true,
          message: "删除成功"
        };
      }
    });
  }
}

module.exports = new movieController();
