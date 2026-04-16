import React, { useState } from 'react'

const headerNav = [
  {
    title : "intro",
    url : "#intro"
  },
  {
    title : "skill",
    url : "#skill"
  },
  {
    title : "site",
    url : "#site"
  },
  {
    title : "portfolio",
    url : "#port"
  },
  {
    title : "contact",
    url : "#contact"
  },
]

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    // prevShow는 내가 정하는 거 이전 값을 나타냄 + setShow 값이 false면 true로 바꿔주는
    setShow((prevShow) => !prevShow);
  }
  return (
    <header id="header" role="banner">
    <div className="header_inner">
      <div className="header_logo">
        <h1>
          <a href='/'>portfolio<em>vite</em></a>
        </h1>
      </div>
      {/* ${}에서 $는 문자열일 경우 붙여주기 js인 경우는 {}만 사용 */}
      <nav className={`header_nav ${show ? "show" : ""}`} role="navigation" aria-label='메인메뉴'>
        <ul>
          {/* nav는 배열 안에 있는 데이터 명칭은 내가 정해 */}
          {headerNav.map((nav, key) => (
            <li key={key}>
                <a href={nav.url}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className="header_nav_mobile"
        id="headerToggle"
        aria-controls="primary-menu"
        aria-expanded={show ? "true" : "false"}
        role="button"
        tabIndex="0"
        onClick={toggleMenu}
      >
        <span></span>
      </div>
    </div>
    </header>
  )
}

export default Header