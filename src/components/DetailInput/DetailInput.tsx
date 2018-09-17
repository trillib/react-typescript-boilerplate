import * as React from "react"
import { Input } from "reactstrap";


export interface Props {
  inputValue: string
  onInputChange: (value: string) => void
}

export interface State {
}

export default class DetailInput extends React.Component<Props, State> {

  public render() {
    return (
      <Input
        onChange={(value) => this.props.onInputChange(value.currentTarget.value)}
        value={this.props.inputValue}
      />
    )
  }
}
