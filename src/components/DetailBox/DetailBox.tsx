import * as React from "react"
import { Col, Row } from "reactstrap";
import Person from "../../models/Person";

export interface Props {
  person: Person
}

export interface State {
}

export default class DetailBox extends React.Component<Props, State> {

  public render() {
    return (
      <Row>
        <Col>
          <p>
            Name: {this.props.person.name}
          </p>
        </Col>
      </Row>
    )
  }
}
