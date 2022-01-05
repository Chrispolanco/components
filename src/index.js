import React from 'react'; 
import ReactDOM from 'react-dom'; 
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className='ui container comments'> 
            <CommentDetail 
                author = "Sam" 
                timeAgo = "Today at 4:35PM" 
                content = "I agree" 
                avatar = {faker.image.nature()}
            /> 
            <CommentDetail 
                author = "Alex" 
                timeAgo = "Today at 5:35PM" 
                content = "I also agree" 
                avatar = {faker.image.city()}
            /> 
            <CommentDetail 
                author = "Jane" 
                timeAgo = "Today at 6:35PM" 
                content = "I don't agree as much" 
                avatar = {faker.image.city()}
            /> 
        </div>
    ); 
}; 


ReactDOM.render(<App/>, document.getElementById('root')); 

