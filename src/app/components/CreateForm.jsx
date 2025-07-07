// app/components/CreateForm.tsx
import { create } from "../lib/create";

const CreateForm = () => {
  return (
    <div className="w-screen">
      <form
        action={create}
        style={{ maxWidth: "600px", margin: "auto", marginTop: "15rem" }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="title">Client name</label>
          <input
            id="title"
            name="title"
            type="text"
            className="text-black text-xl pl-3 h-[2rem]"
            placeholder="Company, brand name etc"
            required
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="subtitle">Title</label>
          <input
            id="subtitle"
            name="subtitle"
            type="text"
            className="text-black text-xl pl-3 h-[2rem]"
            placeholder="Title of video"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="imgurl">Image URL</label>
          <input
            id="imgurl"
            name="imgurl"
            type="url"
            required
            className="text-black text-xl pl-3 h-[2rem]"
            placeholder="Image URL (clicked so not pixelated)"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="videourl">Video URL</label>
          <input
            id="videourl"
            name="videourl"
            type="url"
            required
            className="text-black text-xl pl-3 h-[2rem]"
            placeholder="YouTube video URL"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            className="text-black text-xl pl-3 h-[2rem]"
            style={{ display: "block", width: "100%" }}
            required
          >
            <option value="">Select a category</option>
            <option value="Brand Film">Branded and Corporate</option>
            <option value="vertical">Vertical</option>
            <option value="Docummentary">Documentary</option>
            <option value="Music Video">Music Video</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-10 text-2xl border-2 w-full"
          style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
