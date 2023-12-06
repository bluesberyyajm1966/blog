document.addEventListener('DOMContentLoaded', function () {
    const openSettingsBtn = document.getElementById('openSettings');
    const closeSettingsBtn = document.getElementById('closeSettings');
    const applySettingsBtn = document.getElementById('applySettings');
    const settingsPanel = document.getElementById('settingsPanel');
    const startColorInput = document.getElementById('startColor');
    const endColorInput = document.getElementById('endColor');

    openSettingsBtn.addEventListener('click', function () {
        settingsPanel.style.display = 'block';
    });

    closeSettingsBtn.addEventListener('click', function () {
        settingsPanel.style.display = 'none';
    });

    applySettingsBtn.addEventListener('click', function () {
        const startColor = startColorInput.value;
        const endColor = endColorInput.value;
        document.body.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;
    });
});
