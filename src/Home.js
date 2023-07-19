import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending } = useFetch('http://localhost:8000/blogs');

    // const handelDeleteBlog = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    return (  
        <div className="home">
            {isPending && <div>Loading...</div>}

            {/* nel component BlogList 'blogs' non è definito quindi utilizzeremo una PROPS 
            per passare i dati tra componenti parent (home) e child (bloglist)
            
            passeremo dunque un paramento al tag figlio per utilizzare la lista già popolata presente nel padre
            le props verranno passate come parametro del componente e verranno richiamate attraverso la dichiarazioni di variabili (es. const blogs = props.blogs;*/}
            
            {blogs && <BlogList blogs={blogs} title='All blogs'/>}

            {/* filtro la lista per il parametro author */}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'emma')} title='Emma blogs' />}
        </div>
    );
}
 
export default Home;

// const Home = () => {

//     // let name = 'emma';
//     //for reactive value 
//     const [name, setName] = useState('emma');
//     const [age, setAge] = useState(23);

//     const handleClick = (e) => {
//         // name = 'paolo';
//         // console.log(name);
//         setName('paolo');
//         setAge(30);
//     }

//     // const handleClickAgain = (name, e) => {
//     //     console.log('hello, ' + name, e.target);
//     // }

//     return (  
//         <div className="home">
//             <h2>Home Page</h2>
//             <p>{ name } is { age } years old</p>
//             <button onClick={handleClick}>click me</button>
//             {/* <button onClick={ (e) => handleClickAgain('emma', e)}>click me again</button> */}
//         </div>
//     );
// }