import express from "express";
import urlRoutes from "./routes/routes";
import { create } from "express-handlebars";
import path from "path";

const app = express();

app.set("views", path.join(__dirname, 'views'));

const exphbs = create({
    extname: '.hbs',
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout:'main'
  });

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");
    
app.use(urlRoutes);

export default app;