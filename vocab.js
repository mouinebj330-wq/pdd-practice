// Default starter words (Driving & General)
const defaultVocab = [
    {
        id: 1,
        category: "Driving",
        ru: "Уступить дорогу",
        en: "Yield / Give way",
        ar: "افسح الطريق (أعط الطريق)",
        Image: "",
        customAudio: ""
    },
    {
        id: 2,
        category: "Driving",
        ru: "Вынужденная остановка",
        en: "Emergency stop",
        ar: "التوقف الاضطراري",
        Image: "",
        customAudio: ""
    },
    {
        id: 3,
        category: "General",
        ru: "Мне нужно подумать об этом",
        en: "I need to think about it",
        ar: "أحتاج إلى التفكير في هذا الأمر",
        Image: "",
        customAudio: ""
    }
]

//  Load saved items from LocalStorage 
let vocabItems = JSON.parse(localStorage.getItem('pdd_vocab_list')) || defaultVocab;
let currentFilter = "All";

// DOM Elements 
const vocabListEl = document.getElementById('vocab-list');
const toggleFormBtn = document.getElementById('toggle-form-btn');
const addForm = document.getElementById('add-vocab-form');
const ruVoiceSelect = document.getElementById('ru-voice-select');
const enVoiceSelect = document.getElementById('en-voice-select');
let voices = [];

// 1. load & Prioritize High-Quality Male Voices
function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    ruVoiceSelect.innerHTML = '';
    enVoiceSelect.innerHTML = '';

    //  Keywords for natural & male voices (Microsoft Edge Natural / Google)
    const maleKeywords = ['dmitry', 'pavel', 'maxim', 'male', 'guy', 'christopher', 'daniel', 'david', 'mark', 'alex'];

    //  Sort to put Natural & Male voices at the top
    const sortVoices = (list) => list.sort((a, b) => {
        const aLocal = a.localService ? 3 : 0; // prioritize offline/local voices for instant playback
        const bLocal = b.localService ? 3 : 0;
        const aMale = maleKeywords.some (k => a.name.toLowerCase().includes(k)) ? 2 : 0;
        const bMale = maleKeywords.some (k => b.name.toLowerCase().includes(k)) ? 2 : 0;
        return (bLocal + bMale) - (aLocal + aMale);
    });

    sortVoices(voices.filter(v => v.lang.includes('ru'))).forEach(voice => {
        const opt = document.createElement('option');
        opt.value = voice.name;
        opt.textContent = `${voice.name} ${voice.localService ? '⚡' : '☁️'}`;
        ruVoiceSelect.appendChild(opt);
    });
    sortVoices(voices.filter(v => v.lang.includes('en'))).forEach(voice => {
        const opt = document.createElement('option');
        opt.value = voice.name;
        opt.textContent = `${voice.name} ${voice.localService ? '⚡' : '☁️'}`;
        enVoiceSelect.appendChild(opt);
    });
}
window.speechSynthesis.onvoiceschanged = populateVoices;
populateVoices();

//  2. Speak Text Function (Russian or English)
function speakText(text, langType, customAudioData = "") {
    // If user uploaded a custom audio file, play it first
    if (langType === 'ru' && customAudioData) {
        const audio = new Audio(customAudioData);
        audio.play();
        return;
    }

    window.speechSynthesis.cancel(); // Stop any ongoing speech
    const utterance = new SpeechSynthesisUtterance(text);

    const selectedVoiceName = langType === 'ru' ? ruVoiceSelect.value : enVoiceSelect.value;
    const chosenVoice = voices.find(v => v.name === selectedVoiceName);

    if (chosenVoice) {
        utterance.voice = chosenVoice;
    }
    utterance.lang = langType === 'ru' ? 'ru-RU' : 'en-US';
    utterance.rate = 0.92; // Clear natural pace
    window.speechSynthesis.speak(utterance);
}

// 3. Convert Uploaded File (Image or Audio) to Base64 for Local Storage
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        if (!file) return resolve("");
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}

// 4.Handle Form Submission (Add New Card)
addForm.onsubmit = async (e) => {
    e.preventDefault();

    const category = document.getElementById('item-category').value;
    const ruText = document.getElementById('ru-input').value.trim();
    const enText = document.getElementById('en-input').value.trim();
    const arText = document.getElementById('ar-input').value.trim();

    const imgFile = document.getElementById('img-input').files[0];
    const audioFile = document.getElementById('audio-input').files[0];

    const imgBase64 = await fileToBase64(imgFile);
    const audioBase64 = await fileToBase64(audioFile);

    const newItem = {
        id: Date.now(),
        category,
        ru: ruText,
        en: enText,
        ar: arText,
        image: imgBase64,
        customAudio: audioBase64
    };
    vocabItems.unshift(newItem); //  Add to top of list
    localStorage.setItem('pdd_vocab_list', JSON.stringify(vocabItems));

    addForm.reset();
    addForm.style.display = 'none';
    renderVocab();
};

//  5. Render Cards on Screen
function renderVocab() {
    vocabListEl.innerHTML = '';

    const filtered = currentFilter ==="All"
        ? vocabItems
        : vocabItems.filter(item => item.category === currentFilter);
    
    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'vocab-card';

        card.innerHTML = `
          ${item.image ? `<img src="${item.image}" alt="Vocab visual">` : ''}
          <div class="vocab-ru">${item.ru}</div>
          <div class="vocab-en">${item.en}</div>
          <div class="vocab-ar">${item.ar}</div>
          <div class="card-actions">
            <button class="tool-btn" onclick="speakText('${item.ru.replace(/'/g, "\\'")}', 'ru', '${item.customAudio}')">🔊 RU</button>
            <button class="tool-btn" onclick="speakText('${item.en.replace(/'/g, "\\'")}', 'en')">🔊 EN</button>
            <button class="delete-btn" onclick="deleteCard(${item.id})">🗑️ Delete</button>
          </div>
        `;
        vocabListEl.appendChild(card);
    });
}

// 6. Delete Card 
function deleteCard(id) {
    vocabItems = vocabItems.filter(item => item.id !== id);
    localStorage.setItem('pdd_vocab_list', JSON.stringify(vocabItems));
    renderVocab();
}

//  Toggle Form Visibility
toggleFormBtn.onclick = () => {
    addForm.style.display = addForm.style.display === 'none' ? 'flex' : 'none';
};

// Filter Buttons 
document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active-filter'));
        btn.classList.add('active-filter');
        currentFilter = btn.getAttribute('data-filter');
        renderVocab();
    };
});

// 7. Export Vocabulary & Mistakes to JSON file
document.getElementById('export-btn').onclick = () => {
    const backupData = {
        vocab: vocabItems,
        mistakes: JSON.parse(localStorage.getItem('pdd_mistakes')) || []
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("herf", dataStr);
    downloadAnchor.setAttribute("download", "pdd_backup.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
};

// 8. Import Vocabulary & Mistakes from JSON file
const importFileEl =document.getElementById('import-file');
document.getElementById('import-btn').onclick = () => importFileEl.click();

importFileEl.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const imported = JSON.parse(event.target.result);
            if (imported.vocab) {
                vocabItems = imported.vocab;
                localStorage.setItem('pdd_vocab_list', JSON.stringify(vocabItems));
            }
            if (imported.mistakes) {
                localStorage.setItem('pdd_mistakes', JSON.stringify(imported.mistakes));
            }
            renderVocab();
            alert("✅ Backup restored successfuly!");
        }   catch (err) {
            alert("❌ Invalid JSON file!")
        }
    };
    reader.readAsText(file);
};

// Initial Render
renderVocab();
