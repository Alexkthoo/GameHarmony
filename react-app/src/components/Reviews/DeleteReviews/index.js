import React, { useState } from "react";
import { useModal } from "../../../context/Modal";
import { useDispatch } from "react-redux";
import { deleteReviewThunk } from "../../../store/review";

function DeleteReview() {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const [isDeleted, setIsDeleted] = useState(true);
  const [reviewIdToDelete, setReviewIdToDelete] = useState(null);

  const handleDelete = async () => {
    try {
      if (reviewIdToDelete) {
        await dispatch(deleteReviewThunk(reviewIdToDelete));
        setIsDeleted(false);
        closeModal();
      }
    } catch (error) {
      console.error("Error deleting review:", error);
  
    }
  };

  return <></>;
}

export default DeleteReview;
