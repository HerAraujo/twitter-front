import "../components/RightSidebar.css";
import SuggestFollow from "./SuggestFollow";

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div>
        <nav className="navbar r-sidebar-search-nav">
          <form className="r-sidebar-search-nav">
            <div>
              <input
                className="form-control r-sidebar-search-input rounded-pill"
                type="search"
                placeholder={`    Search Twitter`}
                aria-label="Search"
              />
            </div>
          </form>
        </nav>
      </div>
      <div className="r-sidebar-trends">
        <span className="r-sidebar-trends-label">Trends for you</span>
        <div className="r-sidebar-trends-list">
          <ul className="r-sidebar-ul px-0 py-2">
            <li>
              <div className="row p-0 m-0">
                <div className="col-8 p-0 m-0">
                  <ul className="r-sidebar-ul px-0 py-2">
                    <li className="r-sidebar-tags-list">Politics.trending</li>
                    <li className="r-sidebar-title-list">Ucrania</li>
                    <li className="r-sidebar-tags-list">
                      Trending with{" "}
                      <a href="#" className="r-sidebar-link-list">
                        Ukraine
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-4 p-0 m-0 item">
                  <a href="#">
                    <svg viewBox="0 0 24 24" className="r-sidebar-dots-items">
                      <g>
                        <circle cx="5" cy="12" r="2"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                        <circle cx="19" cy="12" r="2"></circle>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="row p-0 m-0">
                <div className="col-8 p-0 m-0">
                  <ul className="r-sidebar-ul px-0 py-2">
                    <li className="r-sidebar-tags-list">Politics.trending</li>
                    <li className="r-sidebar-title-list">
                      #TerceraGuerraMundial
                    </li>
                    <li className="r-sidebar-tags-list">380K Tweets</li>
                  </ul>
                </div>
                <div className="col-4 p-0 m-0 item">
                  <a href="#">
                    <svg viewBox="0 0 24 24" className="r-sidebar-dots-items">
                      <g>
                        <circle cx="5" cy="12" r="2"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                        <circle cx="19" cy="12" r="2"></circle>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="row p-0 m-0">
                <div className="col-8 p-0 m-0">
                  <ul className="r-sidebar-ul px-0 py-2">
                    <li className="r-sidebar-tags-list">Politics.trending</li>
                    <li className="r-sidebar-title-list">Chernobyl</li>
                    <li className="r-sidebar-tags-list">328K Tweets</li>
                  </ul>
                </div>
                <div className="col-4 p-0 m-0 item">
                  <a href="#">
                    <svg viewBox="0 0 24 24" className="r-sidebar-dots-items">
                      <g>
                        <circle cx="5" cy="12" r="2"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                        <circle cx="19" cy="12" r="2"></circle>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="row p-0 m-0">
                <div className="col-8 p-0 m-0">
                  <ul className="r-sidebar-ul px-0 py-2">
                    <li className="r-sidebar-tags-list">Politics.trending</li>
                    <li className="r-sidebar-title-list">Putin</li>
                    <li className="r-sidebar-tags-list">
                      Trending with{" "}
                      <a href="#" className="r-sidebar-link-list">
                        Vladimir
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-4 p-0 m-0 item">
                  <a href="#">
                    <svg viewBox="0 0 24 24" className="r-sidebar-dots-items">
                      <g>
                        <circle cx="5" cy="12" r="2"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                        <circle cx="19" cy="12" r="2"></circle>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="row p-0 m-0">
                <div className="col-8 p-0 m-0">
                  <ul className="r-sidebar-ul px-0 py-2">
                    <li className="r-sidebar-tags-list">Politics.trending</li>
                    <li className="r-sidebar-title-list">Kiev</li>
                    <li className="r-sidebar-tags-list">1.25M Tweets</li>
                  </ul>
                </div>
                <div className="col-4 p-0 m-0 item">
                  <a href="#">
                    <svg viewBox="0 0 24 24" className="r-sidebar-dots-items">
                      <g>
                        <circle cx="5" cy="12" r="2"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                        <circle cx="19" cy="12" r="2"></circle>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </li>
            <li className="r-sidebar-hidden1">
              <div className="row p-0 m-0">
                <div className="col-8 p-0 m-0">
                  <ul className="r-sidebar-ul px-0 py-2">
                    <li className="r-sidebar-tags-list">Politics.trending</li>
                    <li className="r-sidebar-title-list">Jarkov</li>
                    <li className="r-sidebar-tags-list">1.25M Tweets</li>
                  </ul>
                </div>
                <div className="col-4 p-0 m-0 item">
                  <a href="#">
                    <svg viewBox="0 0 24 24" className="r-sidebar-dots-items">
                      <g>
                        <circle cx="5" cy="12" r="2"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                        <circle cx="19" cy="12" r="2"></circle>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </li>
            <li className="r-sidebar-hidden2">
              <div className="row p-0 m-0">
                <div className="col-8 p-0 m-0">
                  <ul className="r-sidebar-ul px-0 py-2">
                    <li className="r-sidebar-tags-list">Politics.trending</li>
                    <li className="r-sidebar-title-list">Odessa</li>
                    <li className="r-sidebar-tags-list">1.25M Tweets</li>
                  </ul>
                </div>
                <div className="col-4 p-0 m-0 item">
                  <a href="#">
                    <svg viewBox="0 0 24 24" className="r-sidebar-dots-items">
                      <g>
                        <circle cx="5" cy="12" r="2"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                        <circle cx="19" cy="12" r="2"></circle>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="r-sidebar-trends-show">Show more</div>
      </div>
      <div className="r-sidebar-follow">
        <span className="r-sidebar-follow-label">Who to follow</span>
        <div className="r-sidebar-follow-suggestion">
          <SuggestFollow />
        </div>
      </div>
      <div className="r-sidebar-footer">
        <div>
          <a href="https://twitter.com/tos">Terms of service</a>
          <a href="https://twitter.com/privacy">Privacy Policy</a>
          <a href="https://twitter.com/articles/20170514">Cookie Policy</a>
          <a href="https://twitter.com/resources/accessibility">
            Accessibility
          </a>
          <a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo">
            Ads info
          </a>
        </div>
        <div>© 2022 Twitter, Inc.</div>
      </div>
    </div>
  );
}

export default RightSidebar;
