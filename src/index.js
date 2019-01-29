import React from "react";
import ReactDOM from "react-dom";
import {
  Tab,
  Row,
  Col,
  Nav,
  NavItem,
  MenuItem,
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
                if (key === "add") this.setState({ activeTab: this.newTab });
                else this.setState({ activeTab: key });
              }}
            >
              <Row className="clearfix">
                <Col sm={12}>
                  <Nav bsStyle="tabs">
                    {this.state.tabs.map(item => (
                      <NavItem key={item} eventKey={item}>
                        Tab {item}
                        <DropdownButton
                          bsStyle="link"
                          title=""
                          id={`tab-{item}-context`}
                          componentClass="span"
                        >
                          <MenuItem
                            eventKey={item}
                            componentClass="span"
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
                    <NavItem key="add" eventKey="add">
                      <Button
                        bsStyle="link"
                        componentClass="span"
                        onClick={e => {
                          this.newTab = this.nextNewTab.toString();
                          this.setState({
                            tabs: this.state.tabs.concat(this.newTab)
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
                      <Tab.Pane key={item} eventKey={item}>
                        Tab {item} content
                      </Tab.Pane>
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
