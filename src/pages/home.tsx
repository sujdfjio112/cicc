// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   return <div><h1>Home Page</h1><MyButton /></div>;
// };

// const MyButton = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate('/communication'); // 在点击时导航到 '/other-route'
//   };

//   return (
//     <button onClick={handleButtonClick}>跳转</button>
//   );
// };<i class="fa-light fa-square-x"></i>
import "./home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWheatAwn } from "@fortawesome/free-solid-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faCopy } from "@fortawesome/free-solid-svg-icons"
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons"
import { faFire } from "@fortawesome/free-solid-svg-icons"
import { faBookmark } from "@fortawesome/free-solid-svg-icons"

const Home = () => {
  return (
    <div className="home">
      <Left />
      <main className="main">
        <div className="rc">
          <Header />
          <Content />
        </div>
      </main>
    </div>
  )
}

const Left = () => {
  const icons = [faHome, faBell, faBars, faCopy, faPencilAlt, faFire]
  return (
    <div className="left">
      <div className="logo">
        <FontAwesomeIcon icon={faWheatAwn} color={"#333"} size={"xl"} />
      </div>
      <div className="menu">
        <ul>
          {icons.map((icon, index) => (
            <li key={index} className={index === 0 ? "box" : ""}>
              <FontAwesomeIcon
                icon={icon}
                color={index === 0 ? "#fff" : "#333"}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Header = () => {
  return <header className="head"></header>
}

const Content = () => {
  return (
    <div className="content">
      <div className="cl">
        <div className="contentHead">
          <ul>
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <li key={index}>
                <div></div>
                <div>
                  <h4>How To Do Your Own Research</h4>
                  <div>
                    <span className="todo">
                      A Beginner's Guide to Good Data Sources in Crypto You may
                      oftenCharlie Ekstrom..{" "}
                    </span>
                  </div>
                  <div>
                    <span className="mate">Charlie Ekstrom...</span>
                  </div>
                  <div className="botspan">
                    <div>
                      <span className="time">32h ago</span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faBookmark} color={"#333"} />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="contentList">
          <div className="contentLi">
            <ul>
              {["For you", "Following", "Popular", "New"].map((str, index) => (
                <li key={index} className={index === 0 ? "box" : ""}>
                  <span className={index === 0 ? "col" : ""}>{str}</span>
                </li>
              ))}
            </ul>
          </div>
          <ul>
            <li>
              <div></div>
              <div>
                <h4>How To Do Your Own Research</h4>
                <div>
                  <span className="todo">
                    A Beginner's Guide to Good Data Sources in Crypto You may
                    oftenCharlie Ekstrom..{" "}
                  </span>
                </div>
                <div>
                  <span className="mate">Charlie Ekstrom...</span>
                </div>
                <div className="botspan">
                  <div>
                    <span className="time">32h ago</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div></div>
              <div>
                <h4>How To Do Your Own Research</h4>
                <div>
                  <span className="todo">
                    A Beginner's Guide to Good Data Sources in Crypto You may
                    oftenCharlie Ekstrom..{" "}
                  </span>
                </div>
                <div>
                  <span className="mate">Charlie Ekstrom...</span>
                </div>
                <div className="botspan">
                  <div>
                    <span className="time">32h ago</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div></div>
              <div>
                <h4>How To Do Your Own Research</h4>
                <div>
                  <span className="todo">
                    A Beginner's Guide to Good Data Sources in Crypto You may
                    oftenCharlie Ekstrom..{" "}
                  </span>
                </div>
                <div>
                  <span className="mate">Charlie Ekstrom...</span>
                </div>
                <div className="botspan">
                  <div>
                    <span className="time">32h ago</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div></div>
              <div>
                <h4>How To Do Your Own Research</h4>
                <div>
                  <span className="todo">
                    A Beginner's Guide to Good Data Sources in Crypto You may
                    oftenCharlie Ekstrom..{" "}
                  </span>
                </div>
                <div>
                  <span className="mate">Charlie Ekstrom...</span>
                </div>
                <div className="botspan">
                  <div>
                    <span className="time">32h ago</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div></div>
              <div>
                <h4>How To Do Your Own Research</h4>
                <div>
                  <span className="todo">
                    A Beginner's Guide to Good Data Sources in Crypto You may
                    oftenCharlie Ekstrom..{" "}
                  </span>
                </div>
                <div>
                  <span className="mate">Charlie Ekstrom...</span>
                </div>
                <div className="botspan">
                  <div>
                    <span className="time">32h ago</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div></div>
              <div>
                <h4>How To Do Your Own Research</h4>
                <div>
                  <span className="todo">
                    A Beginner's Guide to Good Data Sources in Crypto You may
                    oftenCharlie Ekstrom..{" "}
                  </span>
                </div>
                <div>
                  <span className="mate">Charlie Ekstrom...</span>
                </div>
                <div className="botspan">
                  <div>
                    <span className="time">32h ago</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="cf">
        <h4>People who to follow</h4>
        <ul>
          <li>aaaaa</li>
          <li>aaaaa</li>
          <li>aaaaa</li>
          <li>aaaaa</li>
          <li>aaaaa</li>
        </ul>
      </div>
    </div>
  )
}
export default Home
