import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/Slide/Slide'
import CatCard from '../../components/catCard/CatCard'
import { cards,projects } from '../../data'
import ProjectCard from '../../components/projectCard/ProjectCard'

function Home() {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={4} arrowScroll={3}>
      {cards.map(card => (
            <CatCard item={card} key={card.id}/>
         ))} 
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="../img/check.png" alt="" />
              The best every budget
            </div>
            <p>
              Find the high quality service at every price point. No hurly rates, hust project-based pricing.
            </p>

            <div className="title">
              <img src="../img/check.png" alt="" />
              The best every budget
            </div>
            <p>
              Find the high quality service at every price point. No hurly rates, hust project-based pricing.
            </p>

            <div className="title">
              <img src="../img/check.png" alt="" />
              The best every budget
            </div>
            <p>
              Find the high quality service at every price point. No hurly rates, hust project-based pricing.
            </p>

            <div className="title">
              <img src="../img/check.png" alt="" />
              The best every budget
            </div>
            <p>
              Find the high quality service at every price point. No hurly rates, hust project-based pricing.
            </p>


          </div>
          <div className="item">
            <video src="/video/Top 2024 Web Design Trends.mp4" controls></video>
          </div>
        </div>
      </div>
      

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr <i>business</i></h1>
            <h1>A business solutions deisgner for <i>teams</i></h1>
            <p>Upgrade to a curated experience packed with tools and benefits, dedicated to business</p>
            <div className="title">
              <img src="../img/check.png" alt="" />
              The best every budget
            </div>

            <div className="title">
              <img src="../img/check.png" alt="" />
              Find the high quality service at every price point. No hurly rates,
            </div>

            <div className="title">
              <img src="../img/check.png" alt="" />
              No hurly rates, hust project-based pricing.
            </div>

            <div className="title">
              <img src="../img/check.png" alt="" />
              The best every budget
            </div>
            <button>Explore Fiverr Business</button>

          </div>
          <div className="item">
            <img src="../img/jolie-fille-brune-ecouteurs-debout-prenant-selfie_651396-3282.jpg" alt="" />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowScroll={3}>
      {projects.map(project => (
            <ProjectCard card={project} key={project.id}/>
         ))} 
      </Slide>
    </div> 
  )
}

export default Home