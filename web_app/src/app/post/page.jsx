// App.jsx / App.tsx

"use client";

import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Navbar from "../../Components/Navbar/Navbar";

function Post() {
  const editorConfiguration = {
    toolbar: ["bold", "italic"],
  };

  return (
    <div>
      {/* <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        data="<p>Hello from CKEditor&nbsp;5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event) => {
          console.log(event);
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      /> */}

      <Navbar />
    </div>
  );
}

export default Post;
