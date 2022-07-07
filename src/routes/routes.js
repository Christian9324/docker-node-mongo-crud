import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    //res.send('Hola Mundo');
    res.render('index.hbs');
});

router.get('/about', (req, res) => {
    //res.send('Hola Mundo');
    res.render('about.hbs');
});

router.get('/edit', (req, res) => {
    //res.send('Hola Mundo');
    res.render('edit.hbs');
});

export default router;
//module.exports = router;