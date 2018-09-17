import * as React from "react"
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Container } from "reactstrap";
import Navigation from "../components/Navigation";
import Overview from "../pages/Overview"

export interface Props {
}

export interface State {
}

export default class DefaultRouter extends React.Component<Props, State> {
  public render() {
    return (
      <Router>
        <Container>
          <Navigation />
          <Route exact={true} path="/" component={Overview} />
        </Container>
      </Router>
    )
  }
}
