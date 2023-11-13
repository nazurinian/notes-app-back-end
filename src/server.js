/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
// Memuat kode untuk membuat, mengonfigurasi, dan menjalankan server HTTP menggunakan Hapi.
// console.log('Hallo kita akan membuat RESTful API');

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

// Origin terdiri dari tiga hal: protokol, host, dan port number. Origin dari aplikasi client kita adalah
// http://notesapp-v1.dicodingacademy.com:80
// Di mana protokolnya adalah http://, host-nya adalah notesapp-v1.dicodingacademy.com, dan port-nya adalah :80 (implisit).
// akses link dengan edge ya
// http://notesapp-v1.dicodingacademy.com/
