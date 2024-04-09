const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const cors = require("cors"); // Importing CORS
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJsDocs = YAML.load('./api.yaml');
const { startMetricsServer, restResponseTimeHistogram } = require("./utils/metrics");




app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true
}));



app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

// Route Imports
const userRoutes = require("./routes/userRoutes");
const policyRoutes = require("./routes/policyRoutes");
const claimRoutes = require("./routes/claimRoutes");

app.use("", userRoutes);
app.use("", policyRoutes);
app.use("", claimRoutes);

// Middleware for errors
app.use(errorMiddleware);

module.exports = app;
