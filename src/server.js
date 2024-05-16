import http from 'http'

const server =  http.createServer((req, res) => {
    const { method, url} = req

    if(method === 'GET' && url === '/users'){
        return res.end('Listagem de usuarios')
    }

    if(method === 'POST' && url === '/users'){
        return res.end('Criação de usuario')
    }
return res.end('Hello world 2')
})

server.listen(3000)