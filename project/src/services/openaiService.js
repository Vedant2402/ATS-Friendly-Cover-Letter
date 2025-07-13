export const generateCoverLetter = async (data) => {
  // This is a mock implementation since we can't include real API keys in the demo
  // In a real implementation, you would call the OpenAI API here
  
  const toneDescriptions = {
    Professional: 'formal and business-appropriate',
    Friendly: 'warm and personable while maintaining professionalism',
    Bold: 'confident and assertive',
    Fun: 'creative and enthusiastic while remaining professional'
  };

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Calculate approximate word count for the generated letter
  const targetWords = data.wordLimit;
  const isShort = targetWords <= 200;
  const isLong = targetWords >= 400;

  // Generate a sample cover letter based on the provided data
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `${currentDate}

Dear Hiring Manager,

I am writing to express my ${isShort ? '' : 'strong '}interest in the ${data.positionName} position at ${data.companyName}.${isShort ? '' : ` As a passionate professional with a ${data.tone.toLowerCase()} approach to my work, I am excited about the opportunity to contribute to your team.`}

${data.jobDescription && !isShort ? `Having reviewed the job description, I am particularly drawn to the requirements and responsibilities outlined for this role. My background and experience align well with what you're seeking, and I am confident I can make a meaningful impact at ${data.companyName}.` : ''}

${data.additionalDetails ? `${isShort ? 'My qualifications include: ' : 'In terms of my qualifications and experience: '}${data.additionalDetails}` : `My ${isShort ? '' : 'diverse '}skill set and experience ${isShort ? 'align well with this role' : 'have prepared me well for this role'}.`}

${isShort ? '' : `I am particularly excited about the opportunity to work with ${data.companyName} because of your reputation for innovation and excellence in the industry. I believe my ${data.tone.toLowerCase()} approach and dedication to quality work would be a valuable addition to your team.`}

${data.linkedin && !isShort ? `I invite you to review my LinkedIn profile at ${data.linkedin} for additional details about my professional background.` : ''}${data.portfolio && !isShort ? ` You can also view examples of my work at ${data.portfolio}.` : ''}

Thank you for considering my application.${isShort ? '' : ` I would welcome the opportunity to discuss how my skills and enthusiasm can contribute to ${data.companyName}'s continued success.`} I look forward to hearing from you${isShort ? '' : ' soon'}.

${isLong ? `\nI am confident that my experience and passion for this field make me an ideal candidate for this position. I am eager to bring my skills to ${data.companyName} and contribute to your team's success. Please feel free to contact me at your convenience to discuss my qualifications further.` : ''}

Sincerely,
${data.fullName}
${data.email}
${data.phone}`;
};

// To implement real OpenAI integration, replace the mock function above with:
/*
export const generateCoverLetter = async (data) => {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a professional cover letter writer. Create personalized, compelling cover letters that match the specified tone: ${data.tone}. Make the letter specific to the company and position, incorporating any provided job description and additional details.`
        },
        {
          role: 'user',
          content: `Write a cover letter with approximately ${data.wordLimit} words for:
          Name: ${data.fullName}
          Email: ${data.email}
          Phone: ${data.phone}
          LinkedIn: ${data.linkedin || 'Not provided'}
          Portfolio: ${data.portfolio || 'Not provided'}
          Company: ${data.companyName}
          Position: ${data.positionName}
          Job Description: ${data.jobDescription || 'Not provided'}
          Tone: ${data.tone}
          Word Limit: ${data.wordLimit} words (approximate)
          Additional Details: ${data.additionalDetails || 'Not provided'}
          
          Format the letter professionally with proper spacing and structure. Include the current date at the top. Keep the letter to approximately ${data.wordLimit} words.`
        }
      ],
      max_tokens: 1000,
      temperature: 0.7
    })
  });

  const result = await response.json();
  return result.choices[0].message.content;
};
*/