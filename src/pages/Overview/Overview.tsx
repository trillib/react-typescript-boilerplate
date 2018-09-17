import * as React from "react"
import { Col, Row } from "reactstrap"

// tslint:disable-next-line:interface-name
export interface Props {
}

export interface State {
}

export default class Overview extends React.Component<Props, State> {
  public render() {
    return (
      <Row>
        <Col width="12">
          <h1>Welcome to the Overview Page</h1>
        </Col>
      </Row>
    )
  }
}
