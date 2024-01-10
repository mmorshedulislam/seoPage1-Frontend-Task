import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AddAttachment = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    const files = e.target.files;

    // If files are selected
    if (files && files.length > 0) {
      // Set the selected files
      setSelectedFiles([...selectedFiles, ...files]);

      // Read each file and set it as the preview image
      const newPreviewImages = [];
      for (const file of files) {
        const reader = new FileReader();
        reader.onloadend = () => {
          newPreviewImages.push(reader.result);
          if (newPreviewImages.length === files.length) {
            setPreviewImages([...previewImages, ...newPreviewImages]);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append("files", file);
      });

      setIsLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_PORT}/api/files/upload`,
        formData
      );
      
      toast.success(res?.data?.message);
      setIsLoading(false);
      setSelectedFiles([]);
      setPreviewImages([]);
    } catch (error) {
      console.error("Error submitting files:", error);
    }
  };

  return (
    <div>
      {/* list view for multiple */}
      {selectedFiles.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold my-2">List View:</h4>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index} className="border p-2 my-2 rounded-md">
                {index + 1}. {file.name} ({file.type})
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* display multiple image */}
      {previewImages.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold my-2">Preview:</h4>
          <div className="flex flex-wrap items-center gap-3">
            {previewImages.map((previewImage, index) => (
              <div key={index} className="w-[100px] h-[100px] rounded-full">
                <img
                  src={previewImage}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="my-5">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="multiple_files"
        >
          Upload multiple files
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="multiple_files"
          type="file"
          multiple
          onChange={handleFileChange}
        />
      </div>
      <button
        className="bg-[#006EB9] text-white px-4 py-2 rounded-md font-semibold block w-full"
        type="submit"
        onClick={handleSubmit}
      >
        {isLoading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default AddAttachment;
