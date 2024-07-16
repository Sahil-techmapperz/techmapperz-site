'use client'
import { useEffect, useState } from 'react';

const QueryDelayedForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Check localStorage to see if form has been submitted
    const isSubmitted = localStorage.getItem('formSubmitted');
    if (!isSubmitted) {
      // Show form after 20 seconds
      const timer = setTimeout(() => setShowForm(true), 20000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  const handleCloseForm = () => {
    setShowForm(false);
    // Set timeout to show the form again after 20 seconds
    const timer = setTimeout(() => setShowForm(true), 20000);
    return () => clearTimeout(timer);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // Mark form as submitted
    setFormSubmitted(true);
    localStorage.setItem('formSubmitted', 'true');
    setShowForm(false);
  };

  return (
    <>
      {showForm && !formSubmitted && (
        <div className="fixed z-50 inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl mb-4">Subscribe to our newsletter</h2>
            <form onSubmit={handleSubmitForm}>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" required className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={handleCloseForm} className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2">Close</button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default QueryDelayedForm;
