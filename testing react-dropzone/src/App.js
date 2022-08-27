import { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./App.css";

function App() {
    const [files, setFIles] = useState([]);

    const [getRootProps, getInputProps] = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFIles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });

    const images = files.map((file) => {
        <div key={file.name}>
            <div>
                <img
                    src={file.preview}
                    style={{ width: "200px" }}
                    alt="preview"
                />
            </div>
        </div>;
    });

    return (
        <div className="App">
            <div {...getRootProps}>
                <input {...getInputProps} />
                <p>Drop FIles here</p>
            </div>
            <div>{images}</div>
        </div>
    );
}

export default App;
