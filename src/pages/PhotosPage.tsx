import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, Tag, X, ChevronLeft, ChevronRight, ArrowLeft, Eye, Heart, Share2, Download, MapPin, Clock, Users } from 'lucide-react';
import { photos, photoCategories, Photo } from '../data/photos';

const PhotosPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [likedPhotos, setLikedPhotos] = useState<Set<string>>(new Set());

  const filteredPhotos = useMemo(() => {
    let filtered = photos.filter((photo) => {
      const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           photo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           photo.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    if (selectedEvent) {
      filtered = filtered.filter(photo => 
        photo.title.toLowerCase().includes(selectedEvent.toLowerCase()) ||
        photo.tags.some(tag => tag.toLowerCase().includes(selectedEvent.toLowerCase()))
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedEvent]);

  const eventGroups = useMemo(() => {
    const groups: Record<string, Photo[]> = {};
    
    photos.forEach(photo => {
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

  const toggleLike = (photoId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPhotos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(photoId)) {
        newSet.delete(photoId);
      } else {
        newSet.add(photoId);
      }
      return newSet;
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'events':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
      case 'workshops':
        return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'competitions':
        return 'bg-gradient-to-r from-red-500 to-pink-500 text-white';
      case 'team':
        return 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'events':
        return Calendar;
      case 'workshops':
        return Users;
      case 'competitions':
        return Trophy;
      case 'team':
        return Heart;
      default:
        return Tag;
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

  const Trophy = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent blur-3xl"></div>
          <div className="relative">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl mb-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              <svg className="h-10 w-10 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 tracking-tight">
              Photo Gallery
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6 shadow-lg"></div>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Capturing moments of excellence, innovation, and community spirit
            </p>
            <div className="flex justify-center mt-8 space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{photos.length}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Total Photos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{Object.keys(eventGroups).length}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">{Object.keys(photoCategories).length}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Categories</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Event Filter Banner */}
        {selectedEvent && (
          <div className="mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
            <div className="relative p-8 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 shadow-xl">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Viewing: {selectedEvent}</h2>
                    <p className="text-white/80">Explore all photos from this event</p>
                  </div>
                </div>
                <button
                  onClick={clearEventFilter}
                  className="flex items-center space-x-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl px-6 py-3 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span className="font-medium">Back to Gallery</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Search and Filters */}
        {!selectedEvent && (
          <div className="mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-blue-50/80 to-indigo-50/80 dark:from-gray-800/80 dark:via-gray-700/80 dark:to-gray-600/80 backdrop-blur-xl rounded-3xl shadow-2xl"></div>
            <div className="relative p-8">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Enhanced Search */}
                <div className="flex-1 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative">
                    <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6 group-hover:text-indigo-500 transition-colors duration-300" />
                    <input
                      type="text"
                      placeholder="Search photos by title, description, or tags..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-14 pr-6 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white/90 dark:bg-gray-700/90 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 text-lg"
                    />
                  </div>
                </div>

                {/* Enhanced Category Filter */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="appearance-none bg-white/90 dark:bg-gray-700/90 border-2 border-gray-200 dark:border-gray-600 rounded-2xl px-6 py-4 pr-12 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 text-gray-900 dark:text-white transition-all duration-300 text-lg min-w-[200px]"
                    >
                      <option value="all">All Categories</option>
                      {Object.entries(photoCategories).map(([key, label]) => (
                        <option key={key} value={key}>{label}</option>
                      ))}
                    </select>
                    <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6 pointer-events-none group-hover:text-purple-500 transition-colors duration-300" />
                  </div>
                </div>

                {/* View Mode Toggle */}
                <div className="flex border-2 border-gray-200 dark:border-gray-600 rounded-2xl overflow-hidden bg-white/90 dark:bg-gray-700/90">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-6 py-4 transition-all duration-300 ${viewMode === 'grid' 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('masonry')}
                    className={`px-6 py-4 transition-all duration-300 ${viewMode === 'masonry' 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Enhanced Results Count */}
              <div className="mt-6 flex items-center justify-between">
                <div className="text-gray-600 dark:text-gray-400">
                  <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{filteredPhotos.length}</span>
                  <span className="ml-2">photo{filteredPhotos.length !== 1 ? 's' : ''} found</span>
                  {searchTerm && <span className="ml-2 text-gray-500">for "{searchTerm}"</span>}
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Eye className="h-4 w-4" />
                  <span>Click any photo to view in full size</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Event Groups */}
        {!selectedEvent && !searchTerm && selectedCategory === 'all' && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Browse by Events
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">Discover our journey through memorable moments</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {Object.entries(eventGroups).map(([eventName, eventPhotos], index) => (
                <button
                  key={eventName}
                  onClick={() => selectEvent(eventName)}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-700 transform hover:scale-105 hover:-translate-y-4"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.8s ease-out forwards'
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={eventPhotos[0].imageUrl}
                      alt={eventName}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                      {eventPhotos.length} photos
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-yellow-200 transition-all duration-300">
                        {eventName}
                      </h3>
                      <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        Click to explore this event
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced Photos Grid */}
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-20">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-gray-600/20 rounded-full blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full p-8 w-32 h-32 mx-auto flex items-center justify-center">
                <svg className="h-16 w-16 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              No photos found
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedEvent(null);
              }}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className={`${viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' 
            : 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8'
          }`}>
            {filteredPhotos.map((photo, index) => {
              const CategoryIcon = getCategoryIcon(photo.category);
              return (
                <div
                  key={photo.id}
                  className={`group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                    viewMode === 'masonry' ? 'break-inside-avoid mb-8' : ''
                  }`}
                  onClick={() => openLightbox(photo)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className={`${viewMode === 'grid' ? 'aspect-square' : 'aspect-[4/3]'} overflow-hidden relative`}>
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Enhanced Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <button
                        onClick={(e) => toggleLike(photo.id, e)}
                        className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 ${
                          likedPhotos.has(photo.id) 
                            ? 'bg-red-500 text-white shadow-lg' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        <Heart className={`h-5 w-5 ${likedPhotos.has(photo.id) ? 'fill-current' : ''}`} />
                      </button>
                      <button className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all duration-300 transform hover:scale-110">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className={`flex items-center space-x-2 px-3 py-2 rounded-full backdrop-blur-sm ${getCategoryColor(photo.category)} shadow-lg`}>
                        <CategoryIcon className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          {photoCategories[photo.category as keyof typeof photoCategories]}
                        </span>
                      </div>
                    </div>

                    {/* Enhanced Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-yellow-200 transition-all duration-300">
                        {photo.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                        {photo.description}
                      </p>
                      
                      <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        <div className="flex items-center space-x-2 text-xs text-white/70">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(photo.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span className="text-sm">View</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Card Footer */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                        {photo.title}
                      </h3>
                      <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                        <Clock className="h-3 w-3" />
                        <span>{new Date(photo.date).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {photo.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {photo.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-3 py-1 text-xs bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full transition-all duration-300 hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-900/30 dark:hover:to-purple-900/30 hover:text-indigo-700 dark:hover:text-indigo-300 transform hover:scale-105"
                          style={{
                            animationDelay: `${tagIndex * 100}ms`,
                            animation: 'fadeInUp 0.4s ease-out forwards'
                          }}
                        >
                          <Tag className="h-2 w-2 mr-1" />
                          {tag}
                        </span>
                      ))}
                      {photo.tags.length > 3 && (
                        <span className="px-3 py-1 text-xs bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-500 dark:text-gray-400 rounded-full">
                          +{photo.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Enhanced Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn">
            <div className="relative max-w-7xl max-h-full w-full">
              {/* Enhanced Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-20 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-90 shadow-2xl"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Enhanced Navigation Buttons */}
              {filteredPhotos.length > 1 && (
                <>
                  <button
                    onClick={() => navigatePhoto('prev')}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </button>
                  <button
                    onClick={() => navigatePhoto('next')}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </button>
                </>
              )}

              {/* Enhanced Image Container */}
              <div className="flex items-center justify-center h-full">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl animate-slideUp"
                />
              </div>

              {/* Enhanced Photo Info Panel */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8 text-white">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${getCategoryColor(selectedPhoto.category)} shadow-lg`}>
                          {React.createElement(getCategoryIcon(selectedPhoto.category), { className: "h-4 w-4" })}
                          <span className="text-sm font-medium">
                            {photoCategories[selectedPhoto.category as keyof typeof photoCategories]}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-white/70">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{new Date(selectedPhoto.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                        {selectedPhoto.title}
                      </h2>
                      <p className="text-gray-200 text-lg leading-relaxed mb-4">
                        {selectedPhoto.description}
                      </p>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center space-x-3 ml-6">
                      <button
                        onClick={(e) => toggleLike(selectedPhoto.id, e)}
                        className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 ${
                          likedPhotos.has(selectedPhoto.id) 
                            ? 'bg-red-500 text-white shadow-lg' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        <Heart className={`h-6 w-6 ${likedPhotos.has(selectedPhoto.id) ? 'fill-current' : ''}`} />
                      </button>
                      <button className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all duration-300 transform hover:scale-110">
                        <Share2 className="h-6 w-6" />
                      </button>
                      <button className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all duration-300 transform hover:scale-110">
                        <Download className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {selectedPhoto.tags.map((tag, index) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-4 py-2 text-sm bg-white/20 backdrop-blur-sm text-white rounded-full transition-all duration-300 hover:bg-white/30 transform hover:scale-105"
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animation: 'fadeInUp 0.4s ease-out forwards'
                        }}
                      >
                        <Tag className="h-3 w-3 mr-2" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Photo Counter */}
                  {filteredPhotos.length > 1 && (
                    <div className="text-center mt-6 text-white/70">
                      <span className="text-sm">
                        {currentPhotoIndex + 1} of {filteredPhotos.length}
                      </span>
                    </div>
                  )}
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