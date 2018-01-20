var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      img: 'http://via.placeholder.com/150x150'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      img: 'http://via.placeholder.com/150x150'
    },
    {
        id: 3,
        title: 'Paddington',
        desc: 'Film o misiu',
        img: 'http://via.placeholder.com/150x150'
    },
    {
        id: 4,
        title: 'Emotki',
        desc: 'Film o emotikonach',
        img: 'http://via.placeholder.com/150x150'
    }
];



var MovieTitle = React.createClass({
    
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    
    render: function() {
        return React.createElement('h2', {}, this.props.title)
    }
});

var MovieDesc = React.createClass({
    
    propTypes: {
        description: React.PropTypes.string.isRequired
    },
    
    render: function(){
        return React.createElement('p', {}, this.props.description)
    }
    
});

var MovieImg = React.createClass({
    
        propTypes: {
            image: React.PropTypes.string.isRequired
        },
    
        render: function(){
            return React.createElement('img', {src: this.props.image})
        }
    
});

var Movie = React.createClass({
    propTypes: {
        movieItem: React.PropTypes.object.isRequired,
    },
    render: function() {
        return React.createElement('li', {},
                React.createElement(MovieTitle, {title: this.props.movieItem.title}),
                React.createElement(MovieDesc, {description: this.props.movieItem.desc}),
                React.createElement(MovieImg, {image: this.props.movieItem.img})
        )
    }
});


var MoviesList = React.createClass({

    propTypes: {
        items: React.PropTypes.array.isRequired,
      },

    render: function() {
        var movies = this.props.items.map(function(movie) {
            return React.createElement(Movie, {movieItem: movie, key: movie.id});
        });

        return (
            React.createElement('ul', {}, movies)
        );
    }  

});

var element = React.createElement(MoviesList, {items: movies});


ReactDOM.render(element, document.getElementById('app'));