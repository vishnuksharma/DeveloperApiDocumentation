const jsonServer = require("json-server");

const server = jsonServer.create();

const db = require("./database/db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4009;

// middleware
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/api/developer/documentation', (req, res) => {
    console.log(req.params);
    try {
      res.status(200).json(db.documentation);
    } catch (error) {
      res.status(300).json(error);
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
