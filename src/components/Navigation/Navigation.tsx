import * as React from "react"
import { Link } from "react-router-dom"
import { Nav, Navbar, NavItem, NavLink, Row } from "reactstrap"

export interface Props {
}

export interface State {
}

export default class Navigation extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
    }
  }

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
          </Nav>
        </Navbar>
      </Row>
    )
  }
}
