import React, { useState } from 'react';
import { Star, MessageSquarePlus, X } from 'lucide-react';
import { TESTIMONIALS } from '../data/menuData';

export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState(TESTIMONIALS);
  const [modalOpen, setModalOpen] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [authorRole, setAuthorRole] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) return;

    const newReview = {
      name: authorName.trim(),
      role: authorRole.trim() || 'Food Lover, Anantapur',
      avatar: authorName.trim().charAt(0).toUpperCase(),
      rating,
      text: `"${reviewText.trim()}"`,
    };

    setReviews([newReview, ...reviews]);
    setAuthorName('');
    setAuthorRole('');
    setReviewText('');
    setModalOpen(false);
    setFeedbackSuccess(true);
    setTimeout(() => setFeedbackSuccess(false), 3500);
  };

  return (
    <section className="py-20" id="reviews">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#8d4b00] uppercase tracking-wider">
              Word of Mouth
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#1d1c17] mt-1.5 tracking-tight">
              Loved by Foodies in Anantapur
            </h2>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#8d4b00] text-[#8d4b00] hover:bg-[#ffdcc3]/30 text-xs font-bold transition-colors self-start sm:self-auto cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Share Your Review</span>
          </button>
        </div>

        {feedbackSuccess && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-between">
            <span>Thank you for sharing your love for Waffle Maker! Your review is now live.</span>
            <button onClick={() => setFeedbackSuccess(false)}>
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="tactile-card bg-white p-6 sm:p-7 rounded-3xl flex flex-col justify-between border border-[#f2ede5]"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3.5">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-[#1d1c17] leading-relaxed italic">
                  {rev.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f2ede5] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ffdcc3] flex items-center justify-center font-bold text-[#8d4b00] text-sm shrink-0">
                  {rev.avatar}
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#1d1c17]">{rev.name}</p>
                  <p className="text-[11px] text-[#554336]">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-[#f2ede5] animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[#f2ede5]">
              <h3 className="font-headline text-lg font-bold text-[#1d1c17]">Share Your Review</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-full text-[#77574a] hover:bg-[#f2ede5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="mt-4 flex flex-col gap-4">
              <div>
                <label className="text-xs font-bold text-[#554336] block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sravani Rao"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#dbc2b0] text-sm text-[#1d1c17] focus:outline-none focus:border-[#8d4b00]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#554336] block mb-1">Location or Note</label>
                <input
                  type="text"
                  placeholder="e.g. Papampeta Resident / Food Enthusiast"
                  value={authorRole}
                  onChange={(e) => setAuthorRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#dbc2b0] text-sm text-[#1d1c17] focus:outline-none focus:border-[#8d4b00]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#554336] block mb-1">Rating</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setRating(num)}
                      className="p-1 cursor-pointer"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          num <= rating
                            ? 'fill-amber-500 text-amber-500'
                            : 'text-[#dbc2b0]'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#554336] block mb-1">Your Feedback</label>
                <textarea
                  required
                  rows={3}
                  placeholder="What was your favorite waffle or loaded fries?"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#dbc2b0] text-sm text-[#1d1c17] focus:outline-none focus:border-[#8d4b00]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2.5 rounded-full border border-[#dbc2b0] text-[#554336] text-xs font-bold hover:bg-[#f2ede5]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#8d4b00] hover:bg-[#6e3900] text-white text-xs font-bold shadow-sm"
                >
                  Post Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
