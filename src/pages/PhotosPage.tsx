import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, Tag, X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { photos, photoCategories, Photo } from '../data/photos';

const PhotosPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const filteredPhotos = useMemo(() => {
    let filtered = photos.filter((photo) => {
      const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           photo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           photo.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // If an event is selected, filter by event title
    if (selectedEvent) {
      filtered = filtered.filter(photo => 
        photo.title.toLowerCase().includes(selectedEvent.toLowerCase()) ||
        photo.tags.some(tag => tag.toLowerCase().includes(selectedEvent.toLowerCase()))
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedEvent]);

  // Group photos by event/title similarity for event view
  const eventGroups = useMemo(() => {
    const groups: Record<string, Photo[]> = {};
    
    photos.forEach(photo => {
      // Extract event name from title (before any descriptive text)
      const eventName = photo.title.split(' - ')[0] || photo.title;
      if (!groups[eventName]) {
        groups[eventName] = [];
      }
      groups[eventName].push(photo);
    });

    return groups;
  }, []);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(filteredPhotos.findIndex(p => p.id === photo.id));
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length
      : (currentPhotoIndex + 1) % filteredPhotos.length;
    
    setCurrentPhotoIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'events':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'workshops':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'competitions':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'team':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const selectEvent = (eventName: string) => {
    setSelectedEvent(eventName);
    setSearchTerm('');
    setSelectedCategory('all');
  };

  const clearEventFilter = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4 animate-pulse">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Photo Gallery
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore moments from our journey - events, workshops, competitions, and team activities
          </p>
        </div>

        {/* Event Filter Banner */}
        {selectedEvent && (
          <div className="mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 rounded-full p-2">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Viewing: {selectedEvent}</h2>
                  <p className="text-indigo-100">All photos from this event</p>
                </div>
              </div>
              <button
                onClick={clearEventFilter}
                className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to All Photos</span>
              </button>
            </div>
          </div>
        )}

        {/* Search and Filters */}
        {!selectedEvent && (
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6 mb-8 transform transition-all duration-300 hover:shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search photos by title, description, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/90 dark:bg-gray-700/90 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white/90 dark:bg-gray-700/90 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-300"
                >
                  <option value="all">All Categories</option>
                  {Object.entries(photoCategories).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Showing {filteredPhotos.length} photo{filteredPhotos.length !== 1 ? 's' : ''}
              {searchTerm && ` for "${searchTerm}"`}
            </div>
          </div>
        )}

        {/* Event Groups (when no specific event is selected) */}
        {!selectedEvent && !searchTerm && selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Browse by Events</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Object.entries(eventGroups).map(([eventName, eventPhotos]) => (
                <button
                  key={eventName}
                  onClick={() => selectEvent(eventName)}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={eventPhotos[0].imageUrl}
                      alt={eventName}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <h3 className="font-semibold text-lg mb-2">{eventName}</h3>
                        <p className="text-sm opacity-90">{eventPhotos.length} photos</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-1">
                      {eventName}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {eventPhotos.length} photo{eventPhotos.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Photos Grid */}
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <svg className="h-16 w-16 mx-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              No photos found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search terms or filters
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
                onClick={() => openLightbox(photo)}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="font-semibold text-lg mb-2">{photo.title}</h3>
                      <p className="text-sm opacity-90 line-clamp-2">{photo.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(photo.category)}`}>
                      {photoCategories[photo.category as keyof typeof photoCategories]}
                    </span>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(photo.date).toLocaleDateString()}
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {photo.title}
                  </h3>

                  <div className="flex flex-wrap gap-1">
                    {photo.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
                      >
                        <Tag className="h-2 w-2 mr-1" />
                        {tag}
                      </span>
                    ))}
                    {photo.tags.length > 2 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md">
                        +{photo.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
            <div className="relative max-w-6xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              {filteredPhotos.length > 1 && (
                <>
                  <button
                    onClick={() => navigatePhoto('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => navigatePhoto('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Image */}
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-slideUp"
              />

              {/* Photo Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(selectedPhoto.category)} text-white bg-white/20`}>
                    {photoCategories[selectedPhoto.category as keyof typeof photoCategories]}
                  </span>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(selectedPhoto.date).toLocaleDateString()}
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h2>
                <p className="text-gray-200 mb-3">{selectedPhoto.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedPhoto.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 text-xs bg-white/20 text-white rounded-md"
                    >
                      <Tag className="h-2 w-2 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotosPage;