// Port configutation

interface config {
    port : number;
    Api : string;
}

const config :config = {
    port:3001,
    Api:'http://localhost:3009/',
}

module.exports = config;