// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import AceEditor, { IMarker } from "react-ace";
import WSCMode from "./mode.js";
import "./theme";
import {
  ResponseType,
  makeMarker,
  Container,
  Button,
  ErrorContainer,
} from "./components";

import "ace-builds/src-noconflict/mode-elixir";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/keybinding-vim";
import "ace-builds/src-noconflict/keybinding-emacs";
import "ace-builds/src-noconflict/ext-language_tools";

const customMode = new WSCMode();

export type EditorProps = {
  language: string;
  onRender: (language: string) => void;
  keyboard?: "vim" | "emacs" | "";
  readOnly?: boolean;
  hideGutter?: boolean;
  fontSize?: number;
  height?: number;
};

export const Editor = (props: EditorProps): React.ReactElement => {
  const [renderSpace, setRenderSpace] = useState<AceEditor | null>();
  const [render, setRender] = useState<boolean>(false);
  const [language, onUpdateLanguage] = useState<string>(props.language);
  const [markers, setMarkers] = useState<IMarker[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (renderSpace) {
      // @ts-ignore
      renderSpace.editor.getSession().setMode(customMode);
      renderSpace.editor.setTheme("ace/theme/wsc");
    }
  }, [renderSpace]);

  useEffect(() => {
    const submit = async () => {
      if (render) {
        setError("");
        setMarkers([]);
        try {
          props.onRender(language);
        } catch (err) {
          handleError(err, language);
        }
        setRender(false);
      }
    };

    submit().catch((e) => {
      throw e;
    });
  }, [render, language, props]);

  const setRenderSpaceOuter = (el: AceEditor | null) => {
    if (el) {
      setRenderSpace(el);
      if (props.readOnly) {
        el.editor.renderer.$cursorLayer.element.style.opacity = 0;
      }
    }
  };
  const stop_lang = `{ f: 220, l: 1, g: 1, p: 0 }\nmain = {Fm 0}`;

  const handleError = (response: ResponseType, language: string) => {
    const responseType = Object.keys(response)[0];
    // eslint-disable-next-line
    const value: any = Object.values(response)[0];

    switch (responseType) {
      case ResponseType.ParseError:
        setMarkers([
          makeMarker(value.line, value.column, language.split("\n").length),
        ]);
        setError(`<Parse Error> Line: ${value.line} | Column ${value.column}`);
        break;
      case ResponseType.IdError:
        setError(`<ID Error> "${value.id}" not found.`);
        break;
      case ResponseType.IndexError:
        setError(`<Index Error> ${value.message}`);
        break;

      case ResponseType.MsgError:
        setError(`<Error> ${value.message}`);
        break;
      default:
        console.log("Unhandled error");
        console.log(response);
        break;
    }
  };

  return (
    <Container
      numLines={
        props.height
          ? parseInt(`${props.height}px`)
          : language.split("\n").length
      }
    >
      {!props.readOnly && (
        <div>
          <Button onClick={() => setRender(true)}>Play</Button>
          <Button onClick={() => props.onRender(stop_lang)}>Stop</Button>
        </div>
      )}
      <AceEditor
        focus={true}
        ref={(el) => {
          setRenderSpaceOuter(el);
        }}
        name="aceEditor"
        readOnly={props.readOnly ? true : false}
        keyboardHandler={props.keyboard ? props.keyboard : "vim"}
        showGutter={props.hideGutter ? false : true}
        fontSize={props.fontSize ? props.fontSize : 20}
        markers={markers}
        value={language}
        onChange={(l) => onUpdateLanguage(l)}
        showPrintMargin={true}
        highlightActiveLine={true}
        placeholder="WereSoCool"
        mode="elixir"
        theme="github"
        setOptions={{
          hScrollBarAlwaysVisible: true,
          vScrollBarAlwaysVisible: true,
          enableBasicAutocompletion: true,
          showLineNumbers: true,
          tabSize: 2,
          displayIndentGuides: true,
          highlightActiveLine: !props.readOnly,
          highlightSelectedWord: !props.readOnly,
        }}
        commands={[
          {
            name: "submit",
            bindKey: { win: "Shift-Enter", mac: "Shift-Enter" },
            exec: () => {
              setRender(true);
            },
          },
          {
            name: "stop",
            bindKey: { win: "Ctrl-Enter", mac: "Command-Enter" },
            exec: async () => {
              props.onRender(stop_lang);
            },
          },
        ]}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <ErrorContainer>{error}</ErrorContainer>
    </Container>
  );
};
