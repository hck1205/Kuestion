module.exports = {
    ADDR: '127.0.0.1',
    PORT: process.env.PORT || 3030,
    CONNECTION_STRING: 'mongodb://localhost:27017/demo',
    isDev: process.env.NODE_ENV !== 'production'
};
