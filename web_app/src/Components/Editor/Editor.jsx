import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Editor({ value, onChange }) {
  const editorConfiguration = {
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "blockQuote",
        "undo",
        "redo",
      ],
    },
  };

  return (
    <CKEditor
      editor={ClassicEditor}
      config={editorConfiguration}
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
    />
  );
}

export default Editor;
