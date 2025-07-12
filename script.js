
function uploadReel() {
  const fileInput = document.getElementById('uploadVideo');
  if (fileInput.files.length > 0) {
    alert('🎬 Your reel has been uploaded!');
  } else {
    alert('⚠️ Please select a video file to upload.');
  }
}

function submitKyc() {
  alert('🧾 KYC Submitted! Admin will review.');
}

function donate() {
  alert('🙏 Thank you for your ₹10 donation!');
}
