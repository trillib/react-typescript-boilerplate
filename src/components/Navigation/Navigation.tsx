import * as React from "react"
import { Link } from "react-router-dom"
import { Nav, Navbar, NavItem, NavLink, Row } from "reactstrap"

export interface Props {
}

export interface State {
}

export default class Navigation extends React.Component<Props, State> {

  public render() {
    return (
      <Row>
        <Navbar>
          <Nav>
            <NavItem>
              <NavLink>
                <Link to="/">Overview</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/settings">Settings</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </Row>
    )
  }
}
