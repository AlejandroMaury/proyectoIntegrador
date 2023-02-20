const express = require('express');
const app = express();
const path = require('path');
const { clearScreenDown } = require('readline');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3006;

const mainRoutes=require('./routes/mainRoutes');
const productRoutes=require('./routes/productRoutes');
const userDetail=require('./routes/userRoutes');

app.set('views', path.resolve(__dirname,'views')); /*para que el path resuelva la ruta para la carpeta views, donde esta ejs*/

app.set('view engine','ejs') /*para ir donde esta ejs*/
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));
app.use(express.static('views'));


app.use('/',mainRoutes);
app.use('/products',productRoutes);
app.use('/users', userDetail);

//---error---
app.use((req, res) => {
    res.status(404).render('404', {
        title: '404'
    });
})


app.listen(PORT, () => {
    console.log(`Server run puerto on http://localhost:${PORT}`);
})

