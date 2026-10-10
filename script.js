'use strict';
const email = 'marlonsze123@gmail.com';
const copyButton = document.getElementById('copy-email');
const status = document.getElementById('copy-status');
copyButton.addEventListener('click', async () => {
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(email);
    status.textContent = '邮箱已复制。';
  } catch {
    status.textContent = '请选中上方邮箱复制，或点击邮箱发送邮件。';
  }
});
document.getElementById('print-resume').addEventListener('click', () => window.print());

