const http = require("http"); 

const httpServer = http.createServer( (request, response)=>{
    console.log(`server has been started...`);
    
    const url = request.url;
    switch(url){
        case '/':
            response.end(`Home Page`);
            break;
        case '/about':
            response.end(`About Page`);
            break;
        case '/products':
            response.end(`Products Page`);
            break;
        case '/skills':
            response.end(`Skills Page`);
            break;
        default :
        response.end(`Page not found`);
        break;
}
 
   
} );

httpServer.listen(8080, ()=>{
    console.log(`Server started on port 8080`); 
});