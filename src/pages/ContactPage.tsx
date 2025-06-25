import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Instagram, Linkedin, MessageCircle, Hash, Users, Shield, Target, Zap, Heart, Star, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'cyberknight@tips.edu.pk',
      description: 'Send us an email anytime',
      color: 'from-blue-500 to-cyan-500',
      action: 'mailto:cyberknight@tips.edu.pk'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+92 (321) 456-7890',
      description: 'Mon-Fri from 9am to 5pm',
      color: 'from-green-500 to-emerald-500',
      action: 'tel:+923214567890'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'TIPS Campus, Karachi, Pakistan',
      description: 'Our main campus location',
      color: 'from-purple-500 to-pink-500',
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      info: 'Mon-Fri: 9AM-5PM',
      description: 'Always here to help',
      color: 'from-orange-500 to-red-500',
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@cyberknight_tips',
      url: 'https://instagram.com/cyberknight_tips',
      color: 'from-pink-500 to-purple-500',
      description: 'Follow our latest updates and behind-the-scenes content',
      followers: '2.5K'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'Cyber Knight TIPS',
      url: 'https://linkedin.com/company/cyberknight-tips',
      color: 'from-blue-600 to-blue-700',
      description: 'Connect with us professionally and see our achievements',
      followers: '1.8K'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp Group',
      handle: 'Join Community',
      url: 'https://chat.whatsapp.com/cyberknight-tips-community',
      color: 'from-green-500 to-green-600',
      description: 'Join our active community for discussions and updates',
      followers: '500+'
    },
    {
      icon: Hash,
      name: 'Discord Server',
      handle: 'Cyber Knight Hub',
      url: 'https://discord.gg/cyberknight-tips',
      color: 'from-indigo-500 to-purple-600',
      description: 'Real-time chat, study groups, and collaborative learning',
      followers: '750+'
    }
  ];

  const faqs = [
    {
      question: 'How can I join Cyber Knight?',
      answer: 'You can join by attending our orientation sessions or contacting us directly. We welcome all TIPS students interested in cybersecurity.'
    },
    {
      question: 'Are the courses free for members?',
      answer: 'Yes! All courses and workshops are completely free for Cyber Knight members. We believe in accessible cybersecurity education.'
    },
    {
      question: 'Do you offer certifications?',
      answer: 'Yes, we provide certificates of completion for all courses and special recognition for outstanding performance in competitions.'
    },
    {
      question: 'Can I contribute to the club activities?',
      answer: 'Absolutely! We encourage members to lead workshops, contribute to research projects, and participate in community outreach programs.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300/20 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-300/20 rounded-full blur-md animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8 animate-pulse">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            Get in{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
              Touch
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Ready to join the defenders? Have questions about our programs? 
            We're here to help you start your cybersecurity journey and build a safer digital world together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Zap className="h-4 w-4 text-yellow-300" />
              <span className="text-white text-sm">Quick Response</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Heart className="h-4 w-4 text-pink-300" />
              <span className="text-white text-sm">Community Driven</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="h-4 w-4 text-yellow-300" />
              <span className="text-white text-sm">Expert Guidance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`bg-gradient-to-r ${item.color} rounded-xl p-3 w-fit mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1 text-center">
                    {item.info}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
                    {item.description}
                  </p>
                  {item.action && (
                    <a
                      href={item.action}
                      target={item.action.startsWith('http') ? '_blank' : '_self'}
                      rel={item.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      className={`block w-full text-center bg-gradient-to-r ${item.color} text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
                    >
                      Contact Now
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Connect with Our Community
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Join our vibrant community across multiple platforms and stay updated with the latest in cybersecurity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                      <social.icon className="h-7 w-7 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                          {social.name}
                        </h3>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {social.followers}
                        </span>
                      </div>
                      
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">
                        {social.handle}
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {social.description}
                      </p>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Quick answers to common questions about Cyber Knight
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 pl-5 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Still have questions? We're here to help!
            </p>
            <a
              href="mailto:cyberknight@tips.edu.pk"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Contact Us Directly
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;