const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'db.hyosu101.gabia.io',
    user: 'hyosu101',
    password: 'kim369301!',
    connectionLimit: 5,
    database: 'dbhyosu101'
});

module.exports = {
    async run(query, params) {
        return new Promise((resolve) => {
            pool.getConnection()
                .then(conn => {
                    conn.query(query, params)
                        .then((rows) => {
                            resolve(rows);
                            conn.end();
                        })
                        .catch(err => {
                            console.log(err);
                            conn.end();
                        })

                }).catch(err => {
                    //not connected
                });
        });
    }
}