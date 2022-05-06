import 'dotenv/config';
import App from './app/app';

App.listen(process.env.EXPRESS_APP_PORT || 9000, () => {
    console.log(`Listening on Port: ${process.env.EXPRESS_APP_PORT}`);
});