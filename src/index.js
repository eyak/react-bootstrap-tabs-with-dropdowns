import React from "react";
import ReactDOM from "react-dom";
import {
  Tab,
  Row,
  Col,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown,
  SplitButton,
  Button,
  Glyphicon,
  DropdownButton
} from "react-bootstrap";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: ["1", "2", "3", "4"],
      activeTab: "1"
    };
    this.nextNewTab = 5;
  }

  render() {
    return (
      <div className="App">
        <Row>
          <Col>
            <Tab.Container
              id="tabs-with-dropdown"
              defaultActiveKey="1"
              activeKey={this.state.activeTab}
              onSelect={key => {
                if (key == "add") this.setState({ activeTab: "1" });
                else this.setState({ activeTab: key });
              }}
            >
              <Row className="clearfix">
                <Col sm={12}>
                  <Nav bsStyle="tabs">
                    {this.state.tabs.map(item => (
                      <NavItem eventKey={item}>
                        Tab {item}
                        <DropdownButton bsStyle="link">
                          <MenuItem
                            eventKey={item}
                            onClick={e => {
                              var tabs = this.state.tabs;
                              tabs.splice(tabs.indexOf(item), 1);
                              this.setState({ tabs: tabs });
                            }}
                          >
                            Delete
                          </MenuItem>
                        </DropdownButton>
                      </NavItem>
                    ))}
                    <NavItem eventKey="add">
                      <Button
                        bsStyle="link"
                        onClick={e => {
                          this.setState({
                            tabs: this.state.tabs.concat(
                              this.nextNewTab.toString()
                            )
                          });
                          this.nextNewTab++;
                        }}
                      >
                        <Glyphicon glyph="plus" />
                      </Button>
                    </NavItem>
                  </Nav>
                </Col>
                <Col sm={12}>
                  <Tab.Content animation>
                    {this.state.tabs.map(item => (
                      <Tab.Pane eventKey={item}>Tab {item} content</Tab.Pane>
                    ))}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
