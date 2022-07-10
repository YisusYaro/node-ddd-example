export const healtCheck = (router) => {
  router.get('/', (req, res) => {
    res.send('Server is working.');
  });
};
