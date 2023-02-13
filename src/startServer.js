import { PORT } from '../config/env';

export const startServer = (server) => {

    server.listen(PORT, (err) => {
        if(err) {
            console.log("Error - server doesn't start");
            return;  
        } 
        console.log("Success - server start on PORT - %s", PORT);
    });
}