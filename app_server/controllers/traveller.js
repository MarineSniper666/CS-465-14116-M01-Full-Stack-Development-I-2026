const home = (req, res) => {
    console.log('Home controller triggered');
    res.render('index', {
        title: 'Home'
    });
};

const travel = (req, res) => {
    console.log('Travel controller triggered');
    res.render('travel', {
        title: 'Travel',
        subtitle: 'Explore our featured dive destinations'
    });
};

const rooms = (req, res) => {
    console.log('Rooms controller triggered');
    res.render('rooms', {
        title: 'Rooms'
    });
};

const meals = (req, res) => {
    console.log('Meals controller triggered');
    res.render('meals', {
        title: 'Meals'
    });
};

const news = (req, res) => {
    console.log('News controller triggered');
    res.render('news', {
        title: 'News',
        updated: 'Updated March 2026'
    });
};

const about = (req, res) => {
    console.log('About controller triggered');
    res.render('about', {
        title: 'About'
    });
};

const contact = (req, res) => {
    console.log('Contact controller triggered');
    res.render('contact', {
        title: 'Contact'
    });
};

module.exports = {
    home,
    travel,
    rooms,
    meals,
    news,
    about,
    contact
};