import * as React from "react"
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Container } from "reactstrap";
import Overview from "../components/Overview"
import Navigation from "./Navigation";

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
          <Route exact={true} path="/overview" component={Overview} />
        </Container>
      </Router>
    )
  }
}
