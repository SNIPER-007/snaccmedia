import { initialReviews } from '../data/reviews';

const STORAGE_KEY = 'snacc_media_user_reviews_v1';

/**
 * Review Data Service
 * Currently backs reviews with LocalStorage + Real Seed Data.
 * Formatted with async Promises so it can be swapped to Firebase Firestore in the future.
 */
export const reviewService = {
  /**
   * Fetch all reviews (initial seed + local user submissions)
   */
  async getReviews() {
    // Simulate slight async network delay like Firestore query
    await new Promise((res) => setTimeout(res, 80));

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const userReviews = stored ? JSON.parse(stored) : [];

      // Combine seed reviews + user reviews (user reviews take priority at the top)
      const combined = [...userReviews, ...initialReviews];
      return combined;
    } catch (err) {
      console.error("Failed to load local reviews:", err);
      return initialReviews;
    }
  },

  /**
   * Submit a new review
   */
  async addReview(newReview) {
    await new Promise((res) => setTimeout(res, 200));

    const reviewObj = {
      id: `user-rev-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      name: newReview.name.trim(),
      role: newReview.role ? newReview.role.trim() : "Client",
      company: newReview.company ? newReview.company.trim() : "",
      rating: Number(newReview.rating) || 5,
      review: newReview.review.trim(),
      avatarUrl: newReview.avatarUrl ? newReview.avatarUrl.trim() : null,
      featured: false,
      isApproved: true,
      createdAt: new Date().toISOString()
    };

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const userReviews = stored ? JSON.parse(stored) : [];
      const updated = [reviewObj, ...userReviews];

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return reviewObj;
    } catch (err) {
      console.error("Failed to save review to LocalStorage:", err);
      throw new Error("Could not save review locally.");
    }
  },

  /**
   * Delete a user-submitted review (admin feature preparation)
   */
  async deleteReview(id) {
    await new Promise((res) => setTimeout(res, 150));

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return false;

      const userReviews = JSON.parse(stored);
      const filtered = userReviews.filter((r) => r.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
      return true;
    } catch (err) {
      console.error("Failed to delete review:", err);
      return false;
    }
  }
};
