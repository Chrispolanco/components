import React from 'react'; 
import ReactDOM from 'react-dom'; 
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className='ui container comments'> 
            <CommentDetail author = "Sam" timeAgo = "Today at 4:35PM" content = "I agree" animalImage = {faker.image.animals()}/> 
            <CommentDetail author = "Alex" timeAgo = "Today at 5:35PM" content = "I also agree" animalImage = {faker.image.animals()}/> 
            <CommentDetail author = "Jane" timeAgo = "Today at 6:35PM" content = "I don't agree as much" animalImage = {faker.image.animals()}/> 
        </div>
    ); 
}; 

ReactDOM.render(<App/>, document.getElementById('root')); 

