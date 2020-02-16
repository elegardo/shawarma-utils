import React, { useState } from "react";
import { Container, Grid, List, TextArea, Button, Divider } from "semantic-ui-react";
import JSONTree from "react-json-tree";
import base64 from "base-64";
import utf8 from "utf8";
import { CustomButton } from "./CustomButton";
import CopyToClipboard from "react-copy-to-clipboard";

const theme = {
  scheme: "monokai",
  base00: "#272822",
  base01: "#383830",
  base02: "#49483e",
  base03: "#75715e",
  base04: "#a59f85",
  base05: "#f8f8f2",
  base06: "#f5f4f1",
  base07: "#f9f8f5",
  base08: "#f92672",
  base09: "#fd971f",
  base0A: "#f4bf75",
  base0B: "#a6e22e",
  base0C: "#a1efe4",
  base0D: "#66d9ef",
  base0E: "#ae81ff",
  base0F: "#cc6633"
};

const MainContainer = () => {
  const [action, setAction] = useState("");
  const [input, setInput] = useState();
  const [output, setOutput] = useState();

  const buildJsonTree = (value: any) => {
    try {
      setOutput(JSON.parse(value));
    } catch (error) {
      setOutput("");
    }
  };

  const buildJsonParse = (value: any) => {
    try {
      setOutput(JSON.stringify(JSON.parse(value), null, 2));
    } catch (error) {
      console.log(error);
      setOutput("");
    }
  };

  const buildEncode = (value: any) => {
    try {
      const bytes = utf8.encode(value);
      const encode = base64.encode(bytes);
      setOutput(encode);
    } catch (error) {
      console.log(error);
      setOutput("");
    }
  };

  const buildDecode = (value: any) => {
    try {
      const decode = base64.decode(value);
      buildJsonParse(decode);
    } catch (error) {
      console.log(error);
      setOutput("");
    }
  };

  return (
    <Container>
      <Grid container columns="equal">
        <Grid.Column
          centered="true"
          mobile={16}
          tablet={16}
          computer={7}
          className="mainColumn"
        >
          <TextArea
            rows={10}
            placeholder="Input value.."
            onChange={(e, data) => {
              setInput(data.value);
            }}
          />
        </Grid.Column>

        <Grid.Column centered="true" mobile={16} tablet={16} computer={2}>
          <List verticalAlign="middle">
            <List.Item>
              <CustomButton
                action="encode"
                onClick={e => {
                  setAction("encode");
                  buildEncode(input);
                }}
              />
            </List.Item>

            <List.Item>
              <CustomButton
                action="decode"
                onClick={e => {
                  setAction("decode");
                  buildDecode(input);
                }}
              />
            </List.Item>

            <List.Item>
              <CustomButton
                action="jsonParse"
                onClick={e => {
                  setAction("jsonParse");
                  buildJsonParse(input);
                }}
              />
            </List.Item>

            <List.Item>
              <CustomButton
                action="jsonTree"
                onClick={e => {
                  setAction("jsonTree");
                  buildJsonTree(input);
                }}
              />
            </List.Item>

            <Divider hidden />

            <List.Item>
              <CopyToClipboard text={output}>
                <Button
                  inverted
                  color='red'
                  className="button">
                  copy
                </Button>
              </CopyToClipboard>
            </List.Item>
          </List>
        </Grid.Column>

        <Grid.Column centered="true" mobile={16} tablet={16} computer={7}>
          <Container className="ouputColumn">

            {action === "jsonTree" && (
              <div>
                <pre>
                  <JSONTree
                    hideRoot={true}
                    data={output}
                    theme={theme}
                    invertTheme={true}
                  />
                </pre>
              </div>
            )}

            {(action === "jsonParse" ||
              action === "encode" ||
              action === "decode") && (
              <div>
                <pre>{output}</pre>
              </div>
            )}
          </Container>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default MainContainer;
