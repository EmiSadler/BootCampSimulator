import { useState } from "react";
import "../css/LandingPage.css";
import TestimonialCard from "./LandingPage/TestimonialCard";
import Calendar from "./Calendar";

function LandingPage({ onStartGame }) {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <div className="landing-hero">
        <div className="hero-content">
          <div className="logo-container">
            <img
              src="/assets/BootCampSimLogo.png"
              alt="BootCamp Simulator Logo"
              className="landing-logo"
            />
          </div>
          <h1>Master Python Programming Through Gamified Learning</h1>
          <p className="hero-subtitle">
            Experience the life of a coding bootcamp student while learning real
            Python skills
          </p>
          <button className="cta-button" onClick={onStartGame}>
            Start Your Coding Journey
          </button>
        </div>
        <div className="hero-image">
          <div className="hero-screenshot">
            {/* This would be a screenshot of the game or illustration */}
            <div className="code-snippet">
              <pre>
                <code>
                  def hello_world():
                  <br />
                  &nbsp;&nbsp;return "Hello, future developer!"
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="value-section">
        <h2>Why Bootcamp Simulator?</h2>
        <div className="value-grid">
          <div className="value-card">
            <div className="value-icon">📊</div>
            <h3>Learn by Doing</h3>
            <p>
              Solve real coding challenges and build practical skills through
              hands-on practice
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">🎮</div>
            <h3>Gamified Experience</h3>
            <p>
              Turn learning into fun with progress tracking, achievements, and
              balanced gameplay
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">📚</div>
            <h3>Structured Learning</h3>
            <p>
              Progress through a carefully designed curriculum from basics to
              advanced concepts
            </p>
          </div>
        </div>
      </div>

      {/* Features Tabs Section */}
      <div className="features-section">
        <div className="landing-tabs">
          <button
            className={`tab-button ${activeTab === "intro" ? "active" : ""}`}
            onClick={() => setActiveTab("intro")}
          >
            Overview
          </button>
          <button
            className={`tab-button ${
              activeTab === "howtoplay" ? "active" : ""
            }`}
            onClick={() => setActiveTab("howtoplay")}
          >
            How It Works
          </button>
          <button
            className={`tab-button ${activeTab === "learning" ? "active" : ""}`}
            onClick={() => setActiveTab("learning")}
          >
            Learning Path
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "intro" && (
            <div className="intro-content">
              <div className="tab-grid">
                <div className="tab-image">
                  <div className="feature-illustration">
                    {/* This would be an illustration or screenshot */}
                    <div className="simulator-preview">
                      <div className="preview-header">Bootcamp Simulator</div>
                      <div className="preview-content">
                        <div className="preview-stats">
                          <div>Coding Skill: 75%</div>
                          <div>Energy: 80%</div>
                          <div>Day: 15</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-text">
                  <h2>The Bootcamp Experience, Gamified</h2>
                  <p>
                    You've just enrolled in a 12-week intensive coding bootcamp.
                    Your mission is to build your coding skills, make
                    connections with your classmates, and thrive in the
                    demanding schedule.
                  </p>
                  <div className="feature-list">
                    <div className="feature-item">
                      <div className="feature-icon">📊</div>
                      <div>Track your progress from beginner to expert</div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">🤝</div>
                      <div>Form relationships with unique classmates</div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">⚡</div>
                      <div>Balance activities and energy management</div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">🎲</div>
                      <div>
                        React to unexpected events that affect your journey
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "howtoplay" && (
            <div className="howtoplay-content">
              <div className="tab-grid">
                <div className="tab-text">
                  <h2>Your Day at the Bootcamp</h2>
                  <p>
                    Every day gives you 8 action points to spend wisely on
                    activities that help you progress while managing your energy
                    levels.
                  </p>

                  <div className="activity-cards">
                    <div className="activity-card">
                      <div className="activity-icon">📚</div>
                      <h3>Study Python</h3>
                      <p>Learn programming concepts</p>
                      <div className="activity-stats">
                        <span className="skill-gain">+3 Skill</span>
                        <span className="energy-cost">-5 Energy</span>
                      </div>
                    </div>

                    <div className="activity-card">
                      <div className="activity-icon">💻</div>
                      <h3>Practice Coding</h3>
                      <p>Solve real coding challenges</p>
                      <div className="activity-stats">
                        <span className="skill-gain">+5 Skill</span>
                        <span className="energy-cost">-10 Energy</span>
                      </div>
                    </div>

                    <div className="activity-card">
                      <div className="activity-icon">👥</div>
                      <h3>Socialize</h3>
                      <p>Build relationships with classmates</p>
                      <div className="activity-stats">
                        <span className="bond-gain">Improve Bonds</span>
                        <span className="energy-cost">Varies</span>
                      </div>
                    </div>

                    <div className="activity-card">
                      <div className="activity-icon">🛌</div>
                      <h3>Rest</h3>
                      <p>Recover your energy</p>
                      <div className="activity-stats">
                        <span className="energy-gain">+20 Energy</span>
                        <span className="action-cost">-1 Action</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-image">
                  <Calendar page="LandingPage" />
                </div>
              </div>
            </div>
          )}

          {activeTab === "learning" && (
            <div className="learning-content">
              <h2>Your Python Learning Journey</h2>
              <p className="learning-intro">
                Master Python from beginner to advanced through our dual
                approach of theory and practice
              </p>

              <div className="learning-path">
                <div className="learning-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Study Python Fundamentals</h3>
                    <p>Access 20 comprehensive lessons covering:</p>
                    <div className="topics-grid">
                      <div className="topic-item">
                        <div className="topic-icon">➊</div>
                        <div>Basic Syntax</div>
                      </div>
                      <div className="topic-item">
                        <div className="topic-icon">➋</div>
                        <div>Data Types</div>
                      </div>
                      <div className="topic-item">
                        <div className="topic-icon">➌</div>
                        <div>Control Flow</div>
                      </div>
                      <div className="topic-item">
                        <div className="topic-icon">➍</div>
                        <div>Functions</div>
                      </div>
                      <div className="topic-item">
                        <div className="topic-icon">➎</div>
                        <div>Data Structures</div>
                      </div>
                      <div className="topic-item">
                        <div className="topic-icon">➏</div>
                        <div>Advanced Concepts</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="path-connector"></div>

                <div className="learning-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Apply Through Practice</h3>
                    <p>
                      Solve 22 coding challenges with increasing difficulty:
                    </p>
                    <ul className="practice-features">
                      <li>Write and test real Python code</li>
                      <li>Receive instant feedback on your solutions</li>
                      <li>Access hints when you get stuck</li>
                      <li>Review example solutions to learn best practices</li>
                    </ul>
                    <div className="code-example">
                      <pre>
                        <code>
                          def calculate_average(numbers):
                          <br />
                          &nbsp;&nbsp;return sum(numbers) / len(numbers)
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <TestimonialCard
            name="John S."
            review="This is a review"
            role="Junior Engineer"
            avatar="JS"
          />
          <TestimonialCard
            name="Lily C."
            review="I tried many ways to learn Python, but Bootcamp Simulator made it stick by combining theory with actual practice in a fun, engaging way."
            role="Self-taught Developer"
            avatar="LC"
          />
          <TestimonialCard
            name="Mark K."
            review="I love the gamified approach! It keeps me motivated to learn and practice every day."
            role="Self-taught Developer"
            avatar="MK"
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <div className="final-cta">
        <h2>Ready to Start Your Coding Journey?</h2>
        <p>
          Join thousands of learners who have mastered Python through our
          interactive bootcamp simulation
        </p>
        <button className="cta-button" onClick={onStartGame}>
          Launch Bootcamp Simulator
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
