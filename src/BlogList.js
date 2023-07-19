import { Link } from "react-router-dom";

const BlogList = ( { blogs, title} ) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {/* iterazione per stampare tutti gli oggetti della lista utilizzando javascript 
            per scrivere codice javascript è necessario aprire le parentesi graffe
            
            utilizziamo la funzione map di js*/}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;