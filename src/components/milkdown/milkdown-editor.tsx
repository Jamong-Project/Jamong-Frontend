import React from "react";
import { Editor, rootCtx } from "@milkdown/core";
import { nordLight } from "@milkdown/theme-nord";
import { ReactEditor, useEditor } from "@milkdown/react";
import { commonmark } from "@milkdown/preset-commonmark";
import { menu } from "@milkdown/plugin-menu";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import styled from "@emotion/styled";

const MilkdownContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

const MilkdownEditorContainer = styled.div`
  width: 100%;
  max-width: 1280px;
`;

export type MilkdownEditorProps = {
  callback?: (key: string, value: any) => void;
};

const MilkdownEditor = ({ callback }: MilkdownEditorProps) => {
  const editor = useEditor((root) =>
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root);
      })
      .config((ctx) => {
        ctx.get(listenerCtx).markdownUpdated((_, markdown) => {
          if (callback) {
            callback("content", markdown);
          }
        });
      })
      .use(nordLight)
      .use(listener)
      .use(menu)
      .use(commonmark),
  );

  return (
    <MilkdownContainer>
      <MilkdownEditorContainer>
        <ReactEditor editor={editor} />
      </MilkdownEditorContainer>
    </MilkdownContainer>
  );
};

MilkdownEditor.defaultProps = {
  callback: null,
};

export default MilkdownEditor;
