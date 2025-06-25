import React, { useEffect, useState } from 'react';
import { X, Clock, User, BookOpen, Download, CheckCircle, List, ExternalLink, Youtube } from 'lucide-react';
import { Course, PlaylistItem } from '../data/courses';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: Course;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, course }) => {
  const [currentVideo, setCurrentVideo] = useState<string>(course.videoUrl);
  const [currentVideoTitle, setCurrentVideoTitle] = useState<string>(course.title);
  const [completedVideos, setCompletedVideos] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const handleDownloadNotes = () => {
    const link = document.createElement('a');
    link.href = course.notesUrl;
    link.download = `${course.title.replace(/\s+/g, '-').toLowerCase()}-notes.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePlaylistItemClick = (item: PlaylistItem) => {
    setCurrentVideo(item.videoUrl);
    setCurrentVideoTitle(item.title);
  };

  const markVideoComplete = (videoId: string) => {
    setCompletedVideos(prev => new Set([...prev, videoId]));
  };

  const calculateProgress = () => {
    if (!course.playlist) return 0;
    return Math.round((completedVideos.size / course.playlist.length) * 100);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto animate-fadeIn">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative w-full max-w-7xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 animate-slideUp">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-gray-800/50 dark:to-gray-700/50">
            <div className="flex items-center space-x-3">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {currentVideoTitle}
              </h2>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${getLevelColor(course.level)} animate-pulse`}>
                {course.level}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 hover:rotate-90"
            >
              <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          <div className={`grid ${course.playlist ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 p-6`}>
            {/* Video Player */}
            <div className={`${course.playlist ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-[1.02]">
                <iframe
                  src={currentVideo}
                  title={currentVideoTitle}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>

              {/* Progress Bar */}
              {course.playlist && (
                <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Course Progress
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {calculateProgress()}% Complete ({completedVideos.size}/{course.playlist.length})
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${calculateProgress()}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Playlist Section - Always visible if playlist exists */}
              {course.playlist && (
                <div className="mt-6 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <List className="h-5 w-5 mr-2 text-blue-500" />
                    Course Playlist
                  </h3>
                  <div className="grid gap-3 max-h-96 overflow-y-auto">
                    {course.playlist.map((item, index) => (
                      <div
                        key={item.id}
                        onClick={() => handlePlaylistItemClick(item)}
                        className={`group p-3 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                          currentVideo === item.videoUrl
                            ? 'bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-300 dark:border-blue-600'
                            : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 flex items-center justify-center">
                            {completedVideos.has(item.id) ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                currentVideo === item.videoUrl
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                              }`}>
                                {index + 1}
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className={`text-sm font-medium mb-1 line-clamp-2 ${
                              currentVideo === item.videoUrl
                                ? 'text-blue-700 dark:text-blue-300'
                                : 'text-gray-900 dark:text-white'
                            }`}>
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 line-clamp-2">
                              {item.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {item.duration}
                              </span>
                              {!completedVideos.has(item.id) && currentVideo === item.videoUrl && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    markVideoComplete(item.id);
                                  }}
                                  className="text-xs bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded transition-colors duration-200"
                                >
                                  Mark Complete
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Course Info */}
            <div className={`${course.playlist ? 'lg:col-span-1' : 'space-y-6'}`}>
              {/* Instructor & Duration */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <User className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Instructor</p>
                    <p className="font-medium text-gray-900 dark:text-white">{course.instructor}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Clock className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                    <p className="font-medium text-gray-900 dark:text-white">{course.duration}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <BookOpen className="h-5 w-5 text-purple-500" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
                    <p className="font-medium text-gray-900 dark:text-white capitalize">{course.category}</p>
                  </div>
                </div>
              </div>

              {/* Credits Section */}
              {course.credits && (
                <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center space-x-3 mb-3">
                    <Youtube className="h-5 w-5 text-red-600 dark:text-red-400" />
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100">
                      Course Credits
                    </h4>
                  </div>
                  <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                    This course content is provided by <strong>{course.credits.channel}</strong>
                  </p>
                  {course.credits.originalTitle && (
                    <p className="text-xs text-orange-600 dark:text-orange-400 mb-3 italic">
                      Original: "{course.credits.originalTitle}"
                    </p>
                  )}
                  <a
                    href={course.credits.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Youtube className="h-4 w-4" />
                    <span>Visit Channel</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              )}

              {/* Description */}
              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-blue-200 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Course Description
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Topics Covered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-md"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: 'fadeInUp 0.5s ease-out forwards'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Notes Download */}
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center space-x-3 mb-3">
                  <Download className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <h4 className="font-semibold text-green-900 dark:text-green-100">
                    Course Notes Available
                  </h4>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                  Download comprehensive notes and reference materials for this course.
                </p>
                <button
                  onClick={handleDownloadNotes}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Download Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;