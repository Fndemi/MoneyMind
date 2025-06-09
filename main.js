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

 const STARTUP_CONTEXT = `
You are the AI assistant for MoneyMind KE, a financial literacy platform for Kenyan students. Here's everything about our startup:

**ORIGIN STORY & FOUNDING:**
MoneyMind KE was founded by Florence Ndemi, who built this platform after struggling with her own student loans and financial mistakes. Florence is the Founder & CEO who experienced firsthand the challenges of financial illiteracy among students. The startup was born out of personal struggles with financial literacy, frustration, and the urgent need for change in how Kenyan youth approach money management.

**MISSION & WHAT WE DO:**
We simplify complex personal finance lessons from bestselling books like "Rich Dad Poor Dad" and "The Psychology of Money" into short, relatable content specifically designed for students in Kenya. Our platform guides users through each 'chapter' of financial growth, one step at a time. We believe that the best financial transformations happen one chapter at a time.

**PRODUCTS & SERVICES:**
1. **Chapter Microlearning**: 5-minute daily lessons drawn from bestselling finance books using spaced repetition & gamification. Over 85% of students develop smarter spending habits and confidence in managing money within 30 days.

2. **Smart Budget Tracker**: Automated expense categorization using AI-powered SMS analysis that tracks spending via M-Pesa messages, helping students reduce unnecessary expenses by 40% within their first month.

3. **Goal Achievement System**: Visual progress milestones using behavioral psychology triggers. Students tracking progress and celebrating milestones with peers are 3× more likely to finish financial books and actually apply the lessons to start saving.

**TEAM DETAILS:**
- **Florence Ndemi** - Founder & CEO: Built this after maxing out student loans, now teaching others to avoid her mistakes
- **Judy Njeri** - Product Manager: Turns user feedback into features, focuses on solving user pain points
- **Eric Wanyoike** - Lead Developer: Codes the backbone of MoneyMind KE, ensures no glitches and pure financial growth

**TARGET AUDIENCE:**
- **For Students**: Master personal finance from bestselling books, track progress, and earn rewards for completing lessons
- **For Mentors**: Join as mentors to guide students, share expert insights, and lead financial literacy sessions

**VISION & LONG-TERM GOALS:**
To empower every Kenyan student with practical financial wisdom, making financial literacy accessible, engaging, and actionable. We want to transform how young Kenyans approach money management by making complex financial concepts simple and applicable to their daily lives.

**HOW TO SUPPORT/CONTACT:**
- Students can start learning by signing up for free basic features
- Mentors can join to guide and support students
- Contact through our website's contact form or email
- Follow our progress and provide feedback to help improve the platform

**COMPANY SLOGANS:**
"Educate, Elevate, Empower" - "Master Your Money, One Page at a Time"

**UNIQUE VALUE PROPOSITION:**
Unlike generic financial apps, MoneyMind KE specifically focuses on book-based learning tailored for Kenyan students, incorporating local context like M-Pesa integration and understanding the unique financial challenges faced by Kenyan youth.

Always respond as a knowledgeable, friendly, and encouraging financial literacy advocate who understands the Kenyan student context. Use examples relevant to Kenya and maintain an inspiring, educational tone.
`;

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
          // Check if Puter is available
          if (typeof puter === 'undefined') {
            throw new Error('Puter.js not loaded');
          }

          // Try to authenticate with Puter
          console.log('Initializing Puter authentication...');
          
          // For Puter.js, you might need to call auth() or check if already authenticated
          // This depends on your Puter setup and whether you need API keys
          
          this.isAuthenticated = true;
          this.showAuthStatus('Connected to Puter AI successfully!', 'success');
          
        } catch (error) {
          console.error('Puter initialization failed:', error);
          this.isAuthenticated = false;
          this.showAuthStatus('AI service unavailable. Using fallback responses.', 'error');
        }
      }

      initializeEventListeners() {
        // Send button click
        this.sendButton.addEventListener('click', () => this.handleSendMessage());
        
        // Enter key press
        this.messageInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            this.handleSendMessage();
          }
        });

        // Sample question buttons
        document.querySelectorAll('.question-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const question = e.target.getAttribute('data-question');
            this.messageInput.value = question;
            this.handleSendMessage();
          });
        });
      }

      async handleSendMessage() {
        const message = this.messageInput.value.trim();
        
        // Handle empty input
        if (!message) {
          this.showError("Please enter a question before sending. I'm here to help with your financial literacy journey!");
          return;
        }

        // Disable input while processing
        this.toggleInputState(false);
        
        // Add user message to chat
        this.addMessage(message, 'user');
        
        // Clear input
        this.messageInput.value = '';
        
        // Show typing indicator
        this.showTypingIndicator();

        try {
          let response;
          
          if (this.isAuthenticated) {
            // Try Puter AI first
            response = await this.getPuterResponse(message);
          } else {
            // Fallback to predefined responses
            response = this.getFallbackResponse(message);
          }

          // Hide typing indicator
          this.hideTypingIndicator();
          
          // Add AI response to chat
          this.addMessage(response, 'ai');
          
        } catch (error) {
          console.error('Chat Error:', error);
          this.hideTypingIndicator();
          
          // Try fallback response
          const fallbackResponse = this.getFallbackResponse(message);
          this.addMessage(fallbackResponse, 'ai');
          
        } finally {
          // Re-enable input
          this.toggleInputState(true);
        }
      }

      async getPuterResponse(message) {
        try {
          // Updated Puter AI call with proper error handling
          const response = await puter.ai.chat([
            {
              role: 'system',
              content: STARTUP_CONTEXT
            },
            {
              role: 'user', 
              content: message
            }
          ], {
            // Add any required options here
            model: 'gpt-4', // or whatever model Puter supports
            max_tokens: 500,
            temperature: 0.7
          });

          return response;
          
        } catch (error) {
          console.error('Puter AI Error:', error);
          throw error;
        }
      }

      getFallbackResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Predefined responses for common questions
        if (lowerMessage.includes('founder') || lowerMessage.includes('founded')) {
          return "MoneyMind KE was founded by Florence Ndemi, who built this platform after struggling with her own student loans and financial mistakes. As our Founder & CEO, she experienced firsthand the challenges of financial illiteracy among students and created this solution to help others avoid the same mistakes.";
        }
        
        if (lowerMessage.includes('problem') || lowerMessage.includes('solve')) {
          return "MoneyMind KE solves the critical problem of financial illiteracy among Kenyan students. We address the gap between complex financial advice in bestselling books and practical, actionable steps students can take. Our platform makes financial wisdom accessible through bite-sized, culturally relevant content.";
        }
        
        if (lowerMessage.includes('service') || lowerMessage.includes('product') || lowerMessage.includes('offer')) {
          return "We offer three main services: 1) Chapter Microlearning - 5-minute daily lessons from bestselling finance books, 2) Smart Budget Tracker - AI-powered expense tracking via M-Pesa SMS analysis, and 3) Goal Achievement System - visual progress milestones with peer support. These help students develop better financial habits within 30 days.";
        }
        
        if (lowerMessage.includes('contact') || lowerMessage.includes('support')) {
          return "You can support MoneyMind KE by: signing up as a student to start your financial literacy journey, joining as a mentor to guide others, or contacting our team through our website. We're always looking for passionate individuals who want to improve financial literacy in Kenya!";
        }
        
        if (lowerMessage.includes('vision') || lowerMessage.includes('goal')) {
          return "Our vision is to empower every Kenyan student with practical financial wisdom. We want to transform how young Kenyans approach money management by making complex financial concepts simple and applicable to daily life. Our long-term goal is to become Kenya's leading financial literacy platform for students.";
        }
        
        // Default response
        return "That's a great question about MoneyMind KE! We're a financial literacy platform designed specifically for Kenyan students. We simplify lessons from bestselling finance books like 'Rich Dad Poor Dad' into practical, actionable content. Would you like to know more about our services, team, or how you can get involved?";
      }

      showAuthStatus(message, type) {
        const statusDiv = document.createElement('div');
        statusDiv.className = `auth-status ${type === 'error' ? 'error' : ''}`;
        statusDiv.textContent = message;
        
        this.chatArea.appendChild(statusDiv);
        this.scrollToBottom();
        
        // Remove status after 3 seconds
        setTimeout(() => {
          if (statusDiv.parentNode) {
            statusDiv.parentNode.removeChild(statusDiv);
          }
        }, 3000);
      }

      addMessage(content, sender) {
        const messageContainer = document.createElement('div');
        messageContainer.className = `message-container ${sender}`;
        
        const avatar = document.createElement('div');
        avatar.className = `avatar ${sender}`;
        avatar.innerHTML = sender === 'ai' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
        
        const message = document.createElement('div');
        message.className = `message ${sender}`;
        message.textContent = content;
        
        messageContainer.appendChild(avatar);
        messageContainer.appendChild(message);
        
        this.chatArea.appendChild(messageContainer);
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
        
        if (enabled) {
          this.messageInput.focus();
        }
      }

      showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        this.chatArea.appendChild(errorDiv);
        this.scrollToBottom();
        
        // Remove error after 5 seconds
        setTimeout(() => {
          if (errorDiv.parentNode) {
            errorDiv.parentNode.removeChild(errorDiv);
          }
        }, 5000);
      }

      scrollToBottom() {
        this.chatArea.scrollTop = this.chatArea.scrollHeight;
      }
    }

    // Initialize chatbot when page loads
    document.addEventListener('DOMContentLoaded', () => {
      new MoneyMindChatbot();
    });