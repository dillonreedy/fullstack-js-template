import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import pages from "./pages";
import { Navbar, Nav } from 'react-bootstrap';

function Main(props) {
    let handleRoute = route => () => {
      props.history.push({ pathname: route });
    };

    const navItems = pages.map((page,index) => {
      const initializedPage = (typeof page === 'object') ? new page.WrappedComponent : new page();
      let route = ((index) === 0) ? '' : initializedPage.title;
      route = `/${route}`;

      return {
        initializedPage,
        unitializedPage: page,
        route,
        navText: initializedPage.title
      }
    });

    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            {
              navItems.map(navItem => {
                return (
                  <Nav.Link onClick={handleRoute(navItem.route)}>{navItem.navText}</Nav.Link>
                )
              })
            }
          </Nav>
        </Navbar>
        <Switch>
          {
            navItems.map(navItem => {
              return (<Route exact path={navItem.route} component={navItem.unitializedPage}/>);
            })
          }
        </Switch>

      </div>
    );
  }

export default withRouter(Main);