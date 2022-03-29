import React from "react"
import Layout from "../components/layout"
import './App.css'
import '../markdown-pages/markdown.css'
import Australia_Img from '../images/australia_img.jpg'

const Home = () => {
  return (
    <Layout>
      <br></br>
      <br></br>
      <div className="main-wrapper">
      <h1>Welcome!</h1>
      <p>On this blog you can find some of my experiences I had and projects I've worked on. I'm very happy if you find some of the things on my website helpful. Please contact me if you have any questions</p>
      <div/>
        <h2>About me</h2>
        <div>
          <img className='rounded-image' src={Australia_Img}></img><br/><br/>
          <p>Hey, my name is Florian. <br/><br/>
  
            I'm a computer science undergrad at TUM in Munich. I'm interested in web and app development, cloud computing and machine learning. When I'm not rowing, you'll probably find me rowing, playing tennis, swimming or at some local meetup
            <br/><br/> Feel free to contact me using my E-Mail at <a href="mailto:florianbe.klein@gmail.com">florianbe.klein@gmail.com</a> 
            </p>
        </div>
        <h2>Blog</h2>
        <p>On my blog you can find detailed descriptions of my projects and various other things. Check it out <a href="../MarkDown/blog">here</a></p>
        <h2>Personal</h2>
        <p>You can find out about some of my personal (not computer science related) interests and hobbys here <a href="../MarkDown/personal">here</a></p>
      </div>
    </Layout>
  )
}

export default Home
