// @ts-nocheck
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const App = () => {
  const [state, setState] = React.useState('<p>This is the initial content of the editor</p>');

  return (
    <div className="App">
      <section>
        <Editor
          value={state}
          init={{
            height: 500,
            menubar: false,
            plugins: ['image', 'media'],
            toolbar: 'undo redo | formatselect | image media help',
            images_upload_handler: (blobInfo, success) => {
              const reader = new FileReader();
              reader.readAsDataURL(blobInfo.blob());
              reader.onload = (e) => {
                success(e.target.result);
              };
            },
          }}
          onEditorChange={setState}
        />
      </section>
      <section>{state}</section>
    </div>
  );
};

export default App;
