import { Link, Outlet } from "react-router-dom";
import pageList from '../pages/pageList';
function NavigatorLayout() {

  return (
    <div>
      <nav>
        <ul>
          {pageList.map((page, name) => <li> <Link to={page.url}>{page.name}</Link> </li>)}
        </ul>
      </nav>
      <Outlet />
    </div>

  )
}

export default NavigatorLayout;