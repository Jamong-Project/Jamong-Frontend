import {
  defaultValueCtx,
  Editor,
  editorViewOptionsCtx,
  rootCtx,
} from "@milkdown/core";
import { commonmark } from "@milkdown/preset-commonmark";
import { ReactEditor, useEditor } from "@milkdown/react";
import { nordLight } from "@milkdown/theme-nord";
import React from "react";
import { MilkdownContainer, MilkdownEditorContainer } from "./styles";

export type ReadOnlyMilkdownProps = {
  text: string;
};

const ReadOnlyMilkdown = ({ text }: ReadOnlyMilkdownProps) => {
  const editor = useEditor((root) =>
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root);
      })
      .config((ctx) => {
        ctx.set(defaultValueCtx, text);
      })
      .config((ctx) => {
        ctx.set(editorViewOptionsCtx, { editable: () => false });
      })
      .use(nordLight)
      .use(commonmark),
  );

  return (
    <MilkdownContainer>
      <MilkdownEditorContainer>
        <ReactEditor editor={editor.editor} />
      </MilkdownEditorContainer>
    </MilkdownContainer>
  );
};

export default ReadOnlyMilkdown;
