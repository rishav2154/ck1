import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, Users, Award, ArrowRight, Play, Star, Trophy, Target, Zap, CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Expert-Led Courses',
      description: 'Learn from industry professionals with years of cybersecurity experience.'
    },
    {
      icon: Users,
      title: 'Interactive Learning',
      description: 'Engage with hands-on projects and real-world scenarios.'
    },
    {
      icon: Award,
      title: 'Certification Ready',
      description: 'Prepare for industry certifications with our comprehensive curriculum.'
    }
  ];
  const achievements = [
    {
      title: 'Best Cybersecurity Club 2024',
      description: 'Awarded by TIPS for outstanding contribution to cybersecurity education',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'National CTF Champions',
      description: 'First place in National Capture The Flag competition',
      icon: Target,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Community Impact Award',
      description: 'Recognized for cybersecurity awareness programs in local schools',
      icon: Users,
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Innovation Excellence',
      description: 'Outstanding research in threat intelligence and security solutions',
      icon: Zap,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const departments = [
    {
      title: 'Network Security & Ethical Hacking',
      description: 'Advanced penetration testing, vulnerability assessment, and ethical hacking techniques',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      highlights: ['Penetration Testing', 'Vulnerability Assessment', 'Security Auditing']
    },
    {
      title: 'Cyber Awareness & Outreach',
      description: 'Community education programs and cybersecurity awareness initiatives',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      highlights: ['NGO School Programs', 'Community Workshops', 'Awareness Campaigns']
    },
    {
      title: 'Research & Threat Intelligence',
      description: 'Cutting-edge research in emerging threats and security technologies',
      icon: Target,
      color: 'from-purple-500 to-indigo-500',
      highlights: ['Threat Analysis', 'Security Research', 'Intelligence Gathering']
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative animate-bounce">
                <Shield className="h-20 w-20 text-blue-400 animate-pulse" />
                <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-2xl animate-ping"></div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                Cyber Knight
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              The official Cybersecurity and Networking Club of TIPS - Where defenders are made and digital battles are won.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/courses"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Cyber Knight Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZG90cyIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RvdHMpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fadeInUp">
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Cyber Knight
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8 animate-fadeInLeft">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-200/50 dark:border-blue-800/50">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3 animate-pulse" />
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  <strong className="text-blue-600 dark:text-blue-400">To defend and recover in the digital age.</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Cyber Knight is the official Cybersecurity and Networking Club of TIPS, founded by vigilant CS and IT students. 
                  We don't just study cybersecurity—we live it through hands-on defense simulations, recovery drills, and real-world applications.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Target className="h-8 w-8 mr-3 animate-spin" style={{ animationDuration: '8s' }} />
                  Our Impact
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 animate-pulse">100+</div>
                    <div className="text-blue-100">Students Mentored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 animate-pulse" style={{ animationDelay: '0.2s' }}>15+</div>
                    <div className="text-blue-100">NGO Schools</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 animate-pulse" style={{ animationDelay: '0.4s' }}>50+</div>
                    <div className="text-blue-100">Security Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 animate-pulse" style={{ animationDelay: '0.6s' }}>25+</div>
                    <div className="text-blue-100">Workshops</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-fadeInRight">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-200/50 dark:border-purple-800/50">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Users className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3 animate-bounce" />
                  Our Vision
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  We shape digital futures with skill, integrity, and impact. From mentoring young students and conducting 
                  awareness sessions at NGO schools to guiding aspiring ethical hackers, our members are committed to 
                  building a safer digital world.
                </p>
                <div className="text-center">
                  <p className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    "Where defenders are made—and digital battles are won."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: CheckCircle, text: 'Hands-on Defense Simulations', color: 'text-green-500' },
                  { icon: CheckCircle, text: 'Real-world Security Applications', color: 'text-blue-500' },
                  { icon: CheckCircle, text: 'Community Outreach Programs', color: 'text-purple-500' },
                  { icon: CheckCircle, text: 'Industry-Standard Training', color: 'text-orange-500' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    <item.icon className={`h-6 w-6 ${item.color} animate-pulse`} />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Departments Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Our Specialized Departments
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${dept.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <dept.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                      {dept.title}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {dept.description}
                    </p>
                    
                    <div className="space-y-2">
                      {dept.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${dept.color} rounded-full animate-pulse`} style={{ animationDelay: `${idx * 200}ms` }}></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Recognition and milestones that showcase our commitment to excellence in cybersecurity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Cyber Knight?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our platform is designed to provide you with the best learning experience 
              in cybersecurity education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-3 w-fit mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Our Course Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive training modules designed for cybersecurity professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Networking Tutorials',
                description: 'Master network fundamentals, security protocols, and troubleshooting techniques.',
                image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
                courses: '8 Courses',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Designing Skills',
                description: 'Learn UI/UX design principles for security applications and dashboards.',
                image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
                courses: '6 Courses',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Document Formatting',
                description: 'Create professional reports, documentation, and technical writing.',
                image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
                courses: '5 Courses',
                gradient: 'from-green-500 to-emerald-500'
              }
            ].map((category, index) => (
              <Link
                key={index}
                to="/courses"
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300"></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-4 w-4 text-yellow-400 animate-pulse" />
                    <span className="text-sm text-white/80">{category.courses}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-yellow-200 transition-all duration-300">
                    {category.title}
                  </h3>
                  <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              View All Courses
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fadeInUp">
            Ready to Start Your Cybersecurity Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Join the defenders at Cyber Knight and help build a safer digital world
          </p>
          <Link
            to="/courses"
            className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;