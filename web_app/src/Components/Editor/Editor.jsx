// components/custom-editor.js

import React from "react";
import Editor from "ckeditor5-custom-build";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "bulletedList",
    "numberedList",
    "|",
    "outdent",
    "indent",

    "blockQuote",
    "undo",
    "redo",
  ],
};

function CustomEditor({ value, onChange }) {
  return (
    <CKEditor
      editor={Editor}
      config={editorConfiguration}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
    />
  );
}

export default CustomEditor;
