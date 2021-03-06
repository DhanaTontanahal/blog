import React, { useEffect, useState } from "react";
import Card from '../Organisms/Card/Card'
import BlogPostLayout from '../Templates/BlogPostLayout'
import {data} from '../../data'

function DashboardPage() {
   
    const [blogs, setBlogs] = useState([]);
   
    useEffect(() => {
        fetchDashboardData();
        setBlogs(data.data);
    }, []);

    const fetchDashboardData = async () => {
        // const data = await fetch(`http://localhost:3000/mockApi`);//uncomment for local
        // const blogPostData = await data.json();
        // setBlogs(blogPostData.data);//uncomment for local
       
    }

    return (
        <React.Fragment>
            <BlogPostLayout>
                {blogs.length > 0 ?
                    blogs.map((blog, index) =>
                        <Card
                            key={blog.id}
                            id={blog.id}
                            cardHeaderTitle={blog.title}
                            subHeader={blog.subHeader}
                            cardHeaderAvatarString={blog.avatarText}
                            responseCount={blog.responseCount}
                            cardMedia={blog.cardImage}
                            clapCount={blog.clapCount}
                            cardContentVariant={blog.cardContentVariant}
                            cardContentHeading={blog.cardContentHeading}
                            cardContent={blog.content}
                            cardContentColor={blog.color}
                        />
                    )
                    : "No Blogs from this author !"}
            </BlogPostLayout>
        </React.Fragment>
    )
}

export default DashboardPage












