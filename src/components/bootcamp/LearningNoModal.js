import React, { useRef } from "react";
import { Modal, Button } from "antd";
import ReactMarkdown from "react-markdown/with-html";
import SyntaxHighlighter from "react-syntax-highlighter";

const CodeBlock = ({ language = "javascript", value }) => (
  <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
);

// let portada = require("../../assets/portada.jpg");
let portada =
  "https://firebasestorage.googleapis.com/v0/b/fixter-67253.appspot.com/o/assets%2Fportada2.png?alt=media&token=25f6504f-b14c-472d-b6e6-950fe22ab077&fbclid=IwAR2zn5dz3893S2_bqCRyn4KKIXvnolIJ4GPtZFmUgJz-PytF8_mY8eqF3UI";

export default function LearningNoModal({
  onOk,
  onCancel,
  learning,
  visible = true,
}) {
  let { title, description, link } = learning;
  let video = useRef();

  function ok(e) {
    if (video.current) video.current.pause();
    onOk(e);
  }

  function videoPlay() {
    if (video.current && !video.current.paused) video.current.pause();
    else video.current.play();
  }

  return (
    <div
      style={null}
      onCancel={ok}
      footer={
        <Button type="primary" onClick={ok}>
          Ok
        </Button>
      }
      title={title}
      visible={visible}
    >
      {link && (
        <video
          onClick={videoPlay}
          ref={video}
          poster={portada}
          style={{ width: "100%" }}
          src={link}
          controls
        ></video>
      )}
      <div className="markdown-body">
        <ReactMarkdown
          renderers={{
            code: CodeBlock,
          }}
          source={description}
          escapeHtml={false}
        />
      </div>
    </div>
  );
}
