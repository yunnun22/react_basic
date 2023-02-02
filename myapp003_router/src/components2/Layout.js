import { Link, NavLink, Outlet } from 'react-router-dom';

const activeStyle = ({ isActive }) => ({
  color: isActive ? 'green' : '',
  fontSize: isActive ? '2rem' : '',
});

const Layout = () => {
  return (
    <div>
      {/* 메뉴 */}
      <nav>
        <ul>
          <li>
            {/* <a href="/">Home</a> */}
            <NavLink to='/' style={activeStyle}>
              Home
            </NavLink>
          </li>

          {/* <a>요소는 전체를 모드 렌더링하므로 <Link>또는 <NavLink>를 사용한다. */}
          {/* <NavLink> : style 지정 가능 */}
          {/* <a href='/dashboard'>Dashboard</a> */}
          <li>
            <NavLink to='/dashboard' style={activeStyle}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to='/nothing-here' style={activeStyle}>
              Nothing here
            </NavLink>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
};
export default Layout;