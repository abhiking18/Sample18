import React, { useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Bed,
  Bath,
  Maximize2,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { Property, VisitBooking } from '../types';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onToggleWishlist: (propertyId: string) => void;
  isWishlisted: boolean;
  onOpenContactForProperty: (propertyName: string) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onToggleWishlist,
  isWishlisted,
  onOpenContactForProperty,
}) => {
  if (!property) return null;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<VisitBooking | null>(null);

  // Schedule visit form state
  const [scheduleData, setScheduleData] = useState({
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    timeSlot: 'Morning (10:30 AM)',
    tourType: 'in-person' as 'in-person' | 'virtual',
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.gallery.length - 1 : prev - 1
    );
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scheduleData.fullName || !scheduleData.email || !scheduleData.phone) return;

    const newBooking: VisitBooking = {
      propertyId: property.id,
      propertyName: property.name,
      date: scheduleData.date,
      timeSlot: scheduleData.timeSlot,
      tourType: scheduleData.tourType,
      fullName: scheduleData.fullName,
      email: scheduleData.email,
      phone: scheduleData.phone,
      notes: scheduleData.notes,
      bookingRef: `VISIT-${Math.floor(10000 + Math.random() * 90000)}`,
    };

    setBookingConfirmed(newBooking);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Tarex Estates, I am interested in scheduling a private architectural viewing for ${property.name} (${property.location}, ${property.formattedPrice}).`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl bg-[#F7F5EF] rounded-3xl shadow-2xl overflow-hidden border border-[#183B32]/10 my-auto">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#183B32]/10 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase font-semibold tracking-widest px-2.5 py-1 rounded-full bg-[#E5EBE1] text-[#183B32]">
              {property.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#252A27]/60">
              <MapPin className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>{property.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleWishlist(property.id)}
              className="p-2 rounded-full hover:bg-[#E5EBE1] text-[#183B32] transition-colors cursor-pointer"
              title="Toggle Wishlist"
            >
              <Heart
                className={`w-5 h-5 ${
                  isWishlisted ? 'fill-[#C6A66B] text-[#C6A66B]' : ''
                }`}
              />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#E5EBE1] text-[#183B32] transition-colors cursor-pointer"
              title="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-8 space-y-10">
          {/* Main Gallery Carousel with Controls */}
          <div className="relative aspect-16/9 sm:aspect-16/10 rounded-2xl overflow-hidden bg-black/5 group shadow-inner">
            <img
              src={property.gallery[currentImageIndex]}
              alt={`${property.name} view ${currentImageIndex + 1}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-500"
            />

            {/* Gallery Navigation Buttons */}
            {property.gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#183B32] flex items-center justify-center hover:bg-white shadow-md transition-all cursor-pointer opacity-90 hover:opacity-100"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#183B32] flex items-center justify-center hover:bg-white shadow-md transition-all cursor-pointer opacity-90 hover:opacity-100"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Photo Counter */}
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full tabular-nums">
              {currentImageIndex + 1} / {property.gallery.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          {property.gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {property.gallery.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 transition-all cursor-pointer ${
                    currentImageIndex === idx
                      ? 'ring-2 ring-[#183B32] ring-offset-2 scale-105'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={thumb}
                    alt="thumbnail"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Title, Price and Key Stats */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#183B32]/10">
            <div>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#183B32]">
                {property.name}
              </h2>
              <p className="text-sm sm:text-base text-[#252A27]/75 mt-1">
                {property.tagline}
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs uppercase tracking-wider text-[#252A27]/50 block">
                Guide Price
              </span>
              <span className="text-3xl sm:text-4xl font-editorial font-semibold text-[#183B32] tabular-nums">
                {property.formattedPrice}
              </span>
            </div>
          </div>

          {/* Architectural Specs Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-white border border-[#183B32]/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E5EBE1] flex items-center justify-center text-[#183B32]">
                <Bed className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#252A27]/60 block">
                  Bedrooms
                </span>
                <span className="text-sm font-semibold text-[#183B32] tabular-nums">
                  {property.bedrooms > 0 ? `${property.bedrooms} Suites` : 'Commercial Studio'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E5EBE1] flex items-center justify-center text-[#183B32]">
                <Bath className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#252A27]/60 block">
                  Bathrooms
                </span>
                <span className="text-sm font-semibold text-[#183B32] tabular-nums">
                  {property.bathrooms} Baths
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E5EBE1] flex items-center justify-center text-[#183B32]">
                <Maximize2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#252A27]/60 block">
                  Internal Area
                </span>
                <span className="text-sm font-semibold text-[#183B32] tabular-nums">
                  {property.areaSqFt.toLocaleString()} sq ft
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E5EBE1] flex items-center justify-center text-[#183B32]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#252A27]/60 block">
                  Year Completed
                </span>
                <span className="text-sm font-semibold text-[#183B32] tabular-nums">
                  {property.yearBuilt}
                </span>
              </div>
            </div>
          </div>

          {/* Description & Architectural Notes */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-4">
              <h3 className="font-editorial text-2xl text-[#183B32]">The Residence</h3>
              <p className="text-sm sm:text-base text-[#252A27]/80 leading-relaxed font-normal">
                {property.description}
              </p>

              <div className="pt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C6A66B] mb-2">
                  Architectural Provenance & Materials
                </h4>
                <p className="text-xs sm:text-sm text-[#252A27]/75 leading-relaxed bg-[#E5EBE1]/50 p-4 rounded-xl border border-[#183B32]/10">
                  {property.architecturalNotes}
                </p>
              </div>
            </div>

            {/* Curated Amenities List */}
            <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-[#183B32]/10 space-y-4">
              <h3 className="font-editorial text-xl text-[#183B32] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C6A66B]" />
                Amenities & Features
              </h3>
              <ul className="space-y-2.5">
                {property.amenities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#252A27]/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#183B32] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Callouts: Schedule Visit vs Contact Agent */}
          <div className="bg-[#183B32] text-white p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C6A66B] font-semibold block mb-1">
                Private Advisory
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl">
                Experience {property.name} firsthand.
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F5EF]/75 mt-1">
                Arrange a confidential viewing with our partner advisor.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => setShowScheduleForm(!showScheduleForm)}
                className="px-6 py-3.5 rounded-full bg-[#C6A66B] text-[#183B32] text-xs font-semibold uppercase tracking-wider hover:bg-white transition-all cursor-pointer"
              >
                {showScheduleForm ? 'Hide Booking Form' : 'Schedule a Visit'}
              </button>

              <a
                href={`https://wa.me/33612345678?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full border border-white/30 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/10 flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C6A66B]" />
                <span>Contact Agent</span>
              </a>
            </div>
          </div>

          {/* Interactive Schedule Visit Form */}
          {showScheduleForm && (
            <div className="bg-white p-8 rounded-3xl border border-[#183B32]/15 shadow-md animate-in fade-in slide-in-from-top-4 duration-300">
              {bookingConfirmed ? (
                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-[#E5EBE1] text-[#183B32] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#183B32]" />
                  </div>
                  <h4 className="font-editorial text-2xl text-[#183B32] mb-1">
                    Viewing Scheduled
                  </h4>
                  <p className="text-xs text-[#252A27]/70 max-w-md mx-auto mb-4">
                    Your {bookingConfirmed.tourType === 'in-person' ? 'in-person private viewing' : 'virtual 3D walkthrough'} for {property.name} on {bookingConfirmed.date} ({bookingConfirmed.timeSlot}) has been registered.
                  </p>
                  <div className="inline-block bg-[#F7F5EF] px-4 py-1.5 rounded-full text-xs font-mono text-[#183B32] tabular-nums mb-4">
                    Ref: {bookingConfirmed.bookingRef}
                  </div>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => {
                        setBookingConfirmed(null);
                        setShowScheduleForm(false);
                      }}
                      className="px-5 py-2.5 rounded-full bg-[#183B32] text-white text-xs font-medium uppercase tracking-wider"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[#183B32]/10 pb-4">
                    <div>
                      <h4 className="font-editorial text-2xl text-[#183B32]">
                        Private Tour Reservation
                      </h4>
                      <p className="text-xs text-[#252A27]/60">
                        Select your preferred date, format, and personal details.
                      </p>
                    </div>
                    <span className="text-xs text-[#C6A66B] font-semibold uppercase tracking-wider flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" />
                      Confidential
                    </span>
                  </div>

                  {/* Tour Type Toggle */}
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setScheduleData({ ...scheduleData, tourType: 'in-person' })}
                      className={`flex-1 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider border text-center transition-all cursor-pointer ${
                        scheduleData.tourType === 'in-person'
                          ? 'bg-[#183B32] text-white border-[#183B32]'
                          : 'bg-[#F7F5EF] text-[#252A27]/70 border-[#183B32]/10 hover:bg-[#E5EBE1]'
                      }`}
                    >
                      In-Person Private Viewing
                    </button>
                    <button
                      type="button"
                      onClick={() => setScheduleData({ ...scheduleData, tourType: 'virtual' })}
                      className={`flex-1 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider border text-center transition-all cursor-pointer ${
                        scheduleData.tourType === 'virtual'
                          ? 'bg-[#183B32] text-white border-[#183B32]'
                          : 'bg-[#F7F5EF] text-[#252A27]/70 border-[#183B32]/10 hover:bg-[#E5EBE1]'
                      }`}
                    >
                      High-Definition Virtual Walkthrough
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#183B32] mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={scheduleData.date}
                        onChange={(e) => setScheduleData({ ...scheduleData, date: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#183B32]/15 bg-[#F7F5EF]/60 text-sm focus:outline-none focus:border-[#183B32]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#183B32] mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={scheduleData.timeSlot}
                        onChange={(e) => setScheduleData({ ...scheduleData, timeSlot: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#183B32]/15 bg-[#F7F5EF]/60 text-sm focus:outline-none focus:border-[#183B32] cursor-pointer"
                      >
                        <option value="Morning (10:30 AM)">Morning (10:30 AM)</option>
                        <option value="Midday (1:30 PM)">Midday (1:30 PM)</option>
                        <option value="Golden Hour (5:00 PM)">Golden Hour (5:00 PM)</option>
                        <option value="Twilight Viewing (7:00 PM)">Twilight Viewing (7:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#183B32] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={scheduleData.fullName}
                        onChange={(e) => setScheduleData({ ...scheduleData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#183B32]/15 bg-[#F7F5EF]/60 text-sm focus:outline-none focus:border-[#183B32]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#183B32] mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 or +33..."
                        value={scheduleData.phone}
                        onChange={(e) => setScheduleData({ ...scheduleData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#183B32]/15 bg-[#F7F5EF]/60 text-sm focus:outline-none focus:border-[#183B32]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#183B32] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@luxury.com"
                        value={scheduleData.email}
                        onChange={(e) => setScheduleData({ ...scheduleData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#183B32]/15 bg-[#F7F5EF]/60 text-sm focus:outline-none focus:border-[#183B32]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#183B32] mb-1">
                      Special Viewing Requests or Helicopter / Chauffeur Coordination
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Helipad coordinates, NDA requirements, interior architect accompanying..."
                      value={scheduleData.notes}
                      onChange={(e) => setScheduleData({ ...scheduleData, notes: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-[#183B32]/15 bg-[#F7F5EF]/60 text-xs focus:outline-none focus:border-[#183B32]"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowScheduleForm(false)}
                      className="px-5 py-2.5 rounded-full border border-[#183B32]/20 text-xs font-semibold uppercase tracking-wider text-[#183B32] hover:bg-[#F7F5EF] cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-[#183B32] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#183B32]/90 cursor-pointer"
                    >
                      Confirm Reservation
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
