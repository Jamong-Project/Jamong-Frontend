import React from "react";
import { Editor, rootCtx } from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { ReactEditor, useEditor } from "@milkdown/react";
import { commonmark } from "@milkdown/preset-commonmark";
import { menu } from "@milkdown/plugin-menu";
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

const MilkdownEditor: React.FC = () => {
  const editor = useEditor((root) =>
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root);
      })
      .use(nord)
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

export default MilkdownEditor;
