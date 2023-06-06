import React from 'react'
import { Link } from 'react-router-dom'
 
function Blogs() {
  return (
    <>
      <div className="home-blog-section wf-section" id="BLOGS">
      <div data-w-id="d31ac2af-6b43-06cc-5e44-53bc1f7b99d4"  className="home-blog-wrapper">
        <div className="featured-blogs-contain">
          <div className="how-it-works-header">
            <h2 className="how-it-works-heading">Blogs</h2>
            <div className="how-it-works-header-text">
              Our blog is packed with useful tips and tricks to help you
              succeed in the digital space. Keep up to date with the latest
              developments
            </div>
          </div>
          <div className="w-layout-grid blogs-featured-grid">
            <div id="w-node-e20efc18-893b-21e5-ef44-8d2897e0bb09-f5945d6e" className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <Link to="/blogs/7-killer.html" className="blogs-wrapper w-inline-block">
                    <div className="blog-thumbnail-contain featured">
                      <img src= "https://ik.imagekit.io/ebike99/digital_marketing_services.webp?updatedAt=1684133648023" loading="lazy" alt=""
                        className="blog-thumbnail-image" />
                    </div>
                    <div className="blog-info-wrapper">
                      <div className="category-text">Technology</div>
                      <h4 className="blog-title h4">
                        Chime eagerly blind compensation cheek, however
                        forward in become it
                      </h4>
                      <div data-w-id="e20efc18-893b-21e5-ef44-8d2897e0bb12" className="red-link">
                        <div>Read More</div>       
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div id="w-node-e20efc18-893b-21e5-ef44-8d2897e0bb19-f5945d6e" className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <Link to="/" className="blogs-wrapper w-inline-block">
                    <div className="blog-thumbnail-contain">
                      <img src="https://ik.imagekit.io/ebike99/How-to-Start-a-Blog-That-Makes-You-Money.webp?updatedAt=1684134395825" loading="lazy" alt=""
                        className="blog-thumbnail-image" />
                    </div>
                    <div className="blog-info-wrapper">
                      <div className="category-text small">Design</div>
                      <h5 className="blog-title">
                        10 Web Design Blogs You Can&#x27;t Miss
                      </h5>
                      <div data-w-id="e20efc18-893b-21e5-ef44-8d2897e0bb22" className="red-link">
                        <div>Read More</div>
                         
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div id="w-node-e20efc18-893b-21e5-ef44-8d2897e0bb29-f5945d6e" className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <Link to="/" className="blogs-wrapper w-inline-block">
                    <div className="blog-thumbnail-contain">
                      <img src="https://ik.imagekit.io/ebike99/top-fb-updates.webp?updatedAt=1684135089099" loading="lazy" alt=""  
                        className="blog-thumbnail-image" />
                    </div>
                    <div className="blog-info-wrapper">
                      <div className="category-text small">Business</div>
                      <h5 className="blog-title">The History Of Web Design</h5>
                      <div data-w-id="e20efc18-893b-21e5-ef44-8d2897e0bb32" className="red-link">
                        <div>Read More</div>
                         
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Blogs