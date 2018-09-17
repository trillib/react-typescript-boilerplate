import * as React from "react"
import { Col, Row } from "reactstrap";

export interface Props {
}

export interface State {
}

export default class Settings extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
    }
  }

  public render() {
    return (
      <Row>
        <Col>
          <h1>Welcome to Settings</h1>
        </Col>
      </Row>
    )
  }
}
