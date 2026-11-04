import React from 'react';
import { X, Trash2, ArrowUpRight, Bed, Bath, Sparkles } from 'lucide-react';
import { Property } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProperties: Property[];
  onRemoveFromWishlist: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  onInquireAll: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProperties,
  onRemoveFromWishlist,
  onSelectProperty,
  onInquireAll,
}) => {
  if (!isOpen) return null;

  const totalValue = wishlistProperties.reduce((acc, curr) => acc + curr.price, 0);

  const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(totalValue);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-300">
      <div className="w-full max-w-md bg-[#F7F5EF] h-full shadow-2xl flex flex-col justify-between border-l border-[#183B32]/10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-6 bg-white border-b border-[#183B32]/10 flex items-center justify-between">
          <div>
            <h3 className="font-editorial text-2xl text-[#183B32]">Saved Residences</h3>
            <span className="text-xs text-[#252A27]/60 tabular-nums">
              {wishlistProperties.length} {wishlistProperties.length === 1 ? 'estate' : 'estates'} selected
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#E5EBE1] text-[#183B32] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Saved List Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlistProperties.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#252A27]/60">
              <div className="w-16 h-16 rounded-full bg-[#E5EBE1] flex items-center justify-center mb-4 text-[#183B32]">
                <Sparkles className="w-8 h-8 text-[#C6A66B]" />
              </div>
              <h4 className="font-editorial text-2xl text-[#183B32] mb-1">
                Your wishlist is empty
              </h4>
              <p className="text-xs text-[#252A27]/70 max-w-xs mb-6">
                Explore our collection and click the heart icon on any estate to bookmark it for comparison or private inquiry.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#183B32] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Browse Collection
              </button>
            </div>
          ) : (
            wishlistProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-white rounded-2xl p-4 border border-[#183B32]/10 shadow-xs flex gap-4 items-center group"
              >
                {/* Circular thumbnail accent */}
                <div
                  onClick={() => {
                    onSelectProperty(prop);
                    onClose();
                  }}
                  className="w-16 h-16 rounded-full overflow-hidden shrink-0 cursor-pointer p-0.5 border border-[#183B32]/20"
                >
                  <img
                    src={prop.primaryImage}
                    alt={prop.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h5
                    onClick={() => {
                      onSelectProperty(prop);
                      onClose();
                    }}
                    className="font-editorial text-lg text-[#183B32] truncate cursor-pointer hover:text-[#C6A66B]"
                  >
                    {prop.name}
                  </h5>
                  <span className="text-[11px] text-[#252A27]/60 block truncate">
                    {prop.location}
                  </span>
                  <div className="text-xs font-medium text-[#183B32] mt-1 tabular-nums">
                    {prop.formattedPrice}
                  </div>
                </div>

                <button
                  onClick={() => onRemoveFromWishlist(prop.id)}
                  aria-label="Remove estate from wishlist"
                  className="p-2 text-[#252A27]/40 hover:text-red-600 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer with Portfolio Summary & Inquire CTA */}
        {wishlistProperties.length > 0 && (
          <div className="p-6 bg-white border-t border-[#183B32]/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-[#252A27]/60">
                Portfolio Valuation
              </span>
              <span className="text-xl font-editorial font-semibold text-[#183B32] tabular-nums">
                {formattedTotal}
              </span>
            </div>

            <button
              onClick={() => {
                onInquireAll();
                onClose();
              }}
              className="w-full py-3.5 rounded-full bg-[#183B32] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#183B32]/90 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>Inquire Saved Portfolio</span>
              <ArrowUpRight className="w-4 h-4 text-[#C6A66B]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
