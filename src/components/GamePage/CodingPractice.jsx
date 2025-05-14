import { useState, useEffect } from "react";
import "../css/CodingPractice.css";
import codingChallenges from "../../data/codingChallenges";
import { verifySolution } from "../../utils/codeVerifier";

function CodingPractice({ onComplete, onClose, currentLevel = 0 }) {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Get challenge based on player's current coding level
  // Challenges are already ordered from easiest to hardest in the array
  const getChallenge = (level) => {
    // Get the appropriate challenge based on level
    // Cap the level to the number of available challenges
    const index = Math.min(level, codingChallenges.length - 1);
    return codingChallenges[index];
  };

  // Initialize with the appropriate challenge for player's level
  useEffect(() => {
    const challenge = getChallenge(currentLevel);
    setCurrentChallenge(challenge);
    setCode(challenge.initialCode);
    setOutput("");
    setIsCorrect(false);
    setSubmitting(false);
  }, [currentLevel]);

  // Simulate running the code
  const runCode = () => {
    try {
      // Prevent multiple submissions
      if (submitting) return;

      // Clear previous output
      setOutput("");

      // Verify the solution using our helper function
      const result = verifySolution(currentChallenge.id, code);

      setOutput(result.output);
      setIsCorrect(result.isCorrect);

      // If solution is correct, notify the parent component
      if (result.isCorrect) {
        setSubmitting(true);

        // Notify user about successful submission
        setOutput(
          (prevOutput) =>
            prevOutput +
            "\n\n✓ Great job! Your solution is correct! Returning to main game..."
        );

        // Give user time to see success message before closing
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1500);
      }
    } catch (error) {
      setOutput(`Error executing code: ${error.message}`);
    }
  };

  // Show hint
  const showHint = () => {
    setOutput(`Hint: ${currentChallenge.hint}`);
  };

  // Show solution
  const showSolution = () => {
    setCode(currentChallenge.solution);
    setOutput("Solution revealed! You can run it to see how it works.");
  };

  if (!currentChallenge) return <div>Loading challenge...</div>;

  return (
    <div className="coding-practice-modal">
      <div className="coding-practice-container">
        <div className="coding-header">
          <h2>{currentChallenge.title}</h2>
          <button
            className="close-button"
            onClick={onClose}
            disabled={submitting}
          >
            ×
          </button>
        </div>

        <div className="challenge-description">
          <p>{currentChallenge.description}</p>
          <div className="challenge-difficulty">
            <span>
              Difficulty: {currentLevel + 1}/{codingChallenges.length}
            </span>
          </div>
        </div>

        <div className="code-editor">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your Python code here..."
            spellCheck="false"
            disabled={submitting}
          />
        </div>

        <div className="terminal">
          <div className="terminal-header">
            <span>Terminal Output</span>
          </div>
          <div className="terminal-content">
            {output ? (
              <>
                <div className="terminal-command">$ python solution.py</div>
                <div
                  className={`terminal-output ${isCorrect ? "success" : ""}`}
                >
                  {output}
                </div>
                {isCorrect && !submitting && (
                  <div className="success-message">
                    ✓ Great job! Your solution is correct!
                  </div>
                )}
              </>
            ) : (
              <div className="terminal-prompt">
                Run your code to see output here.
              </div>
            )}
          </div>
        </div>

        <div className="coding-actions">
          <button onClick={runCode} disabled={submitting}>
            Run Code
          </button>
          <button onClick={showHint} disabled={submitting}>
            Hint
          </button>
          <button onClick={showSolution} disabled={submitting}>
            Show Solution
          </button>
        </div>
      </div>
    </div>
  );
}

export default CodingPractice;
