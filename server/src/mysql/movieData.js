const { query } = require("./mysqlConfig");

class MovieData {
  selectData() {
    let sql = "select * from movies order by createTime desc";
    return query(sql, []);
  }
  addData(param) {
    let { title } = param;
    let createTime = Date.now();
    let updateTime = createTime;
    let status = "0";
    let sql =
      "INSERT INTO movies(title,createTime,updateTime,status) VALUES (?,?,?,?)";
    return query(sql, [title, createTime, updateTime, status]);
  }
  deletData(param) {
    let { id } = param;
    let sql = "DELETE FROM movies WHERE id=?";
    return query(sql, [id]);
  }
}

module.exports = new MovieData();
