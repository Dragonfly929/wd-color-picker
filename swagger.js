const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'Your API Name',
            version: '1.0.0',
            description: 'API documentation using Swagger',
        },
        basePath: '/', // Base path (optional)
    },
    apis: ['./routes/*.js'], // Path to the API routes
};

const specs = swaggerJsdoc(options);

module.exports = specs;
