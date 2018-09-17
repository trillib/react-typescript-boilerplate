import * as React from "react"
import { Col, Row } from "reactstrap"
import DetailBox from "../../components/DetailBox";
import DetailInput from "../../components/DetailInput";
import Person from "../../models/Person";

// tslint:disable-next-line:interface-name
export interface Props {
}

export interface State {
  person: Person
}

export default class Overview extends React.Component<Props, State> {

  public state = {
    person: {
      id: 1,
      name: "Yvo"
    }
  }

  public render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <h1>Welcome to the Overview Page</h1>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <DetailBox person={this.state.person} />
            <DetailInput onInputChange={this.changeName} inputValue={this.state.person.name} /></Col>
        </Row>

      </React.Fragment>
    )
  }

  private changeName = (value: string) => {
    this.setState((state) => {
      return {
        person: { id: state.person.id, name: value }
      }
    })
  }
}
