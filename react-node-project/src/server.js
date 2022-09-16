import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

//Inicializando packages
const app = express();

// setting(configuracion server)
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(webpackDevMiddleware(webpack(webpackConfig)));


//routes
app.get('/', (req, res) => {
    res.send('Hello worlds');
});

app.get('/api', (req, res) => {
    res.json({api: 'Works !!'});
})

//start server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});