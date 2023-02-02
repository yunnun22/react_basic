import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* <a href="/">Home</a> */}
            <Link to='/'>Home</Link>
          </li>

          <li>
           {/*요소는 전체를 모드 렌더링하므로  <Link> 또는  <NavLink>를 사용한다. */}
           {/*  <a href='/'>Dashboard </a>*/}
          <Link to='/dashboard'>Dashboard</Link> 
          </li>

          <li>
            <Link to='/nothing-here'>Nothing here</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
};
export default Layout;