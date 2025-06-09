// Define scrollToTop function GLOBALLY (outside DOMContentLoaded)
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Toggle function for audience section
function showAudience(type) {
  const studentsBtn = document.getElementById('studentsBtn');
  const mentorsBtn = document.getElementById('mentorsBtn');
  const studentsContent = document.getElementById('studentsContent');
  const mentorsContent = document.getElementById('mentorsContent');

  if (type === 'students') {
    studentsBtn.classList.add('active');
    mentorsBtn.classList.remove('active');
    studentsContent.classList.add('active');
    mentorsContent.classList.remove('active');
  } else {
    mentorsBtn.classList.add('active');
    studentsBtn.classList.remove('active');
    mentorsContent.classList.add('active');
    studentsContent.classList.remove('active');
  }
}

// Toggle mobile menu function
function toggleMobileMenu() {
  const navLinks = document.getElementById("navLinks");
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  
  navLinks.classList.toggle("active");
  
  if (navLinks.classList.contains("active")) {
    menuToggle.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // FAQ Toggle
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isOpen = answer.style.maxHeight;
      document.querySelectorAll(".faq-answer").forEach((a) => (a.style.maxHeight = null));
      document.querySelectorAll(".faq-question").forEach((q) => q.classList.remove("active"));
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        question.classList.add("active");
      }
    });
  });

  // Carousel Scroll
  const carousel = document.getElementById("carousel");
  const scrollLeftBtn = document.getElementById("scrollLeft");
  const scrollRightBtn = document.getElementById("scrollRight");

  if (carousel && scrollLeftBtn && scrollRightBtn) {
    scrollLeftBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -320, behavior: "smooth" });
    });

    scrollRightBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: 320, behavior: "smooth" });
    });
  }

  // Visitor Counter
  const count = localStorage.getItem("visitorCount") || 0;
  const newCount = parseInt(count) + 1;
  localStorage.setItem("visitorCount", newCount);
  const counterEl = document.getElementById("visitorCount");
  if (counterEl) {
    counterEl.textContent = newCount.toLocaleString();
  }

  // Back to Top Scroll - Show/Hide button
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });
  }

  // Nav Links Close on Click
  const navLinks = document.getElementById("navLinks");
  const menuToggle = document.querySelector(".mobile-menu-toggle");

  if (navLinks && menuToggle) {
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });

    // Click Outside Menu to Close
    document.addEventListener("click", (e) => {
      const navContainer = document.querySelector(".nav-container");
      if (!navContainer.contains(e.target) && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  }
});



// // MoneyMind KE Startup Context
// const STARTUP_CONTEXT = `
// You are the AI assistant for MoneyMind KE, a financial literacy platform for Kenyan students. Here's everything about our startup:

// **ORIGIN STORY & FOUNDING:**
// MoneyMind KE was founded by Florence Ndemi, who built this platform after struggling with her own student loans and financial mistakes. Florence is the Founder & CEO who experienced firsthand the challenges of financial illiteracy among students. The startup was born out of personal struggles with financial literacy, frustration, and the urgent need for change in how Kenyan youth approach money management.

// **MISSION & WHAT WE DO:**
// We simplify complex personal finance lessons from bestselling books like "Rich Dad Poor Dad" and "The Psychology of Money" into short, relatable content specifically designed for students in Kenya. Our platform guides users through each 'chapter' of financial growth, one step at a time. We believe that the best financial transformations happen one chapter at a time.

// **PRODUCTS & SERVICES:**
// 1. **Chapter Microlearning**: 5-minute daily lessons drawn from bestselling finance books using spaced repetition & gamification. Over 85% of students develop smarter spending habits and confidence in managing money within 30 days.

// 2. **Smart Budget Tracker**: Automated expense categorization using AI-powered SMS analysis that tracks spending via M-Pesa messages, helping students reduce unnecessary expenses by 40% within their first month.

// 3. **Goal Achievement System**: Visual progress milestones using behavioral psychology triggers. Students tracking progress and celebrating milestones with peers are 3× more likely to finish financial books and actually apply the lessons to start saving.

// **TEAM DETAILS:**
// - **Florence Ndemi** - Founder & CEO: Built this after maxing out student loans, now teaching others to avoid her mistakes
// - **Judy Njeri** - Product Manager: Turns user feedback into features, focuses on solving user pain points
// - **Eric Wanyoike** - Lead Developer: Codes the backbone of MoneyMind KE, ensures no glitches and pure financial growth

// **TARGET AUDIENCE:**
// - **For Students**: Master personal finance from bestselling books, track progress, and earn rewards for completing lessons
// - **For Mentors**: Join as mentors to guide students, share expert insights, and lead financial literacy sessions

// **VISION & LONG-TERM GOALS:**
// To empower every Kenyan student with practical financial wisdom, making financial literacy accessible, engaging, and actionable. We want to transform how young Kenyans approach money management by making complex financial concepts simple and applicable to their daily lives.

// **HOW TO SUPPORT/CONTACT:**
// - Students can start learning by signing up for free basic features
// - Mentors can join to guide and support students
// - Contact through our website's contact form or email
// - Follow our progress and provide feedback to help improve the platform

// **COMPANY SLOGANS:**
// "Educate, Elevate, Empower" - "Master Your Money, One Page at a Time"

// **UNIQUE VALUE PROPOSITION:**
// Unlike generic financial apps, MoneyMind KE specifically focuses on book-based learning tailored for Kenyan students, incorporating local context like M-Pesa integration and understanding the unique financial challenges faced by Kenyan youth.

// Always respond as a knowledgeable, friendly, and encouraging financial literacy advocate who understands the Kenyan student context. Use examples relevant to Kenya and maintain an inspiring, educational tone.
// `;

// class MoneyMindChatbot {
//   constructor() {
//     this.chatArea = document.getElementById('chatArea');
//     this.messageInput = document.getElementById('messageInput');
//     this.sendButton = document.getElementById('sendButton');
//     this.typingIndicator = document.getElementById('typingIndicator');
//     this.isAuthenticated = false;
    
//     this.initializePuter();
//     this.initializeEventListeners();
//   }

//   async initializePuter() {
//     try {
//       if (typeof puter === 'undefined') {
//         throw new Error('Puter.js not loaded');
//       }
      
//       this.isAuthenticated = true;
      
//     } catch (error) {
//       console.error('Puter initialization failed:', error);
//       this.isAuthenticated = false;
//     }
//   }

//   initializeEventListeners() {
//     // Send button click
//     this.sendButton.addEventListener('click', () => this.handleSendMessage());
    
//     // Enter key press
//     this.messageInput.addEventListener('keypress', (e) => {
//       if (e.key === 'Enter' && !e.shiftKey) {
//         e.preventDefault();
//         this.handleSendMessage();
//       }
//     });
//   }

//   async handleSendMessage() {
//     const message = this.messageInput.value.trim();
    
//     if (!message) return;

//     // Disable input while processing
//     this.toggleInputState(false);
    
//     // Add user message to chat
//     this.addMessage(message, 'user');
    
//     // Clear input
//     this.messageInput.value = '';
    
//     // Show typing indicator
//     this.showTypingIndicator();

//     try {
//       let response;
      
//       if (this.isAuthenticated) {
//         response = await this.getPuterResponse(message);
//       } else {
//         response = this.getFallbackResponse(message);
//       }

//       this.hideTypingIndicator();
//       this.addMessage(response, 'ai');
      
//     } catch (error) {
//       console.error('Chat Error:', error);
//       this.hideTypingIndicator();
//       const fallbackResponse = this.getFallbackResponse(message);
//       this.addMessage(fallbackResponse, 'ai');
      
//     } finally {
//       this.toggleInputState(true);
//     }
//   }

//   async getPuterResponse(message) {
//     try {
//       const response = await puter.ai.chat([
//         {
//           role: 'system',
//           content: STARTUP_CONTEXT
//         },
//         {
//           role: 'user', 
//           content: message
//         }
//       ], {
//         model: 'gpt-4',
//         max_tokens: 500,
//         temperature: 0.7
//       });

//       return response;
      
//     } catch (error) {
//       console.error('Puter AI Error:', error);
//       throw error;
//     }
//   }

//   getFallbackResponse(message) {
//     const lowerMessage = message.toLowerCase();
    
//     if (lowerMessage.includes('founder') || lowerMessage.includes('founded')) {
//       return "MoneyMind KE was founded by Florence Ndemi, who built this platform after struggling with her own student loans and financial mistakes. As our Founder & CEO, she experienced firsthand the challenges of financial illiteracy among students.";
//     }
    
//     if (lowerMessage.includes('problem') || lowerMessage.includes('solve')) {
//       return "MoneyMind KE solves financial illiteracy among Kenyan students by making complex financial advice accessible through bite-sized, culturally relevant content from bestselling books.";
//     }
    
//     if (lowerMessage.includes('service') || lowerMessage.includes('product')) {
//       return "We offer: 1) Chapter Microlearning - 5-minute daily lessons, 2) Smart Budget Tracker - AI-powered expense tracking via M-Pesa, and 3) Goal Achievement System with visual progress milestones.";
//     }
    
//     if (lowerMessage.includes('contact') || lowerMessage.includes('support')) {
//       return "You can support MoneyMind KE by signing up as a student or mentor, or contacting our team through our website's contact form. We're always looking for passionate individuals!";
//     }
    
//     if (lowerMessage.includes('vision') || lowerMessage.includes('goal')) {
//       return "Our vision is to empower every Kenyan student with practical financial wisdom, transforming how young Kenyans approach money management through simple, daily lessons.";
//     }
    
//     return "I'm here to help with MoneyMind KE! We're a financial literacy platform for Kenyan students that simplifies lessons from bestselling finance books. Would you like to know about our services, team, or how to get involved?";
//   }

//   addMessage(content, sender) {
//     const messageContainer = document.createElement('div');
//     messageContainer.className = `message-container ${sender}`;
    
//     const avatar = document.createElement('div');
//     avatar.className = `avatar ${sender}`;
//     avatar.innerHTML = sender === 'ai' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
    
//     const message = document.createElement('div');
//     message.className = `message ${sender}`;
//     message.textContent = content;
    
//     messageContainer.appendChild(avatar);
//     messageContainer.appendChild(message);
    
//     this.chatArea.appendChild(messageContainer);
//     this.scrollToBottom();
//   }

//   showTypingIndicator() {
//     this.typingIndicator.style.display = 'flex';
//     this.scrollToBottom();
//   }

//   hideTypingIndicator() {
//     this.typingIndicator.style.display = 'none';
//   }

//   toggleInputState(enabled) {
//     this.messageInput.disabled = !enabled;
//     this.sendButton.disabled = !enabled;
    
//     if (enabled) {
//       this.messageInput.focus();
//     }
//   }

//   scrollToBottom() {
//     this.chatArea.scrollTop = this.chatArea.scrollHeight;
//   }
// }

// // Initialize chatbot when page loads
// document.addEventListener('DOMContentLoaded', () => {
//   new MoneyMindChatbot();
// });
// ✅ Condensed Context for Better AI Focus
const STARTUP_CONTEXT = `
You are the AI assistant for MoneyMind KE, a Kenyan financial literacy platform for students. 
Founded by Florence Ndemi, the platform simplifies personal finance lessons from books like "Rich Dad Poor Dad".
We offer:
- Daily 5-min finance lessons
- An M-Pesa budget tracker
- Goal-setting tools
Always answer in a helpful, student-friendly tone with local Kenyan relevance.
`;

// ✅ Chatbot Class
class MoneyMindChatbot {
  constructor() {
    this.chatArea = document.getElementById('chatArea');
    this.messageInput = document.getElementById('messageInput');
    this.sendButton = document.getElementById('sendButton');
    this.typingIndicator = document.getElementById('typingIndicator');
    this.isAuthenticated = false;

    this.initializePuter();
    this.initializeEventListeners();
  }

  async initializePuter() {
    try {
      if (typeof puter === 'undefined') throw new Error('Puter.js not loaded');
      this.isAuthenticated = true;
    } catch (error) {
      console.error('Puter initialization failed:', error);
      this.isAuthenticated = false;
    }
  }

  initializeEventListeners() {
    this.sendButton.addEventListener('click', () => this.handleSendMessage());
    this.messageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.handleSendMessage();
      }
    });
  }

  async handleSendMessage() {
    const message = this.messageInput.value.trim();
    if (!message) return;

    this.toggleInputState(false);
    this.addMessage(message, 'user');
    this.messageInput.value = '';
    this.showTypingIndicator();

    try {
      const response = this.isAuthenticated
        ? await this.getPuterResponse(message)
        : this.getFallbackResponse(message);

      this.hideTypingIndicator();
      this.addMessage(response, 'ai');

    } catch (error) {
      console.error('Chat Error:', error);
      this.hideTypingIndicator();
      this.addMessage(this.getFallbackResponse(message), 'ai');
    } finally {
      this.toggleInputState(true);
    }
  }

  // ✅ Puter.ai.chat() Integration (Fixed)
  async getPuterResponse(message) {
    try {
      const response = await puter.ai.chat({
        messages: [
          { role: 'system', content: STARTUP_CONTEXT },
          { role: 'user', content: message }
        ],
        model: 'gpt-4',
        temperature: 0.5,
        max_tokens: 500
      });

      return response.message.content;

    } catch (error) {
      throw error;
    }
  }

  // ✅ Fallback if AI unavailable
  getFallbackResponse(message) {
    const lower = message.toLowerCase();

    if (lower.includes('founder')) {
      return "MoneyMind KE was founded by Florence Ndemi, a student who turned her financial struggles into a solution for others.";
    }
    if (lower.includes('problem') || lower.includes('solve')) {
      return "We solve financial illiteracy by simplifying finance lessons for Kenyan students.";
    }
    if (lower.includes('services') || lower.includes('products')) {
      return "We offer short lessons, a budget tracker via M-Pesa, and goal-setting features.";
    }
    if (lower.includes('contact') || lower.includes('support')) {
      return "Reach us via our contact form or email. You can also sign up to support us!";
    }
    if (lower.includes('vision') || lower.includes('goal')) {
      return "Our vision is to make every Kenyan student financially literate with practical, everyday tools.";

    }
    return "I'm your AI guide for MoneyMind KE. Ask me anything about our services, mission, or how to get involved!";
  }

  addMessage(content, sender) {
    const container = document.createElement('div');
    container.className = `message-container ${sender}`;

    const avatar = document.createElement('div');
    avatar.className = `avatar ${sender}`;
    avatar.innerHTML = sender === 'ai' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';

    const msg = document.createElement('div');
    msg.className = `message ${sender}`;
    msg.textContent = content;

    container.appendChild(avatar);
    container.appendChild(msg);
    this.chatArea.appendChild(container);
    this.scrollToBottom();
  }

  showTypingIndicator() {
    this.typingIndicator.style.display = 'flex';
    this.scrollToBottom();
  }

  hideTypingIndicator() {
    this.typingIndicator.style.display = 'none';
  }

  toggleInputState(enabled) {
    this.messageInput.disabled = !enabled;
    this.sendButton.disabled = !enabled;
    if (enabled) this.messageInput.focus();
  }

  scrollToBottom() {
    this.chatArea.scrollTop = this.chatArea.scrollHeight;
  }
}

// ✅ Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  new MoneyMindChatbot();
});
