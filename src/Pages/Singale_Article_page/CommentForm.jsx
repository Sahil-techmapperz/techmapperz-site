import React, { useState } from "react";
import axios from "axios";
import "./SinglePost.css";
function CommentForm({ postId ,fetchPost}) {
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${process.env.REACT_APP_Backend_baseUrl}/comments`, {
        postId: postId,
       name: authorName,
       email: authorEmail,
       content:content
      });

      setAuthorName("");
      setAuthorEmail("");
      setContent("");
      setSuccessMessage(
        "Comment submitted successfully!"
      );
      setErrorMessage("");
      fetchPost();
    } catch (err) {
      setErrorMessage("Failed to submit comment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="CommentForm">
      <h3>Leave a Comment</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="authorName">Name</label>
          <input
            type="text"
            id="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="authorEmail">Email</label>
          <input
            type="email"
            id="authorEmail"
            value={authorEmail}
            onChange={(e) => setAuthorEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Comment</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default CommentForm;
