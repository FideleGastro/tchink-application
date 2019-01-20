const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')
const compression = require('compression')
const bodyParser = require('body-parser')
const axios = require('axios');
const querystring = require('querystring');
const { parse } = require('url')
const { join } = require('path')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const applicationRoot = (process.env.PATH_APPLICATION || 'http://localhost') + ':4000'

const app = next({ dev })
const handle = app.getRequestHandler()

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
    length: function (n, key) {
        return n.toString().length + key.toString().length
    },
    max: 100 * 1000 * 1000, // 100MB cache soft limit
    maxAge: 1 // 1hour 1000 * 60 * 60
})

app.prepare().then(() => {
    const server = express()

    server.use(compression())
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    // init Page

    async function fetchBar(id) {
        id
            ?
            barFromApi = await axios.get(`${applicationRoot}/api/stores/${id}`)
            :
            barFromApi = await axios.get(`${applicationRoot}/api/stores`)
        //TODO: parse category from barFromApi
        return { bar: { ...barFromApi.data }, category: ["category1", "category2", "category3"] }
    }

    async function fetchProfile(id) {
        if (id)
            profileFromApi = await axios.get(applicationRoot + '/api/users/' + id);
        //console.log('fetchProfile', 'http://localhost:4000/api/users/' + id)
        return { user: { ...profileFromApi.data } }
    }

    // call API

    async function PostUser(body) {
        //TODO: check body
        res = await axios.post(applicationRoot + '/api/users', { ...body });
        //TODO: catch error
        return res
    }

    // async function getUser(id) {
    //     //TODO: check body
    //     res = await axios.post('http://localhost:4000/api/users/' + id);
    //     //TODO: catch error
    //     return res
    // }

    async function logUser(body) {
        //TODO: check body
        res = await axios.get(applicationRoot + '/api/users/count?where=%7B%22name%22%3A%22' + body.email + '%22%2C%20%22password%22%20%3A%20%22' + body.password + '%22%7D');
        //TODO: catch error 
        console.log("res =>", res.data)
        if (res.data.count === 1) {
            user = await axios.get(applicationRoot + '/api/users?filter=%7B%20%22where%22%20%3A%20%7B%22email%22%3A%22' + body.email + '%22%2C%20%22password%22%20%3A%20%22' + body.password + '%22%7D%7D')
            console.log("user =>", user.data, body.email, body.password)
            return user.data
        }
        else
            return { data: [] }
    }

    // Route app

    server.get('/', (req, res) => {
        const queryParams = { id: 'home', toto: 'toto' }
        //console.log('data:', test());
        renderAndCache(req, res, '/', queryParams)
    })

    server.get('/bar/', (req, res) => {
        let initPageData = fetchBar(null)
        initPageData.then(data => renderAndCache(req, res, '/bar', { id: null, data: data }))
    })

    server.get('/bar/:id', (req, res) => {
        let initPageData = fetchBar(req.params.id)
        initPageData.then(data => renderAndCache(req, res, '/bar', { id: req.params.id, data: data }))
    })

    server.get('/profile/', (req, res) => {
        const queryParams = { id: 'dfregg', toto: 'toto' }

        let initPageData = fetchProfile(getLogged(req, res))
        initPageData.then(data => {
            if (isLogged(req, res))
                renderAndCache(req, res, '/profile', { data: data })
            else
                renderAndCache(req, res, '/signin', { data: data })
        })
    })

    // Middleware

    server.post('/signin/connection/', (req, res) => {
        const User = logUser(req.body)
        //TODO: set expires
        User.then(data => {
            if (data.length === 1) {
                console.log('cookie', data)
                const cookies = require('cookie-universal')(req, res)
                cookies.set('_tchink', data[0].id)
            }
        })
        User.then(data => (data.length === 1) ? res.status(202).json(data[0]) : res.status(401).send('not logged'))
    })

    server.post('/signin/inscription/', (req, res) => {
        const User = PostUser(req.body)
        // TODO: catch error & 401
        User.then(data => res.status(201).send('inscription'))
        console.log('=> log: form inscription: ', req.body)
    })

    server.get('/clear/', (req, res) => {
        console.log(`clear`)
        ssrCache.reset()
        res.send('clear')
    })

    server.get('*', (req, res) => {
        const parsedUrl = parse(req.url, true)
        const { pathname } = parsedUrl

        if (pathname === '/service-worker.js') {
            const filePath = join(__dirname, '.next', pathname)
            app.serveStatic(req, res, filePath)
        } else {
            return handle(req, res)
        }
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})

function getCacheKey(req) {
    return `${req.url}`
}

function isLogged(req, res) {
    const cookies = require('cookie-universal')(req, res)
    res = cookies.get('_tchink')
    console.log('cookies =>', res);
    //(res) ? return false : return false
    if (res)
        return true;
    else
        return false
}

function getLogged(req, res) {
    const cookies = require('cookie-universal')(req, res)
    res = cookies.get('_tchink')
    console.log('cookies =>', res);
    return res
}

async function renderAndCache(req, res, pagePath, queryParams) {
    const key = getCacheKey(req)
    queryParams = { 'logged': isLogged(req, res), ...queryParams }

    // If we have a page in the cache, let's serve it
    if (ssrCache.has(key)) {
        res.setHeader('x-cache', 'HIT')
        res.send(ssrCache.get(key))
        return
    }

    try {
        // If not let's render the page into HTML
        const html = await app.renderToHTML(req, res, pagePath, queryParams)

        // Something is wrong with the request, let's skip the cache
        if (res.statusCode !== 200) {
            res.send(html)
            return
        }

        // Let's cache this page
        //ssrCache.set(key, html)

        res.setHeader('x-cache', 'MISS')
        res.send(html)
    } catch (err) {
        app.renderError(err, req, res, pagePath, queryParams)
    }
}
