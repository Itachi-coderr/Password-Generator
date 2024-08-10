import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('Password');
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    let charset = '';
    let newPassword = '';

    if (includeUppercase) charset += uppercaseChars;
    if (includeLowercase) charset += lowercaseChars;
    if (includeNumbers) charset += numberChars;
    if (includeCharacters) charset += specialChars;

    if (charset.length === 0) return; 

    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
  };


  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true); // 
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-600 p-6 rounded-lg max-w-sm w-full">
        <div className="flex justify-center mb-4">
          <img src="/images/Background_Remove.png" alt="Robot Icon" className="h-16 w-16" />
        </div>
        <h1 className="text-center font-bold bg-green-500 rounded-xl py-2 px-4 mb-4 text-lg">
          Random Password Generator
        </h1>
        <p className="text-center text-sm mt-2">
          Secure, strong, and unique passwords to keep your accounts safe online.
        </p>
        <div className="flex items-center bg-gray-700 p-2 rounded mt-4">
          <input
            type="text"
            value={password}
            readOnly
            className={`bg-transparent text-center w-full text-white text-sm ${copied ? 'border-b-4 border-blue-500' : ''} border-b-2 border-gray-600`}
          />
          <button
            className={`bg-green-500 text-white py-1 px-3 rounded ml-2 ${copied ? 'bg-green-700' : 'hover:bg-green-700'}`} 
            onClick={copyToClipboard}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
          onClick={generatePassword}
        >
          Generate
        </button>
        <div className="flex flex-col mt-4 bg-black text-white border-2 p-4 rounded-lg">
          <div className="p-2">
            <label htmlFor="length" className="bg-green-600 px-4 py-2 rounded-xl text-white text-sm">
              Password Length (6-64)
            </label>
            <div className="flex mt-2 items-center">
              <label className="bg-white rounded-full px-3 text-black text-sm">
                {length}
              </label>
              <input
                type="range"
                id="length"
                className="ml-4 w-full"
                min="6"
                max="64"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="p-2">
            <label className="flex items-center mb-2 text-sm">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
                className="form-checkbox mr-2"
              />
              Uppercase (ABC)
            </label>
            <label className="flex items-center mb-2 text-sm">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={() => setIncludeLowercase(!includeLowercase)}
                className="form-checkbox mr-2"
              />
              Lowercase (abcd)
            </label>
            <label className="flex items-center mb-2 text-sm">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
                className="form-checkbox mr-2"
              />
              Numbers (123)
            </label>
            <label className="flex items-center mb-2 text-sm">
              <input
                type="checkbox"
                checked={includeCharacters}
                onChange={() => setIncludeCharacters(!includeCharacters)}
                className="form-checkbox mr-2"
              />
              Characters (#&)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;




