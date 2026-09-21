const terminalInput = document.getElementById('terminal-input');
const terminalHistory = document.getElementById('terminal-history');

const COMMANDS = {
  help: 'Available commands: about, skills, projects, contact, clear',
  about: 'Full-stack developer passionate about building lightweight, high-performance web applications and automation tools.',
  skills: 'Languages: JavaScript, Python, Bash, HTML5, CSS3\nTools: Git, Linux, Terminal, VS Code/Cursor\nInterests: Web Dev, Automation, Networking Fundamentals',
  projects: '1. Network Automation Utility (Python/CLI)\n2. Interactive Web Experience (JS/CSS)\n3. REST API & Auth Handler (Node.js)',
  contact: 'Drop a message via the contact form below or email me directly at your-mithun7657919794@gmail.com'
};

terminalInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const rawInput = this.value.trim();
    const cmd = rawInput.toLowerCase();

    if (cmd === 'clear') {
      terminalHistory.innerHTML = '';
      this.value = '';
      return;
    }

    // Output create karein
    const line = document.createElement('div');
    line.className = 'space-y-1';

    const cmdEcho = document.createElement('p');
    cmdEcho.innerHTML = `<span class="text-emerald-400">&gt;</span> <span class="text-white">${rawInput}</span>`;
    line.appendChild(cmdEcho);

    const response = document.createElement('p');
    response.className = 'text-slate-300 whitespace-pre-line';

    if (COMMANDS[cmd]) {
      response.textContent = COMMANDS[cmd];
    } else if (cmd === '') {
      // Nothing entered
    } else {
      response.textContent = `command not found: ${cmd}. Type 'help' for available commands.`;
      response.className = 'text-rose-400';
    }

    line.appendChild(response);
    terminalHistory.appendChild(line);

    this.value = '';
    // Auto scroll bottom
    terminalHistory.scrollTop = terminalHistory.scrollHeight;
  }
});
