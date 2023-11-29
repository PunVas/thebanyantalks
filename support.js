
const widget = document.createElement('div');
widget.style.position = 'fixed';
widget.style.bottom = '20px';
widget.style.right = '20px';

const button = document.createElement('button');
button.textContent = 'UPI QR Code';
button.style.border = 'none';
button.style.backgroundColor = '#f0f0f0';
button.style.padding = '10px';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';

const qrCode = document.createElement('div');
qrCode.style.display = 'none';
qrCode.style.position = 'absolute';
qrCode.style.width = '300px';
qrCode.style.backgroundColor = 'white';
qrCode.style.border = '1px solid #ccc';
qrCode.style.padding = '10px';
qrCode.style.borderRadius = '5px';
qrCode.style.boxShadow = '0px 5px 15px rgba(0, 0, 0, 0.3)'; // Adjusting the shadow
qrCode.style.bottom = 'calc(100% + 10px)'; // Adjusts position relative to button
qrCode.style.right = '0';

const qrImg = document.createElement('img');
qrImg.setAttribute('src', 'https://blogger.googleusercontent.com/img/a/AVvXsEiPVDWGpfJSs_3YNlPWLocbPRScJe8TRr4SFWhGMpzVyJsKevzE15iK0OnwadHattjhQvhuX3DwXCi4b3sn-D-cU2HLW8FLop37MWiySQ5YeaacInVW9v-Tll_h8iLoCCsOIBO6WSWC3qAAU5518d3RuNw1AVflf9Vnq50hwHbtL2V8FNPVlnjNzCKoalA');
qrImg.setAttribute('alt', '8619661188@paytm');
qrImg.style.width = '90%';
qrImg.style.height = 'auto';
qrImg.style.padding = 'auto';
qrImg.style.maxWidth = '100%'; // Set maximum width to contain border

const qrText = document.createElement('p');
qrText.textContent = 'Name: Puneet Vaswani';
qrText.style.marginTop = '5px';
qrText.style.fontSize = '12px';
qrText.style.color = '#666';

qrCode.appendChild(qrImg);
qrCode.appendChild(qrText);
widget.appendChild(button);
widget.appendChild(qrCode);
document.body.appendChild(widget);

button.addEventListener('mouseover', function() {
  qrCode.style.display = 'block';
});

button.addEventListener('mouseout', function() {
  qrCode.style.display = 'none';
});

