const jsonServer = require("json-server");

const server = jsonServer.create();

const db = require("./database/db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4009;

// middleware
server.use(middlewares);
server.use(jsonServer.bodyParser);


server.get("/api/developer/documentation", (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const count = db.documentation.length;
  try {
    const documentList = db.documentation.slice((page - 1) * limit, limit * page);
    if (documentList.length <= 0) {
      throw new Error("No  Record Found");
    }
    res.status(200).json({ count, documentList });
  } catch (error) {
    res.status(300).json({ error: error.message });
  }
});

server.get("/api/developer/intro/:id", (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    const record = db.documentation.find(item => String(item.id) === id);
    res.status(200).json({...record});
});
server.get("/api/developer/guide/:id", (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    const record = db.documentation.find(item => String(item.id) === id);
    res.status(200).json({...record});
});
server.get("/api/developer/reference/:id", (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    const record = db.documentation.find(item => String(item.id) === id);
    res.status(200).json({...record});
});

// server.use(router);
server.listen(port);
