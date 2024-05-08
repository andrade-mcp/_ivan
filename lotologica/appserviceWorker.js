const staticMegafacil = "megafacil-v51312";
const assets = [
  "/img/logo.png",
  "/img/profile.png",
  "/img/new/admin.png",
  "/img/new/apostar.png",
  "/img/new/apostas-semana.png",
  "/img/new/apostas.png",
  "/img/new/deposito.png",
  "/img/new/gerador.png",
  "/img/new/mercadopago.png",
  "/img/new/profile.png",
  "/img/new/rastreador.png",
  "/img/new/resultados.png",
  "/img/new/saldo.png",
  "/img/new/suporte.png",
  "/img/new/tutorial.png"
];


self.addEventListener('install', (e) => {

  // let cache = caches.open(staticMegafacil).then((c) => {
  //   c.addAll([
  //     // nothing
  //   ]);
  // });

  // e.waitUntil(cache);
});

self.addEventListener('fetch', function (event) {

  // if (event.request.method === 'POST') {
  //   return;
  // }
  // event.respondWith(
  //   caches.open(staticMegafacil).then(function (cache) {
  //     return fetch(event.request).then(function (networkResponse) {
  //       cache.put(event.request, networkResponse.clone());
  //       return networkResponse;
  //     });
  //   })
  // );

  


});