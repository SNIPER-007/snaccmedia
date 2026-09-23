import { useState, useEffect, useCallback } from 'react';
import { reviewService } from '../services/reviewService';

export function useReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReviews = useCallback(async () => {
    try {
      setLoading(true);
      const data = await reviewService.getReviews();
      setReviews(data);
      setError(null);
    } catch (err) {
      console.error("Error loading reviews:", err);
      setError("Failed to load reviews.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const addReview = async (reviewData) => {
    try {
      const created = await reviewService.addReview(reviewData);
      setReviews((prev) => [created, ...prev]);
      return created;
    } catch (err) {
      console.error("Add review error:", err);
      throw err;
    }
  };

  return {
    reviews,
    loading,
    error,
    addReview,
    refreshReviews: fetchReviews
  };
}
